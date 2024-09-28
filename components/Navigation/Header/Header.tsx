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
	const animduration = 0.5;
	return (
		<motion.div
			className={styles.outerheader}
			animate={{ backgroundColor: bgColor }}
			initial={{ backgroundColor: bgColor }}
			transition={{duration: animduration}}
		>
			<ContentWrapper>
				<div className={styles.header}>
					<Link
						className={styles.navlink}
						href={'/projects'}
						style={{ color: lineColor }}
					>
						<motion.p
							initial={{ color: lineColor }}
							animate={{ color: lineColor }}
							transition={{ duration: animduration }}
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
							initial={{ color: lineColor }}
							animate={{ color: lineColor }}
							transition={{ duration: animduration }}
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
							initial={{ color: lineColor }}
							animate={{ color: lineColor }}
							transition={{ duration: animduration }}
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
