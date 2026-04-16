# Mall of America: Interactive Sales Deck Write-Up

## 1. Design Rationale & Strategy
The goal for this project was to transform the fragmented sales pitch process (jumping between PDFs, YouTube links, and spreadsheets) into a unified, cinematic experience. To achieve this, I approached the architecture as a hybrid between a high-end luxury brand website (drawing inspiration from Apple and Tesla) and an immersive Digideck presentation. 

### Video-First Emotional Buy-In
To create immediate impact, the Hero section relies heavily on a dynamic, high-definition video background. Within the first ten seconds, a prospective tenant or sponsor instantly feels the scale, energy, and sheer foot traffic of the property. This eliminates the need to verbally explain the mall's magnitude—the experience speaks for itself.

### Non-Linear, Goal-Oriented UX
The interface features a fixed, 8-node sidebar navigation that allows the user to carve their own path. A CEO exploring a flagship location can jump straight to "Luxury," while a corporate marketing director can skip directly to "Partnerships" and "Venues." Because this tool must function both as a live screen-share aid for sales reps and a standalone leave-behind link, the navigation had to feel completely intuitive without requiring a narrator. 

### Premium Aesthetic & Performance
The UI utilizes a sharp dark-mode palette (`#0A0A0A`) complemented by gold accents and modern typography (Playfair Display for luxury, Inter for readability). Performance was heavily prioritized: the application leverages React `lazy` and `Suspense` for code-splitting, ensuring that heavy sections (like the Sponsorship data charts or image-heavy Event galleries) only load when needed, resulting in a buttery-smooth, high-Lighthouse-score experience.

---

## 2. How AI Was Utilized 
A core technical requirement of this project was portraying the property with massive cinematic scale. Because sourcing high-quality, proprietary media assets for large venues can be restrictive, I leaned heavily into Generative AI to produce the premium mixed-media needed:

1. **Cinematic Video Generation:** To create the high-impact "Concert Video" looped background in the Events section, I engineered prompts using AI video generation models (such as Runway Gen-2 / Luma Dream Machine) to mimic the dramatic lighting and wide-angle Steadicam movements standard in arena production. This immediately injected energy into the presentation that static images could not match.
2. **High-Fidelity Rendering & Imagery:** For the Sponsorship module, standard stock photography often lacks a cohesive luxury aesthetic. I utilized AI (Midjourney/DALL-E) to generate the "Major Auto Brand", "Global Tech Company", and "Fashion Week" activation placeholders. By specifying precise architectural constraints and luxury lighting keywords in the prompts, I maintained complete creative control over the photorealism and color harmony across the deck.
3. **Drafting & Copywriting:** I utilized AI as a brainstorming assistant to rapidly generate realistic, industry-standard dummy copy for the partnership tiers, demographic data charts, and venue descriptions, ensuring the final text felt genuine and sales-ready.

---

## 3. What I Would Improve With More Time
While the current deliverable fulfills the Phase 1 and Phase 2 requirements, there are several key areas I would expand upon if given another week:

- **Interactive 3D Mapping (WebGL/Three.js):** I would implement an interactive, isometric 3D map of the mall in the "Retail" and "Leasing" sections. Allowing a prospective tenant to hover over available units or a sponsor to click on the "North Rotunda" to see 360° sightlines would dramatically elevate the pitch.
- **Headless CMS Integration:** A sales deck is a living document. I would connect the frontend to a headless CMS (like Sanity.io or Contentful) so that the commercial team could log in and quickly update the audience demographic data, swap out the hero video, or add a newly available venue space without having to touch the React codebase or request an engineering ticket.
- **Analytics & Prospect Tracking:** I would implement a custom analytics layer (e.g., PostHog or Segment) tied to unique session IDs. If a salesperson generated a unique link for "Nike's Leasing Team," the system would track exactly how long Nike spent looking at the "Luxury" tab versus the "Events" tab. This would provide the sales representative with invaluable data on what the prospect actually cares about before they get on the follow-up call.
