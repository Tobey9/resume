import Link from "next/link";
import styles from "./Footer.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <div>
          <h3>Email</h3>
          <p>latebloomerguy99@gmail.com</p>
        </div>
        <div>
          <h3>Follow Me</h3>
          <p>
            <Link
              href="https://www.linkedin.com/in/toby-z-a817b8339/"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>

            <span>
              <Link href="https://github.com/Tobey9" target="_blank">
                <FaGithub />
              </Link>
            </span>
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <small>© 2025 Toby. All rights reserved.</small>
      </div>
    </div>
  );
}
