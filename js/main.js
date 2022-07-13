//! Glabale Variables
let body = document.querySelector("body");
let dashTop = document.querySelector("div.top");
let p = document.querySelectorAll("p");
let toggle = document.querySelector("[title='toggle']");
let btn = document.querySelector("[title='toggle'] button");
let card = document.querySelectorAll(".card");

toggle.addEventListener("click", () => {
  //!Functio That Change The Theme
  if (btn.title == "dark") {
    // todo: Change To White Mode
    //! Slide The Btn And Change His Theme
    btn.style.transform = "translateX(20px)";
    btn.className = "white-btn-bg";
    btn.title = "white";
    //! Change The Toggle Theme
    toggle.className = "white-toggle-bg";
    //! Change The Body And His Theme
    body.className = "white-body-bg";
    //! Change The Dash Top Theme
    dashTop.className = "top white-body-top-bg";
    //! Change All The Card Theme
    card.forEach((ele) => (ele.className = "card white-card-bg"));
    //! Change All The P Theme
    p.forEach((ele) => {
      ele.className = "white-special-text-color";
    });
  } else if (btn.title == "white") {
    // todo: Change To dark Mode
    //! Slide The Btn And Change His Theme
    btn.style.transform = "translateX(0px)";
    btn.className = "dark-btn-bg";
    btn.title = "dark";
    //! Change The Toggle Theme
    toggle.className = "dark-toggle-bg";
    //! Change The Body And His Theme
    body.className = "dark-body-bg";
    //! Change The Dash Top Theme
    dashTop.className = "top dark-body-top-bg";
    //! Change All The Card Theme
    card.forEach((ele) => (ele.className = "card dark-card-bg"));
    //! Change All The P Theme
    p.forEach((ele) => {
      ele.className = "dark-special-text-color";
    });
  }
});
