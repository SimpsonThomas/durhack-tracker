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
    let style = (moduleSel === name) ? styles.moduleButtonActive : styles.moduleButton 
    return (
        <li key={name} className={styles.moduleButtonList}>
            <button className={style} onClick={() => {
                moduleChanger(name)
            }}>
                {name}
            </button>
        </li>
    )
}

export default ModuleList