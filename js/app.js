

$(window).scroll(function() 
        {
        if ($(this).scrollTop() > 100)
           $('header').addClass("fixedSticky");
        else
           $('header').removeClass("fixedSticky");
});

 

$(document).ready(function() {
        $("nav a").on("click", function (event) {
          event.preventDefault();
          $("html,body").animate({scrollTop: $(this.hash).offset().top - 100}, 100);
        });
        
});




/*Menu Onclick*/
let sideMenuToggle = $(".triger");
let sideMenu = $("nav");
if (sideMenuToggle.length) {
    sideMenuToggle.on("click", function () {
        $("body, header").addClass("activeMenu");
        sideMenu.addClass("activeMenu");
        $(function () {
            setTimeout(function () {
                $("#close_side_menu").fadeIn(300);
            }, 300);
        });
    })
}

$(".close, nav a").on("click", function () {
        $("body, header").removeClass("activeMenu");
        sideMenu.removeClass("activeMenu");
        
        $(() => {
            setTimeout(() => {
                $("#close_side_menu").fadeOut();
            }, 100);
        });
});
