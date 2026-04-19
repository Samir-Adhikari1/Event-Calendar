<div align="center">

<!-- BANNER -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:050914,50:00c3ff,100:7b2fff&height=220&section=header&text=COSMO%20DAY%20FINDER&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Locate%20Any%20Date%20in%20the%20Cosmos%20of%20Time&descAlignY=58&descSize=18&animation=fadeIn" />

<br/>

<!-- BADGES ROW 1 -->
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-No_Framework-00c3ff?style=for-the-badge&logo=javascript&logoColor=white)](#)

<!-- BADGES ROW 2 -->
[![License](https://img.shields.io/badge/License-MIT-7b2fff?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-00ffaa?style=for-the-badge)](#)
[![Events](https://img.shields.io/badge/Events_Indexed-200%2B-ff6b6b?style=for-the-badge)](#-events-database)
[![Made By](https://img.shields.io/badge/Made_By-COSMO-00c3ff?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiLz48L3N2Zz4=)](#)

<br/>

<!-- DEMO GIF PLACEHOLDER -->
> 🌌 **A cosmic-themed date intelligence tool** — find the weekday of any date across history and see **200+ global observances, festivals, tech days, and special events** indexed for that moment in time.

<br/>

---

</div>

## 📑 Table of Contents

- [✨ Overview](#-overview)
- [🎯 Features](#-features)
- [🖥️ Demo](#️-demo)
- [🗂️ Project Structure](#️-project-structure)
- [⚙️ How It Works](#️-how-it-works)
- [🗓️ Events Database](#️-events-database)
- [🔧 Installation & Usage](#-installation--usage)
- [🧠 Logic Deep-Dive](#-logic-deep-dive)
- [🎨 Design System](#-design-system)
- [🐛 Bug Fixes from v1](#-bug-fixes-from-v1)
- [🔮 Roadmap](#-roadmap)
- [👤 Author](#-author)
- [📄 License](#-license)

---

## ✨ Overview

**COSMO Day Finder** is a pure-frontend, zero-dependency web application that resolves any calendar date — from the year 1000 to 9999 — into its corresponding **weekday** along with all relevant **global observances, international days, cultural festivals, and special events** associated with that date.

The project was engineered with a dual-layer events architecture that separates **fixed annual events** (same date every year) from **year-shifting events** (e.g. Holi, Easter, Eid — which move annually). This design makes the system extensible, maintainable, and historically accurate across arbitrary years.

> _"I don't follow rules — I burn them up and build my empire from the ashes."_ — **COSMO**

---

## 🎯 Features

| Feature | Description |
|---|---|
| 📅 **Universal Date Resolution** | Computes the exact weekday for any date from year 1000–9999 using JavaScript's native `Date` object |
| 🌍 **200+ Indexed Events** | Covers international observances, UN days, science & tech days, cultural festivals (Nepal 🇳🇵, India 🇮🇳, global 🌐), gaming days, and personal milestones |
| 🔀 **Two-Layer Event Engine** | `FIXED_EVENTS` (annual) + `YEAR_EVENTS` (year-specific) merged at runtime for precise multi-year accuracy |
| 🛡️ **Smart Validation** | Dynamically calculates valid day ranges per month — correctly rejects Feb 30, April 31, etc. — including **leap year awareness** |
| 🎨 **Cosmic Dark UI** | Animated starfield, orbital ring, glowing accents, and badge-based event rendering in a responsive glassmorphism card |
| ⌨️ **Full Keyboard Support** | `Enter` key triggers search on all three inputs simultaneously |
| 🚫 **Zero Dependencies** | No frameworks, no npm, no build tools — pure HTML + CSS + JavaScript |

---

## 🖥️ Demo

```
Clone → Open index.html → Done.
No server required. No dependencies. Runs offline.
```

**Try these test dates:**
- `14 / April / 2026` → Nepali New Year 🇳🇵 + Ambedkar Jayanti
- `4 / May / any year` → Star Wars Day 🌌
- `14 / March / any year` → Pi Day 🥧 (π = 3.14...)
- `13 / September / any year` → International Programmers' Day 💻 (256th day)
- `22 / July / any year` → Pi Approximation Day 🧮 (22/7)
- `31 / December / any year` → New Year's Eve 🎆

---

## 🗂️ Project Structure

```
cosmo-day-finder/
│
├── 📄 index.html          # App shell — semantic HTML5, Google Fonts import
├── 🎨 style.css           # Cosmic dark theme — CSS variables, animations, responsive layout
├── ⚙️ script.js           # Core logic — events engine, validation, DOM rendering
└── 📖 README.md           # You are here
```

### File Responsibilities

```
index.html  ──▶  Structure & layout only. No inline styles. No inline scripts.
style.css   ──▶  All visual design. CSS variables for theming. Keyframe animations.
script.js   ──▶  All business logic. Events database. Date computation. Input validation.
```

---

## ⚙️ How It Works

```
User Input (day, month, year)
         │
         ▼
┌─────────────────────┐
│   Input Validation  │  ── isValidDay() checks real max days per month/year
└────────┬────────────┘
         │ valid
         ▼
┌─────────────────────┐
│  Date Construction  │  ── new Date(year, month, day) → .getDay() → weekday
└────────┬────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│            Events Engine                    │
│                                             │
│  getAllEvents(day, month, year)             │
│       │                                     │
│       ├─▶ FIXED_EVENTS["month-day"]        │  ← 200+ annual events
│       │         (same every year)           │
│       │                                     │
│       └─▶ YEAR_EVENTS["year-month-day"]    │  ← Year-specific events
│                 (Holi, Easter, Eid…)        │    (Holi 2026, Easter 2025…)
│                                             │
│       Returns: merged array of strings      │
└────────┬────────────────────────────────────┘
         │
         ▼
┌─────────────────────┐
│    DOM Renderer     │  ── Builds result-box with weekday + color-coded event badges
└─────────────────────┘
```

---

## 🗓️ Events Database

The events system covers **12 months × every major observance** — organized by category:

### 🌍 International / UN Days
`World Health Day (Apr 7)` · `World Environment Day (Jun 5)` · `Human Rights Day (Dec 10)` · `International Day of Peace (Sep 21)` · `World Press Freedom Day (May 3)` · and 50+ more

### 🇳🇵 Nepal-Specific
`Maghe Sankranti (Jan 14)` · `Nepali New Year - Bikram Sambat (Apr 14)` · `Buddha Jayanti (May 15)` · `Dashain (Oct, year-specific)` · `Tihar (Nov 4, 2026)`

### 🇮🇳 India-Specific
`Republic Day (Jan 26)` · `National Science Day (Feb 28)` · `Holi (year-specific)` · `Independence Day (Aug 15)` · `Teacher's Day (Sep 5)` · `Gandhi Jayanti (Oct 2)` · `Children's Day (Nov 14)`

### 💻 Tech & Science Days
`World Backup Day (Apr 1)` · `Star Wars Day (May 4)` · `Pi Day (Mar 14)` · `Pi Approximation Day (Jul 22)` · **`International Programmers' Day (Sep 13 — the 256th day of the year)`** · `Computer Security Day (Nov 30)` · `World Computer Literacy Day (Dec 1)`

### 🎉 Cultural & Fun
`Valentine Week (Feb 7–14)` · `April Fool's Day (Apr 1)` · `World Chocolate Day (Jul 7)` · `World Emoji Day (Jul 17)` · `Halloween (Oct 31)` · `Christmas (Dec 25)` · `New Year's Eve (Dec 31)`

### Year-Shifting Events (2026)
| Event | 2026 Date |
|---|---|
| Holi 🎨 | March 3, 2026 |
| Easter Sunday 🐣 | April 5, 2026 |
| Eid al-Adha 🌙 | June 20, 2026 (approx) |
| Dashain Ghatasthapana 🇳🇵 | October 16, 2026 |

> To add future years, simply extend `YEAR_EVENTS` in `script.js` with the correct dates.

---

## 🔧 Installation & Usage

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No Node.js, no npm, no build tools required

### Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/cosmo-day-finder.git

# Navigate to project
cd cosmo-day-finder

# Open directly in browser
open index.html
# OR on Windows:
start index.html
# OR on Linux:
xdg-open index.html
```

### Live Server (Recommended for Development)

If you use **VS Code**, install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer):

```
Right-click index.html → "Open with Live Server"
```

### Usage

```
1. Enter Day   → Number between 1 and the month's actual max days
2. Select Month → Dropdown with all 12 months (0-indexed internally)
3. Enter Year  → Any year from 1000 to 9999
4. Press "FIND DAY" or hit Enter
```

---

## 🧠 Logic Deep-Dive

### Smart Date Validation

```javascript
function isValidDay(day, month, year) {
    if (isNaN(day) || day < 1) return false;
    // Creates a test date — if JS wraps to next month, the day was invalid
    const testDate = new Date(year, month, day);
    return testDate.getMonth() === month;
}
```

**Why this works:** JavaScript's `Date` constructor auto-overflows invalid days — e.g. `new Date(2026, 1, 30)` becomes March 2nd. If the resulting month doesn't match the input month, the day was out of range. This handles **all months and leap years automatically** without any manual calendar math.

---

### Two-Layer Events Engine

```javascript
// Layer 1 — Fixed annual events (same date every year)
const FIXED_EVENTS = {
    "2-14": ["Pi Day 🥧 (π = 3.14...)"],      // March 14 always
    "7-13": ["International Programmers' Day"], // Sep 13 always
    // ...200+ entries
};

// Layer 2 — Year-specific events (date shifts each year)
const YEAR_EVENTS = {
    "2026-2-3":  ["Holi 2026 🎨"],     // Holi on March 3, 2026
    "2025-2-14": ["Holi 2025 🎨"],     // Holi on March 14, 2025
    // ...
};

// Merge at runtime
function getAllEvents(day, month, year) {
    const fixed     = FIXED_EVENTS[`${month}-${day}`] || [];
    const yearBound = YEAR_EVENTS[`${year}-${month}-${day}`] || [];
    return [...yearBound, ...fixed]; // year-specific appears FIRST
}
```

**Design rationale:** Year-specific events are placed before fixed ones so contextually precise dates (like the actual date of Holi for a given year) always render at the top as the primary badge.

---

### Weekday Algorithm

```javascript
const date    = new Date(year, month, day);  // month is 0-indexed (Jan=0)
const weekday = ["Sunday","Monday","Tuesday",
                 "Wednesday","Thursday","Friday","Saturday"][date.getDay()];
```

JavaScript's `Date.getDay()` uses the **Gregorian calendar proleptic extension** — it correctly calculates weekdays for historical dates back to year 1 and well into the future. This means the app works accurately for dates like `25 December 1642` (Newton's birthday — a Thursday) or `4 July 2076`.

---

## 🎨 Design System

```css
:root {
    --bg:       #050914;               /* Deep space black */
    --accent:   #00c3ff;               /* Cyan — primary interactive */
    --accent2:  #7b2fff;               /* Purple — secondary events */
    --success:  #00ffaa;               /* Green — positive state */
    --danger:   #ff4d6d;               /* Red — validation errors */
    --text:     #e8f4ff;               /* Soft white — body text */
    --text-dim: rgba(232,244,255,0.5); /* Dimmed — labels/placeholders */
}
```

| Element | Font | Weight |
|---|---|---|
| Headings / Labels | Orbitron (Google Fonts) | 700–900 |
| Body / Inputs | Rajdhani (Google Fonts) | 400–600 |

**Visual effects used:**
- `backdrop-filter: blur(20px)` — glassmorphism card
- `@keyframes twinkle` — 120 procedurally placed animated stars
- `@keyframes spin` — continuously rotating orbital ring
- `@keyframes fadeSlideUp` — result card entrance animation
- `@keyframes shake` — error feedback on invalid input

---

## 🐛 Bug Fixes from v1

| Bug | v1 Behavior | v2 Fix |
|---|---|---|
| **Invalid day accepted** | Feb 30, Apr 31 passed through silently | `isValidDay()` uses overflow detection — any invalid day is caught |
| **Year-locked events** | `if (year !== 2026) return null` — all events invisible in other years | Split into `FIXED_EVENTS` (any year) + `YEAR_EVENTS` (year-specific) |
| **Single event only** | Each date could only hold one string | Now stores arrays — multiple events per date, all rendered as individual badges |
| **No leap year check** | Feb 29 accepted even in non-leap years | `new Date()` overflow check handles this automatically |

---

## 🔮 Roadmap

```
[✅] Core weekday computation
[✅] 200+ events database (fixed + year-specific)
[✅] Smart validation with overflow detection
[✅] Cosmic dark UI with animations
[⬜] Export date info as PNG card
[⬜] Countdown to next occurrence of any event
[⬜] Bulk date range scan (find all events in a week/month)
[⬜] LocalStorage for user-defined custom events
[⬜] PWA support — installable offline app
[⬜] Nepali calendar (Bikram Sambat) converter integration
```

---

## 👤 Author

<div align="center">

**COSMO**
_13-year-old full-stack developer & AI/ML enthusiast from Kathmandu, Nepal 🇳🇵_

[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YOUR_USERNAME)
[![Stack](https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JS%20%7C%20Python%20%7C%20Flutter-00c3ff?style=for-the-badge)](#)

> _"I don't follow rules — I burn them up and build my empire from the ashes."_

</div>

---

## 📄 License

```
MIT License

Copyright (c) 2026 COSMO

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:7b2fff,50:00c3ff,100:050914&height=120&section=footer&animation=fadeIn" />

**⭐ If this project helped you, drop a star — it fuels the mission.**

`Built with pure HTML · CSS · JavaScript` · `Zero dependencies` · `Made in Nepal 🇳🇵`

</div>
