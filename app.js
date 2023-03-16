const btn = document.querySelector('.popup');
const popup = document.querySelector('.popup-wrapper');
const popupClose = document.querySelector('.popup-close');

function openPopup() {
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}

btn.addEventListener('click', openPopup);

popupClose.addEventListener('click', closePopup);
