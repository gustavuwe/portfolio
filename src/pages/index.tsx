import Head from 'next/head';
import Image from 'next/image';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Profile</title>
      </Head>
      <body className={styles.body}>
        <main className={styles.contentContainer}>
          <section className={styles.hero}>
            <span>👋 Hey, Welcome!</span>
            <h1>
              A teenager fascinated by <span> Programming</span>
            </h1>
            <p>
              Check my <span>social links!</span>
            </p>
          </section>

          <Image src="/images/Guycoding.png" alt="Guy coding" width="1700rem" height="1500rem" />
        </main>
      </body>
    </>
  );
}
