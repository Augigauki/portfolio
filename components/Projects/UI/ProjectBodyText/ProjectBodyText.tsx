'use client';

import { ReactNode } from 'react';
import styles from './ProjectBodyText.module.css';
import { motion } from 'framer-motion';

type BodyTextProps = {
	color: string;
	children: ReactNode;
};

const ProjectBodyText = ({ color, children }: BodyTextProps) => {
	return (
		<motion.p
			animate={{ color: color }}
			initial={{ color: color }}
			className={styles.bodytext}
		>
			{children}
		</motion.p>
	);
};

export default ProjectBodyText;
