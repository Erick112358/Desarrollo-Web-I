
let cont=2;

function loadDocument(){
    const btn=document.querySelector("form");
    btn.addEventListener(
        "submit",
        change
    )
}

function change(e){
    e.preventDefault();
    e.stopPropagation();
    const kirby=document.querySelector("img");
    kirby.src=`https://picsum.photos/id/${cont}/1080/720`;
    cont+=1;
    /*setTimeout(()=>{
        kirby.src="imgs/kirby2.webp";
        console.log("done?")
    },3000);*/
}

document.addEventListener(
    "DOMContentLoaded",
    loadDocument
)
