import JustValidate from '../../node_modules/just-validate/dist/just-validate.es.js';

export let validador = () => {
    
    let buttonSubmit = document.querySelector('.submitButton');
    let formInputs = document.querySelectorAll('input');

    buttonSubmit.addEventListener("click", () => {

        let validate = new JustValidate('#checkout-form');
        
        validate.addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Mínimo 3 caracteres'
            },
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Mínimo 3 caracteres',
            },
            {
                rule: 'maxLength',
                value: 30,
            },
        ])
        .addField('#email', [
            {
                rule: 'required',
                errorMessage: 'Email is required',
            },
            {
                rule: 'email',
                errorMessage: 'Email is invalid!',
            },
        ]);
    });
};