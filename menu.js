document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('yearMenu').textContent = new Date().getFullYear();

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
    'Chori-Queso Fries (Small)':'$5.00',
    // Food truck simplified items
    'Tacos Asada':'$3.00',
    'Tacos Korean Pork':'$3.00',
    'Tacos Quesabirria':'$3.00',
    'Tacos Sriracha
