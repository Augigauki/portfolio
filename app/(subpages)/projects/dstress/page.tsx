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

const Dstress = ({}) => {
	const color = 'var(--white)';
	const metaLeft = '6rem';
	const metaRight = '24rem';

	const { setLineColor } = useColor();

	return (
		<div style={{ backgroundColor: 'black', paddingBottom: '100vh' }}>
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
					<div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<div style={{width: '1000px', height: '1000px'}}>
							<P5wrapper sketch={claustro} />
						</div>
					</div>
				</ProjectContentWrapper>
			</ContentWrapper>
		</div>
	);
};

export default Dstress;
