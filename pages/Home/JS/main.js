function activeDay(s) {
    if (s === "Yesterday") {
        document.getElementById("Yesterday").classList.add("active-day");
        document.getElementById("Today").classList.remove("active-day");
        document.getElementById("Tomorrow").classList.remove("active-day");

        document.getElementById("Today-matches").style.display = "none";
        document.getElementById("Tomorrow-matches").style.display = "none";
        document.getElementById("Yesterday-matches").style.display = "flex";
    } else if (s === "Today") {
        document.getElementById("Today").classList.add("active-day");
        document.getElementById("Yesterday").classList.remove("active-day");
        document.getElementById("Tomorrow").classList.remove("active-day");

        document.getElementById("Yesterday-matches").style.display = "none";
        document.getElementById("Tomorrow-matches").style.display = "none";
        document.getElementById("Today-matches").style.display = "flex";

    } else if (s === "Tomorrow") {
        document.getElementById("Tomorrow").classList.add("active-day");
        document.getElementById("Today").classList.remove("active-day");
        document.getElementById("Yesterday").classList.remove("active-day");

        document.getElementById("Today-matches").style.display = "none";
        document.getElementById("Yesterday-matches").style.display = "none";
        document.getElementById("Tomorrow-matches").style.display = "flex";

    }
}


function like(s) {
    id = s;
    e = document.getElementById(id);
    if (e.classList.contains('like-color'))
        e.classList.remove("like-color");
    else
        e.classList.add("like-color");
}


function next() {
    console.log(1);
    if (document.getElementById('Yesterday').classList.contains('active-day')) {
        let Y = document.getElementsByClassName('Yesterday');
        for (i = 0; i < 3; i++) {
            Y[i].classList.add('disnone');
            Y[i + 3].classList.remove('disnone');
        }
    } else if (document.getElementById('Today').classList.contains('active-day')) {
        let Y = document.getElementsByClassName('Today');
        for (i = 0; i < 3; i++) {
            Y[i].classList.add('disnone');
            Y[i + 3].classList.remove('disnone');
        }
    }
}

function prev() {
    console.log(1);
    if (document.getElementById('Yesterday').classList.contains('active-day')) {
        let Y = document.getElementsByClassName('Yesterday');
        for (i = 0; i < 3; i++) {
            Y[i].classList.remove('disnone');
            Y[i + 3].classList.add('disnone');
        }
    } else if (document.getElementById('Today').classList.contains('active-day')) {
        let Y = document.getElementsByClassName('Today');
        for (i = 0; i < 3; i++) {
            Y[i].classList.remove('disnone');
            Y[i + 3].classList.add('disnone');
        }
    }
}

/*
function content()
{
    elementInsideDiv.insertAdjacentHTML('afterend', '<div class="container"><div class="post pv"><div class="post-owner row"><div class="post-owner-img col-sm-2 col-lg-2"></div><div class="post-owner-info col-sm-10 col-lg-10"><h4>User Name</h4><p>24/12/2019 11:47 PM</p></div><h5>Barcelona vs Real Madrid</h5><div class="wrapper row"><video class="col-sm-12" controls><source src="video/video.mp4" type="video/mp4"></video></div></div><hr/><div class="reactions row"><div class="like-button col-sm-4" onclick="like('post1')" id="post1"><i class="fas fa-thumbs-up"></i><span>like</span></div><div class="comment-button col-sm-4" onclick="comment('post1')"><i class="fas fa-comment-alt"></i><span>comment</span></div><div class="share-button col-sm-4" onclick="share('post1')"><i class="fas fa-share"></i><span>share</span></div></div></div></div></div>') ;
}*/

function onSuccess(response) {
    response.json().then(go);


}



function go(objectz) {
    for (var i = 0; i < objectz.articles.length; i++) {
        var nm = objectz.articles[i].source.name;
        var ds = objectz.articles[i].description;
        var tm = objectz.articles[i].publishedAt;
        output = '<li><a target="_blank" href="#">' + nm + '</a><p>' + ds + '</p></li>';
        $('#trending').append(output);
    }
}
fetch('https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=24b0427b2faf4682bf8d1f4018ffcd4b')
    .then(onSuccess)
//------------------------------
function onSuccess1(response) {
    response.json().then(go1);


}


var count = 1;

function go1(objectz) {

    for (var i = 0; i < objectz.results.length; i++) {
        console.log(objectz.results[i])
        var nm = objectz.results[i].name.first + " " + objectz.results[i].name.last;
        var pc = objectz.results[i].picture.large;
        var dt = objectz.results[i].registered.date;
        if (i % 2 == 0) {
            output = '<div class="container ps"><div class="post pp"><div class="post-owner row"><div class="post-owner-img col-3 col-md-2"style = "background-image: url(\'' + pc + '\');"></div> <div class = "post-owner-info col-9 col-md-10"><h4> ' + nm + ' </h4> <p> ' + dt + ' </p> </div><hr /><h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet metus eu duicondimentum viverra id a ante. Sed metus tellus, gravida sit amet lorem id, tempusullamcorper lorem. Duis commodo libero id eros vehicula, ut venenatis ipsum tempus.Curabitur quis magna enim. Aliquam vitae massa ac enim fermentum finibus vel ac quam. Loremipsum dolor sit amet, consectetur.</h4></div><hr /><div class="reactions row"><div class="like-button col" onclick="like(\'post' + count + '\')" id="post' + count + '"><i class="fas fa-thumbs-up"></i><span> like</span></div><div class="comment-button col" onclick="comment(\'post' + count + '\')"><i class="fas fa-comment-alt"></i><span> comment</span></div><div class="share-button col" onclick="share(\'post' + count + '\')"><i class="fas fa-share"></i><span> share</span></div></div></div></div>';
        } else {

            output = '<div class="container ps"> <div class = "post pv"><div class = "post-owner row"><div class = "post-owner-img col-3 col-md-2"style = "background-image: url(\'' + pc + '\');"></div> <div class = "post-owner-info col-9 col-md-10"><h4> ' + nm + ' </h4> <p> ' + dt + ' </p> </div><h5>Barcelona vs Real Madrid</h5><div class="wrapper row"><video class="col-sm-12" controls><source src="video/video.mp4" type="video/mp4"></video></div></div><hr /><div class="reactions row"> <div class = "like-button col"  onclick = "like(\'post' + count + '\')"  id = "post' + count + '">   <i class = "fas fa-thumbs-up"> </i> <span> like </span> </div> <div class = "comment-button col"   onclick = "comment(\'post' + count + '\')">   <i class = "fas fa-comment-alt"> </i> <span> comment </span> </div> <div class = "share-button col"  onclick = "share(\'post' + count + '\')">     <i class = "fas fa-share"> </i> <span> share </span> </div> </div> </div> </div>';
        }

        $('#toappend').append(output);
        count++;
    }
}
fetch('https://randomuser.me/api/?results=10')
    .then(onSuccess1)