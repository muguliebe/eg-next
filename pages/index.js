import Page from '../components/Page'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Page>
      <div className={styles.container}>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to
            <a href="https://egstep.com"
            className={styles.link}>
              <span> egstep</span>
            </a>
          </h1>

          <p className={styles.description}>
            playground by
            <code className={styles.code}>@zany</code>
          </p>

          <div className={styles.grid}>
            <a href="https://blog.egstep.com" className={styles.card}>
              <h3>blog &rarr;</h3>
              <p>programming diary</p>
            </a>

            <a href="https://apij.egstep.com" className={styles.card}>
              <h3>example Spring &rarr;</h3>
              <p>code with spring boot</p>
            </a>

            <a
              href="https://api.egstep.com"
              className={styles.card}
            >
              <h3>example Node &rarr;</h3>
              <p>code with Express.js</p>
            </a>

            <a
              href="https://next.egstep.com"
              className={styles.card}
            >
              <h3>Study Next &rarr;</h3>
              <p>code with next.js</p>
            </a>
          </div>

        </main>

        <footer className={styles.footer}>
          <a
            href="https://egstep.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/egstep_large.png" alt="egstep" className={styles.logo} />
          </a>
        </footer>
      </div>
    </Page>
  )
}
