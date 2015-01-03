$(document).ready(function(){
            //set the highlight and bubble default based on the homepageGridDefault class
            currentGridSelector = "";

            //Setup the grid to change the highlighted bubble on mouseover ans click
            $("img.social").mouseover(function(){
                //if the selected option has changed, deactivate the current selection
                if(currentGridSelector != $(this).attr("id"))
                {
                    $(currentGridSelector).attr("src", "/img/" + currentGridSelector + "-icon-off.png");
                }
                //turn on the new selection
                $(this).attr("src", "/img/" +  $(this).attr("id") + "-icon-on.png");
                //set the content of the center bubble
                currentGridSelector = $(this).attr("id");
            });

            $("img.social").mouseleave(function(){
                $(this).attr("src", "/img/" +  $(this).attr("id") + "-icon-off.png");
                currentGridSelector = "";
            });
        });