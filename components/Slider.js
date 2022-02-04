import React from "react";
import {
  Box,
  Heading,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  Text,
} from "@chakra-ui/react";

//every single time a single slider changes, it recalculates everything
export default function CustomSlider({
  sliderParameters,
  sliderIndex,
  sliderValues,
  setSliderValues,
}) {
  const sliderValue =  sliderValues[sliderIndex];
  let emoji = sliderParameters.emojis;
  let min = sliderParameters.scale[0];
  let max = sliderParameters.scale[1];
  return (
    <Box pt={3} pl={6} pr={8} rounded="lg" shadow="md" bg="gray.100">
    <Text fontSize={20} fontWeight="medium">{sliderParameters.title}</Text>
    <Slider
      h="3vh"
      step={0.01}
      min={min}
      max={max}
      defaultValue={sliderParameters.initValue}
      onChange={(v) => {
        let temp = [...sliderValues];
        temp[sliderIndex] = v;
        setSliderValues(temp);
      }}
    >
      <SliderTrack bg="white">
        <SliderFilledTrack bg="black" />
      </SliderTrack>
      <SliderThumb boxSize={6}>
        {max*.25 < sliderValue && sliderValue < max*.75
          ? emoji[1]
          : sliderValue < max*.25
          ? emoji[0]
          : emoji[2]}
      </SliderThumb>
    </Slider>
    </Box>
  );
}
