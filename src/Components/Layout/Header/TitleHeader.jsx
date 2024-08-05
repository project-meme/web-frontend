import styles from './Header.module.css'
import logo from '../../../Aseets/temp_img.png'
import notification from '../../../Aseets/notification.png'
import backIcon from "../../../Aseets/header-back-arrow.png"
import search from "../../../Aseets/search.png"
export default function TitleHeader({title}){
    return(
        <header className={styles.container}>
            <div className={styles.header}>
                <div className={styles.iconContainer}>
                    <img src={backIcon} style={{width : 16, height: 16}}/>
                </div>
                <a className={styles.titleTxt}>{title}</a>
                <div className={styles.iconContainer}>
                    <img className={styles.icon} src={search} alt="알림"/>
                </div>
            </div>
        </header>
    )
}