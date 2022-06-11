function deleteRows() {
  document.getElementById("myTable").deleteRow(1);
}

function addRows(top) {
  var table = document.getElementById("myTable");
  if (top) {
    var row = table.insertRow(0);
  } else {
    var row = table.insertRow();
  }
  var cell = row.insertCell();
  cell.innerHTML = "Firuze";
  cell = row.insertCell();
  cell.innerHTML = "cell";
  cell = row.insertCell();
  cell.innerHTML = "cell";
}
