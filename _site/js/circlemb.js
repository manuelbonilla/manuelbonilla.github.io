$(document).ready(function(){
            //Center the "info" bubble in the  "circleMB" div
            var divTop = ($("#CircleMB").height() - $("#MiddleBubble").height())/2;
            var divLeft = ($("#CircleMB").width() - $("#MiddleBubble").width())/2;
            $("#MiddleBubble").css("top",divTop + "px");
            $("#MiddleBubble").css("left",divLeft + "px");
            
            //Arrange the icons in a circleMB centered in the div
            numItems = $( "#CircleMB img" ).length; //How many items are in the circleMB?
            start = 0.25; //the angle to put the first image at. a number between 0 and 2pi
            step = (2*Math.PI)/numItems; //calculate the amount of space to put between the items.
            
            //Now loop through the buttons and position them in a circleMB
            $( "#CircleMB img" ).each(function( index ) {
                radius = ($("#CircleMB").width() - $(this).width())/2; //The radius is the distance from the center of the div to the middle of an icon
                //the following lines are a standard formula for calculating points on a circleMB. x = cx + r * cos(a); y = cy + r * sin(a)
                //We have made adjustments because the center of the circleMB is not at (0,0), but rather the top/left coordinates for the center of the div
                //We also adjust for the fact that we need to know the coordinates for the top-left corner of the image, not for the center of the image.
                tmpTop = (($("#CircleMB").height()/2) + radius * Math.sin(start)) - ($(this).height()/2);
                tmpLeft = (($("#CircleMB").width()/2) + radius * Math.cos(start)) - ($(this).width()/2);
                start += step; //add the "step" number of radians to jump to the next icon
                
                //set the top/left settings for the image
                $(this).css("top",tmpTop);
                $(this).css("left",tmpLeft);
            });
            
            //set the highlight and bubble default based on the homepageGridDefault class
            currentGridSelector = "";
            $("#BubbleText").html("<p>" + " " + "</p>");

            //Setup the grid to change the highlighted bubble on mouseover ans click
            $("#CircleMB img").mouseover(function(){
                //if the selected option has changed, deactivate the current selection
                if(currentGridSelector != $(this).attr("id"))
                {
                    $("#" + currentGridSelector).attr("src", "/img/" + currentGridSelector + "-icon-off.png");
                }
                //turn on the new selection
                $(this).attr("src", "/img/" + $(this).attr("id") + "-icon-on.png");
                //set the content of the center bubble
                $("#BubbleText").html("<p>" + $(this).data("bubble1")  + "</p>");
                currentGridSelector = $(this).attr("id");
            });

            $("#CircleMB img").mouseleave(function(){
                $("#BubbleText").html("<p>" + " " + "</p>");
                $(this).attr("src", "/img/" + $(this).attr("id") + "-icon-off.png");
                currentGridSelector = "";
            });
        });