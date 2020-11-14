import styles from "../styles/course.module.css"
import { modules } from "./modules"

function ModuleList(moduleChanger, moduleSel) {
    return (
            <div className={styles.moduleDiv}>
                {Object.keys(modules).map( (module) => {
                    console.log(module)
                    return( moduleButton(moduleChanger, moduleSel, module) )
                })}
            </div>
        )
}

function moduleButton(moduleChanger, moduleSel, name) {
    return (
        <li className={styles.moduleButtonList}>
            <button className={styles.moduleButton} onClick={() => {
                moduleChanger(name)
            }}>
                {name}
            </button>
        </li>
    )
}

export default ModuleList