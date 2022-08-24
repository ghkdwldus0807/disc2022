// 초기화
	var indicator = document.querySelectorAll('.indicator button');
	var lightbox = document.querySelector('#lightbox');
	var block = document.querySelector('#block'); // 라이트박스 배경

introduction = [
' 에티오피아 예가체프는 산미가 강한 커피',
' 콜롬비아',
' 과테말라',
'인도네시아' ];

// 라이트 박스 표시
function lightbox_open(num){
	lightbox.setAttribute('class', 'active');
	block.setAttribute('class', 'active');
	change_img(num);
		
}

// 라이트 박스 닫기
function lightbox_close(){
	lightbox.removeAttribute('class');
	block.removeAttribute('class');
}

// 이미지 전환 표시 함수
function change_img(val){
  var imgs = document.querySelectorAll('figure > img');

  for( var i=0; i< imgs.length; i++){
    imgs[i].removeAttribute('class');
  }
  imgs[val-1].setAttribute('class', 'active');
}	
