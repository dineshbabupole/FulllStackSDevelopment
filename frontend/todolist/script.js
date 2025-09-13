$(document).ready(function(){
   
    $("#add").click(function(){
        let val=$("input").val();
        if(val){
        $("ul").append(`<li>${val}</li>`);
        }
    })
    $("#remove").click(function(){
        $("ul li:first").remove();
    })
})