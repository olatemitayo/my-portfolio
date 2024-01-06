import { Box, Flex, Text } from "@mantine/core";
import React, { useEffect } from "react";
import { TextTitle } from ".";
import { DividerIcon } from "@/icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EducationalHiatory = [
  {
    id: 1,
    period: "JANUARY 2023 - CURRENT",
    name: "Afex Commodity Exchange - Software Engineer",
    tasks: {
      one: "Contributed to the design, construction, and optimization of several websites, including those for e-commerce, agriculture, currency exchange, and human resources.",
      two: "Proved mastery of HTML, CSS, JavaScript, React, Tailwind, TypeScript, and made sure that all browsers were compatible.",
      three:
        "Worked with cross-functional teams to transform design ideas into gorgeous, usable user interfaces with an emphasis on improving user experience.",
      four: "Succinctly incorporated different APIs, including those from third parties, to improve website functionality and user engagement.",
      five: "Demonstrated proficiency in HTML, CSS, JavaScript, React, Tailwind, TypeScript, and ensured cross-browser compatibility.",
      six: "Enhanced user engagement through the inclusion of animations and interactive elements.",
    },
  },
  {
    id: 1,
    period: "MARCH  2022 - DECEMBER 2022",
    name: "Go2Uni - FrontEnd Website Developer",
    tasks: {
      one: "Planned and scheduled meetings, presentations and other work related activities.",
      two: "Built the website and other core applications relating to Go2Uni.",
      three: "Monitored and maintained the website.",
      four: "Increasing user interest by using animations and interactive features.",
    },
  },
  {
    id: 2,
    period: "FEBRUARY 2020 - FEBRUARY 2021",
    name: "Torilo Academy",
    tasks: {
      one: "Adding new features and upgrades to hardware and software that is already in use",
      two: "Addressing requests for technical help for both significant and minor bug fixes and other matters",
      three:
        "Assembling and delivering monthly operational and progress reports to the management team.",
    },
  },
];

export function JobTimeLine() {
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
    <motion.div  ref={ref}
    initial={{ x: 0, opacity: 0 }}
    animate={controls} className="flex items-start gap-[clamp(10px,4vw,53px)] lg:flex-col">
      <TextTitle className="text-center " text="03" title="CAREER MILESTONES" />
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
            <motion.div
             
              className="w-[300px] font-extrabold"
            >
              {item?.period}
            </motion.div>
            <Box className="lg:hidden">
              <DividerIcon />
            </Box>
            <Flex
              w={500}
              className="xl:!w-[400px] lg:!w-full"
              direction="column"
              gap={10}
            >
              <Text className="font-extrabold">{item.name.toUpperCase()}</Text>
              <ul className="list-disc">
                {Object.values(item.tasks).map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </motion.div>
  );
}
