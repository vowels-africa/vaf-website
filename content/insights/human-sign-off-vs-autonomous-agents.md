---
title: "Human sign-off vs. autonomous agents: how to choose"
category: "AI"
date: "2026-09-24"
readTime: "5 min"
excerpt: "Not every task should run alone. A simple test for what waits for approval."
description: "Should your AI agents act alone or wait for approval? A practical test for deciding, task by task, where human sign-off matters and where autonomy is safe."
icon: "sign-off"
order: 5
cta: "Want help deciding what your agents should do alone? Book a 20-min call."
---
One of the first questions in any AI build is how much the agents should do on their own.

There are two easy answers, and both are wrong. "Everything" leads to an agent confidently doing the wrong thing in front of a customer. "Nothing" leads to an expensive system that creates more approvals than it removes.

The right answer is task by task: human sign-off where it matters, autonomous where it's safe.

## A simple test

For each task an agent might do, ask three questions.

**1. If it's wrong, who notices first?** If a mistake would only show up internally and is easy to fix, autonomy is usually fine. If the customer would notice first, think harder.

**2. Can it be undone?** Tagging a lead, routing a request or drafting a reply can all be reversed. Sending money, cancelling an order or giving health or safety information can't, or not easily.

**3. Is the answer certain?** If the information comes from a clear, current source, the agent can act. If it has to guess, interpret or weigh things up, a person should decide.

Low impact, reversible and certain: let it run. High impact, irreversible or uncertain: it waits for sign-off.

## How it plays out

*Illustration only. The split will differ for every business.*

| Task | Usually | Why |
|---|---|---|
| Answering opening hours or delivery areas | Autonomous | Certain, low impact |
| Tagging and routing a new enquiry | Autonomous | Reversible, internal |
| Sending a payment reminder on schedule | Autonomous, within agreed rules | Rule-based and predictable |
| Sending a quote with a discount | Human sign-off | Commercial judgement |
| Answering an allergen or medical question | Human, or a verified source only | High impact if wrong |
| Refunds and cancellations | Human sign-off | Hard to undo |

## A rule worth borrowing

The clearest version of this we've used is simple: act when certain, escalate when not.

For one premium café and bistro brand, we built a WhatsApp concierge on exactly that line. It answers menu questions from the brand's own handbooks, never guesses about the menu, and never answers an allergen question it isn't certain of. Allergen and sensitive queries go straight back to the team. Customers get speed on the easy questions and a person on the important ones.

## Design the hand-off, not just the agent

Sign-off only works if it's easy. A few things make the difference.

- **Bring the approval to the person.** The request should arrive where they already work, with everything they need to decide, and approving should take one tap, not a login.
- **Make escalation graceful.** When an agent hands over, the customer should be told what happens next, in your brand's voice.
- **Keep a record.** You should be able to see what the agent did and what it passed on. We make logs of agent actions available on request.
- **Revisit the line.** As an agent proves reliable on a task, you may decide to give it more room. That decision should be deliberate, made by a person, and based on what you've seen.

## Multi-agent systems need this more, not less

When several agents work together, each with one job and passing work between them, the sign-off points matter even more. The question isn't just "can this agent act?" but "where in the chain does a person need to see it?" We set those points per build, with the client, before anything goes live.

## The takeaway

Autonomy isn't a setting you switch on for a whole system. It's a decision you make for each task, based on impact, reversibility and certainty. Get that right and you get the speed of automation without losing control.
