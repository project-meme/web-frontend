import React from "react";
import romance from "../../Aseets/romanceImg.png"
import thril from "../../Aseets/thrillImg.png"
import fantasy from "../../Aseets/fantasyImg.png"
import styles from "./Home.module.css"
import { useNavigate } from 'react-router-dom';

export default function Category(data){
    const navigate = useNavigate();

    const dummyList = [
        {txt : "로맨스", image : romance},
        {txt : "스릴러", image : thril},
        {txt : "3", image : fantasy},
        {txt : "1", image : romance},
        {txt : "2", image : thril},
        {txt : "5", image : fantasy},
        {txt : "6", image : romance},
        {txt : "7", image : thril},
        {txt : "8", image : fantasy}
    ]

    const handleProfile = (item) => {
        navigate(`/Board/${item.txt}`, {
            state : {
                data : item,
            }
        });
      };
    return(
        <div>
        <div className={styles.categoryContainer}>
            {dummyList.map((item, index)=>(
                // <NavLink to={`/board`}   className={isActive =>
                //     "nav-link" + (!isActive ? " unselected" : "")
                //   } style={{textDecoration:"none"}}>
                
                <div className={styles.marginTopContainer} onClick={() => handleProfile(item)}>
                    <div className={styles.flexContainer}>
                    <img className={styles.categoryImg} src={dummyList[index].image} alt="장르"/>
                    <p className={styles.categoryTxt}>{item.txt}</p>
                    </div>
                    </div>

                // </NavLink>
            )

        )}
        </div>
        </div>
    )
}