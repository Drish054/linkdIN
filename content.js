function changeProfilePictures() {
    var images = document.getElementsByClassName('pv-top-card--list > li > a > img');
    for (var i = 0; i < images.length; i++) {
        images[i].src = 'https://source.unsplash.com/200x200/?bird';
    }
}

changeProfilePictures();