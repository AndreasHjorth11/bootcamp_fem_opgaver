document.addEventListener("DOMContentLoaded", () => {

    function skjulElementViaCssSelector(cssSelector)
    {
        let displayNoneElement = document.querySelector(cssSelector);
        displayNoneElement.style.display = 'none';
    };

    skjulElementViaCssSelector('.heading2');

});