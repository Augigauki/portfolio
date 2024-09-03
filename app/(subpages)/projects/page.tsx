'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import styles from './Projects.module.css';
import FiruProjectWrapper from '@/components/Projects/Firu/FiruProjectWrapper';
import NewTopoProjectWrapper from '@/components/Projects/NewTopo/NewTopoProjectWrapper';

const Projects = () => {
	const firuRef = useRef(null);
	const newTopoRef = useRef(null);

    const firuInView = useInView(firuRef, { margin: '-50% 0px' }); // Adjust the margin as needed
    const newTopoInView = useInView(newTopoRef, { margin: '-50% 0px' }); 

	const [lineColor, setLineColor] = useState('rgb(5, 66, 155)'); // Initial color (blue)

	useEffect(() => {
		if (firuInView) {
			setLineColor('rgb(5, 66, 155)'); // Color for FiruProject (winered)
		} else if (newTopoInView) {
			setLineColor('rgb(113, 39, 58)'); // Color for NewTopoProject (green)
		} else {
			setLineColor('rgb(5, 66, 155)'); // Fallback color (blue)
		}
	}, [firuInView, newTopoInView]);

	return (
		<ContentWrapper>
			<div className={styles.outerwrapper}>
				<motion.div
					className={styles.line}
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
