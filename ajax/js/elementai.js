function getBox(){
  var element = $("<div>");

  var stilius = {
    width: "100px",
    height: "100px",
    border: "1px solid black"
  };

  element.css(stilius);

  return element;
}
