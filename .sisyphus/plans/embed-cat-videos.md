# Embed Cute Cat Videos into Quiz Question Pages

## TL;DR

> **Quick Summary**: Add 4 cute cat .webm videos to alternating quiz question pages (Q1, Q3, Q5, Q7 get a video; Q2, Q4, Q6 don't). Videos play as silent decorative loops above the question text inside the existing QuestionCard component.
> 
> **Deliverables**:
> - 4 .webm video files served from `public/videos/`
> - `<video>` element in QuestionCard rendered conditionally
> - Updated question data with `videoSrc` field on 4 questions
> 
> **Estimated Effort**: Quick-Short (30–60 min, ~30 lines of code + 4 binary file copies)
> **Parallel Execution**: NO — sequential (5 small atomic steps)
> **Critical Path**: Task 1 → Task 2 → Task 3 → Task 4 → Task 5

---

## Context

### Original Request
User wants to embed all videos from `.sisyphus/media/cute-cats/` into quiz question pages. Videos are numbered with prefixes (1- through 4-). Pattern: first question with video, second without, alternating through all 7 questions.

### Video Inventory
| File                    | Size    | Target Question |
|-------------------------|---------|-----------------|
| `1-cat-piano.webm`      | 1.24 MB | Q1 (index 0)    |
| `2-cat-funny-clip.webm` | 1.29 MB | Q3 (index 2)    |
| `3-cat-japanese.webm`   | 508 KB  | Q5 (index 4)    |
| `4-tyn-tyn.webm`        | 1.92 MB | Q7 (index 6)    |

### Metis Review
**Identified Gaps** (addressed):
- **Vite base path gotcha**: Video `src` must use `import.meta.env.BASE_URL` prefix to work in both dev (`/`) and production (`/valentine-2026/`). Addressed in Task 4 implementation details.
- **iOS autoplay**: `playsInline` attribute required for mobile Safari. Addressed in Task 4.
- **Accessibility (prefers-reduced-motion)**: README claims motion sensitivity support. Videos must respect this. Addressed in Task 4.
- **No `public/` directory**: Must be created. Addressed in Task 1.

---

## Work Objectives

### Core Objective
Add cute cat videos as decorative elements on alternating quiz questions, maintaining the romantic aesthetic and existing UX quality.

### Concrete Deliverables
- `public/videos/` directory with 4 `.webm` files
- Updated `BaseQuestion` type with optional `videoSrc` field
- Updated `questions.ts` data with `videoSrc` on Q1, Q3, Q5, Q7
- Updated `QuestionCard.tsx` to render `<video>` conditionally
- Updated `App.tsx` to pass `videoSrc` prop
- Updated test coverage

### Definition of Done
- [x] `bun run build` succeeds with zero errors
- [x] `dist/videos/` contains all 4 `.webm` files after build
- [x] `bun run test` passes all tests (existing + new)
- [x] `bunx tsc --noEmit` reports zero type errors
- [x] Videos appear on Q1, Q3, Q5, Q7 and NOT on Q2, Q4, Q6

### Must Have
- Videos autoplay, loop, muted, inline — no user interaction needed
- Video paths work in both dev and GitHub Pages production
- `prefers-reduced-motion` is respected (video hidden or paused)
- Responsive video sizing (not overflowing on mobile)

### Must NOT Have (Guardrails)
- ❌ Custom `VideoPlayer` component — it's a `<video>` tag with 4 attributes
- ❌ Loading spinners/skeletons for video
- ❌ Error handling/fallback UI for video load failure
- ❌ Multiple `<source>` format fallbacks — all files are `.webm`, all modern browsers support it
- ❌ `useVideo` hook or any state management for video
- ❌ Video controls (play/pause/progress bar)
- ❌ Videos on non-question screens (intro, score, letter, valentine)
- ❌ Modifications to `questionVariants.ts`
- ❌ Video preloading, lazy loading, or intersection observer
- ❌ Importing videos via Vite asset pipeline (`import video from '...'`) — use `public/` for large binaries

---

## Verification Strategy (MANDATORY)

> **UNIVERSAL RULE: ZERO HUMAN INTERVENTION**
>
> ALL tasks MUST be verifiable WITHOUT any human action.

### Test Decision
- **Infrastructure exists**: YES (vitest + @testing-library/react)
- **Automated tests**: YES (tests-after — add test cases for video rendering)
- **Framework**: vitest

### Agent-Executed QA Scenarios (MANDATORY — ALL tasks)

> Primary verification via build checks, test suite, type checker, and browser automation.

---

## Execution Strategy

### Sequential Execution

```
Task 1: Copy videos to public/videos/
  ↓
Task 2: Extend BaseQuestion type
  ↓
Task 3: Add videoSrc to question data + pass prop in App.tsx
  ↓
Task 4: Render video in QuestionCard
  ↓
Task 5: Update tests + final verification
```

All tasks are sequential because each builds on the previous.

### Dependency Matrix

| Task | Depends On | Blocks |
|------|------------|--------|
| 1    | None       | 3, 4   |
| 2    | None       | 3      |
| 3    | 1, 2       | 4      |
| 4    | 3          | 5      |
| 5    | 4          | None   |

### Agent Dispatch Summary

| Task | Recommended        | Skills                             |
|------|--------------------|------------------------------------|
| 1    | `category="quick"` | `["git-commit"]`                   |
| 2    | `category="quick"` | `["git-commit"]`                   |
| 3    | `category="quick"` | `["git-commit"]`                   |
| 4    | `category="quick"` | `["git-commit", "frontend-ui-ux"]` |
| 5    | `category="quick"` | `["git-commit"]`                   |

---

## TODOs

- [x] 1. Copy video files to `public/videos/`

  **What to do**:
  - Create directory `public/videos/`
  - Copy all 4 `.webm` files from `.sisyphus/media/cute-cats/` to `public/videos/`
  - Verify all 4 files are present with correct sizes

  **Must NOT do**:
  - Do not rename the files
  - Do not convert formats
  - Do not modify `.gitignore`

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple file copy, no code logic
  - **Skills**: [`git-commit`]
    - `git-commit`: Atomic commit for the binary additions

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (Step 1)
  - **Blocks**: Tasks 3, 4
  - **Blocked By**: None

  **References**:

  **Source files**:
  - `.sisyphus/media/cute-cats/1-cat-piano.webm` — First cat video (1.24 MB)
  - `.sisyphus/media/cute-cats/2-cat-funny-clip.webm` — Second cat video (1.29 MB)
  - `.sisyphus/media/cute-cats/3-cat-japanese.webm` — Third cat video (508 KB)
  - `.sisyphus/media/cute-cats/4-tyn-tyn.webm` — Fourth cat video (1.92 MB)

  **Destination pattern**:
  - Vite serves everything in `public/` as static assets at the root URL. Files in `public/videos/` become accessible at `/videos/filename.webm` in dev and `/valentine-2026/videos/filename.webm` in production (Vite prepends `base` automatically for assets referenced via `import.meta.env.BASE_URL`).

  **Acceptance Criteria**:

  - [ ] Directory `public/videos/` exists
  - [ ] `ls public/videos/*.webm | wc -l` → 4
  - [ ] File sizes match originals (no corruption):
    ```
    diff <(ls -l .sisyphus/media/cute-cats/*.webm | awk '{print $5, $NF}') <(ls -l public/videos/*.webm | awk '{print $5, $NF}')
    ```
    (Sizes should match; filenames will differ in path but not name)

  **Agent-Executed QA Scenarios**:

  ```
  Scenario: All video files copied correctly
    Tool: Bash
    Preconditions: .sisyphus/media/cute-cats/ contains 4 .webm files
    Steps:
      1. mkdir -p public/videos
      2. cp .sisyphus/media/cute-cats/*.webm public/videos/
      3. ls -la public/videos/
      4. Assert: 4 files present
      5. Assert: 1-cat-piano.webm size ~1298844 bytes
      6. Assert: 2-cat-funny-clip.webm size ~1352364 bytes
      7. Assert: 3-cat-japanese.webm size ~520232 bytes
      8. Assert: 4-tyn-tyn.webm size ~2010612 bytes
    Expected Result: All 4 files copied with matching sizes
    Evidence: ls -la output captured
  ```

  **Commit**: YES
  - Message: `feat(quiz): add cute cat video assets to public/videos`
  - Files: `public/videos/*.webm`
  - Pre-commit: `ls public/videos/*.webm | wc -l` → 4

---

- [x] 2. Extend `BaseQuestion` type with optional `videoSrc` field

  **What to do**:
  - In `src/types/Question.ts`, add `videoSrc?: string` to the `BaseQuestion` interface
  - This is an optional field, so all existing code remains valid

  **Must NOT do**:
  - Do not add video-related types beyond the single string field
  - Do not create a `VideoConfig` interface or similar abstraction

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single line addition to a type file
  - **Skills**: [`git-commit`]
    - `git-commit`: Atomic type-only commit

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Task 1)
  - **Parallel Group**: Wave 1 (with Task 1)
  - **Blocks**: Task 3
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - `src/types/Question.ts:1-5` — `BaseQuestion` interface. Add `videoSrc?: string` after `designVariant: string` on line 4. This field is inherited by all question type variants via `extends BaseQuestion`.

  **Acceptance Criteria**:

  - [ ] `bunx tsc --noEmit` → 0 errors
  - [ ] `BaseQuestion` interface has `videoSrc?: string` field
  - [ ] All existing tests still pass: `bun run test` → all pass

  **Agent-Executed QA Scenarios**:

  ```
  Scenario: Type addition compiles cleanly
    Tool: Bash
    Preconditions: None
    Steps:
      1. Run: bunx tsc --noEmit 2>&1
      2. Assert: Exit code 0
      3. Assert: No error output
    Expected Result: Zero type errors
    Evidence: tsc output captured

  Scenario: Existing tests unaffected
    Tool: Bash
    Preconditions: None
    Steps:
      1. Run: bun run test 2>&1
      2. Assert: All tests pass
      3. Assert: Zero failures
    Expected Result: All existing tests pass unchanged
    Evidence: Test output captured
  ```

  **Commit**: YES
  - Message: `feat(quiz): add optional videoSrc field to BaseQuestion type`
  - Files: `src/types/Question.ts`
  - Pre-commit: `bunx tsc --noEmit`

