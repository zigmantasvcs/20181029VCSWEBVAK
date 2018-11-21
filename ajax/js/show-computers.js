// main function called from outside
function showComputers(data, element){
  $.each(data, function(index, value){
    var boxFromObject = getBoxFromObject(value);
    $(element).append(boxFromObject);
  })
}

// object structure:
// id – prekės unikalus identifikatorius
// item – prekės pavadinimas
// image – paveiksliuko aboliutinis url
// descriptions – aprašymai (tekstinių eilučių masyvas“
// price – prekės kaina eurais.
// oldprice – ankstesnė prekės kaina
function getBoxFromObject(object) {
  
}


function getMainBox(){
  var div = $("<div>");
  div.addClass("col");
  div.addClass("s12");
  div.addClass("m4");
  return div;
}

function getInnerBox(){
  var div = $("<div>");
  return div;
}
