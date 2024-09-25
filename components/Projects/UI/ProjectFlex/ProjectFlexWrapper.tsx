import { ReactNode } from 'react';
import styles from './ProjectFlexWrapper.module.css'

type FlexProps = {
    children: ReactNode;
    reverse?: boolean;
}

const ProjectFlexWrapper = ({children, reverse = false}: FlexProps) => {
    return(
        <div className={`${styles.flex} ${reverse && styles.reversed}`}>
            {children}
        </div>
    )
};

export default ProjectFlexWrapper;