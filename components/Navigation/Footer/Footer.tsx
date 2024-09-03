import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import styles from '../Nav.module.css'
import Link from 'next/link';
import StyledText from '@/components/UI/StyledText';

const Footer = ({}) => {
    return(
        <ContentWrapper>
		    <div className={styles.header}>
    			<Link
    				className={styles.navlink}
    				href={'/projects'}
    			>
    				Projects
    			</Link>
    			<p className={styles.title}><StyledText text={'August Gaukstad'} /></p>
    			<Link
    				className={styles.navlink}
    				href={'/about'}
    			>
    				About
    			</Link>
    		</div>
		</ContentWrapper>
    )
};

export default Footer;