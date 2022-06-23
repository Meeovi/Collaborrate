function handleHttpResponse({ status }, messages) {
  const alertSuccess = document.getElementById('alert-success');
  const alertError = document.getElementById('alert-error');
  
  const alertSuccessInstance = mdb.Alert.getInstance(alertSuccess);
  const alertErrorInstance = mdb.Alert.getInstance(alertError);

  if (status < 300) {
    let successMsg = messages[status] || 'Success';
    
    alertSuccess.innerHTML = successMsg;

    alertSuccessInstance.show();
  }
  else {
    let errorMsg = messages[status] || 'Something went wrong';

    alertError.innerHTML = `<strong>Error</strong> - ${errorMsg}`;
    alertErrorInstance.show();
  }
}