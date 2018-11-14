$(function(){

    var $allLinks = $(".mobile-nav li a, .menu li a");
    var array = [];

    $allLinks.each(function(){
        array.push($(this).attr("href"));
    })

    $(window).scroll(function(){

        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();

        for (var i = 0; i < array.length; i++) {
            var theID = array[i];
            var divPos = $(theID).offset().top;
            var divHeight = $(theID).height();

            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").closest("li").addClass("nav-active");
            } else {
                $("a[href='" + theID + "']").closest("li").removeClass("nav-active");
            }
        }

        if (windowPos + windowHeight == docHeight) {
            if (!$(".menu li:last-child").hasClass("nav-active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").closest("li").removeClass("nav-active");
                $(".menu li:last-child").addClass("nav-active");
            }
        }

        var currentScrollTop = $("body, html").scrollTop();
        var offsetAbout = $("#about").offset().top;
        var offsetContact = $("#contact").offset().top;

        if (currentScrollTop >= offsetAbout - windowHeight/2)
            $("#about").addClass("animate");

        if (currentScrollTop >= offsetContact - windowHeight/2)
            $("#contact").addClass("animate");

    });

    $allLinks.on("click", function(){
        var sectionId = $(this).attr("href");
        $(sectionId).offset().top;

        //console.log($(sectionId).offset().top);
        $("html, body").animate({
            scrollTop: $(sectionId).offset().top}, 800, function(){

            });

    })

    // add mobile menu

    var mobile = window.matchMedia("screen and (max-width: 768px) ");
    responsive(mobile);
    mobile.addListener(function(mobile) {
        responsive(mobile);
    });

    function responsive(mobile){
        var container = document.querySelector("body");
        if (mobile.matches) {
            container.classList.add("mobile");
        } else {
            container.classList.remove("mobile");
        }
    }

    // add validation to the form

    var form = document.querySelector("form");
    //console.log(form);
    form.addEventListener("submit", function(event){
        valid();
        event.preventDefault();
    })

    function valid(){
        var errorElement = document.querySelector(".error-message");
        var successElement = document.querySelector(".success-message");
        errorElement.innerText = "";
        successElement.innerText = "";

        var nameElement = document.querySelector("input[type=text]");
        var emailElement = document.querySelector("input[type=email]");
        var messageElement = document.querySelector("textarea");

        if (nameElement.value.length < 3){
            errorElement.innerText = "Imię powinno mieć co najmniej 3 znaki";
            return false;
        } else if (emailElement.value.length < 5 || emailElement.indexOf("@") === -1){
            errorElement.innerText = "Email powinien mieć co najmniej 5 znaków i zawierać znak @";
            return false;
        } else if (messageElement.value == ""){
            errorElement.innerText = "Pole wiadomości nie może być puste";
            return false;
        }

        successElement.innerText = "Dziękuję za wypełnienie formularza kontaktowego";
        return true;
    }

});
