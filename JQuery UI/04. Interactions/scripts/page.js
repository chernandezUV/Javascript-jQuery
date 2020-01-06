//<reference path="jquery-1.6.2.js" />
//<reference path="jquery-ui-1.8.16.custom.js" />

$(function () 
{ 
    // $("#draggables").children().draggable();
    $("#d1").draggable({revert: "Invalid"});
    $("#d2").draggable({axis: "y", snap:"#d1, #d3", helper: function () {
        return $("<div>Im a helper</div>")
    }});
    //grid:[50,100];
    
    $("#d3").draggable({contaiment: "#draggables",
    handle: "header"});

    $("#d1, #d2, #d3").draggable("option", "stack", ".ui-draggable");



    //TRASH
    $("#trash").droppable({
        accept: "#d3",
        drop: function (event,ui) { 
            ui.draggable.fadeOut(function () {
                ui.draggable.remove();
            });
         }
    });

    //SORTABLE
    $("#sortable").sortable({axis:"y", placeholder: "placeholder"});

    $("#d3").resizable({aspectRatio: true, alsoResize:"#d2"});
 });