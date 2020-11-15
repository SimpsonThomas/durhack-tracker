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


function Navigation(setUser, currentUser, home=true) {
    if (home) {
        return (
                <nav className={styles.navbar}>
                    
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={styles.navbarNav}>
                                {Object.keys(people).map((person) => {
                                    return(navBut(person, setUser, currentUser))
                                })}
                            
                                <li className={styles.navBut}><Link href="/help" className={styles.navLink}>Help</Link></li>
                            </ul>
                        </div>


                </nav>
        )
    } else {
        return (
            <nav className={styles.navbar}>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={styles.navbarNav}>
                            <li className={styles.navBut}><Link href="/" className={styles.navLink}>Home</Link></li>
                        </ul>
                    </div>


            </nav>
        )
    }
}

export default Navigation