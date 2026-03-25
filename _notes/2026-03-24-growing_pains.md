---
layout: note
title: "Growing pains"
date: 2026-03-24
tag: engineering-process
image: /assets/images/notes/growing_pains_thumbnail.png
description: "How enough repetitions of building the wrong thing changed how I approach software development, and why that foundation matters more than ever with the mainstream adoption of coding agents."
---

For a lot of my early career, I would be handed a problem and immediately start running towards a solution. This became a painful process: in meetings, code reviews, or demos, a senior engineer would question a basic business-logic assumption that I made, but failed to confirm with the team, which instantly negated my entire set of code changes. I learned the hard way that the time invested upfront to deeply consider what needs to be built is by far the most powerful way to solve problems. Today, I want to share that approach.

<figure>
  <img src="/assets/images/notes/product_development_process.png" alt="My new product development process">
  <figcaption>My new product development process</figcaption>
</figure>

---

## Step 1: Defining what you're building

A manager once told me that to effectively own delivering software, you need to believe in why you are building it in the first place. If you do not understand or agree with the business logic decisions behind what you are building, you will end up implementing someone else's vision by checking in with them every few hours to confirm you are on the right track, at which point they might as well build it themselves. Step 1 exists for two reasons: to get everyone aligned on the logic, and to make sure you fully understand what you are building so you can arrive at a great solution on your own.

The first step of building software is getting to an agreed upon definition of what is being built before even considering the code changes. This starts with defining clear principles: what the product can and cannot do. These principles guide every decision that follows: business logic, user flows, scope boundaries, and open questions, and are easy to skip when there is pressure to start delivering.

The most difficult part of this step is knowing who to ask to weigh in on approving the business logic, and being the person who drives the group to a consensus. The responsibility is not to figure everything out on your own, but to ensure those decisions get figured out in the first place. One of the harder lessons I've learned doing this process is to **treat silence as a signal that something has not been fully understood yet, not as confirmation that everyone agrees.**

I have found that part of being successful at scoping projects is being comfortable saying when I do not know something. Early in my career, admitting that felt like it would undermine my credibility. In practice, the engineers I have learned the most from do it without hesitation and it has never come across that way. Surfacing those unknowns early is what drives the team to answer the right questions upfront and produces a much better final product.

An AI tool is useful at this stage. You can use one to help write the business logic document itself and ask it to generate edge case questions you may not have thought to ask.

---

## Step 2: Defining how you're building it

Once there is an agreed upon definition of what is being built, the next step involves aligning on a high-level technical approach. Keep the plan concise, around one to two pages. A reviewer needs to read it, understand what you are trying to do, and weigh in on the decisions that actually matter without getting lost in details that distract from that.

One thing I have found consistently is that technical scoping surfaces business logic edge cases that were not considered during Step 1. Thinking through every edge case at the UX level alone rarely works. When this surfaces, the important thing is to immediately communicate the change back to the relevant stakeholders and update the business logic definition before moving forward.

The standard way to structure a technical plan is by breaking the work into milestones. A milestone represents an entire workflow goal. The value is in sequencing: understanding what can happen in parallel, what is blocked by something else, and in what order things need to be completed. Each milestone contains one or more steps, each with a targeted goal, a time estimate, and clear validation criteria.

Before going deep on open questions, time estimates, or the finer details of the plan, I have found it valuable to get informal, brief feedback from stakeholders on the highest-level decisions first. **Validating your approach before investing hours thinking through the details can save a lot of potential rework,** and a short in-person check-in at this stage tends to surface misalignments faster than anything else.

For any step or milestone where the technical solution is non-obvious, it is worth including a trade analysis directly in the plan: laying out the options against a set of selection criteria, presenting a recommendation with justification, and getting explicit sign-off from a reviewer before execution begins. Again, the responsibility is not to have all the answers, but to make sure the right questions get raised and resolved before any code is written. A coding agent can help here too, by pointing one at the codebase and then at each step document and asking it to generate questions looking for edge cases, gaps, or inconsistencies. It is one of the most effective ways to stress test a plan before anyone starts building.

I will often spin up a coding agent in the background to start working through the defined milestones and steps. Actually following through on the implementation, even roughly, gives you a much more grounded sense of the effort involved. You can see the lines of code changing, understand the real scope of impact, and revisit your approach or time estimates before committing to them.

---

## Step 3: Executing with coding agents

After the high-level technical approach has been approved, I use coding agents to execute each step in the plan. Agentic-assisted coding introduces a much more tempting version of the same pitfall I described at the start of this post: running off to build a solution before thinking it through now merely takes a few seconds.

Coding standards are a good example. If you work somewhere with strict standards but a codebase that does not consistently meet them, a coding agent will use the surrounding code as context and produce more of the same, quietly contributing tech debt with every run. Directing it to follow all the standards strictly when shipping a minor feature could mean looking at a massive refactor that has nothing to do with what you need to deliver. There is no universal rule here; it is about being decisive about where you draw the line on a given piece of work.

The approach that works better is to start every session in planning mode. Before any code gets written, I review what the agent is proposing architecturally and push back on anything that deviates from the high-level plan, does not follow proper software best practices or the coding standards. **The coding agent is the implementer; the architecture decisions have to come from you.** Starting in planning mode adds time upfront, but saves it consistently in the end.

The same principle from Steps 1 and 2 applies here: if the implementation surfaces changes to the business logic or the high-level technical approach, **those decisions need to be communicated to the right stakeholders immediately rather than silently absorbed into the code.**

---

## Looking forward

These lessons have come with a lot of growing pains, and were frustrating in the moment, but have shaped how I think about engineering ownership. I am carrying them forward as I continue to grow as an engineer.

And that upfront work is only going to matter more. As coding agents accelerate implementation, more of an engineer's time will shift to defining what to build, how to build it, and aligning people around those decisions. Engineers who do this well will be significantly more effective at building products people actually want to use.