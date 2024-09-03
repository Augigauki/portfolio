import StyledText from '../../UI/StyledText';
import styles from './FiruProjectWrapper.module.css';
import Image from 'next/image';

const FiruProjectWrapper = ({}) => {
	return (
		<div
			className={styles.projectwrapper}
			style={{ color: 'var(--blue)' }}
		>
			<h2 className={styles.title}>
				<StyledText text='Firu' />
			</h2>
			<div className={styles.titlebg} />
			<Image
				src={'/assets/images/projects/firu/spread_1.jpg'}
				alt='FIRU Magazine Spread'
				width={600}
				height={500}
				className={styles.image}
				id={styles.firuspread}
			/>
			<Image
				src={'/assets/images/projects/firu/detail.jpg'}
				alt='FIRU Detail'
				width={324 * 1.5}
				height={220 * 1.5}
				className={styles.image}
				id={styles.detail}
			/>
			<p
				className={styles.meta}
				id={styles.category}
			>
				Editorial 2018
			</p>
			<p
				className={styles.meta}
				id={styles.descriptor}
			>
				Firu is a magazine about japanophilia
			</p>
			<p
				className={styles.meta}
				id={styles.type}
			>
				Create a lifestyle magazine with a theme of your choice
			</p>
		</div>
	);
};

export default FiruProjectWrapper;
