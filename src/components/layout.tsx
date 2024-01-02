import { Box, Button, Drawer, Flex, Group, Text, clsx } from "@mantine/core";
import { clamp, useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";


const herodetails = [
  {
    id: 1,
    figure: "200+",
    text: "completed projects",
  },
  {
    id: 1,
    figure: "60+",
    text: "Happy customers",
  },
  {
    id: 1,
    figure: "5+",
    text: "Years of experience",
  },
  {
    id: 1,
    figure: "3+",
    text: "Industry experience",
  },
];
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
        <Flex direction='column'>
          <Link href={""}></Link>
        </Flex>
        </Flex>
      </div>
    </div>

  
  );
}

// bg - [url("/Frame.svg")];
