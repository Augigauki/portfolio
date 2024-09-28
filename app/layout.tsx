import type { Metadata } from 'next';
import './fonts.css';
import './reset.css';
import './globals.css';
import './ids.css';
import { ColorProvider } from '@/context/ColorContext';

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
			<body>
				<ColorProvider>{children}</ColorProvider>
			</body>
		</html>
	);
}
