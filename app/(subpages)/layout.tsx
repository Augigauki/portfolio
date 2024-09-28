import { Fragment, ReactNode } from 'react';
import styles from './SubpageLayout.module.css';
import Header from '@/components/Navigation/Header/Header';
import Footer from '@/components/Navigation/Footer/Footer';
import { ColorProvider } from '@/context/ColorContext';

const SubpageLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>{children}</div>
			<Footer />
		</div>
	);
};

export default SubpageLayout;
