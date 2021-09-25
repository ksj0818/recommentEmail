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
const emailElement = document.getElementById('emailElement');
const listElements = document.getElementById('listElements');
const emailList = [
  'google.com',
  'gmail.com',
  'naver.com',
  'nate.com',
  'daum.net',
  'hanmail.net',
  'yahoo.com',
  'outlook.com'
]

let filterEmails = [];
let id = '';
let keyword = '';

// functions
function setEmail(id) {
  emailElement.value = id;
  listElements.style.display = 'none'
}


emailElement.addEventListener('input', function a(event) {
  let eventTargetValue = event.target.value;
  if (eventTargetValue.includes('@')) {
    id = eventTargetValue.substr(0, eventTargetValue.indexOf('@') + 1);
    keyword = eventTargetValue.substr(eventTargetValue.indexOf('@') + 1, eventTargetValue.length);
    
    filterEmails = emailList.filter((email) => {
      if (email.includes(keyword)) {
        return email;
      }
    });
    
    let html = '';
    for (let email of filterEmails) {
      html += `
      <li class="list-group-item cursor-pointer" onclick="setEmail('${id}${email}')">${id}<mark>${email}</mark></li>
      `
    }
    listElements.innerHTML = html;
    listElements.style.display = 'block'
  } else {
    listElements.style.display = 'none'
  }
})


emailElement.addEventListener('focus', function() {
  listElements.style.display = 'block'
})

