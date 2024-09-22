import { Fragment, ReactNode } from 'react';
import styles from './StyledTitle.module.css'
import StyledText from '@/components/UI/StyledText';

interface StyledProps {
    text: string;
}

const StyledTitle = ({text}: StyledProps) => {
    return <Fragment><StyledText text={text}/></Fragment>
};

export default StyledTitle;