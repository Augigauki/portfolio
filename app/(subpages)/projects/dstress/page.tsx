'use client';

import dynamic from 'next/dynamic';
import { useColor } from '@/context/ColorContext';
import styles from './Dstress.module.css';
import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import Line from '@/components/Projects/UI/Line/Line';
import ProjectContentWrapper from '@/components/Wrappers/ProjectContentWrapper';
import HeroImageWrapper from '@/components/Projects/UI/HeroImage/HeroImageWrapper';
import Meta from '@/components/Projects/UI/Meta/Meta';
import ProjectPageTitle from '@/components/Projects/UI/ProjectPageTitle/ProjectPageTitle';
import TitleBg from '@/components/Projects/UI/ProjectPageTitle/TitleBg';
import { Spotify } from 'react-spotify-embed';
//import P5wrapper from '@/components/p5wrapper/P5wrapper';
import claustro from '@/components/Dstress/Sketches/Claustro';
import metathesio from '@/components/Dstress/Sketches/Metathesio';
import thalasso from '@/components/Dstress/Sketches/Thalasso';
import trypo from '@/components/Dstress/Sketches/Trypo';
import StyledText from '@/components/UI/StyledText';
import { useEffect, useState } from 'react';

const P5wrapper = dynamic(() => import('@/components/p5wrapper/P5wrapper'), { ssr: false });

