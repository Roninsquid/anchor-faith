const journeys = [
  {
    id: "peace-in-the-storm",
    title: "Peace in the Storm",
    keywords: [
      "anxious",
      "anxiety",
      "afraid",
      "fear",
      "scared",
      "worried",
      "worry",
      "overwhelmed",
      "panic",
      "stress",
      "stressed"
    ],
    opening:
      "You are not alone. Fear and worry can feel heavy, especially when your mind will not slow down. Scripture gently invites you to bring those burdens before God.",
    scripture: {
      reference: "Philippians 4:6–7",
      text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."
    },
    reflection:
      "What is one worry you can place into God's hands today?",
    prayer:
      "Father, my thoughts are racing, and my heart feels heavy. Help me remember that I do not carry these burdens alone. Give me peace that is deeper than my understanding, and help me trust You one step at a time. Amen.",
    nextStep:
      "Take one slow breath. Read Philippians 4:4–9. Do not worry about tomorrow yet. Just be here.",
    continueReading: [
      "Matthew 6",
      "Psalm 23",
      "Isaiah 41:10",
      "1 Peter 5:7"
    ]
  }
];

function findJourney(input) {
  const text = input.toLowerCase();

  return journeys.find((journey) =>
    journey.keywords.some((keyword) => text.includes(keyword))
  );
}
