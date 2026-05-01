// Variables

const quote = document.querySelector(".quote");
const name = document.querySelector(".name");
const mainQuote = document.querySelector(".main-quote");
const button = document.querySelector(".btn");

// Love Quotes Array
const quotes = [
  {
    name: "My Baby",
    quote: "I loved you yesterday, love you still, always have, always will.",
  },

  {
    name: "My Jewel",
    quote:
      "Thinking of you keeps me awake, dreaming of you keeps me asleep, being with you keeps me alive. I genuinely love you.",
  },

  {
    name: "Ife mi",
    quote:
      "This is a meaningful relationship, and not just romantic bonds. You deserve every beautiful things of life.",
  },

  {
    name: "Ololufe mi",
    quote:
      "You deserve my love, care and affection, much more than anybody in the entire universe.",
  },

  {
    name: "My Sweetheart",
    quote:
      "Love is a juice with many tastes, but mine is sweet, because you make it so.",
  },

  {
    name: "Baby Girl 4L",
    quote:
      "The best thing to hold onto in life is you, and I genuinely mean it.",
  },

  {
    name: "My Darling",
    quote: `If I had to choose between breathing or loving you, I would say ‘I love you’ with my last breath.`,
  },

  {
    name: "My Babe",
    quote: `Believe me, you are the strongest person I know, and I admire your brilliance and intelligence so much.`,
  },

  {
    name: "My Love",
    quote: `I’m so amazed by you everyday. I really cannot wait to do life with you.`,
  },

  {
    name: "My Heartbeat",
    quote: `I love to brag about you everyday. because you taught me what true love is, and I’m grateful.`,
  },

  {
    name: "My Superstar",
    quote: `By your side is my favorite place to be.
Again, through good times and bad, I will always love and support you.`,
  },
];

function randomWords(e) {
  e.preventDefault();

  let manyQuotes = Math.floor(Math.random() * quotes.length);
  name.textContent = quotes[manyQuotes].name;
  quote.textContent = quotes[manyQuotes].quote;
}

button.addEventListener("click", randomWords);
