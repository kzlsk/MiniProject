// dynamic 아이디 속성 값을 가진 객체를 선택 => p #dynamic .lg-text
let target = document.querySelector("#dynamic");

// 랜덤 문자열 함수
function randomString() {
  // 문자열을 가진 배열
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript"];

  // 문자열 랜덤 선택 변수
  // Math.floor : 소수점 이하 버림
  // Math.random : 랜던 숫자 생성
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];

  // 선택된 문자열을 배열로 변환
  // split : 해당 문자열을 "" 기준을 이용하여 배열로 변환 => [L,e,a,r,n, ,t,o, ,H,T,M,L]
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

// 타이핑 리셋 함수 => 리셋 후 dynamic 함수 호출하여 다시 타이핑 효과
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

// 랜덤 문자열 함수를 매개변수로 전달 => 타이핑 효과 함수
function dynamic(randomArr) {
  // 0보다 클때까지 실행
  if (randomArr.length > 0) {
    // shift : 배열의 첫번째 요소 제거 후 반환
    target.textContent += randomArr.shift();
    // 재귀 함수 이용하여 반복적으로 호출
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}
dynamic(randomString());

// 커서 깜빡임 효과 함수
function blink() {
  // toggle 메서드로 active 클래스 추가/제거
  target.classList.toggle("active");
}
// blink 함수 0.5초마다 실행하여 active 클래스 추가/제거 반복
setInterval(blink, 500);
