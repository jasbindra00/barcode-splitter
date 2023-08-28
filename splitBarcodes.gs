function splitBarcodes() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var cellValue = sheet.getRange("A1").getValue();

  // Check if cellValue is a string and contains digits only
  if (typeof cellValue === "string" && /^[0-9]+$/.test(cellValue)) {
    // Calculate the number of 15-digit barcodes in the cell
    var numberOfBarcodes = Math.floor(cellValue.length / 15);

    if (numberOfBarcodes > 0) {
      var barcodes = [];

      // Split the 15-digit barcodes
      for (var i = 0; i < numberOfBarcodes; i++) {
        var barcode = cellValue.substring(i * 15, (i + 1) * 15);
        barcodes.push([barcode]);
      }

      // Clear the original cell
      sheet.getRange("A1").clear();

      // Write the 15-digit barcodes into separate rows starting from A1
      sheet.getRange(1, 1, numberOfBarcodes, 1).setValues(barcodes);
    }
  } else {
    Logger.log("The value in A1 is not a string of digits.");
  }
}
