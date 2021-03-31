import Page from '../components/Page'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Page>
      <div className={styles.container}>

        <main className={styles.main}>
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src="/egstep_large.png" alt="ChitChat Logo"/>
            </div>
            <div>
              <div className="text-xl font-medium eg">egstep</div>
              <p className="text-gray-500"><div className={styles.name}> zany's </div> playground</p>
            </div>
          </div>


          <div className={styles.grid}>
            <a href="https://blog.egstep.com" className={styles.card}>
              <h3 className="font-bold">blog &rarr;</h3>
              <p>programming diary</p>
            </a>

            <a href="https://apij.egstep.com" className={styles.card}>
              <h3 className="font-bold">example Spring &rarr;</h3>
              <p>code with spring boot</p>
            </a>

            <a
              href="https://api.egstep.com"
              className={styles.card}
            >
              <h3 className="font-bold">example Node &rarr;</h3>
              <p>code with Express.js</p>
            </a>

            <a
              href="https://next.egstep.com"
              className={styles.card}
            >
              <h3 className="font-bold">Study Next &rarr;</h3>
              <p>code with next.js</p>
            </a>
          </div>

        </main>

        <footer className={styles.footer}>
          <div className="bg-gray-900">
            <div className="flex flex-wrap items-center justify-between p-3 m-auto">
              <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
                <div className="flex mx-auto text-white text-center">
                  egstep © 2021
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Page>
  )
}
