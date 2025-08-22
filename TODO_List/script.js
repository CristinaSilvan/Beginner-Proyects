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

            let spanCross = document.createElement("span");
            spanCross.innerHTML = "&#215;";
            li.appendChild(spanCross);
        }
        inputBox.value = "";
        saveData();
    }

    addButton.addEventListener("click", addTask);

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }

        saveData();

    }, false);

    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    
    showTask();
});

