$(document).ready(function() {
        console.log("hello js call ");
        var state = false;
    
        //$("input:text:visible:first").focus();
    
        $('#accesspanel').on('submit', function(e) {
    
            e.preventDefault();
    
            state = !state;
    
            if (state) {
                document.getElementById("litheader").className = "poweron";
                document.getElementById("go").className = "";
                document.getElementById("go").value = "Initializing...";
            }else{
                document.getElementById("litheader").className = "";
                document.getElementById("go").className = "denied";
                document.getElementById("go").value = "Access Denied";
            }
    
        });
    
    });