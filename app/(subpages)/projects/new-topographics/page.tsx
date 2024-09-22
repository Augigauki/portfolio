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

const NewTopo = ({}) => {
	const clr = 'var(--winered)';
	const metaLeft = '6rem';
	const metaRight = '24rem';

	const { setLineColor } = useColor();
	setLineColor('rgb(113, 39, 58)');

	return (
		<div style={{ paddingBottom: '10rem' }}>
			<ContentWrapper>
				<Line color={clr} />
				<ProjectContentWrapper>
					<HeroImageWrapper
						src={'/assets/images/projects/newtopo/page/hero.jpg'}
						alt={'Architecture photograph'}
					/>
					<Meta
						color={clr}
						left={'6rem'}
					>
						Website 2019
					</Meta>
					<ProjectPageTitle
						text={'New Topographics'}
						color={'var(--winered)'}
						level={'h1'}
					/>
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
							A open-ended course that let us explore visual design with self-initiated projects. I chose
							to create a website which would function as a digital museum for New Topographics
							photography; photographs of human made landscapes. Most photographs have a Google Streetview
							link associated with it, allowing visitors of the digital museum to explore the real world
							location where the photograph was taken. The design is rather minimalist, giving the
							photographs more space. The frontpage and the about-pages feature a more scattered design,
							while the exhibitions are designed in a more orderly fashion.
						</ProjectBodyText>
					</ProjectFlexWrapper>
				</ProjectContentWrapper>
			</ContentWrapper>
		</div>
	);
};

export default NewTopo;
