import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>Learn more about our mission, values, and the team behind the blog.</p>
        </header>

        <section className={styles.content}>
          <h2>Our Mission</h2>
          <p>Our mission is to provide insightful articles and resources that inspire and educate our readers. We believe in the power of knowledge and aim to share valuable insights on various topics.</p>

          <h2>Our Values</h2>
          <ul>
            <li>Integrity: We uphold the highest standards of integrity in all of our actions.</li>
            <li>Innovation: We strive to bring new ideas and creative solutions to our readers.</li>
            <li>Community: We are committed to building a supportive and inclusive community.</li>
          </ul>

          <h2>Meet the Team</h2>
          <p>Our team consists of passionate writers, editors, and contributors who are dedicated to delivering quality content. We come from diverse backgrounds and bring a wealth of experience to the table.</p>
        </section>
      </div>
    </div>
  );
}
