import React from "react";
import { Link } from "react-router-dom";



export default function Home() {
    return(
        <div className='pagina'>

            {/* <img className='fondo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNB1-EwZ95YO7DxHKME8Jcug01bR3GnK82Q&usqp=CAU'/> */}
                  <Link to='/home'>
                    <div >your favorite food awaits you!</div>
                    </Link>           
        </div>
    )

}