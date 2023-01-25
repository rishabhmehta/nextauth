import Head from 'next/head'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>AUTH</title>
        <meta name='description' content='This is the next auth testing app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.headingPrimary}>Next Authentication App</h1>
      </main>
    </>
  )
}
