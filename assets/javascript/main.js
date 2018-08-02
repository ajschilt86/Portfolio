// close the modal if escape is pressed
$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $(".modal").hide();
        console.log("working")
    }
});
//close the modal if the x is clicked on
$("body").on("click", ".close", function () {
    $(".modal").hide();
    console.log("working")
});
//close the modal if the anywhere but the modal is clicked on
$(".modal-content").on("click", function (event) {
    $(".modal").hide();
    console.log("working")
});

$(".nav-modal").on("click", function (event) {
    $(".modal").show();
    $(".modal-text").html("<div><a href='#aboutMe'>About Me</a></div>"
    + "<div><a href='#projects'>Projects</a></div>"
    + "<div><a href='#contact'>Contact</a></div>");
    console.log("working")
});


AOS.init();


