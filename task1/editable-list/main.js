
let array =[]
let list = document.getElementById('list')

function arrayToList(array){
  array.forEach(function(item){
    array.push('<li>' + item +'</li>')
  })
  html += '</ul>'
}

const checkBtn = document.getElementById('btn-add')
const dltBtn = document.getElementById('btn-dlt')

checkBtn.onclick = function() {
  let inputValue = document.getElementById('input')
  if (inputValue) {
    array.push(inputValue)
    list.innerHTML = array.join('')
  }
}

dltBtn.onclick = function() {
  array.pop()
  list.innerHTML = array.join('')
}
