var $title = $('.website-title-input');
var $link = $('.website-link-input');
var $enter = $('.enter');
var $bookmarkTitle = $('.bookmark-title');
var $bookmarkLink = $('.bookmark-link');
var $bookmarkSection = $('.bookmark-section');
var bookmarkCounter = 0;
var readCounter = 0;
var $bookmarkCount = $('.bookmark-count');
var $readCount = $('.read-count');
var $clearRead = $('.clear-read');

updateCounter();
updateReadCounter();

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

function updateCounter() {
  $bookmarkCount.text(bookmarkCounter);
}

function updateReadCounter() {
  $readCount.text(readCounter);
}

$enter.on('click', function() {
      newSection();
      clearFields();
      updateCounter();
      disableButton();
  });

$('input').keypress(function(event) {
   if (event.which === 13) {
     newSection();
     clearFields();
     updateCounter();
     disableButton();
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

$(document).on('click', ".mark-as-read", function() {
    if (readCounter > 0) {
      $clearRead.prop('disabled', false);
    } else {
      $clearRead.prop('disabled', true);
    }
})

$(document).on('click', '.clear-read' , function() {
  $('.bookmark-section').children('.read').remove();
  bookmarkCounter = bookmarkCounter - readCounter;
  readCounter = 0;
  updateCounter();
  updateReadCounter();
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
  if ($(this).hasClass('red')) {
    readCounter -=1;
  } else {
    readCounter +=1;
  }
  $(this).parent().parent().toggleClass('read');
  $(this).toggleClass('red');
  updateReadCounter();
})

$('.bookmark-section').on('click', '.remove', function() {
  $(this).parent().parent().remove();
  if ($(this).siblings().hasClass('red')) {
    readCounter -=1;
    bookmarkCounter -=1;
  } else {
    bookmarkCounter -=1;
  }
  updateCounter();
  updateReadCounter();
})
