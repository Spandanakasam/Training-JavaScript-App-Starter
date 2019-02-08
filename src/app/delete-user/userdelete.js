
$('#7').on('click',function(){

    $(document).ready(function(){
        $("#7").click(function(){
        $("table tbody").find('input[name="record"]').each(function(){
       if($(this).is(":checked")){
        $(this).parents("tr").remove();
        $('#messageDiv').text(" User Deletion was Successfull!  Thank You :)");
       
       }
    })
})
    })
})
