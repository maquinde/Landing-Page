// //GLOBAL VARIABLES USED
// const navUl = document.querySelector("#navbar__list");
// const sections = document.querySelectorAll("section");


// //IS IN VIEWPORT
// function isInViewport(elem) {
//     let bounding = elem.getBoundingClientRect();
//     return (
//         bounding.top >= 0 &&
//         bounding.left >= 0 &&
//         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };


// //SMOOOTH SCROLL FUNCTION
// function scroll(event){
//     event.preventDefault();
//     const targetId = event.target.getAttribute("href");
//     window.scrollTo({
//         top: document.querySelector(targetId).offsetTop, //try detecting with this
//         behavior: "smooth"
//     });
// }


// //BUILDING THE DYNAMIC NAV
// for(let section of sections){
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `<a href="#${section.id}">${section.getAttribute("data-nav")}</a>`;
//     navUl.appendChild(listItem);
// }


// //ADDING THE EVENT LISTENER TO THE NAV UL
// navUl.addEventListener("click", scroll);


// //ADD EVENT LISTENER TO WINDOW W/ ANON FUNCTION ADD/REMOVE CLASSES
// window.addEventListener("scroll", function(event){
//     for (let i = 0; i < sections.length; i++) {

//       }
// });


//TESTING
// Helper function to check if element is in viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

// Building nav
const sections = document.getElementsByTagName('section');
const navUl = document.getElementById('navbar__list'); 

const len = sections.length;

for (let item of sections){
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#${item.id}'>${item.dataset.nav}</a>`;
    navUl.appendChild(listItem);
}

/* 
Added class 'my-active-class' to section when near top of viewport
Added class 'my-active-menu' to menu items when near viewport
*/

window.addEventListener("scroll", function(){    
    for (let i = 0; i < len; i++){
        if(isElementInViewport(sections[i])){
            sections[i].classList.add("my-active-class");
            navUl.children[i].classList.add("active-button");
        }
        if(!isElementInViewport(sections[i])){
            sections[i].classList.remove("my-active-class");
            navUl.children[i].classList.remove("active-button");
        }
    }
});

//SMOOOTH SCROLL FUNCTION
function scroll(event){
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop, //try detecting with this
        behavior: "smooth"
    });
}


//ADDING THE EVENT LISTENER TO THE NAV UL
navUl.addEventListener("click", scroll);