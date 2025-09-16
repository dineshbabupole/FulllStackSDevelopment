$(document).ready(function(){
    $("#add").click(function(){
        let val = $("input").val();
        if(val){
            $("ul").append(`
                <li>
                    ${val} 
                    <button class="complete-btn">complete</button>
                    <button class="delete-btn">delete</button>
                </li>
            `);
            $("input").val(''); 
        }
    });
    $("ul").on("click", ".complete-btn", function(){
        $(this).parent().css("background-color","yellow");
    });
    $("ul").on("click", ".delete-btn", function(){
        $(this).parent().remove();
    });
});
