function pullDown() {
const pullDownButton = document.getElementById("lists");
const pullDownParents = document.getElementById("pull-down");
const pullDownChild = document.querySelectorAll(".pull-down-list")
const currentList = document.getElementById("current-list")

pullDownButton.addEventListener('mouseover',function(event) {
   console.log('乗ると青色');
   this.setAttribute("style","background-color:blue;")
});

pullDownButton.addEventListener('mouseout',function(event) {
    console.log('離れると赤色');
    this.removeAttribute("style","background-color:red;")
});

pullDownButton.addEventListener('click', function(event) {
    if (pullDownParents.getAttribute("style") == "display:block;"){
        pullDownParents.removeAttribute("style", "display:block;")
        console.log("非表示")
    } else {
        pullDownParents.setAttribute("style", "display:block;")
        console.log("表示")
    }
  })
pullDownChild.forEach(function(list) {
    list.addEventListener('click', function() {
        const value = list.innerHTML
        currentList.innerHTML = value
        console.log(value)
    })
})
}
window.addEventListener('load',pullDown)
