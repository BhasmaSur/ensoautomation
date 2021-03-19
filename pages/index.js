import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {HOME} from '../pages/home.js';
export default function Home() {
  return (
      <>
      <Head>
        <title>Enso Automation</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <HOME/>
      </>
  )
}
