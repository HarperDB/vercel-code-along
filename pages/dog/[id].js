import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { harperFetch } from '../../utils/harperdb';

export default function DogPage({ dog }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{dog.dog_name}</h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>Individual Dog</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps(context) {
  const dog = await harperFetch({
    operation: 'sql',
    sql: `SELECT * FROM dev.dog where id = ${context.params.id}`,
  });

  return {
    props: {
      dog: dog[0],
    },
  };
}

export async function getStaticPaths() {
  const dogs = await harperFetch({
    operation: 'sql',
    sql: 'SELECT * FROM dev.dog',
  });

  return {
    paths: dogs.map((dog) => ({ params: { id: dog.id.toString() } })),
    fallback: false,
  };
}
