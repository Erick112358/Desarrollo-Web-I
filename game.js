let posX=0;
let posY=0;
function move(key){
    const you=document.querySelector(".you");
    const death=document.querySelector(".death");
    if(key.keyCode===37){
        //left
        posX-=25;
    }
    else if(key.keyCode===38){
        //up
        posY-=25;
    }
    else if(key.keyCode===39){
        //right
        posX+=25;
    }
    else if(key.keyCode===40){
        //down
        posY+=25;
    }
    you.style.transform=`translate(${posX}px,${posY}px)`;

    console.log(death.style.left.slice(0,3))
    console.log(death.style.left)
    console.log(death.style.left.slice(0,3))
    
    if((posX>=(parseInt(death.style.left.slice(0,3))-62)&&posX<=(parseInt(death.style.left.slice(0,3))+12)) && 
    (posY>=(parseInt(death.style.top.slice(0,3))-62)&&posY<=(parseInt(death.style.top.slice(0,3))+12))){
        const die=document.querySelector(".die");
        die.style.width="50px";
        die.style.height="50px";
    }

}

document.addEventListener(
    "DOMContentLoaded",
    ()=>{
        const death=document.querySelector(".death");
        death.style.left="700px";
        death.style.top="500px";
    }
)

document.addEventListener(
    "keydown",
    move
);