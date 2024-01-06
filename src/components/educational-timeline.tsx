import { Box, Flex, Text } from "@mantine/core";
import React, { useEffect } from "react";
import { TextTitle } from ".";
import { DividerIcon } from "..";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EducationalHiatory = [
  {
    id: 2,
    period: "FEBRUARY 2020 - FEBRUARY 2021",
    name: "Torilo Academy",
    description:
      "I completed comprehensive courses covering HTML, CSS, JavaScript, and React, equipping me with a strong foundation in web development and frontend technologies.",
  },
  {
    id: 1,
    period: "FEBRUARY 2016 - FEBRUARY 2020",
    name: "Federal University of Agriculture, Abeokuta",
    description:
      "Relevant coursework includes Financial Accounting, Managerial Accounting, Corporate Finance, and Investment Analysis.",
  },
 
];

export function EducationTimeLine() {
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
    <motion.div ref={ref}
    initial={{ x: 0, opacity: 0 }}
    animate={controls} className="flex items-start gap-[clamp(10px,4vw,53px)] lg:flex-col">
      <TextTitle className=" " text="02" title="EDUCATIONAL BACKGROUND" />
      <Flex w="100%" direction="column" gap={40}>
        {EducationalHiatory?.map((item) => (
          <Flex
            key={item?.id}
            c="#121212"
            justify="space-between"
            w="100%"
            align="start"
            className="lg:flex-col text-sm"
          >
            <Text w={300}  className="font-extrabold">{item?.period}</Text>
            <Box className="lg:hidden">
              <DividerIcon />
            </Box>
            <Flex  w={500} className="xl:!w-[400px] lg:!w-full" direction="column" gap={10}>
              <Text className="font-extrabold">{item.name.toUpperCase()}</Text>
              <Text  className="lg:max-w-max">
                {item?.description}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </motion.div>
  );
}
