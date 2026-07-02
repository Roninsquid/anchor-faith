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

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("findScripture");

  button.addEventListener("click", () => {
    const input = document.getElementById("struggle").value;

    const match = findVerses(input);

    if (!match) {
      alert("We don't have verses for that yet. More categories are coming!");
      return;
    }

    document.getElementById("resultVerse").textContent =
      match.verses.join("\n\n");

    document.getElementById("resultRef").textContent =
      match.title;

    document.getElementById("reflection").textContent =
      match.reflection;

    document.getElementById("prayer").textContent =
      match.prayer;

    document.getElementById("challenge").textContent =
      match.challenge;
  });
});