---

- [x] 3. Add `videoSrc` to question data and pass prop from App.tsx

  **What to do**:
  - In `src/data/questions.ts`, add `videoSrc` field to questions at indices 0, 2, 4, 6:
    - Q1 (index 0): `videoSrc: 'videos/1-cat-piano.webm'`
    - Q3 (index 2): `videoSrc: 'videos/2-cat-funny-clip.webm'`
    - Q5 (index 4): `videoSrc: 'videos/3-cat-japanese.webm'`
    - Q7 (index 6): `videoSrc: 'videos/4-tyn-tyn.webm'`
  - **IMPORTANT**: Store paths WITHOUT leading slash and WITHOUT base URL prefix. The path `videos/1-cat-piano.webm` is relative to `public/`. The rendering component will prepend `import.meta.env.BASE_URL`.
  - In `src/App.tsx`, pass `videoSrc` to QuestionCard at line ~158:
    ```tsx
    <QuestionCard
      designVariant={currentQuestion.designVariant}
      questionText={currentQuestion.question}
      videoSrc={currentQuestion.videoSrc}
    >
    ```

  **Must NOT do**:
  - Do not compute video mapping at runtime (no index-based logic)
  - Do not add videoSrc to Q2 (index 1), Q4 (index 3), Q6 (index 5)
  - Do not add leading `/` to paths
  - Do not include `import.meta.env.BASE_URL` in the data — that belongs in the component

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple data additions + 1 prop pass-through
  - **Skills**: [`git-commit`]
    - `git-commit`: Atomic commit for data + prop wiring

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (Step 3)
  - **Blocks**: Task 4
  - **Blocked By**: Tasks 1, 2

  **References**:

  **Pattern References**:
  - `src/data/questions.ts:3-27` — Q1 object structure. Add `videoSrc: 'videos/1-cat-piano.webm'` as a property, e.g., after `designVariant: 'gradient-rose'` on line 8
  - `src/data/questions.ts:28-41` — Q2 object. Do NOT add videoSrc here (no video)
  - `src/data/questions.ts:42-58` — Q3 object. Add `videoSrc: 'videos/2-cat-funny-clip.webm'`
  - `src/data/questions.ts:59-87` — Q4 object. Do NOT add videoSrc
  - `src/data/questions.ts:88-110` — Q5 object. Add `videoSrc: 'videos/3-cat-japanese.webm'`
  - `src/data/questions.ts:111-125` — Q6 object. Do NOT add videoSrc
  - `src/data/questions.ts:126-143` — Q7 object. Add `videoSrc: 'videos/4-tyn-tyn.webm'`

  **Prop passing reference**:
  - `src/App.tsx:158-161` — Where QuestionCard is rendered. Add `videoSrc={currentQuestion.videoSrc}` alongside `designVariant` and `questionText`

  **Acceptance Criteria**:

  - [ ] `bunx tsc --noEmit` → 0 errors
  - [ ] `grep -c 'videoSrc' src/data/questions.ts` → 4 (exactly 4 questions have it)
  - [ ] `grep 'videoSrc' src/App.tsx` → shows prop being passed to QuestionCard
  - [ ] Paths are relative (no leading `/`, no `BASE_URL` in data):
    ```
    grep 'videoSrc' src/data/questions.ts
    # Assert: All 4 lines match pattern: videoSrc: 'videos/N-*.webm'
    ```

  **Agent-Executed QA Scenarios**:

  ```
  Scenario: Correct questions have videoSrc
    Tool: Bash
    Preconditions: Tasks 1 and 2 completed
    Steps:
      1. Run: grep -n 'videoSrc' src/data/questions.ts
      2. Assert: Exactly 4 matches
      3. Assert: Line numbers correspond to Q1, Q3, Q5, Q7 objects
      4. Assert: Paths are 'videos/1-cat-piano.webm', 'videos/2-cat-funny-clip.webm', 'videos/3-cat-japanese.webm', 'videos/4-tyn-tyn.webm'
    Expected Result: 4 correct videoSrc entries
    Evidence: grep output captured

  Scenario: App.tsx passes videoSrc prop
    Tool: Bash
    Preconditions: QuestionCard accepts videoSrc prop (Task 4 pending, but types allow it)
    Steps:
      1. Run: grep -A2 'QuestionCard' src/App.tsx | grep 'videoSrc'
      2. Assert: Line like `videoSrc={currentQuestion.videoSrc}`
    Expected Result: Prop is wired through
    Evidence: grep output captured

  Scenario: Type safety verified
    Tool: Bash
    Preconditions: Task 2 complete (type updated)
    Steps:
      1. Run: bunx tsc --noEmit 2>&1
      2. Assert: Exit code 0
    Expected Result: Zero type errors
    Evidence: tsc output captured
  ```

  **Commit**: YES
  - Message: `feat(quiz): wire videoSrc data for alternating cat videos on Q1/Q3/Q5/Q7`
  - Files: `src/data/questions.ts`, `src/App.tsx`
  - Pre-commit: `bunx tsc --noEmit`

