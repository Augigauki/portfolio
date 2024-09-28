'use client';

import { motion } from 'framer-motion';
import styles from './Line.module.css';

type LineProps = {
	color: string;
};

const Line = ({ color }: LineProps) => {
	return (
		<motion.div
			className={styles.line}
			animate={{ backgroundColor: color }}
			initial={{ backgroundColor: color }}
            transition={{ duration: 1 }}
		/>
	);
};

export default Line;
