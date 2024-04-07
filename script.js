/*gsap.timeline({
  scrollTrigger: {
    trigger: ".c-roadmap",
    pin: false,
    start: "top bottom",
    end: "bottom bottom ",
    scrub: 1,
  }
})
.to('.button-round', { color: '#171010', backgroundColor: '#fff', border: '1px solid #fff' });*/

Shery.imageEffect('.LPvideo', {
  style: 6,
  gooey: true,
  config: {"noiseDetail":{"value":25.95,"range":[0,100]},"distortionAmount":{"value":0.99,"range":[0,10]},"scale":{"value":29.77,"range":[0,100]},"speed":{"value":0.5,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":6.103639682598815},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":6.66,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":2}},"discard_threshold":{"value":1,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  setUniforms: (uniforms) => {
    uniforms.infiniteGooey.value = true
    uniforms.noEffectGooey.value = false
  }
})

/*Shery.imageEffect(".Hover img", {
  style: 5, 
  debug: true,
  config: {},
});*/

window.addEventListener('load', () => {
  document.body.classList.remove('before-load');
});
document.querySelector('.loading').addEventListener('transitionend', (e) => {
  document.body.removeChild(e.currentTarget);
});
