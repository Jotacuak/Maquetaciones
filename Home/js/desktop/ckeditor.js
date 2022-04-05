import '../../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js';

export let ckEditor = () => {

    let editors = document.querySelectorAll('.ckeditor');

    window.editors = ckEditor;

    editors.forEach(editor => {
        
        ClassicEditor
            .create(editor)
            .then( editor => {
            })
            .catch( error => {
                console.error(error);
            });
    });
};