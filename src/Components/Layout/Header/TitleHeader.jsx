import styles from './Header.module.css'
import backIcon from "../../../Aseets/header-back-arrow.png"
import search from "../../../Aseets/search.png"
export default function TitleHeader({title}){
    return(
        <header className={styles.container}>
            <div className={styles.header}>
                <div className={styles.iconContainer}>
                    <img src={backIcon} alt= "이미지" style={{width : 16, height: 16}}/>
                </div>
                <a href="{()=>false}" className={styles.titleTxt}>{title}</a>
                <div className={styles.iconContainer}>
                    <img className={styles.icon} src={search} alt="알림"/>
                </div>
            </div>
        </header>
    )
}