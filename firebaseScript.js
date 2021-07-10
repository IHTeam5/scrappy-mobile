var secret = '6oZXi4R51KQsTrXODxQs5ZRmVQYNmwoeDciO9kRL'

function getFirebaseUrl(jsonPath) {
  return (
    'https://composting-app-default-rtdb.firebaseio.com/' +
    jsonPath +
    '.json?auth=' +
    secret
  )
}
function syncMasterSheet(excelData) {
  var options = {
    method: 'put',
    contentType: 'application/json',
    payload: JSON.stringify(excelData)
  }
  var fireBaseUrl = getFirebaseUrl('Mastersheet')

  UrlFetchApp.fetch(fireBaseUrl, options)
}

function start() {
  var sheet = SpreadsheetApp.getActiveSheet()
  var [rows, columns] = [sheet.getLastRow(), sheet.getLastColumn()]
  var data = sheet.getRange(1, 1, rows, columns).getValues();
  var dataObject = {};

  for(var i=1; i<data.length; i++) {
    var dataRow = data[i];
    var Site = dataRow[0];
    var Address = dataRow[1];
    var Ward = dataRow[2];
    var ProgramDay = dataRow[3];
    var DropOffTimes = dataRow[4];

    dataObject[Site] = {
      Composting_Site:Site,
      Address: Address,
      Ward: Ward,
      ProgramDay: ProgramDay,
      DropOffTimes: DropOffTimes,
    }
    syncMasterSheet(dataObject)
  }
}