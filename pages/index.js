import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home({ name }) {
  // const [name, setname] = useState();

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/hello")
  //     .then((data) => data.json())
  //     .then((res) => setname(res.name));
  // }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Name: {name.name}</div>
      <Link href="/about?name=hashir">About</Link>
      <Link href="/profile/123">Profile</Link>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/hello");
  const name = await res.json();

  return {
    props: {
      name,
    },
  };
}
