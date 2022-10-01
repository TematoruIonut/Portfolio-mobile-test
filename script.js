// JavaScript Document
$(document).ready(function(){
    $(".open_menu").click(function() {
        $(".main_nav").show();
    }); 
    $(".close_menu,  .mobile_link").click(function(){
        $(".main_nav").hide();
    }); 
});

$('.main_nav>ul>li>a').on('click', function(){
if(window.outerWidth < 900){$('.main_nav').hide();}
});

/* Mobile nav open/close */





$(document).ready(function () {
  var count = 0;
  var wordsArray = ["graphic designer", "web designer", "developer", "freelancer"];
  setInterval(function () {
    count++;
    $("#replace").fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 2000);
});

/* Hero paragraph word replace */





var minDistance = 50;
var startDistance = 850;
$(window).scroll(function() {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > startDistance - minDistance) {
        $(".illustrator").delay(200).animate({width: "95%"}, 2500);
        $(".photoshop").delay(200).animate({width: "85%"}, 2500);
        $(".xd").delay(200).animate({width: "97%"}, 2500);
        $(".html").delay(200).animate({width: "91%"}, 2500);
        $(".css").delay(200).animate({width: "92%"}, 2500);
        $(".javascript").delay(200).animate({width: "96%"}, 2500);
    } 
});

/* About - skill bars animation */





function openLogos() {
  document.getElementById("fullscreen_logos").style.display = "block";
}
function closeLogos() {
  document.getElementById("fullscreen_logos").style.display = "none";
}

/* DesignStudio projects open/close*/

function openImg() {
  document.getElementById("fullscreen_naturall").style.display = "block";
}
function closeImg() {
  document.getElementById("fullscreen_naturall").style.display = "none";
}

/*NaturAll project open/close*/





var slideIndex = 1;
showLogo(slideIndex);
function changeLogo(n) {
  showLogo(slideIndex += n);
}
function showLogo(n) {
  var i;
  var x = document.getElementsByClassName("logoSlide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

/*DesignStudio projects slideshow*/






let mybutton = document.getElementById("scrollBack");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  };
};

/*Scroll back to top button*/





function openModal() {
  document.getElementById("fullscreen_LAprojects").style.display = "block";
}

function closeModal() {
  document.getElementById("fullscreen_LAprojects").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("taskSlide");
  var dots = document.getElementsByClassName("LAproject");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
      
/*LAproject zoom-in & slideshow*/



