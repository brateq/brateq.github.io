$(document).ready(function() {
$(".select").click(function() {
    var e;
    e = $(this).attr("id"),
    $(".is-open").fadeOut(0),
    $("#" + e + "-desc").addClass("is-open").fadeIn("slow")
}),
$('a[href^="#"]').on("click", function(e) {
    var t, n;
    e.preventDefault(),
    n = this.hash,
    t = $(n),
    $("html, body").stop().animate({
        scrollTop: t.offset().top
    }, 900, "swing", function() {
        window.location.hash = n
    })
})
})