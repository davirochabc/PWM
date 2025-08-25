import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return(
    <main className={styles.main}>
      <h1 className={styles.title}>Hello, Davi!</h1>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        className={styles.logo}
        width={180}
        height={37}
        priority        
      />
    </main>
  );
}
