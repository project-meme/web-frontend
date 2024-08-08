import React from "react";
import useWindowDimensions from "../Components/Common/UseWindowDimensions";

export default function Shorts() {

  const {width, height} = useWindowDimensions();

  const data = [
    {"thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/341f05be-5454-405a-8898-adc5ec4a0d21-IMG_9854.jpg"},
    {"thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/341f05be-5454-405a-8898-adc5ec4a0d21-IMG_9854.jpg"},
    {"thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/341f05be-5454-405a-8898-adc5ec4a0d21-IMG_9854.jpg"},
    {"thumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/profile/341f05be-5454-405a-8898-adc5ec4a0d21-IMG_9854.jpg"},
  ]


  return (
  <div>
    {data.map((item,index)=>(
      <div style={{display :'flex', width : width, height: height, alignItems : 'center', backgroundColor : '#111111' ,justifyContent:'center'}}>
        <img src={item.thumbnail} style={{width : width}} alt=""/>
      </div>
    ))}
  </div>
  );
}