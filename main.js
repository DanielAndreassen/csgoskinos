let gun1;
let gun2;

const btn1 = document.querySelector(".bottombutton1");
const btn2 = document.querySelector(".bottombutton2");

btn1.addEventListener("click", (e) => {
  gun1 = document.querySelectorAll(".maincontainer");
  console.log(gun1);
  return gun1;
});

btn2.addEventListener("click", (e) => {
  gun2 = document.querySelectorAll(".maincontainer");
  console.log(gun2);
  return gun2;
});

localStorage.setItem('gun_1', JSON.stringify(gun1));

localStorage.setItem('gun_1', JSON.stringify(gun2));
