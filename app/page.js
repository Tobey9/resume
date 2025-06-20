import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image
              src="/photo.jpg"
              alt="Toby's photo"
              width={500}
              height={500}
            ></Image>
          </div>
        </div>

        <div className={styles.right}>
          <h1>Hi, I am Toby!</h1>
          <h2>About Me</h2>
          <p>
            I specialize in building modern, responsive websites with Next.js,
            React, and Node.js. I love turning ideas into real products, whether
            it&rsquo;s a recipe sharing site, a route mapping tool for
            accessibility, or a social platform. I&rsquo;m always learning,
            always building, and always excited about what&rsquo;s next.
          </p>
        </div>
      </div>

      <div className={styles.buttons}>
        <div className={styles.button}>
          <p>
            <Link href="/resume">Resume</Link>
          </p>
        </div>
        <div className={styles.button}>
          <p>
            <Link href="/projects">Projects</Link>
          </p>
        </div>
        <div className={styles.button}>
          <p>
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
