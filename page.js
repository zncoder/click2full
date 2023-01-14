let btn = document.createElement('button')
btn.innerText = 'Go Fullscreen'
btn.style.position = 'fixed'
btn.style.top = '10px'
btn.style.right = '10px'
btn.style.zIndex = 100000000
btn.style.background = 'yellow'
btn.style.color = 'black'
btn.style.borderWidth = '0px'
btn.style.borderRadius = '8px'
btn.style.padding = '4px'
btn.onclick = () => {
  document.documentElement.mozRequestFullScreen()
  btn.parentNode.removeChild(btn)
}
document.body.appendChild(btn)
