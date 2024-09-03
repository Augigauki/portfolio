import type { Metadata } from 'next';
import './fonts.css';
import './reset.css';
import './globals.css';
import Header from '@/components/Navigation/Header/Header';
import Footer from '@/components/Navigation/Footer/Footer';

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
