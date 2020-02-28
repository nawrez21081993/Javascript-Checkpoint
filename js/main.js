console.log("IT's just the beginning")
console.log("IT's just" + "The beginning")
//("hello")

var x=5;
var y=2;
var z=x+y;
console.log(z)

var mystring="hello word";
console.log(mystring.length)

var first="i like "
var second="ice-cream"
var phrase=first+second

console.log(phrase);
console.log(phrase.length);

var a=5;
var b=2;
var c=5;
console.log(a==b);
console.log(a==c);
console.log(c==b);

var i;
for (i=0;i<10;i++){
	console.log(i);
}


var i=0;
while (i<10){
	console.log(i);i++;
}

var myarray=[1,2,3,4];
console.log(myarray);
console.log(myarray[0]);
myarray.push(8);
console.log(myarray);


function average(a,b,c){
	return((a+b+c)/3);
}
console.log(average(3,5,7));



/*----------------mettre texte italique----------------------*/
function italique(){
	if(document.getElementById("feedback").style.fontStyle=="italic"){
	document.getElementById("feedback").style.fontStyle="normal";
}else{
document.getElementById("feedback").style.fontStyle="italic";
}
}

/*----------------mettre texte gras---------------------------*/
function gras(){	
	if(document.getElementById("feedback").style.fontWeight=="bold"){
	document.getElementById("feedback").style.fontWeight="normal";
}
else{
document.getElementById("feedback").style.fontWeight="bold";
}
}
/*----------------souligner le texte----------------------*/
function souligner(){
	if(document.getElementById("feedback").style.textDecoration=="underline"){
	document.getElementById("feedback").style.textDecoration="none";
}else{
document.getElementById("feedback").style.textDecoration="underline";
}
}
/*----------------changer taille de text----------------------*/
function fcttaille(){
	var taille = document.getElementById("myselect").value;
	
	document.getElementById("feedback").style.fontSize=taille;	
}
/*----------------changer style de text----------------------*/
function forme(){
	var f = document.getElementById("myselect2").value;
	
	document.getElementById("feedback").style.fontFamily= f;	
}
