document.addEventListener("DOMContentLoaded", function(){
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    const addButton = document.getElementById("add-button");

    function addTask(){
        if(inputBox.value === ''){
            alert("You must write something!");
        }
        else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
        }
        inputBox.value = "";
    }

    addButton.addEventListener("click", addTask);
});

