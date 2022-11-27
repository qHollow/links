import React from 'react';
import { Head, Html, Main, NextScript } from 'next/document';

const MyDocument = () => {
	return (
		<Html lang="ru">
			<title>Links</title>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="anonymous"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
				rel="stylesheet"
			/>
			<Head />
			<body className="bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-400">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default MyDocument;
