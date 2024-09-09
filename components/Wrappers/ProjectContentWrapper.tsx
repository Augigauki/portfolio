import { ReactNode } from 'react';
import styles from './wrappers.module.css'

const ProjectContentWrapper = ({children}: {children: ReactNode}) => {
    return(
        <div className={styles.projectcontentwrapper}>{children}</div>
    )
};

export default ProjectContentWrapper;