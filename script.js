function init(){
}

hidebar1Translated = false;
hidebar2Translated = false;
hidebar3Translated = false;
hidebar4Translated = false;

function openHidebar1() {
    if (hidebar1Translated == false) {
    	if(hidebar3Translated == true){
    		openHidebar3();
    	}
        document.getElementById("a-button").style.transform = "translate(1000%,0%)";
        document.getElementById("a-hidebar").style.transform = "translate(100%,0%)";
        hidebar1Translated = true;
      } else {
        document.getElementById("a-button").style.transform = "translate(-5%,0%)";
        document.getElementById("a-hidebar").style.transform = "translate(0%,0%)";
        hidebar1Translated = false;
  	}
}

function openHidebar2() {
    if (hidebar2Translated == false) {
    	if(hidebar4Translated == true){
    		openHidebar4();
    	}
        document.getElementById("b-button").style.transform = "translate(1000%,0%)";
        document.getElementById("b-hidebar").style.transform = "translate(100%,0%)";
        hidebar2Translated = true;
      } else {
        document.getElementById("b-button").style.transform = "translate(-5%,0%)";
        document.getElementById("b-hidebar").style.transform = "translate(0%,0%)";
        hidebar2Translated = false;
  	}
}

function openHidebar3() {
    if (hidebar3Translated == false) {
    	if(hidebar1Translated == true){
    		openHidebar1();
    	}
        document.getElementById("c-button").style.transform = "translate(-1000%,0%)";
        document.getElementById("c-hidebar").style.transform = "translate(-100%,0%)";
        hidebar3Translated = true;
      } else {
        document.getElementById("c-button").style.transform = "translate(5%,0%)";
        document.getElementById("c-hidebar").style.transform = "translate(0%,0%)";
        hidebar3Translated = false;
  	}
}

function openHidebar4() {
    if (hidebar4Translated == false) {
    	if(hidebar2Translated == true){
    		openHidebar2();
    	}
        document.getElementById("d-button").style.transform = "translate(-1000%,0%)";
        document.getElementById("d-hidebar").style.transform = "translate(-100%,0%)";
        hidebar4Translated = true;
    } else {
        document.getElementById("d-button").style.transform = "translate(5%,0%)";
        document.getElementById("d-hidebar").style.transform = "translate(0%,0%)";
        hidebar4Translated = false;
  	}
}

var seconds = 0;
var minutes = 0;
var hours = 0;
var secondsZeroes = "0";
var intervalVar = setInterval(cornerTimer, 1000);

function cornerTimer() {
    document.getElementById("timerClock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + secondsZeroes + seconds.toString();
    seconds += 1;
    if(seconds == 60){
        seconds = 0;
        minutes += 1;
    }
    if(minutes == 60){
        hours += 1;
        minutes = 0;
    }
    if(seconds > 9){
        secondsZeroes = "";
    } else {
        secondsZeroes = "0";
    }
}


function blendColors(colorA, colorB, amount) {
  const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
  const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
  const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
  const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
  const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
  return '#' + r + g + b;
}


function changeImage(main){

	document.getElementById("central-image").src = main;
}

function changeImages(icon1, icon2, banner1, banner2){

	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	var newColor = blendColors("#ffffff", "#" + randomColor, 0.5);
	document.querySelector("#image-container").style.backgroundColor = newColor;

	document.getElementById("poster-icon").src = icon1;
	document.getElementById("reshare-icon").src = icon2;
	document.getElementById("poster-banner").src = banner1;
	document.getElementById("reshare-banner").src = banner2;

}

var postNum = 0;

function scrollMedia(){
	if(postNum == 0){

		changeImages("objects/1/icon1.jpg", "objects/1/icon2.png", "objects/1/banner1.jpg", "objects/1/banner2.jpg");
		changeImage("objects/1/photo.jpg");
		document.getElementById("central-text").textContent = "Mushroom loves this chair for some reason";

		document.getElementById("reshare-handle").textContent = "@fishguy";
		document.getElementById("reshare-display").textContent = "check my pinned for awesome fish";
		document.getElementById("poster-handle").textContent = "@middaywaves";
		document.getElementById("poster-display").textContent = "Jay";
		document.getElementById("poster-date").textContent = "23 December 2021";
	} else if(postNum == 1){
		
		changeImages("objects/2/icon1.jpg", "objects/2/icon2.jpg", "objects/2/banner1.jpg", "objects/2/banner2.jpg");
		changeImage("objects/2/photo.png");
		document.getElementById("central-text").textContent = "I scanned a lovely jellyfish illustration from an old book";

		document.getElementById("reshare-handle").textContent = "@cat";
		document.getElementById("reshare-display").textContent = "<3";
		document.getElementById("poster-handle").textContent = "@magnetictape";
		document.getElementById("poster-display").textContent = "commissions closed";
		document.getElementById("poster-date").textContent = "30 October 2019";

	} else if(postNum == 2){
		
		changeImages("objects/3/icon1.jpg", "objects/3/icon2.jpg", "objects/3/banner1.jpg", "objects/3/banner2.jpg");
		changeImage("objects/3/photo.jpg");
		document.getElementById("central-text").textContent = "Good night! I hope all my followers have a good rest.";
		document.getElementById("reshare-handle").textContent = "@pants";
		document.getElementById("reshare-display").textContent = "On Hiatus";
		document.getElementById("poster-handle").textContent = "@afantasticfrog";
		document.getElementById("poster-display").textContent = "Kermit";
		document.getElementById("poster-date").textContent = "27 May 2018";
	} else if(postNum == 3){
		
		changeImages("objects/4/icon1.png", "objects/4/icon2.png", "objects/4/banner1.jpg", "objects/4/banner2.jpg");
		changeImage("objects/4/photo.jpg");
		document.getElementById("central-text").textContent = "Spa day :)";

		document.getElementById("reshare-handle").textContent = "@moontears";
		document.getElementById("reshare-display").textContent = "Sol";
		document.getElementById("poster-handle").textContent = "@fumblingbumblingbee";
		document.getElementById("poster-display").textContent = "Where am I";
		document.getElementById("poster-date").textContent = "11 December 2020";
	} 
}

function scrollForward(){
	postNum ++;
	if( postNum > 3){
		postNum = 3;
	}
	scrollMedia();
	
}

function scrollBackward(){
	postNum --;
	if( postNum < 0){
		postNum = 0;
	}
	scrollMedia();
	
}

document.addEventListener('keydown', (e) => {
   if (e.code === "KeyA"){
   		document.getElementById("left-arrow").style.backgroundColor = "#757575";
   		scrollBackward();
   } else if (e.code === "KeyD"){
   		document.getElementById("right-arrow").style.backgroundColor = "#757575";
   		scrollForward();
   }
});

document.addEventListener('keyup', (e) => {
   if (e.code === "KeyV") {
   		openHidebar1();
   } else if (e.code === "KeyB"){
   		openHidebar2();
   } else if (e.code === "KeyN"){
   		openHidebar3();
   } else if (e.code === "KeyM"){
   		openHidebar4();
   } else if (e.code === "KeyA"){
   		document.getElementById("left-arrow").style.backgroundColor = "white";
   } else if (e.code === "KeyD"){
   		document.getElementById("right-arrow").style.backgroundColor = "white";
   }
});



