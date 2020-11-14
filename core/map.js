import styles from "../styles/course.module.css"
import { modules } from "./modules"
import '../styles/map.module.css'

function MapItem(module) {
    if (module) {
    return (
        <ul className={styles.mapLister}>
            {module}
            {modules[module].map((topic) => {
                console.log(topic)
                return(<li key={topic} className={styles.mapList}>{topic}</li>)
            })}
        </ul>
    )
    }
}

export default MapItem