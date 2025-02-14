import { motion } from "framer-motion";
import React from "react";

const images = [
  [
    {
        "webtoonId": 2007,
        "webtoonThumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/6d9d392a-69e7-48c0-875f-59845a026ad0",
        "content": "그럼 가족해! 우리 결혼할래? 축의금으로 한탕 하던가!\n\n4화 - 공민의",
        "webtoonTitle": "옆집 동생이 뱀파이어면 어떡하죠?!",
        "rating": 5,
        "isAdult": false,
        "nickname": "명대사착즙기",
        "authorId": 703,
        "isPublic": null,
        "createdDt": "2025-02-11T22:35:54"
    },
    {
        "webtoonId": 21089,
        "webtoonThumbnail": "https://ccdn.lezhin.com/v2/comics/6594651053424640/images/tall.webp?updated=1702970561625&width=354",
        "content": "그림체 너무 이쁘고요 말해뭐해 빨리 가서 보세요!!! 츤데레수,까칠수x모범생공,다정공  학원물인데 먼가 힐링되는 느낌? 서브커플도 있는데 다 너무 귀여워요ㅠㅠ",
        "webtoonTitle": "메리 마블링",
        "rating": 5,
        "isAdult": false,
        "nickname": "설의",
        "authorId": 1326,
        "isPublic": null,
        "createdDt": "2025-02-11T13:18:54"
    },
    {
        "webtoonId": 39919,
        "webtoonThumbnail": "https://img.ridicdn.net/cover/3093000500/small?dpi=xxhdpi",
        "content": "비엘 입덕 초창기에 그림체 이뻐서 봤던 작품인데 미쳤어요 공수 다 너무이쁘고…  짝사랑공x짝사랑수 이걸 어떻게 참아…츄릅",
        "webtoonTitle": "오메가 콤플렉스",
        "rating": 5,
        "isAdult": false,
        "nickname": "설의",
        "authorId": 1326,
        "isPublic": null,
        "createdDt": "2025-02-11T13:16:49"
    },
    {
        "webtoonId": 2007,
        "webtoonThumbnail": "https://haruby.s3.ap-northeast-2.amazonaws.com/post/6d9d392a-69e7-48c0-875f-59845a026ad0",
        "content": "꾸금이 아닌게 아쉽긴 하지만..그림체도 이쁘고 스토리도 맛도리.. 서브커플도 있으니 다양하게 먹을 수 있어요! 츄라이 해볼만한 작품이라고 생각합니다",
        "webtoonTitle": "옆집 동생이 뱀파이어면 어떡하죠?!",
        "rating": 5,
        "isAdult": false,
        "nickname": "설의",
        "authorId": 1326,
        "isPublic": null,
        "createdDt": "2025-02-11T13:14:21"
    },
    {
        "webtoonId": 241936,
        "webtoonThumbnail": "https://image.balcony.studio/BOMTOON_COM/co_thumbnail/night_of_W_ALL/1735031464536.webp",
        "content": "인생작…제 기준 탑5에 드는 작품중 하나입니다…. 꼭 보세요..ㅠㅠㅠ\n까칠수x조폭공인데 또 오메가버스야ㅏㅏ아아 꺄아아아ㅏ각ㅠㅠ 맛도립니다 완결났으니 편하게 정주행 고고…",
        "webtoonTitle": "물가의 밤",
        "rating": 5,
        "isAdult": false,
        "nickname": "설의",
        "authorId": 1326,
        "isPublic": null,
        "createdDt": "2025-02-11T13:03:30"
    },
    {
        "webtoonId": 32586,
        "webtoonThumbnail": "https://img.ridicdn.net/cover/5604000013/small?dpi=xxhdpi",
        "content": "그림체도 몽글몽글하고 스토리도 재밌어여! 서브공도 있으니..짜릿하지요ㅎㅎ 짝사랑공x무자각수 ",
        "webtoonTitle": "시나브로",
        "rating": 5,
        "isAdult": false,
        "nickname": "설의",
        "authorId": 1326,
        "isPublic": null,
        "createdDt": "2025-02-11T12:50:19"
    },
    {
        "webtoonId": 21089,
        "webtoonThumbnail": "https://ccdn.lezhin.com/v2/comics/6594651053424640/images/tall.webp?updated=1702970561625&width=354",
        "content": "그림체도 너무 이쁘고 스토리도 괞찮아요",
        "webtoonTitle": "메리 마블링",
        "rating": 5,
        "isAdult": false,
        "nickname": "민들레M",
        "authorId": 1324,
        "isPublic": null,
        "createdDt": "2025-02-11T06:06:20"
    },
    {
        "webtoonId": 39919,
        "webtoonThumbnail": "https://img.ridicdn.net/cover/3093000500/small?dpi=xxhdpi",
        "content": "결말 너무 좋앙><",
        "webtoonTitle": "오메가 콤플렉스",
        "rating": 5,
        "isAdult": false,
        "nickname": "민들레M",
        "authorId": 1324,
        "isPublic": null,
        "createdDt": "2025-02-11T06:03:31"
    },
    {
        "webtoonId": 42861,
        "webtoonThumbnail": "https://img.ridicdn.net/cover/4895000424/small?dpi=xxhdpi",
        "content": "미용사는 너무 잘생겼고 남주는 너무 귀여워요 읽때마다 심장이 두근거려요",
        "webtoonTitle": "은밀한 머릿속 사정",
        "rating": 5,
        "isAdult": false,
        "nickname": "민들레M",
        "authorId": 1324,
        "isPublic": null,
        "createdDt": "2025-02-11T06:02:06"
    },
    {
        "webtoonId": 242506,
        "webtoonThumbnail": "https://image.balcony.studio/BOMTOON_COM/co_thumbnail/Hn2trouble_ALL/1735031927614.webp",
        "content": "너무 잘생겼어요!!!",
        "webtoonTitle": "허니 트러블",
        "rating": 5,
        "isAdult": false,
        "nickname": "민들레M",
        "authorId": 1324,
        "isPublic": null,
        "createdDt": "2025-02-11T04:31:35"
    }
]
];

