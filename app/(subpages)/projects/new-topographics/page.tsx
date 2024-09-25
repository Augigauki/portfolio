'use client';

import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import styles from './NewTopo.module.css';
import ProjectContentWrapper from '@/components/Wrappers/ProjectContentWrapper';
import HeroImageWrapper from '@/components/Projects/UI/HeroImage/HeroImageWrapper';
import ProjectPageTitle from '@/components/Projects/UI/ProjectPageTitle/ProjectPageTitle';
import Line from '@/components/Projects/UI/Line/Line';
import Meta from '@/components/Projects/UI/Meta/Meta';
import ProjectFlexWrapper from '@/components/Projects/UI/ProjectFlex/ProjectFlexWrapper';
import ProjectBodyText from '@/components/Projects/UI/ProjectBodyText/ProjectBodyText';
import Image from 'next/image';
import italyman from '@/public/assets/images/projects/newtopo/page/italyman.jpg';
import { useColor } from '@/context/ColorContext';
import TitleBg from '@/components/Projects/UI/ProjectPageTitle/TitleBg';
import LongLongImage from '@/components/Projects/UI/LongLongImage/LongLongImage';
import Catchphrase from '@/components/Projects/UI/Catchphrase/Catchphrase';

const NewTopo = ({}) => {
	const clr = 'var(--winered)';
	const metaLeft = '6rem';
	const metaRight = '24rem';

	const imgpath = '/assets/images/projects/newtopo/page/';

	const { setLineColor, lineColor } = useColor();
	setLineColor('rgb(113, 39, 58)');

	return (
		<div style={{ paddingBottom: '10rem' }}>
			<ContentWrapper>
				<Line color={clr} />
				<ProjectContentWrapper>
					<HeroImageWrapper
						src={`${imgpath}hero.jpg`}
						alt={'Architecture photograph'}
					/>
					<Meta
						color={clr}
						left={'6rem'}
					>
						Website 2019
					</Meta>
					<div style={{ position: 'relative' }}>
						<ProjectPageTitle
							text={'New Topographics'}
							color={'var(--winered)'}
							level={'h1'}
						/>
						<TitleBg />
					</div>
					<Meta
						color={clr}
						right={metaRight}
					>
						New Topographics is an online photography museum
					</Meta>
					<ProjectFlexWrapper>
						<div className={styles.fleximgwrapper}>
							<Image
								src={italyman}
								alt='Person walking up old italian city streets, parked cars at the side of the road and a wall with vines growing on it at the edge of the road. Old buildings in the background.'
								fill={true}
							/>
						</div>
						<ProjectBodyText color={clr}>
							The culmination of a course in exploration in visual design at Westerdals, New Topographics
							has since become a passion project.
							<br></br>
							<br></br>New Topographics is a movement in photography with a more objective and detached
							approach to landscape photography, focusing on man-made landscapes - built environments,
							suburban sprawls, industrial structures and the mundane aspects of daily life.<br></br>
							<br></br> Much like a city does, this project has undergone several transformations,
							visually and technically. Beginning as a Wordpress site, moving on to being built with
							Webflow, currently as a NextJS project with Sanity as a CMS, and undergoing a (mainly
							backend) switch to NextJS + PayloadCMS for content management.
						</ProjectBodyText>
					</ProjectFlexWrapper>
				</ProjectContentWrapper>
			</ContentWrapper>
			<LongLongImage
				src={`${imgpath}3.jpg`}
				alt={'tekst'}
			/>
			<ContentWrapper>
				<ProjectContentWrapper>
					<Catchphrase phrase={'Documenting the steady creep of suburban development'}>
						<Image
							src={`${imgpath}cp-2.jpg`}
							alt='test'
							width={3840 / 6}
							height={2161 / 5}
							className={styles.catchphraseimg}
							id={styles.img1}
						/>
						<Image
							src={`${imgpath}cp-1.jpg`}
							alt='test'
							width={3840 / 6}
							height={2161 / 5}
							className={styles.catchphraseimg}
							id={styles.img2}
						/>
					</Catchphrase>
					<ProjectFlexWrapper reverse={true}>
						<div className={styles.fleximgwrapper}>
							<Image
								src={`${imgpath}flex-2.jpg`}
								alt='Person walking up old italian city streets, parked cars at the side of the road and a wall with vines growing on it at the edge of the road. Old buildings in the background.'
								fill={true}
							/>
						</div>
						<ProjectBodyText color={clr}>
							The museum is a collaborative project, showcasing New Topographics photography from friends
							and strangers who have chosen to submit their photos to the project.
							<br></br>
							<br></br>
							Exhibitions are created for countries and photographers, letting visitors explore either a
							country&apos;s style or a photographer&apos;s work.
							<br></br>
							<br></br>
							Some photographs feature a link, taking the visitor to the same location from the photograph
							in Google Streetview.
						</ProjectBodyText>
					</ProjectFlexWrapper>
					<Catchphrase phrase={'Abandoning the romanticism and idealism associated with landscape photography'}>
						<Image
							src={`${imgpath}cp-3.jpg`}
							alt='test'
							width={3072 / 6}
							height={4080 / 5}
							className={styles.catchphraseimg}
							id={styles.img3}
						/>
						<Image
							src={`${imgpath}cp-4.jpg`}
							alt='test'
							width={2000 / 3}
							height={1355 / 3}
							className={styles.catchphraseimg}
							id={styles.img4}
						/>
					</Catchphrase>
				</ProjectContentWrapper>
			</ContentWrapper>
		</div>
	);
};

export default NewTopo;
