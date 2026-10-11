/* Website Deals — animation engine. Add before </body>: <script src="fx.js"></script> */
(()=>{
const q=s=>[...document.querySelectorAll(s)];
const mk=c=>{const i=document.createElement('i');i.className=c;document.body.append(i);return i};
const bar=mk('fx-bar'),glow=mk('fx-glow');
addEventListener('scroll',()=>{bar.style.transform='scaleX('+(scrollY/((document.documentElement.scrollHeight-innerHeight)||1))+')'},{passive:true});
addEventListener('pointermove',e=>{glow.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)'});

function count(el){
  const m=el.textContent.match(/^(\D*)([\d,.]+)(.*)$/);if(!m)return;
  const end=parseFloat(m[2].replace(/,/g,'')),dec=(m[2].split('.')[1]||'').length,t0=performance.now();
  (function f(t){const p=Math.min(1,(t-t0)/1300),e=1-Math.pow(1-p,3);
    el.textContent=m[1]+(end*e).toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec})+m[3];
    if(p<1)requestAnimationFrame(f)})(t0);
}
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;const el=e.target;
  el.classList.add('in');io.unobserve(el);
  setTimeout(()=>el.style.transitionDelay='',1100);
  if(el.matches('.stat-number'))count(el);
}),{threshold:.12});

function tilt(el){
  el.classList.add('tilt');
  el.addEventListener('pointermove',e=>{
    const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    el.style.setProperty('--rx',(-y*8)+'deg');el.style.setProperty('--ry',(x*10)+'deg');
  });
  el.addEventListener('pointerleave',()=>{el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg')});
}
function magnet(el){
  el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();
    el.style.translate=((e.clientX-r.left-r.width/2)*.18)+'px '+((e.clientY-r.top-r.height/2)*.25)+'px'});
  el.addEventListener('pointerleave',()=>el.style.translate='');
}
const SEL='.section-head,.category-card,.website-card,.feature-card,.step,.cta-box,.newsletter-inner,.stat,.market-toolbar,.footer-grid>*,.browser-wrap';
let n=0;
function scan(){
  q(SEL).forEach(el=>{
    if(el.dataset.fx)return;el.dataset.fx=1;el.classList.add('fx');
    el.style.transitionDelay=(n++%4)*80+'ms';io.observe(el);
    if(el.matches('.website-card'))tilt(el);
  });
  q('.btn-primary,.header-explore').forEach(el=>{if(!el.dataset.mg){el.dataset.mg=1;magnet(el)}});
  q('.stat-number').forEach(el=>{if(!el.dataset.fx){el.dataset.fx=1;io.observe(el)}});
}
let t;new MutationObserver(()=>{clearTimeout(t);t=setTimeout(scan,60)}).observe(document.body,{childList:true,subtree:true});
scan();
})();
