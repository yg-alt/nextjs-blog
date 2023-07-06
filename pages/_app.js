import '../styles/global.css'

export default function App ({ Component, pageProps }) {
  console.log('app', Component, pageProps)
  return <Component {...pageProps} />
}
