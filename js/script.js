var $title = $('.website-title-input');
var $link = $('.website-link-input');
var $enter = $('.enter');
var $bookmarkTitle = $('.bookmark-title');
var $bookmarkLink = $('.bookmark-link');

function Bookmark(title, link) {
  this.title = $title.val();
  this.link = $link.val();
}

function addBookmark() {
    var currentBookmark = new Bookmark();
    if (currentBookmark['title'] === "" && currentBookmark['link'] === "") {
      alert('You must enter a title and a URL!');
  } else {
    $bookmarkTitle.append("Title: " + currentBookmark['title']);
    $bookmarkLink.append("URL: " + '<a href="' + currentBookmark['link'] + '" target="_blank">Some Text</a>');
  }
}



$enter.on('click', function() {
      addBookmark();
  });

// ! Bookmark only works if user enters "http://"
