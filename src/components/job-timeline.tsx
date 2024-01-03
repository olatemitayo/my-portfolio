import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import { TextTitle } from ".";
import { DividerIcon } from "@/icons";

const EducationalHiatory = [
  {
    id: 1,
    period: "AUGUST 2021 - JULY 2022 (NYSC)",
    name: "Ministry of Information and Communication, Ogun State",
    description:
      "Relevant coursework includes Financial Accounting, Managerial Accounting, Corporate Finance, and Investment Analysis.",
  },
  {
    id: 2,
    period: "FEBRUARY 2020 - FEBRUARY 2021",
    name: "Torilo Academy",
    description:
      "I completed comprehensive courses covering HTML, CSS, JavaScript, and React, equipping me with a strong foundation in web development and frontend technologies.",
  },
];

export function JobTimeLine() {
  return (
    <Flex gap="clamp(10px,4vw,53px)" align="start" className="lg:flex-col">
      <TextTitle className="text-center " text="03" title="CAREER MILESTONES" />
      <Flex w="100%" direction="column" gap={40}>
        {EducationalHiatory?.map((item) => (
          <Flex
            key={item?.id}
            c="#121212"
            justify="space-between"
            w="100%"
            align="start"
            className="lg:flex-col"
          >
            <Text maw={300} className="font-extrabold">
              {item?.period}
            </Text>
            <Box className="lg:hidden">
              <DividerIcon />
            </Box>
            <Flex
              w={500}
              className="xl:!w-[400px] lg:!w-full"
              direction="column"
              gap={10}
            >
              <Text className="font-extrabold">{item.name}</Text>
              <Text className="lg:max-w-max">{item?.description}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
