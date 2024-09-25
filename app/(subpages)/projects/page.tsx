'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import styles from './Projects.module.css';
import NewTopoProjectWrapper from '@/components/Projects/NewTopo/NewTopoProjectWrapper';
import { useColor } from '@/context/ColorContext';
import ProjectWrapper from '@/components/Projects/ProjectWrapper/ProjectWrapper';
import Meta from '@/components/Projects/UI/Meta/Meta';
import Link from 'next/link';
import Image from 'next/image';
import ProjectPageTitle from '@/components/Projects/UI/ProjectPageTitle/ProjectPageTitle';
import TitleBg from '@/components/Projects/UI/ProjectPageTitle/TitleBg';

const Projects = () => {
	const firuRef = useRef(null);
	const newTopoRef = useRef(null);
	const dstressRef = useRef(null);

	const fallbackColor = 'rgb(5, 66, 155)';
	const firuColor = 'rgb(5, 66, 155)';
	const newTopoColor = 'rgb(113, 39, 58)';
	const white = 'rgb(255, 255, 255)';
	const black = 'rgb(0, 0, 0)';

	const firuInView = useInView(firuRef, { margin: '-40% 0px' });
	const newTopoInView = useInView(newTopoRef, { margin: '-40% 0px' });
	const dstressInView = useInView(dstressRef, { margin: '-20% 0px' });

	const { lineColor, setLineColor, bgColor, setBgColor } = useColor();

	useEffect(() => {
		if (firuInView) {
			setLineColor(firuColor);
			setBgColor(white);
		} else if (newTopoInView) {
			setLineColor(newTopoColor);
			setBgColor(white);
		} else if (dstressInView) {
			setLineColor(white);
			setBgColor(black);
		} else {
			setLineColor(fallbackColor);
			setBgColor(white);
		}
	}, [firuInView, newTopoInView, dstressInView, setBgColor, setLineColor]);
	console.log(bgColor);
	return (
		<motion.div animate={{ backgroundColor: bgColor }}>
			<ContentWrapper>
				<div className={styles.outerwrapper}>
					<motion.div
						className={styles.line}
						initial={{ backgroundColor: lineColor }}
						animate={{ backgroundColor: lineColor }}
						transition={{ duration: 1 }}
					/>
					<div
						ref={firuRef}
						className={styles.projectcontainer}
					>
						<ProjectWrapper color={'rgb(5, 66, 155)'}>
							<div
								style={{
									position: 'absolute',
									top: '-94%',
									left: '5%',
									transform: 'translate(0)',
									zIndex: 2,
								}}
							>
								<Image
									src={'/assets/images/projects/firu/spread_1.jpg'}
									alt='FIRU Magazine Spread'
									width={600 * 1.25}
									height={500 * 1.25}
									className={styles.image}
									id={styles.firuspread}
									style={{ maxWidth: 'unset' }}
								/>
								<Meta
									color={firuColor}
									right={'0'}
									bottom={'-2rem'}
								>
									Firu is a magazine about japanophilia
								</Meta>
							</div>
							<Meta
								color={firuColor}
								left={'6rem'}
							>
								Editorial 2018
							</Meta>
							<Link
								href={'/projects/firu'}
								className={styles.projectlink}
							>
								<ProjectPageTitle
									text={'Firu'}
									color={firuColor}
									level={'h2'}
								/>
								<TitleBg />
							</Link>

							<Meta
								color={firuColor}
								left={'6rem'}
							>
								Schoolwork
							</Meta>
							<div
								style={{
									position: 'absolute',
									bottom: '-15%',
									right: '0',
									transform: 'translate(0)',
									zIndex: 2,
								}}
							>
								<Image
									src={'/assets/images/projects/firu/detail.jpg'}
									alt='FIRU Detail'
									width={324 * 1.5}
									height={220 * 1.5}
									className={styles.image}
									id={styles.detail}
									style={{ maxWidth: 'unset' }}
								/>
							</div>
						</ProjectWrapper>
					</div>
					<div
						ref={newTopoRef}
						className={styles.projectcontainer}
					>
						<ProjectWrapper color={newTopoColor}>
							<div
								style={{
									position: 'absolute',
									top: '-94%',
									left: '5%',
									transform: 'translate(0)',
									zIndex: 2,
								}}
							>
								<Image
									src={'/assets/images/projects/newtopo/newtopo1.jpg'}
									alt='Car garage canada'
									width={325 * 1.5}
									height={216 * 1.5}
									className={styles.image}
									id={styles.firuspread}
								/>
								<Meta
									color={newTopoColor}
									left={'0'}
									top={'40rem'}
								>
									New Topographics is an online photography museum
								</Meta>
							</div>

							<Link
								href={'/projects/new-topographics'}
								className={styles.projectlink}
							>
								<ProjectPageTitle
									text={'New Topographics'}
									color={newTopoColor}
									level={'h2'}
								/>
								<TitleBg color={bgColor} />
							</Link>
							<div
								style={{
									position: 'absolute',
									bottom: '-175%',
									right: '0',
									transform: 'translate(0)',
									zIndex: 2,
								}}
							>
								<Image
									src={'/assets/images/projects/newtopo/newtopo2.jpg'}
									alt='Intility'
									width={324 * 1.5}
									height={220 * 1.5}
									className={styles.image}
									id={styles.detail}
								/>
								<Meta
									color={newTopoColor}
									left={'51%'}
									top={'-55rem'}
								>
									Webdesign & development
								</Meta>
							</div>
						</ProjectWrapper>
					</div>
					<div ref={dstressRef} className={styles.projectcontainer} id={styles.dstress}>
						<ProjectWrapper color={white}>
							<div
								style={{
									position: 'absolute',
									top: '-0%',
									left: '5%',
									transform: 'translate(0)',
									zIndex: 2,
								}}
							>
								<Image
									src={'/assets/images/projects/newtopo/newtopo1.jpg'}
									alt='Car garage canada'
									width={325 * 1.5}
									height={216 * 1.5}
									className={styles.image}
									id={styles.firuspread}
								/>
								<Meta
									color={white}
									left={'0'}
									top={'33vh'}
								>
									Interactive Album Artworks About Phobias
								</Meta>
							</div>

							<Link
								href={'/projects/dstress'}
								className={styles.projectlink}
							>
								<ProjectPageTitle
									text={'D.Stress'}
									color={white}
									level={'h2'}
								/>
								<TitleBg color={bgColor} />
							</Link>
							<div
								style={{
									position: 'absolute',
									bottom: '-17%',
									right: '0',
									transform: 'translate(0)',
									zIndex: 2,
								}}
							>
								<Image
									src={'/assets/images/projects/newtopo/newtopo2.jpg'}
									alt='Intility'
									width={324 * 1.5}
									height={220 * 1.5}
									className={styles.image}
									id={styles.detail}
								/>
								<Meta
									color={white}
									left={'0%'}
									top={'-55vh'}
								>
									Code exploration
								</Meta>
							</div>
						</ProjectWrapper>
					</div>
				</div>
			</ContentWrapper>
		</motion.div>
	);
};

export default Projects;
