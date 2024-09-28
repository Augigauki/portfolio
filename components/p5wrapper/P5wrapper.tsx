'use client';

import { FC, useEffect, useRef, useState } from 'react';
import p5 from 'p5';

interface p5wrapperProps {
	sketch: (p: p5, width: number, height: number) => void;
}

const P5wrapper: FC<p5wrapperProps> = ({ sketch }) => {
	const canvasRef = useRef<HTMLDivElement>(null);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const [ready, setReady] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const timer = setTimeout(() => {
			setReady(true);
		});
		return () => {
			clearTimeout(timer);
		};
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const updateDimensions = () => {
			if (canvasRef.current) {
				setDimensions({
					width: canvasRef.current.offsetWidth,
					height: canvasRef.current.offsetHeight,
				});
			}
		};

		updateDimensions();
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', updateDimensions);
		}
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', updateDimensions);
			}
		};
	}, []);

	useEffect(() => {
		if (!ready) return;
		const canvas = new p5((p) => sketch(p, dimensions.width, dimensions.height), canvasRef.current!);
		return () => {
			canvas.remove();
		};
	}, [sketch, dimensions, ready]);

	return (
		<div
			style={{ width: '100%', height: '100%' }}
			ref={canvasRef}
		/>
	);
};

export default P5wrapper;
