import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import CharacterCount from '@tiptap/extension-character-count'
import StarterKit from "@tiptap/starter-kit";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Code from "@tiptap/extension-code";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Color from "@tiptap/extension-color";
import BlockQuote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import {
  LuAlignCenter,
  LuAlignJustify,
  LuAlignLeft,
  LuAlignRight,
  LuArrowDown,
  LuBold,
  LuCode,
  LuImage,
  LuItalic,
  LuLink,
  LuList,
  LuListOrdered,
  LuQuote,
  LuRedo,
  LuStrikethrough,
  LuUnderline,
  LuUndo,
} from "react-icons/lu";
import { MenuItem, MenuContent, MenuRoot, MenuTrigger } from "../ui/menu";
import { Button } from "../ui/button";
import IconItem from "../global/icon";
import { Input } from "@chakra-ui/react";

const TextEditor = () => {
  const [selectedValue, setSelectedValue] = useState<string>("Normal Text");
  const [value, setValue] = useState<string>("");
  const [disabled, setDisable] = useState<boolean>(true);
  const [heading, setHeading] = useState<string>("Head of Sale position");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      CharacterCount.configure({
        limit: 240,
      }),      
      Heading.configure({ levels: [1, 2, 3] }),
      Bold,
      Code,
      Italic,
      BlockQuote,
      Underline,
      TextStyle,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Strike,
      BulletList,
      OrderedList,
      ListItem,
      Link,
      Image,
      Color,
    ],
    content: "<p> Write Your Post....</p>",
    immediatelyRender: false,
  });

  const addImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        editor?.chain().focus().setImage({ src: imageDataUrl }).run();
      };
      reader.readAsDataURL(file); // Converts the image to a Base64 string
    }
  };

  const handleMenuItemClick = (value: any, action: any) => {
    setSelectedValue(value); // Update the current menu value
    action(); // Perform the editor action
  };

  const renderIcon = () => {
    switch (value) {
      case "Left":
        return <LuAlignLeft />;
        break;
      case "Center":
        return <LuAlignCenter />;
        break;
      case "Right":
        return <LuAlignRight />;
        break;
      case "Justify":
        return <LuAlignJustify />;
        break;
      case "Reset":
        return <p>Select Alignment</p>;
        break;

      default:
        return <LuAlignLeft />;
        break;
    }
  };

  return (
  // Sizing of the Editing area needs be fixed when extended
    <div className="flex flex-col w-[70%] gap-7  ">
      <div className="flex justify-between items-center bg-white p-2 rounded-lg">
        <Input
          placeholder="Heading"
          value={heading}
          onChange={(event: any) => {
            setHeading(event.target.value);
          }}
          variant="flushed"
          className="font-[600] text-[17px] text-black disabled:text-black disabled:opacity-100"
          disabled={disabled}
        />
        <div className="" onClick={() => setDisable(!disabled)}>
          <IconItem name="edit" color="" />
        </div>
      </div>

      <div className="p-1 bg-gray-50 border w-full  h-fit place-self-center bg-transparent border-gray-300 rounded-3xl shadow-sm">
        <div className="flex items-center justify-end p-[20px] gap-3">
          <p>Visual</p>
          <p>Text</p>
        </div>
        {/* Toolbar */}
        <div className="flex flex-wrap justify-between border-y-2 border-y-white items-center gap-1.5 mb-1">
          {/* Undo/Redo */}
          <button
            onClick={() => editor?.chain().focus().undo().run()}
            className="p-2 rounded text-white hover:bg-gray-300"
          >
            <LuUndo />
          </button>
          <button
            onClick={() => editor?.chain().focus().redo().run()}
            className="p-2 rounded text-white hover:bg-gray-300"
          >
            <LuRedo />
          </button>

          {/* Headings Dropdown */}
          {/* Not yet done with this */}
          <MenuRoot>
            <MenuTrigger asChild>
              <Button
                variant="subtle"
                colorPalette="purple"
                size="sm"
                className="text-white"
              >
                {selectedValue} <LuArrowDown />
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem
                value="Normal Text"
                onClick={() =>
                  handleMenuItemClick("Normal Text", () =>
                    editor?.chain().focus().setParagraph().run()
                  )
                }
              >
                Normal Text
              </MenuItem>
              <MenuItem
                value="H1"
                onClick={() =>
                  handleMenuItemClick("H1", () =>
                    editor?.chain().focus().toggleHeading({ level: 1 }).run()
                  )
                }
              >
                Heading 1 (H1)
              </MenuItem>
              <MenuItem
                value="H2"
                onClick={() =>
                  handleMenuItemClick("H2", () =>
                    editor?.chain().focus().toggleHeading({ level: 2 }).run()
                  )
                }
              >
                Heading 2 (H2)
              </MenuItem>
              <MenuItem
                value="H3"
                onClick={() =>
                  handleMenuItemClick("H3", () =>
                    editor?.chain().focus().toggleHeading({ level: 3 }).run()
                  )
                }
              >
                Heading 3 (H3)
              </MenuItem>
            </MenuContent>
          </MenuRoot>

          <MenuRoot>
            <MenuTrigger asChild>
              <Button
                variant="subtle"
                colorPalette="purple"
                size="sm"
                className="text-white"
              >
                {renderIcon()}
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem
                value="Left"
                onClick={() => {
                  setValue("Left");
                  editor?.chain().focus().setTextAlign("left").run();
                }}
              >
                Left
              </MenuItem>
              <MenuItem
                value="Center"
                onClick={() => {
                  setValue("Center");
                  editor?.chain().focus().setTextAlign("center").run();
                }}
              >
                Center
              </MenuItem>
              <MenuItem
                value="Right"
                onClick={() => {
                  setValue("Right");
                  editor?.chain().focus().setTextAlign("right").run();
                }}
              >
                Right
              </MenuItem>
              <MenuItem
                value="Justify"
                onClick={() => {
                  setValue("Justify");
                  editor?.chain().focus().setTextAlign("justify").run();
                }}
              >
                Justify
              </MenuItem>
              <MenuItem
                value="Reset"
                onClick={() => {
                  setValue("Align Text"); // Reset value to default
                  editor?.chain().focus().unsetTextAlign().run();
                }}
              >
                Reset Align
              </MenuItem>
            </MenuContent>
          </MenuRoot>

          <input
            className="w-[20px] h-[20px] bg-transparent rounded-[15px] border-none"
            type="color"
            value={editor?.getAttributes("textStyle").color || "#000000"}
            onChange={(event) =>
              editor?.chain().focus().setColor(event.target.value).run()
            }
          />

          {/* List Formatting */}
          <button
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded ${
              editor?.isActive("bulletList")
                ? "bg-[#2563EB] text-white"
                : "text-white"
            }`}
          >
            <LuList />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded ${
              editor?.isActive("orderedList")
                ? "bg-[#2563EB] text-white"
                : "text-white"
            }`}
          >
            <LuListOrdered />
          </button>

          {/* Text Formatting */}
          <button
            onClick={() => editor?.chain().focus().toggleBold().run()}
            className={`p-2 rounded ${
              editor?.isActive("bold")
                ? "bg-[#2563EB] text-white"
                : "text-white"
            }`}
          >
            <LuBold />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            className={`p-2 rounded ${
              editor?.isActive("italic")
                ? "bg-[#2563EB] text-white"
                : "text-white"
            }`}
          >
            <LuItalic />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleUnderline().run()}
            className={`p-2 rounded ${
              editor?.isActive("underline")
                ? "bg-[#2563EB] text-white"
                : "text-white"
            }`}
          >
            <LuUnderline />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleStrike().run()}
            className={`p-2 rounded ${
              editor?.isActive("strike")
                ? "bg-[#2563EB] text-white"
                : "text-white"
            }`}
          >
            <LuStrikethrough />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleCode().run()}
            className={`p-2 rounded ${
              editor?.isActive("code")
                ? "bg-[#2563EB] text-white"
                : "text-white"
            }`}
          >
            <LuCode />
          </button>

          {/* Add Image */}
          <label className="p-2  text-white hover:bg-gray-300 cursor-pointer">
            <LuImage />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={addImage}
            />
          </label>

          {/* Link */}
          <button
            onClick={() => {
              const url = prompt("Enter the link URL:");
              if (url) {
                editor?.chain().focus().setLink({ href: url }).run();
              }
            }}
            className="p-2 rounded text-white hover:bg-gray-300"
          >
            <LuLink />
          </button>

          <button
            onClick={() => editor?.chain().focus().toggleBlockquote().run()}
            className={`p-2 rounded ${
              editor?.isActive("blockquote")
                ? "bg-[#2563EB] text-white"
                : "text-white"
            }`}
          >
            <LuQuote />
          </button>
        </div>

        {/* Editor Content */}
        <div className="prose lg:prose-lg ">
          <EditorContent
            editor={editor}
            className=" custom-editor p-5 text-white h-[400px] bg-transparent rounded focus:outline-none focus-visible:outline-none"
          />
        </div>
      
      </div>
      <div className="bg-white text-[#475569] w-full p-3 rounded-b-3xl mt-[-47px] h-fit flex justify-start items-center">
        <p className="pr-3">Word Count:{editor?.storage?.characterCount.characters()}</p>
        <p>Reading Time:~ 4min</p>
      </div>
    </div>
  );
};

export default TextEditor;
