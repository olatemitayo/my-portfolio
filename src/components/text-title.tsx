import { Flex, Text, Title, clsx } from "@mantine/core";
import React, { ReactNode } from "react";

export function TextTitle({
  text,
  title,
  className,
}: {
  text: string;
  title: string;
  className?: string;
}) {
  return (
    <Flex direction="column" align="center">
      <Text c="#B3B3B3" className=" leading-none text-[clamp(32px,4vw,64px)] ">
        {text}
      </Text>
      <Text
        className={clsx(
          "w-max max-w-[71px] text-[clamp(12.5px,1vw,16px)]",
          className
        )}
        c="#121212"
      >
        {title}
      </Text>
    </Flex>
  );
}
