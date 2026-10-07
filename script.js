// Countdown to June 12, 2027 16:30 local
const target = new Date('2027-06-12T16:30:00');
function tick(){
  const now = new Date();
  let diff = Math.max(0, target - now);
  const d = Math.floor(diff/864e5); diff -= d*864e5;
  const h = Math.floor(diff/36e5);  diff -= h*36e5;
  const m = Math.floor(diff/6e4);   diff -= m*6e4;
  const s = Math.floor(diff/1e3);
  set('d',d); set('h',h); set('m',m); set('s',s);
}
function set(id,v){ document.getElementById(id).textContent = v; }
tick(); setInterval(tick, 1000);

// Nav scroll + mobile menu
const nav = document.getElementById('nav');
addEventListener('scroll', ()=> nav.classList.toggle('scrolled', scrollY > 40));
document.querySelector('.menu-btn').addEventListener('click', ()=>
  document.querySelector('#nav .links').classList.toggle('open'));
document.querySelectorAll('#nav .links a').forEach(a=>
  a.addEventListener('click', ()=> document.querySelector('#nav .links').classList.remove('open')));

// FAQ accordion
document.querySelectorAll('.acc button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const item = btn.parentElement, was = item.classList.contains('open');
    document.querySelectorAll('.acc').forEach(x=>x.classList.remove('open'));
    if(!was) item.classList.add('open');
  });
});

// RSVP demo submit
document.getElementById('rsvp-form').addEventListener('submit', e=>{
  e.preventDefault();
  e.target.classList.add('hidden');
  document.getElementById('rsvp-done').classList.remove('hidden');
  document.getElementById('rsvp-done').scrollIntoView({behavior:'smooth',block:'center'});
});
