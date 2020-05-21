//GLOBAL VARIABLES USED
const navUl = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");


//BUILDING THE DYNAMIC NAV
for(let section of sections){
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#${section.id}">${section.getAttribute("data-nav")}</a>`;
    navUl.appendChild(listItem);
}


//IS IN VIEWPORT FUNCTION
function isInView(element) {
    let bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


//SMOOOTH SCROLL FUNCTION
function scrolling(event){
    event.preventDefault();
    let targetId = event.target.getAttribute("href");
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop, //try detecting with this
        behavior: "smooth"
    });
}


//ADDING THE EVENT LISTENER TO THE NAV UL FOR SMOOTH SCROLL
navUl.addEventListener("click", scrolling);

//ADD EVENT LISTENER TO WINDOW W/ ANON FUNCTION ADD/REMOVE CLASSES
window.addEventListener("scroll", function(event){
    for (let i = 0; i < sections.length; i++) {
        //ADD LOGIC TO ADD/REMOVE CLASSES
        if(isInView(sections[i])){
            sections[i].classList.add("my-active-class");
            navUl.children[i].classList.add("active-button");
        }

        if(!isInView(sections[i])){
            sections[i].classList.remove("my-active-class");
            navUl.children[i].classList.remove("active-button");
        }
      }
});
