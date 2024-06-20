var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})



const video = document.querySelector(".video_play");

video.addEventListener("mouseover", function() {
    const play = document.querySelector(".video")
    play.play()
});

video.addEventListener("mouseout", () => {
    const pause = document.querySelector(".video")
    pause.pause()
})



document.addEventListener('DOMContentLoaded', () => {
    const img_player = document.querySelector('.yee');
    // const img_player1 = document.querySelector('.yee1');
    // const img_player2 = document.querySelector('.swiper-wrapper');
    const audio = document.querySelector('audio[data-key="play_track"]');
    
    if (img_player) {
        console.log("123")            

        img_player.addEventListener('click', () => {
            console.log("hello")
            if (audio) {
                audio.currentTime = 0;
                audio.play();
            }
        });
    }


});






let x  = document.querySelector('.swiper-wrapper')
x.addEventListener('click', function(){
    console.log("hello")
})









