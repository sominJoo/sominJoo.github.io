
(function () {
  var cnt = 0;
  $('input[id ="menuicon"]').change(function (e) {
    if(cnt++ %2 ==0 ){
      $('input[id ="menuicon"]+label span').css('background-color','white');
    }
    else{      
      $('input[id ="menuicon"]+label span').css('background-color','#102231');
    }
});
})();

(function () {
  $('.circle').click(function (e) {
      var $id =e.target.id;
      if($id =='img-circle1'){
        $('.roadDiv').css('display','none');
        $('.roadDiv1').css('display','block');
      }
      else if($id =='img-circle2'){
        $('.roadDiv').css('display','none');
        $('.roadDiv2').css('display','block');
      }
      else if($id =='img-circle3'){
        $('.roadDiv').css('display','none');
        $('.roadDiv3').css('display','block');
      }
      else if($id =='img-circle4'){
        $('.roadDiv').css('display','none');
        $('.roadDiv4').css('display','block');
      }
      else if($id =='img-circle5'){
        $('.roadDiv').css('display','none');
        $('.roadDiv5').css('display','block');
      }
      else if($id =='img-circle6'){
        $('.roadDiv').css('display','none');
        $('.roadDiv6').css('display','block');
      }
      else if($id =='img-circle7'){
        $('.roadDiv').css('display','none');
        $('.roadDiv7').css('display','block');
      }
  });
})();

$('.circle').hover(function (e) {
  $(this).css('cursor','pointer');
});



// $('#start').click(function (e) {
//   $('.bear1').addClass('walking1'); 
//   second(); 
// });

// function second() {
//   $('.bear1').css('animation-play-state',"paused"); 
//   $('.bear1').css('visibility',"hidden"); 
//   $('.bear2').css('visibility','visible');   
//   $('.bear2').addClass('walking2');   
// }