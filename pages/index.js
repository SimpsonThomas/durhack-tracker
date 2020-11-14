import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './core/navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation/>
      <Head>
        <title>Durham Lecture Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
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
