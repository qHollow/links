import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import 'styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<main>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}
