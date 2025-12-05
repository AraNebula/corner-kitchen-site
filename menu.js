document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('yearMenu').textContent = new Date().getFullYear();

  // price map based on your updated menu
  const priceMap = {
    // Brunch
    'Chilaquiles':'$14.50',
    'Tres Leches French Toast':'$12.00',
    'Huevos Rancheros':'$14.50',
    'Waffle':'$8.00',
    'Breaky Sando':'$13.50',
    'Korean Chicken and Waffles':'$14.50',
    'Avocado Toast':'$10.50',
    // Street Tacos
    'Taco de Asada':'$3.25',
    'Quesa-Birria':'$5.00',
    'TJ Shrimp Taco':'$4.00',
    'Korean Pork Taco':'$4.00',
    'Sriracha Chicken Taco':'$3.50',
    'Brussel Sprout Taco':'$3.50',
    'Al Pastor':'$3.50',
    'Surf and Turf':'$4.00',
    'Quesa Taco':'$4.00',
    // Burritos
    'Nashville Chicken Burrito':'$13.50',
    'Chilango Burrito':'$14.50',
    'Asada Burrito':'$13.00',
    'Surf and Turf Burrito':'$14.50',
    // Veg / Sides
    'Elote Bites (3)':'$8.00',
    'Kimchi Brussel Sprouts':'$9.00',
    'Korean Esquites':'$8.00',
    // Noodles
    'Chipotle Miso Ramen':'$16.50',
    'Dan Dan Noodles':'$16.00',
    'Loaded Mac & Cheese':'$15.00',
    'Spicy Shrimp Fried Rice':'$14.00',
    // Handhelds
    'Burger':'$13.50',
    'Bang Bang Chicken Sando':'$14.00',
    'Spicy Korean Chicken Sando':'$14.00',
    'Birria Torta':'$13.50',
    'Make Your Own':'$13.50',
    'Barbacoa Melt':'$13.50',
    // Desserts
    'ChocoFlan':'$6.00',
    'Tres Leches Cake':'$7.00',
    // Fries / fry-sides
    'Side of Fries':'$3.50',
    'Tater Tots':'$4.00',
    'Papas A La Mexicana (Large)':'$11.00',
    'Papas A La Mexicana (Small)':'$5.50',
    'Elote Tots (Large)':'$10.00',
    'Elote Tots (Small)':'$5.00',
    'Rangoon Fries (Large)':'$10.00',
    'Rangoon Fries (Small)':'$5.00',
    'Chori-Queso Fries (Large)':'$10.00',
    'Chori-Queso Fries (Small)':'$5.00'
  };

  // helper function to create menu items
  const sample = (name, img) => {
    const price = priceMap[name] || priceMap[name.replace(/\s*\(.*\)/,'')] || '$12.99';
    return {name, img, price, desc:'Generous portion with signature sauce.'};
  };

  // Menu items
  const tacos = [
    sample('Quesa-Birria','Quesa-Birria Taco.jpg'),
    sample('Quesa Taco','Quesa Taco.jpg'),
    sample('Barbacoa Melt','Barbacoa Melt.jpg'),
    sample('Birria Eggrolls','Birria Eggrolls.jpg'),
  ];
  const burritos = [
    sample('Classic Burrito','Breakfast Burrito.jpg'),
    sample('Nashville Chicken Burrito','Nashville Hot Chicken Burrito.jpg'),
  ];
  const bowls = [
    sample('Cheesy Rice Bowl','Cheesy Ramen.jpg')
  ];
  const sides = [
    sample('Chori-Queso Fries (Large)','Chori Queso Fries.jpg'),
    sample('Loaded Fries','Loaded Fries.jpg')
  ];
  const specials = [
    sample('Bang Bang Chicken Sando','Bang Bang Chicken Sando.jpg')
  ];
  const drinks = [
    sample('Mango Margarita','Mango Margarita.jpg')
  ];

  // function to render menu grids
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

  // render all sections
  renderList(tacos, 'tacosGrid');
  renderList(burritos, 'burritosGrid');
  renderList(bowls, 'bowlsGrid');
  renderList(sides, 'sidesGrid');
  renderList(specials, 'specialsGrid');
  renderList(drinks, 'drinksGrid');
});
