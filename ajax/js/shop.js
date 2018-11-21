function processData() {
  $.ajax({
    url: "http://kitchenoffice.eu/service/computers.php",
    dataType: "json"
  }).done(function(data) {
    displayItems(data);
  }).fail(function(response, code, message) {
    console.log(response);
  });
}

function displayItems(data) {
  $.each(data, function(index, value) {
    displayItem(value);
  })
}

function displayItem(product) {
  var bigBox = getBigBox();

  var fotoBox = getSmallBox();

  var image = $("<img>");
  image.prop("src", product.image);
  image.css({"width":"100%"});

  fotoBox.append(image);
  bigBox.append(fotoBox);

  var titleBox = getSmallBox();
  titleBox.text(product.item);
  bigBox.append(titleBox);

  var descriptionBox = getSmallBox();

  $.each(product.descriptions, function(index, value) {
    descriptionBox.append(value+"<br>");
  });

  bigBox.append(descriptionBox);


  var priceBox = getSmallBox();

  $(".container").append(bigBox);
}

function getBigBox() {
  var bigBox = $("<div>");
  bigBox.addClass("product");
  //bigBox.prop("class", "product");
  return bigBox;
}

function getSmallBox() {
  return $("<div>").addClass("product-info");
}
