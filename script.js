const pullDownButton = document.getElementById("lists");

pullDownButton.addEventListener('mouseover',function(event) {
    console.log('乗る');
});

pullDownButton.addEventListener('mouseout',function(event) {
    console.log('離れる');
});

pullDownButton.addEventListener('click',function(event) {
    console.log('押す');
});