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


function toggleBookmark() {
  $bookmarkSection.addClass('new-bookmark');
}

function clearFields() {
  $title.val("");
  $link.val("");
}
$enter.on('click', function() {
      newSection();
      toggleBookmark();
      clearFields();
  });

  $('input').keypress(function(event) {
     if (event.which === 13) {
       toggleBookmark();
       newSection();
       clearFields();
     }
   });

// ! Bookmark only works if user enters "http://"

function newSection() {
var currentBookmark = new Bookmark();
var listItem = currentBookmark['title'];
var listLink = currentBookmark['link'];
if (currentBookmark['title'] === "" || currentBookmark['link'] === "") {
  alert('You must enter a title and a URL!');
       }  else {
$bookmarkSection.prepend('<div class="new-bookmark">' + '<div class="new-title">' + listItem + '</div>' + '<div class="new-link">' + '<a href="' + currentBookmark['link'] + '" target="_blank">'+ currentBookmark['link'] + '</a>'+ '</div>' + '</div>');
       }
   }
