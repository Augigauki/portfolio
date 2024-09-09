import { ReactNode } from 'react';
import styles from './ProjectFlexWrapper.module.css'

type FlexProps = {
    children: ReactNode;
}

const ProjectFlexWrapper = ({children}: FlexProps) => {
    return(
        <div className={styles.flex}>
            {children}
        </div>
    )
};

export default ProjectFlexWrapper;