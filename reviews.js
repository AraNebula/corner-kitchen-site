const sampleReviews = [
  {text:'The service was top notch… food demolished instantly by the whole family!', tag:'family', rating:5},
  {text:'This place blew other Mexican restaurants out of the water.', tag:'tacos', rating:5},
  {text:'Inconspicuous location but incredible food and huge portions.', tag:'portions', rating:4.8},
  {text:'I would stop here often if I lived in Omaha.', tag:'burritos', rating:4.7},
  {text:'Corner Kitchen knocked it out of the park.', tag:'service', rating:5},
];

function starHTML(r){
  const full = Math.floor(r);
  const half = r - full >= 0.5;
  let out='';
  for(let i=0;i<full;i++) out += '★';
  if(half) out += '☆';
  while(out.length<5) out += '☆';
  return `<span class="stars" style="color:var(--gold);font-weight:800">${out}</span>`;
}

document.addEventListener('DOMContentLoaded', ()=>{
  // Set current year
  document.getElementById('yrRev').textContent = new Date().getFullYear();

  const grid = document.getElementById('reviewsGrid');

  function render(list){
    grid.innerHTML = '';
    list.forEach(r=>{
      const card = document.createElement('div');
      card.className='review-card';
      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <strong style="color:#fff">${r.tag.toUpperCase()}</strong>
          ${starHTML(r.rating)}
        </div>
        <p style="margin:0;color:var(--muted)">${r.text}</p>
      `;
      grid.appendChild(card);
    });
  }

  // Initial render
  render(sampleReviews);

  // Filter buttons
  document.querySelectorAll('.btn.secondary[data-filter]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const f = btn.dataset.filter;
      if(f==='all') return render(sampleReviews);
      render(sampleReviews.filter(s=>s.tag===f));
    });
  });
});