---

- [x] 4. Render video conditionally in QuestionCard

  **What to do**:
  - Add `videoSrc?: string` to `QuestionCardProps` interface in `src/components/QuestionCard.tsx`
  - Accept the prop in the component destructuring
  - When `videoSrc` is provided, render a `<video>` element **above the `<h2>` question text** (first child inside the `space-y-6` div)
  - Video attributes: `autoPlay loop muted playsInline`
  - **CRITICAL — Base URL**: Construct the full `src` as: `import.meta.env.BASE_URL + videoSrc`
    - In dev: `/ + videos/1-cat-piano.webm` → `/videos/1-cat-piano.webm` ✅
    - In prod: `/valentine-2026/ + videos/1-cat-piano.webm` → `/valentine-2026/videos/1-cat-piano.webm` ✅
  - **CRITICAL — Accessibility**: Wrap video rendering in a `prefers-reduced-motion` check. Use Tailwind's `motion-reduce:hidden` class on the video container, OR use a `matchMedia` check. The simplest approach: add a wrapper `<div className="motion-reduce:hidden">` around the video.
  - **Responsive sizing**: Constrain video height with `max-h-48 sm:max-h-56 lg:max-h-64` and center with `mx-auto`. Use `rounded-2xl overflow-hidden` to match card aesthetic. Use `w-full object-contain` for responsive width.

  **Approximate code shape** (for executor reference, not prescriptive):
  ```tsx
  {videoSrc && (
    <div className="flex justify-center motion-reduce:hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        src={import.meta.env.BASE_URL + videoSrc}
        className="rounded-2xl max-h-48 sm:max-h-56 lg:max-h-64 w-auto object-contain"
      />
    </div>
  )}
  ```

  **Must NOT do**:
  - Do not create a separate video component file
  - Do not add play/pause controls or loading states
  - Do not add error handlers or fallback UI
  - Do not add `<source>` elements — use `src` attribute directly
  - Do not add poster images
  - Do not add video preloading logic
  - Do not modify the existing layout structure beyond inserting the video element

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: ~15 lines of JSX addition to existing component
  - **Skills**: [`git-commit`, `frontend-ui-ux`]
    - `git-commit`: Atomic commit for the component change
    - `frontend-ui-ux`: Responsive sizing, accessibility, layout integration

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (Step 4)
  - **Blocks**: Task 5
  - **Blocked By**: Task 3

  **References**:

  **Pattern References**:
  - `src/components/QuestionCard.tsx:4-8` — `QuestionCardProps` interface. Add `videoSrc?: string` after line 7 (`children: React.ReactNode`)
  - `src/components/QuestionCard.tsx:10-14` — Component destructuring. Add `videoSrc` to destructured props
  - `src/components/QuestionCard.tsx:21-24` — The `space-y-6` div's children. Insert video element **before** the `<h2>` on line 22

  **Technical References**:
  - `vite.config.ts:7` — `base: '/valentine-2026/'` confirming the base path. `import.meta.env.BASE_URL` resolves to this value in production.
  - README.md Accessibility section — Confirms project claims `prefers-reduced-motion` support. `motion-reduce:hidden` is a Tailwind v4 utility that applies `@media (prefers-reduced-motion: reduce) { display: hidden }`.

  **Acceptance Criteria**:

  - [ ] `bunx tsc --noEmit` → 0 errors
  - [ ] QuestionCard renders `<video>` when `videoSrc` is provided
  - [ ] QuestionCard renders NO `<video>` when `videoSrc` is undefined
  - [ ] Video element has attributes: `autoPlay`, `loop`, `muted`, `playsInline`
  - [ ] Video `src` uses `import.meta.env.BASE_URL` prefix
  - [ ] `prefers-reduced-motion` is respected (grep for `motion-reduce` or `reduced-motion`)
  - [ ] `bun run build` succeeds

  **Agent-Executed QA Scenarios**:

  ```
  Scenario: Video renders on question page with videoSrc
    Tool: Playwright (agent-browser skill)
    Preconditions: Dev server running on localhost:5173
    Steps:
      1. Navigate to: http://localhost:5173/valentine-2026/
      2. Click: button containing "Begin Our Journey"
      3. Wait for: video element visible (timeout: 5s)
      4. Assert: video element exists on Q1 page
      5. Assert: video[src] contains "1-cat-piano.webm"
      6. Assert: video has attribute "autoplay"
      7. Assert: video has attribute "loop"
      8. Assert: video has attribute "muted"
      9. Screenshot: .sisyphus/evidence/task-4-q1-with-video.png
    Expected Result: Video visible above question text on Q1
    Evidence: .sisyphus/evidence/task-4-q1-with-video.png

  Scenario: No video on Q2 (even-numbered question)
    Tool: Playwright (agent-browser skill)
    Preconditions: Dev server running, on Q1 page
    Steps:
      1. Click any answer option on Q1 (auto-advances to Q2)
      2. Wait for: question text changes (timeout: 5s)
      3. Assert: NO video element on page
      4. Screenshot: .sisyphus/evidence/task-4-q2-no-video.png
    Expected Result: No video element on Q2
    Evidence: .sisyphus/evidence/task-4-q2-no-video.png

  Scenario: Video on Q3 after answering Q2
    Tool: Playwright (agent-browser skill)
    Preconditions: On Q2 page
    Steps:
      1. Click any answer option on Q2 (auto-advances to Q3)
      2. Wait for: video element visible (timeout: 5s)
      3. Assert: video element exists
      4. Assert: video[src] contains "2-cat-funny-clip.webm"
      5. Screenshot: .sisyphus/evidence/task-4-q3-with-video.png
    Expected Result: Video visible on Q3 with correct source
    Evidence: .sisyphus/evidence/task-4-q3-with-video.png

  Scenario: Build succeeds with video paths
    Tool: Bash
    Preconditions: All source changes complete
    Steps:
      1. Run: bun run build 2>&1
      2. Assert: Exit code 0
      3. Run: ls dist/videos/
      4. Assert: 4 .webm files present
      5. Run: grep -r 'BASE_URL' dist/assets/*.js || grep -r 'valentine-2026/videos' dist/assets/*.js
      6. Assert: Video paths are correctly resolved in built output
    Expected Result: Production build includes videos with correct paths
    Evidence: Build output + dist listing captured

  Scenario: Reduced motion hides video
    Tool: Playwright (agent-browser skill)
    Preconditions: Dev server running
    Steps:
      1. Emulate: prefers-reduced-motion: reduce
      2. Navigate to: http://localhost:5173/valentine-2026/
      3. Click: "Begin Our Journey"
      4. Wait for: question page loads (timeout: 5s)
      5. Assert: video element is hidden (display: none or not visible)
      6. Screenshot: .sisyphus/evidence/task-4-reduced-motion.png
    Expected Result: Video not visible when reduced motion preferred
    Evidence: .sisyphus/evidence/task-4-reduced-motion.png
  ```

  **Commit**: YES
  - Message: `feat(quiz): render cat videos on alternating question pages with a11y support`
  - Files: `src/components/QuestionCard.tsx`
  - Pre-commit: `bunx tsc --noEmit && bun run build`

