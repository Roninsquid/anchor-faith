# The AI Response Contract

*"Anchor may use AI to help form a response, but the response must remain Scripture-first, humble, and safe."*

---

## Purpose

The AI Response Contract defines the exact shape of an AI-assisted Anchor response.

This contract exists so Anchor does not allow AI to freely control the experience.

AI may assist.

AI may suggest.

AI may help shape language.

But Anchor decides how responses are structured, displayed, and protected.

---

## Core Principle

AI output must be structured.

AI must not return an uncontrolled sermon, essay, prophecy, diagnosis, or spiritual command.

Anchor should receive clear fields that can be reviewed, filtered, and displayed inside the established Anchor pattern.

---

## Required Response Shape

Every normal AI-assisted response should follow this structure:

```json
{
  "risk_level": "normal",
  "primary_theme": "string",
  "secondary_themes": ["string"],
  "recommended_journey": "string",
  "welcome": "string",
  "scripture": {
    "reference": "string",
    "text": "string"
  },
  "reflection": "string",
  "prayer": "string",
  "next_step": "string",
  "continue_reading": ["string"],
  "blessing": "string",
  "human_help_note": null
}
