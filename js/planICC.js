let requerimientos=()=>{
    let body;
    let clases;
    let abre;
    let requiere;

    function init(){
        body=document.querySelector("body");
        clases=document.querySelectorAll(".clase");
        requiere=document.createElement("div");
        requiere.classList.add("requerimientos","hidden");
        
        body.appendChild(requiere);
        clases.forEach(clase=>{
            clase.addEventListener(
                "click",
                ()=>{
                    mostrarRequerimientos(clase)
                }
            )
        })
        
    }

    function mostrarRequerimientos(clase){
        if(requiere.innerHTML===`${clase.dataset.abre}`){
            requiere.classList.toggle("hidden");
        }
        else{
            requiere.classList.remove("hidden");
            requiere.innerHTML=`${clase.dataset.abre}`;
        }
        
        
    }
    
    init();
    
}

document.addEventListener(
    "DOMContentLoaded",
    requerimientos
)