var $title = $('.website-title-input');
var $link = $('.website-link-input');
var $enter = $('.enter');
var $bookmarkTitle = $('.bookmark-title');
var $bookmarkLink = $('.bookmark-link');


function Bookmark(title, link) {
  this.title = title;
  this.link = link;
}





$('.enter').on('click', function() {
      $bookmarkTitle.text($title.val());
      $bookmarkLink.text($link.val());
  });
