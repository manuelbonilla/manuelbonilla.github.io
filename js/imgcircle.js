$(document).ready(function(){
            //Center the "info" bubble in the  "circle" div
            var divTop = ($("#divCircle").height() - $("#middleBubble").height())/2;
            var divLeft = ($("#divCircle").width() - $("#middleBubble").width())/2;
            $("#middleBubble").css("top",divTop + "px");
            $("#middleBubble").css("left",divLeft + "px");
            
            //Arrange the icons in a circle centered in the div
            numItems = $( "#divCircle img" ).length; //How many items are in the circle?
            start = 0.25; //the angle to put the first image at. a number between 0 and 2pi
            step = (2*Math.PI)/numItems; //calculate the amount of space to put between the items.
            
            //Now loop through the buttons and position them in a circle
            $( "#divCircle img" ).each(function( index ) {
                radius = ($("#divCircle").width() - $(this).width())/2; //The radius is the distance from the center of the div to the middle of an icon
                //the following lines are a standard formula for calculating points on a circle. x = cx + r * cos(a); y = cy + r * sin(a)
                //We have made adjustments because the center of the circle is not at (0,0), but rather the top/left coordinates for the center of the div
                //We also adjust for the fact that we need to know the coordinates for the top-left corner of the image, not for the center of the image.
                tmpTop = (($("#divCircle").height()/2) + radius * Math.sin(start)) - ($(this).height()/2);
                tmpLeft = (($("#divCircle").width()/2) + radius * Math.cos(start)) - ($(this).width()/2);
                start += step; //add the "step" number of radians to jump to the next icon
                
                //set the top/left settings for the image
                $(this).css("top",tmpTop);
                $(this).css("left",tmpLeft);
            });
            
            //set the highlight and bubble default based on the homepageGridDefault class
            currentGridSelector = "";
            // $("#" + currentGridSelector).attr("src", "img/home-" + currentGridSelector + "-icon-on.png");
            // $("#middleBubble").html("<p><b>" + $(".homepageGridDefault").data("bubble1") + "</b><br />" + $(".homepageGridDefault").data("bubble2") + "</p>");
            
            //Setup the grid to change the highlighted bubble on mouseover ans click
            $("#divCircle img").mouseover(function(){
                //if the selected option has changed, deactivate the current selection
                if(currentGridSelector != $(this).attr("id"))
                {
                    $("#" + currentGridSelector).attr("src", "/img/home-" + currentGridSelector + "-icon-off.png");
                }
                //turn on the new selection
                $(this).attr("src", "/img/home-" + $(this).attr("id") + "-icon-on.png");
                //set the content of the center bubble
                $("#Bubbletext").html("<p>" + $(this).data("bubble1")  + "</p>");
                currentGridSelector = $(this).attr("id");
            });
        });