let mm = gsap.matchMedia();
const tl1 = gsap.timeline()
gsap.registerPlugin(ScrollTrigger)

tl1.fromTo('#saudacao', {
    x: -30,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 0.5
  })

  .fromTo('#nome', {
    x: -30,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 0.5
  })

  .fromTo('#cargo-apresentacao', {
    x: -30,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 0.5
  })

  .fromTo('#social', {
    y: -30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  })


const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#about-me', //Onde Começa a animação
    scrub: true,
    start: 'top bottom',
    end: 'center center',
  }
})

tl2.fromTo('#title_aboutme', {
    x: -100,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 0.5
  })

  .fromTo('.about-text', {
    y: -40,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.5
  })


const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '#experiencia .container', //Onde Começa a animação
    start: 'top bottom',
    end: 'bottom 80%',
    scrub: true
  }
})

gsap.fromTo('#experiencia #title_experience', {
  x: -100,
  opacity: 0
}, {
  x: 0,
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: '#experiencia #title_experience',
    start: 'top bottom',
    end: 'bottom center',

  }
})

//EXPERIENCIA
let experienceItems = document.querySelectorAll('.experience')

experienceItems.forEach((item) => {
  tl3.fromTo(item, {
    x: -100,
    opacity: 0,
    rotate: -15
  }, {
    x: 0,
    opacity: 1,
    rotate: 0
  })
})


mm.add('(min-width:1280px)', () => {

})

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '#cursos .container', //Onde Começa a animação
    start: 'top bottom',
    end: 'center  300px',
    scrub: true,


  }
})


let cursoItems = document.querySelectorAll('.curso')
cursoItems.forEach((item) => {
  tl4.fromTo(item, {
    x: -100,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
  })
})

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.phrase',
    start: 'center center',
    end: 'center center',
  }
})

tl5.fromTo('.phrase h2', {
    yPercent: 200,
  }, {
    yPercent: 0,
    duration: 0.9,

  })

  .fromTo('.phrase p', {
    yPercent: 200,
  }, {
    yPercent: 0,
    duration: 0.9,

  })