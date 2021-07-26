// validate name to  accept only string 
function validateName(evt) {
  var theEvent = evt || window.event;
  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
      // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[a-zA-Z ]|\./;
  if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
  }
}





var valid = true;
function checkValid(){
    valid = true;
    $('.invalid-feedback').remove();
    $('.login-form .form-control').each(function(){
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

// login button
$('.login-form .login-btn').click(function(){
    checkValid();
    if(valid){
        // call ajax here to send data (username and password)
        var username = $('#username').val();
        var password = $('#password').val();
        console.log(valid);
        // loginFunction()
    }
});  










