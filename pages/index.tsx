import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import indexStyle from './index.module.scss'

import { Header } from '../components/Header'
import { Contents } from '../components/Contents'
import { Result } from '../components/Result'
import { Footer } from '../components/Footer'


const Home: NextPage = () => {
  return (
    <div className={indexStyle.outer}>
      <Header />
      <Contents />
      <Result />
      <Footer />
    </div>    
  )
}

export default Home
