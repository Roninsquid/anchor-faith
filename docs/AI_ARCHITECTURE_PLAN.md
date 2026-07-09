# The Anchor AI Architecture Plan

*"The lighthouse is built. Now we chart the route for the engine."*

---

## Purpose

This document explains how Anchor may someday use AI safely and responsibly.

It does not contain working code.

It does not choose a final provider.

It does not expose API keys.

It simply defines the planned structure for how Anchor’s frontend, backend, AI model, Scripture library, safety checks, and response contract will work together.

The goal is not to make Anchor impressive.

The goal is to make Anchor more attentive, Scripture-rooted, humble, and safe.

---

## The Core Principle

Anchor must never place an AI key directly in frontend browser code.

The public website should not talk directly to an AI provider.

Instead, Anchor should use a secure backend layer.

The structure is:

```txt
User
↓
Anchor frontend
↓
Secure backend function
↓
AI provider
↓
Safety and contract validation
↓
Anchor response
↓
User
```

The frontend remains the sanctuary.

The backend becomes the engine room.

The AI remains a servant.

---

## Current Anchor Setup

Anchor currently runs as a static website.

The alpha lives at:

```txt
/alpha/
```

The current frontend files include:

```txt
alpha/index.html
alpha/app.js
alpha/journeys.js
alpha/components.css
```

This static frontend can collect what someone writes, display Scripture, and guide people through prepared journeys.

But it cannot safely hold private API keys.

That means any AI-powered version of Anchor needs a backend.

---

## Future Architecture Overview

The future AI-assisted Anchor system will have four main parts:

1. Anchor Frontend
2. Secure Backend Function
3. AI Heart Listener
4. Safety and Response Contract Validator

Together, they will allow Anchor to receive honest human words, listen carefully, choose a Scripture-first response, and return something humble, safe, and useful.

---

# 1. Anchor Frontend

The frontend is what the user sees.

It should remain simple, peaceful, and welcoming.

The frontend may:

- Collect the user’s words.
- Send the user’s words to the backend.
- Show a loading or quiet moment.
- Receive a structured response.
- Display Scripture, reflection, prayer, next step, continued reading, and peace.
- Allow the user to share again without refreshing.

The frontend must not:

- Store private API keys.
- Make direct AI provider requests.
- Decide crisis response alone once AI is active.
- Display uncontrolled AI text.
- Allow AI to rewrite the entire page freely.

The frontend should remain a sanctuary, not a control room.

---

# 2. Secure Backend Function

The backend is the protected middle layer.

It receives the user’s words from the frontend and talks to the AI provider safely.

The backend may be built with one of these options:

```txt
Vercel Function
Netlify Function
Cloudflare Worker
Render server
Railway server
Other secure backend service
```

The final provider can be chosen later.

The backend is responsible for:

- Keeping the AI API key private.
- Receiving the user’s message.
- Limiting message length.
- Checking for obvious crisis language.
- Sending a carefully written prompt to the AI model.
- Requesting structured output.
- Validating the AI response.
- Rejecting unsafe or malformed responses.
- Returning only approved data to the frontend.

The backend is the engine room.

The user should never need to see it.

---

# 3. AI Heart Listener

The AI Heart Listener is the first AI role inside Anchor.

Its job is not to preach.

Its job is not to replace Scripture.

Its job is not to become a spiritual authority.

Its job is to help Anchor understand what season of the heart someone may be in.

The Heart Listener may identify:

- Anxiety
- Grief
- Shame
- Guilt
- Anger
- Doubt
- Loneliness
- Weariness
- Fear
- Confusion
- Gratitude
- Joy
- Forgiveness
- Reconciliation
- New beginning
- Spiritual dryness
- Need for direction

These are not labels placed on a person.

They are possible doors into Scripture.

The Heart Listener should speak with humility.

It should think in terms of:

```txt
This person may be carrying grief.
This person may be carrying shame.
This person may need a place to begin.
This person may need immediate human help.
```

It should never think in terms of:

```txt
I know exactly what God is doing.
This suffering definitely means something specific.
This person does not need anyone else.
AI can handle this alone.
```

---

# 4. Curated Scripture Library

Anchor should not depend on AI inventing Bible content.

Anchor should build and maintain a curated Scripture library.

This library may include:

- Journey names
- Themes
- Scripture references
- Approved Scripture text when appropriate
- Reflection prompts
- Prayer patterns
- Continue reading suggestions
- Safety notes

Example:

```json
{
  "theme": "grief",
  "journey": "comfort-for-the-brokenhearted",
  "primary_scripture": "Psalm 34:18",
  "continue_reading": ["Psalm 23", "Matthew 5:4", "John 14:27"]
}
```

AI may help choose from this library.

AI should not be trusted to invent Scripture freely.

When Anchor is unsure, it should provide Scripture references instead of pretending certainty.

---

# 5. Safety Gate

