$.subscribe(message.addUserFormSuccessful,addUserSuccess)
function addUserSuccess(){
    $('#messageDiv').text(appState.UserList.slice(-1)[0].name+ "!  You got registered Successfully!  Enjoy :)");
    $('#name').val('');
        $('#email').val('');
        $('#GitId').val('');
}