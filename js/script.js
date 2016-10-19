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
    checkBookmark();
    $bookmarkTitle.append("Title: " + currentBookmark['title']);
    $bookmarkLink.append("URL: " + '<a href="' + currentBookmark['link'] + '" target="_blank">Some Text</a>');
}

function checkBookmark() {
  if (4 === 5) {
    return true;
  } else {
    alert('You must enter a title and a URL!');
  }
}

$enter.on('click', function() {
      addBookmark();
  });

// ! Bookmark only works if user enters "http://"
