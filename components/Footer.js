import Link from "next/link";
import styles from "./Footer.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
              <Link href="" target="_blank">
                <FaXTwitter />
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
