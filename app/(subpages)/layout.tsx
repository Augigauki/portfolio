import { Fragment, ReactNode } from 'react';
import styles from './SubpageLayout.module.css'
import Header from '@/components/Navigation/Header/Header';
import Footer from '@/components/Navigation/Footer/Footer';

const SubpageLayout = ({children}: {children: ReactNode}) => {
    return(
        <Fragment>
            <Header />
            {children}
            {/* <Footer /> */}
        </Fragment>
    )
};

export default SubpageLayout;