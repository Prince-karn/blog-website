import Link from 'next/link';
import styles from '../styles/Home.module.css';

const posts = [
  { 
    id: 1, 
    title: 'First Post', 
    slug: 'first-post', 
    excerpt: 'Discover amazing insights and tips in our first blog post...',
    date: '2024-01-15',
    content: `
      <h2>Introduction</h2>
      <p>This is the full content of the first blog post. Here we discuss important topics and share valuable insights.</p>
      <h2>Main Points</h2>
      <p>Let's explore the key concepts and ideas that make this topic interesting and relevant.</p>
      <h2>Conclusion</h2>
      <p>Finally, we wrap up with our main takeaways and final thoughts on the subject.</p>
    `
  },
  { 
    id: 2, 
    title: 'Second Post', 
    slug: 'second-post', 
    excerpt: 'Explore new ideas and perspectives in our latest article...',
    date: '2024-01-20',
    content: `
      <h2>Getting Started</h2>
      <p>In this post, we'll dive deep into another fascinating topic that you won't want to miss.</p>
      <h2>Key Insights</h2>
      <p>Here are the main points we'll be covering in detail throughout this article.</p>
      <h2>Summary</h2>
      <p>Let's recap what we've learned and discuss the implications for future developments.</p>
    `
  },
];

export { posts };

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><Link className={styles.navLink} href="/">Home</Link></li>
            <li className={styles.navItem}><Link className={styles.navLink} href="/about">About</Link></li>
            <li className={styles.navItem}><Link className={styles.navLink} href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <header className={styles.header}>
          <h1 className={styles.title}>Welcome to My Blog</h1>
          <p className={styles.subtitle}>Exploring ideas, sharing knowledge, and connecting with readers.</p>
        </header>

        <h2 className={styles.sectionTitle}>Featured Content</h2>
        <div className={styles.flexLayout}>
          <div className={styles.flexItem}>
            <h2>Latest Articles</h2>
            <p>Discover our curated collection of thought-provoking articles and insights.</p>
          </div>
          <div className={styles.flexItem}>
            <h2>Trending Topics</h2>
            <p>Stay updated with the most popular discussions and trending subjects.</p>
          </div>
        </div>

        <h2 className={styles.sectionTitle}>Recent Posts</h2>
        <ul className={styles.postList}>
          {posts.map(post => (
            <li key={post.id} className={styles.postItem}>
              <Link className={styles.postLink} href={`/posts/${post.slug}`}>
                {post.title}
              </Link>
              <p>{post.excerpt}</p>
              <div className={styles.postMeta}>
                Posted on {new Date(post.date).toLocaleDateString()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
