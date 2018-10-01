// close the modal if escape is pressed
$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $(".modal").hide();
        $("body").removeClass();
    }
});
//close the modal if the x is clicked on
$("body").on("click", ".close", function () {
    $(".modal").hide();
    $("body").removeClass();
});
//close the modal if the anywhere but the modal is clicked on
$(".modal-content").on("click", function (event) {
    $(".modal").hide();
    $("body").removeClass();
});

$(".nav-modal").on("click", function (event) {
    $(".modal").show();
    $(".modal-text").html(
          "<div class='modal-link'><a href='#aboutMe'>About Me</a></div>"
        + "<div class='modal-link'><a href='#projects'>Projects</a></div>"
        + "<div class='modal-link'><a href='#skills'>Skills</a></div>"
        + "<div class='modal-link'><a href='#contact'>Contact</a></div>");
        // + "<div class='modal-icons'><a href='https://github.com/ajschilt86' target='_blank'><img src='assets/images/github_icon.svg' alt='GitHub' class='logo'></a>"
        // + "<div class='modal-icons'><a href='https://www.linkedin.com/in/anthonyschilt/' target='_blank'><img src='assets/images/li_icon.svg' alt='LinkedIn logo' class='logo'></a></div>");
    $("body").addClass("modal-open");
});

// $(".button").on("click", function (event) {
//     event.preventDefault();
// })


AOS.init();
