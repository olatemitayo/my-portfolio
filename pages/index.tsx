import AnimatedText from "@/animated-text";
import { Layout } from "@/layout";
import { Flex } from "@mantine/core";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";


interface INavLinks {
  id: number;
  title: string;
  link: string;
}
export default function index() {
  const NavLinks: INavLinks[] = [
    {
      id: 1,
      title: "About me",
      link: "/about",
    },
    {
      id: 2,
      title: "Project",
      link: "/portfolio",
    },
    {
      id: 3,
      title: "Contact me",
      link: "/contact",
    },
  ];
  return (
    <Layout>
      <Flex
        direction="column"
        gap={40}
        className="mx-auto lg:w-[85%]  smd:w-full"
        w="70%"
        h="80vh"
        justify="center"
      >
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-[#55278F] font-semibold text-5xl scmd:text-4xl"
        >
          Hello
        </motion.div>
        <Flex direction='column' gap={20}>
          <AnimatedText
            el="h2"
            text={["My name is Olatunji Temitayo", "I'm a Software Developer"]}
            className="text-4xl scmd:text-2xl ssm:text-xl sssm:text-lg"
            repeatDelay={10000}
          />

          <motion.div className="flex flex-col gap-3"  initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2 }}>
            {NavLinks.map((link) => (
              <Flex>
                
                <Link className='hover:text-[#55278F]' href={link.link} key={link.id}>- {link.title}</Link>
              </Flex>
            ))}
          </motion.div>
        </Flex>
      </Flex>
    </Layout>
  );
}
