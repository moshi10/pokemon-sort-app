import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Header } from '../components/Header'
import { Contents } from '../components/Contents'
import { Footer } from '../components/Footer'


const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Contents />
      <Footer />
    </>    
  )
}

export default Home
