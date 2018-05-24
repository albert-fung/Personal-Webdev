//open and closing navbar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //adding open class to show if navbar is open
    $(".sidenav").addClass("open");
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}

//Stick nav bar
$(window).on('scroll',function()
{if($(window).scrollTop() > 10)
  {
    $("#menu").addClass('fixed');
    $('#closebtn').addClass('fixed');
  }
  else {
    $("#menu").removeClass('fixed');
    $("#closebtn").removeClass('fixed');
  }

})
//Loading on refresh animations
$(document).ready(function(){
  $(".Title").fadeIn(3000);
  $("#menu").fadeIn(3000);
  $(".intro").fadeIn(3000);
  $(".slider_wrapper").slick({
    dots:true,
    autoplay:true,
    autoplaySpeed: 2000,
    centerMode:true,
    slidesToShow:3,
    slidesToScroll:1

  });

  //if navbar is open,will close if webpage is clicked outside navbar
  $(".parallax").mousedown(function(event)
    {
      var opened = $(".sidenav").hasClass("open");
      if (opened===true)
      {
        closeNav();
      }
    })
  $("#menu").click(openNav);
});
