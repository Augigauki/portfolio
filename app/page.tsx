import Image from 'next/image';
import styles from './page.module.css';
import StyledText from '@/components/UI/StyledText';
import Link from 'next/link';

export default function Home() {
	const disabled = ['gu', 'ks'];

	return (
		<main>
			<div className={styles.wrapper}>
				<div className={styles.line}>
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
				</div>
				<h1 className={styles.maintitle}>
					<StyledText
						text={'August Gaukstad'}
						substrings={disabled}
					/>
				</h1>
			</div>
		</main>
	);
}
