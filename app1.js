
	// 문제 객체
	function Question(text, choice, answer){
		this.text = text;
		this.choice = choice;
		this.answer = answer;
	}

	// 퀴즈 정보 객체
	function Quiz(questions){
		this.score= 0;				// 탄맛
		this.questions = questions;	// 질문
		this.questionIndex = 0;		// 질문 순서
	}

	// 정답 확인 메소드
	Quiz.prototype.correctAnswer = function(answer){
		return answer == this.questions[this.questionIndex].answer;
	};

	// -----------------------------------------------------------------------------------
	// 문제 데이터
	var questions = [
		new Question('밤을 새야하는데, 너무 피곤하다. 어떡하지?', ['아메리카노 한 잔으로 잠을 날려버리자!', '잠깨는데에는 초콜렛이지!'], '아메리카노 한 잔으로 잠을 날려버리자!'),
		new Question('디저트 가게에 갔는데, 단 한 개의 디저트만 살 수 있다면?', ['푹신한 시트 사이사이에 있는 달콤한 크림, 위에 올라가있는 상큼한 과일의 조화가 어울리는 케이크', '버터의 깊은 풍미와 소금의 짭짤한 맛이 만난 소금빵'], '버터의 깊은 풍미와 소금의 짭짤한 맛이 만난 소금빵'),
		new Question('오늘은 유명 스포츠 경기가 있는 날! 치킨을 시켰는데, 뭐랑 함께 먹을까?', ['치킨에는 맥주가 빠질 수 없지! 치맥으로 후끈한 분위기를 더욱 즐기자!', '술도 좋지만, 맨정신으로 경기를 심도있게 즐기고 싶어! 콜라와 함꼐 먹는다.'], '치킨에는 맥주가 빠질 수 없지! 치맥으로 후끈한 분위기를 더욱 즐기자!'),
		new Question('식당에서 메뉴를 고르는 스타일은?', ['처음 들어보는 신기한 메뉴가 있네? 궁금하니깐 먹어보자!', '내 사전에 실패란 있을 수 없어! 새로운 메뉴는 맛이 없을 수도 있으니  익숙한 메뉴를 시킨다.'], '내 사전에 실패란 있을 수 없어! 새로운 메뉴는 맛이 없을 수도 있으니  익숙한 메뉴를 시킨다.'),
		new Question('주로 커피를 마시는 상황은 언제인가요?', ['과제나 공부 등 집중력이 필요한 상황일 때 마신다.', '커피는 식사의 연장선! 식후에는 무조건 커피지~'], '과제나 공부 등 집중력이 필요한 상황일 때 마신다.')
	];

	// 퀴즈 객체 생성
	var quiz = new Quiz(questions);

	// -----------------------------------------------------------------------------------
	// 문제 출력 함수
	function update_quiz(){
		var question = document.getElementById('question');
		var idx = quiz.questionIndex + 1;
		var choice = document.querySelectorAll('.btn');

		// 문제 출력
		question.innerHTML = '문제'+ idx + ') ' + quiz.questions[quiz.questionIndex].text;

		// 선택 항목 출력
		for(var i = 0; i < 2; i++){
			choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
		}

		
	}


	// 문제 진행 바
function move() {
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width>=(quiz.questionIndex)*20) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label").innerHTML = width * 1 + '%';
        } 
    }
}

function endprogress() {
    var elem = document.getElementById("bar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label").innerHTML = width * 1 + '%';
        }
    }
}

	// -----------------------------------------------------------------------------------	
	// 결과 표시
	function result(){
	  endprogress();
		
		// 백분률 점수 계산
		var per = parseInt((quiz.score*100) / quiz.questions.length);

		// 점수 별 결과 텍스트 출력
		if(per < 40){
			window.location.href='ethiopia.html';

		} else if(per >= 40 && per < 80){
			window.location.href='colombia.html';
		} else if(per >= 80){
			window.location.href='guatemala.html';
		}
	} // end result


	// -----------------------------------------------------------------------------------
	var btn = document.querySelectorAll('.btn');	// .btn 객체

	// 입력 및 정답 확인 함수
	function checkAnswer(i){
		// 선택버튼(.btn) 이벤트 리스너 
		btn[i].addEventListener('click', function(){
		  
		  move();
			var answer = btn[i].innerText;

			if(quiz.correctAnswer(answer)){
				quiz.score++;
			}
			// 다음 문제로 진행 및 결과 처리
			if(quiz.questionIndex < quiz.questions.length-1){
				quiz.questionIndex++;
				update_quiz();
			} else { 
				// 결과 화면
				result();
				
			}
		});	
	} // end checkAnswer

	// 2개의 버튼 이벤트리스너 지정
	for(var i = 0; i < btn.length; i++){
		checkAnswer(i);
	}

	update_quiz();