Safety comes before beauty.

Before Anchor displays an AI-assisted response, the system should check for danger language and unsafe output.

The Safety Gate should look for situations such as:

- Self-harm
- Possible harm to others
- Immediate danger
- Abuse
- Severe despair
- Coercion
- Medical or mental health crisis
- Requests that require human help

If urgent risk appears, Anchor must not continue like an ordinary devotional reflection.

Anchor should respond clearly and compassionately.

It should encourage immediate human help.

Human help is holy, not failure.

---

## Normal Flow

A normal non-crisis flow should look like this:

```txt
User writes what is on their heart
↓
Frontend sends message to backend
↓
Backend checks message length and basic safety
↓
Backend sends message to AI Heart Listener
↓
AI identifies likely heart-season
↓
AI chooses or suggests Scripture path
↓
Backend validates response contract
↓
Backend returns structured response
↓
Frontend displays Anchor response
```

---

## Urgent Flow

An urgent flow should look different:

```txt
User writes something indicating possible danger
↓
Frontend sends message to backend
↓
Backend detects urgent risk
↓
Backend does not treat this as normal reflection
↓
Backend returns urgent human-help response
↓
Frontend displays clear support message
```

Urgent responses should be direct, compassionate, and practical.

They should not be poetic.

They should not bury the important part.

They should not pretend Anchor can handle the moment alone.

---

# 6. The AI Response Contract

The backend should require AI responses to follow the structure defined in:

```txt
docs/AI_RESPONSE_CONTRACT.md
```

A normal response should include:

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
```

Anchor should not display AI output that does not match the contract.

Structured output protects the sanctuary.

---

# 7. Privacy Principle

Anchor should treat a person’s words with care.

By default, Anchor should avoid storing user submissions.

If storage is ever added, it should be intentional, transparent, and optional.

Anchor should not collect sensitive spiritual or emotional writing casually.

A person may bring something heavy to Anchor.

That deserves respect.

---

# 8. Prompting Principle

The backend prompt should remind the AI of Anchor’s boundaries every time.

The prompt should include:

- Anchor’s mission
- The AI Covenant
- The Heart Listener role
- The Response Contract
- The Safety Gate
- Scripture-first priority
- Humble language rules
- Forbidden phrases
- Human-help requirements

The AI should be instructed to return only structured data.

No sermons.

No prophecies.

No spiritual commands.

No damn robot prophet.

---

# 9. Failure Handling

If the AI provider fails, times out, or returns invalid data, Anchor should not break.

Anchor should gently fall back to a prepared response.

Possible fallback:

```txt
Something went wrong, but you are still welcome here.

Let’s begin again with God’s Word.
```

Then Anchor may display the Begin Again journey.

Anchor should never leave someone stranded.

The sanctuary door stays open.

---

# 10. First Technical Milestone

The first technical AI milestone should be small.

Not a full chatbot.

Not a complicated account system.

Not saved histories.

Not personalization.

The first milestone should be:

```txt
AI Heart Listener MVP
```

The MVP should:

- Accept one user message.
- Return one structured Anchor response.
- Use a secure backend.
- Protect the API key.
- Follow the AI Response Contract.
- Include basic crisis handling.
- Fall back safely if anything fails.

That is enough.

Small, faithful, tested.

Then we improve.

---

## Recommended Build Order

The recommended build order is:

1. Finish AI foundation documents.
2. Create a small backend function.
3. Connect frontend to backend.
4. Send one test message.
5. Return a structured response.
6. Validate the response.
7. Display it in the existing Anchor card.
8. Add urgent response handling.
9. Add curated Scripture library.
10. Test with many emotional and spiritual inputs.

One plank at a time.

---

## What We Are Not Building Yet

Anchor is not yet building:

- User accounts
- Saved journal history
- Social features
- Public prayer feeds
- Streaks
- Leaderboards
- AI personalities
- AI pastors
- AI confession booths
- Automated spiritual authority
- Anything that makes AI the center

Those can stay overboard.

Some of them can stay overboard forever.

---

## The Final Architecture Summary

```txt
GitHub Pages Frontend
    |
    | User shares what is on their heart
    v
Secure Backend Function
    |
    | Private API key lives here
    | Safety check happens here
    | AI prompt is controlled here
    v
AI Provider
    |
    | Structured response only
    v
Backend Validator
    |
    | Checks risk, format, tone, safety
    v
Anchor Frontend
    |
    | Displays Scripture-first response
    v
User
```

---

## Final Principle

Anchor should use AI only if AI helps Anchor become more faithful to its mission.

If AI makes Anchor louder, colder, more certain, more invasive, or more impressive at the expense of care, then AI has failed.

If AI helps Anchor listen more carefully, respond more gently, protect people more wisely, and point more faithfully toward Scripture, then AI may serve the mission well.

---

*"May the engine serve the lighthouse, never replace it."*

⚓

*A place to begin again.*
