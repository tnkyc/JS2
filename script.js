const pullDownButton = document.getElementById("lists");

pullDownButton.addEventListener('mouseover',function(event) {
   console.log('乗ると青色');
   this.setAttribute("style","background-color:blue;")
});

pullDownButton.addEventListener('mouseout',function(event) {
    console.log('離れると赤色');
    this.removeAttribute("style","background-color:red;")
});


const pullDownParents = document.getElementById("pull-down")

this.addEventListener('click', function(event) {
    if (pullDownParents.getAttribute("style") == "display:block;"){
        pullDownParents.removeAttribute("style", "display:block;")
        console.log("非表示")
    } else {
        pullDownParents.setAttribute("style", "display:block;")
        console.log("表示")
    }
  })
