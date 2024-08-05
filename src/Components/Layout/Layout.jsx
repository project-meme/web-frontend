import Header from "./Header/Header";
import TitleHeader from "./Header/TitleHeader";
export default function Layout({children, home, title}){
    return(
        <div>
            {home ? <Header/> : <TitleHeader title={title}/>}
                <main>
                    {children}
                </main>
        </div>
    )
}