
let count=0
let btns = document.querySelectorAll('button')
btns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    count +=1
    btn.innerHTML = count
  })
})
