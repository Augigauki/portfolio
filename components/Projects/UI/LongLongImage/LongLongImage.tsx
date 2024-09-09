import styles from './LongLongImage.module.css';
import Image from 'next/image';

type LongProps = {
	src: string;
	alt: string;
	height?: string;
};

const LongLongImage = ({ src, alt, height }: LongProps) => {
	return (
		<div className={styles.bigimgwrapper} style={height ? {height: height} : {height: '175vh'}}>
			<Image
				src={src}
				alt={alt}
				fill={true}
			/>
		</div>
	);
};

export default LongLongImage;
