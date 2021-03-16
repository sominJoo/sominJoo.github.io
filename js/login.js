(function () {
    var cnt = 0;
    $('input[id ="menuicon"]').change(function (e) {
      if(cnt++ %2 == 0 ){
          console.log("안녕");
        $('input[id ="menuicon"]+label span').css('background-color','white');
      }
      else{      
        $('input[id ="menuicon"]+label span').css('background-color','#10283a');
      }
  });
  })();

function singupPage() {
  var w=open("signup.html","newWindow","width=800, height = 300, top=300, left=300");
  w.alert("준비중입니다.");
}