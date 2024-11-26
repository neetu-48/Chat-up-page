// let menu = document.querySelector(".menu");
// let ul = document.querySelector("ul");

// menu.addEventListener(".click", ()=>{
//     ul.classList.toggle("showData");
//     console.log(ul);
// })

humburger = document.querySelector(".humburger");
humburger.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}
