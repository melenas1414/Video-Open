var args = arguments[0] || {};
function llamar () {
  Ti.Platform.openURL('tel:+' + 911555555 );
};
function internet () {
   Ti.Platform.openURL('http://videoopen.es' );
};
function correo () {
  var emailDialog = Titanium.UI.createEmailDialog();
 
	emailDialog.subject = "Asunto que queramos";
	emailDialog.toRecipients = ['info@videoopen.es'];
	emailDialog.messageBody = "Correo de prueba";
	 
	emailDialog.open();
}