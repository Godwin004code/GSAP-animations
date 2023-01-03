gsap.registerPlugin(ScrollTrigger)
const section = document.querySelectorAll('section')

gsap.utils.toArray(section).forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: false
    })
})