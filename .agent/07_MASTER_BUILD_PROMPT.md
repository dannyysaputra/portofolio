# 07_MASTER_BUILD_PROMPT.md

Gunakan prompt ini untuk agent builder agar langsung membangun web portfolio.

```text
Act as a senior product designer, frontend engineer, and portfolio strategist.

Your task is to create a complete new portfolio website for me, not just give advice.

You must produce a real, buildable portfolio website based on the markdown instructions in this workspace. The final output should be a project-first developer portfolio that feels premium, unique, technically credible, and professional.

Read these files before generating anything:
- AGENTS.md
- 01_PRODUCT_BRIEF.md
- 02_INFORMATION_ARCHITECTURE.md
- 03_CASE_STUDY_SYSTEM.md
- 04_VISUAL_DIRECTION.md
- 05_BUILD_SPEC.md
- 06_CONTENT_INPUT_TEMPLATE.md

Important:
- Do not give more strategy.
- Do not stop at wireframes.
- Build the implementation.
- Use editable placeholders where personal data is still missing.
- Do not invent fake achievements, fake companies, fake testimonials, or fake numbers.

Technical requirements:
- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Component-based architecture
- Responsive layout
- Subtle motion only

Build these pages:
1. Homepage
2. /projects/ai-screening-service
3. /projects/arabicara
4. /projects/kasep

Generate:
- full page structure
- reusable components
- content/data model
- polished UI
- metadata basics
- navigation and footer
- contact CTA flow

Content direction:
Use the project-first structure defined in the markdown files.

Output format:
Provide the website implementation itself.
Do not stop at explanation.
```
