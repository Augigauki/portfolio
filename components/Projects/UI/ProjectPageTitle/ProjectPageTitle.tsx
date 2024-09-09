import StyledText from '@/components/UI/StyledText';
import styles from './ProjectPageTitle.module.css'

type ProjectPageTitleProps = {
    text: string;
    color: string;
}

const ProjectPageTitle = ({text, color}: ProjectPageTitleProps) => {
    return(
        <h1 className={styles.title} style={{color: color}}>
            <StyledText text={text} />
        </h1>
    )
};

export default ProjectPageTitle;