var ul = document.querySelector("nav .ul");


//FUNÇÃO PRA ADIONAR OU REMOVER O MENU
function icon(){
    if(!ul.classList.contains("open")){
        ul.classList.add("open");
    }else{
        ul.classList.remove("open");
    }
}