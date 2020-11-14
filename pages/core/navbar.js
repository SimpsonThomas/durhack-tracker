import Link from "next/link";
import styles from '../../styles/Nav.module.css'

//import Layout from "../components/Layout";

/**
 * Generates the buttons for the navbar
 * 
 * @param {*} item - the dictionary containing the name and link of the navbar item we are creating
 * @param {*} navClass - any special classes for this nav-item
 */
function navBut(item, navClass='') {
    return (
        <li className={styles.navBut} key={item.name}>
            <Link
                className={navClass+" nav-link "+item.name}
                id={item.link.split('/')[1]+'NavLink'}
                to={item.link}
            >
                {item.name}
            </Link>
        </li>
    )
}


function Navigation() {
    return (
            <nav className={styles.navbar}>
                   
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/*Elements that display in the collapsed menu and full width menu*/}
                        <ul className={styles.navbarNav}>
                            <li className={styles.navBut}>Test</li>
                            <li className={styles.navBut}>Test</li>
                            <li className={styles.navBut}>Test</li>
                            {/*pageList.map(page => {
                                if (page.nav && page.side === 'left') return this.navBut(page)
                                else return null
                            })*/}
                            &nbsp; {/*Spacer*/}
                        </ul>

                    </div>


            </nav>
        )
}

export default Navigation