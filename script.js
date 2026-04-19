// ─────────────────────────────────────────────
//  COSMO — DAY FINDER  |  script.js
//  Events engine: fixed annual + year-specific
// ─────────────────────────────────────────────

// ── Inputs ──────────────────────────────────
const dayInput   = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput  = document.getElementById("yearInput");
const findBtn    = document.getElementById("findBtn");
const resultDiv  = document.getElementById("result");

// ── Stars generator ──────────────────────────
(function generateStars() {
    const container = document.getElementById("stars");
    for (let i = 0; i < 120; i++) {
        const star = document.createElement("div");
        star.className = "star";
        const size = Math.random() * 2.5 + 0.5;
        star.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            --dur: ${Math.random() * 4 + 2}s;
            --op: ${Math.random() * 0.7 + 0.2};
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(star);
    }
})();

// ─────────────────────────────────────────────
//  FIXED ANNUAL EVENTS  (same date every year)
//  Key format: "month(0-based)-day"
// ─────────────────────────────────────────────
const FIXED_EVENTS = {

    // ── JANUARY ──────────────────────────────
    "0-1":  ["New Year's Day 🎉", "World Peace Day 🕊️"],
    "0-2":  ["World Science Fiction Day 🚀"],
    "0-4":  ["World Braille Day 👁️"],
    "0-6":  ["Epiphany / Three Kings Day 👑"],
    "0-10": ["World Hindi Day 🗣️"],
    "0-12": ["National Youth Day 🇮🇳"],
    "0-14": ["Maghe Sankranti 🌞 (Nepal Winter Festival)"],
    "0-15": ["World Snow Day ❄️", "Martin Luther King Jr. Day (USA, 3rd Mon)"],
    "0-20": ["World Religion Day ✝️☪️🕉️"],
    "0-21": ["National Hugging Day 🤗"],
    "0-24": ["International Day of Education 📚"],
    "0-25": ["National Voters' Day 🗳️ (India)", "Burns Night (Scotland) 🏴󠁧󠁢󠁳󠁣󠁴󠁿"],
    "0-26": ["Republic Day 🇮🇳", "International Customs Day 🛃"],
    "0-27": ["Holocaust Remembrance Day 🕯️"],
    "0-28": ["Data Privacy Day 🔐"],
    "0-30": ["World Leprosy Day 🎗️", "Martyrs' Day (India) 🕊️"],

    // ── FEBRUARY ─────────────────────────────
    "1-2":  ["World Wetlands Day 🌿"],
    "1-4":  ["World Cancer Day 🎗️", "Facebook Birthday (2004) 📘"],
    "1-6":  ["International Day of Zero Tolerance to FGM 🚫"],
    "1-7":  ["Rose Day 🌹 (Valentine Week Start)"],
    "1-8":  ["Propose Day 💍", "International Day of Childhood Cancer 🎀"],
    "1-9":  ["Chocolate Day 🍫", "World Pizza Day 🍕"],
    "1-10": ["Teddy Day 🧸", "World Pulses Day 🫘"],
    "1-11": ["Promise Day 🤝", "International Day of Women & Girls in Science 🔬"],
    "1-12": ["Hug Day 🤗", "Darwin Day 🧬", "National Productivity Day 💪"],
    "1-13": ["Kiss Day 💋", "World Radio Day 📻"],
    "1-14": ["Valentine's Day ❤️"],
    "1-20": ["World Day of Social Justice ⚖️"],
    "1-21": ["International Mother Language Day 🗣️"],
    "1-22": ["World Thinking Day 💭 (Scouts)"],
    "1-28": ["National Science Day 🔭 (India)"],

    // ── MARCH ────────────────────────────────
    "2-1":  ["Zero Discrimination Day 🌈", "World Civil Defence Day 🛡️"],
    "2-3":  ["World Wildlife Day 🐾"],
    "2-4":  ["World Obesity Day 🏥", "National Security Day 🛡️ (India)"],
    "2-7":  ["International Women of Courage Day 💪"],
    "2-8":  ["International Women's Day 🌷"],
    "2-14": ["Pi Day 🥧 (π = 3.14...)", "White Day 🤍"],
    "2-15": ["World Consumer Rights Day 🛒"],
    "2-18": ["Ordinal Day 77 / Global Recycling Day ♻️"],
    "2-20": ["International Day of Happiness 😊", "World Sparrow Day 🐦", "Spring Equinox 🌸"],
    "2-21": ["World Poetry Day 📜", "International Day for Elimination of Racial Discrimination ✊"],
    "2-22": ["World Water Day 💧"],
    "2-23": ["World Meteorological Day ⛅"],
    "2-24": ["World Tuberculosis Day 🫁"],
    "2-25": ["International Waffle Day 🧇"],
    "2-27": ["World Theatre Day 🎭"],

    // ── APRIL ────────────────────────────────
    "3-1":  ["April Fool's Day 🤡", "World Backup Day 💾"],
    "3-2":  ["World Autism Awareness Day 🧩"],
    "3-4":  ["World Stray Animals Day 🐕"],
    "3-5":  ["National Maritime Day 🚢 (India)"],
    "3-7":  ["World Health Day 🏥"],
    "3-11": ["World Parkinson's Day 🎗️"],
    "3-14": ["Nepali New Year 🇳🇵 (Bikram Sambat)", "B.R. Ambedkar Jayanti 🇮🇳", "International Moment of Laughter Day 😂"],
    "3-17": ["World Hemophilia Day 🩸"],
    "3-18": ["World Heritage Day 🏛️", "International Amateur Radio Day 📡"],
    "3-20": ["Chinese Language Day 🀄", "420 Eve 🌿"],
    "3-21": ["World Creativity and Innovation Day 💡"],
    "3-22": ["Earth Day 🌍"],
    "3-23": ["World Book and Copyright Day 📖 (UNESCO)", "World Laboratory Day 🔬"],
    "3-24": ["World Immunization Week begins 💉"],
    "3-25": ["World Malaria Day 🦟"],
    "3-26": ["World Intellectual Property Day 💡"],
    "3-28": ["World Day for Safety and Health at Work 🦺"],
    "3-30": ["International Jazz Day 🎷"],

    // ── MAY ──────────────────────────────────
    "4-1":  ["International Labour Day 👷", "Maharashtra Day 🇮🇳"],
    "4-3":  ["World Press Freedom Day 📰"],
    "4-4":  ["Star Wars Day 🌌 — May the 4th be with you!", "World Firefighters Day 🔥"],
    "4-5":  ["World Laughter Day 😂 (1st Sun of May)"],
    "4-7":  ["World Athletics Day 🏃"],
    "4-8":  ["World Red Cross Day ❤️", "World Thalassaemia Day 🩸"],
    "4-9":  ["Europe Day 🇪🇺"],
    "4-11": ["National Technology Day 💻 (India)"],
    "4-12": ["International Nurses Day 👩‍⚕️", "World Migratory Bird Day 🐦"],
    "4-15": ["International Day of Families 👨‍👩‍👧", "Buddha Jayanti 🕊️"],
    "4-17": ["World Telecommunication Day 📡", "World Hypertension Day 💊"],
    "4-18": ["International Museum Day 🏛️"],
    "4-20": ["World Bee Day 🐝"],
    "4-21": ["World Day for Cultural Diversity 🌍"],
    "4-22": ["International Day for Biological Diversity 🌿", "World Turtle Day 🐢"],
    "4-24": ["Commonwealth Day 🌐"],
    "4-25": ["Africa Day (May 25) 🌍", "Geek Pride Day 🤓"],
    "4-28": ["World Hunger Day 🍚"],
    "4-29": ["International Day of UN Peacekeepers 🕊️"],
    "4-31": ["World No Tobacco Day 🚭"],

    // ── JUNE ─────────────────────────────────
    "5-1":  ["World Milk Day 🥛", "International Children's Day 🧒"],
    "5-3":  ["World Bicycle Day 🚲"],
    "5-4":  ["International Day of Innocent Children Victims of Aggression 🕊️"],
    "5-5":  ["World Environment Day 🌿"],
    "5-7":  ["World Food Safety Day 🍽️"],
    "5-8":  ["World Oceans Day 🌊"],
    "5-12": ["World Day Against Child Labour ❌👶"],
    "5-13": ["International Albinism Awareness Day 🌤️"],
    "5-14": ["World Blood Donor Day 🩸"],
    "5-15": ["World Elder Abuse Awareness Day 👴"],
    "5-17": ["World Day to Combat Desertification 🏜️"],
    "5-20": ["World Refugee Day 🌍"],
    "5-21": ["International Yoga Day 🧘 (June 21)", "World Music Day 🎵 (Fête de la Musique)", "Summer Solstice ☀️"],
    "5-23": ["United Nations Public Service Day 🏛️", "International Olympic Day 🏅"],
    "5-25": ["Day of the Seafarer ⚓"],
    "5-26": ["International Day against Drug Abuse and Illicit Trafficking 🚫💊"],

    // ── JULY ─────────────────────────────────
    "6-1":  ["National Doctors' Day 👨‍⚕️ (India)", "Canada Day 🇨🇦"],
    "6-6":  ["World Zoonoses Day 🦠"],
    "6-7":  ["World Chocolate Day 🍫"],
    "6-11": ["World Population Day 🌐"],
    "6-14": ["Bastille Day 🇫🇷"],
    "6-15": ["World Youth Skills Day 🛠️"],
    "6-17": ["World Emoji Day 😂 (actually July 17 📅)"],
    "6-18": ["Nelson Mandela International Day 🕊️"],
    "6-20": ["International Moon Day 🌕", "International Chess Day ♟️"],
    "6-22": ["Pi Approximation Day 🥧 (22/7 ≈ 3.1428...)"],
    "6-24": ["International Self-Care Day 🛁"],
    "6-28": ["World Hepatitis Day 🫀"],
    "6-29": ["International Tiger Day 🐯"],
    "6-30": ["International Day of Friendship 🤝"],

    // ── AUGUST ───────────────────────────────
    "7-1":  ["World Lung Day 🫁", "Friendship Day 👫 (1st Sunday of August)"],
    "7-6":  ["Hiroshima Day 🕊️"],
    "7-9":  ["Nagasaki Day 🕊️", "International Day of World's Indigenous People 🌿"],
    "7-12": ["International Youth Day 🧑", "World Elephant Day 🐘"],
    "7-13": ["International Left-Handers Day 🖐️", "World Robotics Day 🤖"],
    "7-15": ["India's Independence Day 🇮🇳"],
    "7-16": ["National Handloom Day 🧵 (India)"],
    "7-19": ["World Photography Day 📷", "World Humanitarian Day 🤝"],
    "7-20": ["World Mosquito Day 🦟", "World Senior Citizens Day 👴"],
    "7-23": ["International Day for the Remembrance of the Slave Trade ⛓️"],
    "7-26": ["Women's Equality Day 🙋"],
    "7-29": ["National Sports Day 🏅 (India) — Dhyan Chand's birthday", "International Day against Nuclear Tests ☢️"],

    // ── SEPTEMBER ────────────────────────────
    "8-2":  ["World Coconut Day 🥥"],
    "8-4":  ["Cosmo Beloved Birthday♥️💔🥹"],
    "8-5":  ["Teacher's Day 🍎 (India — Dr. Sarvepalli Radhakrishnan)", "International Day of Charity 💝"],
    "8-7":  ["World Beard Day 🧔"],
    "8-8":  ["International Literacy Day 📚"],
    "8-10": ["World Suicide Prevention Day 💛"],
    "8-11": ["Patriot Day (USA) 🇺🇸"],
    "8-13": ["International Programmers' Day 💻 (256th day of year)"],
    "8-15": ["International Day of Democracy 🗳️"],
    "8-16": ["International Day for the Preservation of the Ozone Layer 🌍"],
    "8-21": ["International Day of Peace ☮️", "World Alzheimer's Day 🧠"],
    "8-22": ["World Rhino Day 🦏"],
    "8-23": ["International Day of Sign Languages 🤟", "Autumn Equinox 🍂"],
    "8-26": ["International Day of Clean Air for Blue Skies 🌤️"],
    "8-27": ["World Tourism Day ✈️"],
    "8-28": ["World Rabies Day 🐾"],
    "8-29": ["World Heart Day ❤️"],
    "8-30": ["International Translation Day 📄"],

    // ── OCTOBER ──────────────────────────────
    "9-1":  ["International Day of Older Persons 👴", "World Vegetarian Day 🥦"],
    "9-2":  ["Gandhi Jayanti 🕊️ (India)", "International Day of Non-Violence ☮️", "World Habitat Day 🏠"],
    "9-4":  ["World Animal Day 🐾"],
    "9-5":  ["World Teachers' Day 🌍🍎"],
    "9-8":  ["World Egg Day 🥚 (2nd Friday of October)"],
    "9-10": ["World Mental Health Day 💚"],
    "9-11": ["International Day of the Girl Child 👧"],
    "9-13": ["International Day for Disaster Risk Reduction 🌊"],
    "9-15": ["World Students' Day 🎓 (India — APJ Abdul Kalam's birthday)", "Global Handwashing Day 🙌"],
    "9-16": ["World Food Day 🌾"],
    "9-17": ["International Day for the Eradication of Poverty 💸"],
    "9-20": ["World Statistics Day 📊"],
    "9-22": ["World Iodine Deficiency Day 🧪"],
    "9-24": ["United Nations Day 🇺🇳", "World Polio Day 💉", "Dashain 🪔 (2026)"],
    "9-25": ["World Pasta Day 🍝"],
    "9-28": ["International Animation Day 🎬", "World Psoriasis Day 🎗️"],
    "9-29": ["World Stroke Day 🧠"],
    "9-31": ["Halloween 🎃", "World Cities Day 🏙️", "Creator Birthday 🥳💥"],

    // ── NOVEMBER ─────────────────────────────
    "10-1": ["World Vegan Day 🌱", "Cosmo Rising Day 💫 — Start of End 💥🔥"],
    "10-2": ["All Souls' Day 🕯️"],
    "10-4": ["Tihar 🪔 (Festival of Lights, Nepal 2026)", "International Day for Tolerance 🌍"],
    "10-5": ["World Tsunami Awareness Day 🌊"],
    "10-7": ["World Science Day for Peace 🔬"],
    "10-8": ["World Radiography Day 🩻", "STEM Day 🔭"],
    "10-9": ["World Freedom Day 🗽", "Legal Services Day 🇮🇳"],
    "10-11": ["Remembrance Day 🎖️ (Commonwealth)", "Veterans Day 🇺🇸"],
    "10-12": ["World Pneumonia Day 🫁"],
    "10-13": ["World Kindness Day 🤗💛"],
    "10-14": ["World Diabetes Day 💉", "Children's Day 🇮🇳 (Nehru's Birthday)"],
    "10-16": ["International Day for Tolerance 🌈"],
    "10-17": ["International Students' Day 🎓"],
    "10-19": ["International Men's Day 🙋 (November 19)", "World Toilet Day 🚽"],
    "10-20": ["World Children's Day 🌍 (UN)"],
    "10-21": ["World Television Day 📺", "World Fisheries Day 🐟"],
    "10-30": ["Computer Security Day 🔐 (Nov 30)"],

    // ── DECEMBER ─────────────────────────────
    "11-1": ["World AIDS Day 🎗️", "World Computer Literacy Day 💻"],
    "11-1": ["Cosmo Birthday🗿🔥","Birthday of the Creator🔥🗿"],
    "11-2": ["International Day for the Abolition of Slavery ✊"],
    "11-3": ["International Day of Persons with Disabilities ♿"],
    "11-4": ["International Wildlife Conservation Day 🐆"],
    "11-5": ["World Soil Day 🌱", "International Volunteer Day 🙋"],
    "11-7": ["International Civil Aviation Day ✈️"],
    "11-9": ["International Anti-Corruption Day 🚫"],
    "11-10": ["Human Rights Day 🕊️"],
    "11-11": ["International Mountain Day ⛰️", "UNICEF Day 👶"],
    "11-14": ["World Energy Conservation Day 💡 (India)"],
    "11-18": ["International Migrants Day 🌍"],
    "11-20": ["International Human Solidarity Day 🤝"],
    "11-21": ["World Meditation Day 🧘", "Winter Solstice ❄️"],
    "11-22": ["National Mathematics Day 🔢 (India — Ramanujan's birthday)"],
    "11-25": ["Christmas Day 🎄"],
    "11-26": ["Boxing Day 🎁"],
    "11-31": ["New Year's Eve 🎆 — Tomorrow begins a new chapter!"],
};

