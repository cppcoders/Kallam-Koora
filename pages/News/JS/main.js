function onSuccess(response) {
    response.json().then(go);


}

function onFail(error) {
    console.log('Error: ' + error);

}

function go(objectz) {
    console.log(objectz)
    for (var i = 0; i < objectz.articles.length; i++) {
        var nm = objectz.articles[i].source.name;
        var ds = objectz.articles[i].description;
        var tm = objectz.articles[i].publishedAt;
        output = '<li><a target="_blank" href="#">' + nm + '</a> <a href="#" class="float-right">' + tm + '</a><p>' + ds + '</p></li>';
        $('#trending').append(output);
    }
}
fetch('https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=24b0427b2faf4682bf8d1f4018ffcd4b')
    .then(onSuccess)
    .catch(onFail);