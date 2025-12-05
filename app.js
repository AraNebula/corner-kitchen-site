const dishes = [
  {name:'Quesa-Birria Taco', tag:'Taco', img:'Quesa-Birria-Taco.jpg'},
  {name:'Quesa Taco', tag:'Taco', img:'Quesa-Taco.jpg'},
  {name:'Barbacoa Melt', tag:'Handheld', img:'Barbacoa-Melt.jpg'},
  {name:'Birria Eggrolls', tag:'Appetizer', img:'Birria-Eggrolls.jpg'},
  {name:'Breakfast Burrito', tag:'Burrito', img:'Breakfast-Burrito.jpg'},
  {name:'Nashville Hot Chicken Burrito', tag:'Burrito', img:'Nashville-Hot-Chicken-Burrito.jpg'},
  {name:'Bang Bang Chicken Sando', tag:'Handheld', img:'Bang-Bang-Chicken-Sando.jpg'},
  {name:'Loaded Fries', tag:'Side', img:'Loaded-Fries.jpg'},
  {name:'Crab Rangoon Fries', tag:'Side', img:'Rangoon-Fries.jpg'},
  {name:'Chori Queso Fries', tag:'Side', img:'Chori-Queso-Fries.jpg'},
  {name:'Chilaquiles with Red and Green Sauce', tag:'Brunch', img:'Chilaquiles-with-Red-and-Green-Sauce.jpg'},
  {name:'Cheesy Ramen', tag:'Bowl', img:'Cheesy-Ramen.jpg'},
  {name:'Tres Leches Cake', tag:'Dessert', img:'Tres-Leches-Cake.jpg'},
  {name:'Mango Margarita', tag:'Drink', img:'Mango-Margarita.jpg'},
  {name:'Vanilla Pancakes', tag:'Brunch', img:'Vanilla-Pancakes.jpg'},
  {name:'Elota Balls', tag:'Side', img:'Elota-Balls.jpg'},
  {name:'Candied Walnuts', tag:'Side', img:'Candied-Walnuts.jpg'},
  {name:'Birria Benny Sub Chorizo', tag:'Handheld', img:'Birria-Benny-Sub-Chorizo.jpg'}
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
    el.style.transform = `translate(-50%,-50%) translateY(${i*8}px) rotate(${(i-2)*1.2}deg) scale(${1 - i*0.02})`;
    rotator.appendChild(el);
  });
  let active = 0;
  setInterval(()=>{
    const items = rotator.querySelectorAll('.dish');
    items[active].classList.remove('active');
    active = (active+1)%items.length;
    items[active].classList.add('active');

    items.forEach((it, idx) => {
      if(!it.classList.contains('active')){
        it.style.transform = `translate(-50%,-50%) translateY(${idx*8}px) rotate(${(idx-2)*1.2}deg) scale(${1 - idx*0.02})`;
        it.style.zIndex = 20 - idx;
      } else {
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

  // Mobile nav toggle
  const burger = document.getElementById('burger');
  const nav = document.getElementById('primaryNav');
  if(burger && nav){
    burger.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      nav.style.display = nav.classList.contains('open') ? 'flex' : '';
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      const href = a.getAttribute('href');
      if(!href || href === '#') return;
      const target = document.querySelector(href);
      if(target){ 
        ev.preventDefault(); 
        target.scrollIntoView({behavior:'smooth',block:'start'}); 
      }
    });
  });

  // Subtle tilt on hover for feature cards
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
