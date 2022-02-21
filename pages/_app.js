import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  
  return ( 
  <>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
