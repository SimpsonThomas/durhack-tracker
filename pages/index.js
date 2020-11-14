import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../core/navbar';
import ModuleList from '../core/moduleList';
import MapItem from '../core/map';
import Leaderboard from '../core/leaderboard';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation/>
      <Head>
        <title>Durham Lecture Tracker</title>
        <link rel="icon" href="/durhack.png" />
      </Head>

      <main className={styles.main}>
          <div className={styles.moduleList}>
            <p>Module List</p>
            <ModuleList/>
          </div>
          <div className={styles.map}>
            <p>Map</p>
            <MapItem/>
          </div>
          <div className={styles.leaderboard}>
            <p>Leaderboard</p>
            <Leaderboard/>
          </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/SimpsonThomas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built at Durhack{' '}
          <img src="/Github-Mark.png" alt="Github Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
