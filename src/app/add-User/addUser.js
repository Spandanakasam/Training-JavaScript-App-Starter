$.subscribe(message.addUserFormSubmit,onUserSubmitForm)

function onUserSubmitForm(){
    try{
    var form=appState.UserForm;
    store.saveUser(form); 
    console.log('UserList' + appState.UserList)

    $.publish(message.addUserFormSuccessful)
    
}
catch{
    $.publish(message.addUserFormFailed)
}
}
