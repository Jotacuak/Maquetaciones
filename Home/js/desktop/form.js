import {ckEditor} from './ckeditor.js';
import {validador} from './validator.js';

export let renderForm = () => {

    let buttonSubmit = document.querySelector('.submitButton');
    let forms = document.querySelectorAll('.front-form')  
    
        
    if (buttonSubmit) {

        buttonSubmit.addEventListener("click", () => {

            forms.forEach(form => {

                let validate = validador(form);

                validate.onSuccess (() => {
                
                    let formData = new FormData(form);

                    if (editors != 'null'){

                        Object.entries(editors).forEach(([key, value]) =>{
                            formData.append(key, value.getData());
                        });
                    }

                    for (let pair of formData.entries()){
                        console.log(pair[0] + ', ' + pair[1])
                    };                
                });

                validate.onFail(() => {   
                });                
            });
        });

    };   
};