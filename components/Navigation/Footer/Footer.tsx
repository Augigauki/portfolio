'use client';

import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import styles from '../Nav.module.css';
import Link from 'next/link';
import StyledText from '@/components/UI/StyledText';
import { motion } from 'framer-motion';
import { useColor } from '@/context/ColorContext';
import Credits from '@/components/Credits/Credits';

const Footer = ({}) => {
	const { lineColor, bgColor } = useColor();
	return (
		<motion.div
			className={styles.outerheader}
			animate={{ backgroundColor: bgColor }}
		>
			<ContentWrapper>
				<div className={styles.footer}>
					<Credits />
				</div>
			</ContentWrapper>
		</motion.div>
	);
};

export default Footer;
