const zodiacSigns = [
  {name:"Aries",symbol:"♈",start:[3,21],end:[4,19],dates:"Mar 21 – Apr 19",element:"Fire",planet:"Mars",colour:"Coral",day:"Tuesday",description:"You bring a bold, lively energy to the things that matter to you. Aries is often associated with initiative, courage and a willingness to begin before every detail is perfect. Your reminder: pause long enough to choose your direction, then give it your full energy.",reflection:"You don't need to have every answer before taking your next thoughtful step."},
  {name:"Taurus",symbol:"♉",start:[4,20],end:[5,20],dates:"Apr 20 – May 20",element:"Earth",planet:"Venus",colour:"Forest green",day:"Friday",description:"Taurus is associated with patience, loyalty and an appreciation for life's simple comforts. You may value steady progress and meaningful connections. Your reminder: flexibility can be a strength, too.",reflection:"Small, consistent steps can create something beautiful over time."},
  {name:"Gemini",symbol:"♊",start:[5,21],end:[6,20],dates:"May 21 – Jun 20",element:"Air",planet:"Mercury",colour:"Yellow",day:"Wednesday",description:"Curiosity is at the heart of Gemini symbolism. This sign is linked with communication, adaptability and a lively interest in new ideas. Your reminder: give your attention to the conversations and projects that truly energise you.",reflection:"Stay curious, but give your best ideas the space to grow."},
  {name:"Cancer",symbol:"♋",start:[6,21],end:[7,22],dates:"Jun 21 – Jul 22",element:"Water",planet:"Moon",colour:"Silver",day:"Monday",description:"Cancer is traditionally connected with care, intuition and a strong sense of belonging. You may find meaning in creating a comfortable space for yourself and others. Your reminder: your own needs deserve kindness as well.",reflection:"Offering yourself the same care you give others is worthwhile."},
  {name:"Leo",symbol:"♌",start:[7,23],end:[8,22],dates:"Jul 23 – Aug 22",element:"Fire",planet:"Sun",colour:"Gold",day:"Sunday",description:"Leo is associated with warmth, creativity and generous self-expression. This sign celebrates the courage to share what makes you unique. Your reminder: confidence grows when you let your actions speak with sincerity.",reflection:"Let your creativity be seen, even before it feels perfect."},
  {name:"Virgo",symbol:"♍",start:[8,23],end:[9,22],dates:"Aug 23 – Sep 22",element:"Earth",planet:"Mercury",colour:"Navy blue",day:"Wednesday",description:"Virgo symbolism highlights thoughtfulness, practical problem-solving and attention to detail. You may enjoy making things clearer and more organised. Your reminder: progress matters more than perfection.",reflection:"A good plan should support you, not make you feel trapped by it."},
  {name:"Libra",symbol:"♎",start:[9,23],end:[10,22],dates:"Sep 23 – Oct 22",element:"Air",planet:"Venus",colour:"Pastel pink",day:"Friday",description:"Libra is linked with harmony, fairness and an appreciation for beauty. This sign invites you to consider different perspectives while staying connected to your own values. Your reminder: balance includes being honest about what you want.",reflection:"Peace is meaningful when it makes room for your own voice, too."},
  {name:"Scorpio",symbol:"♏",start:[10,23],end:[11,21],dates:"Oct 23 – Nov 21",element:"Water",planet:"Pluto",colour:"Burgundy",day:"Tuesday",description:"Scorpio is associated with depth, determination and a desire to understand what lies beneath the surface. This sign symbolises focus and personal transformation. Your reminder: not every answer needs to arrive all at once.",reflection:"Give yourself time to understand what matters most to you."},
  {name:"Sagittarius",symbol:"♐",start:[11,22],end:[12,21],dates:"Nov 22 – Dec 21",element:"Fire",planet:"Jupiter",colour:"Purple",day:"Thursday",description:"Sagittarius is linked with exploration, optimism and a love of learning. This sign encourages you to keep an open mind and seek fresh perspectives. Your reminder: adventure can begin with one new question.",reflection:"Let curiosity guide you, while keeping your feet on the ground."},
  {name:"Capricorn",symbol:"♑",start:[12,22],end:[1,19],dates:"Dec 22 – Jan 19",element:"Earth",planet:"Saturn",colour:"Charcoal",day:"Saturday",description:"Capricorn is traditionally associated with responsibility, ambition and patient effort. This sign celebrates building something meaningful over time. Your reminder: rest and celebration are part of sustainable progress.",reflection:"You are allowed to appreciate how far you've already come."},
  {name:"Aquarius",symbol:"♒",start:[1,20],end:[2,18],dates:"Jan 20 – Feb 18",element:"Air",planet:"Uranus",colour:"Electric blue",day:"Saturday",description:"Aquarius is associated with originality, independent thinking and community-minded ideas. This sign invites you to imagine different possibilities. Your reminder: a fresh perspective becomes powerful when you put it into practice.",reflection:"Your different point of view can be useful—give it a thoughtful outlet."},
  {name:"Pisces",symbol:"♓",start:[2,19],end:[3,20],dates:"Feb 19 – Mar 20",element:"Water",planet:"Neptune",colour:"Sea green",day:"Thursday",description:"Pisces symbolism is connected with imagination, compassion and sensitivity to the world around you. This sign celebrates creativity and empathy. Your reminder: clear boundaries can help you protect the energy you share.",reflection:"Make room for imagination, and remember to care for yourself along the way."}
];

