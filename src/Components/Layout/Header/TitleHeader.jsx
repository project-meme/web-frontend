import styles from './Header.module.css'
import backIcon from "../../../Aseets/header-back-arrow.png"
import search from "../../../Aseets/search.png"
import { useNavigate } from 'react-router-dom'
export default function TitleHeader({title}){
    const navigate = useNavigate();
    return(
        <header className={styles.container}>
            <div className={styles.header}>
                <div className={styles.iconContainer} onClick={()=>navigate(-1)}>
                    <img className={styles.icon} src={backIcon} alt= "이미지"/>
                </div>
                <p className={styles.titleTxt}>{title}</p>
                <div className={styles.iconContainer}>
                    <img className={styles.icon} src={search} alt="알림"/>
                </div>
            </div>
        </header>
    )
}