(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,n){e.exports=n.p+"static/media/kaleidoscope-2.69382820.svg"},61:function(e){e.exports=[{source:"https://www.youtube.com/embed/O6Ir_sMsTtc?autoplay=1",title:"Live Stream of Osprey Nest",duration:6e5,isEnabled:!0,sortOrder:1,key:1},{source:"https://www.youtube.com/embed/szQSx4XYMoI",title:"view of earth from space",duration:6e5,isEnabled:!0,sortOrder:1,key:2},{source:"https://www.youtube.com/embed/ZIC8QmBKRHc?autoplay=1",title:"Live Stream of Manatees",duration:6e5,isEnabled:!0,sortOrder:1,key:3},{source:"https://www.youtube.com/embed/sDgWnw3YPjs?autoplay=1",title:"Live Stream of Shark Infested Ocean",duration:6e5,isEnabled:!0,sortOrder:1,key:4},{source:"https://www.youtube.com/embed/HYknTgcw2BM?autoplay=1",title:"Wrasse and Anthias Live Fish Camera",duration:6e5,isEnabled:!0,sortOrder:1,key:5},{source:"https://www.youtube.com/embed/F109TZt3nRc?autoplay=1",title:"Tropical Reef Live Camera feed",duration:6e5,isEnabled:!0,sortOrder:1,key:6},{source:"https://www.youtube.com/embed/LvfaMv9nbJc?autoplay=1",title:"Live Stream of a Shark Lagoon camera",duration:6e5,isEnabled:!0,sortOrder:1,key:7}]},70:function(e,t,n){e.exports=n(86)},76:function(e,t,n){},77:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),i=n(12),c=n.n(i),s=(n(76),n(77),parseInt("1000")),l=n(6),u=n(7),d=n(11),h=n(9),p=n(10),m=n(55),f=n.n(m),b=function(e){return o.a.createElement("header",{className:"App-header"},e.children)},v=function(e){return o.a.createElement(b,null,o.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Starting Up The Streams..."),e.children)},g=n(122),y=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.buttonClickHandler;return o.a.createElement(g.a,{color:"primary",className:"configure-button",onClick:e},"Configure Streams")}}]),t}(o.a.Component),O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).finishedLoading=function(){n.setState({doneLoading:!0})},n.state={doneLoading:!1},setTimeout(n.finishedLoading,n.props.loadTime),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.doneLoading,t=this.props.handleConfigureClick;return e?this.props.children:o.a.createElement(v,null,o.a.createElement(y,{buttonClickHandler:t}))}}]),t}(o.a.Component),k=(n(82),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"noOpMessage",value:function(){return"Your browser doesn't support iFrames."}},{key:"render",value:function(){var e=this.props.source,t=e.source,n=e.title;return o.a.createElement("iframe",{title:n,id:"player",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:t},this.noOpMessage())}}]),t}(o.a.Component)),E=(n(83),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.time,n=e.onClick,a=this.calcSeconds(t),r=this.calcMinutes(t);return o.a.createElement(g.a,{onClick:n,color:"inherit",className:"time-display"},o.a.createElement("div",{className:"time-box"},"".concat(r,":").concat(a)))}},{key:"calcMinutes",value:function(e){return this.format(Math.floor(e/6e4))}},{key:"calcSeconds",value:function(e){return this.format(Math.floor(e%6e4/1e3))}},{key:"format",value:function(e){var t=""+e;return"00".substring(0,"00".length-t.length)+t}}]),t}(o.a.Component)),j=(n(84),n(124)),S=n(125);!function(e){e.Pause="Pause",e.Play="Play"}(a||(a={}));var w=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onSkip,n=e.onPlayBack,r=e.onMenuOpen,i=e.playBackMode;return o.a.createElement("div",{className:"cycler-controls"},o.a.createElement(j.a,{id:"skip-control",onClick:t,"aria-label":"skip"},o.a.createElement(S.a,{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48"},o.a.createElement("path",{d:"M12 36l17-12-17-12v24zm20-24v24h4V12h-4z"}))),o.a.createElement(j.a,{id:"playback-control",onClick:n,"aria-label":i},i===a.Play&&o.a.createElement(S.a,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})),i===a.Pause&&o.a.createElement(S.a,{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48"},o.a.createElement("path",{d:"M18 32h4V16h-4v16zm6-28C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm2-8h4V16h-4v16z"}))),o.a.createElement(j.a,{id:"menu-control",onClick:r,"aria-label":"open menu"},o.a.createElement(S.a,{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48"},o.a.createElement("path",{d:"M28,0C12.561,0,0,12.561,0,28s12.561,28,28,28s28-12.561,28-28S43.439,0,28,0z M28,54C13.663,54,2,42.336,2,28\r S13.663,2,28,2s26,11.664,26,26S42.337,54,28,54z"}),o.a.createElement("path",{d:"M40,16H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,16,40,16z"}),o.a.createElement("path",{d:"M40,27H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,27,40,27z"}),o.a.createElement("path",{d:"M40,38H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,38,40,38z"}))))}}]),t}(o.a.Component),C=n(126),R=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.open;return o.a.createElement(C.a,{direction:"down",in:e},o.a.createElement("div",{id:"cycler-controls"},this.props.children))}}]),t}(o.a.Component),N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).increment=50,n.tick=function(e,t){n.state.playbackPaused||n.runTick(n.timeRemainingInCycle()),setTimeout(function(){return n.tick(e,t)},n.increment)},n.cycle=function(){var e=n.state.activeSource,t=n.props.sourceList,a=n.cycleIndex(e,t.length);n.setState({activeSource:a,millisecondsRemaining:n.props.sourceList[a].duration})},n.onSkip=function(e){n.cycle(),n.setState({controlsVisible:!1})},n.onPlayBack=function(e){n.setState({playbackPaused:!n.state.playbackPaused}),n.setState({controlsVisible:!1})},n.timeClicked=function(e){n.setState({controlsVisible:!n.state.controlsVisible})},n.updateClock=function(e){n.setState({millisecondsRemaining:e})},n.getSource=function(e){return n.props.sourceList[e]},n.state={activeSource:0,millisecondsRemaining:n.props.sourceList[0].duration,controlsVisible:!1,playbackPaused:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.activeSource,n=this.props.sourceList;setTimeout(function(){return e.tick(n,t)},this.increment)}},{key:"render",value:function(){var e=this.state,t=e.activeSource,n=e.millisecondsRemaining,r=e.controlsVisible,i=e.playbackPaused?a.Play:a.Pause;return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{source:this.getSource(t)}),o.a.createElement(E,{onClick:this.timeClicked,time:n}),o.a.createElement(R,{open:r},o.a.createElement(w,{onSkip:this.onSkip,playBackMode:i,onPlayBack:this.onPlayBack,onMenuOpen:this.props.openMenuCallback})))}},{key:"runTick",value:function(e){e>this.increment?this.updateClock(e):this.cycle()}},{key:"timeRemainingInCycle",value:function(){return this.state.millisecondsRemaining-this.increment}},{key:"cycleIndex",value:function(e,t){return++e===t&&(e=0),e}}]),t}(o.a.Component),M=n(36),L=(n(85),n(26)),x=n(129),P=n(130),I=n(43),V=n(137),T=n(138),B=n(131),z=n(132),U=n(136),A=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"shocker",value:function(e,t){var n=e?"value":"defaultValue";return Object(L.a)({},n,t)}}]),e}()),D={name:"title",label:"Source Name",type:"text"},W=function(e){var t=e.handleChange,n=e.shock,a=e.title;return o.a.createElement(U.a,Object.assign({},D,{onChange:t},A.shocker(n,a)))},H={name:"source",className:"beefy",label:"URL",type:"url",helperText:"Must be embeddable"},F=function(e){var t=e.handleChange,n=e.shock,a=e.url;return o.a.createElement(U.a,Object.assign({},H,{onChange:t},A.shocker(n,a)))},J=n(127),Y={id:"duration",name:"duration",type:"number"},K=function(e){var t=e.duration,n=e.handleChange;return o.a.createElement(J.a,Object.assign({},Y,{onChange:n,endAdornment:"Seconds",value:t}))},_=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleToggle=function(e){return function(t){var a=t.target.checked;n.handleErrors(function(){return n.props.handleUpdate(Object(M.a)({},n.props.source,Object(L.a)({},e,!a)))},e)}},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.handleErrors(function(){return n.props.handleUpdate(Object(M.a)({},n.props.source,Object(L.a)({},a,r)))},a)},n.handleErrors=function(e,t){try{n.setState({error:""},e)}catch(a){n.setState({error:t||a})}},n.transformUp=function(e){return function(t){t.target.value=(parseInt(t.target.value)*e).toString(),n.handleChange(t)}},n.state={error:"",shock:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){this.state.shock&&this.setState({shock:!1}),null!==this.props.source&&null!==e.source&&this.props.source.key!==e.source.key&&this.setState({shock:!0})}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.shock;return o.a.createElement(x.a,{className:"card source-detail"},o.a.createElement(P.a,null,o.a.createElement(I.a,{className:"title",color:"textSecondary",gutterBottom:!0},"Stream Details"),null===this.props.source&&o.a.createElement(I.a,{className:"placeholder"},"Select a stream to view it's details."),null!==this.props.source&&o.a.createElement(B.a,null,o.a.createElement(W,{handleChange:this.handleChange,title:this.props.source.title,shock:n}),o.a.createElement(F,{handleChange:this.handleChange,url:this.props.source.source,shock:n}),o.a.createElement(z.a,null,o.a.createElement(T.a,{id:"durationLabel",error:"duration"===t,className:"inline-lb"},"Duration"),o.a.createElement(K,{handleChange:this.transformUp(1e3),duration:this.props.source.duration/1e3})),o.a.createElement(z.a,null,o.a.createElement(T.a,{className:"inline-lb"},"Enabled"),o.a.createElement(V.a,{id:"enable-toggle",name:"isEnabled",onClick:this.handleToggle("isEnabled"),type:"button",checked:this.props.source.isEnabled})))))}}]),t}(o.a.Component),Q=function(e){return o.a.createElement("header",{className:"config-viewport"},o.a.createElement("div",{className:"config-container"},e.children))},Z=n(128),q=n(133),X=n(134),$=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={selectedIndex:-1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.selectedIndex,n=this.props.search,a=this.props.sources.filter(function(e){return!n||(e.title.includes(n)||e.source.includes(n))}).sort(function(e,t){return e.sortOrder-t.sortOrder}).map(function(n,a){return o.a.createElement(q.a,{key:a,button:!0,className:n.isEnabled?void 0:"disabled",selected:t===a,onClick:function(t){return e.handleListItemClick(t,a)}},o.a.createElement(X.a,{primary:n.title}))});return o.a.createElement(Z.a,{"aria-label":"streams"},a)}},{key:"handleListItemClick",value:function(e,t){e.preventDefault(),this.setState({selectedIndex:t}),this.props.handleSelectSource(this.props.sources[t])}}]),t}(o.a.Component),G=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){n.setState({search:e.target.value})},n.state={search:""},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleSelectSource,n=e.sourceList,a=this.state.search;return o.a.createElement(x.a,{className:"card source-list"},o.a.createElement(P.a,null,o.a.createElement(I.a,{className:"title",color:"textSecondary",gutterBottom:!0},"List of the Streams"),o.a.createElement(U.a,{id:"outlined-dense",label:"Search",className:"search",margin:"dense",variant:"outlined",onChange:this.handleChange}),o.a.createElement($,{search:a,handleSelectSource:t,sources:n})))}}]),t}(o.a.Component),ee=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(x.a,{className:"card stream-preview"},o.a.createElement(P.a,null,o.a.createElement(I.a,{className:"title",color:"textSecondary",gutterBottom:!0},"Preview of the Stream"),null===this.props.source&&o.a.createElement(I.a,{className:"placeholder"},"Select a stream to view a preview of it."),null!==this.props.source&&o.a.createElement(k,{source:this.props.source})))}}]),t}(o.a.Component),te=n(135),ne=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleSelectSource=function(e){n.setState({selectedSource:e.key})},n.handleUpdate=function(e){var t=n.props.sourceRepo.streams.findIndex(function(t){return t.key===e.key});if(t>=0){var a=n.props.sourceRepo.streams;a[t]=e,n.props.handleSave(Object(M.a)({},n.props.sourceRepo,{streams:a}))}},n.state={selectedSource:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.sourceRepo.streams.find(function(t){return t.key===e.state.selectedSource})||null;return o.a.createElement(Q,null,o.a.createElement(te.a,{className:"config-titlebar"},o.a.createElement(g.a,{onClick:this.props.doneConfiguring,className:"resume-cycle"},"Resume Cycle")),o.a.createElement(te.a,{className:"config-content"},o.a.createElement(G,{handleSelectSource:this.handleSelectSource,sourceList:this.props.sourceRepo.streams}),o.a.createElement(_,{handleUpdate:this.handleUpdate,source:t}),o.a.createElement(ee,{source:t})))}}]),t}(o.a.Component),ae=n(61),re=n(32),oe="Missing Property Exception",ie=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,"".concat(oe,": '").concat(e,"' is not defined")))).missingProperty=void 0,n.name=oe,n.missingProperty=e,n}return Object(p.a)(t,e),t}(Object(re.a)(Error)),ce="Duration Out of Bounds",se=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,"".concat(ce,": ").concat(e," is not a valid duration")))).outOfRangeDuration=void 0,n.name=ce,n.outOfRangeDuration=e,n}return Object(p.a)(t,e),t}(Object(re.a)(Error)),le="Invalid Sort Order Exception",ue=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,"".concat(le,": ").concat(e," is not a valid sort order")))).invalidSortOrder=void 0,n.invalidSortOrder=e,n.name=le,n}return Object(p.a)(t,e),t}(Object(re.a)(Error)),de=function(){function e(){Object(l.a)(this,e),this.constraints=void 0,this.propertyValidation=function(e){["duration","isEnabled","sortOrder","source","title","key"].forEach(function(t){if(void 0===e[t])throw new ie(t)})},this.durationValidation=function(e){if(e.duration<=0)throw new se(e.duration.toString())},this.sortOrderValidation=function(e){if(e.sortOrder<0)throw new ue(e.sortOrder.toString())},this.constraints=[this.propertyValidation,this.durationValidation,this.sortOrderValidation]}return Object(u.a)(e,null,[{key:"validate",value:function(t){(new e).validateState(t)}}]),Object(u.a)(e,[{key:"validateState",value:function(e){this.constraints.forEach(function(t){return t(e)})}}]),e}(),he=function(){function e(){Object(l.a)(this,e),this.constraints=void 0,this.propertyValidation=function(e){if(!e.streams)throw new ie("streams")},this.streamValidation=function(e){e.streams.forEach(function(e){return de.validate(e)})},this.constraints=[this.propertyValidation,this.streamValidation]}return Object(u.a)(e,null,[{key:"validate",value:function(t){(new e).validateState(t)}}]),Object(u.a)(e,[{key:"validateState",value:function(e){this.constraints.forEach(function(t){return t(e)})}}]),e}(),pe=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,null,[{key:"load",value:function(){var e=localStorage.getItem("StreamRepoKey_v1");return e?JSON.parse(e):this.emptyRepo()}},{key:"save",value:function(e){try{he.validate(e);var t=JSON.stringify(e);localStorage.setItem("StreamRepoKey_v1",t)}catch(n){console.log(n)}}},{key:"emptyRepo",value:function(){return{streams:ae}}}]),e}(),me=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).openConfiguration=function(e){n.setState({isConfiguring:!0})},n.handleSave=function(e){pe.save(e),n.setState({sourceRepository:e})},n.doneConfiguringCallback=function(){n.setState({isConfiguring:!1})},n.state={isConfiguring:!1,sourceRepository:{streams:[]}},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({sourceRepository:pe.load()})}},{key:"render",value:function(){var e=this.state,t=e.isConfiguring,n=e.sourceRepository,a=n.streams.filter(function(e){return e.isEnabled});return a.sort(function(e,t){return e.sortOrder-t.sortOrder}),o.a.createElement(o.a.Fragment,null,t&&o.a.createElement(ne,{doneConfiguring:this.doneConfiguringCallback,sourceRepo:n,handleSave:this.handleSave}),!t&&o.a.createElement(O,{loadTime:this.props.loadTime,handleConfigureClick:this.openConfiguration},o.a.createElement(N,{openMenuCallback:this.openConfiguration,sourceList:a})))}}]),t}(o.a.Component),fe=function(e){e.current&&e.current.requestFullscreen()},be=function(){var e=o.a.createRef();return o.a.createElement("div",{className:"App",ref:e,onClick:function(){return fe(e)}},o.a.createElement(me,{loadTime:s}))},ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(be,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/kaleidoscope-web-streamer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/kaleidoscope-web-streamer","/service-worker.js");ve?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ge(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ge(t,e)})}}()}},[[70,1,2]]]);
//# sourceMappingURL=main.0b9c2a41.chunk.js.map