/* Exercise 2: Color picker */
function setPreviewColor(color){
    $(".preview").css('background-color', color);
    $(".color-code").css('color', color);
}

$(document).keyup(function(){
    var color = $("#color").val();
    setPreviewColor(color);
});

