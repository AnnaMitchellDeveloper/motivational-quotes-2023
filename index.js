const button = document.querySelector(".btn");
const newQuote = document.querySelector(".par");

const differentQuotes = [
  "It does not matter how slowly you go as long as you do not stop. Confucius",
  "It always seems impossible until it's done. Nelson Mandela",
  "Education is the most powerful weapon which you can use to change the world. Nelson Mandela",
  "Life is 10% what happens to you and 90% how you react to it. Charles R. Swindoll",
  "Either you run the day or the day runs you. Jim Rohn",
  "If you fell down yesterday, stand up today. H. G. Wells",
  "The secret of getting ahead is getting started. Mark Twain",
  "Whenever you find yourself on the side of the majority, it is time to pause and reflect. Mark Twain",
];

button.addEventListener("click", function(){
	let randomeQuote = differentQuotes[Math.floor(Math.random() * differentQuotes.length)];
	newQuote.style.display = "block";
	newQuote.textContent = randomeQuote;
})
