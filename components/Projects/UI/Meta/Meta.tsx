import { ReactNode } from 'react';
import styles from './Meta.module.css';

type MetaProps = {
	children: ReactNode;
	color: string;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
};

const Meta = ({ children, color, top, right, bottom, left }: MetaProps) => {
	return (
		<p
			style={{ color: color, top: top, right: right, bottom: bottom, left: left }}
			className={styles.meta}
		>
			{children}
		</p>
	);
};

export default Meta;
