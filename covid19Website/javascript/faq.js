

var parent = document.getElementById("contentright");


function create(arg, ques,ans) {
	var arg = document.createElement("div");
	arg.style['border-style']="groove";
	arg.style['margin-top']="5px";
	var a= document.createElement("div");
	a.style["color"]="#ffffff";
	a.style.display="inline-block";
	a.innerText=ques;
	var c=document.createElement("div");
	c.innerText=" + ";
	c.style["background-color"]="black";
	c.style["border-radius"]="100%";
	c.style["padding"]="5px";
	c.style["color"]="white";
	c.style["float"]="right";
	a.appendChild(c);
	var b= document.createElement("div");
	b.innerText=ans;
	b.style.display="none";
	arg.append(a);
	arg.append(b);
	c.onclick=function(){
		if(b.style.display==="none")
		{
			b.style.display="block";
			c.innerText=" x ";
		}
		else{
			b.style.display="none";
			c.innerText=" + ";
		}
	}
	return arg;
}

var a=1;
var b="d";
//parent.append(create("d1","s","s"));
var ques=["What does it mean to self-isolate?",
"How does COVID-19 spread?",
"What is a coronavirus?",
"What is COVID-19?"];


var ans=["Self-isolation is an important measure taken by those who have COVID-19 symptoms to avoid infecting others in the community,"+
" including family members.\n"+
"\nSelf-isolation is when a person who is experiencing fever, cough or other COVID-19 symptoms stays at home and does not go to work,"+
" school or public places.This can be voluntarily or based on his/her health care provider’s recommendation. "+
"However, if you live in an area with malaria or dengue fever it is important"+
" that you do not ignore symptoms of fever. Seek medical help. When you attend the health facility wear a mask if possible, keep at least 1 metre distant from"+
" other people and do not touch surfaces with your hands. If it is a child who is sick help the child stick to this advice.\n"+
"If you do not live in an area with malaria or dengue fever please do the following:\n-  If a person is in self-isolation, it is because he/she is ill"+
" but not severely ill (requiring medical attention)\nhave a large, well-ventilated with hand-hygiene and toilet facilities\nIf this is not"+
" possible, place beds at least 1 metre apart\nKeep at least 1 metre (3 feet) from others, even from your family members\nMonitor your"+
" symptoms daily\nIsolate for 14 days, even if you feel healthy\nIf you develop difficulty breathing, contact your healthcare provider"+
" immediately – call them first if possible\nStay positive and energized by keeping in touch with loved ones by phone or online,"+
" and by exercising yourself at home.",
"People can catch COVID-19 from others who have the virus. The disease spreads primarily from person to person"+
" through small droplets from the nose or mouth, which are expelled when a person with COVID-19 coughs, sneezes, or speaks. These "+
"droplets are relatively heavy, do not travel far and quickly sink to the ground. People can catch COVID-19 if they breathe in these"+
" droplets from a person infected with the virus. This is why it is important to stay at least 1 metre (3 feet) away from others. These"+
" droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails. People can become infected by"+
" touching these objects or surfaces, then touching their eyes, nose or mouth. This is why it is important to wash your hands"+
" regularly with soap and water or clean with alcohol-based hand rub."+
"WHO is assessing ongoing research on the ways that COVID-19 is spread and will continue to share updated findings.",
"Coronaviruses are a large family of viruses which may cause illness in animals or humans."+
"  In humans, several coronaviruses are known to cause respiratory infections ranging from the common"+
" cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS)."+
" The most recently discovered coronavirus causes coronavirus disease COVID-19.",
"COVID-19 is the infectious disease caused by the most recently discovered coronavirus."+
" This new virus and disease were unknown before the outbreak "+
"began in Wuhan, China, in December 2019. COVID-19 is now a pandemic affecting many countries globally.",];
for (var i = ques.length - 1; i >= 0; i--) {
	parent.appendChild(create(b+a,ques[i],ans[i]));
	a++;
}

var extra= document.createElement("div");
parent.append(extra);
extra.setAttribute("id","extra");
forms();