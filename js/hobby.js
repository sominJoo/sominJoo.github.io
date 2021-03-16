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