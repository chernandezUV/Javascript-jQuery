﻿//<reference path="jquery-1.6.2.js" />
//<reference path="jquery-ui-1.8.16.custom.js" />

$(function () {

    $("#dialog").dialog(
        {
            autoOpen: false,
            modal: true,
            resizable: false,
            draggable: false,
            position: "top",
            buttons: {
                "Yes, I do!": function () {
                    $("#dialog").dialog("close");
                    $("#dialogDecision").text("Yes you did!!");
                },
                "No": function () { }
            }
        }
     );

    $("#openDialog").click(function () {
        $("#dialog").dialog("open");
    });

    //$("#progress").progressbar({ value: 60 });

    $("#progress").progressbar({ value: 100 });

    var value = 100;

    // countdown();

    function countdown() {
        value--;
        $("#progress").progressbar("option", "value", value);
        $("#countdown").text(value);

        if (value > 0) {
            setTimeout(countdown, 100);
        }
        else {
            $("#countdown").text("completed");
            $("#progress").progressbar("disable");
        }
    }

    $("#slider").slider({ min: 0, max: 100, value: 100, slide: function (event, ui) {
        $("#slider").prev().css({ opacity: ui.value / 100 });
    }
    });

    //TABS
    $("#tabs").tabs();
    
    //ACORDION
    $("#accordian").accordion({autoHeight:false, collapsible: true, change : function (event, ui) { 
        console.log(event);
        console.log(ui);
         }});
    
    $("#accordian").accordion("activate","#linq")

    //AUTOCOMPLETE
    var classes = [
        "C#",
        "Entity Framework",
        "LINQ",
        "ASP.NET MVC",
        "jQuery UI",
        "CSS",
        "Ruby",
        "Jquery",
        "JavaScript",
        "Design"
    ];

    $("#search").autocomplete({source: "autocompletejson.ashx"});

    //BUTTONS
    $("#buttons").children()
    .button({icons:{
        primary:"ui-icon-search",
        secondary: "ui-icon-wrench"
    }})

    .click(function () { 
        alert($(this).value)
     });

     //RADIOS AND CHECKBOX
     $("#radios").buttonset();
     $("#checks").buttonset();

     $("#dateselection").datepicker();
});