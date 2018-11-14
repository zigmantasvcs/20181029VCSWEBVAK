// sita funkcija spausdina bet koki teksto eluciu masyva i rikiota sarasa
function printArrayToOrderedList(array) {
  document.write("<ol>");
  for (var i = 0; i < array.length; i++) {
    document.write("<li>" + array[i] + "</li>");
  }
  document.write("</ol>");
}
