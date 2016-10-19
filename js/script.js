var $title = $('.website-title-input');
var $link = $('.website-link-input');
var $enter = $('.enter');

function Bookmark(title, link) {
  this.title = title;
  this.link = link;
}




$('.enter').on('click', function() {
      console.log($title.val());
  });
