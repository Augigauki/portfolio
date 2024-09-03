import React from 'react';

const splitAndStyleText = (text: string, substrings: string[]): JSX.Element[] => {
  let parts: JSX.Element[] = [];
  let currentIndex = 0;

  while (currentIndex < text.length) {
    let nextSubstringIndex = text.length;
    let nextSubstring = '';

    // Find the next occurrence of any of the substrings
    substrings.forEach(substring => {
      const index = text.indexOf(substring, currentIndex);
      if (index !== -1 && index < nextSubstringIndex) {
        nextSubstringIndex = index;
        nextSubstring = substring;
      }
    });

    // If no more substrings are found, add the remaining text
    if (nextSubstringIndex === text.length) {
      parts.push(
        <span key={currentIndex} style={{ fontVariantLigatures: 'discretionary-ligatures' }}>
          {text.substring(currentIndex)}
        </span>
      );
      break;
    }

    // Add the text before the next substring
    if (currentIndex < nextSubstringIndex) {
      parts.push(
        <span key={currentIndex} style={{ fontVariantLigatures: 'discretionary-ligatures' }}>
          {text.substring(currentIndex, nextSubstringIndex)}
        </span>
      );
    }

    // Add the substring with ligatures disabled
    parts.push(
      <span key={nextSubstringIndex} style={{ fontVariantLigatures: 'none' }}>
        {nextSubstring}
      </span>
    );

    // Update the current index to continue from after the substring
    currentIndex = nextSubstringIndex + nextSubstring.length;
  }

  return parts;
};

export default splitAndStyleText;
