function setS3Connection_()
{
  return showConnectionForm_();  
}
function showConnectionForm_()
{
  var html = HtmlService.createTemplateFromFile('index.html').evaluate().setWidth(800).setHeight(900);  
  return SpreadsheetApp.getUi().showModalDialog(html, '😸 Upload file to S3 Bucket');       
}