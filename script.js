const form = document.getElementById('form-pass');
const password = document.getElementById('password');

password.addEventListener('click' , () =>{
    if (form.getAttribute('type')==="password"){
        form.setAttribute('type','text');
    }else{
        form.setAttribute('type', 'password')
    }
})
