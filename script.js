const glow=document.querySelector('.glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});const lb=document.querySelector('.lightbox'),im=lb.querySelector('img');document.querySelectorAll('.gallery button').forEach(b=>b.onclick=()=>{im.src=b.dataset.full;lb.classList.add('open');document.body.style.overflow='hidden'});function close(){lb.classList.remove('open');document.body.style.overflow=''}lb.querySelector('button').onclick=close;lb.onclick=e=>{if(e.target===lb)close()};document.onkeydown=e=>{if(e.key==='Escape')close()};const top=document.querySelector('.top');addEventListener('scroll',()=>top.classList.toggle('show',scrollY>500));top.onclick=()=>scrollTo({top:0,behavior:'smooth'});


// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
if (menuToggle && mobileMenu) {
  const setMenu = (open) => {
    mobileMenu.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  };
  menuToggle.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', e => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) setMenu(false);
  });
}

// Keep the floating glow from doing unnecessary work on touch-only phones.
if (window.matchMedia('(pointer: coarse)').matches) {
  document.body.classList.add('touch-device');
}
