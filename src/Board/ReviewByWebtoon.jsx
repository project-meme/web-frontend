import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";

export default function ReviewByWebtoon() {
    const location = useLocation();
    const data = location.state;
    console.log(data,"locadata");

    useEffect(() => {
        const checkAppAndRedirect = () => {
            
        const currentPath = location.pathname; // 현재 경로
       

        const isAndroid = /Android/.test(navigator.userAgent);

        const storeLink = isAndroid
        ? "https://play.google.com/store/apps/details?id=com.isekai.isekai"
        : "https://apps.apple.com/kr/app/isekai/id6473546532";
        
        const appUrl = `isekai:/${currentPath}`;
        // alert(appUrl); // 동적으로 딥링크 생성
        // const appStoreUrl = "https://apps.apple.com/kr/app/isekai/id6473546532"; // 앱스토어 URL
          
      const redirectToApp = () => {
        // 앱 딥링크로 이동
        window.location.replace(appUrl);

        // 앱이 설치되지 않았을 경우, 앱스토어로 이동
        setTimeout(() => {
          window.location.replace(storeLink);
        }, 1500); // 2초 대기 후 앱스토어 이동
      };
      redirectToApp();
    }
    checkAppAndRedirect();
}, [location.pathname]);

return(
    <div>
        </div>
)
}