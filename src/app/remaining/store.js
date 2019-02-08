

var InitialState = {
    UserForm:{},
    UserList:[]
        //console.log(this);
    

}
//InitialState.UserList();
var appState = InitialState;
var store = {
    getUpdateForm: function(form){
    appState.UserForm = form;
    //console.log(this);
},
    saveUser: function(form){
    appState.UserList.push(form);
    
    },
    getUser: function(){
    return appState.UserForm;


    }

}

