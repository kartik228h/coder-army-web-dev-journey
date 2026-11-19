
const zodiacSigns = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
    "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
];

// Size 40
const Compliments = [
    "You have a magical way of making people smile.",
    "Your dreams are worth chasing.",
    "You have an extraordinary imagination.",
    "Your energy makes everything more enjoyable.",
    "You are a beautiful combination of strength and kindness.",
    "You have a gift for making people feel comfortable.",
    "Your thoughts are as beautiful as your heart.",
    "You are someone people can count on.",
    "Your dedication is something to admire.",
    "You have an amazing ability to learn and grow.",
    "You make a positive impact without even realizing it.",
    "Your individuality makes you special.",
    "You have a natural charm.",
    "You deserve all the wonderful opportunities coming your way.",
    "Your honesty is a valuable quality.",
    "You have a soul full of beautiful dreams.",
    "Your laughter is truly contagious.",
    "You are brave enough to be yourself.",
    "You have a wonderful perspective on life.",
    "Your efforts never go unnoticed.",
    "You make the people around you feel appreciated.",
    "You have an incredible inner strength.",
    "Your enthusiasm is inspiring.",
    "You are full of possibilities.",
    "You have a beautiful balance of intelligence and kindness.",
    "Your presence brings comfort to others.",
    "You have the courage to try new things.",
    "You are worthy of respect and appreciation.",
    "Your creativity has no limits.",
    "You have a talent for finding beauty in little things.",
    "You are a blessing to the people who know you.",
    "Your determination can take you far.",
    "You have a genuinely wonderful personality.",
    "You make a difference just by being yourself.",
    "Your future holds countless possibilities.",
    "You are more capable than your doubts suggest.",
    "Your kindness is a strength, never a weakness.",
    "You deserve to celebrate your little victories.",
    "You have something special that nobody else can replace.",
    "Never underestimate how wonderful you are."
];

// Size 20
const emotionalCompliments = [
    "You always do good for others, even when nobody notices your efforts.",
    "You have a heart that forgives people who never apologize.",
    "You are always there for everyone, but rarely do people ask if you are okay.",
    "You give people happiness even when you are fighting your own battles.",
    "You deserve the same love that you keep giving to others.",
    "You understand everyone's pain, but very few understand yours.",
    "You never stop caring, even after people disappoint you.",
    "You always put others first, even when you need someone by your side.",
    "Your silence hides stories that words could never explain.",
    "You make everyone feel special, but sometimes forget that you are special too.",
    "You have been strong for so many people that they forget you need support too.",
    "You give second chances because your heart believes in people.",
    "You never expect much, yet you deserve so much more.",
    "You keep smiling even when life doesn't go as planned.",
    "You are the person everyone remembers when they need help, but forgets to check on.",
    "Your kindness is something this world needs more of.",
    "You carry so much in your heart and still make room for others.",
    "You deserve someone who notices the little things you do.",
    "You often hide your feelings just to avoid worrying others.",
    "One day, someone will appreciate all the little things you do without being asked."
];

// Size 30
const lifeRecommendations = [
    "Feed a hungry street dog and make its day a little better.",
    "Plant a tree and take care of it as it grows.",
    "Help someone who is struggling without expecting anything in return.",
    "Donate clothes that you no longer use to someone in need.",
    "Spend quality time with your parents and tell them how much they mean to you.",
    "Give food or water to someone who needs it.",
    "Start your day with gratitude and appreciate the little things in life.",
    "Learn a new skill that makes you a better version of yourself.",
    "Visit an orphanage and spend some meaningful time with children.",
    "Be kind to animals and treat them with love.",
    "Call an old friend and ask how they are doing.",
    "Help an elderly person with their daily tasks.",
    "Read a few pages of a good book every day.",
    "Take a break from social media and spend time with yourself.",
    "Appreciate someone who works hard but rarely receives recognition.",
    "Forgive someone and free yourself from unnecessary negativity.",
    "Keep a water bowl outside for birds during hot days.",
    "Volunteer for a local community service activity.",
    "Learn to say no when something affects your peace.",
    "Support a small local business.",
    "Spend some time enjoying nature without your phone.",
    "Make someone smile with a genuine compliment.",
    "Donate books and stationery to children who need them.",
    "Practice patience, especially when things don't go your way.",
    "Start saving a little money for your future.",
    "Clean your surroundings and encourage others to do the same.",
    "Listen carefully when someone wants to share their feelings.",
    "Try something new that helps you overcome your fears safely.",
    "Celebrate someone else's success without comparing it to yours.",
    "Do one good deed every day, even if nobody notices."
];

