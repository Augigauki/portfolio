import StyledText from '@/components/UI/StyledText';
import styles from './NewTopoProjectWrapper.module.css'
import Image from 'next/image';
import Link from 'next/link';

const NewTopoProjectWrapper = ({}) => {
    return(
        <div
			className={styles.projectwrapper}
			style={{ color: 'var(--winered)' }}
		>
			<Link href={'/projects/new-topographics'}>
				<h2 className={styles.title}>
					<StyledText text='New Topographics' />
				</h2>
			</Link>
			<div className={styles.titlebg} />
			<Image
				src={'/assets/images/projects/newtopo/newtopo1.jpg'}
				alt='Car garage canada'
				width={325*1.5}
				height={216*1.5}
				className={styles.image}
				id={styles.firuspread}
			/>
			<Image
				src={'/assets/images/projects/newtopo/newtopo2.jpg'}
				alt='Car parking Toronto'
				width={324 * 1.5}
				height={220 * 1.5}
				className={styles.image}
				id={styles.detail}
			/>
			<p
				className={styles.meta}
				id={styles.category}
			>
				Webdesign & Development 2019
			</p>
			<p
				className={styles.meta}
				id={styles.descriptor}
			>
				New Topographics is an online photography museum
			</p>
		</div>
    )
};

export default NewTopoProjectWrapper;