var triger = document.querySelector('.triger')
var body = document.querySelector('body')
var header = document.querySelector('header')
var nav = document.querySelector('nav')

triger.addEventListener('click', ()=>{
    triger.classList.toggle('activeMenu')
    body.classList.toggle('activeMenu')
    header.classList.toggle('activeMenu')
    nav.classList.toggle('activeMenu')
})

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
          $("html,body").animate({scrollTop: $(this.hash).offset().top - 80}, 100);
        });
});

