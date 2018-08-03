// close the modal if escape is pressed
$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $(".modal").hide();
        $("body").removeClass();
        console.log("working")
    }
});
//close the modal if the x is clicked on
$("body").on("click", ".close", function () {
    $(".modal").hide();
    $("body").removeClass();
    console.log("working")
});
//close the modal if the anywhere but the modal is clicked on
$(".modal-content").on("click", function (event) {
    $(".modal").hide();
    $("body").removeClass();
    console.log("working")
});

$(".nav-modal").on("click", function (event) {
    $(".modal").show();
    $(".modal-text").html("<div class='modal-link'><a href='#aboutMe'>About Me</a></div>"
    + "<div class='modal-link'><a href='#projects'>Projects</a></div>"
    + "<div class='modal-link'><a href='#contact'>Contact</a></div>");
    $("body").addClass("modal-open");
    console.log("working")
});


AOS.init();
