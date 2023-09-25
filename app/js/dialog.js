import {locationArr} from './script.js';
import {getGeoLocation} from './script.js';

const dialogButtons = document.querySelectorAll('button[data-dialog-target]');
const dialogs = document.querySelectorAll('.dialog');

dialogButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        // toggle dialog
        let dialogTarget = document.getElementById(e.currentTarget.getAttribute('data-dialog-target'));
        dialogTarget.classList.add('open');

        // prevent backgound scrolling
        document.querySelector('body').style.overflow = 'hidden';
    });
});

function closeDialog(e) {
    // Close dialog + enable scrolling
    dialogs.forEach(dialog => dialog.classList.remove('open'))
    document.querySelector('body').style.overflow = 'auto';

    // Save array and rerender weather app only when things changed
    if (JSON.stringify(locationArr) !== localStorage.getItem('myWeatherLocationArr')) {
        localStorage.setItem('myWeatherLocationArr', JSON.stringify(locationArr));
        document.querySelector('main').innerHTML = '';
        getGeoLocation();
    }
}

let closeDialogButtons = document.querySelectorAll('button.close-dialog');
closeDialogButtons.forEach(btn => btn.addEventListener('click', function() {
    closeDialog(this);
}));