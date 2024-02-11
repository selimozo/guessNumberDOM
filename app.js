// selimozo

const jsConfetti = new JSConfetti()


const colors = ["#2193b0", "#753a88", "#8B4000", "#42275a", "#2c3e50"];
const getColor = () => colors[Math.floor(Math.random() * colors.length)];

let randomNumber = Math.ceil(Math.random() * 100);
let msg = document.querySelector(".msg");

let score = 10;
let topScore = 0;
// when u press check button.

document.querySelector(".check").addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;

  if (guess > 100 || guess <= 0) {
    msg.textContent = "make guess between 1-100!";
  }
  // if number correct
  else if (guess == randomNumber) {
    msg.textContent = "Congrats!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number-box").textContent = randomNumber;
    document.querySelector(".check").classList.add("check-none");
    document.querySelector(".guess").classList.add("check-none");
    document.querySelector("main").classList.add("align-center");
    document.querySelector(".shortcuts").classList.add("check-none");
    jsConfetti.addConfetti()
    document.querySelector(".again").classList.add("finitoa");
    // check topScore
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }
  }
  // if guess is not correct
  else {
    // u can guess if u are bigger than 1

    if (score > 1) {
      // you're losing your scores
      score--;
      document.querySelector(".score").textContent = score;

      guess < randomNumber
        ? (msg.textContent = "Increase 👆")
        : (msg.textContent = "Decrease 👇");
    } else {
      // you lost.
      msg.textContent = `You LOST! The number was ${randomNumber}.`;
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".check").classList.add("check-none");
      document.querySelector(".guess").classList.add("check-none");
      document.querySelector(".shortcuts").classList.add("check-none");
      document.querySelector("main").classList.add("align-center");
      document.querySelector(".number-box").textContent = randomNumber;
      document.querySelector(".msg").classList.add("finito");
      document.querySelector(".again").classList.add("finitoa");
      
    }
  }
});

document.querySelector(".check").addEventListener("click", () => {
  document.querySelector(".guess").value = ""
  document.querySelector(".guess").focus();
})


// when u press again button. reset the game but save the topscore.

document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor = getColor();
  document.querySelector(".check").classList.remove("check-none");
  randomNumber = Math.ceil(Math.random() * 100);
  score = 10;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number-box").textContent = "=?";
  document.querySelector(".guess").value = "";
  document.querySelector(".msg").textContent = "Game Starts! (1-100)";
  document.querySelector(".guess").classList.remove("check-none");
  document.querySelector("main").classList.remove("align-center");
  document.querySelector(".shortcuts").classList.remove("check-none");
  document.querySelector(".guess").focus();
  document.querySelector(".again").classList.remove("finitoa");

};

// focus on input
window.addEventListener("load", () => {
  document.querySelector(".guess").focus();
  // it does when window load you are gonna focus on input.
});

// shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    // when u press enter trigger check button
    document.querySelector(".check").click();
  }
});

document.addEventListener("keydown", (r) => {
  if (r.code === "KeyR") {
    document.querySelector(".again").click();
  }
});

// html sanitizer
var html;

//run with default settings
html = HtmlSanitizer.SanitizeHtml(
  "<div><scrip>alert('xss!');</sc" + "ript></div>"
); //returns "<div></div>";
html = HtmlSanitizer.SanitizeHtml("<a onclick=\"alert('xss')\"></a>"); //returns "<a></a>";
html = HtmlSanitizer.SanitizeHtml("<a href=\"javascript:alert('xss')\"></a>"); //returns "<a></a>";
