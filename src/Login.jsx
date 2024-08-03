export default function LogIn(){
    const REST_API_KEY = '8de4f40878b609a1abfd610d2b436578';
    const REDIRECT_URI = 'http://localhost:3001/auth';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
    const loginHandler = () => {
      window.location.href = link;
    };
  
    return (
      <button type='button' onClick={loginHandler}>
        로그인 하기
      </button>
    );
  };