import { type NextPage } from "next";
import Head from "next/head";
//import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Tastiest Cuisine</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen flex flex-col justify-center items-center">

        <div className="text-2xl text-center">Which Cuisine is Tastier?</div>
        <div className="p-2"/>
        <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
          <div className="w-16 h-16 bg-blue-500"/>
          <div className="p-8">Vs</div>
          <div className="w-16 h-16 bg-blue-500"/>

        </div>
        

        <p className="text-2xl text-white">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </p>
      </main>
    </>
  );
};

export default Home;
