export const videoInit = () => {


    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimeTotal = document.querySelector('.video-time__total');

    const addZero = number => number < 10 ? '0' + number : number;

    const setTotalTime = () => {
        const minTotal = Math.floor(videoPlayer.duration / 60);
        const secTotal = Math.floor(videoPlayer.duration % 60);
        videoTimeTotal.innerHTML = `${addZero(minTotal)}:${addZero(secTotal)}`
    }

    const togglePlay = () => {
        setTotalTime();
        if (videoPlayer.paused) {
            videoPlayer.play();
            videoButtonPlay.classList.replace('fa-play', 'fa-pause');
        } else {
            videoPlayer.pause();
            videoButtonPlay.classList.replace('fa-pause', 'fa-play');
        }
    }

    const stopVideo = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        videoButtonPlay.classList.replace('fa-pause', 'fa-play');
    }


    videoPlayer.addEventListener('click', togglePlay);
    videoButtonPlay.addEventListener('click', togglePlay);
    videoButtonStop.addEventListener('click', stopVideo);
    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime;

        const minCurrent = Math.floor(currentTime / 60);
        const secCurrent = Math.floor(currentTime % 60);

        console.log(minCurrent, secCurrent);
        videoTimePassed.innerHTML = `${addZero(minCurrent)}:${addZero(secCurrent)}`;

        videoProgress.value = currentTime / videoPlayer.duration * 100
    })

    videoProgress.addEventListener('change', () =>{
        const duration = videoPlayer.duration;
        const value = videoProgress.value;
        videoPlayer.currentTime = (duration * value) / 100
    })
}