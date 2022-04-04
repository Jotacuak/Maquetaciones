import JustValidate from '../../node_modules/just-validate/dist/just-validate.es.js';

export let validador = (form) => {
    
    let validate = new JustValidate('#' + form.id, {
        errorFieldCssClass: 'is-invalid',
        errorLabelStyle: {
            color: 'red',
            fontsize: '14px',
        },
        focusInvalidField: true,
        lockForm: true,
        errorsContainer: '#errors-container',
    });


        
    validate
    .addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Name is invalid!',
        },
        {
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 30,
        },
    ])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Email is required!',
        },
        {
            rule: 'email',
            errorMessage: 'Email is invalid!',
        },
    ]);                

    return validate;
};