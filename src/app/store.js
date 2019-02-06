var InitialState = {
    UserForm:{},
    UserList:[]

}
var appState = InitialState;
var store = {
    getUpdateForm: function(form){
    appState.UserForm = form;
},
    saveUser: function(form){
    appState.UserList.push(form);
    
    }

}

