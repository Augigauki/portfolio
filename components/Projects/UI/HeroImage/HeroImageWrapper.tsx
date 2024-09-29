'use client'

import { useColor } from '@/context/ColorContext';
import styles from './HeroImageWrapper.module.css';
import Image from 'next/image';

type HeroImgProps = {
    src: string;
    alt: string;
}

const HeroImageWrapper = ({src, alt}: HeroImgProps) => {

	const {bgColor} = useColor();

	let gif = src.endsWith('.gif');

	return (
		<div className={styles.heroimgwrapper} style={{boxShadow: `0 0 0 30px ${bgColor}`}}>
			<Image
				src={src}
				alt={alt}
				fill={true}
				unoptimized={gif}
			/>
		</div>
	);
};

export default HeroImageWrapper;
