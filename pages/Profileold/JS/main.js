var arrayValue

function user() {

  fetch('https://randomuser.me/api/?results=2').then(response => {
    return response.json();
  }).then(data => {
    arrayValue = data.results;
    createContent();
  }).catch(err => {});
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function createContent() {
  var userImage = arrayValue[0].picture.large;
  var tweets = getRandomInt(1, 10);
  var userCover = "https://picsum.photos/1500/300";
  document.getElementById('cover').style.backgroundImage = ('url(' + userCover + ') ');
  document.getElementById('avatar').style.backgroundImage = ('url(' + userImage + ') ');
  document.getElementById('tweets').innerHTML = (tweets);
  var name = arrayValue[0].name.first + ' ' + arrayValue[0].name.last;
  let a = document.createElement('a');
  a.innerHTML = (name);
  document.getElementById('profile-element').innerHTML = '@' + arrayValue[0].name.first;
  document.getElementById('profile-fullname').insertAdjacentElement('afterbegin', a);
  for (i = 0; i < tweets; i++) {
    let li = document.createElement('li');
    li.classList.add('tweet-card');
    li.classList.add('twitter-img');
    let div = document.createElement('div');
    div.classList.add('tweet-content');
    div.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil amet consequuntur sint aperiam<br>quidem asperiores similique aut atque ratione ipsam corrupti quis neque illo, unde placeat rerum hic cum<br>nobis praesentium magnam facilis, nulla voluptatum commodi velit! Doloremque, voluptates ex dolorum quam<br>sequi laborum repellendus voluptate aperiam quibusdam, itaque deserunt laudantium '
    li.appendChild(div);
    document.getElementById('tweet-list').appendChild(li);
  }

  let d = document.createElement('div');
  let icon = document.createElement('i');
  let sp = document.createElement('span');
  icon.classList.add('far');
  icon.classList.add('fa-envelope');
  sp.innerHTML = arrayValue[0].email;
  d.appendChild(icon);
  d.appendChild(sp);
  d.style.display = 'flex';
  d.style.justifyContent = 'space-between';
  d.style.marginBottom = ' 10px';
  document.getElementById('info').appendChild(d);


  d = document.createElement('div');
  icon = document.createElement('i');
  sp = document.createElement('span');
  icon.classList.add('far');
  icon.classList.add('fa-calendar-alt');
  sp.innerHTML = arrayValue[0].dob.date.substr(0, 10);
  d.appendChild(icon);
  d.appendChild(sp);
  d.style.display = 'flex';
  d.style.justifyContent = 'space-between';
  d.style.marginBottom = ' 10px';
  document.getElementById('info').appendChild(d);

  d = document.createElement('div');
  icon = document.createElement('i');
  sp = document.createElement('span');
  icon.classList.add('fas');
  icon.classList.add('fa-map-marked-alt');
  sp.innerHTML = (arrayValue[0].location.street.number + ' ' + arrayValue[0].location.street.name + ', ' + arrayValue[0].location.city);
  d.appendChild(icon);
  d.appendChild(sp);
  d.style.display = 'flex';
  d.style.justifyContent = 'space-between';
  d.style.marginBottom = ' 10px';
  document.getElementById('info').appendChild(d);

  d = document.createElement('div');
  icon = document.createElement('i');
  sp = document.createElement('span');
  icon.classList.add('fas');
  icon.classList.add('fa-phone-alt');
  sp.innerHTML = (arrayValue[0].phone);
  d.appendChild(icon);
  d.appendChild(sp);
  d.style.display = 'flex';
  d.style.justifyContent = 'space-between';
  d.style.marginBottom = ' 10px';
  document.getElementById('info').appendChild(d);


}