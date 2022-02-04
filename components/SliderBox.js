import React from "react";
import { Box } from "@chakra-ui/react";
import CustomSlider from "./Slider";
export default function SliderBox({ sliders, sliderValues, setSliderValues }) {

  return (<Box>
      {sliders.map((params)=><CustomSlider key={params.title} sliderIndex={params.index} sliderParameters={params}  sliderValues={sliderValues} setSliderValues={setSliderValues}/>)}
  </Box>);
}
