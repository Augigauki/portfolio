import type { Metadata } from 'next';
import './fonts.css'
import './reset.css'
import './globals.css';

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
			<body>{children}</body>
		</html>
	);
}
