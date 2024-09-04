'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import styles from './Projects.module.css';
import FiruProjectWrapper from '@/components/Projects/Firu/FiruProjectWrapper';
import NewTopoProjectWrapper from '@/components/Projects/NewTopo/NewTopoProjectWrapper';
import { useColor } from '@/context/ColorContext';

const Projects = () => {
	const firuRef = useRef(null);
	const newTopoRef = useRef(null);

    const firuInView = useInView(firuRef, { margin: '-40% 0px' }); // Adjust the margin as needed
    const newTopoInView = useInView(newTopoRef, { margin: '-40% 0px' }); 

	//const [lineColor, setLineColor] = useState('rgb(5, 66, 155)'); // Initial color (blue)
	const {lineColor, setLineColor} = useColor();

	useEffect(() => {
		if (firuInView) {
			setLineColor('rgb(5, 66, 155)'); // Color for FiruProject (winered)
		} else if (newTopoInView) {
			setLineColor('rgb(113, 39, 58)'); // Color for NewTopoProject (green)
		} else {
			setLineColor('rgb(5, 66, 155)'); // Fallback color (blue)
		}
	}, [firuInView, newTopoInView, setLineColor]);

	return (
		<ContentWrapper>
			<div className={styles.outerwrapper}>
				<motion.div
					className={styles.line}
					initial={{backgroundColor: lineColor}}
					animate={{ backgroundColor: lineColor }}
					transition={{ duration: 1 }} // Adjust the duration as needed
				/>
				<div ref={firuRef}>
					<FiruProjectWrapper />
				</div>
				<div ref={newTopoRef}>
					<NewTopoProjectWrapper />
				</div>
			</div>
		</ContentWrapper>
	);
};

export default Projects;
