
// const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
// const button4 = document.getElementById('button4');
// const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
// const button8 = document.getElementById('button8');
// const button9 = document.getElementById('button9');
const button10 = document.getElementById('button10');
const output = document.getElementById('output');

// button1.addEventListener('click', () => {
//   output.innerText = 'Three of Swords   Meaning : You will feel great pain and grief that you do not expect. Despite this, you will be able to move forward from this pain after you express it';
// });

let index = 0;

button2.addEventListener('click', () => {
  
  output.innerText = Future[index];
  index = (index + 1) % Future.length;
  
});

button3.addEventListener('click', () => {
  output.innerText = Present[index];
  index = (index + 1) % Present.length;

  });

// button4.addEventListener('click', () => {
//   output.innerText = 'Three of Swords    Meaning : You are constantly held back by the sharp cutting of words, be it your own or others. Every critique is like a sword that pierces your heart and pins you down, unable to get up and move on.';
// });

// button5.addEventListener('click', () => {
//   output.innerText = 'Three of Swords   Meaning : Pain and heartache struck you without warning, and you let it cut deep. You were able to alive some of that pain, but that depression lingers.';
// });

button6.addEventListener('click', () => {
  output.innerText = Past[index];
  index = (index + 1) % Past.length;

});

button7.addEventListener('click', () => {
  output.innerText = Career[index];
  index = (index + 1) % Career.length;

});

// button8.addEventListener('click', () => {
//   output.innerText = 'Three of Swords    Meaning : After the pain of arguing and even separation, the time will soon come to forgive one another. After your relationship endured this turmoil, it will be reforged and fortified.';
// });

// button9.addEventListener('click', () => {
//   output.innerText = 'Three of Swords   Meaning : Work will prove taxing on your mind, leading to conflict and poor performance. You will need to talk out these issues with your higher-ups if you wish to move on.';
// });

button10.addEventListener('click', () => {
  output.innerText = Love[index];
  index = (index + 1) % Love.length;

});

const Future = ['The Heirophant: You may find yourself seeking guidance from someone or an institution in the future. This card suggests that you will benefit from following established traditions and norms.',
 'The Chariot: You will find that although you have drive, you lack direction or willpower. You will need to hit the brakes and rethink your decisions before you hit a wall.',
  'The Queen of Wands: You may be in a position of leadership or authority in the future. This card suggests that you will be able to harness your creative energy and inspire others towards success.', 
  'The Ten of Wands: You will be plagued by anxiety that eats away at you. The obsession over the source of your anxiety will cause it to grow exponentially, the fear multiplying beyond control unless help is sought out.'];

const Past = ['Page of Cups: You were raised well and can be passionate without getting into trouble. You may have recently fell into an intense love.',
'Queen of Swords: You may have made decisions that were clouded by emotions or lacked objectivity, which may have resulted in conflicts or misunderstandings with others. You may have struggled to set boundaries or assert yourself, and this may have led to situations where you were taken advantage of by others. It is important to reflect on these experiences and learn from them to improve your communication skills, gain clarity and focus, and move forward with greater strength and confidence in the present and future. ',
'Knight of Pentacles: Through maintaining careful control of your resources and focusing on your goal, you were able to ascend to a successful new life. Bountiful wealth and wisdom were obtained through your own merit and influence.',
'Ten of Wands: You found yourself held back and weighed down by a massive secret, but you were unable to alleviate it due to the circumstances. Only by finally sharing it with one you trusted were you able to rid yourself of the guilt and stress.']

const Present = ['The Fool: You do not let the past shackle you, and you do not fear the future. You move through life with excitement and curiosity, not a care in the world.',
'The Empress: You find yourself in a severe creative block, or unable to properly express yourself. This is likely due to the fear of what others think holding you back, worrying too much about others than your own ideas.',
'The Hanged Man: You may be resisting change or struggling to let go of something in the present. This card suggests that it may be time to take a new perspective and make necessary sacrifices in order to move forward.',
'Strength: You are a confident and compassionate person who always has the time to help others. You also always make sure to lend your strength to others who simply need a shoulder to cry on.']

const Career = ['The Tower: You may need to let go of old approaches or beliefs in order to achieve your goals.',
 'The Emperor: Your discipline will start to falter in your job as the atmosphere becomes rigid and uninspiring. Without focus or proper motivation, your performance will begin to decline.',
'The Empress: You will feel out of touch with your coworkers, being left in the dark when it comes to camaraderie. You may also find yourself out of touch with your intuition and ignoring it, which can lead to trusting somebody with bad intentions.',
'The Star: You may need to let go of old approaches or beliefs in order to achieve your goals.']

const Love = ['Death: You have been resisting a change in your career. You may be staying in a toxic environment due to your fear of change. Embrace this change that you know you need to make, it is inevitable. ',
'Three of Pentacles: This could be indicating that you are currently working in a relatively mundane job in which your contributions and experience go unappreciated.',
'Nine of Wands: You may be making quick decisions and taking swift action towards your career goals.',
'Queen of Pentacles: Through good organization and practicality, you will build yourself a steady stream of success in your career. You should also be sure to take advice from those more experiemnced, as they only wish to see you succeed.']