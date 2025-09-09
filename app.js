
/* PrimeWave Exchange App (vanilla JS) */
const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));
const $  = (sel, el=document) => el.querySelector(sel);

function renderBadges(){
  const box = $('#walletBadges');
  box.innerHTML = '';
  (WALLETS||[]).forEach(w => {
    const span = document.createElement('span');
    span.className = 'badge';
    span.textContent = w;
    box.appendChild(span);
  });
}

// ===== RATES =====
function renderRates(list){
  const tbody = $('#ratesBody');
  tbody.innerHTML = '';
  list.forEach(r => {
    const tr = document.createElement('tr');
    const updated = new Date(r.updated);
    tr.innerHTML = `
      <td>${r.src}</td>
      <td>${r.dst}</td>
      <td><b>${Number(r.rate).toLocaleString()}</b></td>
      <td>${r.min}</td>
      <td>${r.max}</td>
      <td>${updated.toLocaleDateString()}</td>
      <td>${r.continent || '-'}</td>`;
    tbody.appendChild(tr);
  });
}

function sortRates(list, key){
  const arr = [...list];
  const desc = key.startsWith('-');
  const k = desc ? key.slice(1) : key;
  arr.sort((a,b)=>{
    const A = k==='updated' ? new Date(a[k]).getTime() : a[k];
    const B = k==='updated' ? new Date(b[k]).getTime() : b[k];
    if(A < B) return desc?1:-1;
    if(A > B) return desc?-1:1;
    return 0;
  });
  return arr;
}

function filterRates(){
  const q = $('#searchRates').value.trim().toLowerCase();
  const cont = $('#continentRates').value;
  let list = RATES.filter(r => !cont || r.continent === cont);
  if(q){
    list = list.filter(r =>
      [r.src, r.dst, String(r.rate)].some(v => String(v).toLowerCase().includes(q))
    );
  }
  return list;
}

function refreshRates(){
  const sortKey = $('#sortRates').value;
  const filtered = filterRates();
  const sorted = sortRates(filtered, sortKey);
  renderRates(sorted);
}

// ===== COUNTRIES / PAYMENTS =====
function countryCard(c){
  const div = document.createElement('div');
  div.className = 'card';
  const titleCcy = c.currency ? ` <span class="muted">(${c.currency})</span>` : '';
  const methodsHtml = (c.methods||[]).map(m => 
    `<div class="mono"><b>${m.type}:</b> <span class="copy">${m.details}</span></div>`
  ).join('');
  div.innerHTML = `
    <h4>${c.country}${titleCcy}</h4>
    <p class="muted">${c.continent}</p>
    ${methodsHtml || '<div class="mono muted">Details: Coming soon</div>'}
    <div class="mono" style="margin-top:6px">Limits: $${c.min}–$${c.max}</div>
  `;
  return div;
}

function renderCountries(list){
  const grid = $('#countriesGrid');
  grid.innerHTML = '';
  list.forEach(c => grid.appendChild(countryCard(c)));

  // attach copy-to-clipboard
  $$('.copy', grid).forEach(el=>{
    el.style.cursor = 'pointer';
    el.title = 'Click to copy';
    el.addEventListener('click', async ()=>{
      try{ await navigator.clipboard.writeText(el.textContent.trim());
        el.style.color = 'var(--ok)';
        setTimeout(()=> el.style.color = '', 900);
      }catch(e){ alert('Copy not supported on this browser.'); }
    });
  });
}

function filterCountries(){
  const q = $('#searchCountries').value.trim().toLowerCase();
  const cont = $('#continentCountries').value;
  let list = COUNTRIES.filter(c => !cont || c.continent === cont);
  if(q){
    list = list.filter(c => {
      const parts = [c.country, c.currency || ''];
      return parts.some(v => String(v).toLowerCase().includes(q));
    });
  }
  // Sort by continent then country
  return list.sort((a,b)=> (a.continent||'').localeCompare(b.continent||'') || a.country.localeCompare(b.country));
}

// ===== MODAL & CONTACT =====
function setupModal(){
  const modal = $('#exchangeModal');
  const openBtn = $('#openModal');
  const closeBtn = $('#closeModal');
  const cancelBtn = $('#cancelForm');
  function open(){ modal.classList.add('open'); }
  function close(){ modal.classList.remove('open'); }
  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  cancelBtn.addEventListener('click', close);
  modal.addEventListener('click', (e)=>{ if(e.target === modal) close(); });

  $('#exchangeForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const summary = `PrimeWave Exchange Request\nFrom: ${data.from}\nTo: ${data.to}\nAmount: ${data.amount}\nContact: ${data.contact}\nNotes: ${data.notes||'-'}`;
    const url = `https://wa.me/?text=${encodeURIComponent(summary)}`;
    window.open(url, '_blank');
    close();
  });
}

function setupContact(){
  $('#copyEmail').addEventListener('click', (e)=>{
    e.preventDefault();
    const email = 'support@primewave.exchange';
    navigator.clipboard.writeText(email).then(()=>{
      $('#copyEmail').textContent = 'Email copied: ' + email;
      setTimeout(()=> $('#copyEmail').textContent = 'Email: ' + email, 1200);
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', ()=>{
  // Year
  $('#year').textContent = new Date().getFullYear();

  // Badges
  renderBadges();

  // Rates
  refreshRates();
  $('#searchRates').addEventListener('input', refreshRates);
  $('#continentRates').addEventListener('change', refreshRates);
  $('#sortRates').addEventListener('change', refreshRates);
  $('#refreshRates').addEventListener('click', refreshRates);

  // Countries
  renderCountries(filterCountries());
  $('#searchCountries').addEventListener('input', ()=> renderCountries(filterCountries()));
  $('#continentCountries').addEventListener('change', ()=> renderCountries(filterCountries()));

  // Modal & Contact
  setupModal();
  setupContact();
});
