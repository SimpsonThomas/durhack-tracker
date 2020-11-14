import styles from "../styles/course.module.css"

function ModuleList() {
    return (
            <div className={styles.moduleDiv}>
                {moduleButton()}
                {moduleButton()}
            </div>
        )
}

function moduleButton() {
    return (
        <li className={styles.moduleButtonList}>
            <button className={styles.moduleButton}>
                Test
            </button>
        </li>
    )
}

export default ModuleList