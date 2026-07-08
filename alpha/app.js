document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById("dailyGreeting");
  const guideButton = document.getElementById("guideButton");
  const scriptureCard = document.getElementById("scriptureCard");
  const quietMoment = document.getElementById("quietMoment");
  const breathLine = document.getElementById("breathLine");
  const heartInput = document.getElementById("heartInput");

  const scriptureText = scriptureCard.querySelector("blockquote");
  const scriptureRef = scriptureCard.querySelector(".scripture-ref");
  const scriptureNote = scriptureCard.querySelector(".scripture-note");

  const reflectionText = document.getElementById("reflectionText");
  const prayerText = document.getElementById("prayerText");
  const nextStepText = document.getElementById("nextStepText");
  const continueReadingList = document.getElementById("continueReadingList");

  let hasGuided = false;

  const greetings = {
    night: "You are not alone tonight.",
    morning: "Good morning. Begin again with grace.",
    afternoon: "Take a quiet moment with God.",
    evening: "Rest your heart for a moment."
  };

  const hour = new Date().getHours();

  if (hour < 5) {
    greeting.textContent = greetings.night;
  } else if (hour < 12) {
    greeting.textContent = greetings.morning;
  } else if (hour < 18) {
    greeting.textContent = greetings.afternoon;
  } else {
    greeting.textContent = greetings.evening;
  }

  function renderJourney(journey) {
    scriptureText.textContent = journey.scripture.text;
    scriptureRef.textContent = journey.scripture.reference;
    scriptureNote.textContent = journey.opening;

    reflectionText.textContent = journey.reflection;
    prayerText.textContent = journey.prayer;
    nextStepText.textContent = journey.nextStep;

    continueReadingList.innerHTML = "";

    journey.continueReading.forEach((reading) => {
      const listItem = document.createElement("li");
      listItem.textContent = reading;
      continueReadingList.appendChild(listItem);
    });
  }

  function addNewReflectionButton() {
    let newReflectionButton = document.getElementById("newReflectionButton");

    if (!newReflectionButton) {
      newReflectionButton = document.createElement("button");
      newReflectionButton.id = "newReflectionButton";
      newReflectionButton.type = "button";
      newReflectionButton.textContent = "Share Something Else";

      // Copy the main button styling so it feels native to Anchor.
      newReflectionButton.className = guideButton.className;

      newReflectionButton.addEventListener("click", () => {
        heartInput.value = "";
        heartInput.focus();

        window.scrollTo({
          top: heartInput.offsetTop - 120,
          behavior: "smooth"
        });
      });

      scriptureCard.appendChild(newReflectionButton);
    }
  }

  guideButton.addEventListener("click", () => {
    const userText = heartInput.value.trim();
    const journey = findJourney(userText);

    renderJourney(journey);

    guideButton.disabled = true;
    guideButton.classList.remove("fade-out");
    guideButton.textContent = "📖 Guiding You Through Scripture...";

    quietMoment.classList.remove("hidden");

    if (breathLine) {
      breathLine.classList.remove("hidden");
    }

    scriptureCard.classList.add("hidden");

    setTimeout(() => {
      quietMoment.classList.add("hidden");

      if (breathLine) {
        breathLine.classList.add("hidden");
      }

      scriptureCard.classList.remove("hidden");
      addNewReflectionButton();

      hasGuided = true;
      guideButton.disabled = false;
      guideButton.textContent = "⚓ Begin Another Reflection";

      scriptureCard.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 1200);
  });
});
