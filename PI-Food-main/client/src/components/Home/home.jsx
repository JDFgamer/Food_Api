import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";



export default function Home() {
    return(
        
        <div  >
                  <Link to='/home' >
                   <button id={styles.btn} ><div className={styles.noselect}>¡Your favorite food awaits you! </div></button>
                    </Link>  <div id={styles.circle} ></div>         
     </div>
  
 
    )

}