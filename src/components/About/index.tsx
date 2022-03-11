import Image from 'next/image';
import styles from './styles.module.scss';

export function About() {
  return (
    <body className={styles.body}>
      <main className={styles.aboutcontainer}>
        <div className={styles.aboutcontent}>
          <h2>Discover</h2>
          <h1>About me</h1>
          <p className={styles.description1}>
            {"I'm"} a teenager, I study programming and i currently do it for
            fun.😜
          </p>
          <p className={styles.description2}>
            <span> </span>I am currently 14 years old, Live in Brazil, and
            Intend to become a developer in the future. follows
            <br /> down on the technologies {"I've"} learned since I started
          </p>
        </div>
        <div className={styles.minhaimg}>
          <Image src="/images/myimg.png" alt="minhaimg"  width="500rem" height="500rem"/>
        </div>
      </main>
    </body>
  );
}
