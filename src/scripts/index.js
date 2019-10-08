import '../styles/index.scss';
import './buttonWiggle.js';


const steps = 5;
let currentStep = 5;


function moveToStep(step) {
  let monsterImage = document.getElementById('monster-image');
  let percentage = Number((step / steps) * 100).toFixed(2);
  monsterImage.setAttribute('style', 'width: ' +  percentage + '%; height: ' + percentage + '%;');
}

document.getElementById('shrink-button').addEventListener('click', function (e) {
  currentStep--;
  if (currentStep < 0) {
    currentStep = 0;
  }
  moveToStep(currentStep);
});

document.getElementById('grow-button').addEventListener('click', function (e) {
  currentStep++;
  if (currentStep > steps) {
    currentStep = steps;
  }
  moveToStep(currentStep);

});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
  navigator.serviceWorker.register('/monster/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
