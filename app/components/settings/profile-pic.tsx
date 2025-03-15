"use client"

import {
  Button,
  FileUpload,
  Float,
  useFileUploadContext,
} from "@chakra-ui/react"
import { LuFileImage, LuX } from "react-icons/lu"

const FileUploadList = () => {
  const fileUpload = useFileUploadContext()
  const files = fileUpload.acceptedFiles

  if (files.length === 0) return null

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {files.map((file) => (
        <div key={file.name} className="relative w-full h-full">
          <FileUpload.Item file={file} w="full" h="full">
            <FileUpload.ItemPreviewImage className="w-full h-full object-cover rounded-xl z-30" />
            <Float placement="top-end">
              <FileUpload.ItemDeleteTrigger className="absolute top-2 right-2 z-50 bg-white rounded-full p-1 shadow-sm">
                <LuX className="w-4 h-4 text-red-500" />
              </FileUpload.ItemDeleteTrigger>
            </Float>
          </FileUpload.Item>
        </div>
      ))}
    </div>
  )
}

export const ProfilePic = () => {
  return (
    <FileUpload.Root accept="image/*">
      <div className="relative border-2 border-dashed border-gray-500 rounded-xl w-40 h-40 flex items-center justify-center overflow-hidden">
        <FileUpload.HiddenInput />
        <FileUploadList />
        
        <FileUpload.Trigger asChild>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 cursor-pointer">
            <LuFileImage size={40} />
            <p className="mt-2 text-sm font-medium">Upload your photo</p>
            <Button className="mt-4" variant="outline" size="sm">Choose File</Button>
          </div>
        </FileUpload.Trigger>
      </div>
    </FileUpload.Root>
  )
}
