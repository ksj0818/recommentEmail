/*
1. Element 가져온다.
2. Element 이벤트를 건다.

includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별 / true, false로 반환
indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
*/

const inputId = document.getElementById('inputId');
const emailGroup = document.getElementById('emailGroup');
const emailList = [
  'google.com',
  'naver.com',
  'nate.com',
  'daum.net',
  'yahoo.com',
  'hanmail.net',
  'ffasdas.com',
];
let filterEmailList = []

inputId.addEventListener('input', recommentEmail)

function recommentEmail(event) {
  let autoList = '';
  if (event.target.value.includes('@')) {
    let id = event.target.value.substr(0, event.target.value.indexOf('@') + 1)
    let keyword = event.target.value.substr(event.target.value.indexOf('@') + 1, event.target.value.length)

    filterEmailList = emailList.filter(email => {
      if (email.includes(keyword)) {
        return email
      }
    })

    for (let i = 0; i < filterEmailList.length; i++) {
      let idMail = `${id}${filterEmailList[i]}`
      autoList += `<li class="list-group-item" onclick="setEmail('${idMail}')">${idMail}</li>`
    }
    emailGroup.innerHTML = autoList;
    emailGroup.style.display = "block";
  } else {
    emailGroup.style.display = "none";
  }
}

inputId.addEventListener('focus', function(event) {
  recommentEmail(event)
  emailGroup.style.display = "block";
})

function setEmail(id) {
  inputId.value = id
  emailGroup.style.display = "none";
}