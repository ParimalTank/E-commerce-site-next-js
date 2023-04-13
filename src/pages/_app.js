import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
     <Component {...pageProps} />
    </>
  )
}
