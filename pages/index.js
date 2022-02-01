import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Beyond Genesis!</title>
      </Head>

      <main>
        <Header title="29 AB 5F 49" />
      </main>
    </div>
  )
}
