'use state';

import { FC, useEffect, useRef, useState } from 'react';
import styles from './P5wrapper.module.css';
import p5 from 'p5';

interface p5wrapperProps {
	sketch: (p: p5, width: number, height: number) => void;
}

const P5wrapper: FC<p5wrapperProps> = ({ sketch }) => {
	const canvasRef = useRef<HTMLDivElement>(null);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const updateDimensions = () => {
			if (canvasRef.current) {
				setDimensions({
					width: canvasRef.current.offsetWidth,
					height: canvasRef.current.offsetHeight,
				});
			}
		};

		updateDimensions();

		window.addEventListener('resize', updateDimensions);
		return () => {
			window.removeEventListener('resize', updateDimensions);
		};
	}, []);

	useEffect(() => {
		const canvas = new p5((p) => sketch(p, dimensions.width, dimensions.height), canvasRef.current!);
		return () => {
			canvas.remove();
		};
	}, [sketch, dimensions]);

	return (
		<div
			style={{ width: '100%', height: '100%' }}
			ref={canvasRef}
		/>
	);
};

export default P5wrapper;
