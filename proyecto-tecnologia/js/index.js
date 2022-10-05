    function cargaMenu(){
        fetch('menu/index.html')
        .then(response=> response.text())
        .then(text=> document.getElementById('menu').innerHTML = text);
    }

    function cargaInicio(){
        fetch('inicio/index.html')
        .then(response=> response.text())
        .then(text=> document.getElementById('inicio').innerHTML = text);
    }

    function cargaPie(){
        fetch('piedepagina/index.html')
        .then(response=> response.text())
        .then(text=> document.getElementById('piedepagina').innerHTML = text);
    }

    cargaMenu();
    cargaInicio();
    cargaPie();