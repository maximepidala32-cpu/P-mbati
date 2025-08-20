
document.querySelectorAll('[data-scrollto]').forEach(el=>{
  el.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(el.getAttribute('href')||el.dataset.scrollto)?.scrollIntoView({behavior:'smooth'});
  });
});
