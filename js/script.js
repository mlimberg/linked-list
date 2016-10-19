var $title = $('.website-title-input');
var $link = $('.website-link-input');
var $enter = $('.enter');
var $bookmarkTitle = $('.bookmark-title');
var $bookmarkLink = $('.bookmark-link');
var $bookmarkSection = $('.bookmark-section');

function Bookmark(title, link) {
  this.title = $title.val();
  this.link = $link.val();
}

function addBookmark() {
    var currentBookmark = new Bookmark();
    if (currentBookmark['title'] === "" || currentBookmark['link'] === "") {
      alert('You must enter a title and a URL!');
  } else {
    $bookmarkTitle.append(currentBookmark['title']);
    $bookmarkLink.append('<a href=' + currentBookmark['link'] + '" target="_blank">'+ currentBookmark['link'] + '</a>');
  }
}

function toggleBookmark() {
  $bookmarkSection.addClass('new-bookmark');
}

function clearFields() {
  $title.val("");
  $link.val("");
}
$enter.on('click', function() {
      toggleBookmark();
      addBookmark();
      clearFields();
  });

// ! Bookmark only works if user enters "http://"
