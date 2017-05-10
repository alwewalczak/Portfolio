$(function(){

    var $allLinks = $(".menu li a");
    var array = [];

    $allLinks.each(function(){
        array.push($(this).attr("href"));
    })
    console.log(array);

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


        if($("body").scrollTop() > 300){
            $("#about").addClass("animate");
        }
    });

    $allLinks.on("click", function(){
        var sectionId = $(this).attr("href");
        $(sectionId).offset().top;

        console.log($(sectionId).offset().top);
        $("html, body").animate({
            scrollTop: $(sectionId).offset().top}, 800, function(){

            });


    })





});
