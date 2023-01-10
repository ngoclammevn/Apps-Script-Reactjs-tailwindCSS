function onOpen(e)
{
  addMenu_();
}


function addMenu_()
{
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('😸 Upload Flash')
  .addItem('➕ Upload to S3...', 'setS3Connection_')
  .addSeparator()
  .addToUi();
  return 0;
}