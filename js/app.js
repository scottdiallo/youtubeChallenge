$(function () {
    $('#submit-btn').click(function () {
        //$('#searchResults').empty();
        // var userInput = $('#query').val();
        getYoutube($('#query').val());

    });

    function getYoutube(userInput) {
        var youtubeChallenge = {
            url: 'https://www.googleapis.com/youtube/v3/search/',
            dataType: 'json',
            data: {
                part: 'snippet',
                key: 'AIzaSyDF7uuy4jI6iR6Df0d8A6XxVi64KD_aL24',
                q: userInput //this will be usr search query
            },
            success: function (data) {
                console.log(data);
                for (var i = 0; i < data.items.length; i++) {
                    var video = data.items[i];
                    console.log("https://www.youtube.com/watch?v=" + video.id.videoId);
                    $('#searchResults').append("<li> <b>" + video.snippet.title + "</b> </li>");
                    $('#searchResults').append("<a href='https://www.youtube.com/watch?v=' + video.id.videoId + '><img src=' + video.snippet.thumbnails.default.url + '></a>");
                }
            }
        };

        $.ajax(youtubeChallenge);
    }




    //console.log('hello world!');
    //    $('#submit-btn').click(function (event) {
    //        event.preventDefault();
    //        var userSearch = $('input').val();
    //        $('#searchResults').append('<h2>' + userSearch + '</h2>');
    //        var empty = $('input').val('');
    //    });


});
