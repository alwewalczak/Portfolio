$(function(){

    var $allLinks = $(".menu li a");
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

        var currentScrollTop = $("body").scrollTop();
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

        console.log($(sectionId).offset().top);
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
        var container = document.querySelector(".mobile-section");
        if (mobile.matches) {
            container.classList.add("mobile");
        } else {
            container.classList.remove("mobile");
        }
    }

        var navBtn = document.querySelector(".nav");
        navBtn.addEventListener("click",function(){
            var container = document.querySelector(".mobile-section");
            container.classList.toggle('expanded');
        });

});
