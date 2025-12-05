const dishes = [
  {name:'Quesa-Birria Taco', tag:'Quesa-Birria', img:'/Quesa-Birria Taco.jpg'},
  {name:'Barbacoa Melt', tag:'Barbacoa', img:'/Barbacoa Melt.jpg'},
  {name:'Birria Eggrolls', tag:'Birria', img:'/Birria Eggrolls.jpg'},
  {name:'Chori Queso Fries', tag:'Choriqueso', img:'/Chori Queso Fries.jpg'},
  {name:'Nashville Hot Chicken', tag:'Nashville Hot', img:'/Nashville Hot Chicken Burrito.jpg'},
  {name:'Bang Bang Chicken Sando', tag:'Bang Bang', img:'/Bang Bang Chicken Sando.jpg'},
  {name:'Loaded Fries', tag:'Fries', img:'/Loaded Fries.jpg'},
  {name:'Crab Rangoon Fries', tag:'Rangoon', img:'/Crab Rangoon Fries.jpg'},
  {name:'Sweet Corn Crème Brûlée', tag:'Dessert', img:'/Sweet Corn Creme Brulee.jpg'},
  {name:'Tres Leches Cake', tag:'Dessert', img:'/Tres Leches Cake.jpg'},
  {name:'Mango Margarita', tag:'Drink', img:'/Mango Margarita.jpg'}
];

