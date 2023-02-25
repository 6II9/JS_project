let menuBtn = document.querySelector(".media_menu_btn");
let navActive = document.querySelector(".navbar");
let slide_one = document.querySelector(".slede_one");




menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active");
    navActive.classList.toggle("navbar_active");
})


window.addEventListener("scroll",()=>{
    if(window.pageYOffset>600){
        slide_one.classList.add("slede_one_active");
    } else{
        slide_one.classList.remove("slede_one_active");
    }
})