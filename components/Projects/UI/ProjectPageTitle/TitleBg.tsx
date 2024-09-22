import { motion } from 'framer-motion';
import styles from './TitleBg.module.css'


interface BgProps {
    color?: string;
}

const TitleBg = ({color = 'var(--white)'}: BgProps) => {
    return(
        <motion.div className={styles.backdrop} animate={{backgroundColor: color}} />
    )
};

export default TitleBg;