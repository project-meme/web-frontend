// import Button from "../Components/NewHome/ui/Button";
// import Card from "../Components/NewHome/ui/Card";
import styles from "./NewHome.module.css"
import image1 from "../Aseets/mockup2.png"
import logo_white from "../Aseets/LOGO_ISEKAI_BLACK.png"
import apple from "../Aseets/apple.png"
import googleplay from "../Aseets/googleplay.png"
import styled from 'styled-components';
import isekaiearth from "../Aseets/isekai5.png"
import image3 from "../Aseets/mockup3.png"
import MovingImages from "../Components/NewHome/MovingImages"

export default function NewHome() {

  const Container = styled.div`
  background-color : var(--color_black);
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width : 180px;
  height : 60px;
  justify-content : center;
`;

const Text = styled.h6`
  font-family: 'Pretendard-Bold';
  font-size : 16px;
  color : var(--color_white);
`;

const SubText = styled.h6`
  font-family: 'Pretendard-Light';
  font-size : 12px;
  color : var(--color_white);
`;

const Title = styled.h1`
  font-family: 'Pretendard-Bold';
  font-size : 60px;
  text-align: left;
`

const SubTitle = styled.h1`
  font-family: 'Pretendard-SemiBold';
  font-size : 24px;
  color : var(--color_gray0);
  text-align: left;
  margin-top : 20px;
  line-height : 36px;
  letter-spacing : -0.8px;
`




  return (
    <>
    <div className={styles.mainContainer}>
      <div className={styles.leftCircle}></div>
      <div className={styles.header}>
        <img src={logo_white} alt="logo" className={styles.logo} />
      </div>
      <div className={`${styles.row}`} style={{alignItems : 'center'}}>
            <div>
              <div style={{display :'flex', flexDirection : 'column', marginBottom : 60, alignItems : 'flex-start'}}>
                {/* <img src={logo_white} alt="logo" style={{width : 200, marginBottom : 40}}/> */}
                <h1 className={styles.title}>웹툰덕질은</h1>
                {/* <img src={logo_white} alt="logo" style={{width : 200}}/> */}
                <h1 className={`${styles.title}`}>이세계에서.</h1>
                <SubTitle>무려 트럭에 안치여도 갈 수 있는 이세계</SubTitle>
              </div>
                <div style={{display:"flex", flexDirection : 'row', marginTop : 20}}>
                <a 
                  href="https://apps.apple.com/kr/app/isekai/id6473546532" 
                  target="_blank" rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Container style={{marginRight : 8}}>
                    <img src={apple} alt="apple" style={{width : 35,height : 35, marginRight : 8}}/>
                    <div>
                    <SubText>Download on the</SubText>
                    <Text>App Store</Text>
                    </div>
                  </Container>
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.isekai.isekai" 
                  target="_blank" rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Container>
                    <img src={googleplay} alt="apple" style={{width : 35,height : 35, marginRight : 8}}/>
                    <div>
                    <SubText>Download on the</SubText>
                    <Text>Google Play</Text>
                    </div>
                    </Container>
                    </a>
                </div>
            </div>
            <img className={styles.image} style={{paddingRight : '20px'}} src={isekaiearth} alt="my"/>
      </div>
    </div>

    <div className={styles.partContainer}style={{backgroundColor : "white"}} >
      <div style={{display :'flex', flexDirection :'row', marginTop : 150, justifyContent : 'space-between',}}>
      <img src={image3} alt="iphone" style={{width : 400,}}/>
      <div style={{display :'flex', flexDirection : 'column', alignItems : 'flex-start', marginTop : 150, marginRight : 140}}>
      <Title>독자들만의<br />장르별 커뮤니티</Title>
      <SubTitle>같은 장르를 좋아하는 사람들과<br />마음껏 이야기 할 수 있어요</SubTitle>
      </div>
      </div>
    </div>
    <div className={styles.partContainer}>
      <div style={{display :'flex', flexDirection :'row', marginTop : 150, justifyContent : 'space-between',}}>

      <div style={{display :'flex', flexDirection : 'column', alignItems : 'flex-start', marginTop : 180,width : '50%', justifyContent : 'flex-start'}}>
      <Title>매일 채워가는<br />덕질 캘린더</Title>
      <SubTitle>오늘 본 명장면을 잊기 전에 저장,<br />한 달간 모은 명장면을 한 눈에 볼 수 있어요</SubTitle>
      </div>
      <img src={image1} alt="iphone" style={{width : 450,}}/>
      </div>
    </div>
    <div className={styles.partContainer} style={{backgroundColor : "white"}}>
      <div style={{display :'flex', flexDirection :'row', marginTop : 150, justifyContent : 'space-between',}}>
      <img 
          src={image3} 
          alt="iphone" 
          style={{ width: 400, position: "relative", zIndex: 10 }} 
        />
        <div style={{display :'flex', flexDirection : 'column', alignItems : 'flex-start', marginTop : 100, marginRight : 200}}>
        <Title>진솔한<br />웹툰 리뷰</Title>
        <SubTitle>1,000개가 넘는 웹툰 리뷰를 한눈에!<br />다른 독자들의 추천 리뷰를 읽어보세요</SubTitle>
        </div>
      </div>
      <div style={{ position: "relative" }}> 
  {/* 부모 요소를 relative로 설정 */}
  <div style={{ position: "absolute", bottom: 200, width: "100%", zIndex: 1 }}>
    <MovingImages />
  </div>
</div>


    </div>
    <div className={styles.partContainer} style={{height : 200, display :'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between'}}>
      <div style={{display : 'flex', flexDirection :'column', alignItems : 'flex-start'}}>
        <p style={{fontFamily : 'Pretendard-Bold', fontSize : 20}}>ISEKAI</p>
        <p style={{fontFamily : 'Pretendard-Bold', fontSize : 10, marginTop : 12}}>COPYRIGHT Ⓒ 2025 ISEKAI. ALL RIGHTS RESERVED</p>
      </div>
      <div style={{display : 'flex', flexDirection :'column', alignItems : 'flex-end'}}>
        <p style={{fontFamily : 'Pretendard-Bold', fontSize : 16}}>이세계 제휴/광고 문의</p>
        <p style={{fontFamily : 'Pretendard-Bold', fontSize : 16, marginTop : 4}}>hyosh@isekai.kr</p>
      </div>
    </div>
    </>
  );
}
