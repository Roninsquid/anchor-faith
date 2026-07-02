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
document.getElementById("resultVerse").innerHTML = `
  <div class="result-section">
    <h3>📖 God's Word</h3>
    ${match.verses.map(verse => `<p>${verse}</p>`).join("")}
  </div>
`;

document.getElementById("resultRef").textContent = match.title;

document.getElementById("reflection").innerHTML = `
  <span class="section-label">💭 Reflection</span><br>
  ${match.reflection}
`;

document.getElementById("prayer").innerHTML = `
  <span class="section-label">🙏 Prayer</span><br>
  ${match.prayer}
`;

document.getElementById("challenge").innerHTML = `
  <span class="section-label">🌱 Today's Step</span><br>
  ${match.challenge}

  <br><br>

  <span class="section-label">📚 Continue Reading</span><br>
  ${match.continueReading.map(item => `• ${item}`).join("<br>")}

  <br><br>

  <span class="section-label">❤️ Before You Go</span><br>
  These passages are meant to point you toward God's Word. Take a few quiet moments to read the full chapters and pray honestly. Anchor is here to guide you — not replace the Bible.
`;

  });
});
