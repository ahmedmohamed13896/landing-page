function validateEmail(email) {

    var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

var valid = true;
var email = $('#email').val();
$('.sendMail-btn').on('click',function(){
    valid = true;
    email = $('#email').val();
    $('.invalid-feedback').remove();
    $('#email').removeClass('is-invalid');

    if(email == '' || email == null || email == undefined){
        $('#email').addClass('is-invalid');
        $('#email').closest('.input-group').append('<div  class="invalid-feedback d-block">Please enter your email.</div>');
        valid = false;
    }
    else if (!validateEmail(email)) {
        $('#email').addClass('is-invalid');
        $('#email').closest('.input-group').append('<div class="invalid-feedback d-block">Email is not valid.</div>');
        valid = false;
    }

    if(valid){
        $('#thank_you').modal('show');
        console.log('sjsb');
    }


})


 