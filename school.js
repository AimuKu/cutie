const cheerBtn = document.getElementById('cheerBtn');
const cheerText = document.getElementById('cheerText');
const messages = [
  'You are doing amazing, sweetie! 😘',
  'Remember to breathe and take little breaks. I’m proud of you.',
  'Your hard work is beautiful. I love you so much.',
  'Eat something yummy and keep your head up, baby 💜',
];

let index = 0;
cheerBtn.addEventListener('click', () => {
  cheerText.textContent = messages[index];
  cheerText.classList.add('loaded');
  setTimeout(() => cheerText.classList.remove('loaded'), 800);
  index = (index + 1) % messages.length;
});
