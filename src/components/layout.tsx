import { Box, Flex, Text, clsx } from "@mantine/core";
import { clamp } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface INavLinks {
  id: number;
  title: string;
  link: string;
}
const NavLinks: INavLinks[] = [
  {
    id: 1,
    title: "About me",
    link: "/",
  },
  {
    id: 2,
    title: "My portfolio",
    link: "/portfolio",
  },
  {
    id: 3,
    title: "Contact me",
    link: "/contact",
  },
];
export function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <div className="fixed h-full w-full  z-50   bg-cover bg-[center_top_0.2rem] bg-no-repeat">
      <div className="relative h-full overflow-y-scroll no-scrollbar">
        <Flex
          direction="column"
          px="clamp(20px,5vw,80px)"
          py="clamp(12px,3vw,40px)"
          gap="clamp(30px,6px,90px)"
        >
          {/* navbar  */}
          <Flex justify="space-between" align="center" w="100%">
            <Flex c="#55278F" className="font-bold text-[24px]">
              O.TAYO
            </Flex>
            <Flex gap="clamp(16px,4vw,50px)">
              {NavLinks?.map((item) => (
                <Link className="cmd:hidden" href={item?.link} key={item?.id}>
                  <Text
                    c="#121212"
                    className={clsx(
                      router.pathname === item?.link
                        ? "text-[#55278F] border-b border-[#55278F]"
                        : ""
                    )}
                  >
                    {item?.title}
                  </Text>
                </Link>
              ))}
            </Flex>
          </Flex>
          {/* children  */}
          <div>{children}</div>
        </Flex>
      </div>
    </div>
  );
}

// bg - [url("/Frame.svg")];
