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
        <Header title="Coming soon ..." />
      </main>
    </div>
  )
}
