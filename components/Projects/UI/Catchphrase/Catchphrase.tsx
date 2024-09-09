import { ReactNode } from 'react';
import styles from './Catchphrase.module.css'
import StyledText from '@/components/UI/StyledText';

type CatchProps = {
    phrase: string;
    color: string;
    height?: string;
    children: ReactNode;
}

const Catchphrase = ({phrase, color, height, children}: CatchProps) => {
    return(
        <div className={styles.catchphrasewrapper}>
					{children}
					<p className={styles.catchphrase} style={{color: color}}>
						<StyledText text={phrase} />
					</p>
					<div className={styles.catchphrasetextbg} style={height ? {height: height} : {height: '600px'}} />
					
				</div>
    )
};

export default Catchphrase;