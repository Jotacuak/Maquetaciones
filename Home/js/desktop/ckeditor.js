import ClassicEditor from './../../../build/editor-classic.js';

export let ckEditor = () => {

    window.ckEditor = [];

    let ckEdtiors = document.querySelectorAll('ckeditor');

    ckEditors.forEach(ckEditor => {
        
        ClassicEditor
        .create( document.querySelector( '#editor' ), {
            plugins: [ Essentials, Paragraph, Bold, Italic ],
            toolbar: [ 'bold', 'italic' ]
        })
        .then( editor => {
            console.log( 'Editor was initialized', editor );
        })
        .catch( error => {
            console.error( error.stack );
        });
    });
};