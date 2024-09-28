'use client';

import { useColor } from '@/context/ColorContext';
import styles from './About.module.css';
import StyledText from '@/components/UI/StyledText';
import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import ProjectBodyText from '@/components/Projects/UI/ProjectBodyText/ProjectBodyText';
import ProjectFlexWrapper from '@/components/Projects/UI/ProjectFlex/ProjectFlexWrapper';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Line from '@/components/Projects/UI/Line/Line';
import Link from 'next/link';

const page = ({}) => {
	const color = 'var(--green)';
	const { setLineColor, setBgColor, lineColor } = useColor();
	setBgColor('rgb(255, 255, 255)');
	setLineColor('rgb(102, 97, 53)');

	return (
		<motion.div
			className={styles.aboutpage}
			animate={{ color: lineColor }}
			initial={{ color: lineColor }}
		>
			<ContentWrapper>
				<Line color={color} />
				{/* <ProjectFlexWrapper>
					<div className={styles.fleximgwrapper}>
						<Image
							src={'/assets/images/about/augusts.gif'}
							alt='A gif with various images of August (me)'
							fill={true}
						/>
					</div>
					<ProjectBodyText color={lineColor}>
						Hi, I'm August, a front-end developer based in Oslo. With a background in graphic design and IT, I bring a blend of creativity and technical expertise to every project I work on.
					</ProjectBodyText>
				</ProjectFlexWrapper> */}
				<div className={styles.aboutintro}>
					<div className={styles.fleximgwrapper}>
						<Image
							src={'/assets/images/about/augusts.gif'}
							alt='A gif with various images of August (me)'
							fill={true}
						/>
					</div>
					<ProjectBodyText color={lineColor}>
						Hi, I'm August, a front-end developer based in Oslo. With a background in graphic design and IT,
						I bring a blend of creativity and technical expertise to every project I work on.
						<br></br>
						<br></br>I have a bachelor's degree in{' '}
						<span className={styles.em}>Informatics: Design, use and interaction</span> from{' '}
						<span className={styles.strong}>the University of Oslo</span>, and a bachelor's degree in{' '}
						<span className={styles.em}>Graphic design</span> from{' '}
						<span className={styles.strong}>Høyskolen Kristiania</span>.<br></br>
						<br></br>
						Besides doing front-end at <Link href='https://intility.com/'>Intility</Link>, I enjoy{' '}
						<Link href='https://open.spotify.com/user/c4k3m0nst3r?si=c7211277f6214b1f'>
							listening to music
						</Link>
						, doing some <Link href='https://www.instagram.com/augustgaukstad/'>hobby photography</Link>,
						reading <Link href='https://www.goodreads.com/user/show/173980980-august-gaukstad'>books</Link>,
						playing games, and watching{' '}
						<Link href='https://letterboxd.com/augustgaukstad/'>movies/series</Link>.<br></br>
						<br></br>I also do a lot of silly things like keep a note on my phone with silly sketch ideas,
						create my own memes, develop <Link href={'https://hvilkendagerdet.no'}>small stupid sites</Link>{' '}
						and more.
						<br></br>
						<br></br>
						If you want to stalk more you can check my{' '}
						<Link href='https://github.com/Augigauki'>Github</Link> or{' '}
						<Link href='https://www.linkedin.com/in/august-l%C3%B8vold-gaukstad-78b057b9/'>LinkedIn</Link>{' '}
						as well 🤓
					</ProjectBodyText>
				</div>
				{/* <h1 className={styles.h1}>
					<StyledText text={'August Gaukstad'} />
				</h1> */}
			</ContentWrapper>
		</motion.div>
	);
};

export default page;