const dailyMessages = [
  "A small change in routine may help you see a familiar task differently. Stay open to a useful new approach.",
  "Make space for a conversation that matters. Listening carefully can be just as valuable as finding the perfect words.",
  "Focus on one thing you can complete today. A little progress can make the next step feel clearer.",
  "Give yourself permission to slow down and notice what is working. You don't have to rush every decision.",
  "A creative idea deserves a little attention. Write it down and explore it without judging it too quickly.",
  "Choose connection over assumption. A thoughtful question may bring more clarity than guessing."
];

const daySelect = document.getElementById("birth-day");
for (let day = 1; day <= 31; day++) {
  const option = document.createElement("option");
  option.value = day;
  option.textContent = day;
  daySelect.appendChild(option);
}
document.getElementById("birth-year").max = new Date().getFullYear();

function getZodiac(day, month) {
  return zodiacSigns.find(sign => {
    const [sm, sd] = sign.start;
    const [em, ed] = sign.end;
    if (sm > em) return (month === sm && day >= sd) || (month === em && day <= ed);
    return (month === sm && day >= sd) || (month === em && day <= ed) ||
      (month > sm && month < em);
  });
}

function renderZodiacCards() {
  const grid = document.getElementById("zodiac-grid");
  grid.innerHTML = zodiacSigns.map(sign => `
    <article class="zodiac-card" tabindex="0" role="button" aria-label="Select ${sign.name} for daily insight" data-sign="${sign.name}">
      <div class="zodiac-symbol">${sign.symbol}</div>
      <div class="zodiac-name">${sign.name}</div>
      <div class="zodiac-date">${sign.dates}</div>
      <div class="zodiac-element">${sign.element.toUpperCase()} ELEMENT</div>
    </article>`).join("");
  grid.querySelectorAll(".zodiac-card").forEach(card => {
    const choose = () => {
      document.getElementById("daily-sign").value = card.dataset.sign;
      updateDaily();
      document.getElementById("daily").scrollIntoView({behavior:"smooth"});
    };
    card.addEventListener("click", choose);
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(); } });
  });
}

function renderDailySelect() {
  const select = document.getElementById("daily-sign");
  select.innerHTML = zodiacSigns.map(s => `<option value="${s.name}">${s.name}</option>`).join("");
  select.addEventListener("change", updateDaily);
  document.getElementById("today-label").textContent = new Intl.DateTimeFormat("en", {month:"short",day:"numeric",year:"numeric"}).format(new Date()).toUpperCase();
  updateDaily();
}
function updateDaily() {
  const sign = zodiacSigns.find(s => s.name === document.getElementById("daily-sign").value) || zodiacSigns[0];
  const index = zodiacSigns.indexOf(sign);
  document.getElementById("daily-symbol").textContent = sign.symbol;
  document.getElementById("daily-title").textContent = `${sign.name}: a moment to reflect`;
  document.getElementById("daily-text").textContent = dailyMessages[(index + new Date().getDate()) % dailyMessages.length];
}

function showError(message) {
  document.getElementById("form-error").textContent = message;
}
document.getElementById("birth-form").addEventListener("submit", event => {
  event.preventDefault();
  const first = document.getElementById("first-name").value.trim();
  const last = document.getElementById("last-name").value.trim();
  const day = Number(document.getElementById("birth-day").value);
  const month = Number(document.getElementById("birth-month").value);
  const year = Number(document.getElementById("birth-year").value);
  const error = document.getElementById("form-error");
  error.textContent = "";

  if (!first || !last || !day || !month || !year) return showError("Please complete all fields to continue.");
  const date = new Date(year, month - 1, day);
  if (year < 1900 || year > new Date().getFullYear() || date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return showError("Please enter a valid date of birth.");
  }

  const sign = getZodiac(day, month);
  document.getElementById("result-name").textContent = `${first} ${last}`.toUpperCase();
  document.getElementById("result-symbol").textContent = sign.symbol;
  document.getElementById("result-sign").textContent = sign.name;
  document.getElementById("result-date").textContent = `${sign.dates}  ·  Born ${day}/${month}/${year}`;
  document.getElementById("result-element").textContent = `${sign.element.toUpperCase()} SIGN`;
  document.getElementById("result-description").textContent = sign.description;
  document.getElementById("trait-element").textContent = sign.element;
  document.getElementById("trait-planet").textContent = sign.planet;
  document.getElementById("trait-colour").textContent = sign.colour;
  document.getElementById("trait-day").textContent = sign.day;
  document.getElementById("result-reflection").textContent = sign.reflection;
  const result = document.getElementById("result-card");
  result.hidden = false;
  result.scrollIntoView({behavior:"smooth",block:"center"});
});

document.getElementById("reset-result").addEventListener("click", () => {
  document.getElementById("birth-form").reset();
  document.getElementById("result-card").hidden = true;
  document.getElementById("form-error").textContent = "";
  document.getElementById("discover").scrollIntoView({behavior:"smooth"});
});

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => document.getElementById("nav-links").classList.remove("open")));
document.getElementById("year-now").textContent = new Date().getFullYear();

renderZodiacCards();
renderDailySelect();
