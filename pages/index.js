import React, { useEffect, useState } from "react";
import CustomSlider from "../components/Slider";
import { getDataPoints } from "../dataFunctions/getDataPoints"
import { Box, Flex } from "@chakra-ui/react";
import Graph from "../components/Graph";
import SliderBox from "../components/SliderBox";
import SliderAccordian from "../components/SliderAccordian";
import { initSliders, generateSliderIndices } from "../dataFunctions/sliderFunctions";
import Background from "../components/Background";
import { compareMagnitudes } from "../dataFunctions/transformDataPoints";


let sliderGroups = [{ 
  title:"📚 Academics",
  sliders: [{
    title: "Standardized Testing",
    emojis: ["😳", "🙂", "🤓"],
    scale: [0, 1],
    initValue: .5,
  },]
},
{ 
title:"💰 Post-Grad",
sliders: [{
  title: "Salary 10 Years Out",
  emojis: ["🙇‍♂️", "💳", "🤑"],
  scale: [0, 1],
  initValue: .5,
},]
},
{ 
  title:"💵 Cost",
  sliders: [{
    title: "Cost of Attendance",
    emojis: ["👍", "💸", "🪦"],
    scale: [0, 1],
    initValue: .5,
  },]
  }]

export default function Index() {
  const [sliderValues, setSliderValues] = useState(initSliders(sliderGroups));
  const [dataPoints, setDataPoints] = useState([]);
  useEffect(() => {
    //[{text:"Hello",position:[0,0,0],color:"#000000"}]
    let temp = getDataPoints(sliderValues);
    temp.sort(compareMagnitudes);
    setDataPoints(temp.splice(0, 50));
  }, [sliderValues]);
  

  
  return (
    <Background>
      <SliderAccordian sliderGroups={generateSliderIndices(sliderGroups)}  sliderValues={sliderValues} setSliderValues={setSliderValues}/>
      <Graph dataPoints={dataPoints}/>
    </Background>
  );
}
