function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Custom Menu").addItem("Sync", "splitBarcodes").addToUi();
}
