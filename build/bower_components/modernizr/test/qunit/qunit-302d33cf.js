/**
 * QUnit v1.9.0 - A JavaScript Unit Testing Framework
 *
 * http://docs.jquery.com/QUnit
 *
 * Copyright (c) 2012 John Resig, Jörn Zaefferer
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * or GPL (GPL-LICENSE.txt) licenses.
 */
!function(e){function t(e){p(this,e),this.assertions=[],this.testNumber=++t.count}function n(){y.autorun=!0,y.currentModule&&g("moduleDone",v,{name:y.currentModule,failed:y.moduleStats.bad,passed:y.moduleStats.all-y.moduleStats.bad,total:y.moduleStats.all});var e,t,n=h("qunit-banner"),s=h("qunit-tests"),r=+new Date-y.started,o=y.stats.all-y.stats.bad,i=["Tests completed in ",r," milliseconds.<br/>","<span class='passed'>",o,"</span> tests of <span class='total'>",y.stats.all,"</span> passed, <span class='failed'>",y.stats.bad,"</span> failed."].join("");if(n&&(n.className=y.stats.bad?"qunit-fail":"qunit-pass"),s&&(h("qunit-testresult").innerHTML=i),y.altertitle&&"undefined"!=typeof document&&document.title&&(document.title=[y.stats.bad?"\u2716":"\u2714",document.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),y.reorder&&S.sessionStorage&&0===y.stats.bad)for(e=0;e<sessionStorage.length;e++)t=sessionStorage.key(e++),0===t.indexOf("qunit-test-")&&sessionStorage.removeItem(t);g("done",v,{failed:y.stats.bad,passed:o,total:y.stats.all,runtime:r})}function s(e){var t,n=y.filter&&y.filter.toLowerCase(),s=y.module&&y.module.toLowerCase(),r=(e.module+": "+e.testName).toLowerCase();return y.testNumber?e.testNumber===y.testNumber:!s||e.module&&e.module.toLowerCase()===s?n?(t="!"!==n.charAt(0),t||(n=n.slice(1)),-1!==r.indexOf(n)?t:!t):!0:!1}function r(e,t){t=void 0===t?3:t;var n,s,r;if(e.stacktrace)return e.stacktrace.split("\n")[t+3];if(e.stack){if(n=e.stack.split("\n"),/^error$/i.test(n[0])&&n.shift(),q){for(s=[],r=t;r<n.length&&-1==n[r].indexOf(q);r++)s.push(n[r]);if(s.length)return s.join("\n")}return n[t]}if(e.sourceURL){if(/qunit.js$/.test(e.sourceURL))return;return e.sourceURL+":"+e.line}}function o(e){try{throw new Error}catch(t){return r(t,e)}}function i(e){return e?(e+="",e.replace(/[\&<>]/g,function(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return e}})):""}function u(e,t){y.queue.push(e),y.autorun&&!y.blocking&&a(t)}function a(t){function s(){a(t)}var r=(new Date).getTime();for(y.depth=y.depth?y.depth+1:1;y.queue.length&&!y.blocking;){if(!(!S.setTimeout||y.updateRate<=0||(new Date).getTime()-r<y.updateRate)){e.setTimeout(s,13);break}y.queue.shift()()}y.depth--,!t||y.blocking||y.queue.length||0!==y.depth||n()}function l(){if(y.pollution=[],y.noglobals)for(var t in e)T.call(e,t)&&!/^qunit-test-output/.test(t)&&y.pollution.push(t)}function c(){var e,t,n=y.pollution;l(),e=d(y.pollution,n),e.length>0&&v.pushFailure("Introduced global variable(s): "+e.join(", ")),t=d(n,y.pollution),t.length>0&&v.pushFailure("Deleted global variable(s): "+t.join(", "))}function d(e,t){var n,s,r=e.slice();for(n=0;n<r.length;n++)for(s=0;s<t.length;s++)if(r[n]===t[s]){r.splice(n,1),n--;break}return r}function p(t,n){for(var s in n)void 0===n[s]?delete t[s]:("constructor"!==s||t!==e)&&(t[s]=n[s]);return t}function f(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):n()}function h(e){return!("undefined"==typeof document||!document||!document.getElementById)&&document.getElementById(e)}function m(e){return function(t){y[e].push(t)}}function g(e,t,n){var s,r;if(v.hasOwnProperty(e))v[e].call(t,n);else for(r=y[e],s=0;s<r.length;s++)r[s].call(t,n)}function b(e,t){if(t.indexOf)return t.indexOf(e);for(var n=0,s=t.length;s>n;n++)if(t[n]===e)return n;return-1}var v,y,w,E=0,q=(o(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+\//,""),x=Object.prototype.toString,T=Object.prototype.hasOwnProperty,S={setTimeout:"undefined"!=typeof e.setTimeout,sessionStorage:function(){var e="qunit-test-string";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}()};t.count=0,t.prototype={init:function(){var e,t,n,s=h("qunit-tests");s&&(t=document.createElement("strong"),t.innerHTML=this.name,e=document.createElement("a"),e.innerHTML="Rerun",e.href=v.url({testNumber:this.testNumber}),n=document.createElement("li"),n.appendChild(t),n.appendChild(e),n.className="running",n.id=this.id="qunit-test-output"+E++,s.appendChild(n))},setup:function(){if(this.module!==y.previousModule?(y.previousModule&&g("moduleDone",v,{name:y.previousModule,failed:y.moduleStats.bad,passed:y.moduleStats.all-y.moduleStats.bad,total:y.moduleStats.all}),y.previousModule=this.module,y.moduleStats={all:0,bad:0},g("moduleStart",v,{name:this.module})):y.autorun&&g("moduleStart",v,{name:this.module}),y.current=this,this.testEnvironment=p({setup:function(){},teardown:function(){}},this.moduleTestEnvironment),g("testStart",v,{name:this.testName,module:this.module}),v.current_testEnvironment=this.testEnvironment,y.pollution||l(),y.notrycatch)return void this.testEnvironment.setup.call(this.testEnvironment);try{this.testEnvironment.setup.call(this.testEnvironment)}catch(e){v.pushFailure("Setup failed on "+this.testName+": "+e.message,r(e,1))}},run:function(){y.current=this;var e=h("qunit-testresult");if(e&&(e.innerHTML="Running: <br/>"+this.name),this.async&&v.stop(),y.notrycatch)return void this.callback.call(this.testEnvironment,v.assert);try{this.callback.call(this.testEnvironment,v.assert)}catch(t){v.pushFailure("Died on test #"+(this.assertions.length+1)+" "+this.stack+": "+t.message,r(t,0)),l(),y.blocking&&v.start()}},teardown:function(){if(y.current=this,y.notrycatch)return void this.testEnvironment.teardown.call(this.testEnvironment);try{this.testEnvironment.teardown.call(this.testEnvironment)}catch(e){v.pushFailure("Teardown failed on "+this.testName+": "+e.message,r(e,1))}c()},finish:function(){y.current=this,y.requireExpects&&null==this.expected?v.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!=this.expected&&this.expected!=this.assertions.length?v.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!=this.expected||this.assertions.length||v.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack);var t,n,s,r,o,i,u=this,a=0,l=0,c=h("qunit-tests");if(y.stats.all+=this.assertions.length,y.moduleStats.all+=this.assertions.length,c){for(i=document.createElement("ol"),r=0;r<this.assertions.length;r++)t=this.assertions[r],o=document.createElement("li"),o.className=t.result?"pass":"fail",o.innerHTML=t.message||(t.result?"okay":"failed"),i.appendChild(o),t.result?a++:(l++,y.stats.bad++,y.moduleStats.bad++);v.config.reorder&&S.sessionStorage&&(l?sessionStorage.setItem("qunit-test-"+this.module+"-"+this.testName,l):sessionStorage.removeItem("qunit-test-"+this.module+"-"+this.testName)),0===l&&(i.style.display="none"),s=document.createElement("strong"),s.innerHTML=this.name+" <b class='counts'>(<b class='failed'>"+l+"</b>, <b class='passed'>"+a+"</b>, "+this.assertions.length+")</b>",f(s,"click",function(){var e=s.nextSibling.nextSibling,t=e.style.display;e.style.display="none"===t?"block":"none"}),f(s,"dblclick",function(t){var n=t&&t.target?t.target:e.event.srcElement;("span"==n.nodeName.toLowerCase()||"b"==n.nodeName.toLowerCase())&&(n=n.parentNode),e.location&&"strong"===n.nodeName.toLowerCase()&&(e.location=v.url({testNumber:u.testNumber}))}),o=h(this.id),o.className=l?"fail":"pass",o.removeChild(o.firstChild),n=o.firstChild,o.appendChild(s),o.appendChild(n),o.appendChild(i)}else for(r=0;r<this.assertions.length;r++)this.assertions[r].result||(l++,y.stats.bad++,y.moduleStats.bad++);g("testDone",v,{name:this.testName,module:this.module,failed:l,passed:this.assertions.length-l,total:this.assertions.length}),v.reset(),y.current=void 0},queue:function(){function e(){u(function(){n.setup()}),u(function(){n.run()}),u(function(){n.teardown()}),u(function(){n.finish()})}var t,n=this;u(function(){n.init()}),t=v.config.reorder&&S.sessionStorage&&+sessionStorage.getItem("qunit-test-"+this.module+"-"+this.testName),t?e():u(e,!0)}},v={module:function(e,t){y.currentModule=e,y.currentModuleTestEnviroment=t},asyncTest:function(e,t,n){2===arguments.length&&(n=t,t=null),v.test(e,t,n,!0)},test:function(e,n,r,u){var a,l="<span class='test-name'>"+i(e)+"</span>";2===arguments.length&&(r=n,n=null),y.currentModule&&(l="<span class='module-name'>"+y.currentModule+"</span>: "+l),a=new t({name:l,testName:e,expected:n,async:u,callback:r,module:y.currentModule,moduleTestEnvironment:y.currentModuleTestEnviroment,stack:o(2)}),s(a)&&a.queue()},expect:function(e){y.current.expected=e},start:function(t){y.semaphore-=t||1,y.semaphore>0||(y.semaphore<0&&(y.semaphore=0),S.setTimeout?e.setTimeout(function(){y.semaphore>0||(y.timeout&&clearTimeout(y.timeout),y.blocking=!1,a(!0))},13):(y.blocking=!1,a(!0)))},stop:function(t){y.semaphore+=t||1,y.blocking=!0,y.testTimeout&&S.setTimeout&&(clearTimeout(y.timeout),y.timeout=e.setTimeout(function(){v.ok(!1,"Test timed out"),y.semaphore=1,v.start()},y.testTimeout))}},v.assert={ok:function(e,t){if(!y.current)throw new Error("ok() assertion outside test context, was "+o(2));e=!!e;var n,s={result:e,message:t};t=i(t||(e?"okay":"failed")),t="<span class='test-message'>"+t+"</span>",e||(n=o(2),n&&(s.source=n,t+="<table><tr class='test-source'><th>Source: </th><td><pre>"+i(n)+"</pre></td></tr></table>")),g("log",v,s),y.current.assertions.push({result:e,message:t})},equal:function(e,t,n){v.push(t==e,e,t,n)},notEqual:function(e,t,n){v.push(t!=e,e,t,n)},deepEqual:function(e,t,n){v.push(v.equiv(e,t),e,t,n)},notDeepEqual:function(e,t,n){v.push(!v.equiv(e,t),e,t,n)},strictEqual:function(e,t,n){v.push(t===e,e,t,n)},notStrictEqual:function(e,t,n){v.push(t!==e,e,t,n)},"throws":function(e,t,n){var s,r=!1;"string"==typeof t&&(n=t,t=null),y.current.ignoreGlobalErrors=!0;try{e.call(y.current.testEnvironment)}catch(o){s=o}y.current.ignoreGlobalErrors=!1,s?(t?"regexp"===v.objectType(t)?r=t.test(s):s instanceof t?r=!0:t.call({},s)===!0&&(r=!0):r=!0,v.push(r,s,null,n)):v.pushFailure(n,null,"No exception was thrown.")}},p(v,v.assert),v.raises=v.assert.throws,v.equals=function(){v.push(!1,!1,!1,"QUnit.equals has been deprecated since 2009 (e88049a0), use QUnit.equal instead")},v.same=function(){v.push(!1,!1,!1,"QUnit.same has been deprecated since 2009 (e88049a0), use QUnit.deepEqual instead")},function(){function e(){}e.prototype=v,v=new e,v.constructor=e}(),y={queue:[],blocking:!0,hidepassed:!1,reorder:!0,altertitle:!0,requireExpects:!1,urlConfig:[{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the `window` object. Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}],begin:[],done:[],log:[],testStart:[],testDone:[],moduleStart:[],moduleDone:[]},function(){var t,n,s=e.location||{search:"",protocol:"file:"},r=s.search.slice(1).split("&"),o=r.length,i={};if(r[0])for(t=0;o>t;t++)n=r[t].split("="),n[0]=decodeURIComponent(n[0]),n[1]=n[1]?decodeURIComponent(n[1]):!0,i[n[0]]=n[1];v.urlParams=i,y.filter=i.filter,y.module=i.module,y.testNumber=parseInt(i.testNumber,10)||null,v.isLocal="file:"===s.protocol}(),"undefined"==typeof exports&&(p(e,v),e.QUnit=v),p(v,{config:y,init:function(){p(y,{stats:{all:0,bad:0},moduleStats:{all:0,bad:0},started:+new Date,updateRate:1e3,blocking:!1,autostart:!0,autorun:!1,filter:"",queue:[],semaphore:0});var e,t,n,s=h("qunit");s&&(s.innerHTML="<h1 id='qunit-header'>"+i(document.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar'></div><h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),e=h("qunit-tests"),t=h("qunit-banner"),n=h("qunit-testresult"),e&&(e.innerHTML=""),t&&(t.className=""),n&&n.parentNode.removeChild(n),e&&(n=document.createElement("p"),n.id="qunit-testresult",n.className="result",e.parentNode.insertBefore(n,e),n.innerHTML="Running...<br/>&nbsp;")},reset:function(){var t;e.jQuery?jQuery("#qunit-fixture").html(y.fixture):(t=h("qunit-fixture"),t&&(t.innerHTML=y.fixture))},triggerEvent:function(e,t,n){document.createEvent?(n=document.createEvent("MouseEvents"),n.initMouseEvent(t,!0,!0,e.ownerDocument.defaultView,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(n)):e.fireEvent&&e.fireEvent("on"+t)},is:function(e,t){return v.objectType(t)==e},objectType:function(e){if("undefined"==typeof e)return"undefined";if(null===e)return"null";var t=x.call(e).match(/^\[object\s(.*)\]$/)[1]||"";switch(t){case"Number":return isNaN(e)?"nan":"number";case"String":case"Boolean":case"Array":case"Date":case"RegExp":case"Function":return t.toLowerCase()}return"object"==typeof e?"object":void 0},push:function(e,t,n,s){if(!y.current)throw new Error("assertion outside test context, was "+o());var r,u,a={result:e,message:s,actual:t,expected:n};s=i(s)||(e?"okay":"failed"),s="<span class='test-message'>"+s+"</span>",r=s,e||(n=i(v.jsDump.parse(n)),t=i(v.jsDump.parse(t)),r+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+n+"</pre></td></tr>",t!=n&&(r+="<tr class='test-actual'><th>Result: </th><td><pre>"+t+"</pre></td></tr>",r+="<tr class='test-diff'><th>Diff: </th><td><pre>"+v.diff(n,t)+"</pre></td></tr>"),u=o(),u&&(a.source=u,r+="<tr class='test-source'><th>Source: </th><td><pre>"+i(u)+"</pre></td></tr>"),r+="</table>"),g("log",v,a),y.current.assertions.push({result:!!e,message:r})},pushFailure:function(e,t,n){if(!y.current)throw new Error("pushFailure() assertion outside test context, was "+o(2));var s,r={result:!1,message:e};e=i(e)||"error",e="<span class='test-message'>"+e+"</span>",s=e,s+="<table>",n&&(s+="<tr class='test-actual'><th>Result: </th><td><pre>"+i(n)+"</pre></td></tr>"),t&&(r.source=t,s+="<tr class='test-source'><th>Source: </th><td><pre>"+i(t)+"</pre></td></tr>"),s+="</table>",g("log",v,r),y.current.assertions.push({result:!1,message:s})},url:function(t){t=p(p({},v.urlParams),t);var n,s="?";for(n in t)T.call(t,n)&&(s+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&");return e.location.pathname+s.slice(0,-1)},extend:p,id:h,addEvent:f}),p(v.constructor.prototype,{begin:m("begin"),done:m("done"),log:m("log"),testStart:m("testStart"),testDone:m("testDone"),moduleStart:m("moduleStart"),moduleDone:m("moduleDone")}),("undefined"==typeof document||"complete"===document.readyState)&&(y.autorun=!0),v.load=function(){g("begin",v,{});var t,n,s,r,o,i,u,a,l,c,d,m="",b=p({},y);for(v.init(),p(y,b),y.blocking=!1,o=y.urlConfig.length,s=0;o>s;s++)c=y.urlConfig[s],"string"==typeof c&&(c={id:c,label:c,tooltip:"[no tooltip available]"}),y[c.id]=v.urlParams[c.id],m+="<input id='qunit-urlconfig-"+c.id+"' name='"+c.id+"' type='checkbox'"+(y[c.id]?" checked='checked'":"")+" title='"+c.tooltip+"'><label for='qunit-urlconfig-"+c.id+"' title='"+c.tooltip+"'>"+c.label+"</label>";l=h("qunit-userAgent"),l&&(l.innerHTML=navigator.userAgent),t=h("qunit-header"),t&&(t.innerHTML="<a href='"+v.url({filter:void 0,module:void 0,testNumber:void 0})+"'>"+t.innerHTML+"</a> "),a=h("qunit-testrunner-toolbar"),a&&(n=document.createElement("input"),n.type="checkbox",n.id="qunit-filter-pass",f(n,"click",function(){var e,t=document.getElementById("qunit-tests");n.checked?t.className=t.className+" hidepass":(e=" "+t.className.replace(/[\n\t\r]/g," ")+" ",t.className=e.replace(/ hidepass /," ")),S.sessionStorage&&(n.checked?sessionStorage.setItem("qunit-filter-passed-tests","true"):sessionStorage.removeItem("qunit-filter-passed-tests"))}),(y.hidepassed||S.sessionStorage&&sessionStorage.getItem("qunit-filter-passed-tests"))&&(n.checked=!0,u=document.getElementById("qunit-tests"),u.className=u.className+" hidepass"),a.appendChild(n),r=document.createElement("label"),r.setAttribute("for","qunit-filter-pass"),r.setAttribute("title","Only show tests and assertons that fail. Stored in sessionStorage."),r.innerHTML="Hide passed tests",a.appendChild(r),d=document.createElement("span"),d.innerHTML=m,f(d,"change",function(t){var n={};n[t.target.name]=t.target.checked?!0:void 0,e.location=v.url(n)}),a.appendChild(d)),i=h("qunit-fixture"),i&&(y.fixture=i.innerHTML),y.autostart&&v.start()},f(e,"load",v.load),w=e.onerror,e.onerror=function(e,t,n){var s=!1;if(w&&(s=w(e,t,n)),s!==!0){if(v.config.current){if(v.config.current.ignoreGlobalErrors)return!0;v.pushFailure(e,t+":"+n)}else v.test("global failure",function(){v.pushFailure(e,t+":"+n)});return!1}return s},v.equiv=function(){function e(e,t,n){var s=v.objectType(e);return s?"function"===v.objectType(t[s])?t[s].apply(t,n):t[s]:void 0}var t,n=[],s=[],r=Object.getPrototypeOf||function(e){return e.__proto__},o=function(){function e(e,t){return e instanceof t.constructor||t instanceof e.constructor?t==e:t===e}return{string:e,"boolean":e,number:e,"null":e,undefined:e,nan:function(e){return isNaN(e)},date:function(e,t){return"date"===v.objectType(e)&&t.valueOf()===e.valueOf()},regexp:function(e,t){return"regexp"===v.objectType(e)&&t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline},"function":function(){var e=n[n.length-1];return e!==Object&&"undefined"!=typeof e},array:function(e,n){var r,o,i,u;if("array"!==v.objectType(e))return!1;if(i=n.length,i!==e.length)return!1;for(s.push(n),r=0;i>r;r++){for(u=!1,o=0;o<s.length;o++)s[o]===n[r]&&(u=!0);if(!u&&!t(n[r],e[r]))return s.pop(),!1}return s.pop(),!0},object:function(e,o){var i,u,a,l=!0,c=[],d=[];if(o.constructor!==e.constructor&&!(null===r(o)&&r(e)===Object.prototype||null===r(e)&&r(o)===Object.prototype))return!1;n.push(o.constructor),s.push(o);for(i in o){for(a=!1,u=0;u<s.length;u++)s[u]===o[i]&&(a=!0);if(c.push(i),!a&&!t(o[i],e[i])){l=!1;break}}n.pop(),s.pop();for(i in e)d.push(i);return l&&t(c.sort(),d.sort())}}}();return t=function(){var t=[].slice.apply(arguments);return t.length<2?!0:function(t,n){return t===n?!0:null===t||null===n||"undefined"==typeof t||"undefined"==typeof n||v.objectType(t)!==v.objectType(n)?!1:e(t,o,[n,t])}(t[0],t[1])&&arguments.callee.apply(this,t.splice(1,t.length-1))}}(),/**
 * jsDump Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com |
 * http://flesler.blogspot.com Licensed under BSD
 * (http://www.opensource.org/licenses/bsd-license.php) Date: 5/15/2008
 *
 * @projectDescription Advanced and extensible data dumping for Javascript.
 * @version 1.0.0
 * @author Ariel Flesler
 * @link {http://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html}
 */
v.jsDump=function(){function e(e){return'"'+e.toString().replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var s=o.separator(),r=o.indent(),i=o.indent(1);return t.join&&(t=t.join(","+s+i)),t?[e,i+t,r+n].join(s):e+n}function s(e,t){var s=e.length,r=new Array(s);for(this.up();s--;)r[s]=this.parse(e[s],void 0,t);return this.down(),n("[",r,"]")}var r=/^function (\w+)/,o={parse:function(e,t,n){n=n||[];var s,r,o=this.parsers[t||this.typeOf(e)];return t=typeof o,s=b(e,n),-1!=s?"recursion("+(s-n.length)+")":"function"==t?(n.push(e),r=o.call(this,e,n),n.pop(),r):"string"==t?o:this.parsers.error},typeOf:function(e){var t;return t=null===e?"null":"undefined"==typeof e?"undefined":v.is("regexp",e)?"regexp":v.is("date",e)?"date":v.is("function",e)?"function":void 0!==typeof e.setInterval&&"undefined"!=typeof e.document&&"undefined"==typeof e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":"[object Array]"===x.call(e)||"number"==typeof e.length&&"undefined"!=typeof e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&"undefined"==typeof e[0])?"array":typeof e},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&nbsp;":" "},indent:function(e){if(!this.multiline)return"";var t=this.indentChar;return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&nbsp;")),new Array(this._depth_+(e||0)).join(t)},up:function(e){this._depth_+=e||1},down:function(e){this._depth_-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,_depth_:1,parsers:{window:"[Window]",document:"[Document]",error:"[ERROR]",unknown:"[Unknown]","null":"null",undefined:"undefined","function":function(e){var t="function",s="name"in e?e.name:(r.exec(e)||[])[1];return s&&(t+=" "+s),t+="( ",t=[t,v.jsDump.parse(e,"functionArgs"),"){"].join(""),n(t,v.jsDump.parse(e,"functionCode"),"}")},array:s,nodelist:s,arguments:s,object:function(e,t){var s,r,o,i,u=[];if(v.jsDump.up(),Object.keys)s=Object.keys(e);else{s=[];for(r in e)s.push(r)}for(s.sort(),i=0;i<s.length;i++)r=s[i],o=e[r],u.push(v.jsDump.parse(r,"key")+": "+v.jsDump.parse(o,void 0,t));return v.jsDump.down(),n("{",u,"}")},node:function(e){var t,n,s=v.jsDump.HTML?"&lt;":"<",r=v.jsDump.HTML?"&gt;":">",o=e.nodeName.toLowerCase(),i=s+o;for(t in v.jsDump.DOMAttrs)n=e[v.jsDump.DOMAttrs[t]],n&&(i+=" "+t+"="+v.jsDump.parse(n,"attribute"));return i+r+s+"/"+o+r},functionArgs:function(e){var t,n=e.length;if(!n)return"";for(t=new Array(n);n--;)t[n]=String.fromCharCode(97+n);return" "+t.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,"boolean":t},DOMAttrs:{id:"id",name:"name","class":"className"},HTML:!1,indentChar:"  ",multiline:!0};return o}(),v.diff=function(){function e(e,t){var n,s={},r={};for(n=0;n<t.length;n++)null==s[t[n]]&&(s[t[n]]={rows:[],o:null}),s[t[n]].rows.push(n);for(n=0;n<e.length;n++)null==r[e[n]]&&(r[e[n]]={rows:[],n:null}),r[e[n]].rows.push(n);for(n in s)T.call(s,n)&&1==s[n].rows.length&&"undefined"!=typeof r[n]&&1==r[n].rows.length&&(t[s[n].rows[0]]={text:t[s[n].rows[0]],row:r[n].rows[0]},e[r[n].rows[0]]={text:e[r[n].rows[0]],row:s[n].rows[0]});for(n=0;n<t.length-1;n++)null!=t[n].text&&null==t[n+1].text&&t[n].row+1<e.length&&null==e[t[n].row+1].text&&t[n+1]==e[t[n].row+1]&&(t[n+1]={text:t[n+1],row:t[n].row+1},e[t[n].row+1]={text:e[t[n].row+1],row:n+1});for(n=t.length-1;n>0;n--)null!=t[n].text&&null==t[n-1].text&&t[n].row>0&&null==e[t[n].row-1].text&&t[n-1]==e[t[n].row-1]&&(t[n-1]={text:t[n-1],row:t[n].row-1},e[t[n].row-1]={text:e[t[n].row-1],row:n-1});return{o:e,n:t}}return function(t,n){t=t.replace(/\s+$/,""),n=n.replace(/\s+$/,"");var s,r,o="",i=e(""===t?[]:t.split(/\s+/),""===n?[]:n.split(/\s+/)),u=t.match(/\s+/g),a=n.match(/\s+/g);if(null==u?u=[" "]:u.push(" "),null==a?a=[" "]:a.push(" "),0===i.n.length)for(s=0;s<i.o.length;s++)o+="<del>"+i.o[s]+u[s]+"</del>";else{if(null==i.n[0].text)for(n=0;n<i.o.length&&null==i.o[n].text;n++)o+="<del>"+i.o[n]+u[n]+"</del>";for(s=0;s<i.n.length;s++)if(null==i.n[s].text)o+="<ins>"+i.n[s]+a[s]+"</ins>";else{for(r="",n=i.n[s].row+1;n<i.o.length&&null==i.o[n].text;n++)r+="<del>"+i.o[n]+u[n]+"</del>";o+=" "+i.n[s].text+a[s]+r}}return o}}(),"undefined"!=typeof exports&&p(exports,v)}(function(){return this}.call());