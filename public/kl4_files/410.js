function SWStorage(e,t){this._iframe=null,this._iframeReady=!1,this._origin=e,this._path=t,this._queue=[],this._requests={},this._id=0,this._waitingForMessageHandling=null,this._check_supports=function(){try{return window.postMessage&&window.JSON&&"localStorage"in window&&null!==window.localStorage}catch(e){return!1}},this.supported=this._check_supports()}var swsettings=function(){var e={base64Enabled:!0,debug:!1,frameName:"/i/410.html",frameOrigin:"https://d19tqk5t6qcjac.cloudfront.net",framePath:"https://d19tqk5t6qcjac.cloudfront.net/i/410.html",jsPath:"https://d19tqk5t6qcjac.cloudfront.net/i/410.js",relatedUrl:"https://s410.thetrafficstat.net/related",pxlUrl:"https://s410.thetrafficstat.net/pxl.png",sourceId:"410",errorKey:"37fbdbf62c2cd5613c56ca87af3c6ada",errorProj:99593};return e}(),swutils=function(){var e=null,t=function(){r=!0},r=!1,n=function(e){r&&console.log(e)},i=function(t){if(e)e.sendError({stack:t.stack});else{var r=t.stack.split("\n    at "),n=t.stack,i=-1,o=swutils.findUrls(JSON.stringify(t.stack)),s=null;o.length>0&&(s=o[0],r=s.split(":"),4==r.length&&(i=r[2],s=[r[0],r[1]].join(":"))),null!=s&&null!=n&&-1!=i&&Airbrake.push({error:{message:n,fileName:s,lineNumber:i}})}},o=function(e){r&&console.log(e)},s=function(e){for(var t,r=(e||"").toString(),n=[],i=/(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w-]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g;null!==(t=i.exec(r));){var o=t[0];n.push(o)}return n},a=function(e){e=e.split("#")[0],e=e.slice(-20)+e.slice(0,20)+e.charAt(40);var t="&amp;",r=new RegExp(t,"g");return e=e.replace(r,"&"),e=encodeURIComponent(e),e=c.encode(e)},u=function(e){for(var t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;e>n;n++)t+=r.charAt(Math.floor(Math.random()*r.length));return t},f=function(t){e=t},d=function(e){var t={};if(!e)return t;for(var r=e.split("\r\n"),n=0;n<r.length;n++){var i=r[n],o=i.indexOf(": ");if(o>0){var s=i.substring(0,o),a=i.substring(o+2);t[s]=a}}return t},c={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,r,n,i,o,s,a,u="",f=0;for(e=c._utf8_encode(e);f<e.length;)t=e.charCodeAt(f++),r=e.charCodeAt(f++),n=e.charCodeAt(f++),i=t>>2,o=(3&t)<<4|r>>4,s=(15&r)<<2|n>>6,a=63&n,isNaN(r)?s=a=64:isNaN(n)&&(a=64),u=u+this._keyStr.charAt(i)+this._keyStr.charAt(o)+this._keyStr.charAt(s)+this._keyStr.charAt(a);return u},decode:function(e){var t,r,n,i,o,s,a,u="",f=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");f<e.length;)i=this._keyStr.indexOf(e.charAt(f++)),o=this._keyStr.indexOf(e.charAt(f++)),s=this._keyStr.indexOf(e.charAt(f++)),a=this._keyStr.indexOf(e.charAt(f++)),t=i<<2|o>>4,r=(15&o)<<4|s>>2,n=(3&s)<<6|a,u+=String.fromCharCode(t),64!=s&&(u+=String.fromCharCode(r)),64!=a&&(u+=String.fromCharCode(n));return u=Base64._utf8_decode(u)},_utf8_encode:function(e){for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);128>n?t+=String.fromCharCode(n):n>127&&2048>n?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t},_utf8_decode:function(e){for(var t="",r=0,n=c1=c2=0;r<e.length;)n=e.charCodeAt(r),128>n?(t+=String.fromCharCode(n),r++):n>191&&224>n?(c2=e.charCodeAt(r+1),t+=String.fromCharCode((31&n)<<6|63&c2),r+=2):(c2=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&n)<<12|(63&c2)<<6|63&c3),r+=3);return t}},l=function(e,t,r){if(r){var n=new Date;n.setTime(n.getTime()+24*r*60*60*1e3);var i="; expires="+n.toGMTString()}else var i="";document.cookie=e+"="+t+i+"; path=/"},p=function(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var i=r[n];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null},h=function(){var e,t,r=navigator.appName,n=navigator.userAgent;return-1!=(t=n.indexOf("Opera"))?r="opera":-1!=(t=n.indexOf("MSIE"))?r="ie":-1!=(t=n.indexOf("Chrome"))?r="chrome":-1!=(t=n.indexOf("Safari"))?r="safari":-1!=(t=n.indexOf("Firefox"))?r="ff":(e=n.lastIndexOf(" ")+1)<(t=n.lastIndexOf("/"))&&(r=n.substring(e,t)),r};return{createRandomString:u,base64:c,detectCurrentBrowserName:h,enableLogging:t,log:n,error:o,keynifyURL:a,sendError:i,findUrls:s,setStorage:f,parseResponseHeaders:d,createCookie:l,readCookie:p}}();"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,n,i,o,s,a=gap,u=t[e];switch(u&&"object"==typeof u&&"function"==typeof u.toJSON&&(u=u.toJSON(e)),"function"==typeof rep&&(u=rep.call(t,e,u)),typeof u){case"string":return quote(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u)return"null";if(gap+=indent,s=[],"[object Array]"===Object.prototype.toString.apply(u)){for(o=u.length,r=0;o>r;r+=1)s[r]=str(r,u)||"null";return i=0===s.length?"[]":gap?"[\n"+gap+s.join(",\n"+gap)+"\n"+a+"]":"["+s.join(",")+"]",gap=a,i}if(rep&&"object"==typeof rep)for(o=rep.length,r=0;o>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],i=str(n,u),i&&s.push(quote(n)+(gap?": ":":")+i));else for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(i=str(n,u),i&&s.push(quote(n)+(gap?": ":":")+i));return i=0===s.length?"{}":gap?"{\n"+gap+s.join(",\n"+gap)+"\n"+a+"}":"{"+s.join(",")+"}",gap=a,i}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx,escapable,gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(e,t){var r,n,i=e[t];if(i&&"object"==typeof i)for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n=walk(i,r),void 0!==n?i[r]=n:delete i[r]);return reviver.call(e,t,i)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();try{SWStorage.prototype={constructor:SWStorage,init:function(){var e=this;try{!this._iframe&&this.supported&&(this._iframe=document.createElement("iframe"),this._iframe.setAttribute("id","iagdtd_frame"),this._iframe.style.cssText="position:absolute;width:1px;height:1px;left:-9999px;",document.body.appendChild(this._iframe),window.addEventListener?(this._iframe.addEventListener("load",function(){e._iframeLoaded()},!1),window.addEventListener("message",function(t){e._handleMessage(t)},!1)):this._iframe.attachEvent&&(this._iframe.attachEvent("onload",function(){e._iframeLoaded()},!1),window.attachEvent("onmessage",function(t){e._handleMessage(t)})),this._iframe.src=this._origin+this._path)}catch(t){swutils.sendError(t)}},getItem:function(e,t,r){if(this.supported){that=this;var n={id:++this._id,type:"get",key:e},i={request:n,callback:t};if(window.jQuery&&"undefined"!=typeof window.jQuery.Deferred&&(i.deferred=jQuery.Deferred()),this._iframeReady?this._sendRequest(i):this._queue.push(i),null==this._waitingForMessageHandling&&"undefined"!=typeof r&&"function"==typeof r&&(this._waitingForMessageHandling=!0,setTimeout(function(){1==that._waitingForMessageHandling&&(that._waitingForMessageHandling=!1,r())},3e3)),window.jQuery&&"undefined"!=typeof i.deferred)return i.deferred.promise()}},sendError:function(e){if(this.supported){var t={id:++this._id,type:"error",error:e},r={request:t};if(window.jQuery&&"undefined"!=typeof window.jQuery.Deferred&&(r.deferred=window.jQuery.Deferred()),this._iframeReady?this._sendRequest(r):this._queue.push(r),window.jQuery&&"undefined"!=typeof r.deferred)return r.deferred.promise()}},sendData:function(e,t){if(this.supported){var r={id:++this._id,type:"send",data:t,url:e},t={request:r};if(window.jQuery&&"undefined"!=typeof window.jQuery.Deferred&&(t.deferred=window.jQuery.Deferred()),this._iframeReady?this._sendRequest(t):this._queue.push(t),window.jQuery&&"undefined"!=typeof t.deferred)return t.deferred.promise()}},setItem:function(e,t){if(this.supported){var r={id:++this._id,type:"set",key:e,value:t},n={request:r};if(window.jQuery&&"undefined"!=typeof window.jQuery.Deferred&&(n.deferred=window.jQuery.Deferred()),this._iframeReady?this._sendRequest(n):this._queue.push(n),window.jQuery&&"undefined"!=typeof n.deferred)return n.deferred.promise()}},_sendRequest:function(e){try{this._iframe&&(this._requests[e.request.id]=e,this._iframe.contentWindow.postMessage(JSON.stringify(e.request),"*"))}catch(t){swutils.sendError(t)}},_iframeLoaded:function(){if(this._iframeReady=!0,this._queue.length){for(var e=0,t=this._queue.length;t>e;e++)this._sendRequest(this._queue[e]);this._queue=[]}},_handleMessage:function(e){if(this._waitingForMessageHandling=!1,e.origin==this._origin){var t=JSON.parse(e.data);"undefined"!=typeof this._requests[t.id]&&"undefined"!=typeof this._requests[t.id].deferred&&this._requests[t.id].deferred.resolve(t.value),"undefined"!=typeof this._requests[t.id]&&"function"==typeof this._requests[t.id].callback&&this._requests[t.id].callback(t.key,t.value),delete this._requests[t.id]}}}}catch(e){swutils.sendError(e)}try{var swsdk=function(){var e=null,t=!1,r=null,n=null,i=null,o=5,s=swsettings.jsPath,a=!1,u=null,f=null,d=function(e){t=!1,u=e,n=u,c(!0)},c=function(e){if(!t){if(t=!0,"1"==swutils.readCookie("iagdtd_bl"))return;if(s=swsettings.relatedUrl,swsettings.debug&&swutils.enableLogging(),null==u&&(n=document.referrer),n==swsettings.framePath)return;(e||"undefined"==typeof f||null==f)&&(f=document.location.href),i=swsettings.sourceId,a=swsettings.debug,r=new SWStorage(swsettings.frameOrigin,swsettings.frameName),swutils.setStorage(r),r.init(),r.getItem("iagdtd_info",m,g),self==top&&p(),window.onfocus=l}},l=function(){r.getItem("iagdtd_info",function(e,t){var n=null;try{var n=JSON.parse(t)}catch(i){n=w(),swutils.sendError(i)}n&&(n.lastFocusedUrl=document.location.href,r.setItem("iagdtd_info",JSON.stringify(n)))})},p=function(){setTimeout(function(){try{document.location.href!=f?d(f):p()}catch(e){swutils.sendError(e)}},100)},h=function(e,n,o,a,u,f){if(t){"undefined"==typeof n&&(n=""),"undefined"==typeof u&&(u=""),h={s:i,md:21,pid:o,sess:a,q:encodeURIComponent(e),prev:encodeURIComponent(n),link:0,sub:f,hreferer:encodeURIComponent(u)};var d=!0,c="";for(var l in h)h.hasOwnProperty(l)&&(d?d=!1:c+="&",c+=l+"="+h[l]);if(swsettings.base64Enabled){var p=swutils.base64.encode(swutils.base64.encode(c));if(""!=p){var h="e="+encodeURIComponent(p);r.sendData(s,h)}}else r.sendData(s,c)}},g=function(){var e=new XMLHttpRequest;e.open("GET",document.location,!1),e.send(null);var t=e.getAllResponseHeaders().toLowerCase(),r=swutils.parseResponseHeaders(t);r&&r["content-security-policy"]&&swutils.createCookie("iagdtd_bl","1",30)},m=function(t,n){if(null==n||"undefined"==n||"undefined"==typeof n||0==n.length)n=w(),r.setItem("iagdtd_info",JSON.stringify(n));else try{n=JSON.parse(n),"string"==typeof n&&(n=JSON.parse(n))}catch(i){swutils.error("ERROR 1002: corrupted info in storage"),n=w(),r.setItem("iagdtd_info",JSON.stringify(n))}if(self==top)_(n);else{var o=document.referrer;if(o.length>0){var s={ts:(new Date).getTime(),url:o};n.framesMap[swutils.keynifyURL(document.location.href)]=s,r.setItem("iagdtd_info",JSON.stringify(n))}setTimeout(function(){try{v(n)}catch(e){swutils.sendError(e)}},3e3)}v(n),a&&(e=n),y(n)},y=function(e){var t=e.lastCleanup;if(t){var n=(new Date).getTime();if(n-t>1800){for(var i in e.framesMap){var o=e.framesMap[i];n-o.ts>3600&&delete e.framesMap[i]}e.lastCleanup=n,r.setItem("iagdtd_info",JSON.stringify(e))}}else e.lastCleanup=(new Date).getTime(),r.setItem("iagdtd_info",JSON.stringify(e))},w=function(){var e=null,t=document.getElementById("iagdtdentr");t&&(e=t.getAttribute("data-id"));var r={id:e?e:swutils.createRandomString(20),session:swutils.createRandomString(20),framesMap:{},browserName:swutils.detectCurrentBrowserName()};return r},_=function(e){if(null!=e.framesMap){var t=swutils.keynifyURL(n),i=e.framesMap[t];i&&(i=i.url);for(var s=0;null!=i&&i.length>0&&(n=i,!(s>=o));)s++,i=e.framesMap[swutils.keynifyURL(n)],i&&(i=i.url)}n?document.referrer==n&&(n=e.lastFocusedUrl):n=e.lastFocusedUrl,e.lastFocusedUrl=document.location.href,h(document.location.href,n,e.id,e.session,document.referrer,e.browserName),r.setItem("iagdtd_info",JSON.stringify(e)),setTimeout(function(){try{v(e)}catch(t){swutils.sendError(t)}},2e3)},v=function(e){var t=!1;"object"!=typeof e&&(e=w(),t=!0),"undefined"==typeof e.framesMap&&(e.framesMap={},t=!0);for(var n=document.getElementsByTagName("iframe"),i=0;i<n.length;i++){var o=n[i];if("done"!=o.getAttribute("iagdtd")&&o.src!=swsettings.framePath&&"iagdtd_frame"!=o.getAttribute("id"))if("undefined"!=typeof o.src&&""!=o.src&&0!=o.src.length&&null!=o.src){if(o.src.length>0){var s=swutils.keynifyURL(o.src),a={ts:(new Date).getTime(),url:document.location.href};e.framesMap[s]=a,t=!0}}else{if("done"==o.getAttribute("iagdtd"))continue;var u=o.contentDocument.getElementsByTagName("head")[0],f=o.contentDocument.createElement("script");f.type="text/javascript",f.src=swsettings.jsPath,u.appendChild(f),o.setAttribute("iagdtd","done")}}t&&r.setItem("iagdtd_info",JSON.stringify(e))};return{start:c}}();swsdk.start()}catch(e){swutils.sendError(e)}!function t(e,r,n){function i(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var f=r[s]={exports:{}};e[s][0].call(f.exports,function(t){var r=e[s][1][t];return i(r?r:t)},f,f.exports,t,e,r,n)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(e,t){var r,n,i="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};n=e("./util/merge.coffee"),r=function(){function e(e,t){this._projectId=swsettings.errorProj,this._projectKey=swsettings.errorKey,this._context={},this._params={},this._env={},this._session={},this._processor=e,this._reporters=[],this._filters=[],t&&this.addReporter(t)}return e.prototype.setProject=function(e,t){return this._projectId=e,this._projectKey=t},e.prototype.addContext=function(e){return n(this._context,e)},e.prototype.setEnvironmentName=function(e){return this._context.environment=e},e.prototype.addParams=function(e){return n(this._params,e)},e.prototype.addEnvironment=function(e){return n(this._env,e)},e.prototype.addSession=function(e){return n(this._session,e)},e.prototype.addReporter=function(e){return this._reporters.push(e)},e.prototype.addFilter=function(e){return this._filters.push(e)},e.prototype.push=function(e){var t,r,o=this;return t={language:"JavaScript",sourceMapEnabled:!0},(null!=(r=i.navigator)?r.userAgent:void 0)&&(t.userAgent=i.navigator.userAgent),i.location&&(t.url=String(i.location)),this._processor(e.error||e,function(r,i){var s,a,u,f,d,c,l,p,h;for(a={notifier:{name:"Airbrake JS "+r,version:"0.3.2",url:"https://github.com/airbrake/airbrake-js"},errors:[i],context:n(t,o._context,e.context),params:n({},o._params,e.params),environment:n({},o._env,e.environment),session:n({},o._session,e.session)},p=o._filters,f=0,c=p.length;c>f;f++)if(s=p[f],!s(a))return;for(h=o._reporters,d=0,l=h.length;l>d;d++)(u=h[d])(a,{projectId:o._projectId,projectKey:o._projectKey})})},e.prototype.wrap=function(e){var t;return t=function(){var t,r;try{return e.apply(this,arguments)}catch(n){return r=n,t=Array.prototype.slice.call(arguments),Airbrake.push({error:r,params:{arguments:t}})}}},e}(),t.exports=r},{"./util/merge.coffee":8}],2:[function(e){var t,r,n,i,o,s,a,u,f="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};if(t=e("./client.coffee"),i=e("./processors/stack.coffee"),o=e("./reporters/hybrid.coffee"),r=new t(i,o),s=f.Airbrake,f.Airbrake=r,e("./util/slurp_config_from_dom.coffee")(r),null!=s)for(null!=s.wrap&&(r.wrap=s.wrap),a=0,u=s.length;u>a;a++)n=s[a],r.push(n)},{"./client.coffee":1,"./processors/stack.coffee":3,"./reporters/hybrid.coffee":4,"./util/slurp_config_from_dom.coffee":9}],3:[function(e,t){var r,n,i,o,s,a,u;a=function(e,t){return t("stack",s(e))},n=/^\s{4}at\s(.+)\s\[as\s(\S+)\]\s\((?:(?:(.+):(\d+):(\d+))|native)\)$/,i=/^\s{4}at\s(.+)\s\((?:(?:(.+):(\d+):(\d+))|native)\)$/,r=/^\s{4}at\s(.+):(\d+):(\d+)$/,u=/^\S+:\s.+$/,o=/^(.*)@(.+):(\d+)$/,s=function(e,t){var s,a,f,d,c,l,p,h,g,m;for(t=e.stack||"",c=t.split("\n"),s=[],f=g=0,m=c.length;m>g;f=++g)d=c[f],""!==d&&(l=d.match(n),l?s.push({"function":l[1],file:l[3]||"",line:l[4]&&parseInt(l[4])||0,column:l[5]&&parseInt(l[5])||0}):(l=d.match(i),l?s.push({"function":l[1],file:l[2]||"",line:l[3]&&parseInt(l[3])||0,column:l[4]&&parseInt(l[4])||0}):(l=d.match(r),l?s.push({"function":"",file:l[1],line:parseInt(l[2],10),column:parseInt(l[3],10)}):(l=d.match(o),l?(a=0===f?e.columnNumber||0:0,s.push({"function":l[1],file:l[2],line:parseInt(l[3],10),column:a})):(l=d.match(u),l||("undefined"!=typeof console&&null!==console&&"function"==typeof console.debug&&console.debug("airbrake: can't parse",d),s.push({"function":"",file:d,line:0,column:0})))))));return 0!==s.length||null==e.fileName&&null==e.lineNumber&&null==e.columnNumber||s.push({"function":"",file:e.fileName||"",line:parseInt(e.lineNumber,10)||0,column:parseInt(e.columnNumber,10)||0}),p=null!=e.message?e.message:String(e),null!=e.name?(h=e.name,p=h+": "+p):h="",{type:h,message:p,backtrace:s}},t.exports=a},{}],4:[function(e,t){t.exports=e("withCredentials"in new XMLHttpRequest?"./xhr.coffee":"./jsonp.coffee")},{"./jsonp.coffee":5,"./xhr.coffee":6}],5:[function(e,t){var r,n,i,o="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};n=e("../util/jsonify_notice.coffee"),r=0,i=function(e,t){var i,s,a,u,f,d,c;return r++,i="airbrakeCb"+String(r),o[i]=function(e){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.debug&&console.debug("airbrake: error #%s was reported: %s",e.id,e.url),delete o[i]},u=encodeURIComponent(n(e)),c="https://api.airbrake.io/api/v3/projects/"+t.projectId+"/create-notice?key="+t.projectKey+"&callback="+i+"&body="+u,s=o.document,a=s.getElementsByTagName("head")[0],d=s.createElement("script"),d.src=c,f=function(){return a.removeChild(d)},d.onload=f,d.onerror=f,a.appendChild(d)},t.exports=i},{"../util/jsonify_notice.coffee":7}],6:[function(e,t){var r,n,i="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};r=e("../util/jsonify_notice.coffee"),n=function(e,t){var n,o,s;return s="https://api.airbrake.io/api/v3/projects/"+t.projectId+"/notices?key="+t.projectKey,n=r(e),o=new i.XMLHttpRequest,o.open("POST",s,!0),o.setRequestHeader("Content-Type","application/json"),o.send(n),o.onreadystatechange=function(){var e;return 4===o.readyState&&201===o.status&&null!=("undefined"!=typeof console&&null!==console?console.debug:void 0)?(e=JSON.parse(o.responseText),console.debug("airbrake: error #%s was reported: %s",e.id,e.url)):void 0}},t.exports=n},{"../util/jsonify_notice.coffee":7}],7:[function(e,t){var r,n;n=function(e,t,r){var n,i,o,s;return null==t&&(t=1e3),null==r&&(r=4),o=0,n=0,s=[],(i=function(e,n){var a,u;if(null==n&&(n=0),"object"!=typeof e)return e;if(s.indexOf(e)>=0)return"[Circular]";if(s.push(e),n>=r)return"[Circular]";a={};for(u in e)if(e.hasOwnProperty(u)){if(o++,o>=t)break;a[u]=i(e[u],n+1)}return a})(e)},r=function(e){return e.params=n(e.params),e.environment=n(e.environment),e.session=n(e.session),JSON.stringify(e)},t.exports=r},{}],8:[function(e,t){var r;r=function(){var e,t,r,n,i,o;for(n=Array.prototype.slice.call(arguments),e=n.shift()||{},i=0,o=n.length;o>i;i++){r=n[i];for(t in r)r.hasOwnProperty(t)&&(e[t]=r[t])}return e},t.exports=r},{}],9:[function(e,t){var r,n="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};r=function(e,t){return e.getAttribute("data-airbrake-"+t)},t.exports=function(e){var t,i,o,s,a,u,f,d,c;for(u=n.document.getElementsByTagName("script"),c=[],f=0,d=u.length;d>f;f++)a=u[f],o=r(a,"project-id"),s=r(a,"project-key"),o&&s&&e.setProject(o,s),t=r(a,"environment-name"),t&&e.setEnvironmentName(t),i=r(a,"onload"),c.push(i?n[i](e):void 0);return c}},{}]},{},[2]),Airbrake.addFilter(function(e){return 0==e.errors[0].backtrace[0].file.indexOf(swsettings.frameOrigin)?!0:!1});