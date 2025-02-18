$(document).ready(function(){
    $("#submit1").click(function(e){
        e.preventDefault();
        $(".error").remove();
        $(".success").remove();

        let isValid = true;
        let name = $("#name").val().trim();
        if(name === ''){
            $("#name").after("<span class='error'>Username is required</span>");
            isValid=false;
        }

        let email = $("#email").val().trim();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            $("#email").after("<span class='error'>Email is required.</span>");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email").after("<span class='error'>Enter a valid email.</span>");
            isValid = false;
        }

        let phone = $("#phoneNo").val().trim();
        let phonePattern = /^[0-9]+$/;
        if (phone === "") {
            $("#phoneNo").after("<span class='error'>Phone number is required.</span>");
            isValid = false;
        } else if (!phonePattern.test(phone)) {
            $("#phoneNo").after("<span class='error'>Only numbers are allowed.</span>");
            isValid = false;
        }

        if (isValid) {
            $("form").after("<p class='success'>Form submitted successfully!</p>");
        }
    })
})