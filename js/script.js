var $title = $('.website-title-input');
var $link = $('.website-link-input');
var $enter = $('.enter');
var $bookmarkTitle = $('.bookmark-title');
var $bookmarkLink = $('.bookmark-link');
var currentBookmark =

function Bookmark(title, link) {
  this.title = $title.val();
  this.link = $link.val();
}





$('.enter').on('click', function() {
      $bookmarkTitle.append(new Bookmark);
      $bookmarkLink.append($link.val());
  });



 $.enter.addEventListener('click', function() {
        console.log('crackatoa')
 });

 )
