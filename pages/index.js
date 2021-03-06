import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../core/navbar';
import ModuleList from '../core/moduleList';
import MapItem from '../core/map';
import Leaderboard from '../core/leaderboard';

import React, { Component , useState } from "react";

function Home() {
  const [moduleSel, setModule] = useState('');
  const [currentUser, setUser] = useState('alice');
  return (
    <div className={styles.container}>
      {Navigation(setUser, currentUser)}
      <Head>
        <title>Durham Lecture Tracker</title>
        <link rel="icon" href="/durhack.png" />
      </Head>

      <main className={styles.main}>
          <div className={styles.moduleList}>
            <br/>
            {ModuleList(setModule, moduleSel, currentUser)}
          </div>
          <div className={styles.map}>
            {MapItem(moduleSel)}
          </div>
          <div className={styles.leaderboard}>
            <br/>
            {Leaderboard(currentUser)}
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


export default Home
