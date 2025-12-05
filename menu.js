document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('yearMenu').textContent = new Date().getFullYear();

  // price map
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
    // Noodles / Bowls
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
    'Sweet Corn Crème Brûlée':'$6.50',
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
    'Chori-Queso Fries (Small)':'$5.00',
    // Food truck simplified items
    'Tacos Asada':'$3.00',
    'Tacos Korean Pork':'$3.00',
    'Tacos Quesabirria':'$3.00',
    'Tacos Sriracha Chicken':'$3.00',
    'Bang Bang Chicken Sando (Truck)':'$13.50',
    'Nashville Burrito (Truck)':'$13.00',
    'Quesadilla (Truck)':'$12.00',
    'Rangoon Fries (Truck)':'$9.00',
    'Asada Fries (Truck)':'$9.00',
    'Mango Margarita':'$8.00'
  };

  // helper for items
  const sample = (name, img) => {
    const price = priceMap[name] || priceMap[name.replace(/\s*\(.*\)/,'')] || '$12.99';
    return {name, img, price, desc:'Generous portion with signature sauce.'};
  };

  // ---- All menu items with correct filenames & URL-encoded spaces ----
  const tacos = [
    sample('Quesa-Birria','Quesa-Birria%20Taco.jpg'),
    sample('Quesa Taco','Quesa%20Taco.jpg'),
    sample('Barbacoa Melt','Barbacoa%20Melt.jpg'),
    sample('Birria Eggrolls','Birria%20Eggrolls.jpg'),
    sample('Taco de Asada','Taco%20de%20Asada.jpg'),
    sample('TJ Shrimp Taco','TJ%20Shrimp%20Taco.jpg'),
    sample('Korean Pork Taco','Korean%20Pork%20Taco.jpg'),
    sample('Sriracha Chicken Taco','Sriracha%20Chicken%20Taco.jpg'),
  ];

  const burritos = [
    sample('Classic Burrito','Breakfast%20Burrito.jpg'),
    sample('Nashville Chicken Burrito','Nashville%20Hot%20Chicken%20Burrito.jpg'),
    sample('Chilango Burrito','Chilango%20Burrito.jpg'),
    sample('Asada Burrito','Asada%20Burrito.jpg'),
  ];

  const bowls = [
    sample('Cheesy Rice Bowl','Cheesy%20Ramen.jpg'),
    sample('Chipotle Miso Ramen','Chipotle%20Miso%20Ramen.jpg'),
    sample('Dan Dan Noodles','Dan%20Dan%20Noodles.jpg'),
    sample('Loaded Mac & Cheese','Loaded%20Mac%20%26%20Cheese.jpg'),
    sample('Spicy Shrimp Fried Rice','Spicy%20Shrimp%20Fried%20Rice.jpg'),
  ];

  const sides = [
    sample('Chori-Queso Fries (Large)','Chori%20Queso%20Fries.jpg'),
    sample('Loaded Fries','Loaded%20Fries.jpg'),
    sample('Rangoon Fries (Large)','Rangoon%20Fries.jpg'),
    sample('Elote Tots (Large)','Elota%20Balls.jpg'),
    sample('Papas A La Mexicana (Large)','Papas%20A%20La%20Mexicana.jpg'),
  ];

  const specials = [
    sample('Bang Bang Chicken Sando','Bang%20Bang%20Chicken%20Sando.jpg'),
  ];

  const drinks = [
    sample('Mango Margarita','Mango%20Margarita.jpg'),
  ];

  // render function
  function renderList(list, elId){
    const el = document.getElementById(elId);
    el.innerHTML = ''; // clear existing
    list.forEach(item=>{
      const card = document.createElement('div');
      card.className='feature-card';
      card.innerHTML = `<img src="${item.img}" alt="${item.name}" /><h4>${item.name} <span style="float:right;color:var(--gold)">${item.price}</span></h4><p style="color:var(--muted)">${item.desc}</p>`;
      el.appendChild(card);
    });
  }

  renderList(tacos, 'tacosGrid');
  renderList(burritos, 'burritosGrid');
  renderList(bowls, 'bowlsGrid');
  renderList(sides, 'sidesGrid');
  renderList(specials, 'specialsGrid');
  renderList(drinks, 'drinksGrid');
});
