import { Flex } from "@mantine/core";
import React, { ReactNode } from "react";


export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="fixed bg-[#FFFAF5] h-screen w-screen bg-[url('/Frame.svg')] z-50 bg-cover bg-center bg-no-repeat">
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
