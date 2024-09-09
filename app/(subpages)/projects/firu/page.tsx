'use client'

import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import styles from './Firu.module.css';
import Image from 'next/image';
import articlespread1 from '@/public/assets/images/projects/firu/page/articlespread1jpg.jpg';
import ProjectContentWrapper from '@/components/Wrappers/ProjectContentWrapper';
import HeroImageWrapper from '@/components/Projects/UI/HeroImage/HeroImageWrapper';
import ProjectPageTitle from '@/components/Projects/UI/ProjectPageTitle/ProjectPageTitle';
import Line from '@/components/Projects/UI/Line/Line';
import Meta from '@/components/Projects/UI/Meta/Meta';
import ProjectFlexWrapper from '@/components/Projects/UI/ProjectFlex/ProjectFlexWrapper';
import ProjectBodyText from '@/components/Projects/UI/ProjectBodyText/ProjectBodyText';
import LongLongImage from '@/components/Projects/UI/LongLongImage/LongLongImage';
import Catchphrase from '@/components/Projects/UI/Catchphrase/Catchphrase';
import { useColor } from '@/context/ColorContext';

const Firu = ({}) => {
	const projColor = 'var(--blue)';
	const metaLeft = '6rem';
	const metaRight = '24rem';

	const {setLineColor} = useColor();
	setLineColor(projColor)

	return (
		<div style={{ paddingBottom: '10rem' }}>
			<ContentWrapper>
				<Line color={projColor} />
				<ProjectContentWrapper>
					<HeroImageWrapper
						src={'/assets/images/projects/firu/page/hero.jpg'}
						alt={'Tokyo Skyline'}
					/>
					<Meta
						color={projColor}
						left={metaLeft}
					>
						Editorial 2018
					</Meta>
					<ProjectPageTitle
						text={'Firu'}
						color={projColor}
					/>

					<Meta
						color={projColor}
						right={metaRight}
					>
						Firu is a magazine about japanophilia
					</Meta>
					<Meta
						color={projColor}
						left={metaLeft}
					>
						Schoolwork
					</Meta>
					<ProjectFlexWrapper>
						<div className={styles.fleximgwrapper}>
							<Image
								src={articlespread1}
								alt='The magazine laying spread out, opened on an article about Otaku culture in Japan'
								fill={true}
							/>
						</div>
						<ProjectBodyText color={projColor}>
							Create a lifestyle magazine with a theme of your choice. Design your own layout for an
							article and set styles for headings and body text. When styles and layout are set, fill the
							magazine with content and design it accordingly. The layout, styles and content should all
							reflect the theme chosen.
						</ProjectBodyText>
					</ProjectFlexWrapper>
				</ProjectContentWrapper>
			</ContentWrapper>
			<LongLongImage
				src={'/assets/images/projects/firu/page/hero.jpg'}
				alt={'Tokyo skyline'}
			/>
			<ContentWrapper>
				<Catchphrase
					phrase={'Japanophilia is the heavy obsession with everything Japan'}
					color={projColor}
				>
					<Image
						src={'/assets/images/projects/firu/page/spread2.png'}
						alt={'Spread showcasing an article from the magazine'}
						width={324 * 1.5}
						height={243 * 1.5}
						className={styles.catchphraseimg}
						id={styles.spread2}
					/>
					<Image
						src={'/assets/images/projects/firu/page/spread3.png'}
						alt={'Spread showcasing an article from the magazine'}
						width={324 * 1.5}
						height={243 * 1.5}
						className={styles.catchphraseimg}
						id={styles.spread3}
					/>
				</Catchphrase>
			</ContentWrapper>
		</div>
	);
};

export default Firu;
