import '../styles/index.css'
import '../styles/Section.css'
import '../nav/Nav.css'
import type {AppProps} from 'next/app'

export default function App({Component, pageProps}: AppProps) {
	return <Component {...pageProps} />
}
