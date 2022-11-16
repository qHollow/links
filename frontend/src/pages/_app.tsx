import { createTheme, NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';

const darkTheme = createTheme({
	type: 'dark',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider theme={darkTheme}>
			<Component {...pageProps} />
		</NextUIProvider>
	);
}
