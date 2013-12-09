/* Begin - 403 - JS SWFObject rev. 437 */

/*    SWFObject v2.2 <http://code.google.com/p/swfobject/> 
    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

/* End - 403 - JS SWFObject rev. 437 *//* Begin - 400 - JS jQuery rev. 267 */

/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);
 
/* End - 400 - JS jQuery rev. 267 *//* Begin - 401 - JS jQuery Easing rev. 595 */

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158; 
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

/* End - 401 - JS jQuery Easing rev. 595 *//* Begin - 402 - JS jQuery Cycle rev. 16 */

/*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2009 M. Alsup
 * Version: 2.73 (04-NOV-2009)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.2.6 or later
 *
 * Originally based on the work of:
 *    1) Matt Oakes
 *    2) Torsten Baldes (http://medienfreunde.com/lab/innerfade/)
 *    3) Benjamin Sterling (http://www.benjaminsterling.com/experiments/jqShuffle/)
 */
(function(i){var l="2.73";if(i.support==undefined){i.support={opacity:!(i.browser.msie)}}function a(q){if(i.fn.cycle.debug){f(q)}}function f(){if(window.console&&window.console.log){window.console.log("[cycle] "+Array.prototype.join.call(arguments," "))}}i.fn.cycle=function(r,q){var s={s:this.selector,c:this.context};if(this.length===0&&r!="stop"){if(!i.isReady&&s.s){f("DOM not ready, queuing slideshow");i(function(){i(s.s,s.c).cycle(r,q)});return this}f("terminating; zero elements found by selector"+(i.isReady?"":" (DOM not ready)"));return this}return this.each(function(){var w=m(this,r,q);if(w===false){return}if(this.cycleTimeout){clearTimeout(this.cycleTimeout)}this.cycleTimeout=this.cyclePause=0;var x=i(this);var y=w.slideExpr?i(w.slideExpr,this):x.children();var u=y.get();if(u.length<2){f("terminating; too few slides: "+u.length);return}var t=k(x,y,u,w,s);if(t===false){return}var v=t.continuous?10:h(t.currSlide,t.nextSlide,t,!t.rev);if(v){v+=(t.delay||0);if(v<10){v=10}a("first timeout: "+v);this.cycleTimeout=setTimeout(function(){e(u,t,0,!t.rev)},v)}})};function m(q,t,r){if(q.cycleStop==undefined){q.cycleStop=0}if(t===undefined||t===null){t={}}if(t.constructor==String){switch(t){case"stop":q.cycleStop++;if(q.cycleTimeout){clearTimeout(q.cycleTimeout)}q.cycleTimeout=0;i(q).removeData("cycle.opts");return false;case"pause":q.cyclePause=1;return false;case"resume":q.cyclePause=0;if(r===true){t=i(q).data("cycle.opts");if(!t){f("options not found, can not resume");return false}if(q.cycleTimeout){clearTimeout(q.cycleTimeout);q.cycleTimeout=0}e(t.elements,t,1,1)}return false;case"prev":case"next":var u=i(q).data("cycle.opts");if(!u){f('options not found, "prev/next" ignored');return false}i.fn.cycle[t](u);return false;default:t={fx:t}}return t}else{if(t.constructor==Number){var s=t;t=i(q).data("cycle.opts");if(!t){f("options not found, can not advance slide");return false}if(s<0||s>=t.elements.length){f("invalid slide index: "+s);return false}t.nextSlide=s;if(q.cycleTimeout){clearTimeout(q.cycleTimeout);q.cycleTimeout=0}if(typeof r=="string"){t.oneTimeFx=r}e(t.elements,t,1,s>=t.currSlide);return false}}return t}function b(q,r){if(!i.support.opacity&&r.cleartype&&q.style.filter){try{q.style.removeAttribute("filter")}catch(s){}}}function k(y,J,u,t,E){var C=i.extend({},i.fn.cycle.defaults,t||{},i.metadata?y.metadata():i.meta?y.data():{});if(C.autostop){C.countdown=C.autostopCount||u.length}var r=y[0];y.data("cycle.opts",C);C.$cont=y;C.stopCount=r.cycleStop;C.elements=u;C.before=C.before?[C.before]:[];C.after=C.after?[C.after]:[];C.after.unshift(function(){C.busy=0});if(!i.support.opacity&&C.cleartype){C.after.push(function(){b(this,C)})}if(C.continuous){C.after.push(function(){e(u,C,0,!C.rev)})}n(C);if(!i.support.opacity&&C.cleartype&&!C.cleartypeNoBg){g(J)}if(y.css("position")=="static"){y.css("position","relative")}if(C.width){y.width(C.width)}if(C.height&&C.height!="auto"){y.height(C.height)}if(C.startingSlide){C.startingSlide=parseInt(C.startingSlide)}if(C.random){C.randomMap=[];for(var H=0;H<u.length;H++){C.randomMap.push(H)}C.randomMap.sort(function(L,w){return Math.random()-0.5});C.randomIndex=0;C.startingSlide=C.randomMap[0]}else{if(C.startingSlide>=u.length){C.startingSlide=0}}C.currSlide=C.startingSlide=C.startingSlide||0;var x=C.startingSlide;J.css({position:"absolute",top:0,left:0}).hide().each(function(w){var L=x?w>=x?u.length-(w-x):x-w:u.length-w;i(this).css("z-index",L)});i(u[x]).css("opacity",1).show();b(u[x],C);if(C.fit&&C.width){J.width(C.width)}if(C.fit&&C.height&&C.height!="auto"){J.height(C.height)}var D=C.containerResize&&!y.innerHeight();if(D){var v=0,B=0;for(var F=0;F<u.length;F++){var q=i(u[F]),K=q[0],A=q.outerWidth(),I=q.outerHeight();if(!A){A=K.offsetWidth}if(!I){I=K.offsetHeight}v=A>v?A:v;B=I>B?I:B}if(v>0&&B>0){y.css({width:v+"px",height:B+"px"})}}if(C.pause){y.hover(function(){this.cyclePause++},function(){this.cyclePause--})}if(c(C)===false){return false}var s=false;t.requeueAttempts=t.requeueAttempts||0;J.each(function(){var N=i(this);this.cycleH=(C.fit&&C.height)?C.height:N.height();this.cycleW=(C.fit&&C.width)?C.width:N.width();if(N.is("img")){var L=(i.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var O=(i.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete);var M=(i.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete);var w=(this.cycleH==0&&this.cycleW==0&&!this.complete);if(L||O||M||w){if(E.s&&C.requeueOnImageNotLoaded&&++t.requeueAttempts<100){f(t.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){i(E.s,E.c).cycle(t)},C.requeueTimeout);s=true;return false}else{f("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}}return true});if(s){return false}C.cssBefore=C.cssBefore||{};C.animIn=C.animIn||{};C.animOut=C.animOut||{};J.not(":eq("+x+")").css(C.cssBefore);if(C.cssFirst){i(J[x]).css(C.cssFirst)}if(C.timeout){C.timeout=parseInt(C.timeout);if(C.speed.constructor==String){C.speed=i.fx.speeds[C.speed]||parseInt(C.speed)}if(!C.sync){C.speed=C.speed/2}while((C.timeout-C.speed)<250){C.timeout+=C.speed}}if(C.easing){C.easeIn=C.easeOut=C.easing}if(!C.speedIn){C.speedIn=C.speed}if(!C.speedOut){C.speedOut=C.speed}C.slideCount=u.length;C.currSlide=C.lastSlide=x;if(C.random){C.nextSlide=C.currSlide;if(++C.randomIndex==u.length){C.randomIndex=0}C.nextSlide=C.randomMap[C.randomIndex]}else{C.nextSlide=C.startingSlide>=(u.length-1)?0:C.startingSlide+1}if(!C.multiFx){var G=i.fn.cycle.transitions[C.fx];if(i.isFunction(G)){G(y,J,C)}else{if(C.fx!="custom"&&!C.multiFx){f("unknown transition: "+C.fx,"; slideshow terminating");return false}}}var z=J[x];if(C.before.length){C.before[0].apply(z,[z,z,C,true])}if(C.after.length>1){C.after[1].apply(z,[z,z,C,true])}if(C.next){i(C.next).bind(C.prevNextEvent,function(){return o(C,C.rev?-1:1)})}if(C.prev){i(C.prev).bind(C.prevNextEvent,function(){return o(C,C.rev?1:-1)})}if(C.pager){d(u,C)}j(C,u);return C}function n(q){q.original={before:[],after:[]};q.original.cssBefore=i.extend({},q.cssBefore);q.original.cssAfter=i.extend({},q.cssAfter);q.original.animIn=i.extend({},q.animIn);q.original.animOut=i.extend({},q.animOut);i.each(q.before,function(){q.original.before.push(this)});i.each(q.after,function(){q.original.after.push(this)})}function c(w){var u,s,r=i.fn.cycle.transitions;if(w.fx.indexOf(",")>0){w.multiFx=true;w.fxs=w.fx.replace(/\s*/g,"").split(",");for(u=0;u<w.fxs.length;u++){var v=w.fxs[u];s=r[v];if(!s||!r.hasOwnProperty(v)||!i.isFunction(s)){f("discarding unknown transition: ",v);w.fxs.splice(u,1);u--}}if(!w.fxs.length){f("No valid transitions named; slideshow terminating.");return false}}else{if(w.fx=="all"){w.multiFx=true;w.fxs=[];for(p in r){s=r[p];if(r.hasOwnProperty(p)&&i.isFunction(s)){w.fxs.push(p)}}}}if(w.multiFx&&w.randomizeEffects){var t=Math.floor(Math.random()*20)+30;for(u=0;u<t;u++){var q=Math.floor(Math.random()*w.fxs.length);w.fxs.push(w.fxs.splice(q,1)[0])}a("randomized fx sequence: ",w.fxs)}return true}function j(r,q){r.addSlide=function(u,v){var t=i(u),w=t[0];if(!r.autostopCount){r.countdown++}q[v?"unshift":"push"](w);if(r.els){r.els[v?"unshift":"push"](w)}r.slideCount=q.length;t.css("position","absolute");t[v?"prependTo":"appendTo"](r.$cont);if(v){r.currSlide++;r.nextSlide++}if(!i.support.opacity&&r.cleartype&&!r.cleartypeNoBg){g(t)}if(r.fit&&r.width){t.width(r.width)}if(r.fit&&r.height&&r.height!="auto"){$slides.height(r.height)}w.cycleH=(r.fit&&r.height)?r.height:t.height();w.cycleW=(r.fit&&r.width)?r.width:t.width();t.css(r.cssBefore);if(r.pager){i.fn.cycle.createPagerAnchor(q.length-1,w,i(r.pager),q,r)}if(i.isFunction(r.onAddSlide)){r.onAddSlide(t)}else{t.hide()}}}i.fn.cycle.resetState=function(r,q){q=q||r.fx;r.before=[];r.after=[];r.cssBefore=i.extend({},r.original.cssBefore);r.cssAfter=i.extend({},r.original.cssAfter);r.animIn=i.extend({},r.original.animIn);r.animOut=i.extend({},r.original.animOut);r.fxFn=null;i.each(r.original.before,function(){r.before.push(this)});i.each(r.original.after,function(){r.after.push(this)});var s=i.fn.cycle.transitions[q];if(i.isFunction(s)){s(r.$cont,i(r.elements),r)}};function e(x,q,w,y){if(w&&q.busy&&q.manualTrump){i(x).stop(true,true);q.busy=false}if(q.busy){return}var u=q.$cont[0],A=x[q.currSlide],z=x[q.nextSlide];if(u.cycleStop!=q.stopCount||u.cycleTimeout===0&&!w){return}if(!w&&!u.cyclePause&&((q.autostop&&(--q.countdown<=0))||(q.nowrap&&!q.random&&q.nextSlide<q.currSlide))){if(q.end){q.end(q)}return}if(w||!u.cyclePause){var v=q.fx;A.cycleH=A.cycleH||i(A).height();A.cycleW=A.cycleW||i(A).width();z.cycleH=z.cycleH||i(z).height();z.cycleW=z.cycleW||i(z).width();if(q.multiFx){if(q.lastFx==undefined||++q.lastFx>=q.fxs.length){q.lastFx=0}v=q.fxs[q.lastFx];q.currFx=v}if(q.oneTimeFx){v=q.oneTimeFx;q.oneTimeFx=null}i.fn.cycle.resetState(q,v);if(q.before.length){i.each(q.before,function(B,C){if(u.cycleStop!=q.stopCount){return}C.apply(z,[A,z,q,y])})}var s=function(){i.each(q.after,function(B,C){if(u.cycleStop!=q.stopCount){return}C.apply(z,[A,z,q,y])})};if(q.nextSlide!=q.currSlide){q.busy=1;if(q.fxFn){q.fxFn(A,z,q,s,y)}else{if(i.isFunction(i.fn.cycle[q.fx])){i.fn.cycle[q.fx](A,z,q,s)}else{i.fn.cycle.custom(A,z,q,s,w&&q.fastOnEvent)}}}q.lastSlide=q.currSlide;if(q.random){q.currSlide=q.nextSlide;if(++q.randomIndex==x.length){q.randomIndex=0}q.nextSlide=q.randomMap[q.randomIndex]}else{var t=(q.nextSlide+1)==x.length;q.nextSlide=t?0:q.nextSlide+1;q.currSlide=t?x.length-1:q.nextSlide-1}if(q.pager){i.fn.cycle.updateActivePagerLink(q.pager,q.currSlide)}}var r=0;if(q.timeout&&!q.continuous){r=h(A,z,q,y)}else{if(q.continuous&&u.cyclePause){r=10}}if(r>0){u.cycleTimeout=setTimeout(function(){e(x,q,0,!q.rev)},r)}}i.fn.cycle.updateActivePagerLink=function(q,r){i(q).each(function(){i(this).find("a").removeClass("activeSlide").filter("a:eq("+r+")").addClass("activeSlide")})};function h(v,s,u,r){if(u.timeoutFn){var q=u.timeoutFn(v,s,u,r);while((q-u.speed)<250){q+=u.speed}a("calculated timeout: "+q+"; speed: "+u.speed);if(q!==false){return q}}return u.timeout}i.fn.cycle.next=function(q){o(q,q.rev?-1:1)};i.fn.cycle.prev=function(q){o(q,q.rev?1:-1)};function o(r,u){var q=r.elements;var t=r.$cont[0],s=t.cycleTimeout;if(s){clearTimeout(s);t.cycleTimeout=0}if(r.random&&u<0){r.randomIndex--;if(--r.randomIndex==-2){r.randomIndex=q.length-2}else{if(r.randomIndex==-1){r.randomIndex=q.length-1}}r.nextSlide=r.randomMap[r.randomIndex]}else{if(r.random){if(++r.randomIndex==q.length){r.randomIndex=0}r.nextSlide=r.randomMap[r.randomIndex]}else{r.nextSlide=r.currSlide+u;if(r.nextSlide<0){if(r.nowrap){return false}r.nextSlide=q.length-1}else{if(r.nextSlide>=q.length){if(r.nowrap){return false}r.nextSlide=0}}}}if(i.isFunction(r.prevNextClick)){r.prevNextClick(u>0,r.nextSlide,q[r.nextSlide])}e(q,r,1,u>=0);return false}function d(r,s){var q=i(s.pager);i.each(r,function(t,u){i.fn.cycle.createPagerAnchor(t,u,q,r,s)});i.fn.cycle.updateActivePagerLink(s.pager,s.startingSlide)}i.fn.cycle.createPagerAnchor=function(u,v,s,t,w){var r;if(i.isFunction(w.pagerAnchorBuilder)){r=w.pagerAnchorBuilder(u,v)}else{r='<a href="#">'+(u+1)+"</a>"}if(!r){return}var x=i(r);if(x.parents("body").length===0){var q=[];if(s.length>1){s.each(function(){var y=x.clone(true);i(this).append(y);q.push(y[0])});x=i(q)}else{x.appendTo(s)}}x.bind(w.pagerEvent,function(A){A.preventDefault();w.nextSlide=u;var z=w.$cont[0],y=z.cycleTimeout;if(y){clearTimeout(y);z.cycleTimeout=0}if(i.isFunction(w.pagerClick)){w.pagerClick(w.nextSlide,t[w.nextSlide])}e(t,w,1,w.currSlide<u);return false});if(w.pagerEvent!="click"){x.click(function(){return false})}if(w.pauseOnPagerHover){x.hover(function(){w.$cont[0].cyclePause++},function(){w.$cont[0].cyclePause--})}};i.fn.cycle.hopsFromLast=function(t,s){var r,q=t.lastSlide,u=t.currSlide;if(s){r=u>q?u-q:t.slideCount-q}else{r=u<q?q-u:q+t.slideCount-u}return r};function g(s){function r(t){t=parseInt(t).toString(16);return t.length<2?"0"+t:t}function q(w){for(;w&&w.nodeName.toLowerCase()!="html";w=w.parentNode){var t=i.css(w,"background-color");if(t.indexOf("rgb")>=0){var u=t.match(/\d+/g);return"#"+r(u[0])+r(u[1])+r(u[2])}if(t&&t!="transparent"){return t}}return"#ffffff"}s.each(function(){i(this).css("background-color",q(this))})}i.fn.cycle.commonReset=function(v,t,u,r,s,q){i(u.elements).not(v).hide();u.cssBefore.opacity=1;u.cssBefore.display="block";if(r!==false&&t.cycleW>0){u.cssBefore.width=t.cycleW}if(s!==false&&t.cycleH>0){u.cssBefore.height=t.cycleH}u.cssAfter=u.cssAfter||{};u.cssAfter.display="none";i(v).css("zIndex",u.slideCount+(q===true?1:0));i(t).css("zIndex",u.slideCount+(q===true?0:1))};i.fn.cycle.custom=function(B,v,q,s,r){var A=i(B),w=i(v);var t=q.speedIn,z=q.speedOut,u=q.easeIn,y=q.easeOut;w.css(q.cssBefore);if(r){if(typeof r=="number"){t=z=r}else{t=z=1}u=y=null}var x=function(){w.animate(q.animIn,t,u,s)};A.animate(q.animOut,z,y,function(){if(q.cssAfter){A.css(q.cssAfter)}if(!q.sync){x()}});if(q.sync){x()}};i.fn.cycle.transitions={fade:function(r,s,q){s.not(":eq("+q.currSlide+")").css("opacity",0);q.before.push(function(v,t,u){i.fn.cycle.commonReset(v,t,u);u.cssBefore.opacity=0});q.animIn={opacity:1};q.animOut={opacity:0};q.cssBefore={top:0,left:0}}};i.fn.cycle.ver=function(){return l};i.fn.cycle.defaults={fx:"fade",timeout:4000,timeoutFn:null,continuous:0,speed:1000,speedIn:null,speedOut:null,next:null,prev:null,prevNextClick:null,prevNextEvent:"click",pager:null,pagerClick:null,pagerEvent:"click",pagerAnchorBuilder:null,before:null,after:null,end:null,easing:null,easeIn:null,easeOut:null,shuffle:null,animIn:null,animOut:null,cssBefore:null,cssAfter:null,fxFn:null,height:"auto",startingSlide:0,sync:1,random:0,fit:0,containerResize:1,pause:0,pauseOnPagerHover:0,autostop:0,autostopCount:0,delay:0,slideExpr:null,cleartype:!i.support.opacity,cleartypeNoBg:false,nowrap:0,fastOnEvent:0,randomizeEffects:1,rev:0,manualTrump:true,requeueOnImageNotLoaded:true,requeueTimeout:250}})(jQuery);
 
/* End - 402 - JS jQuery Cycle rev. 16 *//* Begin - 406 - JS jQuery Uniform rev. 378 */

(function(a){a.uniform={options:{selectClass:"selector",radioClass:"radio",checkboxClass:"checker",fileClass:"uploader",filenameClass:"filename",fileBtnClass:"action",fileDefaultText:"No file selected",fileBtnText:"Choose File",checkedClass:"checked",focusClass:"focus",disabledClass:"disabled",activeClass:"active",hoverClass:"hover",useID:true,idPrefix:"uniform",resetSelector:false},elements:[]};if(a.browser.msie&&a.browser.version<7){a.support.selectOpacity=false}else{a.support.selectOpacity=true}a.fn.uniform=function(c){c=a.extend(a.uniform.options,c);var e=this;if(c.resetSelector!=false){a(c.resetSelector).mouseup(function(){function i(){a.uniform.update(e)}setTimeout(i,10)})}function b(k){var l=a("<div />"),i=a("<span />");l.addClass(c.selectClass);if(c.useID){l.attr("id",c.idPrefix+"-"+k.attr("id"))}var j=k.find(":selected:first");if(j.length==0){j=k.find("option:first")}i.html(j.text());k.css("opacity",0);k.wrap(l);k.before(i);l=k.parent("div");i=k.siblings("span");k.change(function(){i.text(k.find(":selected").text());l.removeClass(c.activeClass)}).focus(function(){l.addClass(c.focusClass)}).blur(function(){l.removeClass(c.focusClass);l.removeClass(c.activeClass)}).mousedown(function(){l.addClass(c.activeClass)}).mouseup(function(){l.removeClass(c.activeClass)}).click(function(){l.removeClass(c.activeClass)}).hover(function(){l.addClass(c.hoverClass)},function(){l.removeClass(c.hoverClass)}).keyup(function(){i.text(k.find(":selected").text())});if(a(k).attr("disabled")){l.addClass(c.disabledClass)}a.uniform.noSelect(i);h(k)}function d(j){var k=a("<div />"),i=a("<span />");k.addClass(c.checkboxClass);if(c.useID){k.attr("id",c.idPrefix+"-"+j.attr("id"))}a(j).wrap(k);a(j).wrap(i);i=j.parent();k=i.parent();a(j).css("opacity",0).focus(function(){k.addClass(c.focusClass)}).blur(function(){k.removeClass(c.focusClass)}).click(function(){if(!a(j).attr("checked")){i.removeClass(c.checkedClass)}else{i.addClass(c.checkedClass)}}).mousedown(function(){k.addClass(c.activeClass)}).mouseup(function(){k.removeClass(c.activeClass)}).hover(function(){k.addClass(c.hoverClass)},function(){k.removeClass(c.hoverClass)});if(a(j).attr("checked")){i.addClass(c.checkedClass)}if(a(j).attr("disabled")){k.addClass(c.disabledClass)}h(j)}function f(j){var k=a("<div />"),i=a("<span />");k.addClass(c.radioClass);if(c.useID){k.attr("id",c.idPrefix+"-"+j.attr("id"))}a(j).wrap(k);a(j).wrap(i);i=j.parent();k=i.parent();a(j).css("opacity",0).focus(function(){k.addClass(c.focusClass)}).blur(function(){k.removeClass(c.focusClass)}).click(function(){if(!a(j).attr("checked")){i.removeClass(c.checkedClass)}else{a("."+c.radioClass+" span."+c.checkedClass+":has([name='"+a(j).attr("name")+"'])").removeClass(c.checkedClass);i.addClass(c.checkedClass)}}).mousedown(function(){if(!a(j).is(":disabled")){k.addClass(c.activeClass)}}).mouseup(function(){k.removeClass(c.activeClass)}).hover(function(){k.addClass(c.hoverClass)},function(){k.removeClass(c.hoverClass)});if(a(j).attr("checked")){i.addClass(c.checkedClass)}if(a(j).attr("disabled")){k.addClass(c.disabledClass)}h(j)}function g(l){$el=a(l);var m=a("<div />"),k=a("<span>"+c.fileDefaultText+"</span>"),j=a("<span>"+c.fileBtnText+"</span>");m.addClass(c.fileClass);k.addClass(c.filenameClass);j.addClass(c.fileBtnClass);if(c.useID){m.attr("id",c.idPrefix+"-"+$el.attr("id"))}$el.wrap(m);$el.after(j);$el.after(k);m=$el.closest("div");k=$el.siblings("."+c.filenameClass);j=$el.siblings("."+c.fileBtnClass);if(!$el.attr("size")){var i=m.width();$el.attr("size",i/10)}$el.css("opacity",0).focus(function(){m.addClass(c.focusClass)}).blur(function(){m.removeClass(c.focusClass)}).change(function(){var n=a(this).val();n=n.split(/[\/\\]+/);n=n[(n.length-1)];k.text(n)}).mousedown(function(){if(!a(l).is(":disabled")){m.addClass(c.activeClass)}}).mouseup(function(){m.removeClass(c.activeClass)}).hover(function(){m.addClass(c.hoverClass)},function(){m.removeClass(c.hoverClass)});if($el.attr("disabled")){m.addClass(c.disabledClass)}a.uniform.noSelect(k);a.uniform.noSelect(j);h(l)}function h(i){i=a(i).get();if(i.length>1){a.each(i,function(j,k){a.uniform.elements.push(k)})}else{a.uniform.elements.push(i)}}a.uniform.noSelect=function(i){function j(){return false}a(i).each(function(){this.onselectstart=this.ondragstart=j;a(this).mousedown(j).css({MozUserSelect:"none"})})};a.uniform.update=function(i){if(i==undefined){i=a(a.uniform.elements)}i=a(i);i.each(function(){$e=a(this);if($e.is("select")){spanTag=$e.siblings("span");divTag=$e.parent("div");divTag.removeClass(c.hoverClass+" "+c.focusClass+" "+c.activeClass);spanTag.html($e.find(":selected").text());if($e.is(":disabled")){divTag.addClass(c.disabledClass)}else{divTag.removeClass(c.disabledClass)}}else{if($e.is(":checkbox")){spanTag=$e.closest("span");divTag=$e.closest("div");divTag.removeClass(c.hoverClass+" "+c.focusClass+" "+c.activeClass);spanTag.removeClass(c.checkedClass);if($e.is(":checked")){spanTag.addClass(c.checkedClass)}if($e.is(":disabled")){divTag.addClass(c.disabledClass)}else{divTag.removeClass(c.disabledClass)}}else{if($e.is(":radio")){spanTag=$e.closest("span");divTag=$e.closest("div");divTag.removeClass(c.hoverClass+" "+c.focusClass+" "+c.activeClass);spanTag.removeClass(c.checkedClass);if($e.is(":checked")){spanTag.addClass(c.checkedClass)}if($e.is(":disabled")){divTag.addClass(c.disabledClass)}else{divTag.removeClass(c.disabledClass)}}else{if($e.is(":file")){divTag=$e.parent("div");filenameTag=$e.siblings(c.filenameClass);btnTag=$e.siblings(c.fileBtnClass);divTag.removeClass(c.hoverClass+" "+c.focusClass+" "+c.activeClass);filenameTag.text($e.val());if($e.is(":disabled")){divTag.addClass(c.disabledClass)}else{divTag.removeClass(c.disabledClass)}}}}}})};return this.each(function(){if(a.support.selectOpacity){var i=a(this);if(i.is("select")){if(i.attr("multiple")!=true){b(i)}}else{if(i.is(":checkbox")){d(i)}else{if(i.is(":radio")){f(i)}else{if(i.is(":file")){g(i)}}}}}})}})(jQuery);
 
/* End - 406 - JS jQuery Uniform rev. 378 *//* Begin - 411 - JS jQuery Validate rev. 321 */

/*
 * jQuery validation plug-in 1.7
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 Jörn Zaefferer
 *
 * $Id: jquery.validate.js 6403 2009-06-17 14:27:16Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($) {
$.extend($.fn, {
    // http://docs.jquery.com/Plugins/Validation/validate
    validate: function( options ) {
        // if nothing is selected, return nothing; can't chain anyway
        if (!this.length) {
            options && options.debug && window.console && console.warn( "nothing selected, can't validate, returning nothing" );
            return;
        }
        // check if a validator for this form was already created
        var validator = $.data(this[0], 'validator');
        if ( validator ) {
            return validator;
        }
        
        validator = new $.validator( options, this[0] );
        $.data(this[0], 'validator', validator); 
        
        if ( validator.settings.onsubmit ) {
        
            // allow suppresing validation by adding a cancel class to the submit button
            this.find("input, button").filter(".cancel").click(function() {
                validator.cancelSubmit = true;
            });
            
            // when a submitHandler is used, capture the submitting button
            if (validator.settings.submitHandler) {
                this.find("input, button").filter(":submit").click(function() {
                    validator.submitButton = this;
                });
            }
        
            // validate the form on submit
            this.submit( function( event ) {
                if ( validator.settings.debug )
                    // prevent form submit to be able to see console output
                    event.preventDefault();
                    
                function handle() {
                    if ( validator.settings.submitHandler ) {
                        if (validator.submitButton) {
                            // insert a hidden input as a replacement for the missing submit button
                            var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
                        }
                        validator.settings.submitHandler.call( validator, validator.currentForm );
                        if (validator.submitButton) {
                            // and clean up afterwards; thanks to no-block-scope, hidden can be referenced
                            hidden.remove();
                        }
                        return false;
                    }
                    return true;
                }
                    
                // prevent submit for invalid forms or custom submit handlers
                if ( validator.cancelSubmit ) {
                    validator.cancelSubmit = false;
                    return handle();
                }
                if ( validator.form() ) {
                    if ( validator.pendingRequest ) {
                        validator.formSubmitted = true;
                        return false;
                    }
                    return handle();
                } else {
                    validator.focusInvalid();
                    return false;
                }
            });
        }
        
        return validator;
    },
    // http://docs.jquery.com/Plugins/Validation/valid
    valid: function() {
        if ( $(this[0]).is('form')) {
            return this.validate().form();
        } else {
            var valid = true;
            var validator = $(this[0].form).validate();
            this.each(function() {
                valid &= validator.element(this);
            });
            return valid;
        }
    },
    // attributes: space seperated list of attributes to retrieve and remove
    removeAttrs: function(attributes) {
        var result = {},
            $element = this;
        $.each(attributes.split(/\s/), function(index, value) {
            result[value] = $element.attr(value);
            $element.removeAttr(value);
        });
        return result;
    },
    // http://docs.jquery.com/Plugins/Validation/rules
    rules: function(command, argument) {
        var element = this[0];
        
        if (command) {
            var settings = $.data(element.form, 'validator').settings;
            var staticRules = settings.rules;
            var existingRules = $.validator.staticRules(element);
            switch(command) {
            case "add":
                $.extend(existingRules, $.validator.normalizeRule(argument));
                staticRules[element.name] = existingRules;
                if (argument.messages)
                    settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
                break;
            case "remove":
                if (!argument) {
                    delete staticRules[element.name];
                    return existingRules;
                }
                var filtered = {};
                $.each(argument.split(/\s/), function(index, method) {
                    filtered[method] = existingRules[method];
                    delete existingRules[method];
                });
                return filtered;
            }
        }
        
        var data = $.validator.normalizeRules(
        $.extend(
            {},
            $.validator.metadataRules(element),
            $.validator.classRules(element),
            $.validator.attributeRules(element),
            $.validator.staticRules(element)
        ), element);
        
        // make sure required is at front
        if (data.required) {
            var param = data.required;
            delete data.required;
            data = $.extend({required: param}, data);
        }
        
        return data;
    }
});
// Custom selectors
$.extend($.expr[":"], {
    // http://docs.jquery.com/Plugins/Validation/blank
    blank: function(a) {return !$.trim("" + a.value);},
    // http://docs.jquery.com/Plugins/Validation/filled
    filled: function(a) {return !!$.trim("" + a.value);},
    // http://docs.jquery.com/Plugins/Validation/unchecked
    unchecked: function(a) {return !a.checked;}
});
// constructor for validator
$.validator = function( options, form ) {
    this.settings = $.extend( true, {}, $.validator.defaults, options );
    this.currentForm = form;
    this.init();
};
$.validator.format = function(source, params) {
    if ( arguments.length == 1 ) 
        return function() {
            var args = $.makeArray(arguments);
            args.unshift(source);
            return $.validator.format.apply( this, args );
        };
    if ( arguments.length > 2 && params.constructor != Array  ) {
        params = $.makeArray(arguments).slice(1);
    }
    if ( params.constructor != Array ) {
        params = [ params ];
    }
    $.each(params, function(i, n) {
        source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
    });
    return source;
};
$.extend($.validator, {
    
    defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusInvalid: true,
        errorContainer: $( [] ),
        errorLabelContainer: $( [] ),
        onsubmit: true,
        ignore: [],
        ignoreTitle: false,
        onfocusin: function(element) {
            this.lastActive = element;
                
            // hide error label and remove error class on focus if enabled
            if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
                this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
                this.errorsFor(element).hide();
            }
        },
        onfocusout: function(element) {
            if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
                this.element(element);
            }
        },
        onkeyup: function(element) {
            if ( element.name in this.submitted || element == this.lastElement ) {
                this.element(element);
            }
        },
        onclick: function(element) {
            // click on selects, radiobuttons and checkboxes
            if ( element.name in this.submitted )
                this.element(element);
            // or option elements, check parent select in that case
            else if (element.parentNode.name in this.submitted)
                this.element(element.parentNode);
        },
        highlight: function( element, errorClass, validClass ) {
            $(element).addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function( element, errorClass, validClass ) {
            $(element).removeClass(errorClass).addClass(validClass);
        }
    },
    // http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
    setDefaults: function(settings) {
        $.extend( $.validator.defaults, settings );
    },
    messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: $.validator.format("Please enter no more than {0} characters."),
        minlength: $.validator.format("Please enter at least {0} characters."),
        rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
        range: $.validator.format("Please enter a value between {0} and {1}."),
        max: $.validator.format("Please enter a value less than or equal to {0}."),
        min: $.validator.format("Please enter a value greater than or equal to {0}.")
    },
    
    autoCreateRanges: false,
    
    prototype: {
        
        init: function() {
            this.labelContainer = $(this.settings.errorLabelContainer);
            this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
            this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
            this.submitted = {};
            this.valueCache = {};
            this.pendingRequest = 0;
            this.pending = {};
            this.invalid = {};
            this.reset();
            
            var groups = (this.groups = {});
            $.each(this.settings.groups, function(key, value) {
                $.each(value.split(/\s/), function(index, name) {
                    groups[name] = key;
                });
            });
            var rules = this.settings.rules;
            $.each(rules, function(key, value) {
                rules[key] = $.validator.normalizeRule(value);
            });
            
            function delegate(event) {
                var validator = $.data(this[0].form, "validator"),
                    eventType = "on" + event.type.replace(/^validate/, "");
                validator.settings[eventType] && validator.settings[eventType].call(validator, this[0] );
            }
            $(this.currentForm)
                .validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", delegate)
                .validateDelegate(":radio, :checkbox, select, option", "click", delegate);
            if (this.settings.invalidHandler)
                $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
        },
        // http://docs.jquery.com/Plugins/Validation/Validator/form
        form: function() {
            this.checkForm();
            $.extend(this.submitted, this.errorMap);
            this.invalid = $.extend({}, this.errorMap);
            if (!this.valid())
                $(this.currentForm).triggerHandler("invalid-form", [this]);
            this.showErrors();
            return this.valid();
        },
        
        checkForm: function() {
            this.prepareForm();
            for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
                this.check( elements[i] );
            }
            return this.valid(); 
        },
        
        // http://docs.jquery.com/Plugins/Validation/Validator/element
        element: function( element ) {
            element = this.clean( element );
            this.lastElement = element;
            this.prepareElement( element );
            this.currentElements = $(element);
            var result = this.check( element );
            if ( result ) {
                delete this.invalid[element.name];
            } else {
                this.invalid[element.name] = true;
            }
            if ( !this.numberOfInvalids() ) {
                // Hide error containers on last error
                this.toHide = this.toHide.add( this.containers );
            }
            this.showErrors();
            return result;
        },
        // http://docs.jquery.com/Plugins/Validation/Validator/showErrors
        showErrors: function(errors) {
            if(errors) {
                // add items to error list and map
                $.extend( this.errorMap, errors );
                this.errorList = [];
                for ( var name in errors ) {
                    this.errorList.push({
                        message: errors[name],
                        element: this.findByName(name)[0]
                    });
                }
                // remove items from success list
                this.successList = $.grep( this.successList, function(element) {
                    return !(element.name in errors);
                });
            }
            this.settings.showErrors
                ? this.settings.showErrors.call( this, this.errorMap, this.errorList )
                : this.defaultShowErrors();
        },
        
        // http://docs.jquery.com/Plugins/Validation/Validator/resetForm
        resetForm: function() {
            if ( $.fn.resetForm )
                $( this.currentForm ).resetForm();
            this.submitted = {};
            this.prepareForm();
            this.hideErrors();
            this.elements().removeClass( this.settings.errorClass );
        },
        
        numberOfInvalids: function() {
            return this.objectLength(this.invalid);
        },
        
        objectLength: function( obj ) {
            var count = 0;
            for ( var i in obj )
                count++;
            return count;
        },
        
        hideErrors: function() {
            this.addWrapper( this.toHide ).hide();
        },
        
        valid: function() {
            return this.size() == 0;
        },
        
        size: function() {
            return this.errorList.length;
        },
        
        focusInvalid: function() {
            if( this.settings.focusInvalid ) {
                try {
                    $(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
                    .filter(":visible")
                    .focus()
                    // manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
                    .trigger("focusin");
                } catch(e) {
                    // ignore IE throwing errors when focusing hidden elements
                }
            }
        },
        
        findLastActive: function() {
            var lastActive = this.lastActive;
            return lastActive && $.grep(this.errorList, function(n) {
                return n.element.name == lastActive.name;
            }).length == 1 && lastActive;
        },
        
        elements: function() {
            var validator = this,
                rulesCache = {};
            
            // select all valid inputs inside the form (no submit or reset buttons)
            // workaround $Query([]).add until http://dev.jquery.com/ticket/2114 is solved
            return $([]).add(this.currentForm.elements)
            .filter(":input")
            .not(":submit, :reset, :image, [disabled]")
            .not( this.settings.ignore )
            .filter(function() {
                !this.name && validator.settings.debug && window.console && console.error( "%o has no name assigned", this);
            
                // select only the first element for each name, and only those with rules specified
                if ( this.name in rulesCache || !validator.objectLength($(this).rules()) )
                    return false;
                
                rulesCache[this.name] = true;
                return true;
            });
        },
        
        clean: function( selector ) {
            return $( selector )[0];
        },
        
        errors: function() {
            return $( this.settings.errorElement + "." + this.settings.errorClass, this.errorContext );
        },
        
        reset: function() {
            this.successList = [];
            this.errorList = [];
            this.errorMap = {};
            this.toShow = $([]);
            this.toHide = $([]);
            this.currentElements = $([]);
        },
        
        prepareForm: function() {
            this.reset();
            this.toHide = this.errors().add( this.containers );
        },
        
        prepareElement: function( element ) {
            this.reset();
            this.toHide = this.errorsFor(element);
        },
    
        check: function( element ) {
            element = this.clean( element );
            
            // if radio/checkbox, validate first element in group instead
            if (this.checkable(element)) {
                element = this.findByName( element.name )[0];
            }
            
            var rules = $(element).rules();
            var dependencyMismatch = false;
            for( method in rules ) {
                var rule = { method: method, parameters: rules[method] };
                try {
                    var result = $.validator.methods[method].call( this, element.value.replace(/\r/g, ""), element, rule.parameters );
                    
                    // if a method indicates that the field is optional and therefore valid,
                    // don't mark it as valid when there are no other rules
                    if ( result == "dependency-mismatch" ) {
                        dependencyMismatch = true;
                        continue;
                    }
                    dependencyMismatch = false;
                    
                    if ( result == "pending" ) {
                        this.toHide = this.toHide.not( this.errorsFor(element) );
                        return;
                    }
                    
                    if( !result ) {
                        this.formatAndAdd( element, rule );
                        return false;
                    }
                } catch(e) {
                    this.settings.debug && window.console && console.log("exception occured when checking element " + element.id
                         + ", check the '" + rule.method + "' method", e);
                    throw e;
                }
            }
            if (dependencyMismatch)
                return;
            if ( this.objectLength(rules) )
                this.successList.push(element);
            return true;
        },
        
        // return the custom message for the given element and validation method
        // specified in the element's "messages" metadata
        customMetaMessage: function(element, method) {
            if (!$.metadata)
                return;
            
            var meta = this.settings.meta
                ? $(element).metadata()[this.settings.meta]
                : $(element).metadata();
            
            return meta && meta.messages && meta.messages[method];
        },
        
        // return the custom message for the given element name and validation method
        customMessage: function( name, method ) {
            var m = this.settings.messages[name];
            return m && (m.constructor == String
                ? m
                : m[method]);
        },
        
        // return the first defined argument, allowing empty strings
        findDefined: function() {
            for(var i = 0; i < arguments.length; i++) {
                if (arguments[i] !== undefined)
                    return arguments[i];
            }
            return undefined;
        },
        
        defaultMessage: function( element, method) {
            return this.findDefined(
                this.customMessage( element.name, method ),
                this.customMetaMessage( element, method ),
                // title is never undefined, so handle empty string as undefined
                !this.settings.ignoreTitle && element.title || undefined,
                $.validator.messages[method],
                "<strong>Warning: No message defined for " + element.name + "</strong>"
            );
        },
        
        formatAndAdd: function( element, rule ) {
            var message = this.defaultMessage( element, rule.method ),
                theregex = /\$?\{(\d+)\}/g;
            if ( typeof message == "function" ) {
                message = message.call(this, rule.parameters, element);
            } else if (theregex.test(message)) {
                message = jQuery.format(message.replace(theregex, '{$1}'), rule.parameters);
            }            
            this.errorList.push({
                message: message,
                element: element
            });
            
            this.errorMap[element.name] = message;
            this.submitted[element.name] = message;
        },
        
        addWrapper: function(toToggle) {
            if ( this.settings.wrapper )
                toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
            return toToggle;
        },
        
        defaultShowErrors: function() {
            for ( var i = 0; this.errorList[i]; i++ ) {
                var error = this.errorList[i];
                this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
                this.showLabel( error.element, error.message );
            }
            if( this.errorList.length ) {
                this.toShow = this.toShow.add( this.containers );
            }
            if (this.settings.success) {
                for ( var i = 0; this.successList[i]; i++ ) {
                    this.showLabel( this.successList[i] );
                }
            }
            if (this.settings.unhighlight) {
                for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
                    this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
                }
            }
            this.toHide = this.toHide.not( this.toShow );
            this.hideErrors();
            this.addWrapper( this.toShow ).show();
        },
        
        validElements: function() {
            return this.currentElements.not(this.invalidElements());
        },
        
        invalidElements: function() {
            return $(this.errorList).map(function() {
                return this.element;
            });
        },
        
        showLabel: function(element, message) {
            var label = this.errorsFor( element );
            if ( label.length ) {
                // refresh error/success class
                label.removeClass().addClass( this.settings.errorClass );
            
                // check if we have a generated label, replace the message then
                label.attr("generated") && label.html(message);
            } else {
                // create label
                label = $("<" + this.settings.errorElement + "/>")
                    .attr({"for":  this.idOrName(element), generated: true})
                    .addClass(this.settings.errorClass)
                    .html(message || "");
                if ( this.settings.wrapper ) {
                    // make sure the element is visible, even in IE
                    // actually showing the wrapped element is handled elsewhere
                    label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                }
                if ( !this.labelContainer.append(label).length )
                    this.settings.errorPlacement
                        ? this.settings.errorPlacement(label, $(element) )
                        : label.insertAfter(element);
            }
            if ( !message && this.settings.success ) {
                label.text("");
                typeof this.settings.success == "string"
                    ? label.addClass( this.settings.success )
                    : this.settings.success( label );
            }
            this.toShow = this.toShow.add(label);
        },
        
        errorsFor: function(element) {
            var name = this.idOrName(element);
            return this.errors().filter(function() {
                return $(this).attr('for') == name;
            });
        },
        
        idOrName: function(element) {
            return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
        },
        checkable: function( element ) {
            return /radio|checkbox/i.test(element.type);
        },
        
        findByName: function( name ) {
            // select by name and filter by form for performance over form.find("[name=...]")
            var form = this.currentForm;
            return $(document.getElementsByName(name)).map(function(index, element) {
                return element.form == form && element.name == name && element  || null;
            });
        },
        
        getLength: function(value, element) {
            switch( element.nodeName.toLowerCase() ) {
            case 'select':
                return $("option:selected", element).length;
            case 'input':
                if( this.checkable( element) )
                    return this.findByName(element.name).filter(':checked').length;
            }
            return value.length;
        },
    
        depend: function(param, element) {
            return this.dependTypes[typeof param]
                ? this.dependTypes[typeof param](param, element)
                : true;
        },
    
        dependTypes: {
            "boolean": function(param, element) {
                return param;
            },
            "string": function(param, element) {
                return !!$(param, element.form).length;
            },
            "function": function(param, element) {
                return param(element);
            }
        },
        
        optional: function(element) {
            return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
        },
        
        startRequest: function(element) {
            if (!this.pending[element.name]) {
                this.pendingRequest++;
                this.pending[element.name] = true;
            }
        },
        
        stopRequest: function(element, valid) {
            this.pendingRequest--;
            // sometimes synchronization fails, make sure pendingRequest is never < 0
            if (this.pendingRequest < 0)
                this.pendingRequest = 0;
            delete this.pending[element.name];
            if ( valid && this.pendingRequest == 0 && this.formSubmitted && this.form() ) {
                $(this.currentForm).submit();
                this.formSubmitted = false;
            } else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
                $(this.currentForm).triggerHandler("invalid-form", [this]);
                this.formSubmitted = false;
            }
        },
        
        previousValue: function(element) {
            return $.data(element, "previousValue") || $.data(element, "previousValue", {
                old: null,
                valid: true,
                message: this.defaultMessage( element, "remote" )
            });
        }
        
    },
    
    classRuleSettings: {
        required: {required: true},
        email: {email: true},
        url: {url: true},
        date: {date: true},
        dateISO: {dateISO: true},
        dateDE: {dateDE: true},
        number: {number: true},
        numberDE: {numberDE: true},
        digits: {digits: true},
        creditcard: {creditcard: true}
    },
    
    addClassRules: function(className, rules) {
        className.constructor == String ?
            this.classRuleSettings[className] = rules :
            $.extend(this.classRuleSettings, className);
    },
    
    classRules: function(element) {
        var rules = {};
        var classes = $(element).attr('class');
        classes && $.each(classes.split(' '), function() {
            if (this in $.validator.classRuleSettings) {
                $.extend(rules, $.validator.classRuleSettings[this]);
            }
        });
        return rules;
    },
    
    attributeRules: function(element) {
        var rules = {};
        var $element = $(element);
        
        for (method in $.validator.methods) {
            var value = $element.attr(method);
            if (value) {
                rules[method] = value;
            }
        }
        
        // maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
        if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
            delete rules.maxlength;
        }
        
        return rules;
    },
    
    metadataRules: function(element) {
        if (!$.metadata) return {};
        
        var meta = $.data(element.form, 'validator').settings.meta;
        return meta ?
            $(element).metadata()[meta] :
            $(element).metadata();
    },
    
    staticRules: function(element) {
        var rules = {};
        var validator = $.data(element.form, 'validator');
        if (validator.settings.rules) {
            rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
        }
        return rules;
    },
    
    normalizeRules: function(rules, element) {
        // handle dependency check
        $.each(rules, function(prop, val) {
            // ignore rule when param is explicitly false, eg. required:false
            if (val === false) {
                delete rules[prop];
                return;
            }
            if (val.param || val.depends) {
                var keepRule = true;
                switch (typeof val.depends) {
                    case "string":
                        keepRule = !!$(val.depends, element.form).length;
                        break;
                    case "function":
                        keepRule = val.depends.call(element, element);
                        break;
                }
                if (keepRule) {
                    rules[prop] = val.param !== undefined ? val.param : true;
                } else {
                    delete rules[prop];
                }
            }
        });
        
        // evaluate parameters
        $.each(rules, function(rule, parameter) {
            rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
        });
        
        // clean number parameters
        $.each(['minlength', 'maxlength', 'min', 'max'], function() {
            if (rules[this]) {
                rules[this] = Number(rules[this]);
            }
        });
        $.each(['rangelength', 'range'], function() {
            if (rules[this]) {
                rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
            }
        });
        
        if ($.validator.autoCreateRanges) {
            // auto-create ranges
            if (rules.min && rules.max) {
                rules.range = [rules.min, rules.max];
                delete rules.min;
                delete rules.max;
            }
            if (rules.minlength && rules.maxlength) {
                rules.rangelength = [rules.minlength, rules.maxlength];
                delete rules.minlength;
                delete rules.maxlength;
            }
        }
        
        // To support custom messages in metadata ignore rule methods titled "messages"
        if (rules.messages) {
            delete rules.messages;
        }
        
        return rules;
    },
    
    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function(data) {
        if( typeof data == "string" ) {
            var transformed = {};
            $.each(data.split(/\s/), function() {
                transformed[this] = true;
            });
            data = transformed;
        }
        return data;
    },
    
    // http://docs.jquery.com/Plugins/Validation/Validator/addMethod
    addMethod: function(name, method, message) {
        $.validator.methods[name] = method;
        $.validator.messages[name] = message != undefined ? message : $.validator.messages[name];
        if (method.length < 3) {
            $.validator.addClassRules(name, $.validator.normalizeRule(name));
        }
    },
    methods: {
        // http://docs.jquery.com/Plugins/Validation/Methods/required
        required: function(value, element, param) {
            // check if dependency is met
            if ( !this.depend(param, element) )
                return "dependency-mismatch";
            switch( element.nodeName.toLowerCase() ) {
            case 'select':
                // could be an array for select-multiple or a string, both are fine this way
                var val = $(element).val();
                return val && val.length > 0;
            case 'input':
                if ( this.checkable(element) )
                    return this.getLength(value, element) > 0;
            default:
                return $.trim(value).length > 0;
            }
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/remote
        remote: function(value, element, param) {
            if ( this.optional(element) )
                return "dependency-mismatch";
            
            var previous = this.previousValue(element);
            if (!this.settings.messages[element.name] )
                this.settings.messages[element.name] = {};
            previous.originalMessage = this.settings.messages[element.name].remote;
            this.settings.messages[element.name].remote = previous.message;
            
            param = typeof param == "string" && {url:param} || param; 
            
            if ( previous.old !== value ) {
                previous.old = value;
                var validator = this;
                this.startRequest(element);
                var data = {};
                data[element.name] = value;
                $.ajax($.extend(true, {
                    url: param,
                    mode: "abort",
                    port: "validate" + element.name,
                    dataType: "json",
                    data: data,
                    success: function(response) {
                        validator.settings.messages[element.name].remote = previous.originalMessage;
                        var valid = response === true;
                        if ( valid ) {
                            var submitted = validator.formSubmitted;
                            validator.prepareElement(element);
                            validator.formSubmitted = submitted;
                            validator.successList.push(element);
                            validator.showErrors();
                        } else {
                            var errors = {};
                            var message = (previous.message = response || validator.defaultMessage( element, "remote" ));
                            errors[element.name] = $.isFunction(message) ? message(value) : message;
                            validator.showErrors(errors);
                        }
                        previous.valid = valid;
                        validator.stopRequest(element, valid);
                    }
                }, param));
                return "pending";
            } else if( this.pending[element.name] ) {
                return "pending";
            }
            return previous.valid;
        },
        // http://docs.jquery.com/Plugins/Validation/Methods/minlength
        minlength: function(value, element, param) {
            return this.optional(element) || this.getLength($.trim(value), element) >= param;
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/maxlength
        maxlength: function(value, element, param) {
            return this.optional(element) || this.getLength($.trim(value), element) <= param;
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/rangelength
        rangelength: function(value, element, param) {
            var length = this.getLength($.trim(value), element);
            return this.optional(element) || ( length >= param[0] && length <= param[1] );
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/min
        min: function( value, element, param ) {
            return this.optional(element) || value >= param;
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/max
        max: function( value, element, param ) {
            return this.optional(element) || value <= param;
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/range
        range: function( value, element, param ) {
            return this.optional(element) || ( value >= param[0] && value <= param[1] );
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/email
        email: function(value, element) {
            // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
            return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
        },
    
        // http://docs.jquery.com/Plugins/Validation/Methods/url
        url: function(value, element) {
            // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
            return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/date
        date: function(value, element) {
            return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
        },
    
        // http://docs.jquery.com/Plugins/Validation/Methods/dateISO
        dateISO: function(value, element) {
            return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
        },
    
        // http://docs.jquery.com/Plugins/Validation/Methods/number
        number: function(value, element) {
            return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
        },
    
        // http://docs.jquery.com/Plugins/Validation/Methods/digits
        digits: function(value, element) {
            return this.optional(element) || /^\d+$/.test(value);
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/creditcard
        // based on http://en.wikipedia.org/wiki/Luhn
        creditcard: function(value, element) {
            if ( this.optional(element) )
                return "dependency-mismatch";
            // accept only digits and dashes
            if (/[^0-9-]+/.test(value))
                return false;
            var nCheck = 0,
                nDigit = 0,
                bEven = false;
            value = value.replace(/\D/g, "");
            for (var n = value.length - 1; n >= 0; n--) {
                var cDigit = value.charAt(n);
                var nDigit = parseInt(cDigit, 10);
                if (bEven) {
                    if ((nDigit *= 2) > 9)
                        nDigit -= 9;
                }
                nCheck += nDigit;
                bEven = !bEven;
            }
            return (nCheck % 10) == 0;
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/accept
        accept: function(value, element, param) {
            param = typeof param == "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
            return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i")); 
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/equalTo
        equalTo: function(value, element, param) {
            // bind to the blur event of the target in order to revalidate whenever the target field is updated
            // TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
            var target = $(param).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                $(element).valid();
            });
            return value == target.val();
        }
        
    }
    
});
// deprecated, use $.validator.format instead
$.format = $.validator.format;
})(jQuery);
// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort() 
;(function($) {
    var ajax = $.ajax;
    var pendingRequests = {};
    $.ajax = function(settings) {
        // create settings for compatibility with ajaxSetup
        settings = $.extend(settings, $.extend({}, $.ajaxSettings, settings));
        var port = settings.port;
        if (settings.mode == "abort") {
            if ( pendingRequests[port] ) {
                pendingRequests[port].abort();
            }
            return (pendingRequests[port] = ajax.apply(this, arguments));
        }
        return ajax.apply(this, arguments);
    };
})(jQuery);
// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)
// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target 
;(function($) {
    // only implement if not provided by jQuery core (since 1.4)
    // TODO verify if jQuery 1.4's implementation is compatible with older jQuery special-event APIs
    if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
        $.each({
            focus: 'focusin',
            blur: 'focusout'    
        }, function( original, fix ){
            $.event.special[fix] = {
                setup:function() {
                    this.addEventListener( original, handler, true );
                },
                teardown:function() {
                    this.removeEventListener( original, handler, true );
                },
                handler: function(e) {
                    arguments[0] = $.event.fix(e);
                    arguments[0].type = fix;
                    return $.event.handle.apply(this, arguments);
                }
            };
            function handler(e) {
                e = $.event.fix(e);
                e.type = fix;
                return $.event.handle.call(this, e);
            }
        });
    };
    $.extend($.fn, {
        validateDelegate: function(delegate, type, handler) {
            return this.bind(type, function(event) {
                var target = $(event.target);
                if (target.is(delegate)) {
                    return handler.apply(target, arguments);
                }
            });
        }
    });
})(jQuery);

/* End - 411 - JS jQuery Validate rev. 321 *//* Begin - 415 - JS jQuery jCarousel rev. 475 */

/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */
(function($){$.fn.jcarousel=function(o){if(typeof o=='string'){var instance=$(this).data('jcarousel'),args=Array.prototype.slice.call(arguments,1);return instance[o].apply(instance,args);}else
return this.each(function(){$(this).data('jcarousel',new $jc(this,o));});};var defaults={vertical:false,start:1,offset:1,size:null,scroll:3,visible:null,animation:'normal',easing:'swing',auto:0,wrap:null,initCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,buttonNextHTML:'<div></div>',buttonPrevHTML:'<div></div>',buttonNextEvent:'click',buttonPrevEvent:'click',buttonNextCallback:null,buttonPrevCallback:null};$.jcarousel=function(e,o){this.options=$.extend({},defaults,o||{});this.locked=false;this.container=null;this.clip=null;this.list=null;this.buttonNext=null;this.buttonPrev=null;this.wh=!this.options.vertical?'width':'height';this.lt=!this.options.vertical?'left':'top';var skin='',split=e.className.split(' ');for(var i=0;i<split.length;i++){if(split[i].indexOf('jcarousel-skin')!=-1){$(e).removeClass(split[i]);skin=split[i];break;}}if(e.nodeName=='UL'||e.nodeName=='OL'){this.list=$(e);this.container=this.list.parent();if(this.container.hasClass('jcarousel-clip')){if(!this.container.parent().hasClass('jcarousel-container'))this.container=this.container.wrap('<div></div>');this.container=this.container.parent();}else if(!this.container.hasClass('jcarousel-container'))this.container=this.list.wrap('<div></div>').parent();}else{this.container=$(e);this.list=this.container.find('ul,ol').eq(0);}if(skin!=''&&this.container.parent()[0].className.indexOf('jcarousel-skin')==-1)this.container.wrap('<div class=" '+skin+'"></div>');this.clip=this.list.parent();if(!this.clip.length||!this.clip.hasClass('jcarousel-clip'))this.clip=this.list.wrap('<div></div>').parent();this.buttonNext=$('.jcarousel-next',this.container);if(this.buttonNext.size()==0&&this.options.buttonNextHTML!=null)this.buttonNext=this.clip.after(this.options.buttonNextHTML).next();this.buttonNext.addClass(this.className('jcarousel-next'));this.buttonPrev=$('.jcarousel-prev',this.container);if(this.buttonPrev.size()==0&&this.options.buttonPrevHTML!=null)this.buttonPrev=this.clip.after(this.options.buttonPrevHTML).next();this.buttonPrev.addClass(this.className('jcarousel-prev'));this.clip.addClass(this.className('jcarousel-clip')).css({overflow:'hidden',position:'relative'});this.list.addClass(this.className('jcarousel-list')).css({overflow:'hidden',position:'relative',top:0,left:0,margin:0,padding:0});this.container.addClass(this.className('jcarousel-container')).css({position:'relative'});var di=this.options.visible!=null?Math.ceil(this.clipping()/this.options.visible):null;var li=this.list.children('li');var self=this;if(li.size()>0){var wh=0,i=this.options.offset;li.each(function(){self.format(this,i++);wh+=self.dimension(this,di);});this.list.css(this.wh,wh+'px');if(!o||o.size===undefined)this.options.size=li.size();}this.container.css('display','block');this.buttonNext.css('display','block');this.buttonPrev.css('display','block');this.funcNext=function(){self.next();};this.funcPrev=function(){self.prev();};this.funcResize=function(){self.reload();};if(this.options.initCallback!=null)this.options.initCallback(this,'init');if($.browser.safari){this.buttons(false,false);$(window).bind('load.jcarousel',function(){self.setup();});}else
this.setup();};var $jc=$.jcarousel;$jc.fn=$jc.prototype={jcarousel:'0.2.4'};$jc.fn.extend=$jc.extend=$.extend;$jc.fn.extend({setup:function(){this.first=null;this.last=null;this.prevFirst=null;this.prevLast=null;this.animating=false;this.timer=null;this.tail=null;this.inTail=false;if(this.locked)return;this.list.css(this.lt,this.pos(this.options.offset)+'px');var p=this.pos(this.options.start);this.prevFirst=this.prevLast=null;this.animate(p,false);$(window).unbind('resize.jcarousel',this.funcResize).bind('resize.jcarousel',this.funcResize);},reset:function(){this.list.empty();this.list.css(this.lt,'0px');this.list.css(this.wh,'10px');if(this.options.initCallback!=null)this.options.initCallback(this,'reset');this.setup();},reload:function(){if(this.tail!=null&&this.inTail)this.list.css(this.lt,$jc.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=false;if(this.options.reloadCallback!=null)this.options.reloadCallback(this);if(this.options.visible!=null){var self=this;var di=Math.ceil(this.clipping()/this.options.visible),wh=0,lt=0;$('li',this.list).each(function(i){wh+=self.dimension(this,di);if(i+1<self.first)lt=wh;});this.list.css(this.wh,wh+'px');this.list.css(this.lt,-lt+'px');}this.scroll(this.first,false);},lock:function(){this.locked=true;this.buttons();},unlock:function(){this.locked=false;this.buttons();},size:function(s){if(s!=undefined){this.options.size=s;if(!this.locked)this.buttons();}return this.options.size;},has:function(i,i2){if(i2==undefined||!i2)i2=i;if(this.options.size!==null&&i2>this.options.size)i2=this.options.size;for(var j=i;j<=i2;j++){var e=this.get(j);if(!e.length||e.hasClass('jcarousel-item-placeholder'))return false;}return true;},get:function(i){return $('.jcarousel-item-'+i,this.list);},add:function(i,s){var e=this.get(i),old=0,add=0;if(e.length==0){var c,e=this.create(i),j=$jc.intval(i);while(c=this.get(--j)){if(j<=0||c.length){j<=0?this.list.prepend(e):c.after(e);break;}}}else
old=this.dimension(e);e.removeClass(this.className('jcarousel-item-placeholder'));typeof s=='string'?e.html(s):e.empty().append(s);var di=this.options.visible!=null?Math.ceil(this.clipping()/this.options.visible):null;var wh=this.dimension(e,di)-old;if(i>0&&i<this.first)this.list.css(this.lt,$jc.intval(this.list.css(this.lt))-wh+'px');this.list.css(this.wh,$jc.intval(this.list.css(this.wh))+wh+'px');return e;},remove:function(i){var e=this.get(i);if(!e.length||(i>=this.first&&i<=this.last))return;var d=this.dimension(e);if(i<this.first)this.list.css(this.lt,$jc.intval(this.list.css(this.lt))+d+'px');e.remove();this.list.css(this.wh,$jc.intval(this.list.css(this.wh))-d+'px');},next:function(){this.stopAuto();if(this.tail!=null&&!this.inTail)this.scrollTail(false);else
this.scroll(((this.options.wrap=='both'||this.options.wrap=='last')&&this.options.size!=null&&this.last==this.options.size)?1:this.first+this.options.scroll);},prev:function(){this.stopAuto();if(this.tail!=null&&this.inTail)this.scrollTail(true);else
this.scroll(((this.options.wrap=='both'||this.options.wrap=='first')&&this.options.size!=null&&this.first==1)?this.options.size:this.first-this.options.scroll);},scrollTail:function(b){if(this.locked||this.animating||!this.tail)return;var pos=$jc.intval(this.list.css(this.lt));!b?pos-=this.tail:pos+=this.tail;this.inTail=!b;this.prevFirst=this.first;this.prevLast=this.last;this.animate(pos);},scroll:function(i,a){if(this.locked||this.animating)return;this.animate(this.pos(i),a);},pos:function(i){var pos=$jc.intval(this.list.css(this.lt));if(this.locked||this.animating)return pos;if(this.options.wrap!='circular')i=i<1?1:(this.options.size&&i>this.options.size?this.options.size:i);var back=this.first>i;var f=this.options.wrap!='circular'&&this.first<=1?1:this.first;var c=back?this.get(f):this.get(this.last);var j=back?f:f-1;var e=null,l=0,p=false,d=0,g;while(back?--j>=i:++j<i){e=this.get(j);p=!e.length;if(e.length==0){e=this.create(j).addClass(this.className('jcarousel-item-placeholder'));c[back?'before':'after'](e);if(this.first!=null&&this.options.wrap=='circular'&&this.options.size!==null&&(j<=0||j>this.options.size)){g=this.get(this.index(j));if(g.length)this.add(j,g.children().clone(true));}}c=e;d=this.dimension(e);if(p)l+=d;if(this.first!=null&&(this.options.wrap=='circular'||(j>=1&&(this.options.size==null||j<=this.options.size))))pos=back?pos+d:pos-d;}var clipping=this.clipping();var cache=[];var visible=0,j=i,v=0;var c=this.get(i-1);while(++visible){e=this.get(j);p=!e.length;if(e.length==0){e=this.create(j).addClass(this.className('jcarousel-item-placeholder'));c.length==0?this.list.prepend(e):c[back?'before':'after'](e);if(this.first!=null&&this.options.wrap=='circular'&&this.options.size!==null&&(j<=0||j>this.options.size)){g=this.get(this.index(j));if(g.length)this.add(j,g.find('>*').clone(true));}}c=e;var d=this.dimension(e);if(d==0){alert('jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...');return 0;}if(this.options.wrap!='circular'&&this.options.size!==null&&j>this.options.size)cache.push(e);else if(p)l+=d;v+=d;if(v>=clipping)break;j++;}for(var x=0;x<cache.length;x++)cache[x].remove();if(l>0){this.list.css(this.wh,this.dimension(this.list)+l+'px');if(back){pos-=l;this.list.css(this.lt,$jc.intval(this.list.css(this.lt))-l+'px');}}var last=i+visible-1;if(this.options.wrap!='circular'&&this.options.size&&last>this.options.size)last=this.options.size;if(j>last){visible=0,j=last,v=0;while(++visible){var e=this.get(j--);if(!e.length)break;v+=this.dimension(e);if(v>=clipping)break;}}var first=last-visible+1;if(this.options.wrap!='circular'&&first<1)first=1;if(this.inTail&&back){pos+=this.tail;this.inTail=false;}this.tail=null;if(this.options.wrap!='circular'&&last==this.options.size&&(last-visible+1)>=1){var m=$jc.margin(this.get(last),!this.options.vertical?'marginRight':'marginBottom');if((v-m)>clipping)this.tail=v-clipping-m;}while(i-->first)pos+=this.dimension(this.get(i));this.prevFirst=this.first;this.prevLast=this.last;this.first=first;this.last=last;return pos;},animate:function(p,a){if(this.locked||this.animating)return;this.animating=true;var self=this;var scrolled=function(){self.animating=false;if(p==0)self.list.css(self.lt,0);if(self.options.wrap=='circular'||self.options.wrap=='both'||self.options.wrap=='last'||self.options.size==null||self.last<self.options.size)self.startAuto();self.buttons();self.notify('onAfterAnimation');};this.notify('onBeforeAnimation');if(!this.options.animation||a==false){this.list.css(this.lt,p+'px');scrolled();}else{var o=!this.options.vertical?{'left':p}:{'top':p};this.list.animate(o,this.options.animation,this.options.easing,scrolled);}},startAuto:function(s){if(s!=undefined)this.options.auto=s;if(this.options.auto==0)return this.stopAuto();if(this.timer!=null)return;var self=this;this.timer=setTimeout(function(){self.next();},this.options.auto*1000);},stopAuto:function(){if(this.timer==null)return;clearTimeout(this.timer);this.timer=null;},buttons:function(n,p){if(n==undefined||n==null){var n=!this.locked&&this.options.size!==0&&((this.options.wrap&&this.options.wrap!='first')||this.options.size==null||this.last<this.options.size);if(!this.locked&&(!this.options.wrap||this.options.wrap=='first')&&this.options.size!=null&&this.last>=this.options.size)n=this.tail!=null&&!this.inTail;}if(p==undefined||p==null){var p=!this.locked&&this.options.size!==0&&((this.options.wrap&&this.options.wrap!='last')||this.first>1);if(!this.locked&&(!this.options.wrap||this.options.wrap=='last')&&this.options.size!=null&&this.first==1)p=this.tail!=null&&this.inTail;}var self=this;this.buttonNext[n?'bind':'unbind'](this.options.buttonNextEvent+'.jcarousel',this.funcNext)[n?'removeClass':'addClass'](this.className('jcarousel-next-disabled')).attr('disabled',n?false:true);this.buttonPrev[p?'bind':'unbind'](this.options.buttonPrevEvent+'.jcarousel',this.funcPrev)[p?'removeClass':'addClass'](this.className('jcarousel-prev-disabled')).attr('disabled',p?false:true);if(this.buttonNext.length>0&&(this.buttonNext[0].jcarouselstate==undefined||this.buttonNext[0].jcarouselstate!=n)&&this.options.buttonNextCallback!=null){this.buttonNext.each(function(){self.options.buttonNextCallback(self,this,n);});this.buttonNext[0].jcarouselstate=n;}if(this.buttonPrev.length>0&&(this.buttonPrev[0].jcarouselstate==undefined||this.buttonPrev[0].jcarouselstate!=p)&&this.options.buttonPrevCallback!=null){this.buttonPrev.each(function(){self.options.buttonPrevCallback(self,this,p);});this.buttonPrev[0].jcarouselstate=p;}},notify:function(evt){var state=this.prevFirst==null?'init':(this.prevFirst<this.first?'next':'prev');this.callback('itemLoadCallback',evt,state);if(this.prevFirst!==this.first){this.callback('itemFirstInCallback',evt,state,this.first);this.callback('itemFirstOutCallback',evt,state,this.prevFirst);}if(this.prevLast!==this.last){this.callback('itemLastInCallback',evt,state,this.last);this.callback('itemLastOutCallback',evt,state,this.prevLast);}this.callback('itemVisibleInCallback',evt,state,this.first,this.last,this.prevFirst,this.prevLast);this.callback('itemVisibleOutCallback',evt,state,this.prevFirst,this.prevLast,this.first,this.last);},callback:function(cb,evt,state,i1,i2,i3,i4){if(this.options[cb]==undefined||(typeof this.options[cb]!='object'&&evt!='onAfterAnimation'))return;var callback=typeof this.options[cb]=='object'?this.options[cb][evt]:this.options[cb];if(!$.isFunction(callback))return;var self=this;if(i1===undefined)callback(self,state,evt);else if(i2===undefined)this.get(i1).each(function(){callback(self,this,i1,state,evt);});else{for(var i=i1;i<=i2;i++)if(i!==null&&!(i>=i3&&i<=i4))this.get(i).each(function(){callback(self,this,i,state,evt);});}},create:function(i){return this.format('<li></li>',i);},format:function(e,i){var $e=$(e).addClass(this.className('jcarousel-item')).addClass(this.className('jcarousel-item-'+i)).css({'float':'left','list-style':'none'});$e.attr('jcarouselindex',i);return $e;},className:function(c){return c+' '+c+(!this.options.vertical?'-horizontal':'-vertical');},dimension:function(e,d){var el=e.jquery!=undefined?e[0]:e;var old=!this.options.vertical?el.offsetWidth+$jc.margin(el,'marginLeft')+$jc.margin(el,'marginRight'):el.offsetHeight+$jc.margin(el,'marginTop')+$jc.margin(el,'marginBottom');if(d==undefined||old==d)return old;var w=!this.options.vertical?d-$jc.margin(el,'marginLeft')-$jc.margin(el,'marginRight'):d-$jc.margin(el,'marginTop')-$jc.margin(el,'marginBottom');$(el).css(this.wh,w+'px');return this.dimension(el);},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-$jc.intval(this.clip.css('borderLeftWidth'))-$jc.intval(this.clip.css('borderRightWidth')):this.clip[0].offsetHeight-$jc.intval(this.clip.css('borderTopWidth'))-$jc.intval(this.clip.css('borderBottomWidth'));},index:function(i,s){if(s==undefined)s=this.options.size;return Math.round((((i-1)/s)-Math.floor((i-1)/s))*s)+1;}});$jc.extend({defaults:function(d){return $.extend(defaults,d||{});},margin:function(e,p){if(!e)return 0;var el=e.jquery!=undefined?e[0]:e;if(p=='marginRight'&&$.browser.safari){var old={'display':'block','float':'none','width':'auto'},oWidth,oWidth2;$.swap(el,old,function(){oWidth=el.offsetWidth;});old['marginRight']=0;$.swap(el,old,function(){oWidth2=el.offsetWidth;});return oWidth2-oWidth;}return $jc.intval($.css(el,p));},intval:function(v){v=parseInt(v);return isNaN(v)?0:v;}});})(jQuery);

/* End - 415 - JS jQuery jCarousel rev. 475 *//* Begin - 408 - JS jQuery Timers rev. 304 */

jQuery.fn.extend({
    everyTime: function(interval, label, fn, times, belay) {
        return this.each(function() {
            jQuery.timer.add(this, interval, label, fn, times, belay);
        });
    },
    oneTime: function(interval, label, fn) {
        return this.each(function() {
            jQuery.timer.add(this, interval, label, fn, 1);
        });
    },
    stopTime: function(label, fn) {
        return this.each(function() {
            jQuery.timer.remove(this, label, fn);
        });
    }
});
jQuery.extend({
    timer: {
        guid: 1,
        global: {},
        regex: /^([0-9]+)\s*(.*s)?$/,
        powers: {
            // Yeah this is major overkill...
            'ms': 1,
            'cs': 10,
            'ds': 100,
            's': 1000,
            'das': 10000,
            'hs': 100000,
            'ks': 1000000
        },
        timeParse: function(value) {
            if (value == undefined || value == null)
                return null;
            var result = this.regex.exec(jQuery.trim(value.toString()));
            if (result[2]) {
                var num = parseInt(result[1], 10);
                var mult = this.powers[result[2]] || 1;
                return num * mult;
            } else {
                return value;
            }
        },
        add: function(element, interval, label, fn, times, belay) {
            var counter = 0;
            
            if (jQuery.isFunction(label)) {
                if (!times) 
                    times = fn;
                fn = label;
                label = interval;
            }
            
            interval = jQuery.timer.timeParse(interval);
            if (typeof interval != 'number' || isNaN(interval) || interval <= 0)
                return;
            if (times && times.constructor != Number) {
                belay = !!times;
                times = 0;
            }
            
            times = times || 0;
            belay = belay || false;
            
            if (!element.$timers) 
                element.$timers = {};
            
            if (!element.$timers[label])
                element.$timers[label] = {};
            
            fn.$timerID = fn.$timerID || this.guid++;
            
            var handler = function() {
                if (belay && this.inProgress) 
                    return;
                this.inProgress = true;
                if ((++counter > times && times !== 0) || fn.call(element, counter) === false)
                    jQuery.timer.remove(element, label, fn);
                this.inProgress = false;
            };
            
            handler.$timerID = fn.$timerID;
            
            if (!element.$timers[label][fn.$timerID]) 
                element.$timers[label][fn.$timerID] = window.setInterval(handler,interval);
            
            if ( !this.global[label] )
                this.global[label] = [];
            this.global[label].push( element );
            
        },
        remove: function(element, label, fn) {
            var timers = element.$timers, ret;
            
            if ( timers ) {
                
                if (!label) {
                    for ( label in timers )
                        this.remove(element, label, fn);
                } else if ( timers[label] ) {
                    if ( fn ) {
                        if ( fn.$timerID ) {
                            window.clearInterval(timers[label][fn.$timerID]);
                            delete timers[label][fn.$timerID];
                        }
                    } else {
                        for ( var fn in timers[label] ) {
                            window.clearInterval(timers[label][fn]);
                            delete timers[label][fn];
                        }
                    }
                    
                    for ( ret in timers[label] ) break;
                    if ( !ret ) {
                        ret = null;
                        delete timers[label];
                    }
                }
                
                for ( ret in timers ) break;
                if ( !ret ) 
                    element.$timers = null;
            }
        }
    }
});
if (jQuery.browser.msie)
    jQuery(window).one("unload", function() {
        var global = jQuery.timer.global;
        for ( var label in global ) {
            var els = global[label], i = els.length;
            while ( --i )
                jQuery.timer.remove(els[i], label);
        }
    });
 
/* End - 408 - JS jQuery Timers rev. 304 *//* Begin - 419 - JS jQuery UI rev. 592 */

/*!
 * jQuery UI 1.8.1
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui||function(c){c.ui={version:"1.8.1",plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")=="hidden")return false;
b=b&&b=="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,f,g){return c.ui.isOverAxis(a,d,f)&&c.ui.isOverAxis(b,e,g)},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,
PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none")},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||
/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==
undefined)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b=="absolute"||b=="relative"||b=="fixed"){b=parseInt(a.css("zIndex"));if(!isNaN(b)&&b!=0)return b}a=a.parent()}}return 0}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b||"area"==b?a.href||!isNaN(d):!isNaN(d))&&
!c(a)["area"==b?"parents":"closest"](":hidden").length},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}})}(jQuery);
;/*!
 * jQuery UI Widget 1.8.1
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b){var j=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add(this).each(function(){b(this).triggerHandler("remove")});return j.call(b(this),a,c)})};b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend({},c.options);b[e][a].prototype=
b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.substring(0,1)==="_")return h;e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==undefined){h=i;return false}}):this.each(function(){var g=
b.data(this,a);if(g){d&&g.option(d);g._init()}else b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){this.element=b(c).data(this.widgetName,this);this.options=b.extend(true,{},this.options,b.metadata&&b.metadata.get(c)[this.widgetName],a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();
this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(a,c){var d=a,e=this;if(arguments.length===0)return b.extend({},e.options);if(typeof a==="string"){if(c===undefined)return this.options[a];d={};d[a]=c}b.each(d,function(f,
h){e._setOption(f,h)});return e},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=
b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.1
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *    jquery.ui.widget.js
 */
(function(c){c.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)}).bind("click."+this.widgetName,function(b){if(a._preventClickEvent){a._preventClickEvent=false;b.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(a){a.originalEvent=a.originalEvent||{};if(!a.originalEvent.mouseHandled){this._mouseStarted&&
this._mouseUp(a);this._mouseDownEvent=a;var b=this,e=a.which==1,f=typeof this.options.cancel=="string"?c(a.target).parents().add(a.target).filter(this.options.cancel).length:false;if(!e||f||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){b.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();
return true}}this._mouseMoveDelegate=function(d){return b._mouseMove(d)};this._mouseUpDelegate=function(d){return b._mouseUp(d)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);c.browser.safari||a.preventDefault();return a.originalEvent.mouseHandled=true}},_mouseMove:function(a){if(c.browser.msie&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&
this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=a.target==this._mouseDownEvent.target;this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-
a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Position 1.8.1
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var m=/left|center|right/,n=/top|center|bottom/,p=c.fn.position,q=c.fn.offset;c.fn.position=function(a){if(!a||!a.of)return p.apply(this,arguments);a=c.extend({},a);var b=c(a.of),d=(a.collision||"flip").split(" "),e=a.offset?a.offset.split(" "):[0,0],g,h,i;if(a.of.nodeType===9){g=b.width();h=b.height();i={top:0,left:0}}else if(a.of.scrollTo&&a.of.document){g=b.width();h=b.height();i={top:b.scrollTop(),left:b.scrollLeft()}}else if(a.of.preventDefault){a.at="left top";g=h=
0;i={top:a.of.pageY,left:a.of.pageX}}else{g=b.outerWidth();h=b.outerHeight();i=b.offset()}c.each(["my","at"],function(){var f=(a[this]||"").split(" ");if(f.length===1)f=m.test(f[0])?f.concat(["center"]):n.test(f[0])?["center"].concat(f):["center","center"];f[0]=m.test(f[0])?f[0]:"center";f[1]=n.test(f[1])?f[1]:"center";a[this]=f});if(d.length===1)d[1]=d[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(a.at[0]==="right")i.left+=g;else if(a.at[0]==="center")i.left+=
g/2;if(a.at[1]==="bottom")i.top+=h;else if(a.at[1]==="center")i.top+=h/2;i.left+=e[0];i.top+=e[1];return this.each(function(){var f=c(this),k=f.outerWidth(),l=f.outerHeight(),j=c.extend({},i);if(a.my[0]==="right")j.left-=k;else if(a.my[0]==="center")j.left-=k/2;if(a.my[1]==="bottom")j.top-=l;else if(a.my[1]==="center")j.top-=l/2;j.left=parseInt(j.left);j.top=parseInt(j.top);c.each(["left","top"],function(o,r){c.ui.position[d[o]]&&c.ui.position[d[o]][r](j,{targetWidth:g,targetHeight:h,elemWidth:k,
elemHeight:l,offset:e,my:a.my,at:a.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(j,{using:a.using}))})};c.ui.position={fit:{left:function(a,b){var d=c(window);b=a.left+b.elemWidth-d.width()-d.scrollLeft();a.left=b>0?a.left-b:Math.max(0,a.left)},top:function(a,b){var d=c(window);b=a.top+b.elemHeight-d.height()-d.scrollTop();a.top=b>0?a.top-b:Math.max(0,a.top)}},flip:{left:function(a,b){if(b.at[0]!=="center"){var d=c(window);d=a.left+b.elemWidth-d.width()-d.scrollLeft();var e=b.my[0]==="left"?
-b.elemWidth:b.my[0]==="right"?b.elemWidth:0,g=-2*b.offset[0];a.left+=a.left<0?e+b.targetWidth+g:d>0?e-b.targetWidth+g:0}},top:function(a,b){if(b.at[1]!=="center"){var d=c(window);d=a.top+b.elemHeight-d.height()-d.scrollTop();var e=b.my[1]==="top"?-b.elemHeight:b.my[1]==="bottom"?b.elemHeight:0,g=b.at[1]==="top"?b.targetHeight:-b.targetHeight,h=-2*b.offset[1];a.top+=a.top<0?e+b.targetHeight+h:d>0?e+g+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(a,b){if(/static/.test(c.curCSS(a,"position")))a.style.position=
"relative";var d=c(a),e=d.offset(),g=parseInt(c.curCSS(a,"top",true),10)||0,h=parseInt(c.curCSS(a,"left",true),10)||0;e={top:b.top-e.top+g,left:b.left-e.left+h};"using"in b?b.using.call(a,e):d.css(e)};c.fn.offset=function(a){var b=this[0];if(!b||!b.ownerDocument)return null;if(a)return this.each(function(){c.offset.setOffset(this,a)});return q.call(this)}}})(jQuery);
;/*
 * jQuery UI Tabs 1.8.1
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *    jquery.ui.core.js
 *    jquery.ui.widget.js
 */
(function(d){var s=0,u=0;d.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:'<li><a href="#{href}"><span>#{label}</span></a></li>'},_create:function(){this._tabify(true)},_setOption:function(c,e){if(c=="selected")this.options.collapsible&&e==this.options.selected||
this.select(e);else{this.options[c]=e;this._tabify()}},_tabId:function(c){return c.title&&c.title.replace(/\s/g,"_").replace(/[^A-Za-z0-9\-_:\.]/g,"")||this.options.idPrefix+ ++s},_sanitizeSelector:function(c){return c.replace(/:/g,"\\:")},_cookie:function(){var c=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+ ++u);return d.cookie.apply(null,[c].concat(d.makeArray(arguments)))},_ui:function(c,e){return{tab:c,panel:e,index:this.anchors.index(c)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var c=
d(this);c.html(c.data("label.tabs")).removeData("label.tabs")})},_tabify:function(c){function e(g,f){g.css({display:""});!d.support.opacity&&f.opacity&&g[0].style.removeAttribute("filter")}this.list=this.element.find("ol,ul").eq(0);this.lis=d("li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return d("a",this)[0]});this.panels=d([]);var a=this,b=this.options,h=/^#.+/;this.anchors.each(function(g,f){var j=d(f).attr("href"),l=j.split("#")[0],p;if(l&&(l===location.toString().split("#")[0]||
(p=d("base")[0])&&l===p.href)){j=f.hash;f.href=j}if(h.test(j))a.panels=a.panels.add(a._sanitizeSelector(j));else if(j!="#"){d.data(f,"href.tabs",j);d.data(f,"load.tabs",j.replace(/#.*$/,""));j=a._tabId(f);f.href="#"+j;f=d("#"+j);if(!f.length){f=d(b.panelTemplate).attr("id",j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g-1]||a.list);f.data("destroy.tabs",true)}a.panels=a.panels.add(f)}else b.disabled.push(g)});if(c){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(b.selected===undefined){location.hash&&this.anchors.each(function(g,f){if(f.hash==location.hash){b.selected=g;return false}});if(typeof b.selected!="number"&&b.cookie)b.selected=parseInt(a._cookie(),10);if(typeof b.selected!="number"&&this.lis.filter(".ui-tabs-selected").length)b.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));b.selected=b.selected||(this.lis.length?0:-1)}else if(b.selected===null)b.selected=-1;b.selected=b.selected>=0&&this.anchors[b.selected]||b.selected<0?b.selected:0;b.disabled=d.unique(b.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"),function(g){return a.lis.index(g)}))).sort();d.inArray(b.selected,b.disabled)!=-1&&b.disabled.splice(d.inArray(b.selected,b.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(b.selected>=0&&this.anchors.length){this.panels.eq(b.selected).removeClass("ui-tabs-hide");this.lis.eq(b.selected).addClass("ui-tabs-selected ui-state-active");a.element.queue("tabs",function(){a._trigger("show",null,a._ui(a.anchors[b.selected],a.panels[b.selected]))});this.load(b.selected)}d(window).bind("unload",function(){a.lis.add(a.anchors).unbind(".tabs");a.lis=a.anchors=a.panels=null})}else b.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));this.element[b.collapsible?"addClass":
"removeClass"]("ui-tabs-collapsible");b.cookie&&this._cookie(b.selected,b.cookie);c=0;for(var i;i=this.lis[c];c++)d(i)[d.inArray(c,b.disabled)!=-1&&!d(i).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");b.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(b.event!="mouseover"){var k=function(g,f){f.is(":not(.ui-state-disabled)")&&f.addClass("ui-state-"+g)},n=function(g,f){f.removeClass("ui-state-"+g)};this.lis.bind("mouseover.tabs",
function(){k("hover",d(this))});this.lis.bind("mouseout.tabs",function(){n("hover",d(this))});this.anchors.bind("focus.tabs",function(){k("focus",d(this).closest("li"))});this.anchors.bind("blur.tabs",function(){n("focus",d(this).closest("li"))})}var m,o;if(b.fx)if(d.isArray(b.fx)){m=b.fx[0];o=b.fx[1]}else m=o=b.fx;var q=o?function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",function(){e(f,o);a._trigger("show",
null,a._ui(g,f[0]))})}:function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");a._trigger("show",null,a._ui(g,f[0]))},r=m?function(g,f){f.animate(m,m.duration||"normal",function(){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");e(f,m);a.element.dequeue("tabs")})}:function(g,f){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");a.element.dequeue("tabs")};this.anchors.bind(b.event+".tabs",
function(){var g=this,f=d(this).closest("li"),j=a.panels.filter(":not(.ui-tabs-hide)"),l=d(a._sanitizeSelector(this.hash));if(f.hasClass("ui-tabs-selected")&&!b.collapsible||f.hasClass("ui-state-disabled")||f.hasClass("ui-state-processing")||a._trigger("select",null,a._ui(this,l[0]))===false){this.blur();return false}b.selected=a.anchors.index(this);a.abort();if(b.collapsible)if(f.hasClass("ui-tabs-selected")){b.selected=-1;b.cookie&&a._cookie(b.selected,b.cookie);a.element.queue("tabs",function(){r(g,
j)}).dequeue("tabs");this.blur();return false}else if(!j.length){b.cookie&&a._cookie(b.selected,b.cookie);a.element.queue("tabs",function(){q(g,l)});a.load(a.anchors.index(this));this.blur();return false}b.cookie&&a._cookie(b.selected,b.cookie);if(l.length){j.length&&a.element.queue("tabs",function(){r(g,j)});a.element.queue("tabs",function(){q(g,l)});a.load(a.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";d.browser.msie&&this.blur()});this.anchors.bind("click.tabs",
function(){return false})},destroy:function(){var c=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var e=d.data(this,"href.tabs");if(e)this.href=e;var a=d(this).unbind(".tabs");d.each(["href","load","cache"],function(b,h){a.removeData(h+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){d.data(this,
"destroy.tabs")?d(this).remove():d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});c.cookie&&this._cookie(null,c.cookie);return this},add:function(c,e,a){if(a===undefined)a=this.anchors.length;var b=this,h=this.options;e=d(h.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,e));c=!c.indexOf("#")?c.replace("#",""):this._tabId(d("a",e)[0]);e.addClass("ui-state-default ui-corner-top").data("destroy.tabs",
true);var i=d("#"+c);i.length||(i=d(h.panelTemplate).attr("id",c).data("destroy.tabs",true));i.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(a>=this.lis.length){e.appendTo(this.list);i.appendTo(this.list[0].parentNode)}else{e.insertBefore(this.lis[a]);i.insertBefore(this.panels[a])}h.disabled=d.map(h.disabled,function(k){return k>=a?++k:k});this._tabify();if(this.anchors.length==1){h.selected=0;e.addClass("ui-tabs-selected ui-state-active");i.removeClass("ui-tabs-hide");
this.element.queue("tabs",function(){b._trigger("show",null,b._ui(b.anchors[0],b.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[a],this.panels[a]));return this},remove:function(c){var e=this.options,a=this.lis.eq(c).remove(),b=this.panels.eq(c).remove();if(a.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(c+(c+1<this.anchors.length?1:-1));e.disabled=d.map(d.grep(e.disabled,function(h){return h!=c}),function(h){return h>=c?--h:h});this._tabify();this._trigger("remove",
null,this._ui(a.find("a")[0],b[0]));return this},enable:function(c){var e=this.options;if(d.inArray(c,e.disabled)!=-1){this.lis.eq(c).removeClass("ui-state-disabled");e.disabled=d.grep(e.disabled,function(a){return a!=c});this._trigger("enable",null,this._ui(this.anchors[c],this.panels[c]));return this}},disable:function(c){var e=this.options;if(c!=e.selected){this.lis.eq(c).addClass("ui-state-disabled");e.disabled.push(c);e.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[c],this.panels[c]))}return this},
select:function(c){if(typeof c=="string")c=this.anchors.index(this.anchors.filter("[href$="+c+"]"));else if(c===null)c=-1;if(c==-1&&this.options.collapsible)c=this.options.selected;this.anchors.eq(c).trigger(this.options.event+".tabs");return this},load:function(c){var e=this,a=this.options,b=this.anchors.eq(c)[0],h=d.data(b,"load.tabs");this.abort();if(!h||this.element.queue("tabs").length!==0&&d.data(b,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(c).addClass("ui-state-processing");
if(a.spinner){var i=d("span",b);i.data("label.tabs",i.html()).html(a.spinner)}this.xhr=d.ajax(d.extend({},a.ajaxOptions,{url:h,success:function(k,n){d(e._sanitizeSelector(b.hash)).html(k);e._cleanup();a.cache&&d.data(b,"cache.tabs",true);e._trigger("load",null,e._ui(e.anchors[c],e.panels[c]));try{a.ajaxOptions.success(k,n)}catch(m){}},error:function(k,n){e._cleanup();e._trigger("load",null,e._ui(e.anchors[c],e.panels[c]));try{a.ajaxOptions.error(k,n,c,b)}catch(m){}}}));e.element.dequeue("tabs");return this}},
abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},url:function(c,e){this.anchors.eq(c).removeData("cache.tabs").data("load.tabs",e);return this},length:function(){return this.anchors.length}});d.extend(d.ui.tabs,{version:"1.8.1"});d.extend(d.ui.tabs.prototype,{rotation:null,rotate:function(c,e){var a=this,b=this.options,h=a._rotate||(a._rotate=
function(i){clearTimeout(a.rotation);a.rotation=setTimeout(function(){var k=b.selected;a.select(++k<a.anchors.length?k:0)},c);i&&i.stopPropagation()});e=a._unrotate||(a._unrotate=!e?function(i){i.clientX&&a.rotate(null)}:function(){t=b.selected;h()});if(c){this.element.bind("tabsshow",h);this.anchors.bind(b.event+".tabs",e);h()}else{clearTimeout(a.rotation);this.element.unbind("tabsshow",h);this.anchors.unbind(b.event+".tabs",e);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
;

/* End - 419 - JS jQuery UI rev. 592 *//* Begin - 405 - JS jQuery Colorbox rev. 218 */

// ColorBox v1.3.6 - a full featured, light-weight, customizable lightbox based on jQuery 1.3
// c) 2009 Jack Moore - www.colorpowered.com - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function ($) {
    // Shortcuts (to increase compression)
    var colorbox = 'colorbox',
    hover = 'hover',
    TRUE = true,
    FALSE = false,
    cboxPublic,
    isIE = $.browser.msie && !$.support.opacity, // feature detection alone gave false positives in some browsers
    isIE6 = isIE && $.browser.version < 7,
    // Event Strings (to increase compression)
    cbox_open = 'cbox_open',
    cbox_load = 'cbox_load',
    cbox_complete = 'cbox_complete',
    cbox_cleanup = 'cbox_cleanup',
    cbox_closed = 'cbox_closed',
    cbox_resize = 'resize.cbox_resize',
    // Cached jQuery Object Variables
    $overlay,
    $cbox,
    $wrap,
    $content,
    $topBorder,
    $leftBorder,
    $rightBorder,
    $bottomBorder,
    $related,
    $window,
    $loaded,
    $loadingBay,
    $loadingOverlay,
    $loadingGraphic,
    $title,
    $current,
    $slideshow,
    $next,
    $prev,
    $close,
    // Variables for cached values or use across multiple functions
    interfaceHeight,
    interfaceWidth,
    loadedHeight,
    loadedWidth,
    element,
    bookmark,
    index,
    settings,
    open,
    active,
    
    // ColorBox Default Settings.    
    // See http://colorpowered.com/colorbox for details.
    defaults = {
        transition: "elastic",
        speed: 350,
        width: FALSE,
        height: FALSE,
        innerWidth: FALSE,
        innerHeight: FALSE,
        initialWidth: "400",
        initialHeight: "400",
        maxWidth: FALSE,
        maxHeight: FALSE,
        scalePhotos: TRUE,
        scrolling: TRUE,
        inline: FALSE,
        html: FALSE,
        iframe: FALSE,
        photo: FALSE,
        href: FALSE,
        title: FALSE,
        rel: FALSE,
        opacity: 0.9,
        preloading: TRUE,
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        open: FALSE,
        overlayClose: TRUE,
        
        slideshow: FALSE,
        slideshowAuto: TRUE,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        
        onOpen: FALSE,
        onLoad: FALSE,
        onComplete: FALSE,
        onCleanup: FALSE,
        onClosed: FALSE
    };
    
    // ****************
    // HELPER FUNCTIONS
    // ****************
        
    // Convert % values to pixels
    function setSize(size, dimension) {
        dimension = dimension === 'x' ? $window.width() : $window.height();//document.documentElement.clientWidth : document.documentElement.clientHeight;
        return (typeof size === 'string') ? Math.round((size.match(/%/) ? (dimension / 100) * parseInt(size, 10) : parseInt(size, 10))) : size;
    }
    // Checks an href to see if it is a photo.
    // There is a force photo option (photo: true) for hrefs that cannot be matched by this regex.
    function isImage(url) {
        url = $.isFunction(url) ? url.call(element) : url;
        return settings.photo || url.match(/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i);
    }
    
    // Assigns functions results to their respective settings.  This allows functions to be used to set ColorBox options.
    function process() {
        for (var i in settings) {
            if ($.isFunction(settings[i]) && i.substring(0, 2) !== 'on') { // checks to make sure the function isn't one of the callbacks, they will be handled at the appropriate time.
                settings[i] = settings[i].call(element);
            }
        }
        settings.rel = settings.rel || element.rel;
        settings.href = settings.href || element.href;
        settings.title = settings.title || element.title;
    }
    function launch(elem) {
        
        element = elem;
        
        settings = $(element).data(colorbox);
        
        process(); // Convert functions to their returned values.
        
        if (settings.rel && settings.rel !== 'nofollow') {
            $related = $('.cboxElement').filter(function () {
                var relRelated = $(this).data(colorbox).rel || this.rel;
                return (relRelated === settings.rel);
            });
            index = $related.index(element);
            
            // Check direct calls to ColorBox.
            if (index < 0) {
                $related = $related.add(element);
                index = $related.length - 1;
            }
        } else {
            $related = $(element);
            index = 0;
        }
        
        if (!open) {
            open = TRUE;
            
            active = TRUE; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.
            
            bookmark = element;
            
            bookmark.blur(); // Remove the focus from the calling element.
            
            // Set Navigation Key Bindings
            $(document).bind("keydown.cbox_close", function (e) {
                if (e.keyCode === 27) {
                    e.preventDefault();
                    cboxPublic.close();
                }
            }).bind("keydown.cbox_arrows", function (e) {
                if ($related.length > 1) {
                    if (e.keyCode === 37) {
                        e.preventDefault();
                        $prev.click();
                    } else if (e.keyCode === 39) {
                        e.preventDefault();
                        $next.click();
                    }
                }
            });
            
            if (settings.overlayClose) {
                $overlay.css({"cursor": "pointer"}).one('click', cboxPublic.close);
            }
            
            $.event.trigger(cbox_open);
            if (settings.onOpen) {
                settings.onOpen.call(element);
            }
            
            $overlay.css({"opacity": settings.opacity}).show();
            
            // Opens inital empty ColorBox prior to content being loaded.
            settings.w = setSize(settings.initialWidth, 'x');
            settings.h = setSize(settings.initialHeight, 'y');
            cboxPublic.position(0);
            
            if (isIE6) {
                $window.bind('resize.cboxie6 scroll.cboxie6', function () {
                    $overlay.css({width: $window.width(), height: $window.height(), top: $window.scrollTop(), left: $window.scrollLeft()});
                }).trigger("scroll.cboxie6");
            }
        }
        
        $current.add($prev).add($next).add($slideshow).add($title).hide();
        
        $close.html(settings.close).show();
        
        cboxPublic.slideshow();
        
        cboxPublic.load();
    }
    // ****************
    // PUBLIC FUNCTIONS
    // Usage format: $.fn.colorbox.close();
    // Usage from within an iframe: parent.$.fn.colorbox.close();
    // ****************
    
    cboxPublic = $.fn.colorbox = function (options, callback) {
        var $this = this;
        
        if (!$this.length) {
            if ($this.selector === '') { // empty selector means a direct call, ie: $.fn.colorbox();
                $this = $('<a/>');
                options.open = TRUE;
            } else { // else the selector didn't match anything, and colorbox should go ahead and return.
                return this;
            }
        }
        
        $this.each(function () {
            var data = $.extend({}, $(this).data(colorbox) ? $(this).data(colorbox) : defaults, options);
            
            $(this).data(colorbox, data).addClass("cboxElement");
            
            if (callback) {
                $(this).data(colorbox).onComplete = callback;
            }
        });
        
        if (options && options.open) {
            launch($this);
        }
        
        return this;
    };
    // Initialize ColorBox: store common calculations, preload the interface graphics, append the html.
    // This preps colorbox for a speedy open when clicked, and lightens the burdon on the browser by only
    // having to run once, instead of each time colorbox is opened.
    cboxPublic.init = function () {
        
        // jQuery object generator to save a bit of space
        function $div(id) {
            return $('<div id="cbox' + id + '"/>');
        }
        
        // Create & Append jQuery Objects
        $window = $(window);
        $cbox = $('<div id="colorbox"/>');
        $overlay = $div("Overlay").hide();
        $wrap = $div("Wrapper");
        $content = $div("Content").append(
            $loaded = $div("LoadedContent").css({width: 0, height: 0}),
            $loadingOverlay = $div("LoadingOverlay"),
            $loadingGraphic = $div("LoadingGraphic"),
            $title = $div("Title"),
            $current = $div("Current"),
            $slideshow = $div("Slideshow"),
            $next = $div("Next"),
            $prev = $div("Previous"),
            $close = $div("Close")
        );
        $wrap.append( // The 3x3 Grid that makes up ColorBox
            $('<div/>').append(
                $div("TopLeft"),
                $topBorder = $div("TopCenter"),
                $div("TopRight")
            ),
            $('<div/>').append(
                $leftBorder = $div("MiddleLeft"),
                $content,
                $rightBorder = $div("MiddleRight")
            ),
            $('<div/>').append(
                $div("BottomLeft"),
                $bottomBorder = $div("BottomCenter"),
                $div("BottomRight")
            )
        ).children().children().css({'float': 'left'});
        
        $loadingBay = $("<div style='position:absolute; top:0; left:0; width:9999px; height:0;'/>");
        
        $('body').prepend($overlay, $cbox.append($wrap, $loadingBay));
                
        if (isIE) {
            $cbox.addClass('cboxIE');
            if (isIE6) {
                $overlay.css('position', 'absolute');
            }
        }
        
        // Add rollover event to navigation elements
        $content.children()
        .bind('mouseover mouseout', function(){
            $(this).toggleClass(hover);
        }).addClass(hover);
        
        // Cache values needed for size calculations
        interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(TRUE) - $content.height();//Subtraction needed for IE6
        interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(TRUE) - $content.width();
        loadedHeight = $loaded.outerHeight(TRUE);
        loadedWidth = $loaded.outerWidth(TRUE);
        
        // Setting padding to remove the need to do size conversions during the animation step.
        $cbox.css({"padding-bottom": interfaceHeight, "padding-right": interfaceWidth}).hide();
        
        // Setup button & key events.
        $next.click(cboxPublic.next);
        $prev.click(cboxPublic.prev);
        $close.click(cboxPublic.close);
        
        // Adding the 'hover' class allowed the browser to load the hover-state
        // background graphics.  The class can now can be removed.
        $content.children().removeClass(hover);
        
        $('.cboxElement').live('click', function (e) {
            if (e.button !== 0 && typeof e.button !== 'undefined') {// checks to see if it was a non-left mouse-click.
                return TRUE;
            } else {
                launch(this);            
                return FALSE;
            }
        });
    };
    cboxPublic.position = function (speed, loadedCallback) {
        var
        animate_speed,
        winHeight = $window.height(),
        // keeps the top and left positions within the browser's viewport.
        posTop = Math.max(winHeight - settings.h - loadedHeight - interfaceHeight,0)/2 + $window.scrollTop(),
        posLeft = Math.max(document.documentElement.clientWidth - settings.w - loadedWidth - interfaceWidth,0)/2 + $window.scrollLeft();
        
        // setting the speed to 0 to reduce the delay between same-sized content.
        animate_speed = ($cbox.width() === settings.w+loadedWidth && $cbox.height() === settings.h+loadedHeight) ? 0 : speed;
        
        // this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
        // but it has to be shrank down around the size of div#colorbox when it's done.  If not,
        // it can invoke an obscure IE bug when using iframes.
        $wrap[0].style.width = $wrap[0].style.height = "9999px";
        
        function modalDimensions (that) {
            // loading overlay size has to be sure that IE6 uses the correct height.
            $topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = that.style.width;
            $loadingGraphic[0].style.height = $loadingOverlay[0].style.height = $content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = that.style.height;
        }
        
        $cbox.dequeue().animate({width:settings.w+loadedWidth, height:settings.h+loadedHeight, top:posTop, left:posLeft}, {duration: animate_speed,
            complete: function(){
                modalDimensions(this);
                
                active = FALSE;
                
                // shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
                $wrap[0].style.width = (settings.w+loadedWidth+interfaceWidth) + "px";
                $wrap[0].style.height = (settings.h+loadedHeight+interfaceHeight) + "px";
                
                if (loadedCallback) {loadedCallback();}
            },
            step: function(){
                modalDimensions(this);
            }
        });
    };
    cboxPublic.resize = function (object) {
        if(!open){ return; }
        
        var topMargin,
        prev,
        prevSrc,
        next,
        nextSrc,
        photo,
        timeout,
        speed = settings.transition==="none" ? 0 : settings.speed;
        
        $window.unbind(cbox_resize);
        
        if(!object){
            timeout = setTimeout(function(){ // timer allows IE to render the dimensions before attempting to calculate the height
                var $child = $loaded.wrapInner("<div style='overflow:auto'></div>").children(); // temporary wrapper to get an accurate estimate of just how high the total content should be.
                settings.h = $child.height();
                $loaded.css({height:settings.h});
                $child.replaceWith($child.children()); // ditch the temporary wrapper div used in height calculation
                cboxPublic.position(speed);
            }, 1);
            return;
        }
        
        $loaded.remove();
        $loaded = $('<div id="cboxLoadedContent"/>').html(object);
        
        function getWidth(){
            settings.w = settings.w || $loaded.width();
            settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
            return settings.w;
        }
        function getHeight(){
            settings.h = settings.h || $loaded.height();
            settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
            return settings.h;
        }
        
        $loaded.hide()
        .appendTo($loadingBay)// content has to be appended to the DOM for accurate size calculations.  Appended to an absolutely positioned element, rather than BODY, which avoids an extremely brief display of the vertical scrollbar in Firefox that can occur for a small minority of websites.
        .css({width:getWidth(), overflow:settings.scrolling ? 'auto' : 'hidden'})
        .css({height:getHeight()})// sets the height independently from the width in case the new width influences the value of height.
        .prependTo($content);
        
        $('#cboxPhoto').css({cssFloat:'none'});// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
        
        // Hides SELECT elements in IE6 because they would otherwise sit on top of the overlay.
        if (isIE6) {
            $('select:not(#colorbox select)').filter(function(){
                return this.style.visibility !== 'hidden';
            }).css({'visibility':'hidden'}).one(cbox_cleanup, function(){
                this.style.visibility = 'inherit';
            });
        }
                
        function setPosition (s) {
            cboxPublic.position(s, function(){
                if (!open) { return; }
                
                if (isIE) {
                    //This fadeIn helps the bicubic resampling to kick-in.
                    if( photo ){$loaded.fadeIn(100);}
                    //IE adds a filter when ColorBox fades in and out that can cause problems if the loaded content contains transparent pngs.
                    $cbox[0].style.removeAttribute("filter");
                }
                
                //Waited until the iframe is added to the DOM & it is visible before setting the src.
                //This increases compatability with pages using DOM dependent JavaScript.
                if(settings.iframe){
                    $loaded.append("<iframe id='cboxIframe'" + (settings.scrolling ? " " : "scrolling='no'") + " name='iframe_"+new Date().getTime()+"' frameborder=0 src='"+settings.href+"' " + (isIE ? "allowtransparency='true'" : '') + " />");
                }
                
                $loaded.show();
                
                $title.show().html(settings.title);
                
                if ($related.length>1) {
                    $current.html(settings.current.replace(/\{current\}/, index+1).replace(/\{total\}/, $related.length)).show();
                    $next.html(settings.next).show();
                    $prev.html(settings.previous).show();
                    
                    if(settings.slideshow){
                        $slideshow.show();
                    }
                }
                
                $loadingOverlay.hide();
                $loadingGraphic.hide();
                
                $.event.trigger(cbox_complete);
                if (settings.onComplete) {
                    settings.onComplete.call(element);
                }
                
                if (settings.transition === 'fade'){
                    $cbox.fadeTo(speed, 1, function(){
                        if(isIE){$cbox[0].style.removeAttribute("filter");}
                    });
                }
                
                $window.bind(cbox_resize, function(){
                    cboxPublic.position(0);
                });
            });
        }
        
        if((settings.transition === 'fade' && $cbox.fadeTo(speed, 0, function(){setPosition(0);})) || setPosition(speed)){}
        
        // Preloads images within a rel group
        if (settings.preloading && $related.length>1) {
            prev = index > 0 ? $related[index-1] : $related[$related.length-1];
            next = index < $related.length-1 ? $related[index+1] : $related[0];
            nextSrc = $(next).data(colorbox).href || next.href;
            prevSrc = $(prev).data(colorbox).href || prev.href;
            
            if(isImage(nextSrc)){
                $('<img />').attr('src', nextSrc);
            }
            
            if(isImage(prevSrc)){
                $('<img />').attr('src', prevSrc);
            }
        }
    };
    cboxPublic.load = function () {
        var href, img, setResize, resize = cboxPublic.resize;
        
        active = TRUE;
        
        /*
         
        // I decided to comment this out because I can see it causing problems as users
        // really should just set the dimensions on their IMG elements instead,
        // but I'm leaving the code in as it may be useful to someone.
        // To use, uncomment the function and change 'if(textStatus === "success"){ resize(this); }'
        // to 'if(textStatus === "success"){ preload(this); }'
        
        // Preload loops through the HTML to find IMG elements and loads their sources.
        // This allows the resize method to accurately estimate the dimensions of the new content.
        function preload(html){
            var
            $ajax = $(html),
            $imgs = $ajax.find('img'),
            x = $imgs.length;
            
            function loadloop(){
                var img = new Image();
                x = x-1;
                if(x >= 0){
                    img.onload = loadloop;
                    img.src = $imgs[x].src;
                } else {
                    resize($ajax);
                }
            }
            
            loadloop();
        }
        */
        
        element = $related[index];
        
        settings = $(element).data(colorbox);
        
        //convert functions to static values
        process();
        
        $.event.trigger(cbox_load);
        if (settings.onLoad) {
            settings.onLoad.call(element);
        }
        
        // Evaluate the height based on the optional height and width settings.
        settings.h = settings.height ?
                setSize(settings.height, 'y') - loadedHeight - interfaceHeight :
                settings.innerHeight ?
                    setSize(settings.innerHeight, 'y') :
                    FALSE;
        settings.w = settings.width ?
                setSize(settings.width, 'x') - loadedWidth - interfaceWidth :
                settings.innerWidth ?
                    setSize(settings.innerWidth, 'x') :
                    FALSE;
        
        // Sets the minimum dimensions for use in image scaling
        settings.mw = settings.w;
        settings.mh = settings.h;
        
        // Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
        // If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
        if(settings.maxWidth){
            settings.mw = setSize(settings.maxWidth, 'x') - loadedWidth - interfaceWidth;
            settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
        }
        if(settings.maxHeight){
            settings.mh = setSize(settings.maxHeight, 'y') - loadedHeight - interfaceHeight;
            settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
        }
        
        href = settings.href;
        
        $loadingOverlay.show();
        $loadingGraphic.show();
        
        if (settings.inline) {
            // Inserts an empty placeholder where inline content is being pulled from.
            // An event is bound to put inline content back when ColorBox closes or loads new content.
            $('<div id="cboxInlineTemp" />').hide().insertBefore($(href)[0]).bind(cbox_load+' '+cbox_cleanup, function(){
                $(this).replaceWith($loaded.children());
            });
            resize($(href));
        } else if (settings.iframe) {
            // IFrame element won't be added to the DOM until it is ready to be displayed,
            // to avoid problems with DOM-ready JS that might be trying to run in that iframe.
            resize(" ");
        } else if (settings.html) {
            resize(settings.html);
        } else if (isImage(href)){
            img = new Image();
            img.onload = function(){
                var percent;
                
                img.onload = null;
                
                img.id = 'cboxPhoto';
                
                $(img).css({margin:'auto', border:'none', display:'block', cssFloat:'left'});
                
                if(settings.scalePhotos){
                    setResize = function(){
                        img.height -= img.height * percent;
                        img.width -= img.width * percent;    
                    };
                    if(settings.mw && img.width > settings.mw){
                        percent = (img.width - settings.mw) / img.width;
                        setResize();
                    }
                    if(settings.mh && img.height > settings.mh){
                        percent = (img.height - settings.mh) / img.height;
                        setResize();
                    }
                }
                
                if (settings.h) {
                    img.style.marginTop = Math.max(settings.h - img.height,0)/2 + 'px';
                }
                
                resize(img);
                
                if($related.length > 1){
                    $(img).css({cursor:'pointer'}).click(cboxPublic.next);
                }
                
                if(isIE){
                    img.style.msInterpolationMode='bicubic';
                }
            };
            img.src = href;
        } else {
            $('<div />').appendTo($loadingBay).load(href, function(data, textStatus){
                if(textStatus === "success"){
                    resize(this);
                } else {
                    resize($("<p>Request unsuccessful.</p>"));
                }
            });
        }
    };
    // Navigates to the next page/image in a set.
    cboxPublic.next = function () {
        if(!active){
            index = index < $related.length-1 ? index+1 : 0;
            cboxPublic.load();
        }
    };
    
    cboxPublic.prev = function () {
        if(!active){
            index = index > 0 ? index-1 : $related.length-1;
            cboxPublic.load();
        }
    };
    cboxPublic.slideshow = function () {
        var stop, timeOut, className = 'cboxSlideshow_';
        
        $slideshow.bind(cbox_closed, function(){
            $slideshow.unbind();
            clearTimeout(timeOut);
            $cbox.removeClass(className+"off"+" "+className+"on");
        });
        
        function start(){
            $slideshow
            .text(settings.slideshowStop)
            .bind(cbox_complete, function(){
                timeOut = setTimeout(cboxPublic.next, settings.slideshowSpeed);
            })
            .bind(cbox_load, function(){
                clearTimeout(timeOut);    
            }).one("click", function(){
                stop();
                $(this).removeClass(hover);
            });
            $cbox.removeClass(className+"off").addClass(className+"on");
        }
        
        stop = function(){
            clearTimeout(timeOut);
            $slideshow
            .text(settings.slideshowStart)
            .unbind(cbox_complete+' '+cbox_load)
            .one("click", function(){
                start();
                timeOut = setTimeout(cboxPublic.next, settings.slideshowSpeed);
                $(this).removeClass(hover);
            });
            $cbox.removeClass(className+"on").addClass(className+"off");
        };
        
        if(settings.slideshow && $related.length>1){
            if(settings.slideshowAuto){
                start();
            } else {
                stop();
            }
        }
    };
    // Note: to use this within an iframe use the following format: parent.$.fn.colorbox.close();
    cboxPublic.close = function () {
        
        $.event.trigger(cbox_cleanup);
        if (settings.onCleanup) {
            settings.onCleanup.call(element);
        }
        
        open = FALSE;
        $(document).unbind("keydown.cbox_close keydown.cbox_arrows");
        $window.unbind(cbox_resize+' resize.cboxie6 scroll.cboxie6');
        $overlay.css({cursor: 'auto'}).fadeOut('fast');
        
        $cbox
        .stop(TRUE, FALSE)
        .fadeOut('fast', function () {
            $('#colorbox iframe').attr('src', 'about:blank');
            $loaded.remove();
            $cbox.css({'opacity': 1});
            
            try{
                bookmark.focus();
            } catch (er){
                // do nothing
            }
            
            $.event.trigger(cbox_closed);
            if (settings.onClosed) {
                settings.onClosed.call(element);
            }
        });
    };
    // A method for fetching the current element ColorBox is referencing.
    // returns a jQuery object.
    cboxPublic.element = function(){ return $(element); };
    cboxPublic.settings = defaults;
    // Initializes ColorBox when the DOM has loaded
    $(cboxPublic.init);
}(jQuery));
 
/* End - 405 - JS jQuery Colorbox rev. 218 *//* Begin - 416 - JS jQuery Gallery View rev. 488 */

/*
**
**    GalleryView - jQuery Content Gallery Plugin
**    Author:         Jack Anderson
**    Version:        2.1 (March 14, 2010)
**    
**    Please use this development script if you intend to make changes to the
**    plugin code.  For production sites, please use jquery.galleryview-2.1-pack.js.
**    
**  See README.txt for instructions on how to markup your HTML
**
**    See CHANGELOG.txt for a review of changes and LICENSE.txt for the applicable
**    licensing information.
**
*/
//Global variable to check if window is already loaded
//Used for calling GalleryView after page has loaded
var window_loaded = false;
            
(function($){
    $.fn.galleryView = function(options) {
        var opts = $.extend($.fn.galleryView.defaults,options);
        
        var id;
        var iterator = 0;        // INT - Currently visible panel/frame
        var item_count = 0;        // INT - Total number of panels/frames
        var slide_method;        // STRING - indicator to slide entire filmstrip or just the pointer ('strip','pointer')
        var theme_path;            // STRING - relative path to theme directory
        var paused = false;        // BOOLEAN - flag to indicate whether automated transitions are active
        
    // Element dimensions
        var gallery_width;
        var gallery_height;
        var pointer_height;
        var pointer_width;
        var strip_width;
        var strip_height;
        var wrapper_width;
        var f_frame_width;
        var f_frame_height;
        var frame_caption_size = 20;
        var gallery_padding;
        var filmstrip_margin;
        var filmstrip_orientation;
        
        
    // Arrays used to scale frames and panels
        var frame_img_scale = {};
        var panel_img_scale = {};
        var img_h = {};
        var img_w = {};
        
    // Flag indicating whether to scale panel images
        var scale_panel_images = true;
        
        var panel_nav_displayed = false;
        
    // Define jQuery objects for reuse
        var j_gallery;
        var j_filmstrip;
        var j_frames;
        var j_frame_img_wrappers;
        var j_panels;
        var j_pointer;
        
        
/*
**    Plugin Functions
*/
    /*
    **    showItem(int)
    **        Transition from current frame to frame i (1-based index)
    */
        function showItem(i) {
            // Disable next/prev buttons until transition is complete
            // This prevents overlapping of animations
            $('.nav-next-overlay',j_gallery).unbind('click');
            $('.nav-prev-overlay',j_gallery).unbind('click');
            $('.nav-next',j_gallery).unbind('click');
            $('.nav-prev',j_gallery).unbind('click');
            j_frames.unbind('click');
            
            if(opts.show_filmstrip) {
                // Fade out all frames
                j_frames.removeClass('current').find('img').stop().animate({
                    'opacity':opts.frame_opacity
                },opts.transition_speed);
                // Fade in target frame
                j_frames.eq(i).addClass('current').find('img').stop().animate({
                    'opacity':0.3
                },opts.transition_speed);
            }
            
            //If necessary, fade out all panels while fading in target panel
            if(opts.show_panels && opts.fade_panels) {
                j_panels.fadeOut(opts.transition_speed).eq(i%item_count).fadeIn(opts.transition_speed,function(){
                    //If no filmstrip exists, re-bind click events to navigation buttons
                    if(!opts.show_filmstrip) {
                        $('.nav-prev-overlay',j_gallery).click(showPrevItem);
                        $('.nav-next-overlay',j_gallery).click(showNextItem);
                        $('.nav-prev',j_gallery).click(showPrevItem);
                        $('.nav-next',j_gallery).click(showNextItem);        
                    }
                });
            }
            
            // If gallery has a filmstrip, handle animation of frames
            if(opts.show_filmstrip) {
                // Slide either pointer or filmstrip, depending on transition method
                if(slide_method=='strip') {
                    // Stop filmstrip if it's currently in motion
                    j_filmstrip.stop();
                    var distance;
                    var diststr;
                    if(filmstrip_orientation=='horizontal') {
                        // Determine distance between pointer (eventual destination) and target frame
                        distance = getPos(j_frames[i]).left - (getPos(j_pointer[0]).left+(pointer_width/2)-(f_frame_width/2));
                        diststr = (distance>=0?'-=':'+=')+Math.abs(distance)+'px';
                        
                        // Animate filmstrip and slide target frame under pointer
                        j_filmstrip.animate({
                            'left':diststr
                        },opts.transition_speed,opts.easing,function(){
                            var old_i = i;
                            // After transition is complete, shift filmstrip so that a sufficient number of frames
                            // remain on either side of the visible filmstrip
                            if(i>item_count) {
                                i = i%item_count;
                                iterator = i;
                                j_filmstrip.css('left','-'+((f_frame_width+opts.frame_gap)*i)+'px');
                            } else if (i<=(item_count-strip_size)) {
                                i = (i%item_count)+item_count;
                                iterator = i;
                                j_filmstrip.css('left','-'+((f_frame_width+opts.frame_gap)*i)+'px');
                            }
                            // If the target frame has changed due to filmstrip shifting,
                            // make sure new target frame has 'current' class and correct size/opacity settings
                            if(old_i != i) {
                                j_frames.eq(old_i).removeClass('current').find('img').css({
                                    'opacity':opts.frame_opacity
                                });
                                j_frames.eq(i).addClass('current').find('img').css({
                                    'opacity':0.3
                                });
                            }
                            // If panels are not set to fade in/out, simply hide all panels and show the target panel
                            if(!opts.fade_panels) {
                                j_panels.hide().eq(i%item_count).show();
                            }
                            
                            // Once animation is complete, re-bind click events to navigation buttons
                            $('.nav-prev-overlay',j_gallery).click(showPrevItem);
                            $('.nav-next-overlay',j_gallery).click(showNextItem);
                            $('.nav-prev',j_gallery).click(showPrevItem);
                            $('.nav-next',j_gallery).click(showNextItem);
                            enableFrameClicking();
                        });
                    } else { // filmstrip_orientation == 'vertical'
                        //Determine distance between pointer (eventual destination) and target frame
                        distance = getPos(j_frames[i]).top - (getPos(j_pointer[0]).top+(pointer_height)-(f_frame_height/2));
                        diststr = (distance>=0?'-=':'+=')+Math.abs(distance)+'px';
                        
                        // Animate filmstrip and slide target frame under pointer
                        j_filmstrip.animate({
                            'top':diststr
                        },opts.transition_speed,opts.easing,function(){
                            // After transition is complete, shift filmstrip so that a sufficient number of frames
                            // remain on either side of the visible filmstrip
                            var old_i = i;
                            if(i>item_count) {
                                i = i%item_count;
                                iterator = i;
                                j_filmstrip.css('top','-'+((f_frame_height+opts.frame_gap)*i)+'px');
                            } else if (i<=(item_count-strip_size)) {
                                i = (i%item_count)+item_count;
                                iterator = i;
                                j_filmstrip.css('top','-'+((f_frame_height+opts.frame_gap)*i)+'px');
                            }
                            //If the target frame has changed due to filmstrip shifting,
                            //Make sure new target frame has 'current' class and correct size/opacity settings
                            if(old_i != i) {
                                j_frames.eq(old_i).removeClass('current').find('img').css({
                                    'opacity':opts.frame_opacity
                                });
                                j_frames.eq(i).addClass('current').find('img').css({
                                    'opacity':0.3
                                });
                            }
                            // If panels are not set to fade in/out, simply hide all panels and show the target panel
                            if(!opts.fade_panels) {
                                j_panels.hide().eq(i%item_count).show();
                            }
                            
                            // Once animation is complete, re-bind click events to navigation buttons
                            $('.nav-prev-overlay',j_gallery).click(showPrevItem);
                            $('.nav-next-overlay',j_gallery).click(showNextItem);
                            $('.nav-prev',j_gallery).click(showPrevItem);
                            $('.nav-next',j_gallery).click(showNextItem);
                            enableFrameClicking();
                        });
                    }
                } else if(slide_method=='pointer') {
                    // Stop pointer if it's currently in motion
                    j_pointer.stop();
                    // Get screen position of target frame
                    var pos = getPos(j_frames[i]);
                    
                    if(filmstrip_orientation=='horizontal') {
                        // Slide the pointer over the target frame
                        j_pointer.animate({
                            'left':(pos.left+(f_frame_width/2)-(pointer_width/2)+'px')
                        },opts.transition_speed,opts.easing,function(){    
                            if(!opts.fade_panels) {
                                j_panels.hide().eq(i%item_count).show();
                            }    
                            $('.nav-prev-overlay',j_gallery).click(showPrevItem);
                            $('.nav-next-overlay',j_gallery).click(showNextItem);
                            $('.nav-prev',j_gallery).click(showPrevItem);
                            $('.nav-next',j_gallery).click(showNextItem);
                            enableFrameClicking();
                        });
                    } else {
                        // Slide the pointer over the target frame
                        j_pointer.animate({
                            'top':(pos.top+(f_frame_height/2)-(pointer_height)+'px')
                        },opts.transition_speed,opts.easing,function(){    
                            if(!opts.fade_panels) {
                                j_panels.hide().eq(i%item_count).show();
                            }    
                            $('.nav-prev-overlay',j_gallery).click(showPrevItem);
                            $('.nav-next-overlay',j_gallery).click(showNextItem);
                            $('.nav-prev',j_gallery).click(showPrevItem);
                            $('.nav-next',j_gallery).click(showNextItem);
                            enableFrameClicking();
                        });
                    }
                }
            
            }
        };
        
    /*
    **    extraWidth(jQuery element)
    **        Return the combined width of the border and padding to the elements left and right.
    **        If the border is non-numerical, assume zero (not ideal, will fix later)
    **        RETURNS - int
    */
        function extraWidth(el) {
            if(!el) { return 0; }
            if(el.length==0) { return 0; }
            el = el.eq(0);
            var ew = 0;
            ew += getInt(el.css('paddingLeft'));
            ew += getInt(el.css('paddingRight'));
            ew += getInt(el.css('borderLeftWidth'));
            ew += getInt(el.css('borderRightWidth'));
            return ew;
        };
        
    /*
    **    extraHeight(jQuery element)
    **        Return the combined height of the border and padding above and below the element
    **        If the border is non-numerical, assume zero (not ideal, will fix later)
    **        RETURN - int
    */
        function extraHeight(el) {
            if(!el) { return 0; }
            if(el.length==0) { return 0; }
            el = el.eq(0);
            var eh = 0;
            eh += getInt(el.css('paddingTop'));
            eh += getInt(el.css('paddingBottom'));
            eh += getInt(el.css('borderTopWidth'));
            eh += getInt(el.css('borderBottomWidth'));
            return eh;
        };
    
    /*
    **    showNextItem()
    **        Transition from current frame to next frame
    */
        function showNextItem() {
            
            // Cancel any transition timers until we have completed this function
            $(document).stopTime("transition");
            if(++iterator==j_frames.length) {iterator=0;}
            // We've already written the code to transition to an arbitrary panel/frame, so use it
            showItem(iterator);
            // If automated transitions haven't been cancelled by an option or paused on hover, re-enable them
            if(!paused) {
                $(document).everyTime(opts.transition_interval,"transition",function(){
                    showNextItem();
                });
            }
        };
        
    /*
    **    showPrevItem()
    **        Transition from current frame to previous frame
    */
        function showPrevItem() {
            // Cancel any transition timers until we have completed this function
            $(document).stopTime("transition");
            if(--iterator<0) {iterator = item_count-1;}
            // We've already written the code to transition to an arbitrary panel/frame, so use it
            showItem(iterator);
            // If automated transitions haven't been cancelled by an option or paused on hover, re-enable them
            if(!paused) {
                $(document).everyTime(opts.transition_interval,"transition",function(){
                    showNextItem();
                });
            }
        };
        
    /*
    **    getPos(jQuery element
    **        Calculate position of an element relative to top/left corner of gallery
    **        If the gallery bounding box itself is passed to the function, calculate position of gallery relative to top/left corner of browser window
    **         RETURNS - JSON {left: int, top: int}
    */
        function getPos(el) {
            var left = 0, top = 0;
            var el_id = el.id;
            if(el.offsetParent) {
                do {
                    left += el.offsetLeft;
                    top += el.offsetTop;
                } while(el = el.offsetParent);
            }
            //If we want the position of the gallery itself, return it
            if(el_id == id) {return {'left':left,'top':top};}
            //Otherwise, get position of element relative to gallery
            else {
                var gPos = getPos(j_gallery[0]);
                var gLeft = gPos.left;
                var gTop = gPos.top;
                
                return {'left':left-gLeft,'top':top-gTop};
            }
        };
    
    /*
    **    enableFrameClicking()
    **        Add an onclick event handler to each frame
    **        Exception: if a frame has an anchor tag, do not add an onlick handler
    */
        function enableFrameClicking() {
            j_frames.each(function(i){
                if($('a',this).length==0) {
                    $(this).click(function(){
                        // Prevent transitioning to the current frame (unnecessary)
                        if(iterator!=i) {
                            $(document).stopTime("transition");
                            showItem(i);
                            iterator = i;
                            if(!paused) {
                                $(document).everyTime(opts.transition_interval,"transition",function(){
                                    showNextItem();
                                });
                            }
                        }
                    });
                }
            });
        };
    
    /*
    **    buildPanels()
    **        Construct gallery panels from <div class="panel"> elements
    **        NOTE - These DIVs are generated automatically from the content of the UL passed to the plugin
    */
        function buildPanels() {
            // If panel overlay content exists, add the necessary overlay background DIV
            // The overlay content and background are separate elements so the background's opacity isn't inherited by the content
            j_panels.each(function(i){
                   if($('.panel-overlay',this).length>0) {
                    $(this).append('<div class="overlay-background"></div>');    
                }
               });
            // If there is no filmstrip in this gallery, add navigation buttons to the panel itself
            if(!opts.show_filmstrip) {
                $('<img />').addClass('nav-next').attr('src',theme_path+opts.nav_theme+'/next.gif').appendTo(j_gallery).css({
                    'position':'absolute',
                    'zIndex':'1100',
                    'cursor':'pointer',
                    'top':((opts.panel_height-22)/2)+gallery_padding+'px',
                    'right':'10px',
                    'display':'none'
                }).click(showNextItem);
                $('<img />').addClass('nav-prev').attr('src',theme_path+opts.nav_theme+'/prev.gif').appendTo(j_gallery).css({
                    'position':'absolute',
                    'zIndex':'1100',
                    'cursor':'pointer',
                    'top':((opts.panel_height-22)/2)+gallery_padding+'px',
                    'left':'10px',
                    'display':'none'
                }).click(showPrevItem);
                
                $('<img />').addClass('nav-next-overlay').attr('src',theme_path+opts.nav_theme+'/panel-nav-next.gif').appendTo(j_gallery).css({
                    'position':'absolute',
                    'zIndex':'1099',
                    'top':((opts.panel_height-22)/2)+gallery_padding-10+'px',
                    'right':'0',
                    'display':'none',
                    'cursor':'pointer',
                    'opacity':0.75
                }).click(showNextItem);
                
                $('<img />').addClass('nav-prev-overlay').attr('src',theme_path+opts.nav_theme+'/panel-nav-prev.gif').appendTo(j_gallery).css({
                    'position':'absolute',
                    'zIndex':'1099',
                    'top':((opts.panel_height-22)/2)+gallery_padding-10+'px',
                    'left':'0',
                    'display':'none',
                    'cursor':'pointer',
                    'opacity':0.75
                }).click(showPrevItem);
            }
            // Set the height and width of each panel, and position it appropriately within the gallery
            j_panels.each(function(i){
                $(this).css({
                    'width':(opts.panel_width-extraWidth(j_panels))+'px',
                    'height':(opts.panel_height-extraHeight(j_panels))+'px',
                    'position':'absolute',
                    'overflow':'hidden',
                    'display':'none'
                });
                switch(opts.filmstrip_position) {
                    case 'top': $(this).css({
                                    'top':strip_height+Math.max(gallery_padding,filmstrip_margin)+'px',
                                    'left':gallery_padding+'px'
                                }); break;
                    case 'left': $(this).css({
                                     'top':gallery_padding+'px',
                                    'left':strip_width+Math.max(gallery_padding,filmstrip_margin)+'px'
                                 }); break;
                    default: $(this).css({'top':gallery_padding+'px','left':gallery_padding+'px'}); break;
                }
            });
            // Position each panel overlay within panel
            $('.panel-overlay',j_panels).css({
                'position':'absolute',
                'zIndex':'999',
                'width':(opts.panel_width-extraWidth($('.panel-overlay',j_panels)))+'px',
                'left':'0'
            });
            $('.overlay-background',j_panels).css({
                'position':'absolute',
                'zIndex':'998',
                'width':opts.panel_width+'px',
                'left':'0',
                'opacity':opts.overlay_opacity
            });
            if(opts.overlay_position=='top') {
                $('.panel-overlay',j_panels).css('top',0);
                $('.overlay-background',j_panels).css('top',0);
            } else {
                $('.panel-overlay',j_panels).css('bottom',0);
                $('.overlay-background',j_panels).css('bottom',0);
            }
            
            $('.panel iframe',j_panels).css({
                'width':opts.panel_width+'px',
                'height':opts.panel_height+'px',
                'border':'0'
            });
            
            // If panel images have to be scaled to fit within frame, do so and position them accordingly
            if(scale_panel_images) {
                $('img',j_panels).each(function(i){
                    $(this).css({
                        'height':panel_img_scale[i%item_count]*img_h[i%item_count],
                        'width':panel_img_scale[i%item_count]*img_w[i%item_count],
                        'position':'relative',
                        'top':(opts.panel_height-(panel_img_scale[i%item_count]*img_h[i%item_count]))/2+'px',
                        'left':(opts.panel_width-(panel_img_scale[i%item_count]*img_w[i%item_count]))/2+'px'
                    });
                });
            }
        };
    
    /*
    **    buildFilmstrip()
    **        Construct filmstrip from <ul class="filmstrip"> element
    **        NOTE - 'filmstrip' class is automatically added to UL passed to plugin
    */
        function buildFilmstrip() {
            // Add wrapper to filmstrip to hide extra frames
            j_filmstrip.wrap('<div class="strip_wrapper"></div>');
            if(slide_method=='strip') {
                j_frames.clone().appendTo(j_filmstrip);
                j_frames.clone().appendTo(j_filmstrip);
                j_frames = $('li',j_filmstrip);
            }
            // If captions are enabled, add caption DIV to each frame and fill with the image titles
            if(opts.show_captions) {
                j_frames.append('<div class="caption"></div>').each(function(i){
                    $(this).find('.caption').html($(this).find('img').attr('title'));    
                    //$(this).find('.caption').html(i);        
                });
            }
            // Position the filmstrip within the gallery
            j_filmstrip.css({
                'listStyle':'none',
                'margin':'0',
                'padding':'0',
                'width':strip_width+'px',
                'position':'absolute',
                'zIndex':'900',
                'top':(filmstrip_orientation=='vertical' && slide_method=='strip'?-((f_frame_height+opts.frame_gap)*iterator):0)+'px',
                'left':(filmstrip_orientation=='horizontal' && slide_method=='strip'?-((f_frame_width+opts.frame_gap)*iterator):0)+'px',
                'height':strip_height+'px'
            });
            j_frames.css({
                'float':'left',
                'position':'relative',
                'height':f_frame_height+(opts.show_captions?frame_caption_size:0)+'px',
                'width':f_frame_width+'px',
                'zIndex':'901',
                'padding':'0',
                'cursor':'pointer'
            });
            // Set frame margins based on user options and position of filmstrip within gallery
            switch(opts.filmstrip_position) {
                case 'top': j_frames.css({
                                'marginBottom':filmstrip_margin+'px',
                                'marginRight':opts.frame_gap+'px'
                            }); break;
                case 'bottom': j_frames.css({
                                'marginTop':filmstrip_margin+'px',
                                'marginRight':opts.frame_gap+'px'
                            }); break;
                case 'left': j_frames.css({
                                'marginRight':filmstrip_margin+'px',
                                'marginBottom':opts.frame_gap+'px'
                            }); break;
                case 'right': j_frames.css({
                                'marginLeft':filmstrip_margin+'px',
                                'marginBottom':opts.frame_gap+'px'
                            }); break;
            }
            // Apply styling to individual image wrappers. These will eventually hide overflow in the case of cropped filmstrip images
            $('div.img_wrap',j_frames).each(function(i){
                
                /*var myIndex = i%item_count;
                
                var height1 = img_h[myIndex] * frame_img_scale[myIndex];
                
                var height = Math.min(opts.frame_height, height1);
                var width = Math.min(opts.frame_width,img_w[i%item_count]*frame_img_scale[i%item_count]);
                var top = (opts.show_captions && opts.filmstrip_position=='top'?frame_caption_size:0)+Math.max(0,(opts.frame_height-(frame_img_scale[i%item_count]*img_h[i%item_count]))/2);
                var left = Math.max(0,(opts.frame_width-(frame_img_scale[i%item_count]*img_w[i%item_count]))/2);*/
                
                /*$(this).css({
                    'height':Math.min(opts.frame_height,img_h[i%item_count]*frame_img_scale[i%item_count])+'px',
                    'width':Math.min(opts.frame_width,img_w[i%item_count]*frame_img_scale[i%item_count])+'px',
                    'position':'relative',
                    'top':(opts.show_captions && opts.filmstrip_position=='top'?frame_caption_size:0)+Math.max(0,(opts.frame_height-(frame_img_scale[i%item_count]*img_h[i%item_count]))/2)+'px',
                    'left':Math.max(0,(opts.frame_width-(frame_img_scale[i%item_count]*img_w[i%item_count]))/2)+'px',
                    'overflow':'hidden'
                });*/
                
                $(this).css({
                'height':Math.min(opts.frame_height,img_h[i%item_count]*frame_img_scale[i%item_count])+'px',
                'width':Math.min(opts.frame_width,img_w[i%item_count]*frame_img_scale[i%item_count])+'px',
                'position':'relative',
                'top':(opts.show_captions && opts.filmstrip_position=='top'?frame_caption_size:0)+Math.max(0,(opts.frame_height-(frame_img_scale[i%item_count]*img_h[i%item_count]))/2)+'px',
                'left':Math.max(0,(opts.frame_width-(frame_img_scale[i%item_count]*img_w[i%item_count]))/2)+'px',
                'overflow':'hidden'
                });
                
                
                
            });
            
            // Scale each filmstrip image if necessary and position it within the image wrapper
            $('div.img_wrap img',j_frames).each(function(i){
                
                $(this).css({
                    'opacity':opts.frame_opacity,
                    'height':img_h[i%item_count]*frame_img_scale[i%item_count]+'px',
                    'width':img_w[i%item_count]*frame_img_scale[i%item_count]+'px',
                    'position':'relative',
                    'top':Math.min(0,(opts.frame_height-(frame_img_scale[i%item_count]*img_h[i%item_count]))/2)+'px',
                    'left':Math.min(0,(opts.frame_width-(frame_img_scale[i%item_count]*img_w[i%item_count]))/2)+'px'
    
                }).mouseover(function(){
                    $(this).stop().animate({'opacity':0.3},300);
                }).mouseout(function(){
                    //Don't fade out current frame on mouseout
                    if(!$(this).parent().parent().hasClass('current')) { $(this).stop().animate({'opacity':opts.frame_opacity},300); }
                });
            
                
            });
            // Set overflow of filmstrip wrapper to hidden so as to hide frames that don't fit within the gallery
            $('.strip_wrapper',j_gallery).css({
                'position':'absolute',
                'overflow':'hidden'
            });
            // Position filmstrip within gallery based on user options
            if(filmstrip_orientation=='horizontal') {
                $('.strip_wrapper',j_gallery).css({
                    'top':(opts.filmstrip_position=='top'?Math.max(gallery_padding,filmstrip_margin)+'px':opts.panel_height+gallery_padding+'px'),
                    'left':((gallery_width-wrapper_width)/2)+gallery_padding+'px',
                    'width':wrapper_width+'px',
                    'height':strip_height+'px'
                });
            } else {
                $('.strip_wrapper',j_gallery).css({
                    'left':(opts.filmstrip_position=='left'?Math.max(gallery_padding,filmstrip_margin)+'px':opts.panel_width+gallery_padding+'px'),
                    'top':Math.max(gallery_padding,opts.frame_gap)+'px',
                    'width':strip_width+'px',
                    'height':wrapper_height+'px'
                });
            }
            // Style frame captions
            $('.caption',j_gallery).css({
                'position':'absolute',
                'top':(opts.filmstrip_position=='bottom'?f_frame_height:0)+'px',
                'left':'0',
                'margin':'0',
                'width':f_frame_width+'px',
                'padding':'0',
                'height':frame_caption_size+'px',
                'overflow':'hidden',
                'lineHeight':frame_caption_size+'px'
            });
            // Create pointer for current frame
            var pointer = $('<div></div>');
            pointer.addClass('pointer').appendTo(j_gallery).css({
                 'position':'absolute',
                 'zIndex':'1000',
                 'width':'0px',
                 'fontSize':'0px',
                 'lineHeight':'0%',
                 'borderTopWidth':pointer_height+'px',
                 'borderRightWidth':(pointer_width/2)+'px',
                 'borderBottomWidth':pointer_height+'px',
                 'borderLeftWidth':(pointer_width/2)+'px',
                 'borderStyle':'solid'
            });
            
            // For IE6, use predefined color string in place of transparent (IE6 bug fix, see stylesheet)
            var transColor = $.browser.msie && $.browser.version.substr(0,1)=='6' ? 'pink' : 'transparent';
            
            // If there are no panels, make pointer transparent (nothing to point to)
            // This is not the optimal solution, but we need the pointer to exist as a reference for transition animations
            if(!opts.show_panels) { pointer.css('borderColor',transColor); }
        
                switch(opts.filmstrip_position) {
                    case 'top': pointer.css({
                                    'bottom':(opts.panel_height-(pointer_height*2)+gallery_padding+filmstrip_margin)+'px',
                                     'left':((gallery_width-wrapper_width)/2)+(slide_method=='strip'?0:((f_frame_width+opts.frame_gap)*iterator))+((f_frame_width/2)-(pointer_width/2))+gallery_padding+'px',
                                    'borderBottomColor':transColor,
                                    'borderRightColor':transColor,
                                    'borderLeftColor':transColor
                                }); break;
                    case 'bottom': pointer.css({
                                        'top':(opts.panel_height-(pointer_height*2)+gallery_padding+filmstrip_margin)+'px',
                                         'left':((gallery_width-wrapper_width)/2)+(slide_method=='strip'?0:((f_frame_width+opts.frame_gap)*iterator))+((f_frame_width/2)-(pointer_width/2))+gallery_padding+'px',
                                        'borderTopColor':transColor,
                                        'borderRightColor':transColor,
                                        'borderLeftColor':transColor
                                    }); break;
                    case 'left': pointer.css({
                                    'right':(opts.panel_width-pointer_width+gallery_padding+filmstrip_margin)+'px',
                                     'top':(f_frame_height/2)-(pointer_height)+(slide_method=='strip'?0:((f_frame_height+opts.frame_gap)*iterator))+gallery_padding+'px',
                                    'borderBottomColor':transColor,
                                    'borderRightColor':transColor,
                                    'borderTopColor':transColor
                                }); break;
                    case 'right': pointer.css({
                                    'left':(opts.panel_width-pointer_width+gallery_padding+filmstrip_margin)+'px',
                                     'top':(f_frame_height/2)-(pointer_height)+(slide_method=='strip'?0:((f_frame_height+opts.frame_gap)*iterator))+gallery_padding+'px',
                                    'borderBottomColor':transColor,
                                    'borderLeftColor':transColor,
                                    'borderTopColor':transColor
                                }); break;
                }
        
            j_pointer = $('.pointer',j_gallery);
            
            // Add navigation buttons
            var navNext = $('<img />');
            navNext.addClass('nav-next').appendTo(j_gallery).css({
                'position':'absolute',
                'cursor':'pointer'
            }).click(showNextItem);
            var navPrev = $('<img />');
            navPrev.addClass('nav-prev').appendTo(j_gallery).css({
                'position':'absolute',
                'cursor':'pointer'
            }).click(showPrevItem);
            if(filmstrip_orientation=='horizontal') {
                navNext.css({                     
                    'top':(opts.filmstrip_position=='top'?Math.max(gallery_padding,filmstrip_margin):opts.panel_height+filmstrip_margin+gallery_padding)+((f_frame_height-100)/2)+'px',
                    'right':((gallery_width+(gallery_padding*2))/2)-(wrapper_width/2)-opts.frame_gap-22+'px'
                });
                navPrev.css({
                    'top':(opts.filmstrip_position=='top'?Math.max(gallery_padding,filmstrip_margin):opts.panel_height+filmstrip_margin+gallery_padding)+((f_frame_height-100)/2)+'px',
                    'left':((gallery_width+(gallery_padding*2))/2)-(wrapper_width/2)-opts.frame_gap-22+'px'
                 });
            } else {
                navNext.css({                     
                    'left':(opts.filmstrip_position=='left'?Math.max(gallery_padding,filmstrip_margin):opts.panel_width+filmstrip_margin+gallery_padding)+((f_frame_width-22)/2)+13+'px',
                    'top':wrapper_height+(Math.max(gallery_padding,opts.frame_gap)*2)+'px'
                });
                navPrev.css({
                    'left':(opts.filmstrip_position=='left'?Math.max(gallery_padding,filmstrip_margin):opts.panel_width+filmstrip_margin+gallery_padding)+((f_frame_width-22)/2)-13+'px',
                    'top':wrapper_height+(Math.max(gallery_padding,opts.frame_gap)*2)+'px'
                });
            }
        };
    
    /*
    **    mouseIsOverGallery(int,int)
    **        Check to see if mouse coordinates lie within borders of gallery
    **        This is a more reliable method than using the mouseover event
    **        RETURN - boolean
    */
        function mouseIsOverGallery(x,y) {        
            var pos = getPos(j_gallery[0]);
            var top = pos.top;
            var left = pos.left;
            return x > left && x < left+gallery_width+(filmstrip_orientation=='horizontal'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin)) && y > top && y < top+gallery_height+(filmstrip_orientation=='vertical'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin));                
        };
    
    /*
    **    getInt(string)
    **        Parse a string to obtain the integer value contained
    **        If the string contains no number, return zero
    **        RETURN - int
    */
        function getInt(i) {
            i = parseInt(i,10);
            if(isNaN(i)) { i = 0; }
            return i;    
        };
    
    /*
    **    buildGallery()
    **        Construct HTML and CSS for the gallery, based on user options
    */
        function buildGallery() {
            var gallery_images = opts.show_filmstrip?$('div.img_wrap img',j_frames):$('img',j_panels);
            // For each image in the gallery, add its original dimensions and scaled dimensions to the appropriate arrays for later reference
            gallery_images.each(function(i){
                    
                this.height==0?img_h[i]=opts.frame_height:img_h[i]=this.height;
                this.width==0?img_w[i]=opts.frame_width:img_w[i]=this.width;
    
                if(opts.frame_scale=='nocrop') {
                    frame_img_scale[i] = Math.min(opts.frame_height/img_h[i],opts.frame_width/img_w[i]);
                } else {
                    frame_img_scale[i] = Math.max(opts.frame_height/img_h[i],opts.frame_width/img_w[i]);
                }
                
                if(opts.panel_scale=='nocrop') {
                    panel_img_scale[i] = Math.min(opts.panel_height/img_h[i],opts.panel_width/img_w[i]);
                } else {
                    panel_img_scale[i] = Math.max(opts.panel_height/img_h[i],opts.panel_width/img_w[i]);
                }
            });
            
            // Size gallery based on position of filmstrip
            j_gallery.css({
                'position':'relative',
                'width':gallery_width+(filmstrip_orientation=='horizontal'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin))+'px',
                'height':gallery_height+(filmstrip_orientation=='vertical'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin))+'px'
            });
            
            // Build filmstrip if necessary
            if(opts.show_filmstrip) {
                buildFilmstrip();
                enableFrameClicking();
            }
            // Build panels if necessary
            if(opts.show_panels) {
                buildPanels();
            }
            
            // If user opts to pause on hover, or no filmstrip exists, add some mouseover functionality
            if(opts.pause_on_hover || (opts.show_panels && !opts.show_filmstrip)) {
                $(document).mousemove(function(e){
                    if(mouseIsOverGallery(e.pageX,e.pageY)) {
                        // If the user opts to pause on hover, kill automated transitions
                        if(opts.pause_on_hover) {
                            if(!paused) {
                                // Pause slideshow in 500ms
                                $(document).oneTime(500,"animation_pause",function(){
                                    $(document).stopTime("transition");
                                    paused=true;
                                });
                            }
                        }
                        // Display panel navigation on mouseover
                        if(opts.show_panels && !opts.show_filmstrip && !panel_nav_displayed) {
                            $('.nav-next-overlay').fadeIn('fast');
                            $('.nav-prev-overlay').fadeIn('fast');
                            $('.nav-next',j_gallery).fadeIn('fast');
                            $('.nav-prev',j_gallery).fadeIn('fast');
                            panel_nav_displayed = true;
                        }
                    } else {
                        // If the mouse leaves the gallery, stop the pause timer and restart automated transitions
                        if(opts.pause_on_hover) {
                            $(document).stopTime("animation_pause");
                            if(paused) {
                                $(document).everyTime(opts.transition_interval,"transition",function(){
                                    showNextItem();
                                });
                                paused = false;
                            }
                        }
                        // Hide panel navigation
                        if(opts.show_panels && !opts.show_filmstrip && panel_nav_displayed) {
                            $('.nav-next-overlay').fadeOut('fast');
                            $('.nav-prev-overlay').fadeOut('fast');
                            $('.nav-next',j_gallery).fadeOut('fast');
                            $('.nav-prev',j_gallery).fadeOut('fast');
                            panel_nav_displayed = false;
                        }
                    }
                });
            }
            
            // Hide loading box and display gallery
            j_filmstrip.css('visibility','visible');
            j_gallery.css('visibility','visible');
            $('.loader',j_gallery).fadeOut('1000',function(){
                // Show the 'first' panel (set by opts.start_frame)
                //showItem(iterator);
                //alert(opts.start_frame-1);
                showItem(iterator);
                // If we have more than one item, begin automated transitions
                if(item_count > 1) {
                    $(document).everyTime(opts.transition_interval,"transition",function(){
                        showNextItem();
                    });
                }    
            });    
        };
        
    /*
    **    MAIN PLUGIN CODE
    */
        return this.each(function() {
            //Hide the unstyled UL until we've created the gallery
            $(this).css('visibility','hidden');
            
            // Wrap UL in DIV and transfer ID to container DIV
            $(this).wrap("<div></div>");
            j_gallery = $(this).parent();
            j_gallery.css('visibility','hidden').attr('id',$(this).attr('id')).addClass('gallery');
            
            // Assign filmstrip class to UL
            $(this).removeAttr('id').addClass('filmstrip');
            
            // If the transition or pause timers exist for any reason, stop them now.
            $(document).stopTime("transition");
            $(document).stopTime("animation_pause");
            
            // Save the id of the UL passed to the plugin
            id = j_gallery.attr('id');
            
            // If the UL does not contain any <div class="panel-content"> elements, we will scale the UL images to fill the panels
            scale_panel_images = $('.panel-content',j_gallery).length==0;
            
            // Define dimensions of pointer <div>
            pointer_height = opts.pointer_size;
            pointer_width = opts.pointer_size*2;
            
            // Determine filmstrip orientation (vertical or horizontal)
            // Do not show captions on vertical filmstrips (override user set option)
            filmstrip_orientation = (opts.filmstrip_position=='top'||opts.filmstrip_position=='bottom'?'horizontal':'vertical');
            if(filmstrip_orientation=='vertical') { opts.show_captions = false; }
            
            // Determine path between current page and plugin images
            // Scan script tags and look for path to GalleryView plugin
            $('script').each(function(i){
                var s = $(this);
                if(s.attr('src') && s.attr('src').match(/jquery\.galleryview/)){
                    loader_path = s.attr('src').split('jquery.galleryview')[0];
                    theme_path = s.attr('src').split('jquery.galleryview')[0]+'themes/';    
                }
            });
            
            // Assign elements to variables to minimize calls to jQuery
            j_filmstrip = $('.filmstrip',j_gallery);
            j_frames = $('li',j_filmstrip);
            j_frames.addClass('frame');
            
            // If the user wants panels, generate them using the filmstrip images
            if(opts.show_panels) {
                for(i=j_frames.length-1;i>=0;i--) {
                    if(j_frames.eq(i).find('.panel-content').length>0) {
                        j_frames.eq(i).find('.panel-content').remove().prependTo(j_gallery).addClass('panel');
                    } else {
                        p = $('<div>');
                        p.addClass('panel');
                        im = $('<img />');
                        im.attr('src',j_frames.eq(i).find('img').eq(0).attr('src')).appendTo(p);
                        p.prependTo(j_gallery);
                        j_frames.eq(i).find('.panel-overlay').remove().appendTo(p);
                    }
                }
            } else { 
                $('.panel-overlay',j_frames).remove(); 
                $('.panel-content',j_frames).remove();
            }
            
            // If the user doesn't want a filmstrip, delete it
            if(!opts.show_filmstrip) { j_filmstrip.remove(); }
            else {
                // Wrap the frame images (and links, if applicable) in container divs
                // These divs will handle cropping and zooming of the images
                j_frames.each(function(i){
                    if($(this).find('a').length>0) {
                        $(this).find('a').wrap('<div class="img_wrap"></div>');
                    } else {
                        $(this).find('img').wrap('<div class="img_wrap"></div>');    
                    }
                });
                j_frame_img_wrappers = $('.img_wrap',j_frames);
            }
            
            j_panels = $('.panel',j_gallery);
            
            if(!opts.show_panels) {
                opts.panel_height = 0;
                opts.panel_width = 0;
            }
            
            
            // Determine final frame dimensions, accounting for user-added padding and border
            f_frame_width = opts.frame_width+extraWidth(j_frame_img_wrappers);
            f_frame_height = opts.frame_height+extraHeight(j_frame_img_wrappers);
            
            // Number of frames in filmstrip
            item_count = opts.show_panels?j_panels.length:j_frames.length;
            
            // Number of frames that can display within the gallery block
            // 64 = width of block for navigation button * 2 + 20
            if(filmstrip_orientation=='horizontal') {
                strip_size = opts.show_panels?Math.floor((opts.panel_width-((opts.frame_gap+22)*2))/(f_frame_width+opts.frame_gap)):Math.min(item_count,opts.filmstrip_size); 
            } else {
                strip_size = opts.show_panels?Math.floor((opts.panel_height-(opts.frame_gap+22))/(f_frame_height+opts.frame_gap)):Math.min(item_count,opts.filmstrip_size);
            }
            
            // Determine animation method for filmstrip
            // If more items than strip size, slide filmstrip
            // Otherwise, slide pointer
            if(strip_size >= item_count) {
                slide_method = 'pointer';
                strip_size = item_count;
            }
            else {slide_method = 'strip';}
            
            iterator = (strip_size<item_count?item_count:0);
            
            //iterator = opts.start_frame-1;
            
            
            
            // Determine dimensions of various gallery elements
            filmstrip_margin = (opts.show_panels?getInt(j_filmstrip.css('marginTop')):0);
            j_filmstrip.css('margin','0px');
            
            if(filmstrip_orientation=='horizontal') {
                // Width of gallery block
                gallery_width = opts.show_panels?opts.panel_width:(strip_size*(f_frame_width+opts.frame_gap))+44+opts.frame_gap;
                
                // Height of gallery block = screen + filmstrip + captions (optional)
                gallery_height = (opts.show_panels?opts.panel_height:0)+(opts.show_filmstrip?f_frame_height+filmstrip_margin+(opts.show_captions?frame_caption_size:0):0);
            } else {
                // Width of gallery block
                gallery_height = opts.show_panels?opts.panel_height:(strip_size*(f_frame_height+opts.frame_gap))+22;
                
                // Height of gallery block = screen + filmstrip + captions (optional)
                gallery_width = (opts.show_panels?opts.panel_width:0)+(opts.show_filmstrip?f_frame_width+filmstrip_margin:0);
            }
            
            // Width of filmstrip
            if(filmstrip_orientation=='horizontal') {
                if(slide_method == 'pointer') {strip_width = (f_frame_width*item_count)+(opts.frame_gap*(item_count));}
                else {strip_width = (f_frame_width*item_count*3)+(opts.frame_gap*(item_count*3));}
            } else {
                strip_width = (f_frame_width+filmstrip_margin);
            }
            if(filmstrip_orientation=='horizontal') {
                strip_height = (f_frame_height+filmstrip_margin+(opts.show_captions?frame_caption_size:0));    
            } else {
                if(slide_method == 'pointer') {strip_height = (f_frame_height*item_count+opts.frame_gap*(item_count));}
                else {strip_height = (f_frame_height*item_count*3)+(opts.frame_gap*(item_count*3));}
            }
            
            // Width of filmstrip wrapper (to hide overflow)
            wrapper_width = ((strip_size*f_frame_width)+((strip_size-1)*opts.frame_gap));
            wrapper_height = ((strip_size*f_frame_height)+((strip_size-1)*opts.frame_gap));
            
            gallery_padding = getInt(j_gallery.css('paddingTop'));
            j_gallery.css('padding','0px');
            // Place loading box over gallery until page loads
            galleryPos = getPos(j_gallery[0]);
            $('<div>').addClass('loader').css({
                'position':'absolute',
                'zIndex':'32666',
                'opacity':1,
                'top':'0px',
                'left':'0px',
                'width':gallery_width+(filmstrip_orientation=='horizontal'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin))+'px',
                'height':gallery_height+(filmstrip_orientation=='vertical'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin))+'px'
            }).appendTo(j_gallery);
                    
            // Don't call the buildGallery function until the window is loaded
            // NOTE - lazy way of waiting until all images are loaded, may find a better solution for future versions
            if(!window_loaded) {
                $(window).load(function(){
                    window_loaded = true;
                    buildGallery();
                });
            } else {
                buildGallery();
            }
                    
        });
    };
    
/*
**    GalleryView options and default values
*/
    $.fn.galleryView.defaults = {
        
        show_panels: true,                    //BOOLEAN - flag to show or hide panel portion of gallery
        show_filmstrip: true,                //BOOLEAN - flag to show or hide filmstrip portion of gallery
        
        panel_width: 600,                    //INT - width of gallery panel (in pixels)
        panel_height: 400,                    //INT - height of gallery panel (in pixels)
        frame_width: 60,                    //INT - width of filmstrip frames (in pixels)
        frame_height: 40,                    //INT - width of filmstrip frames (in pixels)
        
        start_frame: 1,                        //INT - index of panel/frame to show first when gallery loads
        filmstrip_size: 3,                    
        transition_speed: 800,                //INT - duration of panel/frame transition (in milliseconds)
        transition_interval: 4000,            //INT - delay between panel/frame transitions (in milliseconds)
        
        overlay_opacity: 0.7,                //FLOAT - transparency for panel overlay (1.0 = opaque, 0.0 = transparent)
        frame_opacity: 1,                    //FLOAT - transparency of non-active frames (1.0 = opaque, 0.0 = transparent)
        
        pointer_size: 8,                    //INT - Height of frame pointer (in pixels)
        
        nav_theme: 'dark',                    //STRING - name of navigation theme to use (folder must exist within 'themes' directory)
        easing: 'swing',                    //STRING - easing method to use for animations (jQuery provides 'swing' or 'linear', more available with jQuery UI or Easing plugin)
        
        filmstrip_position: 'bottom',        //STRING - position of filmstrip within gallery (bottom, top, left, right)
        overlay_position: 'bottom',            //STRING - position of panel overlay (bottom, top, left, right)
        
        panel_scale: 'nocrop',                //STRING - cropping option for panel images (crop = scale image and fit to aspect ratio determined by panel_width and panel_height, nocrop = scale image and preserve original aspect ratio)
        frame_scale: 'crop',                //STRING - cropping option for filmstrip images (same as above)
        
        frame_gap: 5,                        //INT - spacing between frames within filmstrip (in pixels)
        
        show_captions: false,                //BOOLEAN - flag to show or hide frame captions
        fade_panels: false,                    //BOOLEAN - flag to fade panels during transitions or swap instantly
        pause_on_hover: false                //BOOLEAN - flag to pause slideshow when user hovers over the gallery
    };
})(jQuery);

/* End - 416 - JS jQuery Gallery View rev. 488 *//* Begin - 418 - JS jQuery Metadata rev. 602 */

/*
 * Metadata - jQuery plugin for parsing metadata from elements
 *
 * Copyright (c) 2006 John Resig, Yehuda Katz, J�örn Zaefferer, Paul McLanahan
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.metadata.js 3640 2007-10-11 18:34:38Z pmclanahan $
 *
 */
/**
 * Sets the type of metadata to use. Metadata is encoded in JSON, and each property
 * in the JSON will become a property of the element itself.
 *
 * There are four supported types of metadata storage:
 *
 *   attr:  Inside an attribute. The name parameter indicates *which* attribute.
 *          
 *   class: Inside the class attribute, wrapped in curly braces: { }
 *   
 *   elem:  Inside a child element (e.g. a script tag). The
 *          name parameter indicates *which* element.
 *   html5: Values are stored in data-* attributes.
 *          
 * The metadata for an element is loaded the first time the element is accessed via jQuery.
 *
 * As a result, you can define the metadata type, use $(expr) to load the metadata into the elements
 * matched by expr, then redefine the metadata type and run another $(expr) for other elements.
 * 
 * @name $.metadata.setType
 *
 * @example <p id="one" class="some_class {item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("class")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from the class attribute
 * 
 * @example <p id="one" class="some_class" data="{item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("attr", "data")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a "data" attribute
 * 
 * @example <p id="one" class="some_class"><||s c r||i p t>{item_id: 1, item_label: 'Label'}<||/ s c r||i p t >This is a p</p>
 * @before $.metadata.setType("elem", "script")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a nested script element
 * 
 * @example <p id="one" class="some_class" data-item_id="1" data-item_label="Label">This is a p</p>
 * @before $.metadata.setType("html5")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a series of data-* attributes
 *
 * @param String type The encoding type
 * @param String name The name of the attribute to be used to get metadata (optional)
 * @cat Plugins/Metadata
 * @descr Sets the type of encoding to be used when loading metadata for the first time
 * @type undefined
 * @see metadata()
 */
(function($) {
$.extend({
  metadata : {
    defaults : {
      type: 'class',
      name: 'metadata',
      cre: /({.*})/,
      single: 'metadata'
    },
    setType: function( type, name ){
      this.defaults.type = type;
      this.defaults.name = name;
    },
    get: function( elem, opts ){
      var settings = $.extend({},this.defaults,opts);
      // check for empty string in single property
      if ( !settings.single.length ) settings.single = 'metadata';
      
      var data = $.data(elem, settings.single);
      // returned cached data if it already exists
      if ( data ) return data;
      
      data = "{}";
      
      var getData = function(data) {
        if(typeof data != "string") return data;
        
        if( data.indexOf('{') < 0 ) {
          data = eval("(" + data + ")");
        }
      }
      
      var getObject = function(data) {
        if(typeof data != "string") return data;
        
        data = eval("(" + data + ")");
        return data;
      }
      
      if ( settings.type == "html5" ) {
        var object = {};
        $( elem.attributes ).each(function() {
          var name = this.nodeName;
          if(name.match(/^data-/)) name = name.replace(/^data-/, '');
          else return true;
          object[name] = getObject(this.nodeValue);
        });
      } else {
        if ( settings.type == "class" ) {
          var m = settings.cre.exec( elem.className );
          if ( m )
            data = m[1];
        } else if ( settings.type == "elem" ) {
          if( !elem.getElementsByTagName ) return;
          var e = elem.getElementsByTagName(settings.name);
          if ( e.length )
            data = $.trim(e[0].innerHTML);
        } else if ( elem.getAttribute != undefined ) {
          var attr = elem.getAttribute( settings.name );
          if ( attr )
            data = attr;
        }
        object = getObject(data.indexOf("{") < 0 ? "{" + data + "}" : data);
      }
      
      $.data( elem, settings.single, object );
      return object;
    }
  }
});
/**
 * Returns the metadata object for the first member of the jQuery object.
 *
 * @name metadata
 * @descr Returns element's metadata object
 * @param Object opts An object contianing settings to override the defaults
 * @type jQuery
 * @cat Plugins/Metadata
 */
$.fn.metadata = function( opts ){
  return $.metadata.get( this[0], opts );
};
})(jQuery);

/* End - 418 - JS jQuery Metadata rev. 602 *//* Begin - 417 - JS jQuery Media rev. 475 */

/*
 * jQuery Media Plugin for converting elements into rich media content.
 *
 * Examples and documentation at: http://malsup.com/jquery/media/
 * Copyright (c) 2007-2008 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @author: M. Alsup
 * @version: 0.92 (24-SEP-2009)
 * @requires jQuery v1.1.2 or later
 * $Id: jquery.media.js 2460 2007-07-23 02:53:15Z malsup $
 *
 * Supported Media Players:
 *    - Flash
 *    - Quicktime
 *    - Real Player
 *    - Silverlight
 *    - Windows Media Player
 *    - iframe
 *
 * Supported Media Formats:
 *     Any types supported by the above players, such as:
 *     Video: asf, avi, flv, mov, mpg, mpeg, mp4, qt, smil, swf, wmv, 3g2, 3gp
 *     Audio: aif, aac, au, gsm, mid, midi, mov, mp3, m4a, snd, rm, wav, wma
 *     Other: bmp, html, pdf, psd, qif, qtif, qti, tif, tiff, xaml
 *
 * Thanks to Mark Hicken and Brent Pedersen for helping me debug this on the Mac!
 * Thanks to Dan Rossi for numerous bug reports and code bits!
 * Thanks to Skye Giordano for several great suggestions!
 * Thanks to Richard Connamacher for excellent improvements to the non-IE behavior!
 */
;(function($) {
/**
 * Chainable method for converting elements into rich media.
 *
 * @param options
 * @param callback fn invoked for each matched element before conversion
 * @param callback fn invoked for each matched element after conversion
 */
$.fn.media = function(options, f1, f2) {
    if (options == 'undo') {
        return this.each(function() {
            var $this = $(this);
            var html = $this.data('media.origHTML');
            if (html)
                $this.replaceWith(html);
        });
    }
    
    return this.each(function() {
        if (typeof options == 'function') {
            f2 = f1;
            f1 = options;
            options = {};
        }
        var o = getSettings(this, options);
        // pre-conversion callback, passes original element and fully populated options
        if (typeof f1 == 'function') f1(this, o);
        var r = getTypesRegExp();
        var m = r.exec(o.src.toLowerCase()) || [''];
        o.type ? m[0] = o.type : m.shift();
        for (var i=0; i < m.length; i++) {
            fn = m[i].toLowerCase();
            if (isDigit(fn[0])) fn = 'fn' + fn; // fns can't begin with numbers
            if (!$.fn.media[fn])
                continue;  // unrecognized media type
            // normalize autoplay settings
            var player = $.fn.media[fn+'_player'];
            if (!o.params) o.params = {};
            if (player) {
                var num = player.autoplayAttr == 'autostart';
                o.params[player.autoplayAttr || 'autoplay'] = num ? (o.autoplay ? 1 : 0) : o.autoplay ? true : false;
            }
            var $div = $.fn.media[fn](this, o);
            $div.css('backgroundColor', o.bgColor).width(o.width);
            
            if (o.canUndo) {
                var $temp = $('<div></div>').append(this);
                $div.data('media.origHTML', $temp.html()); // store original markup
            }
            
            // post-conversion callback, passes original element, new div element and fully populated options
            if (typeof f2 == 'function') f2(this, $div[0], o, player.name);
            break;
        }
    });
};
/**
 * Non-chainable method for adding or changing file format / player mapping
 * @name mapFormat
 * @param String format File format extension (ie: mov, wav, mp3)
 * @param String player Player name to use for the format (one of: flash, quicktime, realplayer, winmedia, silverlight or iframe
 */
$.fn.media.mapFormat = function(format, player) {
    if (!format || !player || !$.fn.media.defaults.players[player]) return; // invalid
    format = format.toLowerCase();
    if (isDigit(format[0])) format = 'fn' + format;
    $.fn.media[format] = $.fn.media[player];
    $.fn.media[format+'_player'] = $.fn.media.defaults.players[player];
};
// global defautls; override as needed
$.fn.media.defaults = {
    standards:  false,      // use object tags only (no embeds for non-IE browsers)
    canUndo:    true,       // tells plugin to store the original markup so it can be reverted via: $(sel).mediaUndo()
    width:        400,
    height:        400,
    autoplay:    0,               // normalized cross-player setting
    bgColor:    '#ffffff',     // background color
    params:        { wmode: 'transparent'},    // added to object element as param elements; added to embed element as attrs
    attrs:        {},            // added to object and embed elements as attrs
    flvKeyName: 'file',     // key used for object src param (thanks to Andrea Ercolino)
    flashvars:    {},            // added to flash content as flashvars param/attr
    flashVersion:    '7',    // required flash version
    expressInstaller: null,    // src for express installer
    // default flash video and mp3 player (@see: http://jeroenwijering.com/?item=Flash_Media_Player)
    flvPlayer:     'mediaplayer.swf',
    mp3Player:     'mediaplayer.swf',
    // @see http://msdn2.microsoft.com/en-us/library/bb412401.aspx
    silverlight: {
        inplaceInstallPrompt: 'true', // display in-place install prompt?
        isWindowless:          'true', // windowless mode (false for wrapping markup)
        framerate:              '24',      // maximum framerate
        version:              '0.9',  // Silverlight version
        onError:              null,      // onError callback
        onLoad:                  null,   // onLoad callback
        initParams:              null,      // object init params
        userContext:          null      // callback arg passed to the load callback
    }
};
// Media Players; think twice before overriding
$.fn.media.defaults.players = {
    flash: {
        name:         'flash',
        title:         'Flash',
        types:         'flv,mp3,swf',
        mimetype:     'application/x-shockwave-flash',
        pluginspage: 'http://www.adobe.com/go/getflashplayer',
        ieAttrs: {
            classid:  'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000',
            type:      'application/x-oleobject',
            codebase: 'http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + $.fn.media.defaults.flashVersion
        }
    },
    quicktime: {
        name:         'quicktime',
        title:         'QuickTime',
        mimetype:     'video/quicktime',
        pluginspage: 'http://www.apple.com/quicktime/download/',
        types:         'aif,aiff,aac,au,bmp,gsm,mov,mid,midi,mpg,mpeg,mp4,m4a,psd,qt,qtif,qif,qti,snd,tif,tiff,wav,3g2,3gp',
        ieAttrs: {
            classid:  'clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B',
            codebase: 'http://www.apple.com/qtactivex/qtplugin.cab'
        }
    },
    realplayer: {
        name:          'real',
        title:          'RealPlayer',
        types:          'ra,ram,rm,rpm,rv,smi,smil',
        mimetype:      'audio/x-pn-realaudio-plugin',
        pluginspage:  'http://www.real.com/player/',
        autoplayAttr: 'autostart',
        ieAttrs: {
            classid: 'clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA'
        }
    },
    winmedia: {
        name:          'winmedia',
        title:          'Windows Media',
        types:          'asx,asf,avi,wma,wmv',
        mimetype:      $.browser.mozilla && isFirefoxWMPPluginInstalled() ? 'application/x-ms-wmp' : 'application/x-mplayer2',
        pluginspage:  'http://www.microsoft.com/Windows/MediaPlayer/',
        autoplayAttr: 'autostart',
        oUrl:          'url',
        ieAttrs: {
            classid:  'clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6',
            type:      'application/x-oleobject'
        }
    },
    // special cases
    iframe: {
        name:  'iframe',
        types: 'html,pdf'
    },
    silverlight: {
        name:  'silverlight',
        types: 'xaml'
    }
};
//
//    everything below here is private
//

// detection script for FF WMP plugin (http://www.therossman.org/experiments/wmp_play.html)
// (hat tip to Mark Ross for this script)
function isFirefoxWMPPluginInstalled() {
    var plugs = navigator.plugins;
    for (var i = 0; i < plugs.length; i++) {
        var plugin = plugs[i];
        if (plugin['filename'] == 'np-mswmp.dll')
            return true;
    }
    return false;
}
var counter = 1;
for (var player in $.fn.media.defaults.players) {
    var types = $.fn.media.defaults.players[player].types;
    $.each(types.split(','), function(i,o) {
        if (isDigit(o[0])) o = 'fn' + o;
        $.fn.media[o] = $.fn.media[player] = getGenerator(player);
        $.fn.media[o+'_player'] = $.fn.media.defaults.players[player];
    });
};
function getTypesRegExp() {
    var types = '';
    for (var player in $.fn.media.defaults.players) {
        if (types.length) types += ',';
        types += $.fn.media.defaults.players[player].types;
    };
    return new RegExp('\\.(' + types.replace(/,/ig,'|') + ')\\b');
};
function getGenerator(player) {
    return function(el, options) {
        return generate(el, options, player);
    };
};
function isDigit(c) {
    return '0123456789'.indexOf(c) > -1;
};
// flatten all possible options: global defaults, meta, option obj
function getSettings(el, options) {
    options = options || {};
    var $el = $(el);
    var cls = el.className || '';
    // support metadata plugin (v1.0 and v2.0)
    var meta = $.metadata ? $el.metadata() : $.meta ? $el.data() : {};
    meta = meta || {};
    var w = meta.width     || parseInt(((cls.match(/w:(\d+)/)||[])[1]||0));
    var h = meta.height || parseInt(((cls.match(/h:(\d+)/)||[])[1]||0));
    if (w) meta.width    = w;
    if (h) meta.height = h;
    if (cls) meta.cls = cls;
    var a = $.fn.media.defaults;
    var b = options;
    var c = meta;
    var p = { params: { bgColor: options.bgColor || $.fn.media.defaults.bgColor } };
    var opts = $.extend({}, a, b, c);
    $.each(['attrs','params','flashvars','silverlight'], function(i,o) {
        opts[o] = $.extend({}, p[o] || {}, a[o] || {}, b[o] || {}, c[o] || {});
    });
    if (typeof opts.caption == 'undefined') opts.caption = $el.text();
    // make sure we have a source!
    opts.src = opts.src || $el.attr('href') || $el.attr('src') || 'unknown';
    return opts;
};
//
//    Flash Player
//
// generate flash using SWFObject library if possible
$.fn.media.swf = function(el, opts) {
    if (!window.SWFObject && !window.swfobject) {
        // roll our own
        if (opts.flashvars) {
            var a = [];
            for (var f in opts.flashvars)
                a.push(f + '=' + opts.flashvars[f]);
            if (!opts.params) opts.params = {};
            opts.params.flashvars = a.join('&');
        }
        return generate(el, opts, 'flash');
    }
    var id = el.id ? (' id="'+el.id+'"') : '';
    var cls = opts.cls ? (' class="' + opts.cls + '"') : '';
    var $div = $('<div' + id + cls + '>');
    // swfobject v2+
    if (window.swfobject) {
        $(el).after($div).appendTo($div);
        if (!el.id) el.id = 'movie_player_' + counter++;
        // replace el with swfobject content
        swfobject.embedSWF(opts.src, el.id, opts.width, opts.height, opts.flashVersion,
            opts.expressInstaller, opts.flashvars, opts.params, opts.attrs);
    }
    // swfobject < v2
    else {
        $(el).after($div).remove();
        var so = new SWFObject(opts.src, 'movie_player_' + counter++, opts.width, opts.height, opts.flashVersion, opts.bgColor);
        if (opts.expressInstaller) so.useExpressInstall(opts.expressInstaller);
        for (var p in opts.params)
            if (p != 'bgColor') so.addParam(p, opts.params[p]);
        for (var f in opts.flashvars)
            so.addVariable(f, opts.flashvars[f]);
        so.write($div[0]);
    }
    if (opts.caption) $('<div>').appendTo($div).html(opts.caption);
    return $div;
};
// map flv and mp3 files to the swf player by default
$.fn.media.flv = $.fn.media.mp3 = function(el, opts) {
    var src = opts.src;
    var player = /\.mp3\b/i.test(src) ? $.fn.media.defaults.mp3Player : $.fn.media.defaults.flvPlayer;
    var key = opts.flvKeyName;
    src = encodeURIComponent(src);
    opts.src = player;
    opts.src = opts.src + '?'+key+'=' + (src);
    var srcObj = {};
    srcObj[key] = src;
    opts.flashvars = $.extend({}, srcObj, opts.flashvars );
    return $.fn.media.swf(el, opts);
};
//
//    Silverlight
//
$.fn.media.xaml = function(el, opts) {
    if (!window.Sys || !window.Sys.Silverlight) {
        if ($.fn.media.xaml.warning) return;
        $.fn.media.xaml.warning = 1;
        alert('You must include the Silverlight.js script.');
        return;
    }
    var props = {
        width: opts.width,
        height: opts.height,
        background: opts.bgColor,
        inplaceInstallPrompt: opts.silverlight.inplaceInstallPrompt,
        isWindowless: opts.silverlight.isWindowless,
        framerate: opts.silverlight.framerate,
        version: opts.silverlight.version
    };
    var events = {
        onError: opts.silverlight.onError,
        onLoad: opts.silverlight.onLoad
    };
    var id1 = el.id ? (' id="'+el.id+'"') : '';
    var id2 = opts.id || 'AG' + counter++;
    // convert element to div
    var cls = opts.cls ? (' class="' + opts.cls + '"') : '';
    var $div = $('<div' + id1 + cls + '>');
    $(el).after($div).remove();
    Sys.Silverlight.createObjectEx({
        source: opts.src,
        initParams: opts.silverlight.initParams,
        userContext: opts.silverlight.userContext,
        id: id2,
        parentElement: $div[0],
        properties: props,
        events: events
    });
    if (opts.caption) $('<div>').appendTo($div).html(opts.caption);
    return $div;
};
//
// generate object/embed markup
//
function generate(el, opts, player) {
    var $el = $(el);
    var o = $.fn.media.defaults.players[player];
    if (player == 'iframe') {
        var o = $('<iframe' + ' width="' + opts.width + '" height="' + opts.height + '" >');
        o.attr('src', opts.src);
        o.css('backgroundColor', o.bgColor);
    }
    else if ($.browser.msie) {
        var a = ['<object width="' + opts.width + '" height="' + opts.height + '" '];
        for (var key in opts.attrs)
            a.push(key + '="'+opts.attrs[key]+'" ');
        for (var key in o.ieAttrs || {}) {
            var v = o.ieAttrs[key];
            if (key == 'codebase' && window.location.protocol == 'https:')
                v = v.replace('http','https');
            a.push(key + '="'+v+'" ');
        }
        a.push('></ob'+'ject'+'>');
        var p = ['<param name="' + (o.oUrl || 'src') +'" value="' + opts.src + '">'];
        for (var key in opts.params)
            p.push('<param name="'+ key +'" value="' + opts.params[key] + '">');
        var o = document.createElement(a.join(''));
        for (var i=0; i < p.length; i++)
            o.appendChild(document.createElement(p[i]));
    }
    else if (o.standards) {
        // Rewritten to be standards compliant by Richard Connamacher
        var a = ['<object type="' + o.mimetype +'" width="' + opts.width + '" height="' + opts.height +'"'];
        if (opts.src) a.push(' data="' + opts.src + '" ');
        a.push('>');
        a.push('<param name="' + (o.oUrl || 'src') +'" value="' + opts.src + '">');
        for (var key in opts.params) {
            if (key == 'wmode' && player != 'flash') // FF3/Quicktime borks on wmode
                continue;
            a.push('<param name="'+ key +'" value="' + opts.params[key] + '">');
        }
        // Alternate HTML
        a.push('<div><p><strong>'+o.title+' Required</strong></p><p>'+o.title+' is required to view this media. <a href="'+o.pluginspage+'">Download Here</a>.</p></div>');
        a.push('</ob'+'ject'+'>');
    }
     else {
            var a = ['<embed width="' + opts.width + '" height="' + opts.height + '" style="display:block"'];
            if (opts.src) a.push(' src="' + opts.src + '" ');
            for (var key in opts.attrs)
                a.push(key + '="'+opts.attrs[key]+'" ');
            for (var key in o.eAttrs || {})
                a.push(key + '="'+o.eAttrs[key]+'" ');
            for (var key in opts.params) {
                if (key == 'wmode' && player != 'flash') // FF3/Quicktime borks on wmode
                    continue;
                a.push(key + '="'+opts.params[key]+'" ');
            }
            a.push('></em'+'bed'+'>');
        }    
    // convert element to div
    var id = el.id ? (' id="'+el.id+'"') : '';
    var cls = opts.cls ? (' class="' + opts.cls + '"') : '';
    var $div = $('<div' + id + cls + '>');
    $el.after($div).remove();
    ($.browser.msie || player == 'iframe') ? $div.append(o) : $div.html(a.join(''));
    if (opts.caption) $('<div>').appendTo($div).html(opts.caption);
    return $div;
};

})(jQuery);

/* End - 417 - JS jQuery Media rev. 475 *//* Begin - 407 - JS jQuery Pagination rev. 304 */

/**
 * This jQuery plugin displays pagination links inside the selected elements.
 *
 * @author Gabriel Birke (birke *at* d-scribe *dot* de)
 * @version 1.2
 * @param {int} maxentries Number of entries to paginate
 * @param {Object} opts Several options (see README for documentation)
 * @return {Object} jQuery Object
 */
jQuery.fn.pagination = function(maxentries, opts){
    opts = jQuery.extend({
        items_per_page:10,
        num_display_entries:10,
        current_page:0,
        num_edge_entries:0,
        link_to:"#",
        prev_text:"Prev",
        next_text:"Next",
        ellipse_text:"...",
        prev_show_always:true,
        next_show_always:true,
        callback:function(){return false;}
    },opts||{});
    
    return this.each(function() {
        /**
         * Calculate the maximum number of pages
         */
        function numPages() {
            return Math.ceil(maxentries/opts.items_per_page);
        }
        
        /**
         * Calculate start and end point of pagination links depending on 
         * current_page and num_display_entries.
         * @return {Array}
         */
        function getInterval()  {
            var ne_half = Math.ceil(opts.num_display_entries/2);
            var np = numPages();
            var upper_limit = np-opts.num_display_entries;
            var start = current_page>ne_half?Math.max(Math.min(current_page-ne_half, upper_limit), 0):0;
            var end = current_page>ne_half?Math.min(current_page+ne_half, np):Math.min(opts.num_display_entries, np);
            return [start,end];
        }
        
        /**
         * This is the event handling function for the pagination links. 
         * @param {int} page_id The new page number
         */
        function pageSelected(page_id, evt){
            current_page = page_id;
            drawLinks();
            var continuePropagation = opts.callback(page_id, panel);
            if (!continuePropagation) {
                if (evt.stopPropagation) {
                    evt.stopPropagation();
                }
                else {
                    evt.cancelBubble = true;
                }
            }
            return continuePropagation;
        }
        
        /**
         * This function inserts the pagination links into the container element
         */
        function drawLinks() {
            panel.empty();
            var interval = getInterval();
            var np = numPages();
            // This helper function returns a handler function that calls pageSelected with the right page_id
            var getClickHandler = function(page_id) {
                return function(evt){ return pageSelected(page_id,evt); }
            }
            // Helper function for generating a single link (or a span tag if it's the current page)
            var appendItem = function(page_id, appendopts){
                page_id = page_id<0?0:(page_id<np?page_id:np-1); // Normalize page id to sane value
                appendopts = jQuery.extend({text:page_id+1, classes:""}, appendopts||{});
                if(page_id == current_page){
                    var lnk = jQuery("<span class='current'>"+(appendopts.text)+"</span>");
                }
                else
                {
                    var lnk = jQuery("<a>"+(appendopts.text)+"</a>")
                        .bind("click", getClickHandler(page_id))
                        .attr('href', opts.link_to.replace(/__id__/,page_id));
                        
                        
                }
                if(appendopts.classes){lnk.addClass(appendopts.classes);}
                panel.append(lnk);
            }
            // Generate "Previous"-Link
            if(opts.prev_text && (current_page > 0 || opts.prev_show_always)){
                appendItem(current_page-1,{text:opts.prev_text, classes:"prev"});
            }
            // Generate starting points
            if (interval[0] > 0 && opts.num_edge_entries > 0)
            {
                var end = Math.min(opts.num_edge_entries, interval[0]);
                for(var i=0; i<end; i++) {
                    appendItem(i);
                }
                if(opts.num_edge_entries < interval[0] && opts.ellipse_text)
                {
                    jQuery("<span>"+opts.ellipse_text+"</span>").appendTo(panel);
                }
            }
            // Generate interval links
            for(var i=interval[0]; i<interval[1]; i++) {
                appendItem(i);
            }
            // Generate ending points
            if (interval[1] < np && opts.num_edge_entries > 0)
            {
                if(np-opts.num_edge_entries > interval[1]&& opts.ellipse_text)
                {
                    jQuery("<span>"+opts.ellipse_text+"</span>").appendTo(panel);
                }
                var begin = Math.max(np-opts.num_edge_entries, interval[1]);
                for(var i=begin; i<np; i++) {
                    appendItem(i);
                }
                
            }
            // Generate "Next"-Link
            if(opts.next_text && (current_page < np-1 || opts.next_show_always)){
                appendItem(current_page+1,{text:opts.next_text, classes:"next"});
            }
        }
        
        // Extract current_page from options
        var current_page = opts.current_page;
        // Create a sane value for maxentries and items_per_page
        maxentries = (!maxentries || maxentries < 0)?1:maxentries;
        opts.items_per_page = (!opts.items_per_page || opts.items_per_page < 0)?1:opts.items_per_page;
        // Store DOM element for easy access from all inner functions
        var panel = jQuery(this);
        // Attach control functions to the DOM element 
        this.selectPage = function(page_id){ pageSelected(page_id);}
        this.prevPage = function(){ 
            if (current_page > 0) {
                pageSelected(current_page - 1);
                return true;
            }
            else {
                return false;
            }
        }
        this.nextPage = function(){ 
            if(current_page < numPages()-1) {
                pageSelected(current_page+1);
                return true;
            }
            else {
                return false;
            }
        }
        // When all initialisation is done, draw the links
        drawLinks();
        // call callback function
        opts.callback(current_page, this);
    });
}

/* End - 407 - JS jQuery Pagination rev. 304 *//* Begin - 420 - JS jQuery Cookie rev. 627 */

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
 
/* End- 420 - JS jQuery Cookie *//* Begin - 409 - JS sIFR rev. 206 */

/*****************************************************************************
scalable Inman Flash Replacement (sIFR) version 3, revision 436.
Copyright 2006 – 2008 Mark Wubben, <http://novemberborn.net/>
Older versions:
* IFR by Shaun Inman
* sIFR 1.0 by Mike Davidson, Shaun Inman and Tomas Jogin
* sIFR 2.0 by Mike Davidson, Shaun Inman, Tomas Jogin and Mark Wubben
See also <http://novemberborn.net/sifr3> and <http://wiki.novemberborn.net/sifr3>.
This software is licensed and provided under the CC-GNU LGPL.
See <http://creativecommons.org/licenses/LGPL/2.1/>
*****************************************************************************/
var sIFR=new function(){var O=this;var E={ACTIVE:"sIFR-active",REPLACED:"sIFR-replaced",IGNORE:"sIFR-ignore",ALTERNATE:"sIFR-alternate",CLASS:"sIFR-class",LAYOUT:"sIFR-layout",FLASH:"sIFR-flash",FIX_FOCUS:"sIFR-fixfocus",DUMMY:"sIFR-dummy"};E.IGNORE_CLASSES=[E.REPLACED,E.IGNORE,E.ALTERNATE];this.MIN_FONT_SIZE=6;this.MAX_FONT_SIZE=126;this.FLASH_PADDING_BOTTOM=5;this.VERSION="436";this.isActive=false;this.isEnabled=true;this.fixHover=true;this.autoInitialize=true;this.setPrefetchCookie=true;this.cookiePath="/";this.domains=[];this.forceWidth=true;this.fitExactly=false;this.forceTextTransform=true;this.useDomLoaded=true;this.useStyleCheck=false;this.hasFlashClassSet=false;this.repaintOnResize=true;this.replacements=[];var L=0;var R=false;function Y(){}function D(c){function d(e){return e.toLocaleUpperCase()}this.normalize=function(e){return e.replace(/\n|\r|\xA0/g,D.SINGLE_WHITESPACE).replace(/\s+/g,D.SINGLE_WHITESPACE)};this.textTransform=function(e,f){switch(e){case"uppercase":return f.toLocaleUpperCase();case"lowercase":return f.toLocaleLowerCase();case"capitalize":return f.replace(/^\w|\s\w/g,d)}return f};this.toHexString=function(e){if(e.charAt(0)!="#"||e.length!=4&&e.length!=7){return e}e=e.substring(1);return"0x"+(e.length==3?e.replace(/(.)(.)(.)/,"$1$1$2$2$3$3"):e)};this.toJson=function(g,f){var e="";switch(typeof(g)){case"string":e='"'+f(g)+'"';break;case"number":case"boolean":e=g.toString();break;case"object":e=[];for(var h in g){if(g[h]==Object.prototype[h]){continue}e.push('"'+h+'":'+this.toJson(g[h]))}e="{"+e.join(",")+"}";break}return e};this.convertCssArg=function(e){if(!e){return{}}if(typeof(e)=="object"){if(e.constructor==Array){e=e.join("")}else{return e}}var l={};var m=e.split("}");for(var h=0;h<m.length;h++){var k=m[h].match(/([^\s{]+)\s*\{(.+)\s*;?\s*/);if(!k||k.length!=3){continue}if(!l[k[1]]){l[k[1]]={}}var g=k[2].split(";");for(var f=0;f<g.length;f++){var n=g[f].match(/\s*([^:\s]+)\s*\:\s*([^;]+)/);if(!n||n.length!=3){continue}l[k[1]][n[1]]=n[2].replace(/\s+$/,"")}}return l};this.extractFromCss=function(g,f,i,e){var h=null;if(g&&g[f]&&g[f][i]){h=g[f][i];if(e){delete g[f][i]}}return h};this.cssToString=function(f){var g=[];for(var e in f){var j=f[e];if(j==Object.prototype[e]){continue}g.push(e,"{");for(var i in j){if(j[i]==Object.prototype[i]){continue}var h=j[i];if(D.UNIT_REMOVAL_PROPERTIES[i]){h=parseInt(h,10)}g.push(i,":",h,";")}g.push("}")}return g.join("")};this.escape=function(e){return escape(e).replace(/\+/g,"%2B")};this.encodeVars=function(e){return e.join("&").replace(/%/g,"%25")};this.copyProperties=function(g,f){for(var e in g){if(f[e]===undefined){f[e]=g[e]}}return f};this.domain=function(){var f="";try{f=document.domain}catch(g){}return f};this.domainMatches=function(h,g){if(g=="*"||g==h){return true}var f=g.lastIndexOf("*");if(f>-1){g=g.substr(f+1);var e=h.lastIndexOf(g);if(e>-1&&(e+g.length)==h.length){return true}}return false};this.uriEncode=function(e){return encodeURI(decodeURIComponent(e))};this.delay=function(f,h,g){var e=Array.prototype.slice.call(arguments,3);setTimeout(function(){h.apply(g,e)},f)}}D.UNIT_REMOVAL_PROPERTIES={leading:true,"margin-left":true,"margin-right":true,"text-indent":true};D.SINGLE_WHITESPACE=" ";function U(e){var d=this;function c(g,j,h){var k=d.getStyleAsInt(g,j,e.ua.ie);if(k==0){k=g[h];for(var f=3;f<arguments.length;f++){k-=d.getStyleAsInt(g,arguments[f],true)}}return k}this.getBody=function(){return document.getElementsByTagName("body")[0]||null};this.querySelectorAll=function(f){return window.parseSelector(f)};this.addClass=function(f,g){if(g){g.className=((g.className||"")==""?"":g.className+" ")+f}};this.removeClass=function(f,g){if(g){g.className=g.className.replace(new RegExp("(^|\\s)"+f+"(\\s|$)"),"").replace(/^\s+|(\s)\s+/g,"$1")}};this.hasClass=function(f,g){return new RegExp("(^|\\s)"+f+"(\\s|$)").test(g.className)};this.hasOneOfClassses=function(h,g){for(var f=0;f<h.length;f++){if(this.hasClass(h[f],g)){return true}}return false};this.ancestorHasClass=function(g,f){g=g.parentNode;while(g&&g.nodeType==1){if(this.hasClass(f,g)){return true}g=g.parentNode}return false};this.create=function(f,g){var h=document.createElementNS?document.createElementNS(U.XHTML_NS,f):document.createElement(f);if(g){h.className=g}return h};this.getComputedStyle=function(h,i){var f;if(document.defaultView&&document.defaultView.getComputedStyle){var g=document.defaultView.getComputedStyle(h,null);f=g?g[i]:null}else{if(h.currentStyle){f=h.currentStyle[i]}}return f||""};this.getStyleAsInt=function(g,i,f){var h=this.getComputedStyle(g,i);if(f&&!/px$/.test(h)){return 0}return parseInt(h)||0};this.getWidthFromStyle=function(f){return c(f,"width","offsetWidth","paddingRight","paddingLeft","borderRightWidth","borderLeftWidth")};this.getHeightFromStyle=function(f){return c(f,"height","offsetHeight","paddingTop","paddingBottom","borderTopWidth","borderBottomWidth")};this.getDimensions=function(j){var h=j.offsetWidth;var f=j.offsetHeight;if(h==0||f==0){for(var g=0;g<j.childNodes.length;g++){var k=j.childNodes[g];if(k.nodeType!=1){continue}h=Math.max(h,k.offsetWidth);f=Math.max(f,k.offsetHeight)}}return{width:h,height:f}};this.getViewport=function(){return{width:window.innerWidth||document.documentElement.clientWidth||this.getBody().clientWidth,height:window.innerHeight||document.documentElement.clientHeight||this.getBody().clientHeight}};this.blurElement=function(g){try{g.blur();return}catch(h){}var f=this.create("input");f.style.width="0px";f.style.height="0px";g.parentNode.appendChild(f);f.focus();f.blur();f.parentNode.removeChild(f)}}U.XHTML_NS="http://www.w3.org/1999/xhtml";function H(r){var g=navigator.userAgent.toLowerCase();var q=(navigator.product||"").toLowerCase();var h=navigator.platform.toLowerCase();this.parseVersion=H.parseVersion;this.macintosh=/^mac/.test(h);this.windows=/^win/.test(h);this.linux=/^linux/.test(h);this.quicktime=false;this.opera=/opera/.test(g);this.konqueror=/konqueror/.test(g);this.ie=false/*@cc_on||true@*/;this.ieSupported=this.ie&&!/ppc|smartphone|iemobile|msie\s5\.5/.test(g)/*@cc_on&&@_jscript_version>=5.5@*/;this.ieWin=this.ie&&this.windows/*@cc_on&&@_jscript_version>=5.1@*/;this.windows=this.windows&&(!this.ie||this.ieWin);this.ieMac=this.ie&&this.macintosh/*@cc_on&&@_jscript_version<5.1@*/;this.macintosh=this.macintosh&&(!this.ie||this.ieMac);this.safari=/safari/.test(g);this.webkit=!this.konqueror&&/applewebkit/.test(g);this.khtml=this.webkit||this.konqueror;this.gecko=!this.khtml&&q=="gecko";this.ieVersion=this.ie&&/.*msie\s(\d\.\d)/.exec(g)?this.parseVersion(RegExp.$1):"0";this.operaVersion=this.opera&&/.*opera(\s|\/)(\d+\.\d+)/.exec(g)?this.parseVersion(RegExp.$2):"0";this.webkitVersion=this.webkit&&/.*applewebkit\/(\d+).*/.exec(g)?this.parseVersion(RegExp.$1):"0";this.geckoVersion=this.gecko&&/.*rv:\s*([^\)]+)\)\s+gecko/.exec(g)?this.parseVersion(RegExp.$1):"0";this.konquerorVersion=this.konqueror&&/.*konqueror\/([\d\.]+).*/.exec(g)?this.parseVersion(RegExp.$1):"0";this.flashVersion=0;if(this.ieWin){var l;var o=false;try{l=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(m){try{l=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");this.flashVersion=this.parseVersion("6");l.AllowScriptAccess="always"}catch(m){o=this.flashVersion==this.parseVersion("6")}if(!o){try{l=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(m){}}}if(!o&&l){this.flashVersion=this.parseVersion((l.GetVariable("$version")||"").replace(/^\D+(\d+)\D+(\d+)\D+(\d+).*/g,"$1.$2.$3"))}}else{if(navigator.plugins&&navigator.plugins["Shockwave Flash"]){var n=navigator.plugins["Shockwave Flash"].description.replace(/^.*\s+(\S+\s+\S+$)/,"$1");var p=n.replace(/^\D*(\d+\.\d+).*$/,"$1");if(/r/.test(n)){p+=n.replace(/^.*r(\d*).*$/,".$1")}else{if(/d/.test(n)){p+=".0"}}this.flashVersion=this.parseVersion(p);var j=false;for(var k=0,c=this.flashVersion>=H.MIN_FLASH_VERSION;c&&k<navigator.mimeTypes.length;k++){var f=navigator.mimeTypes[k];if(f.type!="application/x-shockwave-flash"){continue}if(f.enabledPlugin){j=true;if(f.enabledPlugin.description.toLowerCase().indexOf("quicktime")>-1){c=false;this.quicktime=true}}}if(this.quicktime||!j){this.flashVersion=this.parseVersion("0")}}}this.flash=this.flashVersion>=H.MIN_FLASH_VERSION;this.transparencySupport=this.macintosh||this.windows||this.linux&&(this.flashVersion>=this.parseVersion("10")&&(this.gecko&&this.geckoVersion>=this.parseVersion("1.9")||this.opera));this.computedStyleSupport=this.ie||!!document.defaultView.getComputedStyle;this.fixFocus=this.gecko&&this.windows;this.nativeDomLoaded=this.gecko||this.webkit&&this.webkitVersion>=this.parseVersion("525")||this.konqueror&&this.konquerorMajor>this.parseVersion("03")||this.opera;this.mustCheckStyle=this.khtml||this.opera;this.forcePageLoad=this.webkit&&this.webkitVersion<this.parseVersion("523");this.properDocument=typeof(document.location)=="object";this.supported=this.flash&&this.properDocument&&(!this.ie||this.ieSupported)&&this.computedStyleSupport&&(!this.opera||this.operaVersion>=this.parseVersion("9.61"))&&(!this.webkit||this.webkitVersion>=this.parseVersion("412"))&&(!this.gecko||this.geckoVersion>=this.parseVersion("1.8.0.12"))&&(!this.konqueror)}H.parseVersion=function(c){return c.replace(/(^|\D)(\d+)(?=\D|$)/g,function(f,e,g){f=e;for(var d=4-g.length;d>=0;d--){f+="0"}return f+g})};H.MIN_FLASH_VERSION=H.parseVersion("8");function F(c){this.fix=c.ua.ieWin&&window.location.hash!="";var d;this.cache=function(){d=document.title};function e(){document.title=d}this.restore=function(){if(this.fix){setTimeout(e,0)}}}function S(l){var e=null;function c(){try{if(l.ua.ie||document.readyState!="loaded"&&document.readyState!="complete"){document.documentElement.doScroll("left")}}catch(n){return setTimeout(c,10)}i()}function i(){if(l.useStyleCheck){h()}else{if(!l.ua.mustCheckStyle){d(null,true)}}}function h(){e=l.dom.create("div",E.DUMMY);l.dom.getBody().appendChild(e);m()}function m(){if(l.dom.getComputedStyle(e,"marginLeft")=="42px"){g()}else{setTimeout(m,10)}}function g(){if(e&&e.parentNode){e.parentNode.removeChild(e)}e=null;d(null,true)}function d(n,o){l.initialize(o);if(n&&n.type=="load"){if(document.removeEventListener){document.removeEventListener("DOMContentLoaded",d,false)}if(window.removeEventListener){window.removeEventListener("load",d,false)}}}function j(){l.prepareClearReferences();if(document.readyState=="interactive"){document.attachEvent("onstop",f);setTimeout(function(){document.detachEvent("onstop",f)},0)}}function f(){document.detachEvent("onstop",f);k()}function k(){l.clearReferences()}this.attach=function(){if(window.addEventListener){window.addEventListener("load",d,false)}else{window.attachEvent("onload",d)}if(!l.useDomLoaded||l.ua.forcePageLoad||l.ua.ie&&window.top!=window){return}if(l.ua.nativeDomLoaded){document.addEventListener("DOMContentLoaded",i,false)}else{if(l.ua.ie||l.ua.khtml){c()}}};this.attachUnload=function(){if(!l.ua.ie){return}window.attachEvent("onbeforeunload",j);window.attachEvent("onunload",k)}}var Q="sifrFetch";function N(c){var e=false;this.fetchMovies=function(f){if(c.setPrefetchCookie&&new RegExp(";?"+Q+"=true;?").test(document.cookie)){return}try{e=true;d(f)}catch(g){}if(c.setPrefetchCookie){document.cookie=Q+"=true;path="+c.cookiePath}};this.clear=function(){if(!e){return}try{var f=document.getElementsByTagName("script");for(var g=f.length-1;g>=0;g--){var h=f[g];if(h.type=="sifr/prefetch"){h.parentNode.removeChild(h)}}}catch(j){}};function d(f){for(var g=0;g<f.length;g++){document.write('<script defer type="sifr/prefetch" src="'+f[g].src+'"><\/script>')}}}function b(e){var g=e.ua.ie;var f=g&&e.ua.flashVersion<e.ua.parseVersion("9.0.115");var d={};var c={};this.fixFlash=f;this.register=function(h){if(!g){return}var i=h.getAttribute("id");this.cleanup(i,false);c[i]=h;delete d[i];if(f){window[i]=h}};this.reset=function(){if(!g){return false}for(var j=0;j<e.replacements.length;j++){var h=e.replacements[j];var k=c[h.id];if(!d[h.id]&&(!k.parentNode||k.parentNode.nodeType==11)){h.resetMovie();d[h.id]=true}}return true};this.cleanup=function(l,h){var i=c[l];if(!i){return}for(var k in i){if(typeof(i[k])=="function"){i[k]=null}}c[l]=null;if(f){window[l]=null}if(i.parentNode){if(h&&i.parentNode.nodeType==1){var j=document.createElement("div");j.style.width=i.offsetWidth+"px";j.style.height=i.offsetHeight+"px";i.parentNode.replaceChild(j,i)}else{i.parentNode.removeChild(i)}}};this.prepareClearReferences=function(){if(!f){return}__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}};this.clearReferences=function(){if(f){var j=document.getElementsByTagName("object");for(var h=j.length-1;h>=0;h--){c[j[h].getAttribute("id")]=j[h]}}for(var k in c){if(Object.prototype[k]!=c[k]){this.cleanup(k,true)}}}}function K(d,g,f,c,e){this.sIFR=d;this.id=g;this.vars=f;this.movie=null;this.__forceWidth=c;this.__events=e;this.__resizing=0}K.prototype={getFlashElement:function(){return document.getElementById(this.id)},getAlternate:function(){return document.getElementById(this.id+"_alternate")},getAncestor:function(){var c=this.getFlashElement().parentNode;return !this.sIFR.dom.hasClass(E.FIX_FOCUS,c)?c:c.parentNode},available:function(){var c=this.getFlashElement();return c&&c.parentNode},call:function(c){var d=this.getFlashElement();if(!d[c]){return false}return Function.prototype.apply.call(d[c],d,Array.prototype.slice.call(arguments,1))},attempt:function(){if(!this.available()){return false}try{this.call.apply(this,arguments)}catch(c){if(this.sIFR.debug){throw c}return false}return true},updateVars:function(c,e){for(var d=0;d<this.vars.length;d++){if(this.vars[d].split("=")[0]==c){this.vars[d]=c+"="+e;break}}var f=this.sIFR.util.encodeVars(this.vars);this.movie.injectVars(this.getFlashElement(),f);this.movie.injectVars(this.movie.html,f)},storeSize:function(c,d){this.movie.setSize(c,d);this.updateVars(c,d)},fireEvent:function(c){if(this.available()&&this.__events[c]){this.sIFR.util.delay(0,this.__events[c],this,this)}},resizeFlashElement:function(c,d,e){if(!this.available()){return}this.__resizing++;var f=this.getFlashElement();f.setAttribute("height",c);this.getAncestor().style.minHeight="";this.updateVars("renderheight",c);this.storeSize("height",c);if(d!==null){f.setAttribute("width",d);this.movie.setSize("width",d)}if(this.__events.onReplacement){this.sIFR.util.delay(0,this.__events.onReplacement,this,this);delete this.__events.onReplacement}if(e){this.sIFR.util.delay(0,function(){this.attempt("scaleMovie");this.__resizing--},this)}else{this.__resizing--}},blurFlashElement:function(){if(this.available()){this.sIFR.dom.blurElement(this.getFlashElement())}},resetMovie:function(){this.sIFR.util.delay(0,this.movie.reset,this.movie,this.getFlashElement(),this.getAlternate())},resizeAfterScale:function(){if(this.available()&&this.__resizing==0){this.sIFR.util.delay(0,this.resize,this)}},resize:function(){if(!this.available()){return}this.__resizing++;var g=this.getFlashElement();var f=g.offsetWidth;if(f==0){return}var e=g.getAttribute("width");var l=g.getAttribute("height");var m=this.getAncestor();var o=this.sIFR.dom.getHeightFromStyle(m);g.style.width="1px";g.style.height="1px";m.style.minHeight=o+"px";var c=this.getAlternate().childNodes;var n=[];for(var k=0;k<c.length;k++){var h=c[k].cloneNode(true);n.push(h);m.appendChild(h)}var d=this.sIFR.dom.getWidthFromStyle(m);for(var k=0;k<n.length;k++){m.removeChild(n[k])}g.style.width=g.style.height=m.style.minHeight="";g.setAttribute("width",this.__forceWidth?d:e);g.setAttribute("height",l);if(sIFR.ua.ie){g.style.display="none";var j=g.offsetHeight;g.style.display=""}if(d!=f){if(this.__forceWidth){this.storeSize("width",d)}this.attempt("resize",d)}this.__resizing--},replaceText:function(g,j){var d=this.sIFR.util.escape(g);if(!this.attempt("replaceText",d)){return false}this.updateVars("content",d);var f=this.getAlternate();if(j){while(f.firstChild){f.removeChild(f.firstChild)}for(var c=0;c<j.length;c++){f.appendChild(j[c])}}else{try{f.innerHTML=g}catch(h){}}return true},changeCSS:function(c){c=this.sIFR.util.escape(this.sIFR.util.cssToString(this.sIFR.util.convertCssArg(c)));this.updateVars("css",c);return this.attempt("changeCSS",c)},remove:function(){if(this.movie&&this.available()){this.movie.remove(this.getFlashElement(),this.id)}}};var X=new function(){this.create=function(p,n,j,i,f,e,g,o,l,h,m){var k=p.ua.ie?d:c;return new k(p,n,j,i,f,e,g,o,["flashvars",l,"wmode",h,"bgcolor",m,"allowScriptAccess","always","quality","best"])};function c(s,q,l,h,f,e,g,r,n){var m=s.dom.create("object",E.FLASH);var p=["type","application/x-shockwave-flash","id",f,"name",f,"data",e,"width",g,"height",r];for(var o=0;o<p.length;o+=2){m.setAttribute(p[o],p[o+1])}var j=m;if(h){j=W.create("div",E.FIX_FOCUS);j.appendChild(m)}for(var o=0;o<n.length;o+=2){if(n[o]=="name"){continue}var k=W.create("param");k.setAttribute("name",n[o]);k.setAttribute("value",n[o+1]);m.appendChild(k)}l.style.minHeight=r+"px";while(l.firstChild){l.removeChild(l.firstChild)}l.appendChild(j);this.html=j.cloneNode(true)}c.prototype={reset:function(e,f){e.parentNode.replaceChild(this.html.cloneNode(true),e)},remove:function(e,f){e.parentNode.removeChild(e)},setSize:function(e,f){this.html.setAttribute(e,f)},injectVars:function(e,g){var h=e.getElementsByTagName("param");for(var f=0;f<h.length;f++){if(h[f].getAttribute("name")=="flashvars"){h[f].setAttribute("value",g);break}}}};function d(p,n,j,h,f,e,g,o,k){this.dom=p.dom;this.broken=n;this.html='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="'+f+'" width="'+g+'" height="'+o+'" class="'+E.FLASH+'"><param name="movie" value="'+e+'"></param></object>';var m="";for(var l=0;l<k.length;l+=2){m+='<param name="'+k[l]+'" value="'+k[l+1]+'"></param>'}this.html=this.html.replace(/(<\/object>)/,m+"$1");j.style.minHeight=o+"px";j.innerHTML=this.html;this.broken.register(j.firstChild)}d.prototype={reset:function(f,g){g=g.cloneNode(true);var e=f.parentNode;e.innerHTML=this.html;this.broken.register(e.firstChild);e.appendChild(g)},remove:function(e,f){this.broken.cleanup(f)},setSize:function(e,f){this.html=this.html.replace(e=="height"?/(height)="\d+"/:/(width)="\d+"/,'$1="'+f+'"')},injectVars:function(e,f){if(e!=this.html){return}this.html=this.html.replace(/(flashvars(=|\"\svalue=)\")[^\"]+/,"$1"+f)}}};this.errors=new Y(O);var A=this.util=new D(O);var W=this.dom=new U(O);var T=this.ua=new H(O);var G={fragmentIdentifier:new F(O),pageLoad:new S(O),prefetch:new N(O),brokenFlashIE:new b(O)};this.__resetBrokenMovies=G.brokenFlashIE.reset;var J={kwargs:[],replaceAll:function(d){for(var c=0;c<this.kwargs.length;c++){O.replace(this.kwargs[c])}if(!d){this.kwargs=[]}}};this.activate=function(){if(!T.supported||!this.isEnabled||this.isActive||!C()||a()){return}G.prefetch.fetchMovies(arguments);this.isActive=true;this.setFlashClass();G.fragmentIdentifier.cache();G.pageLoad.attachUnload();if(!this.autoInitialize){return}G.pageLoad.attach()};this.setFlashClass=function(){if(this.hasFlashClassSet){return}W.addClass(E.ACTIVE,W.getBody()||document.documentElement);this.hasFlashClassSet=true};this.removeFlashClass=function(){if(!this.hasFlashClassSet){return}W.removeClass(E.ACTIVE,W.getBody());W.removeClass(E.ACTIVE,document.documentElement);this.hasFlashClassSet=false};this.initialize=function(c){if(!this.isActive||!this.isEnabled){return}if(R){if(!c){J.replaceAll(false)}return}R=true;J.replaceAll(c);if(O.repaintOnResize){if(window.addEventListener){window.addEventListener("resize",Z,false)}else{window.attachEvent("onresize",Z)}}G.prefetch.clear()};this.replace=function(x,u){if(!T.supported){return}if(u){x=A.copyProperties(x,u)}if(!R){return J.kwargs.push(x)}if(this.onReplacementStart){this.onReplacementStart(x)}var AM=x.elements||W.querySelectorAll(x.selector);if(AM.length==0){return}var w=M(x.src);var AR=A.convertCssArg(x.css);var v=B(x.filters);var AN=x.forceSingleLine===true;var AS=x.preventWrap===true&&!AN;var q=AN||(x.fitExactly==null?this.fitExactly:x.fitExactly)===true;var AD=q||(x.forceWidth==null?this.forceWidth:x.forceWidth)===true;var s=x.ratios||[];var AE=x.pixelFont===true;var r=parseInt(x.tuneHeight)||0;var z=!!x.onRelease||!!x.onRollOver||!!x.onRollOut;if(q){A.extractFromCss(AR,".sIFR-root","text-align",true)}var t=A.extractFromCss(AR,".sIFR-root","font-size",true)||"0";var e=A.extractFromCss(AR,".sIFR-root","background-color",true)||"#FFFFFF";var o=A.extractFromCss(AR,".sIFR-root","kerning",true)||"";var AW=A.extractFromCss(AR,".sIFR-root","opacity",true)||"100";var k=A.extractFromCss(AR,".sIFR-root","cursor",true)||"default";var AP=parseInt(A.extractFromCss(AR,".sIFR-root","leading"))||0;var AJ=x.gridFitType||(A.extractFromCss(AR,".sIFR-root","text-align")=="right")?"subpixel":"pixel";var h=this.forceTextTransform===false?"none":A.extractFromCss(AR,".sIFR-root","text-transform",true)||"none";t=/^\d+(px)?$/.test(t)?parseInt(t):0;AW=parseFloat(AW)<1?100*parseFloat(AW):AW;var AC=x.modifyCss?"":A.cssToString(AR);var AG=x.wmode||"";if(!AG){if(x.transparent){AG="transparent"}else{if(x.opaque){AG="opaque"}}}if(AG=="transparent"){if(!T.transparencySupport){AG="opaque"}else{e="transparent"}}else{if(e=="transparent"){e="#FFFFFF"}}for(var AV=0;AV<AM.length;AV++){var AF=AM[AV];if(W.hasOneOfClassses(E.IGNORE_CLASSES,AF)||W.ancestorHasClass(AF,E.ALTERNATE)){continue}var AO=W.getDimensions(AF);var f=AO.height;var c=AO.width;var AA=W.getComputedStyle(AF,"display");if(!f||!c||!AA||AA=="none"){continue}c=W.getWidthFromStyle(AF);var n,AH;if(!t){var AL=I(AF);n=Math.min(this.MAX_FONT_SIZE,Math.max(this.MIN_FONT_SIZE,AL.fontSize));if(AE){n=Math.max(8,8*Math.round(n/8))}AH=AL.lines}else{n=t;AH=1}var d=W.create("span",E.ALTERNATE);var AX=AF.cloneNode(true);AF.parentNode.appendChild(AX);for(var AU=0,AT=AX.childNodes.length;AU<AT;AU++){var m=AX.childNodes[AU];if(!/^(style|script)$/i.test(m.nodeName)){d.appendChild(m.cloneNode(true))}}if(x.modifyContent){x.modifyContent(AX,x.selector)}if(x.modifyCss){AC=x.modifyCss(AR,AX,x.selector)}var p=P(AX,h,x.uriEncode);AX.parentNode.removeChild(AX);if(x.modifyContentString){p.text=x.modifyContentString(p.text,x.selector)}if(p.text==""){continue}var AK=Math.round(AH*V(n,s)*n)+this.FLASH_PADDING_BOTTOM+r;if(AH>1&&AP){AK+=Math.round((AH-1)*AP)}var AB=AD?c:"100%";var AI="sIFR_replacement_"+L++;var AQ=["id="+AI,"content="+A.escape(p.text),"width="+c,"renderheight="+AK,"link="+A.escape(p.primaryLink.href||""),"target="+A.escape(p.primaryLink.target||""),"size="+n,"css="+A.escape(AC),"cursor="+k,"tunewidth="+(x.tuneWidth||0),"tuneheight="+r,"offsetleft="+(x.offsetLeft||""),"offsettop="+(x.offsetTop||""),"fitexactly="+q,"preventwrap="+AS,"forcesingleline="+AN,"antialiastype="+(x.antiAliasType||""),"thickness="+(x.thickness||""),"sharpness="+(x.sharpness||""),"kerning="+o,"gridfittype="+AJ,"flashfilters="+v,"opacity="+AW,"blendmode="+(x.blendMode||""),"selectable="+(x.selectable==null||AG!=""&&!sIFR.ua.macintosh&&sIFR.ua.gecko&&sIFR.ua.geckoVersion>=sIFR.ua.parseVersion("1.9")?"true":x.selectable===true),"fixhover="+(this.fixHover===true),"events="+z,"delayrun="+G.brokenFlashIE.fixFlash,"version="+this.VERSION];var y=A.encodeVars(AQ);var g=new K(O,AI,AQ,AD,{onReplacement:x.onReplacement,onRollOver:x.onRollOver,onRollOut:x.onRollOut,onRelease:x.onRelease});g.movie=X.create(sIFR,G.brokenFlashIE,AF,T.fixFocus&&x.fixFocus,AI,w,AB,AK,y,AG,e);this.replacements.push(g);this.replacements[AI]=g;if(x.selector){if(!this.replacements[x.selector]){this.replacements[x.selector]=[g]}else{this.replacements[x.selector].push(g)}}d.setAttribute("id",AI+"_alternate");AF.appendChild(d);W.addClass(E.REPLACED,AF)}G.fragmentIdentifier.restore()};this.getReplacementByFlashElement=function(d){for(var c=0;c<O.replacements.length;c++){if(O.replacements[c].id==d.getAttribute("id")){return O.replacements[c]}}};this.redraw=function(){for(var c=0;c<O.replacements.length;c++){O.replacements[c].resetMovie()}};this.prepareClearReferences=function(){G.brokenFlashIE.prepareClearReferences()};this.clearReferences=function(){G.brokenFlashIE.clearReferences();G=null;J=null;delete O.replacements};function C(){if(O.domains.length==0){return true}var d=A.domain();for(var c=0;c<O.domains.length;c++){if(A.domainMatches(d,O.domains[c])){return true}}return false}function a(){if(document.location.protocol=="file:"){if(O.debug){O.errors.fire("isFile")}return true}return false}function M(c){if(T.ie&&c.charAt(0)=="/"){c=window.location.toString().replace(/([^:]+)(:\/?\/?)([^\/]+).*/,"$1$2$3")+c}return c}function V(d,e){for(var c=0;c<e.length;c+=2){if(d<=e[c]){return e[c+1]}}return e[e.length-1]||1}function B(g){var e=[];for(var d in g){if(g[d]==Object.prototype[d]){continue}var c=g[d];d=[d.replace(/filter/i,"")+"Filter"];for(var f in c){if(c[f]==Object.prototype[f]){continue}d.push(f+":"+A.escape(A.toJson(c[f],A.toHexString)))}e.push(d.join(","))}return A.escape(e.join(";"))}function Z(d){var e=Z.viewport;var c=W.getViewport();if(e&&c.width==e.width&&c.height==e.height){return}Z.viewport=c;if(O.replacements.length==0){return}if(Z.timer){clearTimeout(Z.timer)}Z.timer=setTimeout(function(){delete Z.timer;for(var f=0;f<O.replacements.length;f++){O.replacements[f].resize()}},200)}function I(f){var g=W.getComputedStyle(f,"fontSize");var d=g.indexOf("px")==-1;var e=f.innerHTML;if(d){f.innerHTML="X"}f.style.paddingTop=f.style.paddingBottom=f.style.borderTopWidth=f.style.borderBottomWidth="0px";f.style.lineHeight="2em";f.style.display="block";g=d?f.offsetHeight/2:parseInt(g,10);if(d){f.innerHTML=e}var c=Math.round(f.offsetHeight/(2*g));f.style.paddingTop=f.style.paddingBottom=f.style.borderTopWidth=f.style.borderBottomWidth=f.style.lineHeight=f.style.display="";if(isNaN(c)||!isFinite(c)||c==0){c=1}return{fontSize:g,lines:c}}function P(c,g,s){s=s||A.uriEncode;var q=[],m=[];var k=null;var e=c.childNodes;var o=false,p=false;var j=0;while(j<e.length){var f=e[j];if(f.nodeType==3){var t=A.textTransform(g,A.normalize(f.nodeValue)).replace(/</g,"&lt;");if(o&&p){t=t.replace(/^\s+/,"")}m.push(t);o=/\s$/.test(t);p=false}if(f.nodeType==1&&!/^(style|script)$/i.test(f.nodeName)){var h=[];var r=f.nodeName.toLowerCase();var n=f.className||"";if(/\s+/.test(n)){if(n.indexOf(E.CLASS)>-1){n=n.match("(\\s|^)"+E.CLASS+"-([^\\s$]*)(\\s|$)")[2]}else{n=n.match(/^([^\s]+)/)[1]}}if(n!=""){h.push('class="'+n+'"')}if(r=="a"){var d=s(f.getAttribute("href")||"");var l=f.getAttribute("target")||"";h.push('href="'+d+'"','target="'+l+'"');if(!k){k={href:d,target:l}}}m.push("<"+r+(h.length>0?" ":"")+h.join(" ")+">");p=true;if(f.hasChildNodes()){q.push(j);j=0;e=f.childNodes;continue}else{if(!/^(br|img)$/i.test(f.nodeName)){m.push("</",f.nodeName.toLowerCase(),">")}}}if(q.length>0&&!f.nextSibling){do{j=q.pop();e=f.parentNode.parentNode.childNodes;f=e[j];if(f){m.push("</",f.nodeName.toLowerCase(),">")}}while(j==e.length-1&&q.length>0)}j++}return{text:m.join("").replace(/^\s+|\s+$|\s*(<br>)\s*/g,"$1"),primaryLink:k||{}}}};
var parseSelector=(function(){var B=/\s*,\s*/;var A=/\s*([\s>+~(),]|^|$)\s*/g;var L=/([\s>+~,]|[^(]\+|^)([#.:@])/g;var F=/(^|\))[^\s>+~]/g;var M=/(\)|^)/;var K=/[\s#.:>+~()@]|[^\s#.:>+~()@]+/g;function H(R,P){P=P||document.documentElement;var S=R.split(B),X=[];for(var U=0;U<S.length;U++){var N=[P],W=G(S[U]);for(var T=0;T<W.length;){var Q=W[T++],O=W[T++],V="";if(W[T]=="("){while(W[T++]!=")"&&T<W.length){V+=W[T]}V=V.slice(0,-1)}N=I(N,Q,O,V)}X=X.concat(N)}return X}function G(N){var O=N.replace(A,"$1").replace(L,"$1*$2").replace(F,D);return O.match(K)||[]}function D(N){return N.replace(M,"$1 ")}function I(N,P,Q,O){return(H.selectors[P])?H.selectors[P](N,Q,O):[]}var E={toArray:function(O){var N=[];for(var P=0;P<O.length;P++){N.push(O[P])}return N}};var C={isTag:function(O,N){return(N=="*")||(N.toLowerCase()==O.nodeName.toLowerCase())},previousSiblingElement:function(N){do{N=N.previousSibling}while(N&&N.nodeType!=1);return N},nextSiblingElement:function(N){do{N=N.nextSibling}while(N&&N.nodeType!=1);return N},hasClass:function(N,O){return(O.className||"").match("(^|\\s)"+N+"(\\s|$)")},getByTag:function(N,O){return O.getElementsByTagName(N)}};var J={"#":function(N,P){for(var O=0;O<N.length;O++){if(N[O].getAttribute("id")==P){return[N[O]]}}return[]}," ":function(O,Q){var N=[];for(var P=0;P<O.length;P++){N=N.concat(E.toArray(C.getByTag(Q,O[P])))}return N},">":function(O,R){var N=[];for(var Q=0,S;Q<O.length;Q++){S=O[Q];for(var P=0,T;P<S.childNodes.length;P++){T=S.childNodes[P];if(T.nodeType==1&&C.isTag(T,R)){N.push(T)}}}return N},".":function(O,Q){var N=[];for(var P=0,R;P<O.length;P++){R=O[P];if(C.hasClass([Q],R)){N.push(R)}}return N},":":function(N,P,O){return(H.pseudoClasses[P])?H.pseudoClasses[P](N,O):[]}};H.selectors=J;H.pseudoClasses={};H.util=E;H.dom=C;return H})();
 
/* End - 409 - JS sIFR rev. 206 *//* Begin - 410 - JS sIFR Config rev. 351 */


/*****************************************************************************
It is adviced to place the sIFR JavaScript calls in this file, keeping it
separate from the `sifr.js` file. That way, you can easily swap the `sifr.js`
file for a new version, while keeping the configuration.
You must load this file *after* loading `sifr.js`.
That said, you're of course free to merge the JavaScript files. Just make sure
the copyright statement in `sifr.js` is kept intact.
*****************************************************************************/
// Make an object pointing to the location of the Flash movie on your web server.
// Try using the font name as the variable name, makes it easy to remember which
// object you're using. As an example in this file, we'll use Futura.
var triumphSifr = { src: 'http://assets1.triumphmotorcycles.com/swf/triumphSifr_european.swf' };
// Now you can set some configuration settings.
// See also <http://wiki.novemberborn.net/sifr3/JavaScript+Configuration>.
// One setting you probably want to use is `sIFR.useStyleCheck`. Before you do that,
// read <http://wiki.novemberborn.net/sifr3/DetectingCSSLoad>.
// sIFR.useStyleCheck = true;
// Next, activate sIFR:
sIFR.activate(triumphSifr);
sIFR.replace(triumphSifr, {
    selector: 'h1.bannerHeading',
    wmode: 'transparent',
    css: [
        '.sIFR-root { color: #ffffff; text-transform: uppercase; letter-spacing: 4; }'
    ]
});
sIFR.replace(triumphSifr, {
    selector: 'h1.mainHeadingLarge',
    wmode: 'transparent',
    css: [
        '.sIFR-root { color: #333333; text-transform: uppercase; letter-spacing: 4; }'
    ]
});

/* End - 410 - JS sIFR Config rev. 351 *//* Begin - 404 - JS Triumph rev. 803 */
/* THIS TEMPLATE INCLUDES PHP CODE THAT SHOULD NOT BE OVERWRITTEN! */

function swfEscape(s) {
    return s.replace('&', '%26').replace('=', '%3D');
}

function theClickedLink() {
    $('a[href^="https://www.my-triumph.net"]').click(function(){_gaq.push(['_link', $(this).attr("href")]); return false;}); 
    $('a[href^="https://www.my-triumph.net/sso/logout/"]').click(function(){TriumphSSO.logout();_gaq.push(['_link', $(this).attr("href")]); return false;});
}

$(document).ready(function() {
    theClickedLink();
    logoutLink.init();
    searchBox.init();
        introArea.init();
    bannerTabs();
    //addZindexes();
    //signposts();
    languagePopups();
    motorcycleRollover.init();
    motorcycleGallery.init();
    clothingLightbox.init();
    offersLightbox.init();
    multiMediaShowcase.init();
    motorcycleOverviewMediaCarouselGallery.init();
    myTriumph.init();
    formHintHandler.init('#emailPopout','Enter your email');
    slidingDoorSubmit.init();
    /* Top nav offset fix */
    $('#topNav ul.top li').eq(1).addClass('motorcyclesNav');
    
    if(!$.cookie('cookieConsent')){
        $.cookie('cookieConsent','true');
        $('#cookiePolicy').show();
        $('#cookiePolicy .close').click(function(){
            $('#cookiePolicy').hide();
        });
    }

});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*     */
/*                                            */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
 function calculateApproxDistance(pointA,pointB){
 
     /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
     /*  Latitude/longitude spherical geodesy formulae & scripts (c) Chris Veness 2002-2010            */
     /*   - www.movable-type.co.uk/scripts/latlong.html                                                */
     /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    // extend Number object with methods for converting degrees/radians
    /** Convert numeric degrees to radians */
    if (typeof(String.prototype.toRad) === "undefined") {
      Number.prototype.toRad = function() {
        return this * Math.PI / 180;
      }
    }
    
    /** Convert radians to numeric (signed) degrees */
    if (typeof(String.prototype.toDeg) === "undefined") {
      Number.prototype.toDeg = function() {
        return this * 180 / Math.PI;
      }
    }
    
    /** 
     * Format the significant digits of a number, using only fixed-point notation (no exponential)
     * 
     * @param   {Number} precision: Number of significant digits to appear in the returned string
     * @returns {String} A string representation of number which contains precision significant digits
     */
    if (typeof(String.prototype.toDeg) === "undefined") {
      Number.prototype.toPrecisionFixed = function(precision) {
        var numb = this < 0 ? -this : this;  // can't take log of -ve number...
        var sign = this < 0 ? '-' : '';
        
        if (numb == 0) { n = '0.'; while (precision--) n += '0'; return n };  // can't take log of zero
      
        var scale = Math.ceil(Math.log(numb)*Math.LOG10E);  // no of digits before decimal
        var n = String(Math.round(numb * Math.pow(10, precision-scale)));
        if (scale > 0) {  // add trailing zeros & insert decimal as required
          l = scale - n.length;
          while (l-- > 0) n = n + '0';
          if (scale < n.length) n = n.slice(0,scale) + '.' + n.slice(scale);
        } else {          // prefix decimal and leading zeros if required
          while (scale++ < 0) n = '0' + n;
          n = '0.' + n;
        }
        return sign + n;
      }
    }
            
     
     var lat1 = pointA.lat;
     var lon1 = pointA.lng;
     
     var lat2 = pointB.lat;
     var lon2 = pointB.lng;
     
     var R = 6371; // km
     var dLat = (lat2-lat1).toRad();
     var dLon = (lon2-lon1).toRad(); 
     var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
             Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
             Math.sin(dLon/2) * Math.sin(dLon/2); 
     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
     var d = R * c;
     return d;
     
 }
var myTriumph = {
    init:function(){
        if ($('#myDealerDistance').length) {
            var tmp = $('#myDealerDistance').html().split("|");
            var lat = Number(tmp[1]);
            var lng = Number(tmp[2]);
            var zip = tmp[3];
            
            if (zip) {
                var geocoder = new GClientGeocoder();
                geocoder.getLatLng(zip, function(point) {
                    var distance = Math.round(calculateApproxDistance({"lat":point.lat(),"lng":point.lng()},{"lat":lat,"lng":lng}) * 10) / 10;
                    if (distance > 99.9) { distance = Math.round(distance); }
                    $('#myDealerDistance').html(distance + ' Miles');
                });
            }
        }
        if ($('#myEvents').length) {
            var myEvents = '|';
            $('.eventDetailsSection').each(function(index){
                myEvents += $(this).attr('id').slice(1) + '|';
            });
            $.cookie('triumphMyEvents', myEvents);
        }
    }
}


var logoutLink = {
    init:function(){
    
        if ($.cookie('triumphAuthenticate')) {
            $('#login').addClass('displayNone');
            $('#logout').removeClass('displayNone');
            $('#makeMyDealer').removeClass('displayNone');
            if ($('#makeMyEvent').length) { // Event page
                var eventId = $('#makeMyEvent').html().split(" ")[1];
                var href = "https://www.my-triumph.net?addMyEvent=" + eventId;
                var text = 'Add To My Events';
                var myEventIds = $.cookie('triumphMyEvents') ? $.cookie('triumphMyEvents') : '';
                if (myEventIds.indexOf('|' + eventId + '|') >= 0) { // already my event
                    href = "https://www.my-triumph.net?removeMyEvent=" + eventId;
                    text = 'Remove From My Events';
                }
                $('#makeMyEvent').html('<a href="' + href + '">' + text + '</a>');
                $('#makeMyEvent').removeClass('displayNone');
            }
        }
    }
}
var setGMap = {
    id: '',
    lat: '',
    lng: '',
    borderColour: '',
    mapHeight: '',
    mapZoom: 0,
    addControls: false,
    init:function(id,lat,lng,borderColour,mapHeight,mapZoom,addControls) {
    
        this.id             = id;
        this.lat             = lat;
        this.lng             = lng;
        this.borderColour    = borderColour;
        this.mapHeight         = mapHeight;
        this.mapZoom        = mapZoom;
        this.addControls    = addControls;
        if($('#' + this.id).length < 0) return;
        
        this.setHolderCSS();
        this.setMap();
    
    },
    setHolderCSS:function() {
    
        $('#' + this.id).css({ 
            'height' : this.mapHeight + 'px',  
            'border' : '1px solid ' + this.borderColour
        });
    
    },
    setMap:function() {
    
        if (GBrowserIsCompatible()) {
            var map = new GMap2(document.getElementById(this.id));
            
            if(this.addControls) {
                map.addControl(new GLargeMapControl());
                map.addControl(new GMapTypeControl());
            }
            
            map.setCenter(new GLatLng(this.lat,this.lng), this.mapZoom);
            
            // setup custom icon
            var iconNode         = new GIcon();    
            iconNode.image         = "http://assets1.triumphmotorcycles.com/images/static/dealer-icon.gif";
            iconNode.shadow     = ''; 
            iconNode.iconSize     = new GSize(42,48); 
            iconNode.shadowSize = new GSize(0,0);
            iconNode.iconAnchor = new GPoint(42,48); 
            
            var point            = new GLatLng(this.lat,this.lng);
            var markerOptions     = { icon: iconNode };
            
            var node = new GMarker(point,markerOptions);
            map.addOverlay(node);
        }
    }
}
var multiMediaShowcase = {
    showcaseName:     '#multiMediaShowcase',
    numItems:        0,
    thumbWidth:     80,
    sliderPos:         0,
    sliderWidth: 0,
    init:function() {
    
        if($(this.showcaseName).length < 1) return;
        this.numItems = $(this.showcaseName + ' #thumbs .slider a').length;    
        this.sliderWidth = ( this.thumbWidth + 3 ) * this.numItems;
        $(this.showcaseName + ' .slider').css({ width : this.sliderWidth + 'px' });

        this.addControls();
        this.addEvents();
    
    },
    addControls:function(){
    
        $(this.showcaseName + ' #thumbs').prepend('<a href="#" id="prev">&nbsp;</a>');    
        $(this.showcaseName + ' #thumbs').append('<a href="#" id="next">&nbsp;</a>');
        
    },
    addEvents:function() {
            
        var obj = this, videoImageRef;
            
        // Add Events for photo links
        $(this.showcaseName + ' .panel a.photo').click(function(){
        
            obj.hideHolders();
            $(obj.showcaseName + ' .photoHolder').css({ 'display' : 'block' });            
            $(obj.showcaseName + ' .photoHolder img').attr('src',this);
            
            return false;
            
        });    
        
        // Add Events for video links
        $(this.showcaseName + ' .panel a.video').click(function(ev){
        
            videoImageRef = $(this).parents('div.panel').find('span').text();
            
            obj.hideHolders();
            $(obj.showcaseName + ' .videoHolder').css({ 'display' : 'block' });
            $(obj.showcaseName + ' .videoHolder').html('<div id="video">' + this + '</div>');
            
            var flashvars     = { file: this, image: videoImageRef, autostart: false }
            var params         = { wmode:'transparent', allowfullscreen:'true', allowscriptaccess:'always' }, attributes = {}
            swfobject.embedSWF("http://assets1.triumphmotorcycles.com/swf/player.swf", "video", "368", "243", "9.0.0", false, flashvars, params, attributes);
            return false;
            
        });    
        
        // Add Events for youtube links
        $(this.showcaseName + ' .panel a.youtube').click(function(){
        
            var html = '';
        
            obj.hideHolders();
            $(obj.showcaseName + ' .youtubeHolder').css({ 'display' : 'block' });
            html += '<object style="height:243px; width:368px">';
            html += '<param name="movie" value="' + this + '" />'
            html += '<param name="allowFullScreen" value="true" />'
            html += '<param name="allowScriptAccess" value="always" />'
            html += '<embed src="' + this + '" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="368" height="243">';
            html += '</object>';
            $(obj.showcaseName + ' .youtubeHolder').html(html);
            return false;
            
        });    
        
        // Add carousel controls
        $(this.showcaseName + ' #thumbs #next').click(function(ev){
            if(obj.sliderPos > 0 - ((obj.numItems - 4) * obj.thumbWidth)) {
                obj.sliderPos -= (obj.thumbWidth + 3) * 4;
                $(obj.showcaseName + ' .slider').css({ 'left' : obj.sliderPos + 'px' });
            }
            $(this).blur();
            return false;
        });
        
        $(this.showcaseName + ' #thumbs #prev').click(function() {
            if(obj.sliderPos != 0) {            
                obj.sliderPos += (obj.thumbWidth + 3) * 4;            
                $(obj.showcaseName + ' .slider').css({ 'left' : obj.sliderPos + 'px' });                
            }
            
            $(this).blur();
            return false;
        
        });
            
    },
    hideHolders:function() {
    
        $(this.showcaseName + ' .photoHolder').css({ 'display' : 'none'});
        $(this.showcaseName + ' .videoHolder').css({ 'display' : 'none'});    
        $(this.showcaseName + ' .youtubeHolder').css({ 'display' : 'none'});    
    
    }
}
var motorcycleGallery = {
    
    galleryName:    '#motorcycleOverviewGallery',
    animRate: 1000,
    
    init:function() {
        //$(this.galleryName + ' .thumbs .slider ').css({ 'top' : '-212px' 
        var numPaints = $(".motorcycleThumbList").children().size();
        if(numPaints == 1){
            $(".motorcycleThumbList li a").css('cursor', 'default');
        }else{
            $(".motorcycleThumbList .active").remove();
        }
        
        if(numPaints <= 4){
            $('#upBtn').css('display','none');
            $('#downBtn').css('display','none');
        }
        
        this.addEvents();
    
    },
    addEvents:function() {
    
        var obj = this;
    
        // thumbnail onclicks
        $(obj.galleryName + ' ul.motorcycleThumbList li a').click(function(){
        
            $(obj.galleryName + ' .title').html($(this).attr('title'));
            $(obj.galleryName + ' .photoInner img').attr('src',$(this).attr('href'));
            
            $(this).blur();
            return false;
        
        });
        // down arrow clicked
        $(obj.galleryName + ' .thumbs #upBtn').click(function(){
        
            $(obj.galleryName + ' .slider').animate({ 'top' : '-212px' }, obj.animRate);
            return false;
            
        });
        
        // up arrow clicked
        $(obj.galleryName + ' .thumbs #downBtn').click(function(){
            
            $(obj.galleryName + ' .slider').animate({ 'top' : '0px' }, obj.animRate);
            return false;
            
        });
        
    }
    
}
var searchBox = {
    init:function(){
    
        this.submitHov();
        this.searchFieldGreyout();
    
    },
    submitHov:function(){
        
        $('#submit').hover(
            function() {
                $(this).attr({ src: "http://assets1.triumphmotorcycles.com/images/static/search-go-hover.gif" });
            },
            function() {
                $(this).attr({ src: "http://assets1.triumphmotorcycles.com/images/static/search-go.gif" });
            }
        );
    
    },
    searchFieldGreyout:function(){
    
        var value;
    
        $('#search input[type="text"]').addClass("idleField");
     
        $('#search input[type="text"]').focus(function() {  
            $(this).removeClass("idleField").addClass("focusField");  
            this.value = '';
        });
        $('#search input[type="text"]').blur(function() {
            if(this.value.length == 0){
                $(this).removeClass("focusField").addClass("idleField"); 
                this.value ='Search'; 
            }
        });
    }
}
var newsletter = {
    init:function(){
        this.addEvents();
    },
    addEvents:function(){
    
        // newsletter popup
        $('#newsletterSignupDropDown').click(function(){
        $('#newsLetter').slideDown('fast');
        $('#newsletterSignupDropDown').addClass('active');
            return false;
        });
       
        $('#newsLetter .close a').click(function(){
            $('#newsLetter').slideUp('fast');
            $('#newsletterSignupDropDown').removeClass('active');
            return false;
        });
        // Newsletter button hover
        $('#nsubmit').hover(
            function() {
                $(this).attr({ src: "http://assets1.triumphmotorcycles.com" });
            },
            function() {
                $(this).attr({ src: "http://assets1.triumphmotorcycles.com" });
            }
        );
    }
}
var introArea = {
    init:function() {
    
        $.fn.cycle.updateActivePagerLink = function(pager, currSlideIndex) {
            $(pager).find('li').removeClass('active').filter('li:eq(' + currSlideIndex + ')').addClass('active');
        };
        $('#callTos').cycle({
            fx:'fade',
            speed:500,
            pause:0,
            timeout:5000,
            pager:'#nav',
            pagerAnchorBuilder: function(idx, slide) {
                return'#nav li:eq(' + idx + ')';
            }
        });
    
    }
}
function bannerTabs() {
    var openedID = "none";
    var newTabAllowed = true;
    
    //adjust doc height to allow for tabbedContent to not trigger scrollbars in FireFox as looks pretty ugly when revealing
    var heightAdjust = $(document).height(); 
    $('#homePage #container1').css('height', heightAdjust + 100 + 'px');
    
    // show the tabbedContent onclick - hover far too busy
    $('#homePage #banner #tabs a').click(function() {
        //opened=true;
        tabID = $(this).attr("href");
        $('#banner #tabs a').removeClass('active');
        $(this).addClass('active');
        if (tabID != openedID) {
            if(newTabAllowed)
            {
                newTabAllowed = false;
                $('#tabbedContent ul li#' + openedID).hide();
                $('#tabbedContent ul li#' + tabID).slideDown({
                    duration: 700,
                    easing: "easeOutExpo",
                    complete: function() {
                        newTabAllowed = true;
                        $('#tabbedContent').addClass('opened');
                    }
                });
                openedID = tabID;
            }                       
        }
        else
        {
            $('#tabbedContent').removeClass('opened');
            $('#tabbedContent ul li#' + openedID).slideUp('fast');
            $(this).removeClass('active');
            openedID = "none";                
        }         
        return false
    });
}
/***************************************************************************************************/
/*********************** START REORDER Z-INDEX (IE6 requirement for pop out content) ***************/
/***************************************************************************************************/
function addZindexes() {
    var zIndexNumber = 1000;
    $('div').each(function() {
        $(this).css('zIndex', zIndexNumber);
        zIndexNumber -= 10;
    });
    $('div#tabs').css('zIndex', 1200);
    $('div#newsLetter').css('zIndex', 1201);
    $('div#languageSelectionBox').css('zIndex', 1202);
}
/***************************************************************************************************/
/***************************************** START SIGNPOSTS *****************************************/
/***************************************************************************************************/
function signposts() {
    var animatingSignposts = false;
    var bigWidth = 214;
    var bigHeight = 137;
    var bigTitleSize = '1.4em';
    var bigRight = 0;
    var medWidth = 190;
    var medHeight = 123;
    var medTitleSize = '1.3em';
    var smWidth = 161;
    var smHeight = 104;
    var smTitleSize = '1.2em';
    
    function growBigger(biggest, medium, small) {
        animatingSignposts = true;
        $(biggest)
            .animate({ width: bigWidth, height: bigHeight, marginTop: 0}, function() {
                animatingSignposts = false;
                }
             )
            .find(".content")
            .animate({ width: bigWidth, height: bigHeight })
            .end()
            .find("img")
            .animate({ width: bigWidth, height: bigHeight })
            .end()
            .find("h2")
            .css({ fontSize: bigTitleSize })
            .end()
        $(medium)
            .animate({ width: medWidth, height: medHeight, marginTop: '6px'})
            .find(".content")
            .animate({ width: medWidth, height: medHeight })
            .end()
            .find("img")
            .animate({ width: medWidth, height: medHeight })
            .end()
            .find("h2")
            .css({ fontSize: medTitleSize })
            .end()
        $(small)
            .animate({ width: smWidth, height: smHeight, marginTop: '17px'})
            .find(".content")
            .animate({ width: smWidth, height: smHeight })
            .end()
            .find("img")
            .animate({ width: smWidth, height: smHeight })
            .end()
            .find("h2")
            .css({ fontSize: smTitleSize })
            .end()
    }
   //trigger hover states
   $('#signPosts #post1').hover(function(){
        growBigger('#post1','#post2','#post3, #post4, #post5');$(this).css('cursor','pointer');
   }); 
   $('#signPosts #post2').hover(function(){
        growBigger('#post2','#post3, #post1','#post4, #post5');$(this).css('cursor','pointer');
   });
   $('#signPosts #post3').hover(function(){
        growBigger('#post3','#post4, #post2','#post1, #post5');$(this).css('cursor','pointer');
   });
   $('#signPosts #post4').hover(function(){
        growBigger('#post4','#post5, #post3','#post1, #post2');$(this).css('cursor','pointer');
   });
   $('#signPosts #post5').hover(function(){
        growBigger('#post5','#post4','#post3, #post2, #post1');$(this).css('cursor','pointer');
   });
   //trigger block anchors
   $('#signPosts #post1, #signPosts #post2, #signPosts #post3, #signPosts #post4, #signPosts #post5').click(function(){
        window.location = $(this).find("a").attr("href");
   });
}
/***************************************************************************************************/
/******************************** START LANGUAGE SELECTION POPS *************************************/
/***************************************************************************************************/
function languagePopups() {
    var pos1Top = '151px';
    var pos1Left = '10px';
    var pos2Bottom = '156px';
    var pos2Right = '10px';
    var languageOptionsOpen = false;
       
    // reveal from crumbtrail flag
    $('#crumbtrail .flag').click(function(){
        if(!languageOptionsOpen)
        {
            $('#languageSelectionBox').css('position','absolute');
            $('#languageSelectionBox').css('bottom','auto');
            $('#languageSelectionBox').css('right','auto');
            $('#languageSelectionBox').css('top',pos1Top);
            $('#languageSelectionBox').css('left',pos1Left);
            $('#languageSelectionBox').slideDown('slow');
            languageOptionsOpen = true;
        }
        else
        {
            $('#languageSelectionBox').hide();
            languageOptionsOpen = false;
        }            
        return false;
    }); 
    //reveal from footer link
    $('#languageSelection .flag').click(function(){
        if(!languageOptionsOpen)
        {
            $('#languageSelectionBox').css('position','absolute');
            $('#languageSelectionBox').css('top','auto');
            $('#languageSelectionBox').css('left','auto');
            $('#languageSelectionBox').css('bottom',pos2Bottom);
            $('#languageSelectionBox').css('right',pos2Right);
            $('#languageSelectionBox').show('slow');
            languageOptionsOpen = true;
        }
        else
        {
            $('#languageSelectionBox').hide();
            languageOptionsOpen = false;
        }   
        return false;
    });
}
var motorcycleRollover = {
    sections: 0,
    init:function() {
        this.sections = $('#motorcycleSectionList .item').length;
        if(!this.sections) {
            return false;
        }
        this.addEvents();
    },
    addEvents:function(){
        $('#motorcycleSectionList .item a.bikeRollover').each(function() {
        
            $(this).mouseover(function() {
                
                var index = $("#motorcycleSectionList .item a.bikeRollover").index(this);
                
                // first set all images to display none
                $(this).parents('div.item').find('img').css({ 'display' : 'none'});
                // now set active image to display block
                $('#motorcycleSectionList .item .image img.bikeImage').eq(index).css({ 'display' : 'block' });
                // remove 'active' classnames from all links bikeRollover links
                $(this).parents('div.copy').find('a.bikeRollover').removeClass('active');
                
                // add 'active' classname to active bike rollover    
                $(this).addClass('active');
                return false;            
            });
            
        });
        
    }
}
var clothingLightbox = {                
    init:function() {                
    if($('.clothingIframe').length < 1) return;                
        $(".clothingIframe").colorbox({width:"1010px", height:"695px", iframe:true, scrolling: false});                
    }            
}
var offersLightbox = {
    init:function(){
        if($('#swfHookContainer').length < 1) return;
        $('#swfHookContainer').css({ display: 'none'});
        $('#swfHook').css({ width: '720px', height: '600px' });
    
        $('a[class="offersLaunchBtn"]').colorbox({
            inline: true, 
            href: "#swfHook",
            scrolling : false,
            onComplete:function(){ 
                var flashvars     = {}
                var params         = { wmode:'transparent', allowfullscreen:'true', allowscriptaccess:'always' }, attributes = {};
                swfobject.embedSWF($(this).attr('href'), 'swfHook', "720", "600", "9.0.0", false, flashvars, params, attributes);
            }
        });
    }
}
function ie6NavHover() {
    var sfEls = document.getElementById("topNav").getElementsByTagName("li");
    for (var i=0; i<sfEls.length; i++) {
        sfEls[i].onmouseover=function() {
            this.className+=" over";
        }
        sfEls[i].onmouseout=function() {
            this.className=this.className.replace(new RegExp(" over\\b"), "");
        }
    }
}
/***************************************************************************************************/
/*********************** START REORDER Z-INDEX (IE6 requirement for pop out content) ***************/
/***************************************************************************************************/
function addZindexes() {
    var zIndexNumber = 1000;
    $('div').each(function() {
        $(this).css('zIndex', zIndexNumber);
        zIndexNumber -= 10;
    });
    $('div#tabs').css('zIndex', 1200);
    $('div#newsLetter').css('zIndex', 1201);
    $('div#languageSelectionBox').css('zIndex', 1202);
}
/***************************************************************************************************/
/***************************************** START SIGNPOSTS *****************************************/
/***************************************************************************************************/
function signposts() {
    var animatingSignposts = false;
    var bigWidth = 214;
    var bigHeight = 137;
    var bigTitleSize = '1.4em';
    var bigRight = 0;
    var medWidth = 190;
    var medHeight = 123;
    var medTitleSize = '1.3em';
    var smWidth = 161;
    var smHeight = 104;
    var smTitleSize = '1.2em';
    
    function growBigger(biggest, medium, small) {
        animatingSignposts = true;
        $(biggest)
            .animate({ width: bigWidth, height: bigHeight, marginTop: 0}, function() {
                animatingSignposts = false;
                }
             )
            .find(".content")
            .animate({ width: bigWidth, height: bigHeight })
            .end()
            .find("img")
            .animate({ width: bigWidth, height: bigHeight })
            .end()
            .find("h2")
            .css({ fontSize: bigTitleSize })
            .end()
        $(medium)
            .animate({ width: medWidth, height: medHeight, marginTop: '6px'})
            .find(".content")
            .animate({ width: medWidth, height: medHeight })
            .end()
            .find("img")
            .animate({ width: medWidth, height: medHeight })
            .end()
            .find("h2")
            .css({ fontSize: medTitleSize })
            .end()
        $(small)
            .animate({ width: smWidth, height: smHeight, marginTop: '17px'})
            .find(".content")
            .animate({ width: smWidth, height: smHeight })
            .end()
            .find("img")
            .animate({ width: smWidth, height: smHeight })
            .end()
            .find("h2")
            .css({ fontSize: smTitleSize })
            .end()
    }
   //trigger hover states
   $('#signPosts #post1').hover(function(){
        growBigger('#post1','#post2','#post3, #post4, #post5');$(this).css('cursor','pointer');
   }); 
   $('#signPosts #post2').hover(function(){
        growBigger('#post2','#post3, #post1','#post4, #post5');$(this).css('cursor','pointer');
   });
   $('#signPosts #post3').hover(function(){
        growBigger('#post3','#post4, #post2','#post1, #post5');$(this).css('cursor','pointer');
   });
   $('#signPosts #post4').hover(function(){
        growBigger('#post4','#post5, #post3','#post1, #post2');$(this).css('cursor','pointer');
   });
   $('#signPosts #post5').hover(function(){
        growBigger('#post5','#post4','#post3, #post2, #post1');$(this).css('cursor','pointer');
   });
   //trigger block anchors
   $('#signPosts #post1, #signPosts #post2, #signPosts #post3, #signPosts #post4, #signPosts #post5').click(function(){
        window.location = $(this).find("a").attr("href");
   });
}
/***************************************************************************************************/
/******************************** START LANGUAGE SELECTION POPS *************************************/
/***************************************************************************************************/
function languagePopups() {
    var pos1Top = '151px';
    var pos1Left = '10px';
    var pos2Bottom = '156px';
    var pos2Right = '10px';
    var languageOptionsOpen = false;
       
    // reveal from crumbtrail flag
    $('#crumbtrail .flag').click(function(){
        if(!languageOptionsOpen)
        {
            $('#languageSelectionBox').css('position','absolute');
            $('#languageSelectionBox').css('bottom','auto');
            $('#languageSelectionBox').css('right','auto');
            $('#languageSelectionBox').css('top',pos1Top);
            $('#languageSelectionBox').css('left',pos1Left);
            $('#languageSelectionBox').slideDown('slow');
            languageOptionsOpen = true;
        }
        else
        {
            $('#languageSelectionBox').hide();
            languageOptionsOpen = false;
        }            
        return false;
    }); 
    //reveal from footer link
    $('#languageSelection .flag').click(function(){
        if(!languageOptionsOpen)
        {
            $('#languageSelectionBox').css('position','absolute');
            $('#languageSelectionBox').css('top','auto');
            $('#languageSelectionBox').css('left','auto');
            $('#languageSelectionBox').css('bottom',pos2Bottom);
            $('#languageSelectionBox').css('right',pos2Right);
            $('#languageSelectionBox').show('slow');
            languageOptionsOpen = true;
        }
        else
        {
            $('#languageSelectionBox').hide();
            languageOptionsOpen = false;
        }   
        return false;
    });
}
var motorcycleRollover = {
    sections: 0,
    init:function() {
        this.sections = $('#motorcycleSectionList .item').length;
        if(!this.sections) {
            return false;
        }
        this.addEvents();
    },
    addEvents:function(){
        $('#motorcycleSectionList .item a.bikeRollover').each(function() {
        
            $(this).mouseover(function() {
                
                var index = $("#motorcycleSectionList .item a.bikeRollover").index(this);
                
                // first set all images to display none
                $(this).parents('div.item').find('img').css({ 'display' : 'none'});
                // now set active image to display block
                $('#motorcycleSectionList .item .image img.bikeImage').eq(index).css({ 'display' : 'block' });
                // remove 'active' classnames from all links bikeRollover links
                $(this).parents('div.copy').find('a.bikeRollover').removeClass('active');
                
                // add 'active' classname to active bike rollover    
                $(this).addClass('active');
                return false;            
            });
            
        });
        
    }
}
var clothingLightbox = {                
    init:function() {                
    if($('.clothingIframe').length < 1) return;                
        $(".clothingIframe").colorbox({width:"1010px", height:"695px", iframe:true, scrolling: false});                
    }            
}
function ie6NavHover() {
    var sfEls = document.getElementById("topNav").getElementsByTagName("li");
    for (var i=0; i<sfEls.length; i++) {
        sfEls[i].onmouseover=function() {
            this.className+=" over";
        }
        sfEls[i].onmouseout=function() {
            this.className=this.className.replace(new RegExp(" over\\b"), "");
        }
    }
}
/***************************************************************************************************/
/******************************** START MOTORCYCLE OVERVIEW MEDIA GALLERY **************************/
/***************************************************************************************************/

var motorcycleOverviewMediaCarouselGallery = {
        
        slideShow:'',
        category_id:1,
        item_id:1,
        showContainer:"#motorcycle-overview-gallery-container",
        content:[],
        enabled:[],
        newHtml:"",
        ContentTabs:{photos:{},videos:{},screensavers:{},wallpapers:{}},
    
        removeSlideShow: function(){
    
            $("#motorcycle-overview-gallery-container").empty();
            $("#pointer").remove();
        
        },
                
        getSlideShowHtml: function(showContent){
    
            var mainHTML = "";
            var mainHTML = '<ul id="gallery">\n';
        
            for(var i in showContent){
        
                    mainHTML += '<li>\n';
                    mainHTML += showContent[i].thumbnail;
                    mainHTML += '\n<div class="panel-content">\n';
                    mainHTML += showContent[i].image;
                    mainHTML += '\n<div class="panel-overlay">\n';
                    mainHTML += '<h2 class="panel-inner-content" >' + showContent[i].overlayContentTitle + '</h2>\n';
                    mainHTML += '<p class="panel-inner-content">' + showContent[i].overlayContent + '</p>\n';
                    mainHTML += '</div>\n';
                    mainHTML += '</div>\n';
                    mainHTML += '</li>\n';
                    
            }//end for loop
        
            mainHTML += "</ul>\n";
        
            return mainHTML;
        },
        
        disableTabEmptyContent: function(){
            
            for(var i in this.content){
                
                 if( $(this.content[i]).size() < 1 ){
                     
                     switch(i){
                     
                         case "photos":
                             $("#multimedia-gallery-tabs").tabs( "disable" , 0);
                             this.ContentTabs.photos.disabled = true;
                             break;
                         case "videos":
                             $("#multimedia-gallery-tabs").tabs( "disable" , 1);
                             this.ContentTabs.videos.disabled = true;
                             break;
                         case "screensavers":
                             $("#multimedia-gallery-tabs").tabs( "disable" , 2);
                             this.ContentTabs.screensavers.disabled = true;
                             break;
                         case "wallpapers":
                             $("#multimedia-gallery-tabs").tabs( "disable" , 3);
                             this.ContentTabs.wallpapers.disabled = true;
                             break;
                     
                     }
                     
                }else if( $(this.content[i]).size() > 0 ){
                    
                    switch(i){
                     
                     case "photos":
                         this.ContentTabs.photos.enabled = true;
                         break;
                     case "videos":
                         this.ContentTabs.videos.enabled = true;
                         break;
                     case "screensavers":
                         this.ContentTabs.screensavers.enabled = true;
                         break;
                     case "wallpapers":
                         this.ContentTabs.wallpapers.enabled = true;
                         break;
                 
                 }
                    
                }
            }
            
            
            
        },
        createSlideShow: function(containerElementId){
            
            slideShow =  $(containerElementId).galleryView({
                panel_width: 717,
                panel_height: 477,
                frame_width: 110,
                frame_height: 110,
                start_frame: 3,
                transition_interval: 9999999
                
            });
        
            //hack to set the image paths for next and prev buttons
            $("img.nav-next").attr('src',"http://assets1.triumphmotorcycles.com/images/static/mcCarouselNext.gif").css({"top":500});
            $("img.nav-prev").attr('src',"http://assets1.triumphmotorcycles.com/images/static/mcCarouselPrev.gif").css({"top":500});
            
            //browser fix for ie8
            if($.browser.msie){
                if(    $.browser.version.substr(0,1) == 7){
                
                    $("img.nav-next").height(110).width(11);
                    $("img.nav-prev").height(110).width(11);
                    
                }else if( navigator.userAgent.indexOf('Trident')!==-1){
                        
                            $("li.frame").css("margin-top","11px");
                            $(".filmstrip").css("margin","1px 0px 4px 0px");
                            
                            $("img.nav-next").height(110).width(11);
                            $("img.nav-prev").height(110).width(11);
                        }
            }
        
        
        },
        replaceSlideShow: function(tabPanelElement,content){
            
            newHtml = this.getSlideShowHtml(content);
            this.removeSlideShow();
            $(this.showContainer).html( newHtml );
            this.createSlideShow("ul#gallery");
            $(tabPanelElement).append( $(this.showContainer) );
        },
        handleTabClick: function(tabPanelElement,tabIndex){
            
            var show = jQuery(this.showContainer);
            var newHtml;
            
            var s = tabPanelElement; //div#multimedia-gallery-tabs-2.ui-tabs-panel
        
            switch(tabIndex){
                case 0:
                        this.replaceSlideShow(tabPanelElement,this.content["photos"]);
                    break;
                case 1:
                        this.replaceSlideShow(tabPanelElement,this.content["videos"]);
                    break;
                case 2:
                        this.replaceSlideShow(tabPanelElement,this.content["screensavers"]);
                    break;
                case 3:
                        this.replaceSlideShow(tabPanelElement,this.content["wallpapers"]);
                    break;
            }    
            
        },
        construct: function(){
                
                jQuery('ul#motorcycleCarouselOverviewContainer').jcarousel({scroll:6,animation:'slow'});
                
                $("#multimedia-gallery-tabs").tabs();
                $("#multimedia-gallery-tabs").bind("tabsselect", function(event, ui) { 
        
                    motorcycleOverviewMediaCarouselGallery.handleTabClick(ui.panel,ui.index);
                        
                         $('a.media').media({
                                             width:717,
                                             height:430,
                                             bgColor: '#000000', 
                                             params: {allowscriptaccess: 'sameDomain' }
                                           });
        
                    });
                                                    
                    
                this.disableTabEmptyContent();
                
                if( this.ContentTabs.photos.enabled == true ){
                    this.newHtml = this.getSlideShowHtml(this.content["photos"]);
                    var tabCatId = "#multimedia-gallery-tabs-1";
                }else if( this.ContentTabs.videos.enabled == true ){
                    this.newHtml = this.getSlideShowHtml(this.content["videos"]);
                    var tabCatId = "#multimedia-gallery-tabs-2";
                }else if( this.ContentTabs.screensavers.enabled == true ){
                    this.newHtml = this.getSlideShowHtml(this.content["screensavers"]);
                    var tabCatId = "#multimedia-gallery-tabs-3";
                }else if( this.ContentTabs.wallpapers.enabled == true ){
                    this.newHtml = this.getSlideShowHtml(this.content["wallpapers"]);
                    var tabCatId = "#multimedia-gallery-tabs-4";
                }
                
                this.removeSlideShow();    
                $(this.showContainer).html( this.newHtml );
                $(tabCatId).append( $(this.showContainer) );
                $("#multimedia-gallery-tabs").tabs( "select" , tabCatId);
                this.createSlideShow("ul#gallery");
                
                
                $("#closeOverlay").click(function(event){ event.preventDefault();  $.fn.colorbox.close(); return false;});
            
                
                
                $(".motorcycle-overview-carousel-links").colorbox({ inline:true, scrolling: false, initialWidth: 400, initialHeight: 300,href:"#motorcycle-overview-gallery-frame"}, function(){ 
        
                             var category_item = $(this).attr('id');
                             var temp = category_item.split("_");
                             
                             category_id = parseInt(temp[0]);
                             item_id = parseInt(temp[1]);
                                 
                             
                             $(this).oneTime(10, function() {
                             
                                     var dummyContent = false;
                                 
                                     
                                     switch(category_id){
                                     
                                         case 1:
                                             category_index = "photos";
                                             dummyContent = motorcycleOverviewMediaCarouselGallery.content["videos"];
                                             motorcycleOverviewMediaCarouselGallery.content["videos"] = motorcycleOverviewMediaCarouselGallery.content["photos"];
                                             $("#multimedia-gallery-tabs").tabs( "enable" , 1);
                                             $("#multimedia-gallery-tabs").tabs( "select" , "#multimedia-gallery-tabs-2");
                                             $("#multimedia-gallery-tabs").tabs( "select" , "#multimedia-gallery-tabs-"+category_id);
                                             motorcycleOverviewMediaCarouselGallery.content["videos"] = dummyContent;
                                             break;
                                         case 2:
                                             category_index = "videos";
                                             dummyContent = motorcycleOverviewMediaCarouselGallery.content["photos"];
                                             motorcycleOverviewMediaCarouselGallery.content["photos"] = motorcycleOverviewMediaCarouselGallery.content["videos"];
                                             $("#multimedia-gallery-tabs").tabs( "enable" , 0);
                                             $("#multimedia-gallery-tabs").tabs( "select" , "#multimedia-gallery-tabs-1");
                                             $("#multimedia-gallery-tabs").tabs( "select" , "#multimedia-gallery-tabs-"+category_id);
                                             motorcycleOverviewMediaCarouselGallery.content["photos"] = dummyContent;
                                             break;
                                         case 3:
                                             category_index = "screensavers";
                                             dummyContent = motorcycleOverviewMediaCarouselGallery.content["videos"];
                                             motorcycleOverviewMediaCarouselGallery.content["videos"] = motorcycleOverviewMediaCarouselGallery.content["screensavers"];
                                             $("#multimedia-gallery-tabs").tabs( "enable" , 1);
                                             $("#multimedia-gallery-tabs").tabs( "select" , "#multimedia-gallery-tabs-2");
                                             $("#multimedia-gallery-tabs").tabs( "select" , "#multimedia-gallery-tabs-"+category_id);
                                             motorcycleOverviewMediaCarouselGallery.content["videos"] = dummyContent;
                                             break;
                                         case 4:
                                             category_index = "wallpapers";
                                             dummyContent = motorcycleOverviewMediaCarouselGallery.content["videos"];
                                             motorcycleOverviewMediaCarouselGallery.content["videos"] = motorcycleOverviewMediaCarouselGallery.content["wallpapers"];
                                             $("#multimedia-gallery-tabs").tabs( "enable" , 1);
                                             $("#multimedia-gallery-tabs").tabs( "select" , "#multimedia-gallery-tabs-2");
                                             $("#multimedia-gallery-tabs").tabs( "select" , "#multimedia-gallery-tabs-"+category_id);
                                             motorcycleOverviewMediaCarouselGallery.content["videos"] = dummyContent;
                                             break;
                                     
                                     }
                                          
                                
                                    motorcycleOverviewMediaCarouselGallery.disableTabEmptyContent();
                                    
                                       
                                      //hack a click on the list for the correct item id                      
                                      $(this).oneTime(2000, function() {
                                      
                                          var temp = "ul.filmstrip li:nth-child(" + item_id + ") div img";
                                          $(temp).trigger('click');
                                          
                                      });
                              
                              });
        
             });
            
        },
        setContent: function(){
            
            var newContent = [];
            newContent["videos"] = [];
            newContent["photos"] = [];
            newContent["screensavers"] = []; 
            newContent["wallpapers"] = [];
            //Build video content    
            
            if( $("li.mc_carousel_gallery_videos").size() > 0 ){
            
                $("li.mc_carousel_gallery_videos").each(function (index, value){
    
                    var overlayContentTitle = $(this).find("a img").attr("title");
                    var thumbnail = $.trim( $(this).find("a").html() );
                    var className = $(this).find("a").attr("class");
                        className = className.replace(/motorcycle-overview-carousel-links/gi,"");
                        className = $.trim( className.replace(/xmediax/gi,"media") );
    
                    var image = '<a href="' + $(this).find("a").attr("href") + '" class="' + className + '" alt=""></a>';
                    var overlayContent = "&nbsp;";
                    
                    newContent["videos"].push({
                                                    "image": image,
                                                    "overlayContentTitle": overlayContentTitle,
                                                    "overlayContent": overlayContent,
                                                    "thumbnail": thumbnail
                                                 });                
                });
            }
            
        
    
            if( $("li.mc_carousel_gallery_photos").size() > 0 ){
                
                $("li.mc_carousel_gallery_photos").each(function (index, value){
    
                    var overlayContentTitle = $(this).find("a img").attr("title");
                    var thumbnail = $.trim( $(this).find("a").html() );
                    var image = $.trim( $(this).find("a").attr("href") );
                    var overlayContent = "&nbsp;";
                    
                    newContent["photos"].push({
                                                    "image": '<img src="'+image+'" alt="" />',
                                                    "overlayContentTitle": overlayContentTitle,
                                                    "overlayContent": overlayContent,
                                                    "thumbnail": thumbnail
                                                 });                
                });
            }
    
    
            if( $("li.mc_carousel_gallery_screensavers").size() > 0 ){
            
                $("li.mc_carousel_gallery_screensavers").each(function (index, value){
    
                    var downloadLinkText = $(this).attr("title");
                    var overlayContentTitle = $(this).find("a img").attr("title");
                    var thumbnail = $.trim( $(this).find("a").html() );
                    var image = $.trim( $(this).find("a").attr("alt") );
                    var overlayContentLink = $.trim( $(this).find("a").attr("href")  );
                    var overlayContent = '<a class="gallery-download-link" href="' + overlayContentLink + '" >'+downloadLinkText+'<span class="gallery-download-icon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a>';
                    
                    newContent["screensavers"].push({
                                                    "image": '<img src="'+image+'" alt="" />',
                                                    "overlayContentTitle": overlayContentTitle,
                                                    "overlayContent": overlayContent,
                                                    "thumbnail": thumbnail
                                                 });                
                });
            }
    
    
            if( $("li.mc_carousel_gallery_wallpapers").size() > 0 ){
            
                $("li.mc_carousel_gallery_wallpapers").each(function (index, value){
    
                    var downloadLinkText = $(this).attr("title");
                    var overlayContentTitle = $(this).find("a img").attr("title");
                    var thumbnail = $.trim( $(this).find("a").html() );
                    var image = $.trim( $(this).find("a").attr("alt") );
                    var overlayContentLink = $.trim( $(this).find("a").attr("href")  );
                    var overlayContent = '<a class="gallery-download-link" href="' + overlayContentLink + '" >'+downloadLinkText+'<span class="gallery-download-icon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a>';
                    
                    newContent["wallpapers"].push({
                                                    "image": '<img src="'+image+'" alt="" />',
                                                    "overlayContentTitle": overlayContentTitle,
                                                    "overlayContent": overlayContent,
                                                    "thumbnail": thumbnail
                                                 });                
                });
            }
            
                
                
            
            
            
            //if(newContent.length > 0){
            if( ( $(newContent["photos"]).size() > 0 ) || ( $(newContent["videos"]).size() > 0 ) ||
                ( $(newContent["wallpapers"]).size() > 0 ) || ( $(newContent["screensavers"]).size() > 0 ) ){    
            
                this.content = newContent;
                return true;
                    
            }else{
                    return false;
                
                }
        },
        
        init: function(){

            if( $('#motorcycle-overview-gallery-frame').length > 0 ){
            
                return true;
            }else{
                    return false;
                
                }
        
        }
}
var formHintHandler = {
    init:function(elem,value){
        if($(elem).length < 1) return;
        this.addValue(elem,value);
        this.fieldFocus(elem,value);
        this.fieldBlur(elem,value);
    },
    addValue:function(elem,value){
    
        // check that value is not populated before adding hint text
        if($(elem).val() == ''){
            $(elem).val(value);
        }
    },
    fieldFocus:function(elem, value){
    
        // If form field has focus and the hint text is still in place remove the hint text
        $(elem).focus(function(){
            if($(this).val() == value){
                $(this).val('');
            }
        });
    },
    fieldBlur:function(elem, value){
    
        // If form field loses focus and the user didn't enter a value re-add the hint text
        $(elem).blur(function(){
            if($(this).val() == ''){
                $(this).val(value);
            }
        });
    
    }
}

var slidingDoorSubmit = {
    init:function(){
    
        if($('#slidingDoorSubmit').length < 0) return;
    
        $('#slidingDoorSubmit').click(function(){
            var elem;
            elem = $(this).parents('form');
            $(elem).submit();
            return false;
        });
    
    }
}

/* End - 404 - JS Triumph *//* Begin - 414 - JS Validate Forms rev. 631 */

/* Localisation values */
var selectYourTriumph =             "Select your Triumph";
var pleaseSelectYourTriumph =         "Please select your Triumph";
var typeYourVin =                     "Type your VIN";
var pleaseEnterYourVin =             "Please enter your VIN";
var selectYourTitle =                 "Select your title";
var pleaseEnterYourTitle =             "Please enter your title";
var typeYourFirstName =             "Type your first name";
var pleaseEnterYourFirstName =         "Please enter your first name";
var typeYourSurname =                 "Type your surname";
var pleaseEnterYourSurname =         "Please enter your surname";
var typeYourEmailAddress =             "Type your email address";
var pleaseEnterYourEmail =             "Please enter your email";
var thisAddressIsNotValid =         "This address is not valid";
var typeYourMobileNumber =             "Type your mobile number";
var pleaseEnterYourMobile =         "Please enter your mobile";
var typeYourAddressHere =             "Type your address here";
var pleaseEnterYourEmailAddress =     "Please enter your address";
var typeYourTownCity =                 "Type your town / city";
var pleaseEnterYourTownCity =         "Please enter a town / city";
var typeYourCountyState =             "Type your county / state";
var pleaseEnterACountryState =         "Please enter a county / state";
var typeYourPostcodeZip =             "Type your postcode / zip";
var pleaseEnterAPostcodeZip =         "Please enter a postcode / zip";
var selectYourCountry =             "Select your country";
var pleaseEnterACountry =             "Please enter a country";
var pleaseAgreeToTheTerms =         "Please agree to the terms";
var selectABrochureType =             "Select a brochure type";
var selectYourInterests =             "Select your interests";
var pleaseSelectAModel =             "Please select a model";
var pleaseSelectADate =             "Please select a date";
var selectYourDealer =                 "Select your dealer";
var pleaseSelectADealer =             "Please select a dealer";
var selectYourLicenseType =         "Select your license type";
var pleaseSelectALicenseType =         "Please select a license type";
var pleaseEnterYourBirthDate =         "Please enter your birth date";
var typeYourHomeNumber =             "Type your home number";
var pleaseEnterYourPhone =             "Please enter your phone";
var enterAValidEmailAddress =         "Enter a valid email address";
var pleaseEnterAPassword =             "Please enter a password";
var passwordMustBeAtLeast5Chars =     "Password must be at least 5 characters";
var firstnameMustBeAtLeast2Chars =     "First name must be at least 2 characters";
var surnameMustBeAtLeast2Chars =     "Surname must be at least 2 characters";
var nameMustBe30CharOrLess =         " Name must be 30 char or less";
var pleaseEnterYourLastname =         "Please enter your last name";
var pleaseCompleteTheForm =         "Please complete the form";

$(document).ready(function() {
    validateFormUpdateDetails();
    validateFormRequestBrochure();
    validateFormRequestRide();
    formUpdateDetails();
    formRequestBrochure();
    formRequestRide();
    myTriumphLoginForm.init();
    myTriumphForgotPassword.init();
    myTriumphRegisterForm.init();
    newsletterDropdown.init();
    newsletterForm.init();
    findDealerForm.init();
});
var inputHints = new Array();
/*************************** Standard Forms ******************************/
function formUpdateDetails(){
    if($("#formUpdateDetails").length < 1) return;
    initStandardForm();
    inputHints['triumphOwned'    ] = selectYourTriumph;
    inputHints['vin'             ] = typeYourVin;
    inputHints['title'            ] = selectYourTitle;
    inputHints['firstName'        ] = typeYourFirstName;
    inputHints['surname'        ] = typeYourSurname;
    inputHints['licenseType'    ] = selectYourLicenseType;
    inputHints['emailAddress'    ] = typeYourEmailAddress;
    inputHints['homePhone'        ] = typeYourHomeNumber;
    inputHints['mobilePhone'    ] = typeYourMobileNumber;
    inputHints['address1'        ] = typeYourAddressHere;
    inputHints['address2'        ] = typeYourAddressHere;
    inputHints['address3'        ] = typeYourAddressHere;
    inputHints['address4'        ] = typeYourAddressHere;
    inputHints['townCity'        ] = typeYourTownCity;
    inputHints['countyState'    ] = typeYourCountyState;
    inputHints['postcodeZip'    ] = typeYourPostcodeZip;
    inputHints['country'        ] = selectYourCountry;
    inputHints['preferredDealer'] = selectYourDealer;
}
function formRequestBrochure(){
    if($("#formRequestBrochure").length < 1) return;
    initStandardForm();
}
function formRequestRide(){
    if($("#formRequestRide").length < 1) return;
    initStandardForm();
}
function initStandardForm(){
    //Initialise: Load all input IDs into inputHints array
    $('#standardForm input:text, #standardForm select').each(function(){
        var inputElement = $(this);
        var inputId = inputElement.attr('id');
        var inputValue = inputElement.attr('value');
        inputHints[inputId] = inputValue;
    });                
    
    //On focus: Clear the input field value if it's still a hint
    $('#standardForm input:text, #standardForm select').focusin(function() {
        var inputElement = $(this);
        var inputId = inputElement.attr('id');
        var inputValue = inputElement.attr('value');
        
        if(inputValue == inputHints[inputId]){
            inputElement.attr('value','');
        }
    });
    
    //On focus Out: Put the hint back in if the user didn't type anything
    $('#standardForm input:text, #standardForm select').focusout(function() {
        var inputElement = $(this);
        var inputId = inputElement.attr('id');
        var inputValue = inputElement.attr('value');
        
        if(inputValue == ''){
            inputElement.attr('value',inputHints[inputId]);
        }
    });
    //Style the drop-down lists
    $(function(){ $("#standardForm select").uniform(); });
    
    //Set default contact options - should be set in form
    //$("#contactPost").attr('checked','checked');
    //$("#contactPhone").attr('checked','checked');
}
function clearDefaultValues(){
    $('#standardForm input:text').each(function(){
        var inputElement = $(this);
        var inputId = inputElement.attr('id');
        var inputValue = inputElement.attr('value');
        if(inputHints[inputId] == inputValue){
            inputElement.attr('value','');
        }
    });
}
function validateFormUpdateDetails(){
    if($("#formUpdateDetails").length < 1) return;
    
    //Validate: Ensure field value has changed from the initial hint value
    jQuery.validator.addMethod("changed", function(value, element) { 
        return this.optional(element) || value != inputHints[element.id]; 
    });
    
    //Validate: Initialise validation tool
    $('#standardForm').validate({
        errorClass: 'error',
        validClass: 'noError',
        
        rules: {
            'form-model-all': {
                required: true,
                changed: true
            },
            'form-bike-vin': {
                required: true,
                changed: true
            },
            'form-title': {
                required: true,
                changed: true
            },
            'form-firstname': {
                required: true,
                changed: true
            },
            'form-surname': {
                required: true,
                changed: true
            },
            'form-email': {
                required: true,
                email: true
            },
            'form-phone-mobile': {
                required: {
                    depends: smsRequested()
                },
                changed: {
                    depends: smsRequested()
                }
            },
            'form-addressln1': {
                required: {
                    depends: postalContactRequested()
                },
                changed: {
                    depends: postalContactRequested()
                }
            },
            'form-town': {
                required: {
                    depends: postalContactRequested()
                },
                changed: {
                    depends: postalContactRequested()
                }
            },
            'form-county': {
                required: {
                    depends: postalContactRequested()
                },
                changed: {
                    depends: postalContactRequested()
                }
            },
            'form-postcode': {
                required: {
                    depends: postalContactRequested()
                },
                changed: {
                    depends: postalContactRequested()
                }
            },
            'form-country': {
                required: {
                    depends: postalContactRequested()
                },
                changed: {
                    depends: postalContactRequested()
                }
            },
            'form-terms': {
                required: true
            }
        },
        messages: {
            'form-model-all': pleaseSelectYourTriumph,
            'form-bike-vin': pleaseEnterYourVin,
            'form-title': pleaseEnterYourTitle,
            'form-firstname': pleaseEnterYourFirstName,
            'form-surname': pleaseEnterYourSurname,
            'form-email': {
                required: pleaseEnterYourEmail,
                email: thisAddressIsNotValid
            },
            'form-phone-mobile': pleaseEnterYourMobile,
            'form-addressln1': pleaseEnterYourEmailAddress,
            'form-town': pleaseEnterYourTownCity,
            'form-county': pleaseEnterACountryState,
            'form-postcode': pleaseEnterAPostcodeZip,
            'form-country': pleaseEnterACountry,
            'form-terms': pleaseAgreeToTheTerms
        },
        
        errorPlacement: function(error, element) {
            if($(element).attr('type').indexOf('select') != -1){
                element.parent().next().after(error);
            }else{
                element.next().after(error);
            }
        },
        
        highlight: function(element, errorClass, validClass) {
            $(element).removeClass(validClass);
            $(element).addClass(errorClass);
            if($(element).attr('type').indexOf('select') != -1){
                $(element).parent().addClass('selectorError');
            }
            
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass);
            $(element).addClass(validClass);
            if($(element).attr('type').indexOf('select') != -1){
                $(element).parent().removeClass('selectorError');
            }
        },
        
        submitHandler: function(form){
            clearDefaultValues();
            form.submit();
        }
    });
    
    //Postal address-related fields: Switch mandatory field labels on & off
    var postalContactRequested = true;
    function postalContactRequested(){
        return postalContactRequested;
    }
    
    $("input[id='contactPost']").change(function(){
    
        postalContactRequested = $("input[id='contactPost']:checked").val() == 'true';
        
        if (postalContactRequested){
            $('.printedOnly').each(function(){
                $(this).html('*');
            });
        }else{
            $('.printedOnly').each(function(){
                $(this).html('&nbsp;');
                $(this).prev().removeClass('error').addClass('noError');
                $(this).next('label[generated=true]').detach();
            });
        }
    });
    //On sms change: Switch mobile mandatory field labels on & off
    var smsRequested = false;
    function smsRequested(){
        return smsRequested;
    }
    
    $("#contactSMS").change(function(){
        smsRequested = $('#contactSMS:checked').val() != undefined;
        
        if (smsRequested) {
            $('.smsOnly').each(function(){
                $(this).html('*');
            });
        }else{
            $('.smsOnly').each(function(){
                $(this).html('&nbsp;');
                $(this).prev().removeClass('error').addClass('noError');
                $(this).next('label[generated=true]').detach();
            });
        }
    });
}
function validateFormRequestBrochure(){
    if($("#formRequestBrochure").length < 1) return;
    
    //Validate: Ensure field value has changed from the initial hint value
    jQuery.validator.addMethod("changed", function(value, element) { 
        return this.optional(element) || value != inputHints[element.id];
    });
    
    //Validate: Ensure DD/MM/YYYY fields are all validated in one go
    jQuery.validator.addMethod("isdate", function(value, element) {
        var dateValid;
        var dateY = $(element).attr('value');
        var dateM = $(element).prev().attr('value');
        var dateD = $(element).prev().prev().attr('value');
        var testDate = new Date(dateM + "/" + dateD + "/" + dateY);
        var dateValid = (dateY.length == 4 && 
            dateM.length == 2 && 
            dateD.length == 2 && 
            dateM >= 1 && 
            dateM <= 12 && 
            testDate.toString() != "Invalid Date" && 
            testDate.toString() != "NaN");
        return this.optional(element) || dateValid; 
    });
    
    //Validate: Initialise validation tool
    $('#standardForm').validate({
        errorClass: 'error',
        validClass: 'noError',
        
        rules: {
            brochureType: {
                required: true
            },
            hiddenBrochureSubject: {
                required: true
            },
            title: {
                required: true,
                changed: true
            },
            firstName: {
                required: true,
                changed: true
            },
            surname: {
                required: true,
                changed: true
            },
            emailAddress: {
                required: true,
                email: true
            },
            mobilePhone: {
                required: {
                    depends: smsRequested()
                },
                changed: {
                    depends: smsRequested()
                }
            },
            address1: {
                required: {
                    depends: printedBrochureRequested() || postalContactRequested()
                },
                changed: {
                    depends: printedBrochureRequested() || postalContactRequested()
                }
            },
            townCity: {
                required: {
                    depends: printedBrochureRequested() || postalContactRequested()
                },
                changed: {
                    depends: printedBrochureRequested() || postalContactRequested()
                }
            },
            countyState: {
                required: {
                    depends: printedBrochureRequested() || postalContactRequested()
                },
                changed: {
                    depends: printedBrochureRequested() || postalContactRequested()
                }
            },
            postcodeZip: {
                required: {
                    depends: printedBrochureRequested() || postalContactRequested()
                },
                changed: {
                    depends: printedBrochureRequested() || postalContactRequested()
                }
            },
            country: {
                required: {
                    depends: function(){ return printedBrochureRequested || postalContactRequested || testRideRequested; }
                },
                changed: {
                    depends: function(){ return printedBrochureRequested || postalContactRequested || testRideRequested; }
                }
            },
            whichModel: {
                required: {
                    depends: testRideRequested()
                },
                changed: {
                    depends: testRideRequested()
                }
            },
            purchaseDate: {
                required: {
                    depends: testRideRequested()
                },
                changed: {
                    depends: testRideRequested()
                }
            },
            preferredDealer: {
                required: {
                    depends: testRideRequested()
                },
                changed: {
                    depends: testRideRequested()
                }
            },
            licenseType: {
                required: {
                    depends: testRideRequested()
                },
                changed: {
                    depends: testRideRequested()
                }
            },
            dobY: {
                isdate: {
                    depends: testRideRequested()
                }
            },
            terms: {
                required: true
            }
        },
        messages: {
            brochureType: selectABrochureType,
            hiddenBrochureSubject: selectYourInterests,
            title: pleaseEnterYourTitle,
            firstName: pleaseEnterYourFirstName,
            surname: pleaseEnterYourSurname,
            emailAddress: {
                required: pleaseEnterYourEmail,
                email: thisAddressIsNotValid
            },
            mobilePhone: pleaseEnterYourMobile,
            address1: pleaseEnterYourEmailAddress,
            townCity: pleaseEnterYourTownCity,
            countyState: pleaseEnterACountryState,
            postcodeZip: pleaseEnterAPostcodeZip,
            country: pleaseEnterACountry,
            whichModel: pleaseSelectAModel,
            purchaseDate: pleaseSelectADate,
            preferredDealer: pleaseSelectADealer,
            licenseType: pleaseSelectALicenseType,
            dobY: pleaseEnterYourBirthDate,
            terms: pleaseAgreeToTheTerms
        },
        
        errorPlacement: function(error, element) {
            var input = $(element);
            var inputName = input.attr('name');
            if(inputName == 'brochureType' || inputName == 'hiddenBrochureSubject'){
                input.parent().parent().after(error);
            }else if(input.attr('type').indexOf('select') != -1){
                element.parent().next().after(error);
            }else{
                input.next().after(error);
            }
        },
        
        highlight: function(element, errorClass, validClass) {
        
            if($(element).attr('id') == 'dobY'){                        
                $(element).prev().removeClass(validClass);
                $(element).prev().addClass(errorClass);                    
                $(element).prev().prev().removeClass(validClass);
                $(element).prev().prev().addClass(errorClass);
            }else if($(element).attr('type').indexOf('select') != -1){
                $(element).parent().addClass('selectorError');
            }
            $(element).removeClass(validClass);
            $(element).addClass(errorClass);
                
        },
        unhighlight: function(element, errorClass, validClass) {
        
            if($(element).attr('id') == 'dobY'){                        
                $(element).prev().addClass(validClass);
                $(element).prev().removeClass(errorClass);                
                $(element).prev().prev().addClass(validClass);
                $(element).prev().prev().removeClass(errorClass);
            }else if($(element).attr('type').indexOf('select') != -1){
                $(element).parent().removeClass('selectorError');
            }
            
            if($(element).attr('id') == 'dobM' || $(element).attr('id') == 'dobD'){
                //Do nothing
            }else{
                $(element).removeClass(errorClass);
                $(element).addClass(validClass);
            }
        },
        
        submitHandler: function(form){
            clearDefaultValues();
            form.submit();
        }
    });
    
    function brochureCategorySelected(){
        var currentValue = $("input[name='brochureSubject[]']:checked").val();
        return (
            currentValue == 'roadstersEtc' ||
            currentValue == 'modernClassics' ||
            currentValue == 'cruisers' ||
            currentValue == 'clothing'
        );
    }
    
    $("input[name='brochureSubject[]']").change(function(){
        if(brochureCategorySelected()){
            $("#hiddenBrochureSubject").attr('value','1');
        }else{
            $("#hiddenBrochureSubject").attr('value','');
        }
    });
    
    //Postal address-related fields: Switch mandatory field labels on & off
    var printedBrochureRequested = false;
    function printedBrochureRequested(){
        if($('#hiddenBrochureSelection').length){
            return false;
        }else return printedBrochureRequested;
    }
    
    var postalContactRequested = true;
    function postalContactRequested(){
        return postalContactRequested;
    }
    
    $("input[name='brochureType'],input[id='contactPost']").change(function(){
    
        printedBrochureRequested = $("input[name='brochureType']:checked").val() == 'printedBrochure';
        postalContactRequested = $("input[id='contactPost']:checked").val() == 'contactPost';
        
        updateMandatoryLabels();
    });
    
    //On testRide change: Switch mandatory labels and expand area
    var testRideRequested = false;
    function testRideRequested(){
        return testRideRequested;
    }
    
    $("#testRide").change(function(){
        testRideRequested = $('#testRide:checked').val() == 'testRide';
        
        if (testRideRequested) {
            $('#ifRide').slideDown();
        }else{
            $('#ifRide').slideUp();
        }
        
        updateMandatoryLabels();
    });
    
    function updateMandatoryLabels(){
        
        if (printedBrochureRequested || postalContactRequested){
            $('.printedOnly').each(function(){
                $(this).html('*');
            });
        }else{
            $('.printedOnly').each(function(){
                $(this).html('&nbsp;');
                $(this).prev().removeClass('error').addClass('noError');
                $(this).next('label[generated=true]').detach();
            });
        }
        
        if (testRideRequested) {
            $('.rideOnly').each(function(){
                $(this).html('*');
            });
        }else{
            $('.rideOnly').each(function(){
                $(this).html('&nbsp;');
                $(this).prev('div').removeClass('selectorError');
                $(this).prev('input').removeClass('error').addClass('noError');
                $(this).next('label[generated=true]').detach();
            });
        }
        
        if (printedBrochureRequested || postalContactRequested || testRideRequested){
            $("#countryMandatoryLabel").html('*');
        }else{
            $("#countryMandatoryLabel").html('&nbsp;');
            $("#countryMandatoryLabel").prev().removeClass('error').addClass('noError');
            $("#countryMandatoryLabel").next('label[generated=true]').detach();
        }
    }
    //On sms change: Switch mobile mandatory field labels on & off
    var smsRequested = false;
    function smsRequested(){
        return smsRequested;
    }
    
    $("#contactSMS").change(function(){
        smsRequested = $('#contactSMS:checked').val() != undefined;
        
        if (smsRequested) {
            $('.smsOnly').each(function(){
                $(this).html('*');
            });
        }else{
            $('.smsOnly').each(function(){
                $(this).html('&nbsp;');
                $(this).prev().removeClass('error').addClass('noError');
                $(this).next('label[generated=true]').detach();
            });
        }
    });
}
function validateFormRequestRide(){
    if($("#formRequestRide").length < 1) return;
    //Validate: Ensure field value has changed from the initial hint value
    jQuery.validator.addMethod("changed", function(value, element) { 
        return this.optional(element) || value != inputHints[element.id]; 
    });
    
    //Validate: Ensure DD/MM/YYYY fields are all validated in one go
    jQuery.validator.addMethod("isdate", function(value, element) {
        var dateValid;
        var dateY = $(element).attr('value');
        var dateM = $(element).prev().attr('value');
        var dateD = $(element).prev().prev().attr('value');
        var testDate = new Date(dateM + "/" + dateD + "/" + dateY);
        var dateValid = (dateY.length == 4 && 
            dateM.length == 2 && 
            dateD.length == 2 && 
            dateM >= 1 && 
            dateM <= 12 && 
            testDate.toString() != "Invalid Date" && 
            testDate.toString() != "NaN");
        return this.optional(element) || dateValid; 
    });
    
    //Validate: Initialise validation tool
    var validator = $('#standardForm').validate({
        errorClass: 'error',
        validClass: 'noError',
        
        rules: {
            whichModel: {
                required: true,
                changed: true
            },
            purchaseDate: {
                required: true,
                changed: true
            },
            preferredDealer: {
                required: true,
                changed: true
            },
            licenseType: {
                required: true,
                changed: true
            },
            dobY: {
                isdate: true
            },
            title: {
                required: true,
                changed: true
            },
            firstName: {
                required: true,
                changed: true
            },
            surname: {
                required: true,
                changed: true
            },
            emailAddress: {
                required: true,
                email: true
            },
            homePhone: {
                required: true,
                changed: true
            },
            mobilePhone: {
                required: {
                    depends: smsRequested()
                },
                changed: {
                    depends: smsRequested()
                }
            },
            brochureType: {
                required: {
                    depends: brochureRequested()
                }
            },
            hiddenBrochureSubject: {
                required: {
                    depends: brochureRequested()
                }
            },
            address1: {
                required: {
                    depends: printedBrochureRequested() || postalContactRequested()
                },
                changed: {
                    depends: printedBrochureRequested() || postalContactRequested()
                }
            },
            townCity: {
                required: {
                    depends: printedBrochureRequested() || postalContactRequested()
                },
                changed: {
                    depends: printedBrochureRequested() || postalContactRequested()
                }
            },
            countyState: {
                required: {
                    depends: printedBrochureRequested() || postalContactRequested()
                },
                changed: {
                    depends: printedBrochureRequested() || postalContactRequested()
                }
            },
            postcodeZip: {
                required: {
                    depends: printedBrochureRequested() || postalContactRequested()
                },
                changed: {
                    depends: printedBrochureRequested() || postalContactRequested()
                }
            },
            country: {
                required: true,
                changed: true
            },
            terms: {
                required: true
            }
        },
        messages: {
            brochureType: selectABrochureType,
            hiddenBrochureSubject: selectYourInterests,
            title: pleaseEnterYourTitle,
            firstName: pleaseEnterYourFirstName,
            surname: pleaseEnterYourSurname,
            emailAddress: {
                required: pleaseEnterYourEmail,
                email: thisAddressIsNotValid
            },
            homePhone: pleaseEnterYourPhone,
            mobilePhone: pleaseEnterYourMobile,
            address1: pleaseEnterYourEmailAddress,
            townCity: pleaseEnterYourTownCity,
            countyState: pleaseEnterACountryState,
            postcodeZip: pleaseEnterAPostcodeZip,
            country: pleaseEnterACountry,
            whichModel: pleaseSelectAModel,
            purchaseDate: pleaseSelectADate,
            preferredDealer: pleaseSelectADealer,
            licenseType: pleaseSelectALicenseType,
            dobY: pleaseEnterYourBirthDate,
            terms: pleaseAgreeToTheTerms
        },
        
        errorPlacement: function(error, element) {
            var input = $(element);
            var inputName = input.attr('name');
            if(inputName == 'brochureType' || inputName == 'hiddenBrochureSubject'){
                input.parent().parent().after(error);
            }else if(input.attr('type').indexOf('select') != -1){
                element.parent().next().after(error);
            }else{
                input.next().after(error);
            }
        },
        
        highlight: function(element, errorClass, validClass) {
        
            if($(element).attr('id') == 'dobY'){                        
                $(element).prev().removeClass(validClass);
                $(element).prev().addClass(errorClass);                
                $(element).prev().prev().removeClass(validClass);
                $(element).prev().prev().addClass(errorClass);
            }else if($(element).attr('type').indexOf('select') != -1){
                $(element).parent().addClass('selectorError');
            }
            $(element).removeClass(validClass);
            $(element).addClass(errorClass);
                
        },
        unhighlight: function(element, errorClass, validClass) {
        
            if($(element).attr('id') == 'dobY'){                
                $(element).prev().addClass(validClass);
                $(element).prev().removeClass(errorClass);                
                $(element).prev().prev().addClass(validClass);
                $(element).prev().prev().removeClass(errorClass);
            }else if($(element).attr('type').indexOf('select') != -1){
                $(element).parent().removeClass('selectorError');
            }
            
            if($(element).attr('id') == 'dobM' || $(element).attr('id') == 'dobD'){
                //Do nothing
            }else{
                $(element).removeClass(errorClass);
                $(element).addClass(validClass);
            }
        },
        
        submitHandler: function(form){
            clearDefaultValues();
            form.submit();
        }
    });
    
    function brochureCategorySelected(){
        var currentValue = $("input[name='brochureSubject[]']:checked").val();
        return (
            currentValue == 'roadstersEtc' ||
            currentValue == 'modernClassics' ||
            currentValue == 'cruisers' ||
            currentValue == 'clothing'
        );
    }
    
    $("input[name='brochureSubject[]']").change(function(){
        if(brochureCategorySelected()){
            $("#hiddenBrochureSubject").attr('value','1');
        }else{
            $("#hiddenBrochureSubject").attr('value','');
        }
    });
    //Postal address-related fields: Switch mandatory field labels on & off
    var printedBrochureRequested = false;
    function printedBrochureRequested(){
        if($('#hiddenBrochureSelection').length){
            return false;
        }else return printedBrochureRequested;
    }
    
    var postalContactRequested = true;
    function postalContactRequested(){
        return postalContactRequested;
    }
    
    $("input[name='brochureType'],input[id='contactPost']").change(function(){
    
        printedBrochureRequested = $("input[name='brochureType']:checked").val() == 'printedBrochure';
        postalContactRequested = $("input[id='contactPost']:checked").val() == 'contactPost';
        
        if (printedBrochureRequested || postalContactRequested){
            $('.printedOnly').each(function(){
                $(this).html('*');
            });
        }else{
            $('.printedOnly').each(function(){
                $(this).html('&nbsp;');
                $(this).prev().removeClass('error').addClass('noError');
                $(this).next('label[generated=true]').detach();
            });
        }
    });
    
    //On testRide change: Switch mandatory labels and expand area
    var brochureRequested = false;
    function brochureRequested(){
        return brochureRequested;
    }
    
    $("#brochureRequest").change(function(){
        brochureRequested = $('#brochureRequest:checked').val() != undefined;
        
        if (brochureRequested) {
            $('#ifBrochure').slideDown();
            $('.brochureOnly').each(function(){
                $(this).html('*');
            });
        }else{
            $('#ifBrochure').slideUp();
            $('.brochureOnly').each(function(){
                $(this).html('&nbsp;');
                $(this).prev().removeClass('error').addClass('noError');
                $(this).prev('label[generated=true]').detach();
            });
        }
    });
    //On sms change: Switch mobile mandatory field labels on & off
    var smsRequested = false;
    function smsRequested(){
        return smsRequested;
    }
    
    $("#contactSMS").change(function(){
        smsRequested = $('#contactSMS:checked').val() != undefined;
        
        if (smsRequested) {
            $('.smsOnly').each(function(){
                $(this).html('*');
            });
        }else{
            $('.smsOnly').each(function(){
                $(this).html('&nbsp;');
                $(this).prev().removeClass('error').addClass('noError');
                $(this).next('label[generated=true]').detach();
            });
        }
    });
}
var myTriumphForgotPassword = {
    formId: '#forgotPasswordForm',
    init:function() {
    
        if($(this.formId).length < 1) return;
        
        this.fieldEvents();
        this.formValidate();
    },
    fieldEvents:function() {
        $(this.formId + ' input:text, select').each(function(){
            var inputElement = $(this);
            var inputId = inputElement.attr('id');
            var inputValue = inputElement.attr('value');
            inputHints[inputId] = inputValue;
        });                
        
        //On focus: Clear the input field value if it's still a hint
        $(this.formId + ' input:text, select').focusin(function(){
            var inputElement     = $(this);
            var inputId         = inputElement.attr('id');
            var inputValue         = inputElement.attr('value');
            
            if(inputValue == inputHints[inputId]){
                inputElement.attr('value','');
            }
            //change css to active state
            inputElement.css({ 'color' : '#7b879a', 'font-weight' : 'bold' });
        });
        
        //On focus Out: Put the hint back in if the user didn't type anything
        $(this.formId + ' input:text, select').focusout(function() {
            var inputElement = $(this);
            var inputId = inputElement.attr('id');
            var inputValue = inputElement.attr('value');
            
            if(inputValue == ''){
                inputElement.attr('value',inputHints[inputId]);
                inputElement.css({ 'color' : '#a3a3aa', 'font-weight' : 'normal' });
            }
        });
    },
    formValidate:function() {
            
        $(this.formId).validate({
                
            rules: {
                email: {
                    required: true,
                    email:    true
                }
            },
            messages: {
                email: {
                    required: pleaseEnterYourEmail,
                    email: enterAValidEmailAddress
                }
            }
        });
    }
}

var myTriumphRegisterForm = {
    formId: '#myTriumphRegisterForm',
    init:function() {
    
        if($(this.formId).length < 1) return;
        
        this.fieldEvents();
        this.formValidate();
        
        $(function(){ $(".registerForm form select").uniform(); });
    },
    fieldEvents:function() {
        $(this.formId + ' input:text').each(function(){
            var inputElement = $(this);
            var inputId = inputElement.attr('id');
            var inputValue = inputElement.attr('value');
            inputHints[inputId] = inputValue;
        });                
        
        //On focus: Clear the input field value if it's still a hint
        $(this.formId + ' input:text').focusin(function(){
            var inputElement     = $(this);
            var inputId         = inputElement.attr('id');
            var inputValue         = inputElement.attr('value');
            
            if(inputValue == inputHints[inputId]){
                inputElement.attr('value','');
            }
            //change css to active state
            inputElement.css({ 'color' : '#7b879a', 'font-weight' : 'bold' });
        });
        
        //On focus Out: Put the hint back in if the user didn't type anything
        $(this.formId + ' input:text').focusout(function() {
            var inputElement = $(this);
            var inputId = inputElement.attr('id');
            var inputValue = inputElement.attr('value');
            
            if(inputValue == ''){
                inputElement.attr('value',inputHints[inputId]);
                inputElement.css({ 'color' : '#a3a3aa', 'font-weight' : 'normal' });
            }
        });
    },
    formValidate:function() {
            
        $(this.formId).validate({
                
            rules: {
                registerEmail: {
                    required: true,
                    email:    true
                },
                registerPassword: {
                    required: true,
                    minlength: 5
                },
                confirmPass: {
                    required: true,
                    minlength: 5
                },
                firstname: {
                    required: true,
                    minlength: 2
                },
                surname: {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                registerEmail: {
                    required: pleaseEnterYourEmail,
                    email: enterAValidEmailAddress
                },
                registerPassword: {
                    required: pleaseEnterAPassword,
                    minlength: passwordMustBeAtLeast5Chars
                },
                confirmPass: {
                    required: pleaseEnterAPassword,
                    minlength: passwordMustBeAtLeast5Chars
                },
                firstname: {
                    required: pleaseEnterYourFirstName,
                    minlength: firstnameMustBeAtLeast2Chars
                },
                surname: {
                    required: pleaseEnterYourSurname,
                    minlength: surnameMustBeAtLeast2Chars
                }
            }
        });
    }
}
var myTriumphLoginForm = {
    formId: '#myTriumphLogin',
    init:function() {
    
        if($(this.formId).length < 1) return;
        
        this.fieldEvents();
        this.formValidate();
    },
    fieldEvents:function() {
        $(this.formId + ' input:text').each(function(){
            var inputElement = $(this);
            var inputId = inputElement.attr('id');
            var inputValue = inputElement.attr('value');
            inputHints[inputId] = inputValue;
        });                
        
        //On focus: Clear the input field value if it's still a hint
        $(this.formId + ' input:text').focusin(function() {
            var inputElement     = $(this);
            var inputId         = inputElement.attr('id');
            var inputValue         = inputElement.attr('value');
            
            if(inputValue == inputHints[inputId]){
                inputElement.attr('value','');
            }
            //change css to active state
            inputElement.css({ 'color' : '#7b879a', 'font-weight' : 'bold' });
        });
        
        //On focus Out: Put the hint back in if the user didn't type anything
        $(this.formId + ' input:text').focusout(function() {
            var inputElement = $(this);
            var inputId = inputElement.attr('id');
            var inputValue = inputElement.attr('value');
            
            if(inputValue == ''){
                inputElement.attr('value',inputHints[inputId]);
                inputElement.css({ 'color' : '#a3a3aa', 'font-weight' : 'normal' });
            }
        });
    },
    formValidate:function() {
            
        $(this.formId).validate({
                
            rules: {
                email: {
                    required: true,
                    email:    true
                },
                password: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                email: {
                    required: pleaseEnterYourEmail,
                    email: enterAValidEmailAddress
                },
                password: {
                    required: pleaseEnterYourMobile,
                    minlength: passwordMustBeAtLeast5Chars
                }
            }
        });
    }
}
var newsletterDropdown = {
    formName: '#newsletterDropdownForm',
    init:function() {
        if($(this.formName).length < 1) return;
        this.formValidate();
    },
    formValidate:function() {
    
        $(this.formName).validate({
                
            rules: {
                firstname: {
                    required: true,
                    maxlength: 30
                },
                lastname: {
                    required: true,
                    maxlength: 30
                },
                email: {
                    required: true,
                    email:    true
                }
            },
            messages: {
                firstname: {
                    required: pleaseEnterYourFirstName,
                    maxlength: nameMustBe30CharOrLess
                },
                lastname: {
                    required: pleaseEnterYourLastname,
                    maxlength: nameMustBe30CharOrLess
                },
                email: {
                    required: pleaseEnterYourEmail,
                    email: enterAValidEmailAddress
                }
            }
            
        });
    }
}
var newsletterForm = {
    
    formName: '#newsletterSignUpForm',
    
    init:function() {
        
        if($(this.formName).length < 1) return;
        
        this.formValidate();
        
    },
    formValidate:function() {
        $(this.formName).validate({
            
            rules: {
                firstname: {
                    required: true,
                    maxlength: 30
                },
                lastname: {
                    required: true,
                    maxlength: 30
                },
                email: {
                    required: true,
                    email:    true
                }
            },
            messages: {
                firstname: {
                    required: pleaseEnterYourFirstName,
                    maxlength: nameMustBe30CharOrLess
                },
                lastname: {
                    required: pleaseEnterYourLastname,
                    maxlength: nameMustBe30CharOrLess
                },
                email: {
                    required: pleaseEnterYourEmail,
                    email: enterAValidEmailAddress
                }
            }
        });
    }    
}
var findDealerForm = {
    formName: '#findDealerForm',
    init:function() {
        if($(this.formName).length < 1) return;
        this.checkForm();
    },
    checkForm:function(){
    
        $(this.formName).submit(function(){
            if($('#dealersNearTo').val() || $('#andOr').val()) {
                return true;                
            }
            else {
                $('#andOr').after('<span class="findDealerFormError">' + pleaseCompleteTheForm + '</span>');
                return false;
            }
        });
    }
}

/* End - 414 - JS Validate Forms rev. 631 *//* Begin - 413 - JS Dealer Base rev. 610 */

$(document).ready(function(){
    if( $("#dealer_details_container").length ){
        dealerBase();
    }
});
function dealerBase(){
    var dealerIcon = "http://assets1.triumphmotorcycles.com/images/static/dealer-icon.gif";
    var api_key = 'ABQIAAAAPm6UhMFP9NOcwGXZuxKm4BQROp8SSiaSSj8g4FVIuDGWKfEU4xTgcOHgS381xnKewExLgjgtKYcXaQ';

    var map = null;
    var geocoder = null;
    
    var directions = null;
    var directionsRetry = false;
    var locale = "en_US";
    var country = "UK";
    var dealerPoint;
    var userPoint;
    var pageData=[];
    var myNode;
    var country,near_to,dealer_name;
    var mapWindow;
    var currentView="search";
    var lastPolylinePoints=[];
    var last_encoded_polyline = false;
    var loadingDistances = false;
    var text_directions = null;
    var lastDealer;
    var paginationData =[];
    var locationNotFound = false;
   
    function init(){
        
                        if (GBrowserIsCompatible()) {
                              map = new GMap2(document.getElementById("map"));
                              map.setCenter(new GLatLng(dealerLat,dealerLng), 5);
                              map.setUIToDefault();
                              geocoder = new GClientGeocoder();                            
                               directions = new GDirections(map,document.getElementById('directions_panel'));
                           
                               //TODO:write function to handle direction errors...
                               GEvent.addListener(directions, "error", function() {
                                         /*var errorCode = directions.getStatus().code;
                                           switch(errorCode)
                                           {
                                           case 602:
                                               retryDirections();
                                             break;
                                           case 604:
                                               retryDirections();
                                             break;
                                           case 603:
                                               retryDirections();
                                             break;
                                           case 601:
                                               retryDirections();
                                             break;
                                           }*/
                                               
                                           alert("unable to load google directions, please try again:" + directions.getStatus().code); 
                                   });
                               
                               GEvent.addListener(directions, "load", function() {   
                                   
                                    var a = dealerLat +","+ dealerLng;
                                    var b =  userPoint.lat() + "," +userPoint.lng();
                                        
                                    $("#dealer_details_container").hide();
                                    $("#directions_panel").show();
                                    $("#print_directions_link").show().click(function(event){event.preventDefault(); printDealerDirectionsMap(a,b); return false; });
                                    
                                    $("#print_map_link").hide();
                                   
                               });
                                
                               //setDealerMarker(new GLatLng(dealerLat,dealerLng),"directions from here to here...");
                               dealerPoint = new GLatLng(dealerLat,dealerLng);
                               setDealerMarker(dealerPoint);
                            
                              $("#print_directions_link").hide();    
                            $("#get_directions_form").submit(function(event){ event.preventDefault(); handleSearchFormClick(); return false; });
                            $("#get_ride_directions").click(function(event){ event.preventDefault();$("#directions_form_container").toggle(400); return false;});
                            $("#back_to_dealer_details").click(function(event){event.preventDefault(); handleBackToDealerDetailsClick(); return false;});
                            
                            if (window.location.search != '') {
                                $("#back_to_search_results").attr("href", function() { return this.href + window.location.search; });
                                $("#back_to_search_results_panel").removeClass("displayNone");
                            }
                            $("#print_map_link").click(function(event){ event.preventDefault(); printDealerLocationMap(dealerPoint); return false; });
                            
                            
                            map.setCenter(dealerPoint,12);
                               
                            
                          }else{
    
                                    alert("Your browser is not compatible with Triumph/Google map system. Please use another browser. \n http://www.firefox.com");
                               }
        } //end init function
        
    function handleBackToDealerDetailsClick(){
        
        $("#directions_form_container").hide(); 
        $("#directions_panel").hide(); 
        $("#dealer_details_container").show();
        $("#print_directions_link").hide();        
        $("#print_map_link").show();
        directions.clear();
        map.setCenter(dealerPoint,12);
    }
      
    function handleSearchFormClick(){
            var location = $("[name=daddr]").val() + "," + country;
            if(location != ""){
            
                 geocoder.getLatLng(location, function(point){ 
    
                    //if lat lng then load directions
                     if(point != null){
                         userPoint = point;
                        getDirections(dealerPoint, point);
    
                    //if not then notify user location could not be found
                     }else{
                                alert("location not found");
                         }
                     }); 
            }else{
                    //invlaid location
                    alert("location not found");
                }
            
        
    }
        

   
     function setDealerMarker(point){
       
            var dealerIconNode = getCustomNode(dealerIcon);
             
            myNode = new GMarker(point, {icon:dealerIconNode, draggable:false, bouncy:false, zIndexProcess:function(marker,b) {return 1;}});
            map.addOverlay(myNode);
            
            
            GEvent.addListener(myNode, "click", function() { $("#directions_form_container").toggle(400); });
        
            myNode.show();
            
            map.setCenter(point,12);
            
            return myNode;
        }
     
        function getCustomNode(gifFileName){
            
            var iconNode = new GIcon();    
            iconNode.image = gifFileName;
            iconNode.shadow = ''; 
            iconNode.iconSize = new GSize(42,48); 
            iconNode.shadowSize = new GSize(0,0);
            iconNode.iconAnchor = new GPoint(21,48); 
            iconNode.infoWindowAnchor = new GPoint(5,5);
            iconNode.dragCrossImage = 'node.gif'; // undocumented String: indicates an image to be used as the drag cross. If you set it to the null string, you get the default drag_cross_67_16.png image.
            iconNode.dragCrossSize = GSize(1, 1); //undocumented GSize(): indicates the size of the drag cross. 
            iconNode.maxHeight = 1; //undocumented integer: The maximum difference in height between the marker anchor and the drag cross anchor during dragging. Setting the maxHeight to zero causes it to use the default 13.
            return iconNode;
        };

    
    function getMapSnapshot(zoom,size,maptype,markerPoint,sensor,polyline_data){
        var url = 'http://maps.google.com/maps/api/staticmap?';
        var iconuri = escape("http://www.marsrutai.info/node.gif");
            
        //url += 'center=' + center;
        //url += 'zoom=' + zoom;
        url += 'size=' + size;
        url += '&maptype=' + maptype;        
        url += '&markers=icon:' + iconuri + '|' + markerPoint;
        //url += 'markers=color:blue|label:S|40.702147,-74.015794'
        
        url += '&sensor=' + sensor;
        //add the polyline to the request
        if(polyline_data){
            url += '&path=weight:3|color:red|enc:'+polyline_data;
            
        }else{
                    url += '&zoom=' + zoom;
            }
        return url;
    }

    
    function printDealerLocationMap(point){
        openMapWindow();
            
        var imgSrc = getMapSnapshot(13,"512x512","roadmap",point,false,false);
        var html  = '<html>';
            html += '<head>';
            html += '<link rel="stylesheet" type="text/css" href="css/reset.css" media="screen,projection" />';
            html += '<link rel="stylesheet" type="text/css" href="css/structure.css" media="screen,projection" />';
            html += '<link rel="stylesheet" type="text/css" href="css/screen.css" media="screen,projection" />';
            html += '<link rel="stylesheet" type="text/css" href="css/image-refs.css" media="screen,projection" />';
            html += '<!--[if IE 7]><link rel="stylesheet" media="screen" type="text/css" href="css/ie7.css" /><![endif]-->';
            html += '<!--[if IE 6]><link rel="stylesheet" media="screen" type="text/css" href="css/ie6.css" /><![endif]-->';
            html += '</head><bo'+'dy style="background-color:white;">';
            html += '<!--<h2>Print Map</h2><button onclick="javascript:window.print();">PRINT MAP</button>--><br/>';
            html += '<img src="' + imgSrc + '" alt="" />';
            html += '</bo'+'dy></html>';        
        mapWindow.document.write(html);
        
        
    }
    function printDealerDirectionsMap(a,b){
        openMapWindow();
        
        
        
        var html  = '<html>';
        html += '<head>';
        html += '<script src="http://maps.google.com/maps?file=api&v=2&key='+api_key+'&sensor=true" type="text/javascript"><\/script>\n';
        html += '<script type="text/javascript">\n';
        html += 'var map;\n';
        html += 'var directionsPanel;\n';
        html += 'var pmdirections;\n';
        html += 'function initialize() {';
        html += '  map = new GMap2(document.getElementById("map_canvas"));\n';
        html += '  directionsPanel = document.getElementById("directions_panel");\n';
        html += '  map.setCenter(new GLatLng(49.496675,-102.65625), 3);\n';
        html += '  pmdirections = new GDirections(map, directionsPanel); \n';
        html += 'GEvent.addListener(pmdirections, "error", function() {alert("e:" + pmdirections.getStatus().code);});\n';
        html += 'var a = new GLatLng(' + b + ');\n';
        html += 'var b = new GLatLng(' + a + ');\n';
        html += '  pmdirections.loadFromWaypoints([a,b]);\n';
        html += '}';
        html += '<\/script>';
        html += '</head><bo'+'dy style="background-color:white;">';
        html += '<!--<h2>Print Map</h2><button onclick="javascript:self.print();return false;">PRINT MAP</button>--><br/>';
        html += '<div id="map_canvas" style="height:450px;width:100%;"></div>';
        html += '<div id="directions_panel"></div>';
        html += '<script type="text/javascript">var t=setTimeout("initialize()",1000);<\/script>';
        html += '</bo'+'dy></html>';
        
        
        mapWindow.document.write(html);
    
    }
 
    function openMapWindow(){
        
        if(mapWindow!=null){
            mapWindow.close();
        }
        
        mapWindow = window.open("", "newwin", "height=550, width=550,toolbar=no,scrollbars=yes,menubar=yes");
                
    }

    function getDirections(pointA, pointB){
            directions.loadFromWaypoints([pointB,pointA],{getPolyline:true}); 
            
        
    }
    

    function retryDirections(){
        var text_version = $("#submit_ride_directions_text_dir").val();
            if(!directionsRetry){
                directionsRetry = true;
                directions.load(text_version); 
            }else{
                alert("Sorry Google maps cannot find diretions for the given locations");
                directionsRetry = false;
                }
            //try again using load instead
            //directions.loadFromWaypoints([pa,pb]);
        
     }

    function setZoomLevelToShowMarkers(gLatLngArray){
        
        if(gLatLngArray.length==1){
            for(var i=0; i<2;i++){
                
                gLatLngArray.push(gLatLngArray[0]);
            }
            
        }
        
        var polygon = new GPolygon(gLatLngArray, null, 5, 0.7, "#aaaaff", 0.5, {clickable:false} );
        map.addOverlay(polygon);
        var pBounds = polygon.getBounds();            
        var pCenter = pBounds.getCenter();
        var zoomLevel = map.getBoundsZoomLevel(pBounds);
        map.setCenter(pCenter,zoomLevel);    
        map.removeOverlay(polygon);     
        
    }
    function setZoomForCountry(country){
           var filtered = filterDataByCountry(pageData,country);
        var latLngArray = getDealerLatLngs(filtered);
           setZoomLevelToShowMarkers(latLngArray);
        
    }
    function setZoomForResult(data){
        var filtered,latLngArray,country;
        
        country = getCountry();
           filtered = filterDataByCountry(data,country);
        if(filtered){
           
            latLngArray = getDealerLatLngs(filtered);
               setZoomLevelToShowMarkers(latLngArray);
        }else{
                alert("no Triumph dealers found for " + country);
                return false;
                
            }
    }
    
    function showDealerDetails(dealerName){
        var address;
        var times;
        address = findDealerByName(pageData,dealerName);
        
        alert(address);
        
    }
    
    
    //start  
  init();
}
 
/* End - 413 - JS Dealer Base rev. 576 *//* Begin - 412 - JS Dealer Search rev. 831 */

$(document).ready(function(){
    if( $("#findADealerForm").length ){
        dealerSearch();
    }
});
function dealerSearch(){
      //Template values: 
      var staticMarkerUrl = "http://assets1.triumphmotorcycles.com/images/static/dealer-icon.gif"; //an external marker image url for the static maps 
      var xmlUrl = "/components/dealers/act_dealers.xml?rdeLocaleAttr=en";
      var defaultCountry = 'United States'; 
      
      var dealersXML = null;
      var markers=[];
      var map = null;
      var geocoder = null;
      var geocoder2 = null;
      var directions = null;
      var directionsRetry = false;
      //var locale = "en_US";
      var searchResults;
      
      var resultLimit = 2 ;
      var resultStart = 0;
      var resultData=[];
      var pageData=[];
      var dataLoaded=0;
      var dealer_lat_lngs = [];
      var geocodesLoaded = 0;
      var country,near_to,dealer_name;
      var userLocationLatLng;
      var distances=[];
      var routes=[];
      var errors=[];
      var currentIndex;
      var nearToPoint;
      var countries=[];
      var mapWindow;
      var currentView="search";
      var lastPolylinePoints=[];
      var last_encoded_polyline = false;
      var loadingDistances = false;
      var text_directions = null;
      var lastDealer;
      var paginationData =[];
      var locationNotFound = false;
      var lastLocation = '';
      var valuesFromUrl=[];
      
   
      //pagination options...
      var optInit = {
                items_per_page:3,
                next_text:"Next",
                num_display_entries:10,
                num_edge_entries:0,
                prev_text:"Prev",
                callback:  paginationCallback
            };
    
      function init(){
          
            
                if(dataLoaded==1){
                  
                      if (GBrowserIsCompatible()) {

                        
                        
                            map = new GMap2(document.getElementById("map"));
                            
                            //do init country - setbasecountry etc etc see gogole maps api for more...
                            //map.setCenter(new GLatLng(54.7806,-5.12715), 13);
                            map.setUIToDefault(); 
                            geocoder = new GClientGeocoder();
                            directions = new GDirections(map,document.getElementById('directions_html_container'));
                         
                            //TODO:write function to handle direction errors...
                            GEvent.addListener(directions, "error", function() {
                                        var errorCode = directions.getStatus().code;
                                        switch(errorCode)
                                        {
                                        case 602:
                                            retryDirections();
                                          break;
                                        case 604:
                                            retryDirections();
                                          break;
                                        case 603:
                                            retryDirections();
                                          break;
                                        case 601:
                                            retryDirections();
                                          break;
                                        }
                                            
                                        //alert("e:" + directions.getStatus().code); 
                                });
                            
                            GEvent.addListener(directions, "load", function() {
                            
                                directionsRetry = false;
                            
                            });
                         
                            setDealersOnMap(pageData);    
                            
                            try{
                                setZoomForCountry(getCountry());
                            }catch(e){
                                centerOnCountryString(defaultCountry);
                            }
                            
                            $('#dealer_search_form').submit(function(event){ event.preventDefault(); triggerDistancesFromLocation(); return false; });                           
                            $("#show_all_dealers").click(function(event){ event.preventDefault(); handleShowAllDealersClick();return false;});
                            $("#returnToSearchFormLink").click(function(event){ event.preventDefault(); handleReturnToMainClick();return false;});
                            //$("#country").change( function(event){ resetForm(); setCountry( $(this).val() ); });
                            //$("#country").focus( function(event){ resetForm(); });
                            $('#search_form_trigger').mousedown(function(event){ event.preventDefault(); triggerDistancesFromLocation(); return false; });
                            $("#slidingDoorSubmit").mousedown(function(event){ event.preventDefault(); triggerDistancesFromLocation(); return false; });
                            $('#dealersNearTo').change(function(event){  event.preventDefault(); locationNotFound=false; clearDistances(); return false; });    
                            $("#show_detail").hide();
                            $("#print_map_link").click(function(event){event.preventDefault(); handlePrintMapClick();return false;});
                            
                            //$('#dealersNearTo').keypress(handleFormKeyPress);
                            //$('#andOr').keypress(handleFormKeyPress);
                            
                            if ($.browser.mozilla) {
                                
                                $('#dealersNearTo').keypress(handleFormKeyPress);
                                $('#andOr').keypress(handleFormKeyPress);
                                
                            } else {
                                
                                $('#dealersNearTo').keydown(handleFormKeyPress);
                                $('#andOr').keydown(handleFormKeyPress);
                               
                            }

                            loadFromUrl();
                            
                        }else{
    
                                    alert("Your browser is not compatible with Triumph/Google map system. Please use another browser. \n http://www.firefox.com");
                             }
                }else{
                         
                        loadDealerData();
                           
                    }
                
          } //end init function
    
    function centerOnCountryString(countryString){
        geocoder.getLatLng(countryString, function (point) {
          if (!point) {
            // Handle error
          } else {
            map.setCenter(point, 4);
          }
        });
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /*     */
    /*                                            */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    function loadDealerData(){
        $.ajax({
              type: "GET",
              //url: 'http://localhost/test/dummyDealer.xml',
              url: xmlUrl,
              dataType: "xml",
              success: function(data){
                                    dealersXML = data;
            
                                    $(data).find("store").each(function(index,value){  
                                            
                                        //Change the index names to "indexNAme" instead of numbered values "name"=name etc
                                        var rowArray = []; 
                                            rowArray["name"] = $(this).find("name").text();
                                            rowArray["address"] = $(this).find("address").text();
                                            rowArray["city"] = $(this).find("city").text();
                                            rowArray["county"] = $(this).find("county").text();
                                            rowArray["zip"] = $(this).find("zip").text();
                                            rowArray["postcode"] = $(this).find("postcode").text();
                                            rowArray["phone"] = $(this).find("phone").text();
                                            rowArray["country"] = $(this).find("country").text();
                                            rowArray["lat"] = $(this).find("lat").text();
                                            rowArray["lng"] = $(this).find("lng").text();
                                            rowArray["dealerpage"] = $(this).find("dealerpage").text();
                                              
                        
                                        pageData.push(rowArray);
                                        
                                    });
                                    dataLoaded = 1;
                                    init();
                                            
                        },
            error: function(XMLHttpRequest, textStatus, errorThrown){ /*alert("unable to load Triumph dealers xml file.");*/}
          });
      
    }
    function loadFromUrl(){
        if (window.location.search != "") {
            var pathname = window.location.search;
            pathname = pathname.replace("?","");
            var values = pathname.split("&");
            
            if(values.length > 0 &&  pathname.match(/loadSearchResults/gi) && pathname.match(/(loadSearchResults)|(nearTo)/gi)  ){

                for(var i=0;i<values.length;i++){
                    if( values[i].match(/\=/gi) ){
                        
                        var temp = values[i].split("=");
                    
                        //routeData[i].match(/(?=marker)/gi);
                        
                        if( values[i].match(/nearTo/gi) ){
                        
                            valuesFromUrl["nearTo"] = temp[1];
                            
                        }else if( values[i].match(/nameContains/gi) ){
                            
                            valuesFromUrl["nameContains"] = temp[1];
                              
                        }else if( values[i].match(/resultPageIndex/gi) ){
                            
                            valuesFromUrl["resultPageIndex"] = temp[1];
                            
                        }
                        
                        //valuesFromUrl[temp[0]]=temp[1];
                    }
                }

                //set the form values
                
                $("[name=dealersNearTo]").val(valuesFromUrl["nearTo"]);
                $("[name=andOr]").val(valuesFromUrl["nameContains"]);
        
                //set the result index
                globalPageIndex = valuesFromUrl["resultPageIndex"];
                optInit.current_page = parseInt(globalPageIndex);
                
                loadFromUrlFix();
                
                
            
                
            }
            
            
        }
            
        //http://localhost/triumph_dealers/dealer-search.htm?nearTo=london&nameContains=bikes&resultStartIndex=3
    }

    function loadFromUrlFix(){
    
            $("#findADealerForm").oneTime(300, function(){ 
                
                if(map.isLoaded()){

                    if (globalPageIndex && jQuery.trim($("[name=dealersNearTo]").val()) == "" && jQuery.trim($("[name=andOr]").val()) == "") {
                        handleShowAllDealersClick();
                    } else {
                        triggerDistancesFromLocation();
                    }      
                    
                }else{
                    
                    loadFromUrlFix();
                    
                }
        
        }); 
    }

   
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /*     */
    /*                                            */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    function paginateResults(){
         //jquery pagination plugin
         if(resultData.length > 0){
            $("#Pagination").pagination(resultData.length, optInit);
         }
    }
    
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /*     */
    /*                                            */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    function setResults(paginationData){
        resultData=paginationData; 
    }
    
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /*     */
    /*                                            */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    function paginationCallback(page_index, jq){
        var items_per_page = 3;
        var max_elem = Math.min((page_index+1) * items_per_page, resultData.length);
        var newcontent = '';
        paginationData = []; 
        
        //remove current 
        removeAllMarkers();
        
        // Iterate through a selection of the content and build an HTML string
        var qs = '?loadSearchResults=true&nearTo=' + $("[name=dealersNearTo]").val() + '&nameContains=' + $("[name=andOr]").val() + '&resultPageIndex=' + page_index;
        for(var i=page_index*items_per_page;i<max_elem;i++)
        {
            //Add the data for the set zoom call later
            paginationData.push(resultData[i]);
            
            newcontent += '<dt><a class="show_detail_links" href="' + resultData[i]["dealerpage"] + qs + '" alt="" id="' + resultData[i]["name"] +  '">' + resultData[i]["name"] + '</a></dt>';
        
            newcontent += '<div class="delearLocationAddress clrNM">';
            newcontent += '<div class="address">';
                
            newcontent += '<dd>' + resultData[i]["address"] + '</dd>';
            newcontent += '<dd>' + resultData[i]["city"] + '</dd>';
            newcontent += '<dd>' + resultData[i]["county"] + '</dd>';
            newcontent += '<dd>' + resultData[i]["postcode"] + '</dd>';
            newcontent += '<dd>' + resultData[i]["phone"] + '</dd>';
            
            newcontent += '</div>';
            newcontent += '<div class="milesTo">';
            
            if(resultData[i]["distance"] && resultData[i]["distance"]!=null){
                newcontent += '<span class="dealerDistance">' + Math.ceil(resultData[i]["distance"]) + ' Km / ' + Math.round(Math.ceil(resultData[i]["distance"])/1.609) + ' Miles</span>';
            }
            
            newcontent += '</div>';
            newcontent += '</div>';
            //show the result on the map
            setDealerMarker(new GLatLng(resultData[i]["lat"],resultData[i]["lng"]), resultData[i]["name"]);
            
        }
        
        //set the zoom for the currently diplsayed results
        setZoomForResult(paginationData);
        
        $('#Searchresult').html(newcontent);
        //$(".show_detail_links").click(function(event){ event.preventDefault();   showDealerDetail( $(this).attr("id")); return false; });
  
        return false;
        
    }//end pageselectCallback function

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /*     */
    /*                                            */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
     function validateSearchForm(){
            country = $("[name=country]").val();
            
            near_to = $("[name=dealersNearTo]").val();
            dealer_name = $("[name=andOr]").val();
            dealer_name = jQuery.trim(dealer_name);
            near_to = jQuery.trim(near_to);
            var returnData = {};
            
                    if( dealer_name.length > 2 && dealer_name != undefined ){
                        returnData.dealer_name = dealer_name;
                    }
                    //if( near_to.length > 2 && near_to != undefined && locationNotFound != false){
                    if( near_to.length > 2 && near_to != undefined){
                        returnData.near_to = near_to;
                    }
                    if(returnData.near_to || returnData.dealer_name){
                        return returnData;
                        
                    }else{
                            alert("please enter a valid dealer name and/or location");
                            return false;
                        }
     }
     
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /*     */
    /*                                            */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */   
     //searches for string in store name and returns store xml if found
     function matchDealerByName(nameString){
         try
         {
             var result = [];
              
            for( var i in pageData){     
                 
                var regex = new RegExp(nameString, "gi");
                
                if(pageData[i]["name"] != undefined){    
                    
                    if(pageData[i]["name"].search(regex) != -1){
                        result.push(pageData[i]);
                    } 
                }
             }
            if(result.length > 0){return result;}else{return false};
         
         } catch(e) { alert(e);}
             
     }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /*     */
    /*                                            */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
     function calculateApproxDistance(pointA,pointB){
     
         /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
         /*  Latitude/longitude spherical geodesy formulae & scripts (c) Chris Veness 2002-2010            */
         /*   - www.movable-type.co.uk/scripts/latlong.html                                                */
         /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
        // extend Number object with methods for converting degrees/radians
        /** Convert numeric degrees to radians */
        if (typeof(String.prototype.toRad) === "undefined") {
          Number.prototype.toRad = function() {
            return this * Math.PI / 180;
          }
        }
        
        /** Convert radians to numeric (signed) degrees */
        if (typeof(String.prototype.toDeg) === "undefined") {
          Number.prototype.toDeg = function() {
            return this * 180 / Math.PI;
          }
        }
        
        /** 
         * Format the significant digits of a number, using only fixed-point notation (no exponential)
         * 
         * @param   {Number} precision: Number of significant digits to appear in the returned string
         * @returns {String} A string representation of number which contains precision significant digits
         */
        if (typeof(String.prototype.toDeg) === "undefined") {
          Number.prototype.toPrecisionFixed = function(precision) {
            var numb = this < 0 ? -this : this;  // can't take log of -ve number...
            var sign = this < 0 ? '-' : '';
            
            if (numb == 0) { n = '0.'; while (precision--) n += '0'; return n };  // can't take log of zero
          
            var scale = Math.ceil(Math.log(numb)*Math.LOG10E);  // no of digits before decimal
            var n = String(Math.round(numb * Math.pow(10, precision-scale)));
            if (scale > 0) {  // add trailing zeros & insert decimal as required
              l = scale - n.length;
              while (l-- > 0) n = n + '0';
              if (scale < n.length) n = n.slice(0,scale) + '.' + n.slice(scale);
            } else {          // prefix decimal and leading zeros if required
              while (scale++ < 0) n = '0' + n;
              n = '0.' + n;
            }
            return sign + n;
          }
        }
                
         
         var lat1 = pointA.lat;
         var lon1 = pointA.lng;
         
         var lat2 = pointB.lat;
         var lon2 = pointB.lng;
         
         var R = 6371; // km
         var dLat = (lat2-lat1).toRad();
         var dLon = (lon2-lon1).toRad(); 
         var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                 Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                 Math.sin(dLon/2) * Math.sin(dLon/2); 
         var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
         var d = R * c;
         return d;
         
     }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /*     */
    /*                                            */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
     
     function getDistancesFromLocation(location, fn){
     
         if( location.length > 2 && location != undefined ){
             loadingDistances = true;
             geocoder.getLatLng(location, function(point){ 
                 if(point != null){
                    
                        for(var i in pageData){
    
                            if(pageData[i]["lat"] !=undefined && pageData[i]["lng"] !=undefined){
                                
                                var nextPoint = new GLatLng(pageData[i]["lat"],pageData[i]["lng"]);
                                 
                                //var distance = point.distanceFrom(nextPoint); 
                                
                                var distance = calculateApproxDistance({"lat":point.lat(),"lng":point.lng()},{"lat":nextPoint.lat(),"lng":nextPoint.lng()})
                                
                                //alert("distance:"+distance);
                                //alert("distanceb:"+distanceb/100);
                                
                                pageData[i]["distance"] = distance;
    
                                loadingDistances = false;  

                                lastLocation = location;
                                
                                if (fn) { fn(); }
  
                            }
                        }
                    
                 }else{
                            locationNotFound = true;
                     }
                        
                 }); 
         } 
     }

     
     function sortMultiDimensionalByDistance(a,b)
     {
         // this sorts the array using the second element   
         return ((a["distance"] < b["distance"]) ? -1 : ((a["distance"] > b["distance"]) ? 1 : 0));
     }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /*     */
    /*                                            */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
     function findDealerByDistance(location){
            var result;
            //result = pageData.sort(sortMultiDimensionalByDistance); // sort using our custom function
            //result = pageData.sort(sortMultiDimensional);
            
            var result = pageData.slice(0); // copies array, but references same items due to sub-arrays/objects
            if(result = result.sort(sortMultiDimensionalByDistance)){
                for(var i in result){
                        if(typeof(result[i]) != "function"){
                            var temp = result[i].splice(0,1);
                            result[i].push(temp);
                    
                        }
            
                }
                //alert("ssd"+result);
                return result;
            }                    
                
     } 
 
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /*     */
    /*                                            */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    function handleSearchFormClick(){
        var results;
        var andArray=[];
        var formData = validateSearchForm();
        if(formData){
            
         $('#findADealerForm').hide();
         $('#searchResults').show();
            if(formData.dealer_name){
                var resultA;
                if(resultA = matchDealerByName(formData.dealer_name)){
                    
                        //alert(resultA);
                        resultA = filterDataByCountry(resultA,getCountry());
                }
                
            }
            if(!locationNotFound){
                
                if(formData.near_to){
    
                        var resultB, location;
    
                        location =   formData.near_to + ", " + getCountry();
                            
                        if(resultB = findDealerByDistance(formData.near_to)){
    
                            
                            resultB = filterDataByCountry(resultB,getCountry());
                            
                        }
                    
                }
            }
            //merge the result data and remove duplicates
            if( resultB && resultA ){
                    if(resultB.length >= resultA.length  ){
        
                        for(var i=0;i<resultB.length;i++){
        
                            for(var j=0;j<resultA.length;j++){
        
                                    //resultB[i]["relevance"] = 99999;
                                    //resultA[i]["relevance"] = 99999;
                                    
                                    if(resultB[i][0] == resultA[j][0]){
        
                                        //resultB[i]["relevance"] = ;
                                        
                                        andArray.push(resultB[i]);
                                        resultA.splice(j,1);
                                        //resultB.splice(i,1);
                                        //i--;
                                        j=resultA.length;
                                    }
                                
                            }
    
                        }
                        
                        //order by distance
                        andArray.sort(sortMultiDimensionalByDistance);
                        results = andArray.concat(resultB);
                        results = removeDuplicates(results);
                        
                        
                        
                        
                    }else if(resultB.length < resultA.length){

                        for(var i in resultA){
                            
                            for(var j in resultB){
        
                                    if(resultA[i][0] == resultB[j][0]){
        
                                        //resultA.splice(j,1);
                                        andArray.push(resultB[i]);
                                        resultA.splice(j,1);
                                        //resultB.splice(i,1);
                                        j--;
                                    }
                                
                            }
                            
                        }
                    
                        //order by distance
                        andArray.sort(sortMultiDimensionalByDistance);
                        results = andArray.concat(resultA);
                        
                    }
                
                    //results = resultB.concat(resultA);
                    
            }else if(resultA){
                results = resultA;
                
            }else if(resultB){
                    results = resultB;
                
                }else{
                            results =[];
                            //resultData = [];
                            var search_string;
                            
                            $("#Searchresult").html('Nothing found for search string');
                    }
            
            setResults(results);
            paginateResults();
        }
     
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /*     */
    /*                                            */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    function handleShowAllDealersClick(){
        clearDistances();
         $('#findADealerForm').hide();
         $('#searchResults').show();
         //setResults(pageData);
         //setCountry();
         setCountry(getCountry());
         setResults(filterDataByCountry(pageData,getCountry()));
         paginateResults();
         
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /*     */
    /*                                            */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    function handleReturnToMainClick(){
         $('#findADealerForm').show();
         $('#searchResults').hide();
         $("#Pagination").empty();
         paginationData=[];
         setCountry(getCountry());
         //setDealersOnMap();    
         
    }
    function handleBackToDealerDetailsClick(){
        $("#show_detail").show();
        //$('#findADealerForm').hide();
        //$('#searchResults').hide();
        //$('#header_sub_text').hide();
        $("#directions_html_container").hide();
        //remove directions ' overlays
        directions.clear();
        //reset the view on the dealer
        var point = $("#submit_ride_directions_point_a").val();
        point = point.replace(/\(/gi,"");
        point = point.replace(/\)/gi,"");
        point = point.split(",");
        map.setCenter(new GLatLng(point[0],point[1]),12);
     
    }
    function handleBackToResultsClick(){
        //hide the dealer detail
        $('#show_detail').hide();
        //hide print map link
        $("#map_controls_bottom").hide();
        
        //reset the directions 
        directions.clear();
        lastPolylinePoints=[];
        last_encoded_polyline = false;
        
        
        
        //reset the header
         $('#dealerName').html("FIND A DEALER");
         
        //show the results container
         $('#searchResults').show();
         setCountry(getCountry());
    }
    function handlePrintMapClick(){
        openMapWindow();
     
        switch(currentView)
        {
        case "search":
            printDealerLocationMap();
          break;
        case "results":
          break;
        case "dealer":
          break;
        case "directions":
            printDealerDirectionsMap();
          break;
        }
    }
    function setDealersOnMap(data){
 
        for(var i=0;i<data.length;i++){
            
            
             var infoDetails =  data[i]["name"] + '<br/>'
              + data[i]["address"] + '<br/>' 
             + data[i]["city"] + '<br/>' 
             + data[i]["county"] + '<br/>' 
             + data[i]["country"] + '<br/>' 
             + data[i]["phone"] + '<br/>';
             
            //geocoder.getLatLng(pageData[i][1] + ', ' + pageData[i][2] + ', ' + pageData[i][3] + ', ' + pageData[i][4] + ', ' + pageData[i][5], function(point) { setDealerMarker(point,infoDetails); });
            
            //var latLng = new GLatLng(pageData[i][6],pageData[i][7])
            //var point = new GPoint(pageData[i][6],pageData[i][7]);    
            setDealerMarker(new GLatLng(data[i]["lat"],data[i]["lng"]),infoDetails);    
        }
    }
    function setDealerMarker(point,dealerData){
     
        var dealerIconNode = getCustomNode(staticMarkerUrl);
         
        var myNode = new GMarker(point, {icon:dealerIconNode, draggable:false, bouncy:false, zIndexProcess:function(marker,b) {return 1;}});
        map.addOverlay(myNode);
        myNode.show();
        
        GEvent.addListener(myNode, "click", function() {
                myNode.openInfoWindowHtml(dealerData);
            });
        
        myNode.dealer = dealerData;
        markers.push(myNode); 
        return myNode;
    }
    function removeMarker(marker){
        map.removeOverlay(marker);
    }
    function removeAllMarkers(){
        for(var i in markers){
            removeMarker(markers[i]);
        }
    }
    
 
    function getCustomNode(gifFileName){
        
        var iconNode = new GIcon();    
        iconNode.image = gifFileName;
        iconNode.shadow = ''; 
        iconNode.iconSize = new GSize(42,48); 
        iconNode.shadowSize = new GSize(0,0);
        iconNode.iconAnchor = new GPoint(21,48); 
        iconNode.infoWindowAnchor = new GPoint(21,0);
        iconNode.dragCrossImage = 'node.gif'; // undocumented String: indicates an image to be used as the drag cross. If you set it to the null string, you get the default drag_cross_67_16.png image.
        iconNode.dragCrossSize = GSize(1, 1); //undocumented GSize(): indicates the size of the drag cross. 
        iconNode.maxHeight = 1; //undocumented integer: The maximum difference in height between the marker anchor and the drag cross anchor during dragging. Setting the maxHeight to zero causes it to use the default 13.
        return iconNode;
    };

    function filterDataByCountry(data,countryName){
        //remove the dealers matching the country code
        var temp = [];
        for(var i = 0;i<data.length;i++){
            //if(data[i]["country"] == countryName){ // We don't need to filter by country - only the country will be present! (fix for Belgium/Luxembourg)
                temp.push(data[i]);
            //}
        }
        if(temp.length>0){
            return temp;
            
        }else{
                return false;
            
            }
        
    }
    
    
    /*handleCountryClick(){};*/
    function setCountry(value){
        var zoom;
        var result;
        var lat,lng,point;
        
        if( (value != undefined) && (value != "") ){ 
            country = value;
            
            /*switch(value)
            {
            case "UK":
                zoom = 5;
                lat = 52.696361078274485;
                lng = -1.93359375; 
              break;
            case "USA":
                zoom = 3;
                lat = 40.04443758460856;
                lng = -106.5234375;
              break;
            case "CANADA":
                zoom = 3;
                lat = 61.10078883158897;
                lng = -112.67578125;
                break;
            default:
              zoom = 4;
            }*/

            //do geocode for country and set the center
            
            
            //set the map location
        
            
            
            if(paginationData.length >0){
                    result = paginationData;
                    setZoomForResult(paginationData);
                
            }else{
                
                //map.setCenter(new GLatLng(lat,lng), zoom);                    
                //geocoder.getLatLng(country, function(point){map.setCenter(point, 4);    });
                result = filterDataByCountry(pageData,country);
                setZoomForCountry(country);
                setResults(result);
            }
                
            map.clearOverlays();         
            setDealersOnMap(result);
                
        }else{
                alert("Invalid country");
                
            }
    
    }
    function getCountry(){
            /*if(country == null){
                setCountry($("#country").val());
            }
            return country;*/
        
            return defaultCountry;
    }
    function getMapSnapshot(zoom,size,maptype,markerPoint,sensor,polyline_data){
        var url = 'http://maps.google.com/maps/api/staticmap?';
        var iconuri = escape(staticMarkerUrl);
    
        
        //url += 'center=' + center;
        //url += 'zoom=' + zoom;
        url += 'size=' + size;
        url += '&maptype=' + maptype;        
        url += '&markers=icon:' + iconuri + '|' + markerPoint;
        //url += 'markers=color:blue|label:S|40.702147,-74.015794'
        
        url += '&sensor=' + sensor;
        //add the polyline to the request
        if(polyline_data){
            url += '&path=weight:3|color:red|enc:'+polyline_data;
            
        }else{
                    url += '&zoom=' + zoom;
            }
        return url;
    }

    
    function printDealerLocationMap(point){
        //?center=Brooklyn+Bridge,New+York,NY&zoom=14&size=512x512&maptype=roadmap&markers=color:blue|label:S|40.702147,-74.015794&markers=color:green|label:G|40.711614,-74.012318&markers=color:red|color:red|label:C|40.718217,-73.998284&sensor=false
        //http://maps.google.com/maps/api/staticmap?zoom=London%20UK&size=14&maptype=512x512&markers=icon:http%3A//www.marsrutai.info/node.gif|r&markers=icon:http%3A//www.marsrutai.info/node.gif|o&markers=icon:http%3A//www.marsrutai.info/node.gif|a&markers=icon:http%3A//www.marsrutai.info/node.gif|d&markers=icon:http%3A//www.marsrutai.info/node.gif|m&markers=icon:http%3A//www.marsrutai.info/node.gif|a&markers=icon:http%3A//www.marsrutai.info/node.gif|p&sensor=51.500073,-0.132093,51.499806,-0.125656,51.498257,-0.113640
    
        var markerPoint = $("#print_map_point").val();
        
        
        var imgSrc = getMapSnapshot(13,"512x512","roadmap",markerPoint,false,false);
        var html  = '<html>';
            html += '<head>';
            html += '<link rel="stylesheet" type="text/css" href="css/reset.css" media="screen,projection" />';
            html += '<link rel="stylesheet" type="text/css" href="css/structure.css" media="screen,projection" />';
            html += '<link rel="stylesheet" type="text/css" href="css/screen.css" media="screen,projection" />';
            html += '<link rel="stylesheet" type="text/css" href="css/image-refs.css" media="screen,projection" />';
            html += '<!--[if IE 7]><link rel="stylesheet" media="screen" type="text/css" href="css/ie7.css" /><![endif]-->';
            html += '<!--[if IE 6]><link rel="stylesheet" media="screen" type="text/css" href="css/ie6.css" /><![endif]-->';
            html += '</head><bo'+'dy style="background-color:white;">';
            html += '<!--<h2>Print Map</h2><button onclick="javascript:window.print();">PRINT MAP</button>--><br/>';
            html += '<img src="' + imgSrc + '" alt="" />';
            html += '</bo'+'dy></html>';        
        mapWindow.document.write(html);
        
        
    }
    function printDealerDirectionsMap(){
        var a =  $("#submit_ride_directions_point_a").val();
        var b = $("#submit_ride_directions_point_b").val(); 
        //create textual from: a to: b for directions retry if load error in new window
        
        var html  = '<html>';
        html += '<head>';
        html += '<script src="http://maps.google.com/maps?file=api&v=2&key=ABQIAAAAQqogsz9ei1taUSOW5xo6fhT2yXp_ZAY8_ufC3CFXhHIE1NvwkxQWNyZFYNLnoZyRwxREGKrBhUYfLA&sensor=true" type="text/javascript"><\/script>\n';
        html += '<link rel="stylesheet" type="text/css" href="css/reset.css" media="screen,projection" />\n';
        html += '<link rel="stylesheet" type="text/css" href="css/structure.css" media="screen,projection" />\n';
        html += '<link rel="stylesheet" type="text/css" href="css/screen.css" media="screen,projection" />\n';
        html += '<link rel="stylesheet" type="text/css" href="css/image-refs.css" media="screen,projection" />\n';
        html += '<!--[if IE 7]><link rel="stylesheet" media="screen" type="text/css" href="css/ie7.css" /><![endif]-->\n';
        html += '<!--[if IE 6]><link rel="stylesheet" media="screen" type="text/css" href="css/ie6.css" /><![endif]-->\n';
        html += '<script type="text/javascript">\n';
        html += 'var map;\n';
        html += 'var directionsPanel;\n';
        html += 'var directions;\n';
        html += 'function initialize() {';
        html += '  map = new GMap2(document.getElementById("map_canvas"));\n';
        html += '  directionsPanel = document.getElementById("directions_panel");\n';
        html += '  map.setCenter(new GLatLng(49.496675,-102.65625), 3);\n';
        html += '  directions = new GDirections(map, directionsPanel);\n';
        html += 'GEvent.addListener(directions, "error", function() {alert("e:" + directions.getStatus().code);});\n';
        html += 'var a = new GLatLng' + a + ';\n';
        html += 'var b = new GLatLng' + b + ';\n';
        html += '  directions.loadFromWaypoints([a,b]);\n';
        html += '}';
        html += '<\/script>';
        html += '</head><bo'+'dy style="background-color:white;">';
        html += '<!--<h2>Print Map</h2><button onclick="javascript:self.print();return false;">PRINT MAP</button>--><br/>';
        html += '<div id="map_canvas" style="height:450px;width:100%;"></div>';
        html += '<div id="directions_panel"></div>';
        html += '<script type="text/javascript">var t=setTimeout("initialize()",1000);';
        html += '<\/script>';
        html += '</bo'+'dy></html>';        
        mapWindow.document.write(html);
    
    }
   
    function openMapWindow(){
        
            if(!mapWindow){
                mapWindow = window.open("", "newwin", "height=550, width=550,toolbar=no,scrollbars=yes,menubar=yes");
            }else{
                    try{
                    mapWindow.focus();
                    }catch(e){
                            mapWindow = window.open("", "newwin", "height=550, width=550,toolbar=yes,scrollbars=yes,resizable=yes,menubar=no");
                            
                        }    
                }
            mapWindow.onbeforeunload = function(){ mapWindow = null; };
                
    }
    function sortNumber(a,b)
    {
        return a - b;
    }

    function mergeResults(multiDimArray){
    //alert(multiDimArray);
    var temp=[];
    var result=[];
        for(var i in multiDimArray){
        
            for(var j in multiDimArray[i]){
    
                result.push(temp.concat(multiDimArray[i][j]));
            }
        }
  
    }
    function removeDuplicates(duplicatesArray)
    {
       var r = new Array();
       o:for(var i = 0, n = duplicatesArray.length; i < n; i++)
       {
          for(var x = 0, y = r.length; x < y; x++)
          {
             if(r[x]==duplicatesArray[i]) continue o;
          }
          r[r.length] = duplicatesArray[i];
       }
       return r;
    }
    function getDirections(pointA, pointB){
            directions.loadFromWaypoints([pointA,pointB],{getPolyline:true}); 
        
    }

    function retryDirections(){
        var text_version = $("#submit_ride_directions_text_dir").val();
            if(!directionsRetry){
                directionsRetry = true;
                directions.load(text_version); 
            }else{
                alert("Sorry Google maps cannot find diretions for the given locations");
                directionsRetry = false;
                }
            //try again using load instead
            //directions.loadFromWaypoints([pa,pb]);
        
     }
    function getDealerAddress(dealer){}
    function getDealerLatLngs(dealerArray){
        var latLngArray = [];
        
        for(var i=0;i<dealerArray.length;i++){
            latLngArray.push(new GLatLng(dealerArray[i]["lat"],dealerArray[i]["lng"]));
        }
        if(latLngArray.length>0){ return latLngArray; }else{ return false; }
    }
    function setZoomLevelToShowMarkers(gLatLngArray){
        var zoomLevel, pCenter, maxZoomLevel = 12;
        if(gLatLngArray.length==1){
            zoomLevel = maxZoomLevel;
            pCenter = gLatLngArray[0];
        } else {
            var polygon = new GPolygon(gLatLngArray, null, 5, 0.7, '#aaaaff', 0.5, {clickable:false} );
            map.addOverlay(polygon);
            polygon.hide(); 
            var pBounds = polygon.getBounds();            
            pCenter = pBounds.getCenter();
            zoomLevel = map.getBoundsZoomLevel(pBounds);
            if (zoomLevel > maxZoomLevel) { zoomLevel = maxZoomLevel; }
            map.removeOverlay(polygon);
        }
        map.setCenter(pCenter,zoomLevel);    
    }
    function setZoomForCountry(country){
        var filtered = filterDataByCountry(pageData,country);
        var latLngArray = getDealerLatLngs(filtered);
        setZoomLevelToShowMarkers(latLngArray);
        
    }
    function setZoomForResult(data){
        var filtered,latLngArray,country;
        
        country = getCountry();
        filtered = filterDataByCountry(data,country);
        if(filtered){
        
            latLngArray = getDealerLatLngs(filtered);
            setZoomLevelToShowMarkers(latLngArray);
        }else{
                alert("no Triumph dealers found for " + country);
                return false;
                
            }
    }
        
    function getDealerFullAddress(dealerData,dealerName){
        var dealer; 
        var address;
        if( findDealerByName(dealerData,dealerName) ){
        
            address  = dealer["address"] + '<br/>';
            address += dealer["city"] + '<br/>';
            address += dealer["county"] + '<br/>';
            address += dealer["postcode"] + '<br/>';
            address += dealer["country"] + '<br/>';
            return address;
            
        }else{
                return false;
            }
        
    }
    
    function findDealerByName(dealerDimData,name){
        var dealerIndex = findIndexByCol(dealerDimData,name,"name");
        if(dealerDimData[dealerIndex].length >0){
            return dealerDimData[dealerIndex];
            
        }else{
                return false;
            
            }
        
    }
    
    
    //clear the distance data
    function clearDistances(){
        lastLocation = '';
        for(var i =0;i<pageData.length;i++){
            pageData[i]["distance"] = null;
        }
        
    }
    
    function findIndexByCol(array2Dim,value,cIdx){
        var ctr = "";
        for (var i=0; i < array2Dim.length; i++) {
        // use === to check for Matches. ie., identical (===), ;
        if (array2Dim[i][cIdx] == value) {
        //alert(this[i][cIdx]+"===="+value);
        return i;
        }
        }
        return ctr;
    }

    function showDealerDetails(dealerName){
        var address;
        var times;
        address = findDealerByName(pageData,dealerName);
        
        alert(address);
        
    }

    function resetFormInput(inputName){
        $("[name=" + inputName + "]").val("") ;
        
    }
    function resetForm(){
        resetFormInput("dealersNearTo");
        resetFormInput("andOr");
    }

    function handleFormKeyPress(event){
        if (event.keyCode == '13') {
            event.preventDefault();
            triggerDistancesFromLocation();
            return false;  
        } else { 
            return true;
        }          
    }
    
    function triggerDistancesFromLocation() { 
        $('#dealersNearTo').blur();
        var loc = $('[name=dealersNearTo]').val();
        var temp = jQuery.trim(loc);
        loc = temp + ', ' + getCountry();
        if (temp.length > 2 && loc != lastLocation) {
            locationNotFound = false; 
            getDistancesFromLocation(loc, handleSearchFormClick);
        } else {
            handleSearchFormClick();
        }
    }

    //start  
    init();
}

/* End - 412 - JS Dealer Search rev. 614 */// TriumphSsoLibrary.js Rev 4784
// CONTAINS PHP DO NOT OVERWRITE
var TriumphSSO = (function() {
    // private variables
    var _applicationId = null;
    var _handlerFunction = null;
    
    // private methods
    function _isInit() {
        return _applicationId != null && _handlerFunction != null;
    }

    function _gup(name) {
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null) {
            return "";
        } else {
            return results[1];
        }
    }
    
    function _createCookie(name, value, mins) {
        if (mins) {
            var date = new Date();
            date.setTime(date.getTime() + (mins * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    
    function _readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') { 
                c = c.substring(1,c.length); 
            }
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }
    
    function _eraseCookie(name) {
        _createCookie(name, "", -1);
    }
    
    function _dynamicScriptRequest(url) {
        document.write('<scr' + 'ipt src="' + url + '"></scr' + 'ipt>');
    }    
    var sso = {};
    
    // public methods
    sso.init = function(applicationId, handlerFunction) {
        if (!_isInit()) {
            _applicationId = applicationId;
            _handlerFunction = handlerFunction;
        }
    }
    
    sso.checkLogin = function() {
        if (_isInit()) {
            var date = new Date();
            if (_readCookie('token') != null && _readCookie('token') != '' && _readCookie('timeToReValidate') != null && _readCookie('timeToReValidate') > date.getTime()) {
                if (_handlerFunction) {
                    _handlerFunction();
                }
            } else {
                _dynamicScriptRequest("https://www.my-triumph.net/sso/cookie/?locale=en_us");
            }
        }
    }
    sso.login = function(applicationPath) {
        if (_isInit()) {
            location.href = "https://www.my-triumph.net/sso/login/?applicationId=" + _applicationId + '&applicationPath=' + applicationPath;
        }
    }
    sso.setUser = function(user) {
        // only called by public SSO website if there is no cookie available.
        if (_isInit()) {
            if (user.token != null) {
                _createCookie('token', user.token, 3);
                _createCookie('firstName', user.firstName, 3);
                _createCookie('lastName', user.lastName, 3);
                _createCookie('timeToReValidate', user.expiry, 3);
            }
            if (_handlerFunction) {
                _handlerFunction();
            }
        }
    }
    
    sso.getFirstName = function() {
        return _isInit() ? _readCookie('firstName') : '';
    }
    
    sso.getLastName = function() {
        return _isInit() ? _readCookie('lastName') : '';
    }    
    sso.getToken = function() {
        return _isInit() ? _readCookie('token') : '';
    }
    sso.logout = function(applicationPath) {
        if (_isInit()) {
            _eraseCookie('token');
            _eraseCookie('firstName');
            _eraseCookie('lastName');
            _eraseCookie('timeToReValidate');
            if (applicationPath) { location.href = "https://www.my-triumph.net/sso/logout/?applicationId=" + _applicationId + '&applicationPath=' + applicationPath; }
        }
    }    
    sso.register = function(applicationPath) {
        if (_isInit()) {
            location.href = "https://www.my-triumph.net/sso/register/?applicationId=" + _applicationId + '&applicationPath=' + applicationPath;
        }
    }    
    sso.forgotPassword = function(applicationPath) {
        if (_isInit()) {
            location.href = "https://www.my-triumph.net/sso/forgotten-password/?applicationId=" + _applicationId + '&applicationPath=' + applicationPath;
        }
    }    
    return sso;
})();/* ============== START - geolocation.css ============== *
 * geolocation.css
 * revision $LastChangedRevision: 821 $
 * ===================================================== */
$(window).load(function() {
  
  var countries;
  matchedCountries=[];
  var country = $.cookie('country');
   
   //load country Data
   geolocation();
    
    if (country) { // return visitor
        //alert('return: ' + country);
        setCountry(country);
    } else { // new visitor
        //alert('new');
        $.getScript("http://j.maxmind.com/app/country.js", function() {
            try { country = geoip_country_code(); } catch(e) { country = 'unknown' }; // make sure we fail nicely if MaxMind is unavailable
            setCountry(country);
        });
    }  
});
function setCountry(country){
  
  var compUrl = getWebsiteDomain();  
       
    if (countries[country]) { // country has an entry / web site
            
           for (var ctr in countries) {
                
                 for (var i in countries[ctr]['url']) {
                    if (compUrl == countries[ctr]['url'][i]) {
                         matchedCountries.push(ctr);
                     }
                 }
             }
            
            if ($.inArray(country,matchedCountries) > -1) {
                //alert('match');
                $.cookie('country', country, { expires: 7 });
            } else { // show geolocation prompt
                //alert('no match');
                geoprompt(country);        
            }
        } else { // country doesn't have an entry / web site or is unknown
            //alert('no site');
            $.cookie('country', getWebsiteDomain(), { expires: 7 });
        }  
}
function geolocation() {
        //alert('geolocation: ' + country);
        countries = {
            'AU': {
                message: "Visiting from Australia? Click to view your local market website", 
                okay: "Visit Triumph Australia", 
                cancel: "No thank you", 
                close: "Cancel", 
                url: ['http://www.triumphmotorcycles.com.au'], 
                flag: 'australia'
            },
            'BE': {
                message: "Vous êtes belges? Voulez-vous être redirigé vers le site correspondant?", 
                okay: "Bezoek Triumph België",
                okay2: "Visitez Triumph Belgique", 
                cancel: "Nee, bedankt / Non, Merci", 
                url: ['http://www.triumphmotorcycles.be', 'http://www.triumphmotorcycles.be/fr'], 
                flag: 'belgium'
            },
            'CA': {
                message: "Visiting from Canada? Click to view your local market website", 
                okay: "Visit Triumph Canada", 
                cancel: "No thank you", 
                close: "Cancel", 
                url: ['http://www.triumph-motorcycles.ca'], 
                flag: 'canada'
            },
            'CH': {
                message: "Vous êtes en Suisse ? Cliquez ici pour accéder à votre site Internet local.", 
                okay: "Accéder à Triumph Suisse", 
                cancel: "Non merci", 
                close: "Annuler", 
                url: ['http://www.triumphmotorcycles.ch', 'http://www.triumphmotorcycles.ch/de'], 
                flag: 'switzerland'
            },
            'DE': {
                message: "Sie sind aus Deutschland? Klicken Sie hier für die Website Ihres Landes.", 
                okay: "Besuchen Sie Triumph Deutschland", 
                cancel: "Nein danke", 
                close: "Xabbrechen", 
                url: ['http://www.triumphmotorcycles.de'], 
                flag: 'germany'
            },
            'AT': {
                message: "Sie sind aus Deutschland? Klicken Sie hier für die Website Ihres Landes.", 
                okay: "Besuchen Sie Triumph Deutschland", 
                cancel: "Nein danke", 
                close: "Abbrechen", 
                url: ['http://www.triumphmotorcycles.de'], 
                flag: 'germany'
            },
            'ES': {
                message: "¿Resides en España? Selecciona aquí para acceder a tu página web local", 
                okay: "Visita Triumph España", 
                cancel: "No gracias", 
                close: "Cancelar", 
                url: ['http://www.triumphmotorcycles.es'], 
                flag: 'spain'
            },
            'FI': {
                message: "Visiting from Finland? Click to view your local market website", 
                okay: "Visit Triumph Finland", 
                cancel: "No thank you", 
                close: "Cancel", 
                url: ['http://www.triumphmotorcycles.fi'], 
                flag: 'finland'
            },
            'FR': {
                message: "Vous êtes Français? Voulez-vous être redirigé vers le site correspondant?", 
                okay: "Aller sur Triumph France", 
                cancel: "Non merci", 
                close: "Annuler", 
                url: ['http://www.triumphmotorcycles.fr'],
                flag: 'france'
            },
            'GB': {
                message: "Visiting from the UK? Click to view your local market website", 
                okay: "Visit Triumph UK", 
                cancel: "No thank you", 
                close: "Cancel", 
                url: ['http://www.triumphmotorcycles.co.uk'], 
                flag: 'united-kingdom'
            },
            'GR': {
                message: "Είστε από την Ελλάδα;? για να δείτε την τοπική σας σελίδα", 
                okay: "Είσοδος στην Triumph Ελλάδας", 
                cancel: "Όχι ευχαριστώ",
                close: "Cancel", 
                url: ['http://www.triumphmotorcycles.gr'], 
                flag: 'greece'
            },
            'IT': {
                message: "Stai visitando il sito dall'Italia? Clicca per vedere la versione locale", 
                okay: "Visita Triumph Italia", 
                cancel: "No grazie", 
                close: "Cancella", 
                url: ['http://www.triumphmotorcycles.it'], 
                flag: 'italy'
            },
            'JP': {
                message: "日本からのアクセスですか？日本語版サイトをご覧になるにはこちらをクリック", 
                okay: "Visit Triumph Japan", 
                cancel: "No thank you", 
                close: "Cancel", 
                url: ['http://www.triumphmotorcycles.jp'], 
                flag: 'japan'
            },
            'LU': {
                message: "Vous êtes belges? Voulez-vous être redirigé vers le site correspondant ?", 
                okay: "Bezoek Triumph België",
                okay2: "Visitez Triumph Belgique", 
                cancel: "Nee, bedankt / Non, Merci", 
                url: ['http://www.triumphmotorcycles.be', 'http://www.triumphmotorcycles.be/fr'], 
                flag: 'belgium'
            },
            'MX': {
                message: "¿Resides en México? Selecciona aquí para acceder a tu página web local", 
                okay: "Visita Triumph México", 
                cancel: "No gracias", 
                close: "Cancelar", 
                url: ['http://www.triumphmotorcycles.mx'], 
                flag: 'mexico'
            },
            'NL': {
                message: "Komt u uit Nederland? Klik om naar de nederlandse site te gaan", 
                okay: "Ga naar Triumph Nederland", 
                cancel: "Nee bedankt", 
                close: "Annuleren", 
                url: ['http://www.triumphmotorcycles.nl'], 
                flag: 'holland'
            },
            'NZ': {
                message: "Visiting from New Zealand? Click to view your local market website", 
                okay: "Visit Triumph New Zealand", 
                cancel: "No thank you",
                close: "Cancel", 
                url: ['http://www.triumphmotorcycles.co.nz'], 
                flag: 'new-zealand'
            },
            'SE': {
                message: "På besök från Sverige? Klicka för att komma till till din lokala hemsida",
                okay: "Besök Triumph Sweden", 
                cancel: "Nej tack", 
                close: "Ångra", 
                url: ['http://www.triumphmotorcycles.se'], 
                flag: 'sweden'
            },
            'US': {
                message: "Visiting from the USA? Click to view your local market website", 
                okay: "Visit Triumph USA", 
                cancel: "No thank you",
                close: "Cancel", 
                url: ['http://www.triumphmotorcycles.com'], 
                flag: 'usa'
            },
            'ZA': {
                message: "Visiting from South Africa? Click to view your local market website", 
                okay: "Visit Triumph South Africa", 
                cancel: "No thank you",
                close: "Cancel", 
                url: ['http://www.triumphmotorcycles.co.za'], 
                flag: 'south-africa'
            }
        };
}   

function recordLocaleChange(link, category, action, label) {
            //alert(link.href + "\n" + category + "\n" + action + "\n" + label);
            _gat._getTrackerByName()._trackEvent(category, action, label);
            _gat._getTrackerByName('b')._trackEvent(category, action, label);
            setTimeout('document.location = "' + link.href + '"', 100);
        }
        
   function geochoose(country) {
            $.cookie('country', country, { expires: 7 });
            $('#geolocation').hide();
        }
        
   function getWebsiteDomain()  {
             //strip the url part after the first "/" to get just the domain left and then compare the actual domains
            //instead of checking if the URL contains the domain name.
            var compURL=window.location.href.slice(0,window.location.href.indexOf("/",7));
             return compURL;
        }
        
        function geoprompt(country) {
            //alert('geoprompt: ' + country);
            $('#geomessage').addClass(countries[country]['flag']);
            $('#geomessage').html(countries[country]['message']);
            $('#geocancel span').html(countries[country]['cancel']);
            $('#geocancel').click(function() {
                geochoose(matchedCountries[0]); 
                recordLocaleChange(this, 'Locale Change', matchedCountries[0] + ' to ' + country, '0'); 
                return false;
            });
            $('#geoclose').attr('title', countries[country]['close']);
            $('#geoclose').click(function() {
                geochoose(matchedCountries[0]);
                recordLocaleChange(this, 'Locale Change', matchedCountries[0] + ' to ' + country, '0'); 
                return false; 
            });
            $('#georedirect span').html(countries[country]['okay']);
            $('#georedirect').attr('href', countries[country]['url'][0]);
            $('#georedirect').click(function() {
                geochoose(country); 
                recordLocaleChange(this, 'Locale Change', matchedCountries[0] + ' to ' + country, '1');
                return false;
            });
            if(countries[country]['okay2'] != undefined){
                $('#georedirect2 span').html(countries[country]['okay2']);
                $('#georedirect2').attr('href', countries[country]['url'][1]);
                $('#georedirect2').click(function() {
                    geochoose(country); 
                    recordLocaleChange(this, 'Locale Change', matchedCountries[0] + ' to ' + country, '1');
                    return false;
                });            
                $('#georedirect2').show();
            }
            $('#geolocation').show();
        }        
/* =============== END - geolocation.css =============== */