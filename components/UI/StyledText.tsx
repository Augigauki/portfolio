import { FC } from 'react';
import styles from './StyledText.module.css';
import splitAndStyleText from '@/util/fontutils';

interface StyledTextProps {
	text: string;
	substrings: string[];
}

const StyledText: FC<StyledTextProps> = ({ text, substrings }) => {
	const styledParts = splitAndStyleText(text, substrings);
	return <>{styledParts}</>;
};

export default StyledText;
