import sys
import os

def UseClientHashTagFile(path:str):
    if path.lower().strip().endswith(("ts","tsx","jsx","js")):
        with open(path,"r+") as file:
            if not file.read().strip().strip("\n").lower().startswith("use client".strip()):
                useClient = "use client\n"
                newNextCode = useClient + file.read()
                if file.writable():
                    file.write(newNextCode)

def __main__(*args):
    path:str = args[1] if args.__len__() > 0 else None 
    isFile:str = bool(args[2]) if args.__len__() > 1 else False 
    print(args)
    if path:
        if not isFile:
            folder = os.listdir(path)
            for filepath in folder:
                UseClientHashTagFile(filepath)
        else:
            UseClientHashTagFile(path)
        
                        


__name__ == "__main__" and __main__(*sys.argv)