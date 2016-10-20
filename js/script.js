var $title = $('.website-title-input');
var $link = $('.website-link-input');
var $enter = $('.enter');
var $bookmarkTitle = $('.bookmark-title');
var $bookmarkLink = $('.bookmark-link');
var $bookmarkSection = $('.bookmark-section');
var bookmarkCounter = 0;



function Bookmark(title, link) {
  this.title = $title.val();
  this.link = $link.val();
}

function clearFields() {
  $title.val("");
  $link.val("");
}

function disableButton() {
  $enter.prop('disabled', true);
}

$enter.on('click', function() {
      newSection();
      clearFields();
      disableButton();
  });

$('input').keypress(function(event) {
   if (event.which === 13) {
     newSection();
     clearFields();
   }
 });

$title.on('input', function() {
    if ($title.val() && $link.val()) {
      $enter.prop('disabled', false);
    } else {
      $enter.prop('disabled', true);
    }
})

$link.on('input', function() {
    if ($title.val() && $link.val()) {
      $enter.prop('disabled', false);
    } else {
      $enter.prop('disabled', true);
    }
})

// ! Bookmark only works if user enters "http://"

function newSection(title) {
var currentBookmark = new Bookmark();
var listTitle = currentBookmark['title'];
var listLink = currentBookmark['link'];
var titles = ('<div class="new-bookmark">' + '<div class="new-title">' + listTitle + '</div>' + '<div class="new-link">');
var links = ('<a href="' + listLink + '" target="_blank">'+ listLink + '</a>'+ '</div>');
var buttons = ('<div class="button-block">' + '<button type="button" name="button" class="mark-as-read">Read</button><button type="button" name="button" class="remove">Delete</button>' + '</div>' + '</div>');
if (listTitle === "" || listLink === "") {
  alert('You must enter a title and a URL!');
       }  else {
$bookmarkSection.prepend(titles + links + buttons);
bookmarkCounter += 1;
console.log(bookmarkCounter);
       }
   };

$('.bookmark-section').off('click').on('click', '.mark-as-read', function() {
  $(this).parent().parent().toggleClass('read');
  $(this).toggleClass('red');
})

$('.bookmark-section').on('click', '.remove', function() {
  $(this).parent().parent().remove();
  bookmarkCounter -= 1;
  console.log(bookmarkCounter);
})
