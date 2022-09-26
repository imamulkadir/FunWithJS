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

            document.body.style.backgroundColor = inputColor;
        })