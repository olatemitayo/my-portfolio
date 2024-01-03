import { Layout, TextTitle, EducationTimeLine } from "@/index";
import { JobTimeLine } from "@/job-timeline";
import { NavBar } from "@/nabvar";
import { Box, Button, Flex, Text } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";

const herodetails = [
  {
    id: 1,
    figure: "200+",
    text: "completed projects",
  },
  {
    id: 1,
    figure: "60+",
    text: "Happy customers",
  },
  {
    id: 1,
    figure: "5+",
    text: "Years of experience",
  },
  {
    id: 1,
    figure: "3+",
    text: "Industry experience",
  },
];
export default function Home() {
  return (
    <Layout>
      <Flex direction="column" gap="clamp(40px,6vw,96px)">
        {/* navbar  */}
        <NavBar />
        {/* hero section  */}
        <Flex
          w="100%"
          justify="space-between"
          // align="center"
          className="lg:flex lg:flex-col lg:gap-4  "
        >
          <motion.div 
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
           
            className="w-[48%] flex-col lg:w-full gap-[clamp(16px,2vw,32px)]"
          >
            <Flex
              align="start"
              gap="clamp(10px,4vw,53px)"
              className="lg:flex-col lg:text-start gap-[clamp(10px,4vw,53px)]"
            >
              <TextTitle text="01" title="ABOUT ME" />
              <Flex direction="column" gap={16}>
                <Flex
                  direction="column"
                  className="text-[clamp(16px,1.5vw,24px)]"
                >
                  <Text>I&apos;M OLATUNJI TEMITAYO</Text>
                  <Text className="font-bold">A FRONTEND WEB DEVELOPER</Text>
                </Flex>

                <Text>
                As a 25-year-old frontend web developer, I am dedicated to bringing creative visions to life through my expertise in HTML, CSS, and JavaScript. With a strong eye for design, I specialize in crafting user-friendly websites that seamlessly blend aesthetics with functionality. My commitment to staying at the forefront of web development trends ensures that I deliver modern and engaging digital experiences. I thrive in collaborative environments, leveraging my skills to contribute innovative solutions to diverse projects. Eager to tackle new challenges, I bring a dynamic and proactive approach to every aspect of frontend development.
                </Text>
                {/* <Flex direction="column" gap="clamp(12px,2vw,32px)">
                  <Flex
                    w="100%"
                    justify="space-between"
                    gap={16}
                    className="flex-wrap leading-5"
                  >
                    {herodetails?.map((item) => (
                      <Flex c="#121212" direction="column" key={item?.id}>
                        <Text className="font-semibold text-[calmp(16px,1.2vw,20px)]">
                          {item?.figure}
                        </Text>
                        <Text className="text-[clamp(14px,1vw,16px)]">
                          {item?.text}
                        </Text>
                      </Flex>
                    ))}
                  </Flex>
                  <Button
                    px={20}
                    miw={175}
                    mih={52}
                    w="max-content"
                    className="bg-[#55278F] hover:bg-[#4c316e]"
                  >
                    Let&apos; chat
                  </Button>
                </Flex> */}
              </Flex>
            </Flex>
          </motion.div>

          <motion.img
           initial={{ x: 4000 }}
           animate={{ x: 0 }}
           transition={{ duration: 1 }}
            className="w-[48%] lg:w-full"
            src="/dpp.svg"
            alt="heropicture"
          />
        </Flex>
        {/* education  */}
        <EducationTimeLine />
        {/* job  */}
        <JobTimeLine />
      </Flex>
    </Layout>
  );
}
