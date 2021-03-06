import Head from "next/head";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Name: {router.query.name}</h1>
    </div>
  );
}
