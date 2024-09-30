'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Credits.module.css';
import { motion } from 'framer-motion';
import Contributor from './Contributor';
import StyledText from '../UI/StyledText';
import { useColor } from '@/context/ColorContext';

const Credits = ({}) => {
	const [showCredits, setShowCredits] = useState(false);
	const [duration, setDuration] = useState(60);
	const { lineColor } = useColor();

	useEffect(() => {
		const calculateDuration = () => {
			if (typeof window !== 'undefined') {
				const width = window.innerWidth;

				if (width < 600) {
					// Mobile view
					return 90;
				} else if (width < 1200) {
					return 75;
				} else {
					// Desktop view
					return 60;
				}
			}
			return 60;
		};

		setDuration(calculateDuration());

		const handleResize = () => {
			setDuration(calculateDuration());
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
        // Function to close credits on 'Escape' key press
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setShowCredits(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

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
			y: '-100%',
			transition: { duration: duration, ease: 'linear' },
		},
	};

	return (
		<div>
			<p
				className={styles.link}
				onClick={handleShow}
				style={{ color: lineColor }}
			>
				Credits
			</p>
			{showCredits && (
				<div className={styles.creditswrapper}>
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
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<line
									x1='18'
									y1='6'
									x2='6'
									y2='18'
								/>
								<line
									x1='6'
									y1='6'
									x2='18'
									y2='18'
								/>
							</svg>
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
										role={'Visual Director'}
										name={'Solveig Hisdal'}
									/>
									<Contributor
										role={'Developer'}
										name={'August Gaukstad'}
									/>

									<Contributor
										role={'Assistant Developer'}
										name={'ChatGPT'}
									/>
									<Contributor
										role={'Sanity'}
										name={'My Spotify Playlists'}
									/>
								</div>
								<div className={styles.creditsgroup}>
									<p className={styles.h2}>
										<StyledText text={'Development'} />
									</p>
									<Contributor
										role={'Framework'}
										name={'NextJS'}
									/>
									<Contributor
										role={'Hosting'}
										name={'Digital Ocean'}
									/>

									<Contributor
										role={'Deployment tool'}
										name={'Coolify'}
									/>
									<Contributor
										role={'Code Editor'}
										name={'VS Code'}
									/>
								</div>
								<div className={styles.creditsgroup}>
									<p className={styles.h2}>
										<StyledText text={'Design'} />
									</p>
									<Contributor
										role={'Lead Designer'}
										name={'Solveig Hisdal'}
									/>
									<Contributor
										role={'Designer'}
										name={'August Gaukstad'}
									/>

									<p className={styles.h3}>
										<StyledText text={'Inspiration'} />
									</p>
									<Contributor
										role={'Websites'}
										name={'hoverstat.es'}
									/>
									<p className={styles.h3}>
										<StyledText text={'Fonts'} />
									</p>
									<Contributor
										role={'Headings'}
										name={'Editorial Old'}
									/>
									<Contributor
										role={'Body text'}
										name={'Neue Montreal'}
									/>
									<Contributor
										role={'Foundry'}
										name={'Pangram Pangram'}
									/>
									<p className={styles.h3}>
										<StyledText text={'Colors'} />
									</p>
									<Contributor
										role={'Blue'}
										name={'#05429B'}
									/>
									<Contributor
										role={'Beige'}
										name={'#988870'}
									/>
									<Contributor
										role={'Wine red'}
										name={'#71273A'}
									/>
									<Contributor
										role={'Green'}
										name={'#666135'}
									/>
									<Contributor
										role={'White'}
										name={'#FFFFFF'}
									/>
									<Contributor
										role={'Black'}
										name={'#000000'}
									/>
								</div>
								<div className={styles.creditsgroup}>
									<p className={styles.h2}>
										<StyledText text={'Catering'} />
									</p>
									<Contributor
										role={'Dinners'}
										name={'Sun Sushi Torshov'}
									/>
									<Contributor
										role={'Dinners'}
										name={'Apsorn Thai Torshov'}
									/>
									<Contributor
										role={'Snacks'}
										name={'Sørlandschips'}
									/>
									<Contributor
										role={'Snacks'}
										name={'Gifflar'}
									/>
									<Contributor
										role={'Snacks'}
										name={'Smash'}
									/>
									<Contributor
										role={'Drinks'}
										name={'Farris Frus'}
									/>
									<Contributor
										role={'Drinks'}
										name={'Beer'}
									/>
								</div>
								<div className={styles.creditsgroup}>
									<p className={styles.h2}>
										<StyledText text={'Special thanks'} />
									</p>
									<Contributor
										role={'For all your time'}
										name={'Solveig Hisdal'}
									/>
									<Contributor
										role={'For companionship and ideas'}
										name={'Espen Jensvold'}
									/>
									<Contributor
										role={'For presence on Discord'}
										name={'Håvar Fagerheim'}
									/>
									<Contributor
										role={'For presence on Discord'}
										name={'Sebastian Mangseth'}
									/>
									<Contributor
										role={'For unconditional love and support'}
										name={'My mom'}
									/>
									<div style={{ paddingTop: '2rem' }}>
										<Contributor
											role={'For visiting my site'}
											name={'You!'}
										/>
									</div>
								</div>
							</div>
						</motion.div>
					</>
				</div>
			)}
		</div>
	);
};

export default Credits;
