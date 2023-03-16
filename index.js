// Write your code here!
document.querySelector("main").remove()
var newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = 'George is the champion'
document.body.append(newHeader)