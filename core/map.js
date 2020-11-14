import { modules } from "./modules"
import styles from '../styles/map.module.css'

function MapItem(module) {
    if (module) {
    return (
        <ul className={styles.mapLister}>
            <b>{module}</b>
            {modules[module].map((topic) => {
                return(
                <div key={topic}>
                    <p className={styles.mapList}>{topic}</p>
                    <p className={styles.checkpoint}>Checkpoint 1</p>
                    <p className={styles.checkpoint}>Checkpoint 2</p>
                    <p className={styles.checkpoint}>Checkpoint 3</p>
                </div>)
            })}
        </ul>
    )
    }
}

export default MapItem