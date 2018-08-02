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

  $("body").on("click", function (event) {
    $(".modal").hide();
  });

  $(".nav-link").on("click", function (event) {
    $(".modal").show();
    $(".modal-text").text("Train Name was left blank");
  });