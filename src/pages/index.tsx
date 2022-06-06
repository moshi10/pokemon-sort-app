import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import indexStyle from './index.module.scss'

import { Header } from '../components/Header'
import { Contents } from '../components/Contents'
import { Result } from '../components/Result'
import { Footer } from '../components/Footer'
import { useState } from 'react'

const Home: NextPage = () => {
  const [power, setPower] = useState(false);
  return (
    <div className={indexStyle.outer}>
      <Header />
      <div>
                <div>{ power ? <Result /> : <Contents />}</div>
                <button onClick={() => setPower(true)}>true result</button>
                <button onClick={() => setPower(false)}>false contents(初期値)</button>
      </div>
      <Footer />
    </div>    
  )
}

export default Home
