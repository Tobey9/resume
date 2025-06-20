import styles from "./resume.module.css";

export default function resume() {
  return (
    <div className={styles.resume}>
      <h1>Resume</h1>
      <div className={styles.education}>
        <div className={styles.left}>
          <h2>Education and Certifications</h2>
        </div>

        <div className={styles.right}>
          <div>
            <div className={styles.date}>
              <p>2025 </p>
            </div>
            <div className={styles.details}>
              <h3>Maximillian Schwarzmüller Next js 15 & React (Udemy)</h3>
              <p>Learned Next js 15</p>
            </div>
          </div>

          <div>
            <div className={styles.date}>
              <p>2024</p>
            </div>
            <div className={styles.details}>
              <h3>
                Colt Steele&rsquo;s Fullstack Web Developer Bootcamp (Udemy)
              </h3>
              <p>
                Covered fullstack JavaScript including MongoDB, Express.js,
                Node.js, and frontend development with HTML, CSS, and
                JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.skills}>
        <div className={styles.left}>
          <h2>Skills and Expertise</h2>
        </div>

        <div className={styles.right}>
          <ul className={styles.skillsList}>
            <li>
              <strong>Languages:</strong> JavaScript, HTML, CSS, SQL
            </li>
            <li>
              <strong>Frontend:</strong> React.js, Next.js,
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js
            </li>
            <li>
              <strong>Database:</strong> MySQL, MongoDB (basic)
            </li>
            <li>
              <strong>Tools:</strong> Git, GitHub, Vercel, Postman
            </li>
            <li>
              <strong>Other:</strong> REST APIs, Responsive Design
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
