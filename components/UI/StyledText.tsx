import { FC } from 'react';
import styles from './StyledText.module.css';
import splitAndStyleText from '@/util/fontutils';

interface StyledTextProps {
	text: string;
}

const disabled = ['g', 'k', 'r'];

const StyledText: FC<StyledTextProps> = ({ text }) => {
	const styledParts = splitAndStyleText(text, disabled);
	return <>{styledParts}</>;
};

export default StyledText;
