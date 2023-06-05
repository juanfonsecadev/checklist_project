let checklist = document.querySelector("#checklist").addEventListener('click', function(click){ 

    if(click.target.tagName === "INPUT"){ 

        let listItem = click.target.parentNode;

        listItem.classList.toggle("checked");
    }
});



