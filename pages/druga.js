import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head></Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          strona2<a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}
