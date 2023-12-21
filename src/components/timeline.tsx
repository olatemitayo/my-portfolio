import { Flex, Text } from "@mantine/core";
import React from "react";
import { TextTitle } from ".";

const EducationalHiatory = [
  {
    id: 1,
    period: "FEBRUARY 2016 - FEBRUARY 2020",
    name: "Federal University of Agriculture, Abeokuta2",
    description:
      "Decision-making and strategic thinking are daily responsibilities for me, and the ability to think critically about and weigh options, making smart product decisions. ",
  },
  {
    id: 2,
    period: "FEBRUARY 2016 - FEBRUARY 2020",
    name: "Federal University of Agriculture, Abeokuta2",
    description:
      "Decision-making and strategic thinking are daily responsibilities for me, and the ability to think critically about and weigh options, making smart product decisions. ",
  },
  {
    id: 3,
    period: "FEBRUARY 2016 - FEBRUARY 2020",
    name: "Federal University of Agriculture, Abeokuta2",
    description:
      "Decision-making and strategic thinking are daily responsibilities for me, and the ability to think critically about and weigh options, making smart product decisions. ",
  },
];

export function TimeLine() {
  return (
    <Flex gap="clamp(10px,4vw,53px)" align="start">
      <TextTitle className=" " text="02" title="EDUCATIONAL BACKGROUND" />
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
