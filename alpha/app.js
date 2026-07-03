alert("app.js is running!");

document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById("dailyGreeting");

  if (!greeting) return;

  const hour = new Date().getHours();

  const greetings = {
    night: [
      "You're not alone tonight.",
      "Rest here for a while.",
      "Peace be with you."
    ],
    morning: [
      "Good morning.",
      "His mercies are new every morning.",
      "Peace be with you."
    ],
    afternoon: [
      "Welcome.",
      "Take heart.",
      "Grace be with you today."
    ],
    evening: [
      "The day is ending.",
      "Come and rest.",
      "Peace be with you."
    ]
  };

  let options;

  if (hour < 5) {
    options = greetings.night;
  } else if (hour < 12) {
    options = greetings.morning;
  } else if (hour < 17) {
    options = greetings.afternoon;
  } else {
    options = greetings.evening;
  }

  const randomGreeting =
    options[Math.floor(Math.random() * options.length)];

  greeting.textContent = randomGreeting;
});
