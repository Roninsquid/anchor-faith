const journeys = [
  {
    id: "begin-again",
    title: "Begin Again",
    keywords: [],
    opening:
      "Welcome. You do not need to know exactly what to say. God already knows your heart. Let's begin gently with His Word.",
    scripture: {
      reference: "Matthew 11:28",
      text:
        "Come to me, all you who are weary and burdened, and I will give you rest."
    },
    reflection:
      "What brought you here today? You do not need perfect words. Simply be honest about what is on your heart.",
    prayer:
      "Father, I may not even know what I need right now, but I am here. Meet me with Your peace. Help me begin again, one small step at a time. Amen.",
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
      "fearful",
      "worried",
      "worry",
      "overwhelmed",
      "panic",
      "stressed",
      "stress",
      "scared",
      "nervous"
    ],
    opening:
      "You are not alone. Fear and worry can feel heavy, but Scripture gently invites us to bring those burdens before God.",
    scripture: {
      reference: "Philippians 4:6–7",
      text:
        "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God will guard your hearts and your minds in Christ Jesus."
    },
    reflection:
      "What fear or worry have you been carrying today? Try naming it honestly before God, without pretending it is smaller than it feels.",
    prayer:
      "Father, I feel overwhelmed. My heart is carrying fear, and I need Your peace. Help me bring my worries to You instead of carrying them alone. Guard my heart and mind in Christ Jesus. Amen.",
    nextStep:
      "Take a quiet moment today to name one worry before God. You do not need to fix everything right now. Begin with one honest prayer.",
    continueReading: [
      "Matthew 6:25–34",
      "Psalm 23",
      "Isaiah 41:10",
      "1 Peter 5:7"
    ]
  },

  {
    id: "comfort-for-the-brokenhearted",
    title: "Comfort for the Brokenhearted",
    keywords: [
      "grief",
      "grieving",
      "loss",
      "lost",
      "lonely",
      "alone",
      "heartbroken",
      "brokenhearted",
      "mourning",
      "mourn",
      "sad",
      "sorrow",
      "hurt",
      "hurting",
      "heavy heart",
      "my heart hurts",
      "miss them",
      "missing someone",
      "died",
      "death",
      "funeral"
    ],
    opening:
      "If your heart feels heavy today, welcome. Grief, loss, disappointment, and loneliness can leave us feeling as though the world has become quieter than we were prepared for. You do not have to hide that here. God is not distant from the brokenhearted. He draws near.",
    scripture: {
      reference: "Psalm 34:18",
      text:
        "The Lord is near to those who have a broken heart, and saves those who have a crushed spirit."
    },
    reflection:
      "What loss, disappointment, or burden feels heaviest today? You do not need to solve it right now. Simply acknowledge it before God.",
    prayer:
      "Father, my heart feels heavy. Some wounds cannot be explained with easy words. Thank You for remaining near even when I cannot feel Your presence. Hold what I cannot carry. Comfort what I cannot heal. Teach me to trust that I am not walking through this valley alone. Amen.",
    nextStep:
      "Take a few quiet moments today. Read Psalm 34 slowly. Notice every verse that reminds you God draws near to those who are hurting. You do not need to hurry through grief.",
    continueReading: [
      "Psalm 23",
      "Isaiah 43:1–3",
      "Matthew 5:4",
      "John 14:27"
    ]
  }
];

function findJourney(input) {
  const text = input.toLowerCase();

  const match = journeys.find((journey) =>
    journey.keywords.some((keyword) => text.includes(keyword))
  );

  return match || journeys.find((journey) => journey.id === "begin-again");
}