const MovingImages = () => {
  const repeatedImages = [...images[0], ...images[0]]; // 이미지를 2배로 늘림!

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        whiteSpace: "nowrap",
      }}
    >
      <motion.div
        style={{ display: "flex", flexDirection : 'row' }}
        animate={{ x : ["0%", "-100%"] }} // 왼쪽으로 이동
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }} // 부드럽게 반복
      >
        {repeatedImages.map((item, index) => (
          <div
            key={index}
            style={{
              display : 'flex',
              flexDirection : 'column',
              marginRight: 20,
              textAlign: "center",
              backgroundColor : '#F4F5F9',
              height : 200,
              width : 400,
              alignItems : 'center',
              justifyContent :'center',
              borderRadius : 12
            }}
          >
            <div style={{display : 'flex', flexDirection : 'row', width : 400, justifyContent : 'center'}}>
            <img
              src={item.webtoonThumbnail}
              alt={item.webtoonTitle}
              style={{ width: 100, height: 100*1.45, borderRadius: 8 }}
            />
            <div style={{ display : 'flex' ,flexDirection : 'column', marginLeft : 20, alignItems : 'flex-start'}}>
              <h1 style={{fontFamily :'Pretendard-Regular',fontSize : 15}}>{item.webtoonTitle}</h1>
              <div style={{ display: "flex", paddingTop : 6 , paddingBottom : 6}}>
              {Array.from({ length: item.rating }).map((_, i) => (
                <span key={i} style={{ fontSize: 20 , color: "#8381E9", letterSpacing : -2}}>★</span>
              ))}
              </div>
              <h1 style={{ fontFamily :'Pretendard-Light', fontSize: 14, color : "black", width : 220,whiteSpace: "normal", textAlign :'justify', // 자동 줄바꿈 활성화!
              wordBreak: "break-word", }}>{item.content}</h1>
            </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MovingImages;
