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
    scripture: {
      reference: "Philippians 4:6–7",
      text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."
    },
    note: "You are not alone. Fear and worry can feel heavy, especially when your mind will not slow down. Scripture gently invites you to bring those burdens before God."
  }
];

function findJourney(input) {
  const text = input.toLowerCase();

  return journeys.find((journey) =>
    journey.keywords.some((keyword) => text.includes(keyword))
  );
}
