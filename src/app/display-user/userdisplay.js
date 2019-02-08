$.subscribe(message.userListDisplay, displayUser);

function displayUser(){
   
    $(document).ready(function(){
           
             var user = store.getUser();
             var markup = "<tr><td style='border: 1px solid black'><input type='checkbox' name='record'></td><td style='border: 1px solid black'>" + user.name + "</td><td style='border: 1px solid black'>" + user.email + "</td><td style='border: 1px solid black'>" + user.GitId + "</td></tr>";
             $("table tbody").append(markup);

             })
             $('#name').val('');
             $('#email').val('');
             $('#GitId').val('');

 
}
