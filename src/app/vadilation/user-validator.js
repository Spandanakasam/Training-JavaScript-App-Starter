$.subscribe(message.addUserFormUpdate,validate)
function validate(){
    var form = getFormFromStore();
    var valid = isFormValid(form);
    afterValidation(valid);
}
function getFormFromStore(){
    return appState.UserForm;
}
function isFormValid(form){
    var isValid = isNameValid(form.name) && isEmailValid(form.email) && isGitIdValid(form.GitId);
   
    return isValid;
}
function isNameValid(name){
    return (name.length>0)
}
function isEmailValid(email){
    var re =/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return (email.length>0)&&(re.test(email))
}
function isGitIdValid(GitId){
    return (GitId.length>0)
}
function afterValidation(valid){
    if(valid){   
       $.publish(message.addUserFormValidatedSuccessfully);
    }
    else{
       $.publish(message.addUserFormValidationFailed);
    }
}