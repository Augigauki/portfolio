import { ReactNode } from 'react';
import styles from './wrappers.module.css'

const ContentWrapper = ({children}: {children: ReactNode}) => {
    return(
        <div className={styles.contentwrapper}>{children}</div>
    )
};

export default ContentWrapper;