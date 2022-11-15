    var inicio = document.getElementById("inicio");
    var productos = document.getElementById("productos");
    var servicios = document.getElementById("servicios");
    var contacto = document.getElementById("contacto");


    const btnInicio = document.getElementById("btnInicio");
    const btnProductos = document.getElementById("btnProductos");
    const btnServicios = document.getElementById("btnServicios");
    const btnContacto = document.getElementById("btnContacto");

    btnInicio.addEventListener("click", () => {
        ocultaContenidos();
        inicio.style.display = "block";
    });

    btnProductos.addEventListener("click", () =>{
        ocultaContenidos();
        productos.style.display = "block";
    });

    btnServicios.addEventListener("click", ()=>{
        ocultaContenidos();
        servicios.style.display = "block";
    });

    btnContacto.addEventListener("click", ()=>{
        ocultaContenidos();
        contacto.style.display = "block";
    });

    function ocultaContenidos(){
        const containers =  document.getElementsByClassName("container");
        for (let i = 0; i < containers.length; i++) {
            containers[i].style.display = "none";
        }
    }


    if (navigator.serviceWorker.controller) 
    {
        console.log("No soporta service worker");
    } else {
        console.log("Si soporta service worker");
        navigator.serviceWorker
        .register("service-worker.js", {
            scope: "./"
        })
        .then(function (reg) {
            console.log("Service worker registrado");
        });
    }
