const journeys = [
    {
    id: "begin-again",
    title: "Begin Again",
    keywords: [],
    opening:
      "Welcome. You do not need to know exactly what to say. Sometimes we arrive with clear questions. Sometimes we simply arrive. Either way, you are welcome here.",
    scripture: {
      reference: "Matthew 11:28",
      text: "Come to me, all who labor and are heavy laden, and I will give you rest."
    },
    reflection:
      "What brought you here today?",
    prayer:
      "Father, I may not even know what I need right now. Thank You for meeting me here. Help me quiet my heart and guide my next step. Amen.",
    nextStep:
      "Take one slow breath. Read Matthew 11. Do not rush. Simply begin.",
    continueReading: [
      "Matthew 11",
      "Psalm 23",
      "John 14:27",
      "Psalm 46:10"
    ]
  },
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
