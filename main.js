
addEventListener("DOMContentLoaded", function(){
    let framen = new DocumentFragment();
    let div = document.createElement("DIV");
    framen.append(div);
    framen.children[0].appendChild(document.createTextNode("Hola Mundo"))
    document.body.appendChild(framen);
    console.log(framen);
})
