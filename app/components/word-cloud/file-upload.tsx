import React from "react";
import { Box, FileUpload, Icon } from "@chakra-ui/react";
import { LuUpload } from "react-icons/lu";

type Props = {};

const File = (props: Props) => {
  return (
    <div>
      {" "}
      <FileUpload.Root
         accept={["application/pdf","application/msword",""]}
        maxFiles={1}
        className="w-[95%] h-[80vh] place-self-center border-dotted border-[3px] flex items-center justify-center rounded-lg bg-transparent border-[#374151]"
      >
        <FileUpload.HiddenInput />
        <FileUpload.Dropzone>
          <Icon font="300" className="scale-[5] place-self-center font-[200]" color="fg.muted">
            <LuUpload />
          </Icon>
          <FileUpload.DropzoneContent className="mt-7 text-center">
            <Box className="text-center">Drag and drop files here</Box>
            <Box color="fg.muted">Support formats: PDF , DOC , DOCX</Box>
          </FileUpload.DropzoneContent>
        </FileUpload.Dropzone>
        <FileUpload.List />
      </FileUpload.Root>
    </div>
  );
};

export default File;
