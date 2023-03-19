const mainElement = document.querySelector('.js-main');
const switchFormsButtons = document.querySelectorAll('.js-switch');

switchFormsButtons.forEach(function (button) {
    button.addEventListener('click', function (evt) {
        if (mainElement.dataset.state === undefined) {
            mainElement.dataset.state = 'signup';
        } else {
            delete mainElement.dataset.state;
        }
    });
});