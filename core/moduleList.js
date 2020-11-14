import styles from "../styles/course.module.css"
import { modules, people } from "./modules"

function ModuleList(moduleChanger, moduleSel, person) {
    return (
            <div className={styles.moduleDiv}>
                {people[person].map( (module) => {
                    return( moduleButton(moduleChanger, moduleSel, module) )
                })}
            </div>
        )
}

function moduleButton(moduleChanger, moduleSel, name) {
    return (
        <li key={name} className={styles.moduleButtonList}>
            <button className={styles.moduleButton} onClick={() => {
                moduleChanger(name)
            }}>
                {name}
            </button>
        </li>
    )
}

export default ModuleList