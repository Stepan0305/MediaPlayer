export const radioInit = () => {

    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioHeader = document.querySelector('.radio-header__big');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    const radioVolume = document.querySelector('.radio-volume');

    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    const selectItem = parent => {
        radioItem.forEach(element => {
            element.classList.remove('select');
        });
        parent.classList.add('select');
    }


    const toggleIcon = () => {
        if (audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.replace('fa-pause', 'fa-play');
        } else {
            radio.classList.add('play');
            radioStop.classList.replace('fa-play', 'fa-pause');
        }
    }

    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        const parent = target.closest('.radio-item');
        const title = parent.querySelector('.radio-name');
        const img = parent.querySelector('.radio-img').src;

        radioHeader.textContent = title.textContent;
        radioCoverImg.src = img;
        selectItem(parent)
        radioStop.disabled = false;
        audio.src = target.dataset.radioStation;
        audio.play();
        toggleIcon();
    })

    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            toggleIcon();
        } else {
            audio.pause();
            toggleIcon();
        }
    })

    radioVolume.addEventListener('input', () => {
        audio.volume = radioVolume.value / 100
    })
}