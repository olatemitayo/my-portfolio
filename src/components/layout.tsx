import { Flex } from "@mantine/core";
import React, { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div  className="background-container  overflow-auto">
      <div className="relative h-full overflow-y-scroll no-scrollbar">
        <Flex
          direction="column"
          px="clamp(20px,5vw,80px)"
          py="clamp(12px,3vw,40px)"
          gap="clamp(30px,6px,90px)"
        >
          {/* children  */}
          {children}
        </Flex>
      </div>
    </div>
  );
}

