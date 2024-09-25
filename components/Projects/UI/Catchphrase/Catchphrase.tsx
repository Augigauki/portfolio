'use client';

import { ReactNode } from 'react';
import styles from './Catchphrase.module.css';
import StyledText from '@/components/UI/StyledText';
import { useColor } from '@/context/ColorContext';
import TitleBg from '../ProjectPageTitle/TitleBg';

type CatchProps = {
	phrase: string;
	children: ReactNode;
};

const Catchphrase = ({ phrase, children }: CatchProps) => {
	const { lineColor, bgColor } = useColor();

	return (
		<div className={styles.catchphrasewrapper}>
			{children}
			<div className={styles.catchphrasetextcontainer}>
				<p
					className={styles.catchphrase}
					style={{ color: lineColor }}
				>
					<StyledText text={phrase} />
				</p>
				<TitleBg />
			</div>
			{/* <div className={styles.catchphrasetextbg} style={{backgroundColor: bgColor}}/> */}
		</div>
	);
};

export default Catchphrase;
