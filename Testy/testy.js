String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }


// String.prototype.toJadenCase1= function () {
//
//  function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }    
//    return this.split(' ').map(capitalizeFirstLetter).join(' ');
//  };

  var str = "How somebody eat new brekfast";
  document.getElementById("szubienica").innerHTML = str;


  function start()
  {
    Test.assertEquals(str.toJadenCase(), str);     
    document.getElementById("szubienica").innerHTML = str;
  }

  start();

