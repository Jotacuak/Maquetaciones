import JustValidate from '../../node_modules/just-validate/dist/just-validate.es.js';

export let form = () => {

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

// let formData = new FormData();

// formData.append("username", "Groucho");
// formData.append("accountnum", 123456); // number 123456 is immediately converted to string "123456"

// // HTML file input user's choice...
// formData.append("userfile", fileInputElement.files[0]);

// // JavaScript file-like object...
// var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
// var blob = new Blob([content], { type: "text/xml"});

// formData.append("webmasterfile", blob);

// var request = new XMLHttpRequest();
// request.open("POST", "http://foo.com/submitform.php");
// request.send(formData);

