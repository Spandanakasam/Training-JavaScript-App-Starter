$.subscribe(message.addUserFormFailed,addUserFailed)
function addUserFailed(){
    $('messageDiv').hide();
    $('messageDiv1').show();
        $('#messageDiv').text(appState.UserList.slice(-1)[0].name+ "!  OOPS! Something Went Wrong.. Please Try Agian:(");
        $('#name').val('');
        $('#email').val('');
        $('#GitId').val('');
}