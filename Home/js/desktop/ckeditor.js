import '../../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js';

export let ckEditor = () => {

    window.ckEditors = [];

    let ckEditors = document.querySelectorAll('.ckeditor');

    ckEditors.forEach(ckEditor => {
        
        ClassicEditor.create(ckEditor)
        .then( editor => {
        })
        .catch( error => {
            console.error(error);
        });
    });
};