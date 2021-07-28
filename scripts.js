//Below is used for navbar sticky when scrolling
window.onscroll = function() {myFunction()};
function myFunction() {
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//JQUERY below to allow for front page blur when hovering text
$(document).ready(function () {
    $(".theBlurEffect").hover(function () {
      $(".leftHalf").toggleClass("blur");
      $(".rightHalf").toggleClass("blur");
    });
   
  });

//Jquery below used for when clicked on home so it scrolls
  $(document).ready(function () {
    $(".about_me").click(function(){
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".target_scroll").offset().top
    },);
    });
});
//JQuery below used for when clicked about me so it scrolls down to about me 
  $(document).ready(function () {
    $(".about_me").click(function(){
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".target_scroll").offset().top
    },);
    });
});
//JQuery below used for when clicked about me so it scrolls down to projects
$(document).ready(function () {
  $(".project_page").click(function(){
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".target_scroll_2").offset().top
  },);
  });
});


//A scroll based on positioning of scroll
//from
/*$(document).scroll(function() {
  console.log($(window).scrollTop());
});
*/
$(window).on('scroll', function() {
  var scrollTop = $(this).scrollTop();

      if ( scrollTop >200 ) {
        $('.top_page').removeClass('active');
      }
      if ( scrollTop <200 ) {
        $('.top_page').addClass('active');
      }
      if(scrollTop > 201)
      {
        $('.about_current').addClass('active');
      }
      if ( scrollTop < 201 ) {
        $('.about_current').removeClass('active');
      }
      if(scrollTop > 1701)
      {
        $('.about_current').removeClass('active');
        $('.project_page').addClass('active');
      }
      if ( scrollTop <1701 ) {
        $('.project_page').removeClass('active');
      }
  });

