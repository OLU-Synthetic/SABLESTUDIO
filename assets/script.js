/* SABLE STUDIO — tiny JS (no dependencies) */
(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const map = {
    '': 'index',
    'index.html':'index',
    'services.html':'services',
    'work.html':'work',
    'about.html':'about',
    'contact.html':'contact'
  };
  const key = map[path] || null;
  if(key){
    document.querySelectorAll('[data-nav]').forEach(a=>{
      if(a.getAttribute('data-nav')===key) a.classList.add('active');
    });
  }

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
        history.replaceState(null,'',id);
      }
    });
  });

  // Mobile menu (minimal)
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-mobile]');
  if(burger && menu){
    burger.addEventListener('click', ()=>{
      const open = menu.getAttribute('data-open')==='true';
      menu.setAttribute('data-open', String(!open));
      menu.style.display = open ? 'none' : 'block';
      burger.setAttribute('aria-expanded', String(!open));
    });
  }
})();
