export function removeSpecialChars(str) {
  return str
    .replace(/(?!\w|\s)./g, "")
    .replace(/\s+/g, " ")
    .replace(/^(\s*)([\W\w])(\b\s$)/g, "$2");
}

export function countDuplicateWords(str) {
  let tempStr = removeSpecialChars(str);

  let wordsArray = tempStr.split(" ");

  const wordCountMap = {};

  wordsArray.forEach((word) => {
    wordCountMap[word] = wordCountMap[word] ? ++wordCountMap[word] : 1;
  });

  for (let key in wordCountMap) {
    if (wordCountMap[key] === 1) {
      delete wordCountMap[key];
    }
  }

  return wordCountMap;
}
