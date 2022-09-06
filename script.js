const btnMenu = document.querySelector("#btn_menu");
const nav = document.getElementById("nav");
let menuAbierto = false;

btnMenu.addEventListener('click',()=>{


    if (menuAbierto) {
        nav.style.transform = "translateY(200%)";
        menuAbierto = false;
    }else{
        nav.style.transform = "translateY(0)";
        menuAbierto = true;
    }
    
});

