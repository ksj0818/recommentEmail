/*
1. Element 가져온다.
2. Element 이벤트를 건다.
*/
const emails = [
  'gmail.com',
  'naver.com',
  'kakao.com',
  'daum.net',
  'nate.com',
  'hanmail.com',
  'example.com',
  'dreamwiz.com',
  'yahoo.com'
]
let filterEmails = []

const listElement = document.getElementById('listElement')
listElement.style.display = 'none'

const inputElement = document.getElementById('inputElement')
inputElement.addEventListener('input', function(event) {
  if (event.target.value.includes('@')) {
    listElement.style.display = 'block'
    const id = event.target.value.substr(0, event.target.value.indexOf('@') + 1)
    const keyword = event.target.value.substr(event.target.value.indexOf('@') + 1, event.target.value.length)
    console.log(keyword);

    filterEmails = emails.filter((email) => {
      if (email.includes(keyword)) {
        return email
      }
    })

    let html = ''
    for (let email of filterEmails) {
      html += `<li class="list-group-item" onclick="setEmail('${id}${email}')">${id}<mark>${email}</mark></li>`
    }    
    listElement.innerHTML = html
  } else {
    listElement.style.display = 'none'
  }
})

inputElement.addEventListener('focus', function() {
  listElement.style.display = 'block'
})

function setEmail(id) {
  inputElement.value = id;
  listElement.style.display = 'none'
}