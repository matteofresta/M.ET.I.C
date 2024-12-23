anime({
    targets: '.box-chat',
    width: '50%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 1500,
    loop: false
});

anime.stagger(value, {grid: [rows, columns]})

anime({
    targets: '.text-effect p',
    scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
});
