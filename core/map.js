import styles from "../styles/course.module.css"
import { modules } from "./modules"
import '../styles/map.module.css'

function MapItem(module) {
    if (module) {
    return (
        <ul className={styles.mapLister}>
            <b>{module}</b>
            {modules[module].map((topic) => {
                return(
                <div key={topic}>
                    <p  className={styles.mapList}>{topic}</p>
                    <p>Here</p>
                </div>)
            })}
        </ul>
    )
    }
}

export default MapItem