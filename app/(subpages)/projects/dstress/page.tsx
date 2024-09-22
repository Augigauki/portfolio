'use client';

import { useColor } from '@/context/ColorContext';
import styles from './Dstress.module.css';
import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import Line from '@/components/Projects/UI/Line/Line';
import ProjectContentWrapper from '@/components/Wrappers/ProjectContentWrapper';
import HeroImageWrapper from '@/components/Projects/UI/HeroImage/HeroImageWrapper';
import Meta from '@/components/Projects/UI/Meta/Meta';
import P5wrapper from '@/components/p5wrapper/P5wrapper';
import claustro from '@/components/Dstress/Sketches/Claustro';
import ProjectPageTitle from '@/components/Projects/UI/ProjectPageTitle/ProjectPageTitle';
import { line } from 'framer-motion/client';
import TitleBg from '@/components/Projects/UI/ProjectPageTitle/TitleBg';
import { Spotify } from 'react-spotify-embed';
import metathesio from '@/components/Dstress/Sketches/Metathesio';
import thalasso from '@/components/Dstress/Sketches/Thalasso';

const Dstress = ({}) => {
	const color = 'var(--white)';
	const metaLeft = '6rem';
	const metaRight = '24rem';

	const { setLineColor, setBgColor, bgColor, lineColor } = useColor();

	setBgColor('rgb(0,0,0)');
	setLineColor('rgb(255,255,255)');

	return (
		<div style={{ backgroundColor: bgColor, paddingBottom: '100vh' }}>
			<ContentWrapper>
				<Line color={color} />
				<ProjectContentWrapper>
					<HeroImageWrapper
						src={'/assets/images/projects/dstress/mock.jpg'}
						alt={'mock'}
					/>
					<Meta
						color={color}
						left={metaLeft}
					>
						Schoolwork 2020
					</Meta>
					<div style={{ position: 'relative' }}>
						<ProjectPageTitle
							text={'D.Stress'}
							color={lineColor}
							level={'h1'}
							bg={true}
						/>
						<TitleBg color={bgColor} />
					</div>
					<Meta
						color={lineColor}
						right={'16rem'}
					>
						Interactive artworks
					</Meta>
					<div className={styles.phobiasection}>
						<div
							className={styles.phobiaheadingcontainer}
							style={{ position: 'relative' }}
						>
							<h3 className={styles.phobiatitle}>CLAUSTROPHOBIA</h3>
							<TitleBg color={bgColor} />
						</div>
						<div className={styles.sketchwrapper}>
							<div style={{ width: 'unset', height: 'auto', borderRadius: '.75rem', overflow: 'hidden' }}>
								<P5wrapper sketch={claustro} />
							</div>
							<div className={styles.playlistwrapper}>
								<Spotify
									wide
									link={
										'https://open.spotify.com/playlist/7KPdSWuPfAPZIX0aKweSTk?si=ce9e1dc0528a4e9c'
									}
								/>
							</div>
						</div>
					</div>
					<div className={styles.phobiasection}>
						<div
							className={styles.phobiaheadingcontainer}
							style={{ position: 'relative' }}
						>
							<h3 className={styles.phobiatitle}>METATHESIOPHOBIA</h3>
							<TitleBg color={bgColor} />
						</div>
						<div className={styles.sketchwrapper}>
							<div style={{ width: 'unset', height: 'auto', borderRadius: '.75rem', overflow: 'hidden', outline: '2px solid white' }}>
								<P5wrapper sketch={metathesio} />
							</div>
							<div className={styles.playlistwrapper}>
								<Spotify
									wide
									link={
										'https://open.spotify.com/playlist/06bqVP9vB06dUlk21IGreb?si=39235bee87e848eb'
									}
								/>
							</div>
						</div>
					</div>
					<div className={styles.phobiasection}>
						<div
							className={styles.phobiaheadingcontainer}
							style={{ position: 'relative' }}
						>
							<h3 className={styles.phobiatitle}>THALASSOPHOBIA</h3>
							<TitleBg color={bgColor} />
						</div>
						<div className={styles.sketchwrapper}>
							<div style={{ width: 'unset', height: 'auto', borderRadius: '.75rem', overflow: 'hidden', outline: '2px solid white' }}>
								<P5wrapper sketch={thalasso} />
							</div>
							<div className={styles.playlistwrapper}>
								<Spotify
									wide
									link={
										'https://open.spotify.com/playlist/2mqGKEXgBQHH3069sR1HOw?si=370572d60f8645ad'
									}
								/>
							</div>
						</div>
					</div>
				</ProjectContentWrapper>
			</ContentWrapper>
		</div>
	);
};

export default Dstress;
