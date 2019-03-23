var msg = '';

var charactersMap = {
  true : "X",
  false : "&nbsp&nbsp&nbsp"
};

for (var i = 0; i < 10; i++) {
  
  for (var j = 0; j < 10; j++) {
   
   msg += charactersMap[i == 0 || j == 0 || i == 9 || j == 9 || j == i || i == 9-j];
   
  }
  
  msg += "<br>";
}

$('#msg').html(msg)
