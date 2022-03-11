import Image from 'next/image';
import styles from './styles.module.scss';

export function Header() {
  return (
    <body className={styles.body}>
      <header className={styles.headercontainer}>
        <div className={styles.headerContent}>
          <Image src="/images/DevGustav.png" alt="logo" width="400rem" height="450rem"/>
          <nav>
            <a className={styles.active}>Home</a>
            <a>About</a>
            <a
              href="https://www.instagram.com/gustavuwe/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://github.com/gustavuwe"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </nav>
        </div>
      </header>
    </body>
  );
}
