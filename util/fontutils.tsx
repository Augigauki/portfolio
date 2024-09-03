import React from 'react';

const splitAndStyleText = (text: string, substrings: string[]): JSX.Element[] => {
  let parts: JSX.Element[] = [];
  const words = text.split(' ');

  words.forEach((word, wordIndex) => {
    let wordParts: JSX.Element[] = [];
    let currentIndex = 0;

    while (currentIndex < word.length) {
      let nextSubstringIndex = word.length;
      let nextSubstring = '';

      // Find the next occurrence of any of the substrings
      substrings.forEach(substring => {
        const index = word.indexOf(substring, currentIndex);
        if (index !== -1 && index < nextSubstringIndex) {
          nextSubstringIndex = index;
          nextSubstring = substring;
        }
      });

      // If no more substrings are found, add the remaining text
      if (nextSubstringIndex === word.length) {
        wordParts.push(
          <span key={`${wordIndex}-${currentIndex}`} style={{ fontVariantLigatures: 'discretionary-ligatures' }}>
            {word.substring(currentIndex)}
          </span>
        );
        break;
      }

      // Add the text before the next substring
      if (currentIndex < nextSubstringIndex) {
        wordParts.push(
          <span key={`${wordIndex}-${currentIndex}`} style={{ fontVariantLigatures: 'discretionary-ligatures' }}>
            {word.substring(currentIndex, nextSubstringIndex)}
          </span>
        );
      }

      // Add the substring with ligatures disabled
      wordParts.push(
        <span key={`${wordIndex}-${nextSubstringIndex}`} style={{ fontVariantLigatures: 'none' }}>
          {nextSubstring}
        </span>
      );

      // Update the current index to continue from after the substring
      currentIndex = nextSubstringIndex + nextSubstring.length;
    }

    // Wrap the word parts in a span and add it to the main parts array
    parts.push(
      <span key={`word-${wordIndex}`} style={{ display: 'inline-flex' }}>
        {wordParts}
      </span>
    );

    // Add a space after each word except the last one
    if (wordIndex < words.length - 1) {
      parts.push(<span key={`space-${wordIndex}`} style={{ display: 'inline-flex' }}> </span>);
    }
  });

  return parts;
};

export default splitAndStyleText;
