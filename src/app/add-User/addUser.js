$.subscribe(message.addUserFormSubmit,onUserSubmitForm)

function onUserSubmitForm(){
    try{
    var form=appState.UserForm;
    store.saveUser(form); 
    var userID = appState.UserForm.id;
    console.log(userID);
  //  console.log('UserList' + appState.UserList)

    $.publish(message.addUserFormSuccessful,userID);
    
}
catch{
    $.publish(message.addUserFormFailed);
}
}
