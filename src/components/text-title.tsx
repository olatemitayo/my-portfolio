import { Flex, Text, Title } from "@mantine/core";
import React, { ReactNode } from "react";

export function TextTitle({ text, title }: { text: string; title: string }) {
  return (
    <Flex direction="column" align="center">
      <Text c="#B3B3B3" className="text-[clamp(48px,4vw,64px)] ">
        {text}
      </Text>
      <Text className="whitespace-nowrap" c="#121212">
        {title}
      </Text>
    </Flex>
  );
}
