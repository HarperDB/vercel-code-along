import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { harperFetch } from '../utils/harperdb';

export default function Home({ dogs }) {
  // We could also add a dog when clicking a button
  const addDog = async () => {
    try {
      const data = await harperFetch({
        operation: 'insert',
        schema: 'dev',
        table: 'dog',
        records: [
          {
            dog_name: 'Fifi',
            owner_name: 'Lee',
            breed_id: 154,
            age: 5,
            weight_lbs: 35,
            adorable: true,
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>HarperDB</h1>

        <div className={styles.grid}>
          {dogs.map((dog) => (
            <Link key={dog.id} href={`/dog/${dog.id}`}>
              <a className={styles.card}>{dog.dog_name}</a>
            </Link>
          ))}
        </div>
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

export async function getStaticProps() {
  const dogs = await harperFetch({
    operation: 'sql',
    sql: 'SELECT * FROM dev.dog',
  });

  return {
    props: {
      dogs,
    },
    revalidate: 60,
  };
}
