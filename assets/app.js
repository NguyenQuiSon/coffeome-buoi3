(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],EMAIL='hello@coffeeome.example',fmt=n=>n.toLocaleString('vi-VN')+'đ';
if(location.protocol==='file:')$$('a[href$="/"]').forEach(a=>a.href+='index.html');
$('#tg').onclick=()=>$('#nav').classList.toggle('open');
let cart=[];try{cart=JSON.parse(localStorage.getItem('cfe')||'[]')}catch(e){}
const save=()=>{try{localStorage.setItem('cfe',JSON.stringify(cart))}catch(e){}draw()};
function draw(){$('#cnt').textContent=cart.reduce((s,i)=>s+i.q,0);const l=$('#lines');l.textContent='';if(!cart.length)l.textContent='Giỏ hàng trống.';
cart.forEach((i,k)=>{const d=document.createElement('div');d.className='ln';const t=document.createElement('span');t.textContent=i.name+' × '+i.q+' – '+fmt(i.price*i.q);const b=document.createElement('span');
[['−',-1],['+',1]].forEach(([x,v])=>{const e=document.createElement('button');e.textContent=x;e.setAttribute('aria-label',v>0?'Tăng':'Giảm');e.onclick=()=>{i.q+=v;if(i.q<1)cart.splice(k,1);save()};b.append(e)});d.append(t,b);l.append(d)});
$('#total').textContent=fmt(cart.reduce((s,i)=>s+i.price*i.q,0))}
$('#cb').onclick=()=>$('#cart').hidden=!$('#cart').hidden;$('#cx').onclick=()=>$('#cart').hidden=true;$('#clr').onclick=()=>{cart=[];save()};
$$('.add').forEach(b=>b.onclick=()=>{const d=b.closest('.dish'),id=d.dataset.id,f=cart.find(i=>i.id===id);f?f.q++:cart.push({id,name:d.dataset.name,price:+d.dataset.price,q:1});save();$('#cart').hidden=false});
$('#send').onclick=()=>{if(!cart.length)return;const body=cart.map(i=>i.name+' x'+i.q).join('\n')+'\nTổng: '+$('#total').textContent;location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Đơn hàng Coffeeome')+'&body='+encodeURIComponent(body)};
const q=$('#q');if(q){let f='all';const run=()=>{let n=0;$$('.dish').forEach(d=>{const ok=(f==='all'||d.dataset.c===f)&&d.dataset.n.includes(q.value.trim().toLowerCase());d.hidden=!ok;n+=ok});$('#none').hidden=n>0};
q.oninput=run;$$('.chip').forEach(c=>c.onclick=()=>{f=c.dataset.f;$$('.chip').forEach(x=>x.classList.toggle('on',x===c));run()})}
const cf=$('#cf');if(cf)cf.onsubmit=e=>{e.preventDefault();const o=$('#ok');if(!cf.n.value.trim()||!/^\S+@\S+\.\S+$/.test(cf.e.value)||!cf.m.value.trim()){o.textContent='Vui lòng nhập đủ họ tên, email hợp lệ và nội dung.';return}
o.textContent='Đang mở ứng dụng email để gửi…';location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Liên hệ từ '+cf.n.value)+'&body='+encodeURIComponent(cf.m.value+'\n\n'+cf.e.value)};
draw()})();
