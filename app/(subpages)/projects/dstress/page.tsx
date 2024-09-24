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
import trypo from '@/components/Dstress/Sketches/Trypo';
import ProjectBodyText from '@/components/Projects/UI/ProjectBodyText/ProjectBodyText';

const Dstress = ({}) => {
	const color = 'var(--white)';
	const metaLeft = '10rem';
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
						right={'10rem'}
					>
						Interactive artworks
					</Meta>
					{/* Claustro */}
					<div className={styles.phobiacontainer}>
						<div className={styles.phobiatextwrapper}>
							<div className={styles.phobiaheadingcontainer}>
								<h3 className={styles.phobiatitle}>CLAUSTROPHOBIA</h3>
								<TitleBg color={bgColor} />
							</div>
							<p className={styles.bodytext}>
								The fear of being trapped in small or confined spaces
							</p>
						</div>
						<div className={styles.sketchwrapper2}>
							<P5wrapper sketch={claustro} />
						</div>
						<div className={styles.phobiacontent}>
							<p className={styles.bodytext}>
								It is one of the more common phobias worldwide. For some it can linger from a traumatic
								childhood experience of being trapped to some extent, but some believe the cause is more
								of an evolutionary one. A fear of small spaces could pose some evolutionary benefit.
								<br></br>
								<br></br>For this album we have chosen songs that are more repetetive and intense in
								nature. Once the songs start they don&apos;t really let the listener go before the song
								has ended.
							</p>
							<div className={styles.playlistwrapper2}>
								<Spotify
									link={
										'https://open.spotify.com/playlist/7KPdSWuPfAPZIX0aKweSTk?si=ce9e1dc0528a4e9c'
									}
								/>
							</div>
						</div>
					</div>
					{/* Metathesio */}
					<div className={styles.phobiacontainer}>
						<div className={styles.phobiatextwrapper}>
							<div className={styles.phobiaheadingcontainer}>
								<h3 className={styles.phobiatitle}>METATHESIOPHOBIA</h3>
								<TitleBg color={bgColor} />
							</div>
							<p className={styles.bodytext}>
							 The fear of change or changing
							</p>
						</div>
						<div className={styles.sketchwrapper2}>
							<P5wrapper sketch={metathesio} />
						</div>
						<div className={styles.phobiacontent}>
							<p className={styles.bodytext}>
							It is important to note that the ocean does pose many risks and it is wise to be cautious of it, but people with full blown thalassophobia will look at those risks through a magnifying glass and make them their focal point of their idea of the sea.
								<br></br>
								<br></br>
								For this album we have chosen songs that can .
							</p>
							<div className={styles.playlistwrapper2}>
								<Spotify
									link={
										'https://open.spotify.com/playlist/06bqVP9vB06dUlk21IGreb?si=39235bee87e848eb'
									}
								/>
							</div>
						</div>
					</div>
					{/* Thalasso */}
					<div className={styles.phobiacontainer}>
						<div className={styles.phobiatextwrapper}>
							<div className={styles.phobiaheadingcontainer}>
								<h3 className={styles.phobiatitle}>THALASSOPHOBIA</h3>
								<TitleBg color={bgColor} />
							</div>
							<p className={styles.bodytext}>
							The fear of being in large bodies of water or the ocean
							</p>
						</div>
						<div className={styles.sketchwrapper2}>
							<P5wrapper sketch={thalasso} />
						</div>
						<div className={styles.phobiacontent}>
							<p className={styles.bodytext}>
							People suffering from Thalassophobia live with an irrational fear of the ocean or other larger bodies of water. They might be scared of its vast emptiness, being lost at sea, far from land and safety.
								<br></br>
								<br></br>For this album we have chosen songs that sound a bit like the ocean or water in a abstract kind of way.
							</p>
							<div className={styles.playlistwrapper2}>
								<Spotify
									link={
										'https://open.spotify.com/playlist/2mqGKEXgBQHH3069sR1HOw?si=370572d60f8645ad'
									}
								/>
							</div>
						</div>
					</div>

					{/* Trypo */}
					<div className={styles.phobiacontainer}>
						<div className={styles.phobiatextwrapper}>
							<div className={styles.phobiaheadingcontainer}>
								<h3 className={styles.phobiatitle}>TRYPOPHOBIA</h3>
								<TitleBg color={bgColor} />
							</div>
							<p className={styles.bodytext}>
							The fear of holes and/or irregular patterns
							</p>
						</div>
						<div className={styles.sketchwrapper2}>
							<P5wrapper sketch={trypo} />
						</div>
						<div className={styles.phobiacontent}>
							<p className={styles.bodytext}>
							People suffering from severe trypophobia may find everyday objects with holes in them troubling to be around, such as certain cheese, vegetables, pores on the skin, sponges and so on.
								<br></br>
								<br></br>For this album we have chosen songs that feature a lot of small repetetive sounds.
							</p>
							<div className={styles.playlistwrapper2}>
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
