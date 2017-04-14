var display = function(){
  var problem1 = document.getElementById('one');
  var problem2 = document.getElementById('two');
  var problem3 = document.getElementById('three');
  var problem4 = document.getElementById('four');
  var argue = document.getElementsByClassName('argue')[0];
  var hover = document.getElementsByClassName('hover')[0];
  var keypress = document.getElementsByClassName('keypress')[0];
  var signin = document.getElementsByClassName('signin')[0];
  document.addEventListener('click',function(e){
    if(e.target.id === "one"){
      argue.style.display = "flex";
      hover.style.display = "none";
      keypress.style.display = "none";
      signin.style.display = "none";
    }
    if(e.target.id === "two"){
      hover.style.display = "flex";
      argue.style.display = "none";
      keypress.style.display = "none";
      signin.style.display = "none";
    }
    if(e.target.id === "three"){
      keypress.style.display = "flex";
      hover.style.display = "none";
      argue.style.display = "none";
      signin.style.display = "none";
    }
    if(e.target.id === "four"){
      signin.style.display = "flex";
      keypress.style.display = "none";
      hover.style.display = "none";
      argue.style.display = "none";
    }
  })
}
display();

var problemone = function(){
  var left = document.getElementsByClassName('left')[0];
  var right = document.getElementsByClassName('right')[0];
  var clickedleft = document.getElementsByClassName('clickedleft')[0];
  var clickedright = document.getElementsByClassName('clickedright')[0];
  var content = "I'm Right";
  var content2 = "NO! I'm Right";
  var index = 0;
  document.addEventListener('click',function(e){
    if(e.target.className == 'left'){
      clickedleft.style.backgroundColor = 'olivedrab';
      clickedright.style.backgroundColor = 'white';
      index += 1;
      if(index > 1){
        clickedleft.innerHTML = content2;
      }else{
        clickedleft.innerHTML = content;
      }
    }
    if(e.target.className == 'right'){
      clickedright.style.backgroundColor = 'olivedrab';
      clickedleft.style.backgroundColor = 'white';
      index += 1;
      if(index > 1){
        clickedright.innerHTML = content2;
      }else{
        clickedright.innerHTML = content;
      }
    }
  })
}
problemone();

var problemtwo = function(){
  var hover = document.getElementsByClassName('hover')[0];
  var index = 0;
  hover.addEventListener('mouseover',function(){
    if(index == 0){
      alert("HEY, I TOLD YOU NOT TO HOVER OVER ME")
      index += 1;
    }
  })
  hover.addEventListener('mouseover',function(){
    console.log("I'm awesome")
  })
}
problemtwo();

var problemthree = function(){
  document.getElementById('three').addEventListener('click',function(){
    document.addEventListener('keydown',function(e){
      document.getElementsByClassName('header')[0].style.color = 'black';
      document.getElementsByClassName('header')[0].innerHTML = "<h1>"+e.key+"</h1>";
    })
  })
}
problemthree();

var signin = function(){
  var user = document.getElementsByClassName('user')[0];
  var data = [];
  var success = [];
  for ( var i = 0; i < user.elements.length; i++ ) {
   var e = user.elements[i];
   data.push(e.value);
    }
    if(data[2] == 12345678){
      console.log("win");
      success.push(true)
    }
    if(data[0]){
      for(var j = 0; j < data[0].length; j++){
        var num = ["0","1","2","3","4","5","6","7","8","9"]
        for(var p = 0; p < num.length; p++){
          if(data[0][j] === num[p]){
            console.log('winning')
            success.push(true)
          }
        }
      }
    }
    if(success[0] && success[1]){
      document.getElementsByClassName('verify')[0].innerHTML = "YOU'RE SIGNED IN";
    }
    }
