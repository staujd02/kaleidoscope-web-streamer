(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e){e.exports=[{source:"https://www.youtube.com/embed/O6Ir_sMsTtc?autoplay=1",title:"A map of the ocean currents"},{source:"https://www.youtube.com/embed/9Ru8NoEuKuo?autoplay=1",title:"Carribeaan"},{source:"https://www.youtube.com/embed/ZIC8QmBKRHc?autoplay=1",title:"Manetee"},{source:"https://www.youtube.com/embed/sDgWnw3YPjs?autoplay=1",title:"Shark tank"},{source:"https://www.youtube.com/embed/9Ru8NoEuKuo?autoplay=1",title:"harbor village reef"},{source:"https://www.youtube.com/embed/HYknTgcw2BM?autoplay=1",title:"Fish feed"},{source:"https://www.youtube.com/embed/F109TZt3nRc?autoplay=1",title:"A map of wind patterns at 250hPa pressure"},{source:"https://www.youtube.com/embed/LvfaMv9nbJc?autoplay=1",title:"A map of cosc dispertions"}]},function(e,t,n){e.exports=n.p+"static/media/kaleidoscope-2.69382820.svg"},function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(8),c=n.n(i),r=(n(17),n(18),n(1)),s=n(2),u=n(5),l=n(3),p=n(6),d=n(4),m=(n(19),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"noOpMessage",value:function(){return"Your browser doesn't support iFrames."}},{key:"render",value:function(){var e=this.props.source,t=e.source,n=e.title;return a.a.createElement("iframe",{title:n,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:t},this.noOpMessage())}}]),t}(a.a.Component)),h=(n(20),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.time,t=this.calcSeconds(e),n=this.calcMinutes(e);return a.a.createElement("div",{className:"time-display"},a.a.createElement("div",{className:"time-box"},"".concat(n,":").concat(t)))}},{key:"calcMinutes",value:function(e){return this.format(Math.floor(e/6e4))}},{key:"calcSeconds",value:function(e){return this.format(Math.floor(e%6e4/1e3))}},{key:"format",value:function(e){var t=""+e;return"00".substring(0,"00".length-t.length)+t}}]),t}(a.a.Component)),f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).getSource=n.getSource.bind(Object(p.a)(n)),n.state={activeSource:0,millisecondsRemaining:n.props.cycleTime},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"cycle",value:function(e,t){this.setState({activeSource:this.cycleIndex(t,e.length),millisecondsRemaining:this.props.cycleTime})}},{key:"tick",value:function(e,t){var n=this.state.millisecondsRemaining-1e3;n>1e3?this.setState({millisecondsRemaining:n}):this.cycle.bind(this)(e,t)}},{key:"cycleIndex",value:function(e,t){return++e===t&&(e=0),e}},{key:"render",value:function(){var e=this,t=this.state,n=t.activeSource,o=t.millisecondsRemaining,i=this.props.sourceList;return setTimeout(function(){return e.tick(i,n)},1e3),a.a.createElement("div",null,a.a.createElement(m,{source:this.getSource(n)}),a.a.createElement(h,{time:o}))}},{key:"getSource",value:function(e){return this.props.sourceList[e]}}]),t}(a.a.Component),b=n(9),w=n(10),v=n.n(w),g=function(){return a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Starting Up The Streams..."))},y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={doneLoading:!1},setTimeout(n.finishedLoading.bind(Object(p.a)(n)),5e3),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"finishedLoading",value:function(){this.setState({doneLoading:!0})}},{key:"render",value:function(){var e=this.state.doneLoading,t=this.props.component;return a.a.createElement("div",null,!e&&a.a.createElement(g,null),e&&t)}}]),t}(a.a.Component),k=parseInt("600000"),O=function(){var e=document.getElementById("root");e&&e.requestFullscreen()},j=function(){var e=a.a.createElement(f,{sourceList:b,cycleTime:k});return a.a.createElement("div",{className:"App",onClick:O},a.a.createElement(y,{component:e}))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/kaleidoscope-web-streamer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/kaleidoscope-web-streamer","/service-worker.js");E?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):S(t,e)})}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.fed1b49a.chunk.js.map