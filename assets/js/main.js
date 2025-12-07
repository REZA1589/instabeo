// particles.js کهکشانی
particlesJS("particles-js",{
  particles:{number:{value:90,density:{enable:true,value_area:800}},
    color:{value:["#00ffff","#ff00ff","#ffffff"]},
    shape:{type:"circle"},
    opacity:{value:0.8,random:true},
    size:{value:3,random:true},
    line_linked:{enable:true,distance:150,color:"#00ffff",opacity:0.3,width:1},
    move:{enable:true,speed:2}
  },
  interactivity:{detect_on:"canvas",events:{onhover:{enable:true,mode:"repulse"},onclick:{enable:true,mode:"push"}}},
  retina_detect:true
});

// Header scroll
window.addEventListener("scroll",()=>document.querySelector("header").classList.toggle("scrolled",scrollY>50));

// Mobile menu
document.querySelector(".menu-btn")?.addEventListener("click",()=>document.querySelector("nav").classList.toggle("active"));

// Form floating labels
document.querySelectorAll("input, textarea").forEach(el=>{
  el.addEventListener("focus",()=>el.parentElement.classList.add("focused"));
  el.addEventListener("blur",()=>{if(!el.value)el.parentElement.classList.remove("focused")});
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
  e.preventDefault();document.querySelector(a.getAttribute("href"))?.scrollIntoView({behavior:"smooth"});
}));

// سیستم تم جدید — فقط این رو جایگزین کن
document.querySelectorAll('.theme-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    userData.theme = card.dataset.theme;
    saveAndRefresh();
  });
});

// اعمال تم در profile.html (این رو توی profile.html قبل از </body> جایگزین کن)
window.addEventListener('message', e => { if(e.data.type==='theme') applyTheme(e.data.theme); });

const themes = {
  galaxy:     {n1:'#ff00ff', n2:'#00ffff', bg:'radial-gradient(circle at 50% 0%, #1a1a3a 0%, #000 70%)'},
  cyberpunk:  {n1:'#ff00ff', n2:'#ff0066', bg:'radial-gradient(circle at 50% 0%, #3a003a 0%, #000 70%)'},
  ocean:      {n1:'#00d4ff', n2:'#008cff', bg:'radial-gradient(circle at 50% 0%, #001a33 0%, #000 70%)'},
  sunset:     {n1:'#ff6b6b', n2:'#ffa500', bg:'radial-gradient(circle at 50% 0%, #331100 0%, #000 70%)'},
  emerald:    {n1:'#00ff88', n2:'#00ffcc', bg:'radial-gradient(circle at 50% 0%, #00331a 0%, #000 70%)'},
  blood:      {n1:'#ff0033', n2:'#cc0000', bg:'radial-gradient(circle at 50% 0%, #330000 0%, #000 70%)'},
  gold:       {n1:'#ffd700', n2:'#b8860b', bg:'radial-gradient(circle at 50% 0%, #332900 0%, #000 70%)'},
  lavender:   {n1:'#b19cd9', n2:'#e0bbff', bg:'radial-gradient(circle at 50% 0%, #2a1a33 0%, #000 70%)'},
  matrix:     {n1:'#00ff00', n2:'#39ff14', bg:'radial-gradient(circle at 50% 0%, #001a00 0%, #000 70%)'},
  'purple-haze': {n1:'#9d00ff', n2:'#da70d6', bg:'radial-gradient(circle at 50% 0%, #2a0033 0%, #000 70%)'},
  arctic:     {n1:'#40e0d0', n2:'#00ced1', bg:'radial-gradient(circle at 50% 0%, #001a1a 0%, #000 70%)'},
  inferno:    {n1:'#ff4500', n2:'#ff0000', bg:'radial-gradient(circle at 50% 0%, #331100 0%, #000 70%)'},
  midnight:   {n1:'#330066', n2:'#6600cc', bg:'radial-gradient(circle at 50% 0%, #0a001a 0%, #000 70%)'},
  rose:       {n1:'#ff1493', n2:'#ff69b4', bg:'radial-gradient(circle at 50% 0%, #33001a 0%, #000 70%)'},
  'neon-dream': {n1:'#00ffea', n2:'#cc00ff', bg:'radial-gradient(circle at 50% 0%, #001a1a 0%, #000 70%)'}
};

function applyTheme(name) {
  const t = themes[name] || themes.galaxy;
  document.documentElement.style.setProperty('--n1', t.n1);
  document.documentElement.style.setProperty('--n2', t.n2);
  document.body.style.background = t.bg;
}

// بارگذاری اولیه
const saved = JSON.parse(localStorage.getItem('hnstabeo_user') || '{}');
if (saved.theme) applyTheme(saved.theme);
