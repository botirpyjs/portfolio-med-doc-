// HTML, CSS, JS, BOOTSTRAP, JQUERY, (SVG)
// #home
// #about
// #team
// #testimonals
// #contact
//      .contact
//      .registry
//
// homeBtn click
$(".span").click(()=>{
    $("#home").show()
    $("#about").hide()
    $("#team").hide()
    $("#testimonals").hide()
    $("#contact").hide()
})
// aboutBtn click
$(".span1").click(()=>{
    $("#home").hide()
    $("#about").show()
    $("#team").hide()
    $("#testimonals").hide()
    $("#contact").hide()
})
// teamBtn click
$(".span2").click(()=>{
    $("#home").hide()
    $("#about").hide()
    $("#team").show()
    $("#testimonals").hide()
    $("#contact").hide()
})
// testimonalsBtn click
$(".span3").click(()=>{
    $("#home").hide()
    $("#about").hide()
    $("#team").hide()
    $("#testimonals").show()
    $("#contact").hide()
})
// contactBtn click
$(".span4").click(()=>{
    $("#home").hide()
    $("#about").hide()
    $("#team").hide()
    $("#testimonals").hide()
    $("#contact").show()
    $(".login").show()
    $(".family").hide()
    $(".email").hide()
})
// login
$(".login").show()
$(".family").hide()
$(".email").hide()
$(".a_cont").click(()=>{
    $(".login").show()
    $(".family").hide()
    $(".email").hide()
    $(".btnn").css('margin-left', '555px')
})
// registration
$(".a_reg").click(()=>{
    $(".login").hide()
    $(".family").show()
    $(".email").show()
    $(".btnn").css('margin-left', '100px')
})
// Home page show/hide
$("#home").show()
$("#about").hide()
$("#team").hide()
$("#testimonals").hide()
$("#contact").hide()