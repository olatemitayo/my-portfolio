import { Layout } from "@/layout";
import { NavBar } from "@/nabvar";
import { Box, Button, Flex, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowAltCircleRight, FaArrowCircleRight } from "react-icons/fa";

const MyProjects = [
  {
    id: "1",
    img: "/snackhouse.png",
    link: "https://snack-house.netlify.app/",
    title: "Snack House",
  },
  {
    id: "2",
    img: "/sdash.png",
    link: "https://olatunji-temitayo-s-dash.netlify.app/#",
  },
];
export default function Portfolio() {
  return (
    <Layout>
      <NavBar />
      <Flex w="100%" justify="center" align="center">
        <Flex className="text-center items-center">
          <Box className="rounded-[100%] h-[clamp(32px,4vw,50px)] w-[clamp(32px,4vw,50px)] bg-[#55278F] text-center "></Box>
          <Title className="text-center text-[clamp(28px,4vw,48px)]" ml={-15}>
            My Recent Works
          </Title>
        </Flex>
      </Flex>
      <Flex w="100%" gap={16} justify="space-between">
        {MyProjects.map((item, index) => (
          <Flex direction="column" w="45%" gap={10}>
            <Flex key={item?.id} className="rounded-[20px]" h={320}>
              <img className="w-full" src={item?.img} alt={item?.img} />
            </Flex>
            <Flex gap={8}>
            <Link href={item?.link}>
              <Button>Visit Website</Button>
            </Link>
            <Link href={""}>
            <Button>View Code</Button>
            </Link>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Layout>
  );
}
