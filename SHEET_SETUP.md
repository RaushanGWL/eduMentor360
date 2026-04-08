# Google Sheets Setup Guide for Lead Capture

To connect your B-tech Direct Admission website to Google Sheets, follow these steps exactly. This will allow you to see your leads in real-time, and it will automatically update existing users if they submit the form again.

## 1. Create your Google Sheet
1. Open [Google Sheets](https://sheets.new).
2. Rename it to something like **B-tech Direct Admission Leads**.
3. Create the following headers in the first row (**Row 1**):
   | A | B | C | D | E | F | G |
   |---|---|---|---|---|---|---|
   | Name | Email | Phone | City | Message | Source | Timestamp |

## 2. Add the Apps Script
1. In the top menu, go to **Extensions > Apps Script**.
2. Delete any code already in the editor and paste the following:

```javascript
/*
  B-tech Direct Admission Lead Capture Script
  Handles POST requests from the website.
  Updates existing rows based on Email match.
*/

function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  // Parse incoming data
  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      "result": "error",
      "error": "Invalid JSON"
    })).setMimeType(ContentService.MimeType.JSON);
  }

  var email = data.email;
  var rowData = [
    data.name || "",
    data.email || "",
    data.phone || "",
    data.city || "",
    data.message || "",
    data.source || "Website",
    new Date()
  ];

  // Logic: Search for existing email in Column B (Index 2)
  var values = sheet.getRange("B:B").getValues();
  var rowIndex = -1;
  
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] == email) {
      rowIndex = i + 1; // Apps Script rows are 1-indexed
      break;
    }
  }

  if (rowIndex > 0) {
    // UPDATE existing row
    // We update columns A to G (1 to 7)
    sheet.getRange(rowIndex, 1, 1, rowData.length).setValues([rowData]);
    var resultType = "updated";
  } else {
    // APPEND new row
    sheet.appendRow(rowData);
    var resultType = "appended";
  }

  return ContentService.createTextOutput(JSON.stringify({
    "result": "success",
    "type": resultType
  })).setMimeType(ContentService.MimeType.JSON);
}

// Handle CORS
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## 3. Deploy as a Web App
1. Click the blue **Deploy** button > **New deployment**.
2. Select type: **Web app**.
3. Description: **B-tech Direct Admission API**.
4. Execute as: **Me**.
5. Who has access: **Anyone**. (This is necessary for your website to call it).
6. Click **Deploy**.
7. Copy the **Web App URL** (it looks like `https://script.google.com/macros/s/.../exec`).

## 4. Final Step
Paste the URL you just copied into your `src/utils/constants.ts` file in the codebase where I have added the placeholder.

---
> [!TIP]
> Once deployed, any changes you make to the script require a **New Deployment** (or a version update) to take effect!
