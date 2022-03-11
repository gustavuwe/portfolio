import { FaReact } from 'react-icons/fa';

import { FiSettings } from 'react-icons/fi';

import styles from './styles.module.scss';

export function Technologies() {
  return (
    <body className={styles.body}>
      <main className={styles.technologiescontainer}>
        <h2 className={styles.title2}>What i know</h2>
        <h1>Technologies</h1>
        <div className={styles.technologiescontent}>
          <div className={styles.divfront}>
            <FaReact className={styles.reacticon} />
            <h2 className={styles.front}>Front-End</h2>
            <p>Html, Css, React, Next.js</p>
          </div>
          <div className={styles.divback}>
            <FiSettings className={styles.settingsicon} />
            <h2 className={styles.back}>Back-End</h2>
            <p>Javascript, Typescript, Python.</p>
          </div>
        </div>
      </main>
    </body>
  );
}
