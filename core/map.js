import { modules } from "./modules"
import styles from '../styles/map.module.css'

function MapItem(module) {
    if (module) {
    let moduleLength = modules[module].length
    let x = Math.floor(Math.random() * modules[module].length)

    function modulePrinter(num) {
        let topic = modules[module][num]
        console.log(module+' '+num+' '+x)
        let y = Math.floor(Math.random() * 4)
        let check1 = (y>=1) ? styles.checkpointActive : styles.checkpoint
        let check2 = (y>=2) ? styles.checkpointActive : styles.checkpoint
        let check3 = (y===3) ? styles.checkpointActive : styles.checkpoint
        if (num === x) {
            return(
                <div key={topic} className={styles.active}>
                    <p className={styles.mapList}>{topic}</p>
                    <p className={check1}>Checkpoint 1</p>
                    <p className={check2}>Checkpoint 2</p>
                    <p className={check3}>Checkpoint 3</p>
                </div>)
        } else if (num<x) {
            return(
                <div key={topic} className={styles.active}>
                    <p className={styles.mapList}>{topic}</p>
                    <p className={styles.checkpointActive}>Checkpoint 1</p>
                    <p className={styles.checkpointActive}>Checkpoint 2</p>
                    <p className={styles.checkpointActive}>Checkpoint 3</p>
                </div>)
        } else {
            return(
                <div key={topic}>
                    <p className={styles.mapList}>{topic}</p>
                    <p className={styles.checkpoint}>Checkpoint 1</p>
                    <p className={styles.checkpoint}>Checkpoint 2</p>
                    <p className={styles.checkpoint}>Checkpoint 3</p>
                </div>)
        }
    }
    
    return (
        <ul className={styles.mapLister}>
            <b>{module}</b>
            {
                modules[module].map( (module, i) => {
                    return(<div>{modulePrinter(i)}</div>)
                })
            }
        </ul>
    )
    }
}

export default MapItem