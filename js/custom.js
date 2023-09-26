$(function(){
      //변수에 이미지의 갯수에 1을 뺀 값을 담는다.(1을 뺀 이유는 인덱스번호와 동일한 값으로 쓰기위해서)
      var leng = $(".partner > img").length-1;

      //왼쪽 슬라이드 효과
      function left(n,i){//left함수의 매개변수로 n(슬라이딩으로 다음에 보여질 이미지의 index번호)과 i(현재 보여지고 있는 이미지의 index번호)를 받아옵니다.

        //if함수로 img태그에 animate효과가 적용중이면 return false로 함수에 있는 코드를 전달하지 않는다(animate 중복 실행 방지)
        if($("img").is(":animated")) return false;
        
        //이미지의 순번이 n값의 순번인 객체를 선택 css속성을 이용하여 오른쪽 영역밖으로 이동시키고 on클래스를 추가합니다. animate함수를 사용하여 left의 위치를 원래 위치로 0.6초동안 이동시켜줍니다.
        $(".partner > img").eq(n).css("left","152px").addClass("on").animate({"left":0},600);

        //이미지의 순번이 i값의 순번인 객체를 선택 animate메서드로 왼쪽밖으로 1초동안 이동 후에 콜백함수로 animate효과가 끝나면 on클래스를 제거하고 left값을 0으로 원래위치로 이동시켜줍니다.
        $(".partner > img").eq(i).animate({"left":"-100%"},600,function(){
          $(this).removeClass("on").css("left",0);
        });

        //클릭한 닷버튼에 on클래스를 추가하여 하이라이트 구현
        $(".dot > li").removeClass("on").eq(n).addClass("on");
      }

      //오른쪽 화살표버튼 클릭시
      $(".next").click(function(){
        var now = $(".partner > img");//현재 화면에 보이는 이미지를 변수에 now에 할당
        var i = now.index();//now의 index번호를 변수 i에 할당

        var n = now.next().index();//now의 다음요소의 index번호를 변수 n에 할당
        if(i != leng){//변수 i의 값이 leng(이미지의 마지막순번)의 값과 같지 않을때 실행
          left(n,i);//left함수의 인수로 변수 n과 i값을 보내줍니다.
        }else{//변수 i의 값이 마지막 순번과 같을때
          left(0,i);//left함수의 인수로 숫자0(첫번째이미지)과 변수 i를 보내줍니다.
        }
      });

      //오른쪽 슬라이드효과
      function right(n,i){
        if($("img").is(":animated")) return false;
        //다음에 보여질 이미지가 왼쪽에서 오른쪽으로 이동하는 구문
        $(".partner > img").eq(n).css("left","-100%").addClass("on").animate({"left":0},600);

        //현재 보이는 이미지가 오른쪽 밖으로 이동하는 구문
        $(".partner > img").eq(i).animate({"left":"100%"},600,function(){
          $(this).removeClass("on").css("left",0);
        });

        //클릭한 닷버튼에 on클래스를 추가하여 하이라이트 구현
        $(".dot > li").removeClass("on").eq(n).addClass("on");
      }

      //왼쪽 화살표버튼 클릭시
      $(".prev").click(function(){
        var now = $(".partner > img.on");
        var i = now.index();
        var p = now.prev().index();//현재보이는 이미지의 이전요소의 순번을 변수 p에 할당
        if(i != 0){//변수 i가 0(첫번째 이미지)이 아닐때 실행
          right(p,i); //right함수의 인수로 변수p(이전요소)와 i(현재요소)값을 보내줍니다.
        }else{ //변수 i가 0일 때
          right(leng,i);//right함수의 인수로 leng(이미지의 마지막순번)과 i값을 보내줍니다.
        }
      });

});










    //$(function(){
      //$(".dot > li").click(function(){
        //$(".dot > li").removeClass("on");
        //$(this).addClass("on");
        //var i = $(this).index();
        //$(".slideWrap").stop().animate({"left":-1400*i},500);