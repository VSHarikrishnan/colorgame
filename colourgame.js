

var colours = genclr(6);

var squares = document.querySelectorAll(".square");
var pickedcolour = pickcolour();
var colourdisplay = document.getElementById("colourdisplay");
var msg = document.querySelector("#message");
var h1 = document.querySelector("#h1");
var btn = document.querySelector("#btn");

btn.addEventListener("click",function(){
	colours = genclr(6);
	pickedcolour = pickcolour();
	colourdisplay.textContent = pickedcolour;
	h1.style.backgroundColor = "#232323";
	btn.textContent="new colours";

	for(var i= 0; i < squares.length; i++ ) {
	squares[i].style.backgroundColor=colours[i]; }
})


colourdisplay.textContent = pickedcolour;

for(var i= 0; i < squares.length; i++ ) {
	squares[i].style.backgroundColor=colours[i];

	squares[i].addEventListener("click" , function(){

	var clickedcolour = this.style.backgroundColor;
	 
	if(clickedcolour===pickedcolour) 
	{
   msg.textContent ="correct";
   h1.style.backgroundColor=clickedcolour;
   btn.textContent="reset";

   for(var i= 0; i < squares.length; i++ ) {
	squares[i].style.backgroundColor=clickedcolour; }


      } else{
    this.style.backgroundColor = "#232323";
    msg.textContent ="try again";

      }
	});

}

function fillsq(){
		for(var i= 0; i < squares.length; i++ ) {
	squares[i].style.backgroundColor=colours[i]; }

}

function pickcolour(){

	var random = Math.floor(Math.random() * colours.length)
	return colours[random];
	
}

function genclr(num){
var arr=[];
for(var i=0; i < num; i++ )
{
	arr.push(randclr())
}
return arr;
}

function randclr(){
	var r=Math.floor(Math.random()*256)
	var b=Math.floor(Math.random()*256)
	var g=Math.floor(Math.random()*256)
return "rgb("+r+", "+ b+", " +g+")"
}

