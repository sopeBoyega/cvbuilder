import Image from "next/image";
import React from "react";
import { Field, Textarea } from "@chakra-ui/react";

type Props = {};

const WordCloud = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-center place-self-center gap-5 flex-col ">
      <Image
        src="/wordCloudImg.svg"
        width={0}
        height={0}
        layout="responsive"
        alt="wordCloudImg"
        className="scale-[0.9]"
      />

      <Field.Root>
        <Field.Label>Result of Uploaded CV For Word Cloud</Field.Label>
        <Textarea placeholder="Then the Result Generated is ....." className="p-3" />
      </Field.Root>
    </div>
  );
};

export default WordCloud;
