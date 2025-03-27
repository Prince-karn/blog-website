import Link from 'next/link';
import styles from '../../styles/Post.module.css';
import { posts } from '../index'; // Import posts data from index.js

export default function Post({ post }) {
  if (!post) return <div>Loading...</div>;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
        </nav>
        
        <article className={styles.post}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            Posted on {new Date(post.date).toLocaleDateString()}
          </div>
          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find(p => p.slug === params.slug);
  
  return {
    props: {
      post: post || null
    }
  };
}
