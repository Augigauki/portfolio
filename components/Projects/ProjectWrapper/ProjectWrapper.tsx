import { ReactNode } from 'react';
import styles from './ProjectWrapper.module.css'
import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import ProjectContentWrapper from '@/components/Wrappers/ProjectContentWrapper';

interface ProjectProps {
    color: string;
    children: ReactNode;
}

const ProjectWrapper = ({color, children}: ProjectProps) => {
    return(
        <ContentWrapper>
            <ProjectContentWrapper>
                {children}
            </ProjectContentWrapper>
        </ContentWrapper>
    )
};

export default ProjectWrapper;