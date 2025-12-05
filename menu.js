document.addEventListener('DOMContentLoaded', ()=> {
  document.getElementById('yearMenu').textContent = new Date().getFullYear();

  const priceMap = {
    'Quesa-Birria':'$5.00',
    'Quesa Taco':'$4.00',
    'Barbacoa Melt':'$13.50',
    'Birria Eggrolls':'$14.00',
    'Bang Bang Chicken Sando':'$14.00',
    'Breakfast Burrito':'$12.50',
    'Nashville Hot Chicken Burrito':'$13.50',
    'Cheesy Rice Bowl':'$14.00',
    'Chori-Queso Fries (Large)':'$10.00',
    'Loaded Fries':'$9.50',
    'Crab Rangoon Fries':'$10.00',
    'Mango Margarita':'$8.50',
    'Tres Leches Cake':'$7.00',
    'Sweet Corn Crème Brûlée':'$6.50',
    'Birria Benny Sub Chorizo':'$12.50',
    'Chilaquiles with Red and Green Sauce':'$14.50',
    'Elota Balls':'$8.00',
    'Vanilla Pancakes':'$9.00',
    'Candied Walnuts':'$5.00',
    'Rangoon Fries':'$9.50'
  };

  const sample = (name, img) => {
    const price = priceMap[name] || '$12.99';
    return {name, img, price, desc:'Generous portion with signature sauce.'};
  };

  // only include items for which images exist
  const tacos = [
    sample('Quesa-Birria','Quesa-Birria-Taco.jpg'),
    sample('Quesa Taco','Quesa-Taco.jpg'),
    sample('Barbacoa Melt','Barbacoa-Melt.jpg'),
    sample('Birria Eggrolls','Birria-Eggrolls.jpg')
  ];

  const burritos = [
    sample('Breakfast Burrito','Breakfast-Burrito.jpg'),
    sample('Nashville Hot Chicken Burrito','Nashville-Hot-Chicken-Burrito.jpg')
  ];

  const handhelds = [
    sample('Bang Bang Chicken Sando','Bang-Bang-Chicken-Sando.jpg'),
    sample('Birria Benny Sub Chorizo','Birria-Benny-Sub-Chorizo.jpg')
  ];

  const bowls = [
    sample('Cheesy Rice Bowl','Cheesy-Ramen.jpg')
  ];

  const sides = [
    sample('Chori-Queso Fries (Large)','Chori-Queso-Fries.jpg'),
    sample('Loaded Fries','Loaded-Fries.jpg'),
    sample('Crab Rangoon Fries','Crab-Rangoon-Fries.jpg'),
    sample('Rangoon Fries','Rangoon-Fries.jpg'),
    sample('Elota Balls','Elota-Balls.jpg')
  ];

  const desserts = [
    sample('Tres Leches Cake','Tres-Leches-Cake.jpg'),
    sample('Sweet Corn Crème Brûlée','Sweet-Corn-Creme-Brulee.jpg'),
    sample('Vanilla Pancakes','Vanilla-Pancakes.jpg'),
    sample('Candied Walnuts','Candied-Walnuts.jpg')
  ];

  const drinks = [
    sample('Mango Margarita','Mango-Margarita.jpg')
  ];

  function renderList(list, elId){
    const el = document.getElementById(elId);
    list.forEach(item=>{
      const card = document.createElement('div');
      card.className='feature-card';
      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}" />
        <h4>${item.name} <span style="float:right;color:var(--gold)">${item.price}</span></h4>
        <p style="color:var(--muted)">${item.desc}</p>
      `;
      el.appendChild(card);
    });
  }

  renderList(tacos, 'tacosGrid');
  renderList(burritos, 'burritosGrid');
  renderList(handhelds, 'specialsGrid'); // reuse specialsGrid for handhelds
  renderList(bowls, 'bowlsGrid');
  renderList(sides, 'sidesGrid');
  renderList(desserts, 'dessertsGrid'); // you may need to add this div in menu.html
  renderList(drinks, 'drinksGrid');
});
