var maxVideos = 5;
var count = 1;
$(document).ready(function () {
    $.get(
        "https://www.googleapis.com/youtube/v3/videos", {
            part: 'snippet',
            chart: 'mostPopular',
            kind: 'youtube#videoListResponse',
            maxResults: 12,
            regionCode: "EG",
            videoCategoryId: "17",
            key: 'AIzaSyCp6aDZUN_xlPsYne2CrLsD2KVnzKGpY_g'
        },
        function (data) {
            var output;
            $.each(data.items, function (i, item) {
                console.log(item);
                vidId = item.id;
                vidTitle = item.snippet.title.substring(1, 50);
                description = item.snippet.description.substring(1, 200);
                thumb = item.snippet.thumbnails.high.url;
                channelTitle = item.snippet.channelTitle;
                videoDate = item.snippet.publishedAt;
                Catagoryid = item.snippet.categoryId;
                cID = item.snippet.channelId;
                output = '<div class="card col-lg-6" > <a href="https://www.youtube.com/watch?v=' + vidId + '" target="_blank" ><img class="card-img-top" src="' + thumb + '" alt="Card image cap"> <div class="card-body"><h5 class="card-title">' + vidTitle + '</h5></a><p class="card-text">' + description + '</p><button  onclick="like(\'post' + count + '\');" id="post' + count + '" class="btn btn-default"><div class="like-button col" ><i class="fas fa-thumbs-up"></i> <span>like</span></div></button></div></div>';
                $('#trending').append(output);
                count++;
            })

        }
    );
});

function like(s) {
    id = s;
    console.log(s);
    e = document.getElementById(id);
    if (e.classList.contains('btn-default')) {
        e.classList.remove('btn-default');
        e.classList.add('btn-primary');
    } else {
        e.classList.remove('btn-primary');
        e.classList.add('btn-default');
    }
}