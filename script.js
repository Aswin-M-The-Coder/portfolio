ScrollReveal({
    reset: true,
    distance: '30px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading, .know', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-box, .fox', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['Web Developer','Programmer','Coder'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true
});

