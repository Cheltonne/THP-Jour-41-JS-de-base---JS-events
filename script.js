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


let viewBtn0 = document.getElementsByClassName("btn-success")[0];
let viewBtn1 = document.getElementsByClassName("btn-success")[1];
let viewBtn2 = document.getElementsByClassName("btn-success")[2];
let viewBtn3 = document.getElementsByClassName("btn-success")[3];
let viewBtn4 = document.getElementsByClassName("btn-success")[4];
let viewBtn5 = document.getElementsByClassName("btn-success")[5];

function minimize()
{
  for(let i = 0; i < 6; i++)
  {
    if(document.getElementsByClassName("card-img-top")[i].style.width != "20%")
    {
      document.getElementsByClassName("card-text")[i].style="display:none";
      document.getElementsByClassName("card-img-top")[i].style="width:20%";
    }
    else if(document.getElementsByClassName("card-text")[i].style.display === "none")
    {
      document.getElementsByClassName("card-text")[i].style="display:contents;";
      document.getElementsByClassName("card-img-top")[i].style="width:100%";
    }
  }
}


footer.addEventListener("click", logClick);
hamburgerMenu.addEventListener("click", toggleHamburger);
editBtn1.addEventListener("click", toggleRed);
editBtn2.addEventListener("click", toggleGreen);
navbar.addEventListener("dblclick", nuclear);
viewBtn0.addEventListener("mouseover", minimize);
viewBtn1.addEventListener("mouseover", minimize);
viewBtn2.addEventListener("mouseover", minimize);
viewBtn3.addEventListener("mouseover", minimize);
viewBtn4.addEventListener("mouseover", minimize);
viewBtn5.addEventListener("mouseover", minimize);