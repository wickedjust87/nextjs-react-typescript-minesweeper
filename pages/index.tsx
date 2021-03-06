import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Minesweeper
        </h1>

        <div className={styles.grid}>
          <Link href="/game">
            <a className={styles.card}>
              <h2>New Game</h2>
              <p>Start a new game of minesweeper.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
