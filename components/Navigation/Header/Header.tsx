'use client';

import Link from 'next/link';
import styles from '../Nav.module.css';
import StyledText from '@/components/UI/StyledText';
import { usePathname } from 'next/navigation';
import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import { useColor } from '@/context/ColorContext';
import { motion } from 'framer-motion';

const Header = ({}) => {
	const path = usePathname();
	const { lineColor, bgColor } = useColor();
	return (
		<motion.div className={styles.outerheader} animate={{backgroundColor: bgColor}}>
			<ContentWrapper>
				<div className={styles.header}>
					<Link
						className={styles.navlink}
						href={'/projects'}
						style={{ color: lineColor }}
					>
						<motion.p
							initial={{ color: 'black' }}
							animate={{ color: lineColor }}
						>
							Projects
						</motion.p>
					</Link>
					<Link
						href={'/'}
						className={styles.title}
						style={{ color: lineColor }}
					>
						<motion.p
							initial={{ color: 'black' }}
							animate={{ color: lineColor }}
						>
							<StyledText text={'August Gaukstad'} />
						</motion.p>
					</Link>
					<Link
						className={styles.navlink}
						href={'/about'}
						style={{ color: lineColor }}
					>
						<motion.p
							initial={{ color: 'black' }}
							animate={{ color: lineColor }}
						>
							About
						</motion.p>
					</Link>
				</div>
			</ContentWrapper>
		</motion.div>
	);
};

export default Header;
