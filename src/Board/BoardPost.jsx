import React, {useEffect} from "react";
import TitleHeader from "../Components/Layout/Header/TitleHeader";
import { useLocation } from "react-router-dom";
import { elapsedTime } from "../utils/TimeConverter";
import styles from "./Board.module.css"
import thumbs from "../Aseets/thumbs_black.png"
import scrap from "../Aseets/star_black.png"
import KakaoAdFit from "../Components/Common/KakaoAdfit";

export default function BaordPost() {
    const location = useLocation();
    const data = location.state;
    console.log(data,"locadata");

    // const { postId } = useParams(); // React Router로 path parameter 추출

    useEffect(() => {
        const checkAppAndRedirect = () => {
            
        const currentPath = location.pathname; // 현재 경로
        const appUrl = `isekai://${currentPath}`; // 동적으로 딥링크 생성
          const appStoreUrl = "https://apps.apple.com/kr/app/isekai/id6473546532"; // 앱스토어 URL
          
          const redirectToApp = () => {
            // 앱 딥링크로 이동
            window.location.replace(appUrl);
    
            // 앱이 설치되지 않았을 경우, 앱스토어로 이동
            setTimeout(() => {
              window.location.replace(appStoreUrl);
            }, 2000); // 2초 대기 후 앱스토어 이동
          };
    
          const isMobile = /Android|iPhone|iPad|iPod/.test(navigator.userAgent);
          if (isMobile) {
            // 모바일 환경에서만 동작
            redirectToApp();
          } else {
            // PC의 경우 메시지 표시
            alert("앱에서만 지원하는 기능입니다. 앱을 다운로드해주세요!");
          }
        };
    
        checkAppAndRedirect();
      }, [location.pathname]);

    return(
        <div>
            <TitleHeader title={data.title}/>
            <div className={styles.flexContainer}>
                <div className={styles.postContainer}>
                <p className={styles.titleTxt}>{data.data.content}</p>
                <p className={styles.postinfoTxt}>{data.data.author}|{elapsedTime(data.data.createdAt)}</p>
                <p className={styles.contentTxt}>{data.data.content}</p>
                <div className={styles.imgContainer}>
                {data.data.imageList.map((item, index)=>(
                    <div>
                        <img className={styles.smallImg} src={item} alt="ss"/>
                    </div>

                ))}
                </div>
                {/* <img src={data.data.imageList}/> */}
                </div>
                <div style={{display : "flex", flexDirection : 'row', justifyContent : 'space-between', width : "100%"}}>
                    <div className={styles.likeContainer}>
                        <img className={styles.postIcon} src={thumbs} alt="공감"/>
                        <p className={styles.likeTxt}>공감</p>
                    </div>
                    <div className={styles.likeContainer}>
                        <img className={styles.postIcon} src={scrap} alt="공감"/>
                        <p className={styles.likeTxt}>저장</p>
                    </div>
                </div>
            </div>
            <div style={{width : "100%", backgroundColor : "#606060", height : 10, marginTop : 20,}}/>
            <div style={{width : "100%", height : 100,}}>
            <KakaoAdFit
                unit = {"DAN-BqLwxSeCt1hDkazw"}
                width = {"320"}
                height={"100"}
                disabled={false}
            />
            </div>
            <div style={{display : "flex", flexDirection : "row", marginLeft : 20,}}>
                <p>댓글 {data.data.commentCnt}</p>
            </div>


        </div>
    )
}