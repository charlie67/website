var startDiv = document.getElementById('three-container');
startDiv.addEventListener("click", function(e){
  console.log("end by click");
  endAnimation();
});

function changeBodyImage(){
  var bodyElement = document.getElementById('body');

  $(bodyElement).fadeTo('slow', 0.3, function(){
      $(this).css('background-image', "url('images/background-image-max.jpg')");
    }).fadeTo('slow', 1);

}

function endAnimation(){
  var startDiv = document.getElementById('three-container');
  var afterDiv = document.getElementById('after-intro');
  $(startDiv).fadeOut(1000);
  // afterDiv.style.visibility = 'visible';
  $(afterDiv).fadeIn(1000);

  window.setTimeout(changeBodyImage, 1000);


}
