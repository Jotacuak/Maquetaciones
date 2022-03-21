export let plusMinus = () => {

    let minusPlusButtons = document.querySelectorAll(".plus-minus");

    minusPlusButtons.forEach( minusPlusButton => {

        minusPlusButton.addEventListener("click" , () => {

            if (minusPlusButton.dataset.value == 'minus') {
                let plusMinusInput = minusPlusButton.parentElement.getElementsByTagName('input')[0];
                let count = parseInt(plusMinusInput.value) - 1;
                count = count < 1 ? 1 : count;
                plusMinusInput.value = count;
            }
        
            else if (minusPlusButton.dataset.value == 'plus'){

                let plusMinusInput = minusPlusButton.parentElement.getElementsByTagName('input')[0];
                console.log(plusMinusInput.value);
                plusMinusInput.value = (parseInt(plusMinusInput.value) + 1);
            }
        });
        
    });      
}