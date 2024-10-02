'use client'

import { motion } from 'framer-motion';
import styles from './TitleBg.module.css';
import { useColor } from '@/context/ColorContext';

interface BgProps {
	color?: string;
}

const TitleBg = ({ color = 'var(--white)' }: BgProps) => {

	const { bgColor } = useColor();

	return (
		<motion.div
			className={styles.backdrop}
			initial={{ backgroundColor: bgColor }}
			animate={{ backgroundColor: bgColor }}
            transition={{duration: 0.5}}
		/>
	);
};

export default TitleBg;
