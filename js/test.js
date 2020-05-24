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

    var bounding = element.getBoundingClientRect();

    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

        console.log('Element is in the viewport!');
    } else {

        console.log('Element is NOT in the viewport!');
    }

        // var top = el.offsetTop;
        // var left = el.offsetLeft;
        // var width = el.offsetWidth;
        // var height = el.offsetHeight;
      
        // while(el.offsetParent) {
        //   el = el.offsetParent;
        //   top += el.offsetTop;
        //   left += el.offsetLeft;
        // }
      
        // return (
        //   top < (window.pageYOffset + window.innerHeight) &&
        //   left < (window.pageXOffset + window.innerWidth) &&
        //   (top + height) > window.pageYOffset &&
        //   (left + width) > window.pageXOffset
        // );


//WORKS, BUT HIGHLIGHTS 2 SECTIONS
    // const rect = element.getBoundingClientRect();
    // // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    // const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    // const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    // const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    // const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    // return (vertInView && horInView);


//TRY PAGEYOFFSET IN RECT.BOTTOM
    // let rect = element.getBoundingClientRect();
    // return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.right <= (window.pageXOffset || document.documentElement.clientWidth) &&
    //     rect.bottom <= (window.pageYOffset || document.documentElement.clientHeight)
    // );

//ORIGINAL CODE
    // let rect = element.getBoundingClientRect();
    // return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    // );
}

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
window.addEventListener("scroll", function(event){
    for (let i = 0; i < sections.length; i++) {
        //ADD LOGIC TO ADD/REMOVE CLASSES:
        if(isInView(sections[i])){
            sections[i].classList.add("my-active-class");
            navUl.children[i].classList.add("active-button");
        } else {
            sections[i].classList.remove("my-active-class");
            navUl.children[i].classList.remove("active-button");
        }
      }
});