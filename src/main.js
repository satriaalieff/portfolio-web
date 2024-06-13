import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
import ScrollMagic from 'scrollmagic';

const app = createApp(App);

app.mount('#app');

let controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave',
    duration: '200%',
  },
});

let slides = document.querySelectorAll('div.panel');
for (let i = 0; i < slides.length; i++) {
  if (i === slides.length - 1) {
    new ScrollMagic.Scene({
      triggerElement: slides[i],
    })
      .setPin(slides[i], { pushFollowers: true })
      .addTo(controller);
  } else {
    new ScrollMagic.Scene({
      triggerElement: slides[i],
    })
      .setPin(slides[i], { pushFollowers: false })
      .addTo(controller);
  }
}

let controller2 = new ScrollMagic.Controller();

var revealElements = document.getElementsByClassName('scroll-magic-slide');
for (var i = 0; i < revealElements.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: revealElements[i],
    offset: 50,
    triggerHook: 1,
  })
    .setClassToggle(revealElements[i], 'transform-none')
    .addTo(controller2);
  new ScrollMagic.Scene({
    triggerElement: revealElements[i],
    offset: 50,
    triggerHook: 1,
  })
    .setClassToggle(revealElements[i], 'opacity-100')
    .addTo(controller2);
}

var revealElements = document.getElementsByClassName('scroll-magic-slide-2');
for (var i = 0; i < revealElements.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: revealElements[i],
    offset: 50,
    triggerHook: 1,
  })
    .setClassToggle(revealElements[i], 'transform-none')
    .addTo(controller2);
  new ScrollMagic.Scene({
    triggerElement: revealElements[i],
    offset: 50,
    triggerHook: 1,
  })
    .setClassToggle(revealElements[i], 'opacity-100')
    .addTo(controller2);
}
