const tl = gsap.timeline({defaults : {
    ease: "power1.inOut",
    duration: 1,
}})

tl.to('.logo-daqu',  {delay : 1,opacity: 1})
    .to('.ketupat', { duration: 2, y : '0%'} )
    .to('.main-title', { y : '0'}, '-=1')
    .to('.ayat', { duration: 1.5, x : 0} )
    .to('.line', { x : 0} )
    .to('.translate', { duration: .5, y : 0} )
    .to(".profile-pic", {opacity : 1})
    .to('.owner', {opacity : 1})