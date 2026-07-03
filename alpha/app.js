console.log("Anchor Alpha ready.");

document.addEventListener("DOMContentLoaded", () => {
  // Greeting
  const greeting = document.getElementById("dailyGreeting");

  if (greeting) {
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
  }

  // Guide button
  const guideButton = document.getElementById("guideButton");
  const scriptureCard = document.getElementById("scriptureCard");
  const quietMoment = document.getElementById("quietMoment");
  if (guideButton && scriptureCard) {
    guideButton.addEventListener("click", () => {
      guideButton.textContent = "📖 Guiding You Through Scripture...";

      setTimeout(() => {
        scriptureCard.classList.remove("hidden");

        guideButton.classList.add("fade-out");

        scriptureCard.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 1200);
    });
  }
});
