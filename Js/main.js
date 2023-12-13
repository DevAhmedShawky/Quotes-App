let btn = document.querySelector("#btn");
let result = document.querySelector("#result");
let randomNumber = 0;
let show = 0;

let quotes = [
  {
    userQuotes: "Be yourself; everyone else is already taken.",
    quoteOwner: "Oscar Wilde",
  },
  {
    userQuotes:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    quoteOwner: "Albert Einstein",
  },
  {
    userQuotes: "So many books, so little time.",
    quoteOwner: "Frank Zappa",
  },
  {
    userQuotes:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    quoteOwner: "Bernard M. Baruch",
  },
  {
    userQuotes:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    quoteOwner: "Dr. Seuss",
  },
];

function randomQuote() {
  do {
    show = Math.floor(Math.random() * quotes.length);
  } while (randomNumber == show);
  randomNumber = show;
  return show;
}

function showQuotes() {
  let variable = randomQuote();
  result.innerHTML = `<q class= "text-white fs-3">${quotes[variable].userQuotes}</q><p class="owner-quote fs-3">--${quotes[variable].quoteOwner}</p>`;
  result.style.backgroundColor = "#0000002b";
}

btn.addEventListener("click", showQuotes);
