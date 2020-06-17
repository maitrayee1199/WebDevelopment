window.onload=function(){
var name="d";
var no=1;
function add(input,name){
	const design="<div  class='parent-div' id="+'parent-div-'+name+" style='background-color:black;display:inline-flex;width:100%;color:white;'>"+
				"<div class='checkbox' id="+'checkbox-'+name+" style='background-color:white;border-radius:5px;'></div>"+
    			"<div class='task' id="+'task-'+name+" style='overflow-wrap: break-word;max-width: 40%;min-width: 40%;margin-left: 2%'>hgvjbj</div>"+
    			"<div class='status-div' id="+'status-div-'+name+" style='width: 15%;font-size=x-large;margin-left: 2%'>new</div>"+
    		   " <i class='fa fa-bell' id="+'bell-'+name+" style='margin: 0% 2% 0% 2%;'></i>"+
    		   "<i class='fa fa-trash' id="+'trash-'+name+" style='margin: 0% 2% 0% 2%;'></i>"+
    		   "<input type='date' style='font-size:inherit;min-width:35%%;height:max-content' id="+'date-'+name+"></div>";
	var cont = document.getElementById("container");
    var div=document.createElement("div");
    div.setAttribute("id",name);
    div.style.width="100%";
    div.innerHTML=design;
    cont.append(div);
    var i=document.getElementById('task-'+name);
    i.innerText=input;

    var c=document.getElementById('checkbox-'+name);
    c.onclick=function(){
    	if(c.style["background-color"]=='white'){
    		c.style["background-color"]='lightgreen'
    		document.getElementById('status-div-'+name).innerText="In progress";
    	}
    	else if(c.style["background-color"]=="lightgreen"){
    		c.style["background-color"]='lightblue'
    		document.getElementById('status-div-'+name).innerText="Completed";
    	}
    	else{
    		//archive task
    	}
    }
	
	var trash=document.getElementById('trash-'+name);
	trash.onclick=function(){
		var p=trash.parentElement.parentNode;
		document.getElementById(p.id).style.display="none"
		console.log(p.id+" is deleted");
	}
}

var button = document.getElementById("add-button");
button.onclick=function() {
	var input = document.getElementById("task-input");
	if(input.value){
	add(input.value,name+no);
	console.log(name+no);
	no+=1;
	}
	else{
		alert("invalid task input");
	}
	return 1;
}


}