---

- [x] 5. Update tests and run final verification

  **What to do**:
  - Add test cases to `src/__tests__/QuestionCard.test.tsx`:
    1. Test: When `videoSrc` is provided, a `<video>` element renders with correct attributes
    2. Test: When `videoSrc` is undefined, no `<video>` element renders
  - Run full test suite: `bun run test`
  - Run type check: `bunx tsc --noEmit`
  - Run build: `bun run build`
  - Verify `dist/videos/` contains all 4 files

  **Must NOT do**:
  - Do not test video playback behavior (that's browser-level, not unit-testable)
  - Do not add integration/E2E tests
  - Do not modify existing test cases

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 2 test cases + verification commands
  - **Skills**: [`git-commit`]
    - `git-commit`: Atomic commit for test additions

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (Step 5, final)
  - **Blocks**: None
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - `src/__tests__/QuestionCard.test.tsx` — Existing test file. Follow the same test structure: `describe`/`it` blocks, `render()` from `@testing-library/react`, assertions with `screen.getByRole` or `screen.queryByRole`
  - `src/__tests__/setup.ts` — Test setup file (jsdom environment)

  **Testing References**:
  - The existing QuestionCard tests render the component with `designVariant`, `questionText`, and `children` props. New tests should add `videoSrc` prop to the render call.
  - Use `screen.queryByTestId('question-video')` or `container.querySelector('video')` to check for video presence — choose based on existing test patterns in the file.

  **Acceptance Criteria**:

  - [ ] `bun run test` → All tests pass (existing + 2 new)
  - [ ] `bunx tsc --noEmit` → 0 errors
  - [ ] `bun run build` → Exit code 0
  - [ ] `ls dist/videos/*.webm | wc -l` → 4
  - [ ] No other files modified beyond the planned set

  **Agent-Executed QA Scenarios**:

  ```
  Scenario: Full test suite passes
    Tool: Bash
    Preconditions: All previous tasks completed
    Steps:
      1. Run: bun run test 2>&1
      2. Assert: Exit code 0
      3. Assert: Output shows new QuestionCard video tests passing
      4. Assert: Zero failures
    Expected Result: All tests pass including new video-related ones
    Evidence: Full test output captured

  Scenario: Production build is clean
    Tool: Bash
    Preconditions: All code changes committed
    Steps:
      1. Run: bun run build 2>&1
      2. Assert: Exit code 0
      3. Run: ls -la dist/videos/
      4. Assert: 4 .webm files present
      5. Run: du -sh dist/
      6. Assert: Total dist size reasonable (~5-6 MB with videos)
    Expected Result: Clean production build with all assets
    Evidence: Build output + dist listing

  Scenario: Only expected files modified
    Tool: Bash
    Preconditions: All commits made
    Steps:
      1. Run: git diff --name-only HEAD~5 HEAD
      2. Assert: Modified files are ONLY:
         - src/types/Question.ts
         - src/components/QuestionCard.tsx
         - src/data/questions.ts
         - src/App.tsx
         - src/__tests__/QuestionCard.test.tsx
      3. Assert: New files are ONLY:
         - public/videos/1-cat-piano.webm
         - public/videos/2-cat-funny-clip.webm
         - public/videos/3-cat-japanese.webm
         - public/videos/4-tyn-tyn.webm
    Expected Result: No unexpected file modifications
    Evidence: git diff output captured
  ```

  **Commit**: YES
  - Message: `test(quiz): add QuestionCard video rendering tests`
  - Files: `src/__tests__/QuestionCard.test.tsx`
  - Pre-commit: `bun run test`

---

## Commit Strategy

| After Task | Message                                                                         | Files                                  | Verification                           |
|------------|---------------------------------------------------------------------------------|----------------------------------------|----------------------------------------|
| 1          | `feat(quiz): add cute cat video assets to public/videos`                        | `public/videos/*.webm`                 | `ls public/videos/*.webm \| wc -l` → 4 |
| 2          | `feat(quiz): add optional videoSrc field to BaseQuestion type`                  | `src/types/Question.ts`                | `bunx tsc --noEmit`                    |
| 3          | `feat(quiz): wire videoSrc data for alternating cat videos on Q1/Q3/Q5/Q7`      | `src/data/questions.ts`, `src/App.tsx` | `bunx tsc --noEmit`                    |
| 4          | `feat(quiz): render cat videos on alternating question pages with a11y support` | `src/components/QuestionCard.tsx`      | `bunx tsc --noEmit && bun run build`   |
| 5          | `test(quiz): add QuestionCard video rendering tests`                            | `src/__tests__/QuestionCard.test.tsx`  | `bun run test`                         |

---

## Success Criteria

### Verification Commands
```bash
bunx tsc --noEmit          # Expected: 0 errors
bun run test               # Expected: All tests pass
bun run build              # Expected: Exit code 0
ls dist/videos/*.webm      # Expected: 4 files
```

### Final Checklist
- [x] All 4 videos appear on correct questions (Q1, Q3, Q5, Q7)
- [x] No videos on Q2, Q4, Q6
- [x] Videos autoplay silently and loop
- [x] Videos work on GitHub Pages (base path correct)
- [x] `prefers-reduced-motion` hides videos
- [x] All tests pass
- [x] Build succeeds
- [x] No custom video player, no loading states, no error handlers
- [x] Only planned files touched
