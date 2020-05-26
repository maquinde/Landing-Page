//GLOBAL VARIABLES USED:
const navUl = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");


//BUILDING THE DYNAMIC NAV:
for(let section of sections){
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#${section.id}">${section.getAttribute("data-nav")}</a>`;
    navUl.appendChild(listItem);
}


//IS IN VIEWPORT FUNCTION:
function isInView(element) {
    let rect = element.getBoundingClientRect();
    return (rect.top > -(innerHeight * 0.4) && rect.top < innerHeight * 0.2 );
};

//SMOOTH SCROLL FUNCTION:
function smoothScroll(event){
    event.preventDefault();
    let element = event.target.getAttribute("href");
    let targetId = document.querySelector(element);
    targetId.scrollIntoView({behavior: "smooth"});
}


//ADDING THE EVENT LISTENER TO THE NAV UL FOR SMOOTH SCROLL:
navUl.addEventListener("click", smoothScroll);


//ADD EVENT LISTENER TO WINDOW W/ ANON FUNCTION ADD/REMOVE CLASSES:
window.addEventListener("scroll", function(){
    for (let i = 0; i < sections.length; i++) {
        //ADD LOGIC TO ADD/REMOVE CLASSES:
        if(isInView(sections[i])){
            sections[i].classList.add("your-active-class");
            // navUl.children[i].classList.add("active-button");
        } else {
            sections[i].classList.remove("your-active-class");
            // navUl.children[i].classList.remove("active-button");
        }
      }
});