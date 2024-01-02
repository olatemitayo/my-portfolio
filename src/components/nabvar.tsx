import { Flex, clsx, Text, Drawer, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link'
import router, { useRouter } from 'next/router'
import React from 'react'

interface INavLinks {
    id: number;
    title: string;
    link: string;
  }
export default function NavBar() {
   
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
    const router = useRouter();
    const [opened, { open, close }] = useDisclosure(false);
  return (
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
      <div className="hidden cmd:block">
        <Drawer
          opened={opened}
          classNames={{
            close: "w-[32px] h-[32px] border border-[#55278F] ",
          }}
          onClose={close}
          title={
            <Flex c="#55278F" className="font-bold text-[24px] ">
              O.TAYO
            </Flex>
          }
          position="right"
          overlayProps={{ opacity: 0.5, blur: 4 }}
          transitionProps={{ duration: 600, transition: "slide-left" }}
        >
          <Flex direction="column" gap={16}>
            {NavLinks?.map((item) => (
              <Link href={item?.link} key={item?.id}>
                <Text
                  c="#121212"
                  className={clsx(
                    router.pathname === item?.link
                      ? "text-[#55278F] max-w-max border-b border-[#55278F]"
                      : ""
                  )}
                >
                  {item?.title}
                </Text>
              </Link>
            ))}
          </Flex>
        </Drawer>

        <Group position="center">
        
          <Image
            onClick={open}
            className="hover:cursor-pointer"
            src="/hamburger.svg"
            alt="hamburger"
            width={28}
            height={28}
          />
        </Group>
      </div>
    </Flex>
  </Flex>
  )
}
