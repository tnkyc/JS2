const pullDownButton = document.getElementById("lists");

pullDownButton.addEventListener('mouseover',function(event) {
   console.log('乗ると青色');
   pullDownButton.setAttribute("style","background-color:blue;")
});

pullDownButton.addEventListener('mouseout',function(event) {
    console.log('離れると赤色');
    pullDownButton.removeAttribute("style","background-color:red;")
});

pullDownButton.addEventListener('click',function(event) {
    console.log('押すと緑色');
    pullDownButton.setAttribute("style","background-color:green;")
});