let checklist = document.querySelector("#checklist").addEventListener('click', function(click){ 

    if(click.target.tagName === "INPUT" && click.target.type === "checkbox"){ 

        let listItem = click.target.parentNode;

        listItem.classList.toggle("checked");
    }
}); //faz com que o texto receba o estilo de "checked" quando marcado.



let button = document.getElementById("add").addEventListener('click', function(){ 

    //console.log('Fui clicado!')

    let checklist = document.querySelector("#checklist"); //pega a ul checklist pelo id
    
    let itemNovo = document.createElement('li'); //cria um elemento <li> no documento

    let novoCheck = document.createElement('input'); //cria um input
    novoCheck.type = "checkbox"; //transforma esse input em "checkbox"

    var novoTexto = document.createElement('input'); //cria um input
    novoTexto.type = "text"; //transforma esse input em "text"
    novoTexto.placeholder = "Adicione um novo item."; //adiciona um placeholder
    novoTexto.id = "item-lista"; //transforma o id em "item-lista"

    let botaoDelete = document.createElement('button');
    botaoDelete.className = "del-button";
    botaoDelete.textContent = "X";


    itemNovo.appendChild(novoCheck);
    itemNovo.appendChild(novoTexto);
    itemNovo.appendChild(botaoDelete);
    checklist.appendChild(itemNovo);

    botaoDelete.addEventListener('click', function(){ 

        let itemLista = this.parentNode; 

        itemLista.parentNode.removeChild(itemLista)
    });


    //console.log('estou ok')
});




