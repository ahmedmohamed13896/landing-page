


var valid = true;
function checkValid(){
    valid = true;
    $('.invalid-feedback').remove();
    $('.reset-form .form-control').each(function(){
        $(this).removeClass('is-invalid');
        if( $(this).attr('type') == 'password'){
            value = $(this).val();
        }
        else{
            value = $(this).val().trim();
        }

        if(value == '' || value == null || value == undefined){
            $(this).addClass('is-invalid');
            $(this).closest('.input-group').append('<div  class="invalid-feedback d-block">Please enter '+ $(this).attr('placeholder').toLowerCase() +'.</div>');
            valid = false;
        }else  if ($(this).val().length < 3 ){
            $(this).closest('.input-group').append('<div  class="invalid-feedback d-block">'+ $(this).attr('placeholder') +' must me at least 3 characters.</div>');
            valid = false;
        }

    });       
}
// check password btn
$('.reset-form .checkPass-btn').click(function(){
    checkValid();
    if(valid){
        console.log(valid);
        // loginFunction()
    }
});  

// reset btn
$('.reset-form .reset-btn').click(function(){
    checkValid();
    var newPass = $('#newPass').val();
    var confirmNewPass = $('#confirmNewPass').val();

    if(newPass !== confirmNewPass && confirmNewPass && newPass){
        $('#confirmNewPass').closest('.input-group').append('<div  class="invalid-feedback d-block">Password not match.</div>');
        valid = false;
    }
    if(valid){
        console.log(valid);
        $('#confirmation').modal('show');
        // loginFunction()
    }
});  