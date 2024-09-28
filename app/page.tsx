'use client';

import Image from 'next/image';
import styles from './page.module.css';
import StyledText from '@/components/UI/StyledText';
import Link from 'next/link';
import Credits from '@/components/Credits/Credits';
import { useColor } from '@/context/ColorContext';
import Line from '@/components/Projects/UI/Line/Line';

export default function Home() {
	const { setLineColor, lineColor } = useColor();
	setLineColor('rgb(102, 97, 53)');
	return (
		<main>
			<div className={styles.wrapper}>
				<Line color={lineColor} />
				<Link
					className={styles.link}
					id={styles.projects}
					href={'/projects'}
				>
					Projects
				</Link>
				<Link
					className={styles.link}
					id={styles.about}
					href={'/about'}
				>
					About
				</Link>
				<h1 className={styles.maintitle}>
					<StyledText text={'August Gaukstad'} />
				</h1>
				<div className={styles.creditscontainer}>
					<Credits />
				</div>
				{/* <div className={styles.line}>
					
				</div> */}
				
			</div>
		</main>
	);
}
