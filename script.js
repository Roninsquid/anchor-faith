console.log("Anchor Faith loaded.");

function findVerses(userInput) {
  const text = userInput.toLowerCase();

  for (const category in verseDatabase) {
    const entry = verseDatabase[category];

    for (const keyword of entry.keywords) {
      if (text.includes(keyword)) {
        return entry;
      }
    }
  }

  return null;
}
