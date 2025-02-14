export default function Header() {
    return (
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* 왼쪽 로고 */}
          <div className="text-2xl font-bold text-purple-600">
            <img src="/logo.png" alt="기업 로고" className="h-10" />
          </div>
  
          {/* 오른쪽 메뉴 */}
          <nav className="flex items-center gap-6">
            <a href="/support" className="text-gray-700 hover:text-purple-600">
              고객센터
            </a>
            <a href="/login" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              로그인
            </a>
          </nav>
        </div>
      </header>
    );
  }
  