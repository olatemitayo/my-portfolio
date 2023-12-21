import { Layout, TextTitle, EducationTimeLine } from "@/index";
import { JobTimeLine } from "@/job-timeline";
import { Box, Button, Flex, Text } from "@mantine/core";
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
        {/* hero section  */}
        <Flex
          w="100%"
          justify="space-between"
          // align="center"
          className="clg:flex clg:flex-col clg:gap-4  "
        >
          <Flex
            gap="clamp(16px,2vw,32px)"
            direction="column"
            className="w-[48%] clg:w-full"
          >
            <Flex
              align="start"
              gap="clamp(10px,4vw,53px)"
              className="clg:flex-col clg:text-start"
            >
              <TextTitle text="01" title="ABOUT ME" />
              <Flex direction="column" gap={16}>
                <Flex
                  direction="column"
                  className="text-[clamp(16px,1.5vw,24px)]"
                >
                  <Text>I'M OLATUNJI TEMITAYO</Text>
                  <Text className="font-bold">A FRONTEND WEB DEVELOPER</Text>
                </Flex>

                <Text>
                  I&apos;m 25, Nigerian and a frontend web developer. A
                  results-driven product manager with a passion for steering
                  innovative ideas into market-leading solutions
                </Text>
                <Flex direction="column" gap="clamp(12px,2vw,32px)">
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
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <img
            className="w-[48%] clg:w-full"
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
