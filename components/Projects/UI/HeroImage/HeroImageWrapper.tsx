import styles from './HeroImageWrapper.module.css';
import Image from 'next/image';

type HeroImgProps = {
    src: string;
    alt: string;
}

const HeroImageWrapper = ({src, alt}: HeroImgProps) => {
	return (
		<div className={styles.heroimgwrapper}>
			<Image
				src={src}
				alt={alt}
				fill={true}
			/>
		</div>
	);
};

export default HeroImageWrapper;
