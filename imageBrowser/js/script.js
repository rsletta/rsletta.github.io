// Variables
var imgObj = { images: []};
var images = imgObj.images;
var currentImg = undefined;

// Functions
function prevImg() {
  var newId = currentImg.id - 1
  if (newId < 0 ) {
    newId = (images.length - 1);
  }
  setImage(newId);
};

function nextImg() {
  var newId = currentImg.id + 1;
  if (newId > (images.length - 1) ) {
    newId = 0;
  }
  setImage(newId);
};

function styleThumb(index) {
  console.log(index);
  // Remove active thumbnail
  $('.ib-thumbs').children().find('.active-ib-thumb').removeClass('active-ib-thumb');
  // Remove active dot
  $('.active-dot').removeClass('active-dot');
  // Set this at active thumbnail
  $('.ib-thumbs').children().eq(index).children().addClass('active-ib-thumb');
  // Sett active dot
  $('.ib-nav-dots').children().eq(index).addClass('active-dot')
};

function setImage(index) {
  currentImg = images[index]
  $( '#active-image' ).attr('src', currentImg.src);
  styleThumb(index);
}


$(document).ready(function(){
  // Load Imagedata into object
  $('.ib-thumbs').find('li').each(function(index) {
    var img = $(this).children().find('img');
    // Add image to imgObj
    imgObj.images.push( {id: index, src: img[0].attributes.src.value});
    // Add navdot to nav-dots
    var dot = document.createElement('li');
    dot.setAttribute('id',index);
    dot.setAttribute("class", "ib-nav-dot");
    $('.ib-nav-dots').append(dot);
  });
  // Set first thumbnail in active-image
  setImage(0);

  // Change image on dot click
  $('.nav-dot').click(function(e) {
    var index = e.currentTarget.attributes.id.value;
    setImage(index);
  });

  // Change image on thumbnail click
  $('.ib-thumbs').find('div').click(function(e) {
    var clickedId = $(this).parent().index();
    // Change image
    setImage(clickedId);
  });
});
