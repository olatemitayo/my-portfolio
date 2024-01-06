import { Button, Flex, Popover, Text } from "@mantine/core";
import Link from "next/link";
import {
  FaBeer,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export function ContactPopover() {
  return (
    <Popover  key='pop4' width="target" position="bottom" shadow="md">
      <Popover.Target>
        <Button bg="#55278F" className="hover:bg-[#3e1e64] max-w-max text-sm">
          Contact Me
        </Button>
      </Popover.Target>
      <Popover.Dropdown className="p-2">
        <Flex direction="column" gap={10} className="text-[14px]">
          {/* Email  */}
          <a href="mailto:olatunjitemitayo@gmail.com">
            <Flex align="center" className="cursor-pointer" gap={5}>
              <FaWhatsapp
                size="20px"
                color="#55278F"
                classNames="hover:bg-[#3e1e64]"
              />
              <Text c="#121212">Email</Text>
            </Flex>
          </a>
          {/* linkedIn  */}
          <Link href="https://www.linkedin.com/in/temitayo-olatunji-b77148225/">
            <Flex align="center" className="cursor-pointer" gap={5}>
              <FaLinkedin
                size="20px"
                color="#55278F"
                classNames="hover:bg-[#3e1e64]"
              />
              <Text c="#121212">LinkedIn</Text>
            </Flex>
          </Link>
          {/* instagram  */}
          <Link href="https://www.instagram.com/officialtemms/">
            <Flex align="center" className="cursor-pointer" gap={5}>
              <FaInstagram
                size="20px"
                color="#55278F"
                classNames="hover:bg-[#3e1e64]"
              />
              <Text c="#121212">Instagram</Text>
            </Flex>
          </Link>
          {/* twitter  */}
          <Link href="https://www.twitter.com/officialtemms/">
            <Flex align="center" className="cursor-pointer" gap={5}>
              <FaTwitter
                size="20px"
                color="#55278F"
                classNames="hover:bg-[#3e1e64]"
              />
              <Text c="#121212">Twitter</Text>
            </Flex>
          </Link>
          {/* whatsapp */}

          <Link href="https://wa.me/2347039983077">
            <Flex align="center" className="cursor-pointer" gap={5}>
              <FaWhatsapp
                size="20px"
                color="#55278F"
                classNames="hover:bg-[#3e1e64]"
              />
              <Text c="#121212">Whatsapp</Text>
            </Flex>
          </Link>
        </Flex>
      </Popover.Dropdown>
    </Popover>
  );
}
