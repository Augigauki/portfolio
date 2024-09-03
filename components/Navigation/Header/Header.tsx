'use client'

import Link from 'next/link';
import styles from '../Nav.module.css';
import StyledText from '@/components/UI/StyledText';
import { usePathname } from 'next/navigation';
import ContentWrapper from '@/components/Wrappers/ContentWrapper';

const Header = ({}) => {

    const path = usePathname();

	return (
		<div className={styles.outerheader}>
			<ContentWrapper>
			    <div className={styles.header}>
	    			<Link
	    				className={styles.navlink}
	    				href={'/projects'}
	    			>
	    				Projects
	    			</Link>
	    			<Link href={'/'} className={styles.title}><StyledText text={'August Gaukstad'} /></Link>
	    			<Link
	    				className={styles.navlink}
	    				href={'/about'}
	    			>
	    				About
	    			</Link>
	    		</div>
			</ContentWrapper>
		</div>
	);
};

export default Header;