// ─────────────────────────────────────────────
//  YEAR-SPECIFIC EVENTS  (change date each year)
//  Key: "year-month(0-based)-day"
// ─────────────────────────────────────────────
const YEAR_EVENTS = {
    // ── 2026 specific ─────────────────────────
    "2026-2-3":  ["Holi 2026 🎨 — Festival of Colors"],
    "2026-3-5":  ["Easter Sunday 2026 🐣"],
    "2026-6-20": ["Eid al-Adha 2026 🌙 (approx)"],
    "2026-9-16": ["Dashain Ghatasthapana 2026 🇳🇵"],

    // ── 2025 specific ─────────────────────────
    "2025-2-14": ["Holi 2025 🎨 — Festival of Colors"],
    "2025-3-20": ["Good Friday 2025 ✝️"],

    // ── 2024 specific ─────────────────────────
    "2024-2-24": ["Holi 2024 🎨 — Festival of Colors"],
};

// ─────────────────────────────────────────────
//  CORE LOGIC
// ─────────────────────────────────────────────

/**
 * Returns an array of event strings for a given date.
 * Merges fixed annual events + year-specific events.
 */
function getAllEvents(day, month, year) {
    const fixedKey = `${month}-${day}`;
    const yearKey  = `${year}-${month}-${day}`;

    const fixed      = FIXED_EVENTS[fixedKey] || [];
    const yearBound  = YEAR_EVENTS[yearKey]   || [];

    return [...yearBound, ...fixed];
}

