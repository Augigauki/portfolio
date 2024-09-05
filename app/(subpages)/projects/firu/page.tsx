import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import styles from './Firu.module.css';
import Image from 'next/image';
import StyledText from '@/components/UI/StyledText';
import articlespread1 from '@/public/assets/images/projects/firu/page/articlespread1jpg.jpg';
import { Fragment } from 'react';

const Firu = ({}) => {
	return (
		<div style={{paddingBottom: '40rem'}}>
			<ContentWrapper>
				<div className={styles.line} />
				<div className={styles.content}>
					<div className={styles.heroimgwrapper}>
						<Image
							src={'/assets/images/projects/firu/page/hero.jpg'}
							alt={'Tokyo Skyline'}
							fill={true}
						/>
					</div>
					<p
						className={styles.meta}
						id={styles.what}
					>
						Editorial 2018
					</p>
					<h1 className={styles.title}>
						<StyledText text={'Firu'} />
					</h1>
					<p
						className={styles.meta}
						id={styles.brief}
					>
						Firu as a magazine about japanophilia
					</p>
					<p
						className={styles.meta}
						id={styles.type}
					>
						Schoolwork
					</p>
					<div className={styles.flex}>
						<div className={styles.fleximgwrapper}>
							<Image
								src={articlespread1}
								alt='The magazine laying spread out, opened on an article about Otaku culture in Japan'
								fill={true}
							/>
						</div>
						<p className={styles.bodytext}>
							Create a lifestyle magazine with a theme of your choice. Design your own layout for an
							article and set styles for headings and body text. When styles and layout are set, fill the
							magazine with content and design it accordingly. The layout, styles and content should all
							reflect the theme chosen.
						</p>
					</div>
				</div>
			</ContentWrapper>
			<div className={styles.bigimgwrapper}>
				<Image
					src={'/assets/images/projects/firu/page/hero.jpg'}
					alt={'Tokyo skyline'}
					fill={true}
				/>
			</div>
			<ContentWrapper>
				<div className={styles.catchphrasewrapper}>
                    <Image 
                        src={'/assets/images/projects/firu/page/spread2.png'}
                        alt={'Spread showcasing an article from the magazine'}
                        width={324*1.5}
                        height={243*1.5}
                        className={styles.catchphraseimg}
                        id={styles.spread2}
                    />
					<p className={styles.catchphrase}>
						<StyledText text='Japanophilia is the heavy obsession with everything Japan' />
					</p>
                    <div className={styles.catchphrasetextbg}/>
                    <Image 
                        src={'/assets/images/projects/firu/page/spread3.png'}
                        alt={'Spread showcasing an article from the magazine'}
                        width={324*1.5}
                        height={243*1.5}
                        className={styles.catchphraseimg}
                        id={styles.spread3}
                    />
				</div>
			</ContentWrapper>
		</div>
	);
};

export default Firu;
