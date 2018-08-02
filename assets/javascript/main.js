// close the modal if escape is pressed
$(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $(".modal").hide();
    }
  });
  //close the modal if the x is clicked on
  $("body").on("click", ".close", function () {
    $(".modal").hide();
  });
  //close the modal if the anywhere but the modal is clicked on
  $("body").on("click", function (event) {
    $(".modal").hide();
  });

  $("body").on("click", ".nav-button", function () {
    $(".modal").show();
    $(".modal-text").append("<div><a href='#aboutMe'>About Me</a></div>");
    $(".modal-text").append("<div><a href='#projects'>Projects</a></div>");
    $(".modal-text").append("<div><a href='#contact'>Contact</a></div>");
  });




  

  $(".modal").show();
  $(".modal-text").append("<div><a href='#aboutMe'>About Me</a></div>");
  $(".modal-text").append("<div><a href='#projects'>Projects</a></div>");
  $(".modal-text").append("<div><a href='#contact'>Contact</a></div>");