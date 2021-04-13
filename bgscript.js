function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}



/* Typical Creation and Setup A New Orphaned Element Object */
//ABBRIR CONSOLA DEL NAVEGADOR Y PEGAR
//Abrirá una pestaña nueva con una tabla dónde estarán todos los enalaces y sus textos de enlace.
var x = document.querySelectorAll("a");
var MiArray = []
for (var i = 0; i < x.length; i++) {
    var textoEnlace = x[i].textContent;
    var textoLimpio = textoEnlace.replace(/\s+/g, ' ').trim();
    var cleanlink = x[i].href;
    MiArray.push([textoLimpio, cleanlink]);
};

function CopiaTexto(text) {
    //Create a textbox field where we can insert text to. 

    var copyFrom = document.createElement("textarea");

    //Set the text content to be the text you wished to copy.
    copyFrom.textContent = text;

    //Append the textbox field into the body as a child. 
    //"execCommand()" only works when there exists selected text, and the text is inside 
    //document.body (meaning the text is part of a valid rendered HTML element).
    document.body.appendChild(copyFrom);

    //Select all the text!
    copyFrom.select();

    //Execute command
    document.execCommand('copy');

    //(Optional) De-select the text using blur(). 
    copyFrom.blur();

    //Remove the textbox field from the document.body, so no other JavaScript nor 
    //other elements can get access to this.
    document.body.removeChild(copyFrom);
    copyFrom.textContent;
}

function Eliminar() {
    window.document.getElementById('NueaoFlotante').remove();
    CambiaTexto();
}
//onclick="CopiaTexto(window.document.getElementById(\'LinksToTable\').outerHTML);window.document.getElementById(\'textoCopiado\').innerHTML = \'<u>TABLE OF LINkS COPIED TO CLIPBOARD</u>\';
//onclick="CopiaTexto(window.document.getElementById(\'LinksToTable\').outerHTML);"

function CambiaTexto() {
    window.document.getElementById("textoCopiado").innerHTML = '<u>LINK COPIED TO CLIPBOARD</u>';
}
document.addEventListener('DOMContentLoaded', function() {
    window.document.getElementById("x").addEventListener('click', Eliminar, false);
    window.document.getElementById("textoCopiado").addEventListener('click', Eliminar, false);
    window.document.getElementById('copiar').addEventListener('click', CopiaTexto(window.document.getElementById('LinksToTable').outerHTML), false);
})

function creaTabla() {
    var tabla = '<table id="LinksToTable"><thead><th>Name</th><th>Links</th></thead><tbody>';
    for (var i = 0; i < MiArray.length; i++) {
        tabla += '<tr><td>' + MiArray[i][0] + '</td><td>' + MiArray[i][1] + '</td></tr>';
    };
    tabla += '</table>';

    nuevoFlotante = document.createElement('div');

    nuevoFlotante.id = "NueaoFlotante";
    nuevoFlotante.style = "position: fixed; width: 100%; top: 0; display: block; z-index: 9999; left: 0; height: 100%; background-color: #000000a3;";
    nuevoFlotante.onclick = function() {
        // window.document.getElementById('PunkId007').remove();
        CopiaTexto(MiArray.join("\n"));
        nuevoFlotante.remove();

    };
    nuevoFlotante.innerHTML = '<div id="cenral" style="height: 80vh;right: 25%;z-index: 99999;border-radius: 10px!important;MAX-WIDTH: inherit;overflow-wrap: break-word; left: 25%; top: 25%;    overflow: auto;height: 80vh;top: 15%; font-size: 1.8em; position: absolute; border: solid 1px #797878!important; background-color: #fff;  padding: 3px; vertical-align: box-shadow: rgb(136, 136, 136) 5px 5px 2px !important;text-align: -webkit-center;"><button  id="x" style=" border-radius: 10px!important;float: right!important; font-size: 16px!important; position: relative!important; top: -7px!important; border: solid 1px #797878!important; right: -7px!important; width: fit-content;padding: 3px!important;cursor:hand;cursor:pointer;">X </button>    <div style="z-index:99999999;border-radius: 10px!important;color:#fff;background-color:#000;line-height: 30px;"><i style="color:#5784fe;" class="fa  fa-lg  fa-link in-view"></i> <span id="textoCopiado">CERRAR TABLA</span></div><div style="max-height: -webkit-fill-available;height: 90vh;overflow: auto;display: flex;">    <div id="copiar" style="float: left;width: 90%;" ><br><span style="color:#1d35e5;">' + tabla + '</span></div>    <div style="float: right;width: 10%;"><br><svg event.stopPropagation()" viewBox="0 0 24 24" style="cursor:hand;cursor:pointer;" focusable="false" width="24" height="24" class="CEJND cIGbvc NMm5M"><path d="M18 21H4V7H2v14c0 1.1.9 2 2 2h14v-2zm3-4V3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2zm-2 0H8V3h11v14z"></path></svg></div></div></div>';
    insertAfter(nuevoFlotante, document.querySelector("body"));

    //var w = window.open("");
    //w.document.write(tabla); 
}
creaTabla();