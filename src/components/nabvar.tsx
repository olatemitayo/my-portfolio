import { Flex, clsx, Text, Drawer, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'
import router, { useRouter } from 'next/router'
import React from 'react'
import { ContactPopover } from '.';
import { FaInstagram } from 'react-icons/fa';

interface INavLinks {
    id: number;
    title: string;
    link: string;
  }
export  function NavBar() {
   
      const NavLinks: INavLinks[] = [
        {
          id: 1,
          title: "About me",
          link: "/about",
        },
        {
          id: 2,
          title: "My Projects",
          link: "/projects",
        },
        // {
        //   id: 3,
        //   title: "Contact me",
        //   link: "/contact",
        // },
      ];
    const router = useRouter();
    const [opened, { open, close }] = useDisclosure(false);
  return (
    <motion.div   initial={{ y: -500 }}
    animate={{ y: 1 }}
    transition={{ duration: 0.7 }} className='flex justify-between items-center w-full' >
    <Flex c="#55278F" className="font-bold text-[24px] ">
      <Link href='/'>
      OLATUNJI 

      </Link>
    </Flex>
    <Flex gap="clamp(16px,4vw,50px)">
      <Flex align='center' gap={20}>
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
     <div className='cmd:hidden'>
        <ContactPopover />

     </div>
      </Flex>
      <div className="hidden cmd:block">
        <Drawer
          opened={opened}
          classNames={{
            close: "w-[32px] h-[32px] border border-[#55278F] ",
          }}
          onClose={close}
          title={
              <Link href='/'>
            <Flex c="#55278F" className="font-bold text-[24px] ">
              
              OLATUNJI
            </Flex>
              </Link>
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
             
        <ContactPopover />

     
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
  </motion.div >
  )
}
