const diceButton = document.querySelector(".dice");

const id = document.querySelector("#slip_id");
const adviceText = document.querySelector("#slip_advice");

const fetchAdviceFunc = async () => {
  // const slip_id = Math.floor(Math.random() * 100 + Math.random() * 100); 
  //For Firefox browser add ${slip_id} to API_ENDPOINT because the api link doesn't gives us the random advice everytime we click 
  // It gives us the same advice every time we click in firefox.

  //Solution 
  // The browser by default looks for a matching request in its HTTP cache. If there is a match and it is fresh, it will be returned from the cache- so it takes the previous advice. You can read more in this article on mdn https://developer.mozilla.org/en-US/docs/Web/API/Request/cache You can resolve it by adding {cache: no-cache} just after the URL address like below: const res = await fetch(API_ENDPOINT, {cache: no-cache});
  
  const API_ENDPOINT = `https://api.adviceslip.com/advice`;
  const res = await fetch(API_ENDPOINT, {cache:"no-cache"});
  const data = await res.json();
  // console.log(data);
  id.textContent = data.slip.id;
  adviceText.textContent = data.slip.advice;
};
diceButton.addEventListener("click", fetchAdviceFunc);
