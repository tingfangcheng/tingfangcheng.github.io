



//22222222222222222
var step = 0;
var bot = 0;
var lef = 0;

window.addEventListener("DOMContentLoaded", function(e){
	var ctn = document.getElementById("container");
	var newStep = document.createElement("div");
	step++;
	// newStep.id = "step1";


	newStep.className="step_1";


	// newStep.style.width = "200px";
	// newStep.style.height = "50px";
	// newStep.style.background = "red";
	// newStep.style.position = "absolute";

	newStep.style.bottom = "0";
	newStep.style.left = "0";//最左下角

	newStep.onmouseover = createStep;
	ctn.appendChild(newStep);
});

var createStep = function(){
	var ctn = document.getElementById("container");
	var newStep = document.createElement("div");
	// newStep.id = step;
	newStep.className="step_1";

	var newText = document.createElement("p");
	newText.className = "stair_text";
	newText.innerHTML = " < div "+step+">";
	newStep.appendChild(newText);


	// newStep.style.width = "200px";
	// newStep.style.height = "50px";
	// newStep.style.background = "red";
	// newStep.style.position = "absolute";

	newStep.style.bottom = step*20+"px";
	newStep.style.left = step*70+"px";

	step++;

	if(step<5){
		newStep.onmouseover = createStep;
	}
	ctn.appendChild(newStep);
} 





function openDoor_1(){
	var left_elevator_left_door = document.getElementById("left_elevator_left_door");
	left_elevator_left_door.style.width="0px";

}


// function openDoor_2(){
// 	var left_elevator_right_door = document.getElementById("left_elevator_right_door");
// 	left_elevator_right_door.style.width="0px";

// }




function openDoor_3(){
	var right_elevator_left_door = document.getElementById("right_elevator_left_door");
	right_elevator_left_door.style.width="0px";

}



function alert(){
	var right_elevator_left_door = document.getElementById("alert");
	right_elevator_left_door.style.width="0px";

}
