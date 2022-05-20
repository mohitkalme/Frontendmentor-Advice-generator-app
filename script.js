const diceButton = document.querySelector(".dice");

const id = document.querySelector("#slip_id");
const adviceText = document.querySelector("#slip_advice");

const fetchAdviceFunc = async () => {
  // const slip_id = Math.floor(Math.random() * 100 + Math.random() * 100); 
  //For Firefox browser add ${slip_id} to API_ENDPOINT because the api link doesn't gives us the random advice everytime we click 
  // It gives us the same advice every time we click in firefox.
  const API_ENDPOINT = `https://api.adviceslip.com/advice`;
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();
  console.log(data);
  id.textContent = data.slip.id;
  adviceText.textContent = data.slip.advice;
};
diceButton.addEventListener("click", fetchAdviceFunc);
