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