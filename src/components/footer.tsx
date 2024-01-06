import { ContactPopover } from "@/contact-popover";
import { Flex, Text } from "@mantine/core";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

interface INavLinks {
  id: number;
  title: string;
  link: string;
}
export function Footer() {
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
  ];
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Set up the animation logic
  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1.75, ease: "easeInOut" },
      });
    } else {
      controls.start({
        x: 0,
        opacity: 0,
      });
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      initial={{ x: 0, opacity: 0 }}
      animate={controls}
      className="w-[80%] flex justify-between mx-auto lg:flex-col lg:gap-4 lg:items-center"
    >
      <Flex
        direction="column"
        w="100%"
        className="lg:items-center "
       
        gap={16}
      >
        {NavLinks?.map((item) => (
          <Link href={item?.link} key={item?.id}>
            <Text w="100%" className="text-sm" c="#121212">
              {item?.title}
            </Text>
          </Link>
        ))}

      </Flex>
      <Flex direction="column" gap={24} className="text-sm w-full lg:items-center items-end lg:!gap-4">
        <Flex gap={12} align="center">
          <FaPhone />
          <Text>+2347067100222</Text>
        </Flex>
        <a href="mailto:Olatunjitemitayo444@gmail.com">
        <Flex gap={12} align="center">
          <FaEnvelope />
          <Text>Olatunjitemitayo444@gmail.com</Text>
        </Flex>

        </a>
        
      
        {/* Social media icons only  */}
        <Flex gap={24}>
          {/* instagram  */}
          <Link href="https://www.instagram.com/officialtemms/">
            <FaInstagram
              size="20px"
              color="#55278F"
              classNames="hover:bg-[#3e1e64]"
            />
          </Link>
          {/* twitter  */}
          <Link href="https://www.twitter.com/officialtemms/">
            <FaTwitter
              size="20px"
              color="#55278F"
              classNames="hover:bg-[#3e1e64]"
            />
          </Link>
          {/* whatsapp */}

          <Link href="https://wa.me/2347039983077">
            <FaWhatsapp
              size="20px"
              color="#55278F"
              classNames="hover:bg-[#3e1e64]"
            />
          </Link>
        </Flex>
        <Flex></Flex>
      </Flex>
    </motion.div>
  );
}
