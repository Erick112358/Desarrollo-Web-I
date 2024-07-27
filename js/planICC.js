let requerimientos=()=>{
    let body;
    let clases;
    let abre;
    let datos;
    let clasesAbiertas;

    function init(){
        body=document.querySelector("body");
        clases=document.querySelectorAll(".clase");
        datos=document.createElement("div");
        datos.classList.add("requerimientos","hidden");        
        body.appendChild(datos);

        requiere=document.createElement("div");
        abre=document.createElement("div");
        requiere.classList.add("requiere");
        abre.classList.add("abre");
        datos.appendChild(requiere);
        datos.appendChild(abre);
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
        clasesAbiertas=clase.dataset.abre.split(",");
        clasesRequeridas=clase.dataset.requiere.split(",");
        console.log(clasesRequeridas);
        if(abre.innerHTML===`Abre:${listarClases(clasesAbiertas)}`){
            datos.classList.toggle("hidden");
        }
        else{
            datos.style.transform="translateY(0px)";
            setTimeout(() => {
                datos.classList.remove("hidden");
                abre.innerHTML=`Abre:${listarClases(clasesAbiertas)}`;
                requiere.innerHTML=`Requisitos:${listarClases(clasesRequeridas)}`
                datos.style.transform="";
            }, 200);
            
        }
    }

    function listarClases(clases){
        let string="";
        if(clases[0]!=""){
            clases.forEach((clase)=>{
                string=`${string}<br>${clase}`
            });
        }
        else{
            string="<br>Ninguna";
        }
        
        return string;
    }
    
    init();
    
}

document.addEventListener(
    "DOMContentLoaded",
    requerimientos
)