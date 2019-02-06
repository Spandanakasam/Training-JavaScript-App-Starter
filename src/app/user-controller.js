$(function() {
  $('.form').on('keyup', onFormUpdate)
});
var $name = $('#name');
var $email = $('#email');
var $GitId = $('#GitId');
$('#userSubmit').attr('disabled', true);

$.subscribe(message.addUserFormValidatedSuccessfully, enable);
function enable() {
  $('#userSubmit').attr('disabled', false);
}

function onFormUpdate() {
  var user = new UserForm($name.val(), $email.val(), $GitId.val());
  console.log('onkeyup', user);
  store.getUpdateForm(user);
  afterUpdateForm();
}
function afterUpdateForm() {
  $.publish(message.addUserFormUpdate);
}
