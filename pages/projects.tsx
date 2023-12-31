import { Layout } from "@/layout";
import { NavBar } from "@/nabvar";
import { Box, Button, Flex, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";

const MyProjects = [
  {
    id: "1",
    img: "/snackhouse.png",
    link: "https://snack-house.netlify.app/",
    title: "Snack House",
    github: "https://github.com/olatemitayo/snack-house"
  },
  {
    id: "2",
    img: "/sdash.png",
    link: "https://olatunji-temitayo-s-dash.netlify.app/#",
    github: 'https://github.com/olatemitayo/s-dashboard'
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
      <Flex w="100%" gap={16} justify="space-between" className="scmd:flex-col scmd:gap-8">
        {MyProjects.map((item, index) => (
          <Flex key={item?.id} direction="column" className="w-[45%] scmd:!w-full" gap={10}>
            <Flex key={item?.id} className="rounded-[20px]" h={320}>
              <img className="w-full" src={item?.img} alt={item?.img} />
            </Flex>
            <Flex gap={8}>
            <Link href={item?.link}>
              <Button className="hover:bg-[#3e1e64] bg-[#55278F] max-w-max text-sm">Visit Website</Button>
            </Link>
            <Link href={item?.github}>
            <Button className="hover:bg-[#3e1e64] bg-[#55278F]  max-w-max text-sm">View Code</Button>
            </Link>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Layout>
  );
}
