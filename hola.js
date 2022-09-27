//$("h1").hide();
//Jquery("h1").hide();es lo mismo
/*$(document).ready(function(){

}); es lo mismo que lo de abajo*/

$(function(){
    $("#segundo").css({"background-color" : "red"});
    $("#primero").css({"background-color" : "blue"});
    $("#boton_hide").click(function(){
        $("#segundo").hide();//funcion por defecto jquery
    });
    $("#boton_show").dblclick(function(){
        $("#segundo").show();
    });
    $("#primero").mouseenter(function(){
        $("#primero").hide();
    });
    $("#primero").mouseleave(function(){
        $("#primero").show();
    });
    $("#segundo").animate({width:"300px"});
    $("#boton_alert").click(function(){
        alert($("#segundo").attr("title"));
    });
    $("#boton_cambiar").click(function(){
        $("#segundo").append("<b>Añadido</b>");
        $("#segundo").prepend("<b>KLK </b>");
        $("#primero").after("<p>Hola</p>");
        $("#tercero").before("<b>Adios </b>");
        $("#primero").remove();
        $("#buton-hide").empty();
    });
    $("#boton_style").click(function(){
        $("h1").addClass("red")
    });
    $("#boton_nonstyle").click(function(){
        $("h1").removeClass()
    });
    $("#boton_togglestyle").click(function(){
        $("h1").toggleClass("blue")
    });
});