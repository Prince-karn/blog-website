import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            We&apos;d love to hear from you! Please fill out the form below to get in touch.
          </p>
        </header>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input type="text" id="name" className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" className={styles.textarea} rows="5" required></textarea>
          </div>

          <button type="submit" className={styles.button}>Send Message</button>
        </form>

        <section className={styles.contactInfo}>
          <h2>Other Ways to Reach Us</h2>
          <p>Email: contact@yourblog.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Blog Street, Blog City, BC 12345</p>
        </section>
      </div>
    </div>
  );
}