const Dstress = ({}) => {
	const color = 'var(--white)';

	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth);

		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const { setLineColor, setBgColor, bgColor, lineColor } = useColor();

	setBgColor('rgb(0,0,0)');
	setLineColor('rgb(255,255,255)');

	return (
		<div
			style={{ backgroundColor: bgColor }}
			className={styles.dstress}
		>
			<ContentWrapper>
				<Line color={color} />
				<ProjectContentWrapper>
					<HeroImageWrapper
						src={'/assets/images/projects/dstress/page/dstresshero.jpg'}
						alt={'mock'}
					/>
					<Meta
						color={color}
						id='dstress-type'
					>
						Schoolwork 2020
					</Meta>
					<div style={{ position: 'relative' }}>
						<ProjectPageTitle
							text={'D.Stress'}
							color={lineColor}
							level={'h1'}
						/>
						<TitleBg color={bgColor} />
					</div>
					<Meta
						color={lineColor}
						id='dstress-desc'
					>
						Interactive artworks
					</Meta>
					{/* Claustro */}
					<div className={styles.phobwrapper}>
						<div className={styles.phobtextwrapper}>
							<h2 className={styles.h2}>
								<StyledText text={'Claustrophobia'} />
							</h2>
							<div className={styles.phobinfo}>
								<p className={styles.descriptor}>
									The fear of being trapped in small or confined spaces
								</p>
								<p>
									It is one of the more common phobias worldwide. For some it can linger from a
									traumatic childhood experience of being trapped to some extent, but some believe the
									cause is more of an evolutionary one. A fear of small spaces could pose some
									evolutionary benefit.
									<br></br>
									<br></br>This playlist contains songs that are more repetetive and intense in
									nature. Once the songs start they don&apos;t really let you go before the song has
									ended.
								</p>
							</div>
						</div>
						<div className={styles.centered}>
							{windowWidth > 1440 ? (
								<div className={styles.sketchwrapper}>
									<P5wrapper sketch={claustro} />
								</div>
							) : (
								<div className={styles.videowrapper}>
									<video
										autoPlay
										muted
										loop
										className={styles.video}
										poster='/assets/images/projects/dstress/page/CLAUSTRO.jpg'
									>
										<source
											src='/assets/images/projects/dstress/page/Claustro.webm'
											type='video/webm'
										/>
										<source
											src='/assets/images/projects/dstress/page/claustro.mp4'
											type='video/mp4'
										/>
									</video>
									<p className={styles.disclaimer}>
										Interactive version on desktop above 1440px only, sorry!
									</p>
								</div>
							)}

							<div className={styles.playlist}>
								<Spotify
									link={
										'https://open.spotify.com/playlist/7KPdSWuPfAPZIX0aKweSTk?si=ce9e1dc0528a4e9c'
									}
								/>
							</div>
						</div>
					</div>
					{/* Metathesio */}
					<div className={styles.phobwrapper}>
						<div className={styles.phobtextwrapper}>
							<h2 className={styles.h2}>
								<StyledText text={'Metathesiophobia'} />
							</h2>
							<div className={styles.phobinfo}>
								<p className={styles.descriptor}>The fear of change or changing</p>
								<p>
									It is important to note that the ocean does pose many risks and it is wise to be
									cautious of it, but people with full blown thalassophobia will look at those risks
									through a magnifying glass and make them their focal point of their idea of the sea.
									<br></br>
									<br></br>
									This playlist consists of songs that changes and evolves throughout their playtime.
								</p>
							</div>
						</div>
						<div className={styles.centered}>
							{windowWidth > 1440 ? (
								<div className={styles.sketchwrapper}>
									<P5wrapper sketch={metathesio} />
								</div>
							) : (
								<div className={styles.videowrapper}>
									<video
										autoPlay
										muted
										loop
										className={styles.video}
										poster='/assets/images/projects/dstress/page/meta-capture.png'
									>
										<source
											src='/assets/images/projects/dstress/page/Metathesio.webm'
											type='video/webm'
										/>
										<source
											src='/assets/images/projects/dstress/page/metathesio.mp4'
											type='video/mp4'
										/>
									</video>
									<p className={styles.disclaimer}>
										Interactive version on desktop above 1440px only, sorry!
									</p>
								</div>
							)}
							<div className={styles.playlist}>
								<Spotify
									link={
										'https://open.spotify.com/playlist/06bqVP9vB06dUlk21IGreb?si=39235bee87e848eb'
									}
								/>
							</div>
						</div>
					</div>
					<div className={styles.intermissionwrapper}>
						<p className={styles.intermission}>
							<StyledText text={'Interactive album artworks that might be mildly triggering.'} />
						</p>
					</div>
					{/* Thalasso */}
					<div className={styles.phobwrapper}>
						<div className={styles.phobtextwrapper}>
							<h2 className={styles.h2}>
								<StyledText text={'Thalassophobia'} />
							</h2>
							<div className={styles.phobinfo}>
								<p className={styles.descriptor}>
									The fear of being in large bodies of water or the ocean
								</p>
								<p>
									People suffering from Thalassophobia live with an irrational fear of the ocean or
									other larger bodies of water. They might be scared of its vast emptiness, being lost
									at sea, far from land and safety.
									<br></br>
									<br></br>This playlist consists of songs that sound a bit like the ocean or water in
									a abstract kind of way.
								</p>
							</div>
						</div>
						<div className={styles.centered}>
							{windowWidth > 1440 ? (
								<div className={styles.sketchwrapper}>
									<P5wrapper sketch={thalasso} />
								</div>
							) : (
								<div className={styles.videowrapper}>
									<video
										autoPlay
										muted
										loop
										className={styles.video}
										poster='/assets/images/projects/dstress/page/thalasso-capture.png'
									>
										<source
											src='/assets/images/projects/dstress/page/Thalasso.webm'
											type='video/webm'
										/>
										<source
											src='/assets/images/projects/dstress/page/thalasso.mp4'
											type='video/mp4'
										/>
									</video>
									<p className={styles.disclaimer}>
										Interactive version on desktop above 1440px only, sorry!
									</p>
								</div>
							)}
							<div className={styles.playlist}>
								<Spotify
									link={
										'https://open.spotify.com/playlist/2mqGKEXgBQHH3069sR1HOw?si=370572d60f8645ad'
									}
								/>
							</div>
						</div>
					</div>

					{/* Trypo */}
					<div className={styles.phobwrapper}>
						<div className={styles.phobtextwrapper}>
							<h2 className={styles.h2}>
								<StyledText text={'Trypophobia'} />
							</h2>
							<div className={styles.phobinfo}>
								<p className={styles.descriptor}>The fear of holes and/or irregular patterns</p>
								<p>
									People suffering from severe trypophobia may find everyday objects with holes in
									them troubling to be around, such as certain cheese, vegetables, pores on the skin,
									sponges and so on.
									<br></br>
									<br></br>This playlist consists of songs that feature a lot of small repetetive
									sounds, a nod to holes and small patterns.
								</p>
							</div>
						</div>
						<div className={styles.centered}>
							{windowWidth > 1440 ? (
								<div className={styles.sketchwrapper}>
									<P5wrapper sketch={trypo} />
								</div>
							) : (
								<div className={styles.videowrapper}>
									<video
										autoPlay
										muted
										loop
										className={styles.video}
										poster='/assets/images/projects/dstress/page/trypo-capture.png'
									>
										<source
											src='/assets/images/projects/dstress/page/Trypo.webm'
											type='video/webm'
										/>
										<source
											src='/assets/images/projects/dstress/page/trypo.mp4'
											type='video/mp4'
										/>
									</video>
									<p className={styles.disclaimer}>
										Interactive version on desktop above 1440px only, sorry!
									</p>
								</div>
							)}
							<div className={styles.playlist}>
								<Spotify
									link={
										'https://open.spotify.com/playlist/2KIr5T0lo9hq8ObKU4NJBp?si=4a3e7a3d92334bc8'
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
