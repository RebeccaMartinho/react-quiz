import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Quiz from './components/Quiz';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Quiz</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>React quiz</h1>
        <Quiz />
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
