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
	const { lineColor, setLineColor } = useColor();
	return (
		<div className={styles.outerheader}>
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
							transition={{ duration: 1 }}
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
							transition={{ duration: 1 }}
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
							transition={{ duration: 1 }}
						>
							About
						</motion.p>
					</Link>
				</div>
			</ContentWrapper>
		</div>
	);
};

export default Header;
