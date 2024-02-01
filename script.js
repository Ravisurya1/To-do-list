const input = document.getElementById("input");
const activity = document.getElementById("activity");

function addtask(){
    if(input.value=== ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=input.value;
        activity.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveData();
}

activity.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",activity.innerHTML);
}
function showTask(){
    activity.innerHTML=localStorage.getItem("data");
}
showTask();
