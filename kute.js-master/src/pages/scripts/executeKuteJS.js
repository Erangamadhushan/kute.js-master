// Example usage of KUTE.js

const tween = KUTE.to('#box', { left: '300px' }, { duration: 2000,repeat:Infinity });
tween.start();

KUTE.to('#box1', { left: '300px', opacity: 0.5 }, { 
    duration: 3000, 
    easing: 'easingCubicInOut',
    repeat: null,
}).start();
