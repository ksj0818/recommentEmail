/*
1. Element 가져온다.
2. Element 이벤트를 건다.

includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별 / true, false로 반환
substr() 메서드는 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환
indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
*/

/**
 * 1. 입력 시마다 '@' 키워드가 들어가는지 확인
 * 2. @ 가 있다면 이메일 자동완성 목록 보여주기
 * 3. 자동완성 목록에 존재하는 데이터의 포함되는 키워드 입력 시 해당하는 데이터만 보여주기
 * 4. 자동완성 클릭 시 input에 해당값 넣어주기 
 */

const emailInput = document.getElementById('emailInput');
const emailGroup = document.getElementById('emailGroup');

let emailList = [
  'google.com',
  'gmail.com',
  'naver.com',
  'nate.com',
  'yahoo.com',
  'daum.net',
  'hanmail.net',
  'outlook.com'
];
let filterEmails = [];

// events
emailInput.addEventListener('input', function(event) {
  let eventTargetValue = event.target.value;
  let id = eventTargetValue.substr(0, eventTargetValue.indexOf('@') + 1);
  let keyword = eventTargetValue.substr(eventTargetValue.indexOf('@') + 1, eventTargetValue.length);
  let html = '';

  filterEmails = emailList.filter((email) => {
    if (email.includes(keyword)) {
      return email;
    }
  });

  for (let email of filterEmails) {
    if (eventTargetValue.includes('@')) {
      emailGroup.style.display = 'block';
      html += `
      <li class="list-group-item email-group" onclick="setEmail('${id}${email}')">${id}<mark>${email}</mark></li>
      `
    }
  }
  emailGroup.innerHTML = html;
});

emailInput.addEventListener('focus', function() {
  emailGroup.style.display = 'block';
});

//functions 
function setEmail(id) {
  emailInput.value = id;
  emailGroup.style.display = 'none';
}

