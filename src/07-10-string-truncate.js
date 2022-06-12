// Create a function `truncate(text, maxLength)` that checks the length of the text and, if it exceeds maxLength - replaces the end of str with the ellipsis character `"..."`, to make its length equal to maxLength

// Easy --> truncate('Easy Frontend', 4) -> 'Eas...'
// UTF-16 'uu2026'

// length
// length <= maxLength -> show full')
// length > maxLength -> truncate
function truncate(text, maxLength) {
  if (text.length <= maxLength) return text;

  const shortStr = text.slice(0, maxLength - 1);
  return `${shortStr}\u2026`;
}

console.log(truncate('Easy Frontend', 4));