// Size 20
const futurePredictions = [
    "You have the potential to become a crorepati one day. Keep working towards your dreams.",
    "A wonderful career opportunity may come your way soon.",
    "Your hard work will open doors to unexpected success.",
    "You may achieve something that your younger self once dreamed of.",
    "Financial growth could become an important part of your future.",
    "Someone special may enter your life and bring beautiful memories.",
    "Your talents may take you to places you never imagined.",
    "A big achievement could be waiting for you in the coming years.",
    "Your patience and dedication may reward you with great success.",
    "You might travel to a place you have always wanted to visit.",
    "An unexpected opportunity could change your career direction.",
    "Your creative ideas may turn into something successful.",
    "You may build a life filled with comfort, happiness and independence.",
    "A new friendship could become one of the most meaningful connections in your life.",
    "Your future may bring opportunities to make your family proud.",
    "You could become an inspiration for people around you.",
    "A bold decision may lead you towards an exciting new chapter.",
    "You may discover a hidden talent that changes your perspective on life.",
    "Your financial discipline today could create a prosperous tomorrow.",
    "One day, you may look back and feel proud of how far you have come."
];

// Form selection
const form = document.getElementById("astroForm");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    // Getting user details
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();

    const day = Number(document.getElementById("day").value);
    const month = Number(document.getElementById("month").value);
    const year = Number(document.getElementById("year").value);

    const resultDiv = document.getElementById("result");

    // Validate actual date
    const date = new Date(year, month - 1, day);

    if (
        date.getFullYear() !== year ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day
    ) {
        resultDiv.innerHTML = "<p>Please enter a valid date of birth.</p>";
        return;
    }

    // First message
    const first_message =
        `Hello ${name} ${surname}, your date of birth is ${day}-${month}-${year}.`;

    // Zodiac calculation
    const zodiacDates = [
        [20, "Capricorn", "Aquarius"],
        [19, "Aquarius", "Pisces"],
        [20, "Pisces", "Aries"],
        [20, "Aries", "Taurus"],
        [21, "Taurus", "Gemini"],
        [21, "Gemini", "Cancer"],
        [22, "Cancer", "Leo"],
        [22, "Leo", "Virgo"],
        [21, "Virgo", "Libra"],
        [22, "Libra", "Scorpio"],
        [21, "Scorpio", "Sagittarius"],
        [21, "Sagittarius", "Capricorn"]
    ];
    const zodiac = day <= zodiacDates[month - 1][0]
        ? zodiacDates[month - 1][1]
        : zodiacDates[month - 1][2];
    const second_message = `Your zodiac sign is ${zodiac}.`;
    // Compliment based on birth date
    const third_message = Compliments[(day - 1) % Compliments.length];
    // Random life recommendation
    let index = Math.floor(Math.random() * lifeRecommendations.length);
    const fourth_message =
        `Life Recommendation: ${lifeRecommendations[index]}`;
    // Future prediction based on name and birth year
    index = (name.length * surname.length * year) % futurePredictions.length;
    const fifth_message =
        `Future Prediction: ${futurePredictions[index]}`;
    // Emotional compliment based on DOB
    index = (day * month * year) % emotionalCompliments.length;
    const sixth_message =
        `Emotional Compliment: ${emotionalCompliments[index]}`;
    // Display all messages
    resultDiv.innerHTML = `
        <h3>${first_message}</h3>
        <p>${second_message}</p>
        <p>${third_message}</p>
        <p>${fourth_message}</p>
        <p>${fifth_message}</p>
        <p>${sixth_message}</p>
    `;
});
