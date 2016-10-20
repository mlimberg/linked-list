var $title = $('.website-title-input');
var $link = $('.website-link-input');
var $enter = $('.enter');
var $bookmarkTitle = $('.bookmark-title');
var $bookmarkLink = $('.bookmark-link');
var $bookmarkSection = $('.bookmark-section');
var bookmarkCounter = 0;
var readCounter = 0;
var unreadCounter = 0;
var $bookmarkCount = $('.bookmark-count');
var $readCount = $('.read-count');
var $clearRead = $('.clear-read');
var $unreadCount = $('.unread-count');



updateAllCounters()

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

function updateUnreadCounter() {
  unreadCounter = bookmarkCounter - readCounter;
  $unreadCount.text(unreadCounter);
}

function updateAllCounters() {
  updateCounter();
  updateReadCounter();
  updateUnreadCounter();
}

$enter.on('click', function() {
      newSection();
      clearFields();
      updateAllCounters()
      disableButton();
  });

$('input').keypress(function(event) {
   if (event.which === 13) {
     newSection();
     clearFields();
     updateAllCounters();
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

$(document).on( 'click', function() {
  if (readCounter === 0) {
    $clearRead.prop('disabled', true)
  }
})

$(document).on('click', '.clear-read' , function() {
  $('.bookmark-section').children('.read').remove();
  bookmarkCounter = bookmarkCounter - readCounter;
  readCounter = 0;
  updateAllCounters();
})



function newSection(title) {
var currentBookmark = new Bookmark();
var listTitle = currentBookmark['title'];
var listLink = currentBookmark['link'];
if (listTitle === "" || listLink === "") {
 alert('You must enter a title and a URL!');
      }  else {
$bookmarkSection.prepend(
`<div class="new-bookmark">
 <div class="new-title">
   ${listTitle}
 </div>
 <div class="new-link">
   <a href="${listLink}" target="_blank">
     ${listLink}
   </a>
 </div>
 <div class="button-block">
   <button type="button" name="button" class="mark-as-read">
     <span class="underlines">Read</span>
   </button>
   <button type="button" name="button" class="remove">
     <span class="underlines">Delete</span>
   </button>
 </div>
</div>`
);
bookmarkCounter += 1;      }
  };

function updateReadOnClick(input) {
  if (input.hasClass('red')) {
    readCounter--;
  } else {
    readCounter++;
  }
}

function toggleClasses(input) {
  input.closest('.new-bookmark').toggleClass('read');
  input.toggleClass('red');
}

$('.bookmark-section').off('click').on('click', '.mark-as-read', function() {
  var $readButton = $(this);
  updateReadOnClick($readButton);
  toggleClasses($readButton);
  updateAllCounters();
})

$('.bookmark-section').on('click', '.remove', function() {
  $(this).parent().parent().remove();
  if ($(this).siblings().hasClass('red')) {
    readCounter -=1;
    bookmarkCounter -=1;
  } else {
    bookmarkCounter -=1;
  }
  updateAllCounters();
})
