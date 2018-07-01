
$(document).ready(function () {

    $('button').click(function() {

        $('button').removeClass('selected');
        $(this).addClass('selected');

        var animal = $(this).text();
        var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?format=jsoncallback=?";
        var flickrOptions = {
            tags: animal,
            format: "json"
        };

        function displayPhotos(data) {
            var photosGrid;
            $.each(data.items, function(i, data){
                photosGrid += '<li>';
                photosGrid += '<a href="'+ data.link +'">';
                photosGrid += '<img src="'+ data.media.m +'" /></a><li>';
            });

    
            $("img").attr("src", data.media.m).appendTo("#animals-feed");
        }

        $.getJSON(flickrAPI, flickrOptions, displayPhotos);
    });

}); //load Javascript whe HTML is ready
