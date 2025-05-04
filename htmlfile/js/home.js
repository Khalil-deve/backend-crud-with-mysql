const flashMessage = localStorage.getItem('flashMessage');
console.log(flashMessage); // Log the flash message for debugging
const flash = document.querySelector('.flash-message');
if (flashMessage && flash) {
    flash.innerText = flashMessage;
    flash.classList.remove('hidden');
    localStorage.removeItem('flashMessage');

    setTimeout(() => {
        flash.classList.add('hidden');
    }, 3000);
}
