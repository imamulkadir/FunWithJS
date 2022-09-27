window.onscroll = () => {scrollNavbar()};
        scrollNavbar = () => {
            var navBar = document.getElementById("navBar");

            if(document.documentElement.scrollTop > 100) {
                navBar.classList.add("after-scroll-navbar");
            }
            else {
                navBar.classList.remove("after-scroll-navbar");
            }
        }

// Copy starts here
function jsCopy() {
    // Get text from field
    var copyText = document.getElementById("copy").value;

    // Put text into clipboard
    navigator.clipboard.writeText(copyText)
    if(copyText){
        alert("Text copied!");
    }
    else {
        alert("Unable to copy text!");
    }
    
}   
// Copy ends here
        
// Cut starts here
function jsCut() {
    // Get text from field
    var cutText = document.getElementById("cut").value;

    // Put text into clipboard
    navigator.clipboard.writeText(cutText)
    if(cutText){
        document.getElementById("cut").value = "";
        alert("Text cutted!");
    }
    else {
        alert("Unable to cut text!");
    }
    
} 
// Cut ends here

// Paste starts here
function jsPaste() {
    // Get text from clipboard
    navigator.clipboard.readText()

    .then(
        clipText => (document.getElementById("paste").value = clipText)
    );
}
// Paste ends here

// Light on off

function lightBtn(match) {
    var title = document.getElementById("title");
    var pic;
    for(var i=1; i<=6; i++){
        if(match == 0) {
            pic = "../images/lightoff.png";
            title.innerHTML = "Off";
        }
        else{
            pic = "../images/lighton.png";
            title.innerHTML = "On";
        }

        var light = document.getElementById('light'+(i));
        light.src = pic;
    }
}

// Animated counter
// For Project
var count = 0;
var project = setInterval(project, 6);

function project() {
    count++;
    var num1 = document.getElementById("num1").innerHTML = count;
    if(count == 484){
        clearInterval(project);
    }
}

// For Client
var count2 = 0;
var client = setInterval(client, 10);

function client() {
    count2++;
    var num2 = document.getElementById("num2").innerHTML = count2;
    if(count2 == 298){
        clearInterval(client);
    }
}

// For Achieve
var count3 = 0;
var achieve = setInterval(achieve, 10);

function achieve() {
    count3++;
    var num3 = document.getElementById("num3").innerHTML = count3;
    if(count3 == 187){
        clearInterval(achieve);
    }
}


// Color Picker
var hexanumber = document.getElementById("hexaNumber");
var color = document.getElementById("color");
color.addEventListener('input', function(){
    var inputColor = color.value;
    var cpd = document.getElementById("cpd");
    hexanumber.value = inputColor;
    document.getElementById("cp").style.color = inputColor;

    document.getElementById("cpd").style.backgroundColor = inputColor;
})


// Navbar active menu

function myFunction(id){
    // Getting id of navbar items
    var item = document.getElementById(id);
    // Giving the items active class
    item.classList.add("activeNavbar");

    // Selecting all the navbar a elements
    var prods = document.querySelectorAll('a');

    // Removing active class if prod id and link id does not match
    prods.forEach(function(prod){
        if(prod.id != id){
            prod.classList.remove("activeNavbar");
        }
    })
}

// Racing car

var carImg = document.getElementById("carImg");
var startBtn = document.getElementById("start");
var stoptBtn = document.getElementById("stop");
var carStart;

var m = 0;
// Start car
startBtn.addEventListener('click', function(){
    carStart = setInterval(run, 10);

    function run() {
        // 1screen.width
        if (m == 1700){
            clearInterval(carStart);
            m = 0;
        }
        else {
            m += 5;
            carImg.style.marginLeft = m+'px';
        }
    }
})

// Stop car
stoptBtn.addEventListener('click', function(){
    clearInterval(carStart);
})


// Show Password
var pass = document.getElementById("password");
function myPass() {
    // Getting password input fields type which is password
    if(pass.type == "password") {
        // Changin password fields input type to text
        pass.type = "text";
    }
    else {
        // Changin password fields input type to password
        pass.type = "password";
    }
}

// Image Slider
var image = ['lux1.jpg','lux2.jpg','lux3.jpg','lux4.jpg','lux5.jpg'];

var my_img = document.getElementById("myImage");
var count_index = -1;

function setSlide(){
    count_index++;
    
    if(count_index >= image.length){
        count_index = 0;
        my_img.src = "./images/slider/"+image[count_index];
    }
    else{
        my_img.src = "./images/slider/"+image[count_index];
    }
    setTimeout("setSlide()", 2000);
}
Window.onload = setSlide();


// POPUP Modal

var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var modalDiv = document.getElementById("modal");
openBtn.addEventListener('click', function(){
    modalDiv.classList.add("modalshow");
});

closeBtn.addEventListener('click', function(){
    modalDiv.classList.remove("modalshow");
})

// Zoom image on click

var main_image = document.getElementById("kat");

function changeImg1() {
    main_image.src = "./images/kat/kat1.jpg";
}

function changeImg2() {
    main_image.src = "./images/kat/kat2.jpg";
}

function changeImg3() {
    main_image.src = "./images/kat/kat3.jpg";
}

function changeImg4() {
    main_image.src = "./images/kat/kat4.jpg";
}

// ToDo List
var addItem = document.getElementById("addItem");
var olItem = document.getElementById("olItem");

addItem.addEventListener('click', function(){
    var input = document.getElementById("input").value;
    var textCreate = document.createTextNode(input);
    var newElement = document.createElement("li");
    newElement.appendChild(textCreate);
    olItem.appendChild(newElement);
});


        

