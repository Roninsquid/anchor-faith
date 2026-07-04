console.log("Anchor Alpha ready.");

document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById("dailyGreeting");
  const guideButton = document.getElementById("guideButton");
  const scriptureCard = document.getElementById("scriptureCard");
  const quietMoment = document.getElementById("quietMoment");
  const breathLine = document.getElementById("breathLine");
  const heartInput = document.getElementById("heartInput");

  // Greeting
  if (greeting) {
    const hour = new Date().getHours();

    const greetings = {
      night: ["You're not alone tonight.", "Rest here for a while.", "Peace be with you."],
      morning: ["Good morning.", "His mercies are new every morning.", "Peace be with you."],
      afternoon: ["Welcome.", "Take heart.", "Grace be with you today."],
      evening: ["The day is ending.", "Come and rest.", "Peace be with you."]
    };

    let options;

    if (hour < 5) options = greetings.night;
    else if (hour < 12) options = greetings.morning;
    else if (hour < 17) options = greetings.afternoon;
    else options = greetings.evening;

    greeting.textContent = options[Math.floor(Math.random() * options.length)];
  }

  // Guided Scripture
  if (guideButton && scriptureCard && quietMoment && heartInput) {
    guideButton.addEventListener("click", () => {
      const userText = heartInput.value;
      const journey = findJourney(userText);

      if (journey) {
        scriptureCard.querySelector("blockquote").textContent =
          journey.scripture.text;

        scriptureCard.querySelector(".scripture-ref").textContent =
          journey.scripture.reference;

        scriptureCard.querySelector(".scripture-note").textContent =
          journey.note;
      }

      guideButton.textContent = "📖 Guiding You Through Scripture...";

      quietMoment.classList.remove("hidden");

      if (breathLine) {
        breathLine.classList.remove("hidden");
      }

      requestAnimationFrame(() => {
        quietMoment.classList.add("show");

        if (breathLine) {
          breathLine.classList.add("show");
        }
      });

      setTimeout(() => {
        quietMoment.classList.remove("show");

        if (breathLine) {
          breathLine.classList.remove("show");
        }

        setTimeout(() => {
          quietMoment.classList.add("hidden");

          if (breathLine) {
            breathLine.classList.add("hidden");
          }
        }, 500);

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
