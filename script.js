window.addEventListener('load', () => {
  document.body.classList.remove('before-load');
});
document.querySelector('.loading').addEventListener('transitionend', (e) => {
  document.body.removeChild(e.currentTarget);
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circleII");

const colors = [
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY; 
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 0 + "px";
    circle.style.top = y - 0 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}
animateCircles();


// Check if the device is a desktop
function isDesktop() {
  // Regular expression to match common desktop user agents
  const desktopRegex = /Windows NT|Macintosh/;
  return desktopRegex.test(navigator.userAgent);
}

// Apply image effect only on desktop devices
if (isDesktop()) {
  Shery.imageEffect('.LPvideo', {
    style: 6,
    gooey: true,
    config: {"noiseDetail":{"value":25.95,"range":[0,100]},"distortionAmount":{"value":0.99,"range":[0,10]},"scale":{"value":29.77,"range":[0,100]},"speed":{"value":0.5,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":6.103639682598815},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":6.66,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":2}},"discard_threshold":{"value":1,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    setUniforms: (uniforms) => {
      uniforms.infiniteGooey.value = true;
      uniforms.noEffectGooey.value = false;
    }
  });
}


var hoverElements = document.querySelectorAll('.Hover');
        var scrolling = false;
        var touching = false;

        hoverElements.forEach(function(element) {
            var vidElement = element.querySelector('.parallax-vid');

            element.addEventListener('touchstart', function(event) {
                event.preventDefault();
                touching = true;
                vidElement.style.opacity = '1';
            });

            element.addEventListener('touchend', function(event) {
                event.preventDefault();
                touching = false;
                if (!scrolling) {
                    vidElement.style.opacity = '0';
                }
            });
        });

        document.body.addEventListener('touchmove', function(event) {
            if (touching) {
                event.preventDefault();
            } else {
                scrolling = true;
            }
        });

        document.body.addEventListener('touchend', function(event) {
            scrolling = false;
        });
