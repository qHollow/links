import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

const MyDocument = () => {
	return (
		<Html lang="ru">
			<title>Links</title>
			<Head>{CssBaseline.flush()}</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

const getInitialProps = async (ctx: any) => {
	const initialProps = await Document.getInitialProps(ctx);
	return {
		...initialProps,
		styles: React.Children.toArray([initialProps?.styles]),
	};
};

export default MyDocument;
