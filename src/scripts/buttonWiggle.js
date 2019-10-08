const $buttons = document.querySelectorAll('.button');

for (const button of $buttons) {
  button.addEventListener('click', function() {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to(this, duration, {scaleY: 1.6, ease: Expo.easeOut});
    TweenMax.to(this, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
    TweenMax.to(this, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
  });
}

