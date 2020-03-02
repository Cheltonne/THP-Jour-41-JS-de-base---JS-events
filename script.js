let footer = document.querySelector("footer");
let clickCount = 0
function logClick()
{
  clickCount++;
  console.log("clic numéro " + clickCount);
}
let hamburgerMenu = document.querySelector(".navbar-toggler");
function toggleHamburger()
{
  document.querySelector("#navbarHeader").classList.toggle("collapse");
}

let card1 = document.querySelector(".card");
let editBtn1 = document.getElementsByClassName("btn-outline-secondary")[0];
let editBtn2 = document.getElementsByClassName("btn-outline-secondary")[1];
function toggleRed()
{
  card1.style = "color: red";
}

let card2 = document.getElementsByClassName("card")[1];
function toggleGreen()
{
  if(card2.style.color  != "green")
  {
    card2.style = "color: green";
  }
  else if(card2.style.color === "green")
  {
    card2.style = "color: black";
  }
}

let navbar = document.querySelector("header")
function nuclear()
{
  if(document.styleSheets.item(0).disabled===true)
  {
    void(document.styleSheets.item(0).disabled=false);
  }
  else
  {
    void(document.styleSheets.item(0).disabled=true);
  }
}

footer.addEventListener("click", logClick);
hamburgerMenu.addEventListener("click", toggleHamburger);
editBtn1.addEventListener("click", toggleRed);
editBtn2.addEventListener("click", toggleGreen);
navbar.addEventListener("dblclick", nuclear);
console.log(navbar);
