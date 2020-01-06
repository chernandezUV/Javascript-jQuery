//<reference path="jquery-1.6.2.js" />
//<reference path="jquery-ui-1.8.16.custom.js" />

$(function () {
    $("#target").click(function (){
        $(this).addClass(".leftTarget","slow"
            // right:-200
            // "width": "+=20",
            // "height": "+=20",
            // "background-color": "red"
        );

        // $(this).effect("explode",{pieces:16},2000,function () { 
        //     alert("Explosion done!!");
        //  })
    })
});