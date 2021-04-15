$(document).ready(function(){
    $(".email").click(function(){
        value = 'kellienatsumienge@gmail.com'; 
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(value).select();
        document.execCommand("copy");
        $temp.remove();

        /* Alert the copied text */
        //alert("Copied to Clipboard");
    });
});

