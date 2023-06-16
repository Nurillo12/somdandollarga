'use strict'

const usz = document.querySelector('#usz'),
usd = document.querySelector('#usd')

usz.addEventListener('input', (e) => {
 const request = new XMLHttpRequest()

request.open('GET', '/current.json')
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
request.send()

request.addEventListener('readystatechange', () => {
 if(request.readyState == 4 && request.status == 200) {
  console.log(request.response)
  const data = JSON.parse(request.response)
  usd.value = (+usz.value / data.current.usd).toFixed(2)
 }else{
  usd.value = 'Something went'
 }
})

})
