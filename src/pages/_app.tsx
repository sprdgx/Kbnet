import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navigationbar from "@/components/Navigationbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>KBnet</title>
      </Head>
      <Navigationbar />
      <Component {...pageProps} />
    </>
  )
}
