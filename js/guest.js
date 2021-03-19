showEntries();
(function () {
    var cnt = 0;
    $('input[id ="menuicon"]').change(function (e) {
      if(cnt++ %2 == 0 ){
        $('input[id ="menuicon"]+label span').css('background-color','white');
      }
      else{      
        $('input[id ="menuicon"]+label span').css('background-color','#10283a');
      }
  });
  })();

function singupPage() {
  $('#signup').css("visibility","visible")
  alert("준비중입니다. 회원가입없이 로그인하세요");
}


$('input[id="closeicon"] + label').click(function (e) {
  $('#signup').css('visibility','hidden');
});


$('#loginBtn').click(function (e) {
  var $id = $('.lId').val();
  var $pwd = $('.lPwd').val();
  var user ={
    id :$id,
    pwd : $pwd 
  };

  console.log($id);
  console.log($pwd);

  // 값이 존재하면 parse 처리, 존재하지 않으면 배열로 설정
  var users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);

  //json 문자열로 반환
  var jsonUsers = JSON.stringify(users);

  //localStorage에 저장
  localStorage.setItem("users",jsonUsers);

  //폼 전체 초기화
  $('.lId').val("");
  $('.lPwd').val("");
  alert("로그인 완료");
  $('#gusetBook').css('visibility','visible');
});

/**
 * localStorage.entries 배열에 사용자 방명록 관리를 한다.
 */
  function saveEntry() {
  var $form = $(document.entryForm);
  var entry ={
      name : $form.find('[name=userName]').val(),
      content : $form.find('[name = userContent]').val()
  };
  
  var entries = JSON.parse(localStorage.getItem('entries')) || [];
  entries.push(entry);


  var jsonEntries = JSON.stringify(entries);

  localStorage.setItem("entries",jsonEntries);

  document.entryForm.reset();

  showEntries();
}


/**
 * localStorage.entries를 가져와 table태그로 작성
 */
function showEntries() {
  var entries = JSON.parse(localStorage.getItem('entries')) || [];
  var $table = $('#tbl-entry');

  //header 추가
  $table.html("<tr><th>No</th><th>이름</th><th>내용</th></tr>");

  if(entries.length){
      //저장된 entry가 있는경우
      $.each(entries, function (i, entry) {
          var $tr = $('<tr>');
          $tr
              .append('<td>' + (i+1) + '</td>')
              .append('<td>' + entry.name + '</td>')
              .append('<td>' + entry.content + '</td>')
              .appendTo($table);
      });
  }
  else{
      $table.append('<tr><td colspan="3">조회된 방명록이 없습니다.</td></tr>');
  }
}