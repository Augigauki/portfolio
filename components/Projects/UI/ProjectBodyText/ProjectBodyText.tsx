import { ReactNode } from 'react';
import styles from './ProjectBodyText.module.css'

type BodyTextProps = {
    color: string;
    children: ReactNode;
}

const ProjectBodyText = ({color, children}: BodyTextProps) => {
    return(
        <p style={{color: color}} className={styles.bodytext}>{children}</p>
    )
};

export default ProjectBodyText;