/**
 * Validates day value against the actual days in that month/year.
 */
function isValidDay(day, month, year) {
    if (isNaN(day) || day < 1) return false;
    // Date overflow check: if new Date wraps to next month, day was invalid
    const testDate = new Date(year, month, day);
    return testDate.getMonth() === month;
}

// ─────────────────────────────────────────────
//  UI LOGIC
// ─────────────────────────────────────────────

const WEEKDAYS    = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MONTH_NAMES = ["January","February","March","April","May","June",
                     "July","August","September","October","November","December"];

function showError(message) {
    resultDiv.innerHTML = `<div class="error-box">⚠️ ${message}</div>`;
    // Shake the problematic input
    dayInput.classList.remove("shake");
    void dayInput.offsetWidth; // reflow to restart animation
    dayInput.classList.add("shake");
    setTimeout(() => dayInput.classList.remove("shake"), 500);
}

function findDay() {
    const day   = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year  = parseInt(yearInput.value);

    // ── Validation ────────────────────────────
    if (isNaN(year) || year < 1000 || year > 9999) {
        showError("Please enter a valid year (1000–9999)");
        yearInput.focus();
        return;
    }

    if (!isValidDay(day, month, year)) {
        const maxDay = new Date(year, month + 1, 0).getDate();
        showError(`${MONTH_NAMES[month]} ${year} only has ${maxDay} days`);
        dayInput.focus();
        return;
    }

    // ── Compute ───────────────────────────────
    const date    = new Date(year, month, day);
    const weekday = WEEKDAYS[date.getDay()];
    const events  = getAllEvents(day, month, year);

    // ── Render ────────────────────────────────
    const eventsHTML = events.length > 0
        ? `<div class="events-list">
               ${events.map((ev, i) =>
                   `<div class="event-badge ${i === 0 ? 'primary' : ''}">${ev}</div>`
               ).join('')}
           </div>`
        : `<p class="no-event">No global observance recorded for this date.</p>`;

    resultDiv.innerHTML = `
        <div class="result-box">
            <div class="result-date">${MONTH_NAMES[month]} ${day}, ${year}</div>
            <div class="result-weekday">${weekday}</div>
            ${eventsHTML}
        </div>
    `;
}

// ── Event listeners ───────────────────────────
findBtn.addEventListener("click", findDay);
[dayInput, monthInput, yearInput].forEach(el => {
    el.addEventListener("keydown", e => { if (e.key === "Enter") findDay(); });
});

// ── Set year to current on load ───────────────
yearInput.value = new Date().getFullYear();