document.addEventListener('DOMContentLoaded', ()=> {
  // year
  const year = new Date().getFullYear();
  document.getElementById('year').textContent = year;

  // Dish rotator
  const rotator = document.getElementById('dishRotator');
  dishes.slice(0,5).forEach((d,i)=>{
    const el = document.createElement('div');
    el.className='dish'+(i===0?' active':'');
    el.style.zIndex = 20 - i;
    el.innerHTML = `
      <img loading="lazy" src="${d.img}" alt="${d.name}" />
      <div class="dish-tag">${d.tag}</div>
    `;
    // center each card and layer with smaller vertical offset/rotation while preserving centering
    el.style.transform = `translate(-50%,-50%) translateY(${i*8}px) rotate(${(i-2)*1.2}deg) scale(${1 - i*0.02})`;
    rotator.appendChild(el);
  });
  let active = 0;
  setInterval(()=>{
    const items = rotator.querySelectorAll('.dish');
    items[active].classList.remove('active');
    active = (active+1)%items.length;
    items[active].classList.add('active');

    // ensure non-active items keep their centered stacked transforms after class change
    items.forEach((it, idx) => {
      if(!it.classList.contains('active')){
        it.style.transform = `translate(-50%,-50%) translateY(${idx*8}px) rotate(${(idx-2)*1.2}deg) scale(${1 - idx*0.02})`;
        it.style.zIndex = 20 - idx;
      } else {
        // active item gets a slight scale/rotation handled by CSS .dish.active
        it.style.zIndex = 30;
      }
    });
  },3500);

  // Featured grid
  const featured = document.getElementById('featuredGrid');
  dishes.forEach(d=>{
    const card = document.createElement('article');
    card.className='feature-card';
    card.innerHTML = `
      <img src="${d.img}" alt="${d.name}" loading="lazy" />
      <h4>${d.name}</h4>
      <p class="muted">A corner kitchen favorite — bold flavors, generous portions.</p>
    `;
    featured.appendChild(card);
  });

  // Lazy load map iframe on demand
  // Order modal: attempt to embed Clover ordering inside the site's modal; if embedding is blocked, fall back to opening a new tab
  const orderBtns = document.querySelectorAll('#orderBtn, #heroOrder, #menuOrderBtn');
  const mapModal = document.getElementById('mapModal'); // reused modal container
  const mapEmbed = document.getElementById('mapEmbed');
  const modalClose = document.getElementById('modalClose');

  // Helper to show fallback (open in new tab) and close modal
  function fallbackOpen(url){
    window.open(url, '_blank', 'noopener');
    mapModal.classList.add('hidden');
  }

  orderBtns.forEach(b=>{
    b.addEventListener('click', (e)=>{
      e.preventDefault();
      const url = b.dataset.orderUrl || b.getAttribute('href');
      if(!url) return fallbackOpen('https://www.clover.com/online-ordering/corner-kitchen-south-omaha');

      // If the target is Clover (commonly blocked from embedding), skip iframe attempt and open directly
      try {
        const parsed = new URL(url, window.location.href);
        if (parsed.hostname.includes('clover.com')) {
          return fallbackOpen(url);
        }
      } catch (err) {
        // ignore parse errors and continue to iframe attempt
      }

      // Show modal and insert iframe
      mapModal.classList.remove('hidden');
      mapEmbed.innerHTML = ''; // clear previous content

      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.loading = 'lazy';
      iframe.style.width = '100%';
      iframe.style.height = '640px';
      iframe.style.border = '0';
      iframe.referrerPolicy = 'no-referrer';
      // add a small attribute to reduce some embed restrictions (won't bypass X-Frame-Options)
      iframe.sandbox = ''; // start restrictive; remove if loaded successfully

      let loaded = false;
      const loadTimeout = 1800; // ms

      // If the frame loads successfully, remove sandbox to allow interactive behavior
      iframe.addEventListener('load', () => {
        loaded = true;
        // Some browsers will fire load even when blocked; check contentWindow access
        try {
          // Accessing location.href will throw if cross-origin/frame is blocked; use a safe check
          const cw = iframe.contentWindow;
          if (cw && typeof cw.location !== 'undefined') {
            // remove sandbox attribute to allow normal interaction (if allowed)
            iframe.removeAttribute('sandbox');
          }
        } catch (err) {
          // ignore — cross-origin access not allowed, but load succeeded visually
        }
      });

      // Append iframe immediately so browser attempts to load
      mapEmbed.appendChild(iframe);

      // If load doesn't happen within timeout, assume it's blocked and fallback
      const t = setTimeout(() => {
        if (!loaded) {
          // Remove iframe and open in new tab
          mapEmbed.innerHTML = '';
          fallbackOpen(url);
        }
      }, loadTimeout);

      // Clean-up: if modal closed manually cancel timeout
      const cleanup = () => {
        clearTimeout(t);
        mapEmbed.innerHTML = '';
        mapModal.classList.add('hidden');
        modalClose.removeEventListener('click', cleanup);
        mapModal.removeEventListener('click', outsideClick);
      };

      modalClose.addEventListener('click', cleanup);
      const outsideClick = (e) => { if (e.target === mapModal) cleanup(); };
      mapModal.addEventListener('click', outsideClick);
    });
  });

  modalClose.addEventListener('click', ()=> mapModal.classList.add('hidden'));
  mapModal.addEventListener('click', (e)=> { if(e.target===mapModal) mapModal.classList.add('hidden') });

  // Mobile nav toggle
  const burger = document.getElementById('burger');
  const nav = document.getElementById('primaryNav');
  burger.addEventListener('click', ()=>{
    nav.classList.toggle('open');
    nav.style.display = nav.classList.contains('open') ? 'flex' : '';
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      const href = a.getAttribute('href');
      // ignore plain '#' or empty href which are not valid selectors / are placeholders
      if(!href || href === '#') return;
      const target = document.querySelector(href);
      if(target){ ev.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });

  // Micro-interactions: subtle tilt on hover for feature cards
  document.querySelectorAll('.feature-card').forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const rect = card.getBoundingClientRect();
      const dx = (e.clientX - rect.left - rect.width/2)/(rect.width/2);
      const dy = (e.clientY - rect.top - rect.height/2)/(rect.height/2);
      card.style.transform = `rotateX(${dy*4}deg) rotateY(${dx*-6}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', ()=> card.style.transform='translateY(0)');
  });

});