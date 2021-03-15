
function load() {
  $('#top_menu div ul li:first-child').addClass('on');
}

$(function () {
  var $menu = $('#top_menu ul li');
  var $contents = $('#contents > section');
  
  $menu.click(function () {
    event.preventDefault();
    var idx = $(this).index();  //클릭한 메뉴의 index를 불러옴
    var tt =  $contents.eq(idx).offset().top;           //eq index번호의 객체를 선택

    //해당 위치로 이동하도록
    $('html, body').animate({scrollTop:tt});

    // $(this).addClass('on').siblings('li').removeClass('on');
  });

  //스크롤 이동 반영
  $(window).scroll(function () {
    //현 스크롤 양을 변수명 sct에 저장한다.
    var $sct = $(this).scrollTop();

    $contents.each(function (i) {
      var target = $(this); //모든 section 불러옴
      if(target.offset().top -10 <$sct){
        $menu.removeClass('on');
        $menu.eq(i).addClass('on');
        if(target.context.id == "section2" ){
          if($cnt++ == 0){
            draw(90, '.pie-chart90', '#1b5a86');
            draw(70, '.pie-chart70', '#3b7aa7');
            draw(60, '.pie-chart60','#5190bd');
            draw(50, '.pie-chart50','#0082c8');
            draw(40, '.pie-chart40','#90c7ee');
          }
        }
      }
      
    });
  });
});




var $cnt =0;
console.log(window.innerWidth);

function draw(max, classname, colorname){
  // $cnt++;
  var i=1;
   var func1 = setInterval(function(){
     if(i<max){
         color1(i,classname,colorname);
         i++;
     } else{
       clearInterval(func1);
     }
   },10);
}
function color1(i, classname,colorname){
  $(classname).css({
       "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
  });
}

var slideIndex = 1;

$("#web").click(function (e) {
  $('#skills').css('visibility','visible');
  console.log("click");
  showDivs(slideIndex);
});

$('input[id="closeicon"] + label').click(function (e) {
  $('#skills').css('visibility','hidden');
});

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("webSkill");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}



$('input[id ="menuicon"]').change(function (e) {
  console.log("안녕");
  $('#input[id ="menuicon"]+label span').css('background-color','white');
});