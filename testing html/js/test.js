document.addEventListener(
    "DOMContentLoaded",
    load_Doc
);

function load_Doc(){
    const formulario=document.querySelector("form");
    formulario.addEventListener(
        "submit",
        moveLeft
    )
    formulario.addEventListener(
        "reset",
        moveRight
    )
    
}

let pos=0;

function moveLeft(e){
    e.preventDefault();
    e.stopPropagation();
    const carrusel=document.querySelector(".imagenes");
    if(pos>0){
        pos-=1;
    }
    else{
        pos=2;
    }
    carrusel.style=`left: -${((pos%3)*1080)}px;`;
}

function moveRight(e){
    const carrusel=document.querySelector(".imagenes");
    e.preventDefault();
    e.stopPropagation();
    if(pos<2){
        pos+=1;
    }
    else{
        pos=0;
    }
    carrusel.style=`left: -${((pos%3)*1080)}px;`;
}