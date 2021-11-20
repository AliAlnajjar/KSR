import Layout from '../components/Layout/layout.js'
import '../styles/globals.scss'

function MyApp({ Component, pageProps,router }) {
  console.error(router.pathname)
  return (
    (router.pathname.startsWith('/login'))?
    <Component {...pageProps} />
    :
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
