function register(){
    const form = document.forms[0];
	
    form.addEventListener("submit", function(event) {

     event.preventDefault();
         var data = new FormData(form);
         var str = 'Вы зарегестрировались';
         var doRedirect = true;
         var icon = "success";
		 
		 
        if (data.get('login') == '') 
        {
            str ='Заполните поле с именем';
            icon = "error";
            doRedirect = false;
        }
		else
        if (data.get('password') == '') 
        {
            str ='Введите пароль';
            icon = "error";
            doRedirect = false;
        }
		else
        if(data.get('passwordRepeat')== '')
        {
            str ='Повторите пароль';
            icon = "error";
            doRedirect = false;
        }
		else
		if(data.get('passwordRepeat')!= data.get('password'))
        {
            str ='Пароль должны совпадать';
            icon = "error";
            doRedirect = false;
        }
        Swal.fire({
            text: str,
            icon: icon,
            showConfirmButton: false
        });
        if (doRedirect) {
            setTimeout(function () {

                window.location.href = "Register.html";
            }, 1800); 
        }
    });

    form.addEventListener("formdata", event => {
        console.log(event.formData);
    });
}