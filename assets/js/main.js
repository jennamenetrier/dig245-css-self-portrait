
/* javascript */
document.addEventListener('mousemove', (event) =>{
  var posx = event.clientX;
  var posy = event.clientY;
  var coords = "X" + posx + ", Y: " + posy;
  document.getElementById("display").innerHTML = coords;
});

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);
