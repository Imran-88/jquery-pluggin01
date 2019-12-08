/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  {
  "particles": {
    "number": {
      "value": 510,
      "density": {
        "enable": true,
        "value_area": 481.0236182596568
      }
    },
    "color": {
      "value": "#f2dfdf"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7375695479981405,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 3.7355551765861876,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 1266.695528083763,
      "color": "#ffffff",
      "opacity": 0.12827296486924183,
      "width": 0.16034120608655228
    },
    "move": {
      "enable": true,
      "speed": 4.810236182596568,
      "direction": "bottom-right",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 0,
        "rotateY": 0
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 0.8802020351587235
        }
      },
      "bubble": {
        "distance": 609.0579092260089,
        "size": 0,
        "duration": 2,
        "opacity": 0.09744926547616141,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);