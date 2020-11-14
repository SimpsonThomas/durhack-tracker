import Link from "next/link";
import styles from '../styles/Nav.module.css'
import { people } from "./modules";

//import Layout from "../components/Layout";

/**
 * Generates the buttons for the navbar
 * 
 * @param {*} item - the dictionary containing the name and link of the navbar item we are creating
 * @param {*} navClass - any special classes for this nav-item
 */
function navBut(name, setUser, currentUser) {
    return (
        <button className={(name===currentUser) ? styles.navButActive : styles.navBut} key={name} onClick={() => setUser(name)}>
            {name}
        </button>
    )
}


function Navigation(setUser, currentUser) {
    console.log(people)
    return (
            <nav className={styles.navbar}>
                   
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/*Elements that display in the collapsed menu and full width menu*/}
                        <ul className={styles.navbarNav}>
                            {Object.keys(people).map((person) => {
                                console.log(person)
                                return(navBut(person, setUser, currentUser))
                            })}
                        </ul>

                    </div>


            </nav>
        )
}

export default Navigation