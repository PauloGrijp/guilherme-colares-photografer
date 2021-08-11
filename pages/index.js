import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import CarouselComponent from '../components/CarouselComponent'
import Galery from '../components/Galery'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <CarouselComponent />
      <About />
      <Galery />
    </div>
  )
}
