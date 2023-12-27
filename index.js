$(".navbar .home").click(function() {
    $(".navbar .home").addClass("change-1");
    $(".navbar .services").removeClass("change-3");
    $(".navbar .contact").removeClass("change-4");
    $(".navbar .about").removeClass("change-2");
});

$(".navbar .about").click(function() {
    $(".navbar .about").addClass("change-2");
    $(".navbar .home").removeClass("change-1");
    $(".navbar .contact").removeClass("change-4");
    $(".navbar .services").removeClass("change-3");
});

$(".navbar .services").click(function() {
    $(".navbar .services").addClass("change-3");
    $(".navbar .home").removeClass("change-1");
    $(".navbar .about").removeClass("change-2");
    $(".navbar .contact").removeClass("change-4");
});

$(".navbar .contact").click(function() {
    $(".navbar .contact").addClass("change-4");
    $(".navbar .services").removeClass("change-3");
    $(".navbar .home").removeClass("change-1");
    $(".navbar .about").removeClass("change-2");
});


$(document).scroll(function() {
    $(".navbar").addClass("bg-change");
    setTimeout(() => {
        if (window.scrollY === 0 && $(".navbar").classList.contains("bg-change")) {
          $(".navbar").classList.remove("bg-change");
        }
      }, 1000);
})
