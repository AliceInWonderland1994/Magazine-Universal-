$(document).ready(function () {
    const categoriesTab = $('.categories__tab');
    const media = $('.media');

    categoriesTab.on('click', function (event) {
        const activeTab = $(this).attr('data-target');

        categoriesTab.removeClass('categories__tab--active')
        media.removeClass('media--active');
        $(activeTab).addClass('media--active');
        $(this).addClass('categories__tab--active');
    });
});

const buttonPlay = document.querySelector('.buttons-player__play');
const buttonPlayNfl = document.querySelector('.buttons-player__play-2');
const video = document.querySelector('.video');
const videoNfl = document.querySelector('.video-nfl');

const videoPlay = function (button, video) {
    button.addEventListener('click', function (evt) {
        evt.preventDefault();

        video.classList.toggle('video--active');
    });

};
videoPlay(buttonPlay, video);
videoPlay(buttonPlayNfl, videoNfl);

const closeVideo = function (video) {
    document.addEventListener('keydown', function (evt) {
        if(evt.key === 'Escape') {
            video.classList.remove('video--active');
        };
    });
};
closeVideo(video);
closeVideo(videoNfl);

const openVideo = function (video) {
    document.addEventListener('keydown', function (evt) {
        if(evt.key === 'Enter') {
            video.classList.add('video--active');
        };
    });
};
closeVideo(video);
closeVideo(videoNfl);