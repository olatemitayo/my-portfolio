import { ContactPopover } from '@/contact-popover';
import { Flex, Text } from '@mantine/core'
import Link from 'next/link';
import React from 'react'

interface INavLinks {
    id: number;
    title: string;
    link: string;
  }
export default function Footer() {
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
  return (
    <div>
        <Flex>
        <Flex direction="column" gap={16}>
            {NavLinks?.map((item) => (
              <Link href={item?.link} key={item?.id}>
                <Text
                  c="#121212"
                  
                >
                  {item?.title}
                </Text>
              </Link>
            ))}
             
        <ContactPopover />
        <Flex>
            hi
        </Flex>
        </Flex>
        </Flex>
    </div>
  )
}
