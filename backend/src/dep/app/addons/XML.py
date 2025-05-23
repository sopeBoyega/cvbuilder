import xml.etree.ElementTree as ET
from xml.dom.minidom import parseString
import json



def xmlToJson(xml_string,toString = False):
    def parse_element(element):
        data = {}

        if element.attrib:
            data["@attributes"] = element.attrib
        
        for child in element:
            child_data = parse_element(child)
            if child.tag in data:
                if isinstance(data[child.tag], list):
                    data[child.tag].append(child_data)
                else:
                    data[child.tag] = [data[child.tag], child_data]
            else:
                data[child.tag] = child_data
        

        text = element.text.strip() if element.text else ""
        if text and not data:
            return text
        if text:
            data["#text"] = text
        
        return data

    root = ET.fromstring(xml_string)
    json_data = {root.tag: parse_element(root)}
    
    return json.dumps(json_data, indent=4) if toString else json_data




def jsonToXml(json_data, root_tag="root",toString=False):
    def build_element(parent, data):
        if isinstance(data, dict):
            for key, value in data.items():
                if key == "@attributes":  
                    for attr, attr_value in value.items():
                        parent.set(attr, attr_value)
                elif key == "#text":  
                    parent.text = value
                elif isinstance(value, list):  # Handle list (multiple elements)
                    for item in value:
                        child = ET.SubElement(parent, key)
                        build_element(child, item)
                else:  # Handle normal child elements
                    child = ET.SubElement(parent, key)
                    build_element(child, value)
        else:
            parent.text = str(data)

    if isinstance(json_data, str):
        json_data = json.loads(json_data)

    root_name = list(json_data.keys())[0]
    root_data = json_data[root_name]

    root = ET.Element(root_name)
    build_element(root, root_data)

    return ET.tostring(root, encoding="unicode") if toString else root


