
	
function forms(){
	var a=	document.getElementById("extra");
	a.style["display"]="inline-flex";
    var button=document.createElement("div");
	button.setAttribute("id","query"); 
	button.style["padding"]="5px";
	button.innerText="Post\n QUERY";
	button.style["width"]="50%"
	button.style["text-align"]="center";
	button.style["background-color"]="lightgreen";
	a.append(button);
	button.onclick=function(){
		var ph;
		var q=window.prompt("Please enter your query","query");
		if(q==null||q==""||q=="query"){
			alert("please post a valid query");
		}
			else{
			ph=window.prompt("your query will be answered through a text message\nPlease enter your phone number");
			if((ph.length==10)&&(ph.match("^[0-9]*$")))
			{
				alert(q+"\n"+ph);
			}
			else{
				alert("invalid phone number");
			}
		}
		
	}

	var link= document.createElement("a");
	link.href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses";
	link.setAttribute("title","https://www.who.int/news-room/q-a-detail/q-a-coronaviruses");
	link.setAttribute("target","-balnk");
	var div2=document.createElement("div");
	div2.innerHTML="for more informmation click here"
	div2.style["overflow-wrap"]="break-word";
	div2.style["padding"]="5px";
	div2.style["text-align"]="center";
	link.append(div2);
	a.append(link);
}