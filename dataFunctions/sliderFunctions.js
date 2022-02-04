export function initSliders(sliderGroups){

    let arr = [];
    sliderGroups.map(group => {
      group.sliders.map(slider => arr.push(slider.initValue))
    });
    return arr;
  
  }

export function generateSliderIndices(sliderGroups){
    let index = 0;
    sliderGroups.map(group => {
      group.sliders.map(slider => {slider.index = index; index++;})
    });
    return sliderGroups;
  }