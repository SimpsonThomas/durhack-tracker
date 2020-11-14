import styles from "../styles/course.module.css"

function ModuleList(moduleChanger, moduleSel) {
    return (
            <div className={styles.moduleDiv}>
                {moduleButton(moduleChanger, moduleSel, 'Name')}
                {moduleButton(moduleChanger, moduleSel, 'Name2')}
                {moduleButton(moduleChanger, moduleSel, 'Name3')}
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