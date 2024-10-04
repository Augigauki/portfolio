import type { Metadata } from 'next';
import './fonts.css';
import './reset.css';
import './globals.css';
import './ids.css';
import { ColorProvider } from '@/context/ColorContext';
import Script from 'next/script';

export const metadata: Metadata = {
	title: 'August Gaukstad',
	description: 'Portfolio',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				{process.env.ENV !== 'dev' && (
					<Script
						src='https://umami-analytics-qbpe.vercel.app/script.js'
						defer
						data-website-id='dfe2eb24-c495-48e6-a121-2cca1d2fcdbc'
					/>
				)}
			</head>
			<body>
				<ColorProvider>{children}</ColorProvider>
			</body>
		</html>
	);
}
