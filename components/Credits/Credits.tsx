'use client';

import { useState } from 'react';
import styles from './Credits.module.css';
import { motion } from 'framer-motion';
import Contributor from './Contributor';
import StyledText from '../UI/StyledText';
import { useColor } from '@/context/ColorContext';

const Credits = ({}) => {
	const [showCredits, setShowCredits] = useState(false);
	const { lineColor } = useColor();

	const handleShow = () => {
		setShowCredits(true);
	};

	const handleHide = () => {
		setShowCredits(false);
	};

	const fadeVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const creditsVariants = {
		hidden: { y: '100%' },
		visible: {
			y: '-100vh',
			transition: { duration: 60, ease: 'linear' },
		},
	};

	if (!showCredits) {
		return (
			<p
				className={styles.link}
				onClick={handleShow}
				style={{ color: lineColor }}
			>
				Credits
			</p>
		);
	}

	return (
		<div className={styles.creditswrapper}>
			{showCredits && (
				<>
					<motion.div
						variants={fadeVariants}
						initial='hidden'
						animate={showCredits ? 'visible' : 'hidden'}
						transition={{ duration: 2 }}
						className={styles.fadebg}
					/>
					<p
						className={styles.close}
						onClick={handleHide}
					>
						X
					</p>
					<motion.div
						variants={creditsVariants}
						initial='hidden'
						animate='visible'
						className={styles.creditscontent}
					>
						<div className={styles.credits}>
							<div className={styles.creditsgroup}>
								<p className={styles.h1}>
									<StyledText text={'August Gaukstad'} />
								</p>
								<p>Portfolio site</p>
							</div>
							<div className={styles.creditsgroup}>
								<p className={styles.h2}>
									<StyledText text={'Core team'} />
								</p>
								<Contributor
									name={'August Gaukstad'}
									role={'Director'}
								/>
								<Contributor
									name={'August Gaukstad'}
									role={'Producer'}
								/>
								<Contributor
									name={'Solveig Hisdal'}
									role={'Creative Director'}
								/>

								<Contributor
									name={'August Gaukstad'}
									role={'Lead Developer'}
								/>
								<Contributor
									name={'ChatGPT'}
									role={'Assistant Developer'}
								/>
								<Contributor
									name={'My Spotify Playlists'}
									role={'Psychiatrist'}
								/>
							</div>
							<div className={styles.creditsgroup}>
								<p className={styles.h2}>
									<StyledText text={'Design'} />
								</p>
								<Contributor
									name={'Solveig Hisdal'}
									role={'Lead Designer'}
								/>
								<Contributor
									name={'August Gaukstad'}
									role={'Designer'}
								/>
								<p className={styles.h3}>
									<StyledText text={'Inspiration'} />
								</p>
								<Contributor
									name={'hoverstat.es'}
									role={'Website'}
								/>
								<p className={styles.h3}>
									<StyledText text={'Fonts'} />
								</p>
								<Contributor
									name={'Editorial Old'}
									role={'Headings'}
								/>
								<Contributor
									name={'Neue Montreal'}
									role={'Body text'}
								/>
								<p className={styles.h3}>
									<StyledText text={'Colors'} />
								</p>
								<Contributor
									name={'#05429B'}
									role={'Blue'}
								/>
								<Contributor
									name={'#988870'}
									role={'Beige'}
								/>
								<Contributor
									name={'#71273A'}
									role={'Wine red'}
								/>
								<Contributor
									name={'#666135'}
									role={'Green'}
								/>
								<Contributor
									name={'#FFFFFF'}
									role={'White'}
								/>
								<Contributor
									name={'#000000'}
									role={'Black'}
								/>
							</div>
							<div className={styles.creditsgroup}>
								<p className={styles.h2}>
									<StyledText text={'Local heroes'} />
								</p>
								<Contributor
									name={'Sun Sushi Torshov'}
									role={'Sustenance'}
								/>
								<Contributor
									name={'Apsorn Thai Torshov'}
									role={'Sustenance'}
								/>
								<Contributor
									name={'Sørlandschips'}
									role={'Sustenance'}
								/>
							</div>
							<div className={styles.creditsgroup}>
								<p className={styles.h2}>
									<StyledText text={'Special thanks'} />
								</p>
								<Contributor
									name={'Solveig Hisdal'}
									role={'Brainstormer'}
								/>
								<Contributor
									name={'Espen Jensvold'}
									role={'Brainstormer'}
								/>
								<Contributor
									name={'Håvar Fagerheim'}
									role={'Discord Companion'}
								/>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</div>
	);
};

export default Credits;
