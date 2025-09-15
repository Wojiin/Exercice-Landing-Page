function myFunction() {
    let myTopNav = document.getElementById("myTopnav");
    if (myTopNav.className === "topnav") {
      myTopNav.className += " responsive";
    } else {
      myTopNav.className = "topnav";
    }
    let burger = document.getElementsByClassName("icon");
    if(burger.className === "icon"){
        burger.className+= "burger";
    } else{
        burger.className = "icon"
    }
  }