
$(document).ready(function () {

    $('a').click(function() {

    var animal = $(this).text();
        
    // Set the flicker api url here
    const flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    // Set the tag display options
    var options = {
        tags: animal,
        format: "json"
    };

    // Get json format data using $.getJSON()
    $.getJSON(flickerAPI, options)
        .done(OnApiCallSuccess)
        .fail(OnApiCallError);

    // Api call success callback function
    function OnApiCallSuccess(data) {
     
        $.each(data.items, function(i, item) {

            $("<img class='photo-item'>").attr("src", item.media.m).appendTo("#animals-feed");
         
            // Load only the first 6 images for demo
            if (i === 29) return false;
        });

        
    }

    // Api call error callback function
    function OnApiCallError(jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
    }
        });

}); //load Javascript whe HTML is ready
