var valid = true;
    function checkValid(){
        valid = true;
        $('.invalid-feedback').remove();
        $('.login-form .form-control').each(function(){
            $(this).removeClass('is-invalid');
            if( $(this).attr('id') == 'password'){
                var value = $(this).val();
            }else{
                var value = $(this).val().trim();
            }
            if(value == '' || value == null || value == undefined){
                $(this).addClass('is-invalid');
                $(this).closest('.input-group').append('<div id="validationServerUsernameFeedback" class="invalid-feedback d-block">Please choose a '+ $(this).attr('id') +'.</div>');
                valid = false;
            }else  if ($(this).val().length < 3 ){
                $(this).closest('.input-group').append('<div id="validationServerUsernameFeedback" class="invalid-feedback d-block">'+ $(this).attr('id') +' must me at least 3 characters.</div>');
                valid = false;
            }

        });       
    }
    
    $('.login-form .submit-btn').click(function(){
        valid = true;
        checkValid();
        if(valid){
            // call ajax here to send data (username and password)
            var username = $('#username').val();
            var password = $('#password').val();
            console.log(valid);
            // loginFunction()
        }

    });  