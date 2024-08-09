import React from "react";
import KakaoAdFit from "./KakaoAdfit";

export default function KakaoTest(){
    return(
        <div style={{width : "100%", height : 100,}}>
        <KakaoAdFit
            unit = {"DAN-BqLwxSeCt1hDkazw"}
            width = {"320"}
            height={"100"}
            disabled={false}
        />
        </div>
    )
}