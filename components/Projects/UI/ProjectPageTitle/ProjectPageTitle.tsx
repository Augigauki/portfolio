import StyledText from '@/components/UI/StyledText';
import styles from './ProjectPageTitle.module.css'

type ProjectPageTitleProps = {
    text: string;
    color: string;
    level: 'h1' | 'h2';
    bg?: boolean;
}

const ProjectPageTitle = ({text, color, level, bg = true}: ProjectPageTitleProps) => {
    if(level === 'h1'){
        return(
            <h1 className={`${styles.h1}`} style={{color: color}}>
                <StyledText text={text} />
            </h1>
        )
    } else if(level === 'h2'){
        return(
            <h2 className={`${styles.h2} ${bg && styles.bg}`} style={{color: color}}>
                <StyledText text={text} />
            </h2>
        )
    }
   
};

export default ProjectPageTitle;