import Image from "next/image";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <div>
        <div className={styles.left}>
          <h2>Hangouts</h2>
          <p>
            Hangouts is a simple social media platform inspired by Twitter,
            built with a fullstack JavaScript stack. Users can register and log
            in using either email or Google OAuth. Once logged in, they can
            create posts with text or images, like and comment on other
            users&rsquo; posts, and follow or unfollow users. The UI focuses on
            a clean, minimal design, making it easy to navigate and interact
            with content. I built both the frontend and backend, handling
            everything from authentication to database relationships and image
            uploads.
          </p>
        </div>

        <div className={styles.right}>
          <Image
            src="/hangouts.png"
            width={500}
            height={300}
            alt="social media hangouts"
          />
        </div>
      </div>

      <div>
        <div className={styles.left}>
          <h2>Myshoes</h2>
          <p>
            MyShoes is a simple e-commerce website that sells shoes and clothing
            for men, women, and kids. Users can sign up with their email to
            personalize their shopping experience, add products to their cart,
            and proceed to checkout with a dummy confirmation message. The site
            is organized into three main categories and features clean
            navigation, product listings with images and prices, and basic cart
            management functionality.
          </p>
        </div>

        <div className={styles.right}>
          <Image
            src="/myshoes.png"
            width={500}
            height={300}
            alt="e-commerce hangouts website"
          />
        </div>
      </div>

      <div>
        <div className={styles.left}>
          <h2>Foodies</h2>
          <p>
            Foodies is a simple recipe-sharing website built with Next.js. Users
            can freely browse a variety of recipes without needing to log in or
            sign up. Anyone can contribute by submitting their own recipes
            through a form, making it easy to share cooking ideas with others.
            The site focuses on simplicity, accessibility, and community-driven
            content.
          </p>
        </div>

        <div className={styles.right}>
          <Image
            src="/foodies.png"
            width={500}
            height={300}
            alt="foodies website"
          />
        </div>
      </div>
    </div>
  );
}
