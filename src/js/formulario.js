function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    const valid = true;

    if (name.value.trim() === "") {
        nameError.innerHTML = 'Campo obrigatório';
        name.classList.add('unverified-fields');
        valid = false;

    } else {
        nameError.innerHTML = '';
        name.classList.remove('unverified-fields');
    }

    if (email.value.trim() === "") {
        emailError.innerHTML= 'Campo obrigatório';
        email.classList.add('unverified-fields')
        valid = false;
    } else {
        emailError.innerHTML = '';
        email.classList.remove('unverified-fields');
    }


    const phonePattern = /^\d+$/;
    if (!phonePattern.test(phone.value.trim())) {
        phoneError.innerHTML= "campo obrigatório";
        phone.classList.add('unverified-fields');
        valid = false;
    } else {
        phoneError.innerHTML = '';
        phone.classList.remove('unverified-fields');
    }

    if (message.value.trim() === "" ) {
        messageError.innerHTML = 'Campo obrigatório';
        message.classList.add('unverified-fields');
        valid = false;
    } else {
        messageError.innerHTML = '';
        message.classList.remove('unverified-fields');
    }

    return valid;

}