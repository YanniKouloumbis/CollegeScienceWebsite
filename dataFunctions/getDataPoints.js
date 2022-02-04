import colleges from "../data/colleges.json"
import colors from "../data/colors.json"
//return an object of form
//text:
//position:
//color:
function getDataPoint(name, sliderValues){
    let dataPointObject = {};
    dataPointObject.text = name;
    dataPointObject.position = getRanking(name, sliderValues);
    dataPointObject.color = colors[name];
    return dataPointObject;
    
}

export function getDataPoints(sliderValues){
    let dataPoints = [];
    for(let college in colleges){
        dataPoints.push(getDataPoint(college, sliderValues));
    }
    return dataPoints;
}

function getRanking(name, sliderValues){
    let SAT_AVG = colleges[name].SAT_AVG
    let EARN = colleges[name].PCT90_EARN_WNE_P10
    let COA = colleges[name].COA
    //[x, z, y]
    //[red, green, blue]
    return [SAT_AVG/100*sliderValues[0], (10-COA/5000) * sliderValues[2], EARN/10000.0 * sliderValues[1]];
}