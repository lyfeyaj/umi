module.exports=(()=>{var e={711:(e,r,n)=>{e.exports=n(417).randomBytes},286:(e,r,n)=>{"use strict";var t=n(711);var i=16;var u=generateUID();var a=new RegExp('(\\\\)?"@__(F|R|D|M|S|A|U|I|B)-'+u+'-(\\d+)__@"',"g");var f=/\{\s*\[native code\]\s*\}/g;var s=/function.*?\(/;var _=/.*?=>.*?/;var o=/[<>\/\u2028\u2029]/g;var c=["*","async"];var l={"<":"\\u003C",">":"\\u003E","/":"\\u002F","\u2028":"\\u2028","\u2029":"\\u2029"};function escapeUnsafeChars(e){return l[e]}function generateUID(){var e=t(i);var r="";for(var n=0;n<i;++n){r+=e[n].toString(16)}return r}function deleteFunctions(e){var r=[];for(var n in e){if(typeof e[n]==="function"){r.push(n)}}for(var t=0;t<r.length;t++){delete e[r[t]]}}e.exports=function serialize(e,r){r||(r={});if(typeof r==="number"||typeof r==="string"){r={space:r}}var n=[];var t=[];var i=[];var l=[];var p=[];var v=[];var g=[];var h=[];var d=[];function replacer(e,a){if(r.ignoreFunction){deleteFunctions(a)}if(!a&&a!==undefined){return a}var f=this[e];var s=typeof f;if(s==="object"){if(f instanceof RegExp){return"@__R-"+u+"-"+(t.push(f)-1)+"__@"}if(f instanceof Date){return"@__D-"+u+"-"+(i.push(f)-1)+"__@"}if(f instanceof Map){return"@__M-"+u+"-"+(l.push(f)-1)+"__@"}if(f instanceof Set){return"@__S-"+u+"-"+(p.push(f)-1)+"__@"}if(f instanceof Array){var _=f.filter(function(){return true}).length!==f.length;if(_){return"@__A-"+u+"-"+(v.push(f)-1)+"__@"}}}if(s==="function"){return"@__F-"+u+"-"+(n.push(f)-1)+"__@"}if(s==="undefined"){return"@__U-"+u+"-"+(g.push(f)-1)+"__@"}if(s==="number"&&!isNaN(f)&&!isFinite(f)){return"@__I-"+u+"-"+(h.push(f)-1)+"__@"}if(s==="bigint"){return"@__B-"+u+"-"+(d.push(f)-1)+"__@"}return a}function serializeFunc(e){var r=e.toString();if(f.test(r)){throw new TypeError("Serializing native function: "+e.name)}if(s.test(r)){return r}if(_.test(r)){return r}var n=r.indexOf("(");var t=r.substr(0,n).trim().split(" ").filter(function(e){return e.length>0});var i=t.filter(function(e){return c.indexOf(e)===-1});if(i.length>0){return(t.indexOf("async")>-1?"async ":"")+"function"+(t.join("").indexOf("*")>-1?"*":"")+r.substr(n)}return r}if(r.ignoreFunction&&typeof e==="function"){e=undefined}if(e===undefined){return String(e)}var y;if(r.isJSON&&!r.space){y=JSON.stringify(e)}else{y=JSON.stringify(e,r.isJSON?null:replacer,r.space)}if(typeof y!=="string"){return String(y)}if(r.unsafe!==true){y=y.replace(o,escapeUnsafeChars)}if(n.length===0&&t.length===0&&i.length===0&&l.length===0&&p.length===0&&v.length===0&&g.length===0&&h.length===0&&d.length===0){return y}return y.replace(a,function(e,u,a,f){if(u){return e}if(a==="D"){return'new Date("'+i[f].toISOString()+'")'}if(a==="R"){return"new RegExp("+serialize(t[f].source)+', "'+t[f].flags+'")'}if(a==="M"){return"new Map("+serialize(Array.from(l[f].entries()),r)+")"}if(a==="S"){return"new Set("+serialize(Array.from(p[f].values()),r)+")"}if(a==="A"){return"Array.prototype.slice.call("+serialize(Object.assign({length:v[f].length},v[f]),r)+")"}if(a==="U"){return"undefined"}if(a==="I"){return h[f]}if(a==="B"){return'BigInt("'+d[f]+'")'}var s=n[f];return serializeFunc(s)})}},417:e=>{"use strict";e.exports=require("crypto")}};var r={};function __nccwpck_require__(n){if(r[n]){return r[n].exports}var t=r[n]={exports:{}};var i=true;try{e[n](t,t.exports,__nccwpck_require__);i=false}finally{if(i)delete r[n]}return t.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(286)})();