import { Flex, Text } from "@mantine/core";
import React from "react";
import { TextTitle } from ".";

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
    <Flex gap="clamp(10px,4vw,53px)" align="start" className="clg:flex-col">
      <TextTitle className="text-center " text="03" title="CAREER MILESTONES" />
      <Flex w="100%" direction="column" gap={40}>
        {EducationalHiatory?.map((item) => (
          <Flex
            key={item?.id}
            c="#121212"
            justify="space-between"
            w="100%"
            align="start"
            className="clg:flex-col"
          >
            <Text className="font-extrabold">{item?.period}</Text>
            <img
              className="clg:hidden"
              src="/dividerIcon.svg"
              width={17}
              alt=""
            />
            <Flex direction="column" gap={10}>
              <Text className="font-extrabold">{item.name}</Text>
              <Text maw={370} className="clg:max-w-max">
                {item?.description}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
