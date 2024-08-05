import styles from './Header.module.css'
import logo from '../../../Aseets/temp_img.png'
import notification from '../../../Aseets/notification.png'
export default function Header(){
    return(
        <header className={styles.container}>
            <div className={styles.header}>
                <div className={styles.iconContainer}>
                    <img className={styles.logo} src={logo} alt="로고"/>
                </div>
                <div className={styles.iconContainer}>
                    <img className={styles.icon} src={notification} alt="알림"/>
                </div>
            </div>
        </header>
    )
}