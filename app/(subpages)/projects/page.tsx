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
		console.log('yo');
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

	return (
		<motion.div
			animate={{ backgroundColor: bgColor }}
			initial={{ backgroundColor: bgColor }}
			transition={{ duration: 0.5 }}
		>
			<ContentWrapper>
				<div className={styles.outerwrapper}>
					<motion.div
						className={styles.line}
						initial={{ backgroundColor: lineColor }}
						animate={{ backgroundColor: lineColor }}
						transition={{ duration: 0.5 }}
					/>
					<div
						ref={newTopoRef}
						className={styles.projectcontainer}
					>
						<ProjectWrapper color={newTopoColor}>
							<Link
								href='/projects/new-topographics'
								className={styles.imglink}
								id={styles.newtopoimg1}
							>
								<Image
									src={'/assets/images/projects/newtopo/newtopo1.jpg'}
									alt='Car garage canada'
									width={325 * 3}
									height={216 * 3}
									className={styles.image}
									id={styles.canadacar}
								/>
								<div className={styles.metalink}>
									<Meta
										color={newTopoColor}
										id='pp-newtopo-descriptor'
										left={'0'}
										top={'40rem'}
									>
										New Topographics is an online photography museum
									</Meta>
								</div>
							</Link>

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
							<Link
								href='/projects/new-topographics'
								className={styles.imglink}
								id={styles.newtopoimg2}
							>
								<Image
									src={'/assets/images/projects/newtopo/newtopo2.jpg'}
									alt='Intility'
									width={324 * 1.5}
									height={220 * 1.5}
									className={styles.image}
									id={styles.intility}
								/>
								<div className={styles.metalink}>
									<Meta
										color={newTopoColor}
										id='pp-newtopo-category'
									>
										Webdesign & development
									</Meta>
								</div>
							</Link>
						</ProjectWrapper>
					</div>
					<div
						ref={firuRef}
						className={styles.projectcontainer}
					>
						<ProjectWrapper color={'rgb(5, 66, 155)'}>
							<Link
								href='/projects/firu'
								id={styles.firuimg1}
								className={styles.imglink}
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
								<div className={styles.metalink}>
									<Meta
										color={firuColor}
										id={'pp-firu-descriptor'}
										right={'0'}
										bottom={'0'}
									>
										Firu is a magazine about japanophilia
									</Meta>
								</div>
							</Link>
							<Link
								href='/projects/firu'
								id={'pp-firu-category'}
								className={styles.metalink}
							>
								<Meta
									color={firuColor}
									/* id={'pp-firu-category'} */
								>
									Editorial 2018
								</Meta>
							</Link>
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

							<Link
								href='/projects/firu'
								id='pp-firu-client'
								className={styles.metalink}
							>
								<Meta color={firuColor}>Schoolwork</Meta>
							</Link>
							<Link
								href='/projects/firu'
								className={styles.imglink}
								id={styles.firuimg2}
							>
								<Image
									src={'/assets/images/projects/firu/detail.jpg'}
									alt='FIRU Detail'
									width={324 * 1.5}
									height={220 * 1.5}
									className={styles.image}
									id={styles.firudetail}
									style={{ maxWidth: 'unset' }}
								/>
							</Link>
						</ProjectWrapper>
					</div>

					<div
						ref={dstressRef}
						className={styles.projectcontainer}
						id={styles.dstress}
					>
						<ProjectWrapper color={white}>
							<Link
								href='/projects/dstress'
								className={styles.imglink}
								id={styles.dstressimg1}
							>
								<Image
									src={'/assets/images/projects/dstress/CLAUSTRO.jpg'}
									alt='Thumbnail for interactive Claustrophobia artwork'
									width={600}
									height={600}
									className={styles.image}
									id={styles.claustro}
								/>
							</Link>
							<Link
								href='/projects/dstress'
								className={styles.metalink}
								id='pp-dstress-descriptor'
							>
								<Meta color={white}>Interactive Album Artworks About Phobias</Meta>
							</Link>
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
							<Link
								href='/projects/dstress'
								id='pp-dstress-type'
								className={styles.metalink}
							>
								<Meta
									color={white}
								>
									Code exploration
								</Meta>
							</Link>
							<Link
								href='/projects/dstress'
								id={styles.dstressimg2}
								className={styles.imglink}
							>
								<Image
									src={'/assets/images/projects/dstress/METATHESIO.gif'}
									alt='Intility'
									width={600}
									height={600}
									className={styles.image}
									id={styles.metathesio}
									unoptimized
								/>
							</Link>
						</ProjectWrapper>
					</div>
				</div>
			</ContentWrapper>
		</motion.div>
	);
};

export default Projects;
