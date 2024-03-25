gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2",
    pin: true,
    start: "top top",
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1,
  }
})
gsap.timeline({
  scrollTrigger: {
    trigger: ".section-3",
    pin: true,
    start: "top top",
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1,
  }
})
gsap.timeline({
  scrollTrigger: {
    trigger: ".section-4",
    pin: true,
    start: "top top",
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1,
  }
})
gsap.timeline({
  scrollTrigger: {
    trigger: ".c-avatar",
    start: "top top",
    end: "bottom top",
    scrub: 0,
  }
})
  .to('#GK-intro', { opacity: 0 })
gsap.timeline({
  scrollTrigger: {
    trigger: ".c-roadmap",
    pin: false,
    start: "top bottom",
    end: "bottom bottom ",
    scrub: 1,
  }
})
  .to('.c-roadmap', { color: '#fff', backgroundColor: '#171010' })
  .to('header', { color: '#fff' })
  .to('.button-round', { color: '#171010', backgroundColor: '#fff', border: '1px solid #fff' 
})
window.addEventListener('load', () => {
  document.body.classList.remove('before-load');
});
document.querySelector('.loading').addEventListener('transitionend', (e) => {
  document.body.removeChild(e.currentTarget);
});