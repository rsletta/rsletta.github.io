$(document).ready(function(){
  $('#carousel').on('slid.bs.carousel', function (e) {
    var activeImage = $('.carousel-inner').find(".item.active").children();
    var activeImageId = "#" + activeImage[0].attributes.thumb.value
    // Remove active thumbnail
    $('.thumbnails').children().find('.active-thumb').removeClass('active-thumb');
    // Set new active thumbnail
    $('.thumbnails').children().find(activeImageId).addClass('active-thumb');
  })

  $('.thumbs').find('div').click(function(e) {
    var clickedThumb = $(this).children();
    // Remove active thumbnail
    $('.thumbs').children().find('.active-thumb').removeClass('active-thumb');
    // Set this at active thumbnail
    $(this).addClass('active-thumb');
    // Change image
    var imgUrl = clickedThumb[0].attributes.src.value;
    $( '#active-image' ).attr('src', imgUrl)
  });
});
