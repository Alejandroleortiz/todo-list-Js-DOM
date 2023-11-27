
let arr = []


document.getElementById("newTodo").addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        const todo = this.value
        if(todo === ""){
            alert("Necesitas agregar algo")
        }
        if (todo) {
            const li = document.createElement("li")
            li.textContent = todo
            li.className = "list-group-item d-flex justify-content-between align-items-center"
                     // Crear botón de eliminar
                     const deleteBtn = document.createElement("button");
                     deleteBtn.className = "btn-close"
                     deleteBtn.setAttribute('aria-label', 'Close');
                     deleteBtn.onclick = function() {
                         li.remove();
                         updateCounter(-1);
                     };
                     li.appendChild(deleteBtn);
         
                     document.getElementsByClassName("list-group")[0].appendChild(li)
                     this.value = "";
                     arr.push(todo)
                     console.log(arr);
                     updateCounter(1);
        }
    }
})

function updateCounter(change) {
    const counter = document.getElementById("counter");
    const currentCount = parseInt(counter.textContent) || 0;
    counter.textContent = currentCount + change + ' items left';
}

// Inicializar el contador en la carga de la página
window.onload = function() {
    updateCounter(0);
};