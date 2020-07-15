var modal = document.getElementById("ID-modal");
var add_span = document.getElementById("ID-add");
var cancel_span = document.getElementById("modal-cancel");
const modal_complete = document.getElementById("modal-complete");
var goto_content = document.querySelector(".goto-content");
const goto_clear = document.getElementById("goto-clear");

document.getElementById("modal-text1").addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addBtn();
    }
})

document.getElementById("modal-text2").addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addBtn();
    }
})

add_span.onclick = function(){
    modal.style.display = "block";
    document.getElementById("modal-text1").focus();
    document.onkeydown = function(){
        if(event.keyCode == 27){
            modal.style.display = "none";
        }
    }
}

cancel_span.onclick = function(){
    modal.style.display = "none";
}

function addBtn(){
    var text_1 = document.getElementById("modal-text1").value;
    var text_2 = document.getElementById("modal-text2").value;
    if(text_1 !== "" && text_2 !== ""){
        btn_on();
        Save_Make(text_1, text_2);
        modal.style.display = "none";
    }else{
        btn_off();
    }  
}

function Save_Make(text_1, text_2){
    localStorage.setItem(text_1, text_2);
    new_btn(text_1, text_2);
}

function load_btn(){
    for(var i=0; i<localStorage.length; i++){
        local_key = localStorage.key(i);
        local_value = localStorage.getItem(localStorage.key(i));
        var newBtn = document.createElement("input");
        newBtn.type = "button";
        newBtn.value = local_key;
        goto_content.appendChild(newBtn);
        newBtn.onclick = function(){
            goWeb(local_value);
        }
    }
}

function new_btn(text_1, text_2){
    var newBtn = document.createElement("input");
    newBtn.type = "button";
    newBtn.value = text_1;
    goto_content.appendChild(newBtn);
    newBtn.onclick = function(){
        goWeb(text_2);
    }
}

function goWeb(text_2){
    location.href = text_2;
}

function judge(){
    var text_1 = document.getElementById("modal-text1").value;
    var text_2 = document.getElementById("modal-text2").value;
    if(text_1 == "" || text_2 == ""){
        btn_off();
    }else{
        btn_on();
    }
}

function btn_on(){
    modal_complete.disabled = 'false';
    modal_complete.style.backgroundColor = 'white';
}

function btn_off(){
    modal_complete.disabled = 'disabled';
}

goto_clear.onclick = function(){
    localStorage.clear();
    history.go(0);
}

function init(){
    load_btn();
    if(modal.style.display == "block"){
        setInterval(judge, 10);
    }
}

init();