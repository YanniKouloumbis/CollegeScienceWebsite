import React from "react";
import {
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Flex,
  Spacer
} from "@chakra-ui/react";
import SliderBox from "./SliderBox";
import Iframe from "react-iframe";
export default function SliderAccordian({
  sliderGroups,
  sliderValues,
  setSliderValues,
}) {
  return (
    <Flex bg="gray.200" flexDir="column" pb={4} minW={400} px={5} shadow="lg" rounded="lg" m={5}>
      <Accordion my={5} allowMultiple={true} allowToggle={true}>
        {sliderGroups.map((group) => (
          <AccordionItem key={group.title}>
            <AccordionButton _hover={{bg:"gray.300", rounded:"md"}}>
              <Box flex="1" textAlign="left">
                <Text fontSize={22} fontWeight="bold">
                  {group.title}
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p={2}>
              <SliderBox
                sliders={group.sliders}
                sliderValues={sliderValues}
                setSliderValues={setSliderValues}
              />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <Spacer />
        <Button colorScheme={"gray"} shadow="sm">
          Tour Top 10
        </Button>
    </Flex>
  );
}
