(this.webpackJsonpmomentumclone=this.webpackJsonpmomentumclone||[]).push([[0],Array(23).concat([function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(10),l=a.n(o),r=(a(23),a(3)),s=(a(24),a(25),function(){return c.a.createElement("div",{class:"overlay loading-overlay"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"loading-logo","data-test":"loading-logo",fill:"#ccc"},c.a.createElement("path",{d:"M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm122.763 344.309h-15.484v-95.746c0-34.76-18.012-54.983-47.715-54.983-27.176 0-50.875 20.856-50.875 56.879v93.85h-15.484v-96.695c0-33.5-18.327-54.035-47.083-54.035s-51.507 25.28-51.507 57.827v92.9h-15.483V183.151h15.483v28.756c10.428-16.748 24.964-32.548 53.719-32.548 28.124 0 45.5 16.116 54.352 34.76 10.428-18.012 27.807-34.76 58.143-34.76 38.235 0 61.935 26.86 61.935 67.307z"})))}),i=(a(26),a(27),a(28),a(2)),m=function(){var e=Object(i.c)((function(e){return e.time.display24Hours}));return c.a.createElement("div",{className:"time-format-checkbox-container"},c.a.createElement("input",Object.assign({type:"checkbox",name:"check",id:"",className:"time-format-checkbox"},e?{checked:!0}:{})))},d=function(e){var t=e.getTwentyFourHour,a=e.getMinute;return c.a.createElement("div",null,t,":",a)},p=function(e){var t=e.getHour,a=e.getMinute;return c.a.createElement("div",null,t,":",a)},u="TIME_DISPLAY_24_HOURS",v="TIME_HIDE_24_HOURS",E="TIME_DISPLAY_DROP_DOWN",h="TIME_HIDE_DROP_DOWN",g=function(){return{type:h}},f="OTHER_TIME_DISPLAY_DROP_DOWN",w="OTHER_TIME_HIDE_DROP_DOWN",N=function(e){var t=e.getHour,a=e.getMinute,n=e.getTwentyFourHour,o=Object(i.c)((function(e){return e.time.display24Hours})),l=Object(i.c)((function(e){return e.timeDropDown.timeDropDown})),r=Object(i.c)((function(e){return e.otherTimeDropDownReducer.otherTimeDropDown})),s=Object(i.b)(),h=function(){s(o?{type:v}:{type:u})},N=function(){s(l?g():{type:E})},b=function(){s(r?{type:w}:{type:f})};return c.a.createElement("div",{className:"time-section-container"},c.a.createElement("div",{className:"time-section-wrapper"},c.a.createElement("div",{className:"time-section-display"},c.a.createElement("div",{className:"side-col left"},c.a.createElement("div",{className:"more more-dash",onClick:function(){return b()}},c.a.createElement("div",{className:"icon-wrapper dash-icon-wrapper more-toggle"},c.a.createElement("svg",{"data-v-018521fc":"",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",class:"active-mode dash-icon icon"},c.a.createElement("path",{d:"M346 366a19.94 19.94 0 01-14.14-5.86l-90-90a20 20 0 01-5.86-14.06l-.67-156.33a20 20 0 0119.91-20.09h.09a20 20 0 0120 19.91l.63 148.1 84.18 84.18A20 20 0 01346 366z"}),c.a.createElement("path",{d:"M256 512A256 256 0 0175 75a256 256 0 01362 362 254.33 254.33 0 01-181 75zm0-472a216 216 0 00-152.74 368.74 216 216 0 00305.48-305.48A214.59 214.59 0 00256 40z"}))),c.a.createElement("nav",{style:{visibility:r?"visible":"hidden"},"data-v-018521fc":"",className:"nav align-left"},c.a.createElement("div",{"data-v-018521fc":"","data-test":"clock-opt",className:"nav-item active"},c.a.createElement("svg",{"data-v-018521fc":"",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",className:"icon icon-clock"},c.a.createElement("path",{d:"M346 366a19.94 19.94 0 01-14.14-5.86l-90-90a20 20 0 01-5.86-14.06l-.67-156.33a20 20 0 0119.91-20.09h.09a20 20 0 0120 19.91l.63 148.1 84.18 84.18A20 20 0 01346 366z"}),c.a.createElement("path",{d:"M256 512A256 256 0 0175 75a256 256 0 01362 362 254.33 254.33 0 01-181 75zm0-472a216 216 0 00-152.74 368.74 216 216 0 00305.48-305.48A214.59 214.59 0 00256 40z"})),c.a.createElement("span",{"data-v-018521fc":"",className:"tooltip"},"Clock")),c.a.createElement("div",{"data-v-018521fc":"","data-test":"pomodoro-opt",class:"nav-item"},c.a.createElement("svg",{"data-v-018521fc":"",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-pomodoro"},c.a.createElement("path",{d:"M427.252 93.939c-42.503-26.268-97.046-35.291-143.541-25.641l.01-.021C293.236 49.25 309.9 40 334.667 40c11.046 0 20-8.954 20-20s-8.954-20-20-20C303.084 0 274.696 11.109 256 \t37.029 237.305 11.111 208.918 0 177.333 0c-11.046 0-20 8.954-20 20s8.954 20 20 20c24.333 0 40.828 8.919 50.428 27.267.18.343.351.687.523 1.031C126.652 47.206 0 110.518 0 255.958 0 394.862 96.599 512 256 512c159.009 0 256-116.731 256-256.042 0-70.703-30.098-128.243-84.748-162.019zm-180.196 22.616a20.07 20.07 0 0 0 17.889 0c68.531-34.269 218.655-.395 206.296 158.778h-96.574V256c0-11.046-8.954-20-20-20s-20 8.954-20 20v19.333H276v-58.667c0-11.046-8.954-20-20-20s-20 8.954-20 20v58.667h-58.667V256c0-11.046-8.954-20-20-20s-20 8.954-20 20v19.333H40.76C28.521 117.712 177.219 81.638 247.056 116.555zM256 472c-111.908 0-185.684-65.315-208.727-156.667h417.453C441.728 406.508 368.115 472 256 472zm33.809-92.476c7.811 7.811 7.811 20.474 0 28.284-7.811 7.811-20.474 7.81-28.284 0L256 402.284l-5.524 5.524c-7.811 7.811-20.474 7.811-28.284 0s-7.811-20.474 0-28.284l19.667-19.667c7.811-7.811 20.474-7.811 28.284 0z"})),c.a.createElement("span",{"data-v-018521fc":"",class:"tooltip"},"Pomodoro")),c.a.createElement("div",{"data-v-018521fc":"","data-test":"percent-opt",className:"nav-item"},c.a.createElement("svg",{"data-v-018521fc":"",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",className:"icon icon-percent"},c.a.createElement("g",null,c.a.createElement("path",{d:"M256,512A256,256,0,0,1,75,75,256,256,0,0,1,437,437,254.33,254.33,0,0,1,256,512Zm0-472A216,216,0,0,0,103.26,408.74,216,216,0,0,0,408.74,103.26,214.62,214.62,0,0,0,256,40Z"}),c.a.createElement("path",{d:"M192.22,239.42a50.23,50.23,0,1,1,50.23-50.23A50.28,50.28,0,0,1,192.22,239.42Zm0-70.41a20.19,20.19,0,1,0,20.19,20.18A20.21,20.21,0,0,0,192.22,169Z"}),c.a.createElement("path",{d:"M321.78,368A50.23,50.23,0,1,1,372,317.81,50.28,50.28,0,0,1,321.78,368Zm0-70.41A20.19,20.19,0,1,0,342,317.81,20.22,20.22,0,0,0,321.78,297.62Z"}),c.a.createElement("path",{d:"M164.38,363.28a16.9,16.9,0,0,1-11.95-28.84L333.51,153.36a16.9,16.9,0,1,1,23.89,23.9L176.33,358.33A16.86,16.86,0,0,1,164.38,363.28Z"}))),c.a.createElement("span",{"data-v-018521fc":"",className:"tooltip"},"Percent Clock"))))),c.a.createElement("div",{className:"main-time-container"},c.a.createElement("div",{className:"main-time-display"},!0===o?c.a.createElement(d,{getTwentyFourHour:n,getMinute:a}):c.a.createElement(p,{getHour:t,getMinute:a}))),c.a.createElement("div",{className:"side-col right"},c.a.createElement("div",{className:"more more-dash"},c.a.createElement("div",{onBlur:function(){s(g())},onClick:function(){return N()},style:{opacity:l?"1":""},className:"icon-wrapper dash-icon-wrapper more-toggle"},c.a.createElement("svg",{"data-v-c8d4d4da":"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60",class:"icon"},c.a.createElement("path",{"data-v-c8d4d4da":"",d:"M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"}))),c.a.createElement("div",{style:{visibility:l?"visible":"hidden"},className:"right-dropdown-container more-dropdown dash-dropdown nipple nipple-top-left "},c.a.createElement("ul",{className:"time-ul dropdown-list"},c.a.createElement("li",{onClick:function(){return h()},className:"time-li has-toggle"},c.a.createElement("span",{className:"dropdown-list-label"},"24-hour clock"),c.a.createElement("span",{className:"toggle-slider"},c.a.createElement(m,null)))))))),c.a.createElement("div",{dir:"ltr",className:"time-resize-sensor"},c.a.createElement("div",{className:"resize-sensor-expand"},c.a.createElement("div",{className:"inner-time-sensor"})),c.a.createElement("div",{className:"resize-sensor-shrink"},c.a.createElement("div",{className:"time-resize-shrink"})))))},b=(a(33),a(34),a(6)),y=a.n(b),O="ADD_NAME",j=a(4),k=a.n(j),x=a(9),D="REQUEST_BACKGROUND_IMAGE",M="REQUEST_BACKGROUND_IMAGE_SUCCESS",C="REQUEST_BACKGROUND_IMAGE_FAILURE",z=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],o=t[1],l=(Object(i.c)((function(e){return e.name.name})),Object(i.b)());return Object(n.useEffect)((function(){!function(){var e=(new Date).getHours();o(e<12?"Good morning,":e<17?"Good afternoon,":"Good evening,")}()}),[]),Object(n.useEffect)((function(){l(function(){var e=Object(x.a)(k.a.mark((function e(t){var a,n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:D}),e.prev=1,a="https://api.unsplash.com/photos/random/?client_id=".concat("8mb5eGQc4973c_ChY-M_D1Zdynhimy4Ompb0Lam36Hw","&query=nature"),e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:c=e.sent,t({type:M,payload:c}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t((o=e.t0,{type:C,payload:o}));case 15:case"end":return e.stop()}var o}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}())}),[]),c.a.createElement("div",{className:"greeting-section"},c.a.createElement("div",{className:"greeting-display"},c.a.createElement("div",{className:"greeting-side-col"}),c.a.createElement("div",{className:"greeting-text-container"},c.a.createElement("span",{className:"greeting-text-content"},c.a.createElement("span",{className:"greeting-message"},a),c.a.createElement("span",{className:"greeting-name-container"},c.a.createElement("span",{className:"greeting-name-wrapper"}),c.a.createElement("span",{"data-test":"punctuation",className:"punctuation"},".")))),c.a.createElement("div",{className:"greeting-menu-container side-col"},c.a.createElement("span",{className:"greeting-menu-display more-dash"},c.a.createElement("div",{className:"greeting-menu-wrapper icon-wrapper dash-icon-wrapper more-toggle"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.a.createElement("path",{d:"M432 0h-76c-44.1 0-80 35.9-80 80v76c0 44.1 35.9 80 80 80h76c44.1 0 80-35.9 80-80V80C512 35.9 476.1 0 432 0zM472 156c0 22.1-17.9 40-40 40h-76c-22.1 0-40-17.9-40-40V80c0-22.1 17.9-40 40-40h76c22.1 0 40 17.9 40 40V156z"}),c.a.createElement("path",{d:"M156 0H80C35.9 0 0 35.9 0 80v76c0 44.1 35.9 80 80 80h76c44.1 0 80-35.9 80-80V80C236 35.9 200.1 0 156 0zM196 156c0 22.1-17.9 40-40 40H80c-22.1 0-40-17.9-40-40V80c0-22.1 17.9-40 40-40h76c22.1 0 40 17.9 40 40V156z"}),c.a.createElement("path",{d:"M156 276H80c-44.1 0-80 35.9-80 80v76c0 44.1 35.9 80 80 80h76c44.1 0 80-35.9 80-80v-76C236 311.9 200.1 276 156 276zM196 432c0 22.1-17.9 40-40 40H80c-22.1 0-40-17.9-40-40v-76c0-22.1 17.9-40 40-40h76c22.1 0 40 17.9 40 40V432z"}),c.a.createElement("path",{d:"M492 412c-11 0-20 9-20 20 0 22.1-17.9 40-40 40h-76c-22.1 0-40-17.9-40-40v-76c0-22.1 17.9-40 40-40h76c15.9 0 30.3 9.4 36.7 24 4.4 10.1 16.2 14.7 26.3 10.3 10.1-4.4 14.7-16.2 10.3-26.3C492.6 294.8 463.8 276 432 276h-76c-44.1 0-80 35.9-80 80v76c0 44.1 35.9 80 80 80h76c44.1 0 80-35.9 80-80C512 421 503 412 492 412z"})))))))},_=function(e){var t=e.getAmPm,a=e.getMinute,n=e.getHour,o=e.getTwentyFourHour;return c.a.createElement("section",{className:"time-greet-container"},c.a.createElement("div",{className:"time-greet-display"},c.a.createElement(N,{getAmPm:t,getMinute:a,getHour:n,getTwentyFourHour:o}),c.a.createElement(z,null)))},T=(a(47),a(48),function(){return c.a.createElement("div",null,c.a.createElement("div",{"data-v-1463c36e":"",className:"todo-greet-message-wrapper"},c.a.createElement("div",{"data-v-1463c36e":"","data-test":"focus-message",className:"message todo-greet-focus-message"},c.a.createElement("span",{"data-v-1463c36e":""},"\xa0"))))}),A=(a(49),a(62)),S="ADD_TODO",H="DELETE_TODO",I="TOGGLE_CHECK_TODO",L=function(){Object(i.b)();var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],o=t[1],l=Object(i.c)((function(e){return e.todo.todos}));return c.a.createElement("section",{style:{display:0===l.length?"block":"none"}},c.a.createElement("form",{action:"",onSubmit:function(e){if(e.preventDefault(),""!==a.trim()){var t={id:Object(A.a)(),value:a,completed:!1};y.a.set("todo",t)}else alert("cant happen");o("")}},c.a.createElement("div",{className:"input-form-display"},c.a.createElement("label",{htmlFor:""},"What is your main Focus today?"),c.a.createElement("input",{type:"text",name:"",id:"",onChange:function(e){o(e.target.value)},value:a}))))},R=(a(50),a(51),function(e){var t=e.todo,a=t.id,n=t.value,o=t.completed,l=Object(i.b)();return c.a.createElement("div",{className:"todo-list-item-container"},c.a.createElement("span",{"data-v-20431cdb":"",class:"side-col todo-checkbox-container"},c.a.createElement("span",{"data-v-20431cdb":"",style:{opacity:o?"1":""},"data-test":"complete",class:"control todo-checkbox"},c.a.createElement("input",Object.assign({onClick:function(){return l(function(e){return{type:I,payload:e}}(a))},type:"checkbox",name:"",id:""},o?{checked:!0}:{})),c.a.createElement("label",{style:{opacity:o?"1":""},htmlFor:""}))),c.a.createElement("span",{className:"today-todo",style:{textDecoration:o?"line-through":"none"}},n),c.a.createElement("span",{"data-v-20431cdb":"",className:"side-col todo-delete-container"},c.a.createElement("span",{onClick:function(){return l(function(e){return{type:H,payload:e}}(a))},"data-v-20431cdb":"",style:{opacity:o?"1":""},"data-test":"delete",className:"control todo-delete"},c.a.createElement("span",{"data-v-20431cdb":"",style:{transform:o?"rotate(45deg)":""},className:"icon-wrapper dash-icon-wrapper"},c.a.createElement("svg",{style:{opacity:o?"1":""},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.a.createElement("path",{d:"M284.3 256L506.1 34.1c7.8-7.8 7.8-20.5 0-28.3 -7.8-7.8-20.5-7.8-28.3 0L256 227.7 34.1 5.9c-7.8-7.8-20.5-7.8-28.3 0 -7.8 7.8-7.8 20.5 0 28.3l221.9 221.9L5.9 477.9c-7.8 7.8-7.8 20.5 0 28.3 3.9 3.9 9 5.9 14.1 5.9 5.1 0 10.2-2 14.1-5.9L256 284.3l221.9 221.9c3.9 3.9 9 5.9 14.1 5.9s10.2-2 14.1-5.9c7.8-7.8 7.8-20.5 0-28.3L284.3 256z"}))))))}),B=function(){var e=Object(i.c)((function(e){return e.todo.todos}));return c.a.createElement("section",{className:"todo-list-section",style:{display:0===e.length?"none":"block"}},c.a.createElement("div",{className:"todo-list-section-display"},c.a.createElement("div",{"data-v-20431cdb":"",className:"todo-list-fake-input-prompt"},c.a.createElement("h3",{"data-v-20431cdb":""},"What is your main focus for today?"),c.a.createElement("input",{"data-v-20431cdb":""})),c.a.createElement("div",{className:"todo-focus-container"},c.a.createElement("div",{className:"todo-title"},"Today"),e&&e.map((function(e){return c.a.createElement(R,{key:e.id,todo:e})})))))},U=function(){return c.a.createElement("section",{className:"todo-input-container"},c.a.createElement("div",{className:"todo-input-wrapper"},c.a.createElement("div",{className:"todo-input-focus"},c.a.createElement("div",{className:"todo-input-focus-wrapper"},c.a.createElement(L,null),c.a.createElement(B,null)),c.a.createElement(T,null))))},P=(a(52),a(53),a(15)),G=a.n(P),F=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(),s=Object(r.a)(l,2),i=s[0],m=s[1];return Object(n.useEffect)((function(){var e=setInterval((function(){var e=G()();o(e.format("dddd")),m(e.format("MMMM Do YYYY"))}),1e3);return function(){return clearInterval(e)}}),[]),c.a.createElement("div",{className:"date-top-left"},c.a.createElement("div",{className:"app-container weather show show-fade-in","data-test":"weather"},c.a.createElement("div",{className:"app-dash date-metric-item",title:i,"data-test":"app-dash"},c.a.createElement("div",{className:"date-metric-stat"},c.a.createElement("div",null,c.a.createElement("span",{className:"unit hide"},i))),c.a.createElement("div",{className:"location metric-label data","data-test":"location",title:a},c.a.createElement("span",{className:"metric-label-name"},a)),c.a.createElement("span",{className:"metric-message"}))))},V=(a(55),a(56),function(){var e=Object(i.c)((function(e){return e.location.locationDetails}));return c.a.createElement("div",{className:"weather-metric-stat-container"},c.a.createElement("span",{className:"icon icon-weather","data-icon":"H",title:e&&e.WeatherText},function(){var t=e&&e.WeatherIcon;if(t)return c.a.createElement("img",{src:"/momentumclone/img/"+t+".png",alt:"weather-icon"})}()),c.a.createElement("div",null,c.a.createElement("span",{className:"metric-stat-number","data-test":"temperature"},e&&e.Temperature.Metric.Value.toFixed()),c.a.createElement("span",{className:"weather-degree"},"\xb0"),c.a.createElement("span",{className:"unit hide"},e&&e.Temperature.Metric.Unit.toLowerCase())))}),W=(a(57),function(){return c.a.createElement("div",{"data-v-6ac648f0":"",className:"add-widget-container needs-hover","data-just-bound-click-outside-handler":"false","data-click-outside-mouseup-handler-id":"iwp6pn","data-click-outside-mousedown-handler-id":"82nsu5"},c.a.createElement("div",{"data-v-6ac648f0":"","data-ob":"add-widget",class:"app-dash metric-item add-shadow"},c.a.createElement("div",{"data-v-6ac648f0":"",className:"add-metric-stat"},c.a.createElement("span",{"data-v-6ac648f0":"",className:"placeholder"},c.a.createElement("span",{"data-v-6ac648f0":"",className:"add-hide"},"a"),c.a.createElement("svg",{"data-v-6ac648f0":"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"icon icon-add"},c.a.createElement("path",{"data-v-6ac648f0":"",d:"M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659 472.341 136.705 472.341 256 375.295 472.341 256 472.341z"}),c.a.createElement("path",{"data-v-6ac648f0":"",d:"M355.148 234.386H275.83v-79.318c0-10.946-8.864-19.83-19.83-19.83s-19.83 8.884-19.83 19.83v79.318h-79.318c-10.966 0-19.83 8.884-19.83 19.83s8.864 19.83 19.83 19.83h79.318v79.318c0 10.946 8.864 19.83 19.83 19.83s19.83-8.884 19.83-19.83v-79.318h79.318c10.966 0 19.83-8.884 19.83-19.83s-8.864-19.83-19.83-19.83z"})))),c.a.createElement("div",{"data-v-6ac648f0":"",className:"add-metric-label"},c.a.createElement("span",{"data-v-6ac648f0":"",className:"metric-label-name"},"Add"))))}),Q=(a(58),function(){var e=Object(i.c)((function(e){return e.location.locationDetails}));return c.a.createElement("div",{className:"weather-top-right"},c.a.createElement("div",{className:"app-container weather show show-fade-in","data-test":"weather"},c.a.createElement("div",{className:"app-dash metric-item",title:e&&e.WeatherText,"data-test":"app-dash"},c.a.createElement(V,null),c.a.createElement("div",{className:"location-metric-label-name-container data","data-test":"location",title:"Lagos, Nigeria"},c.a.createElement("span",{className:"metric-label-name"},e&&e.AdministrativeArea.EnglishName)),c.a.createElement("span",{className:"metric-message"}))),c.a.createElement(W,null))}),Y=function(){return c.a.createElement("header",{class:"date-weather-header"},c.a.createElement(F,null),c.a.createElement("div",{class:"top-center"}),c.a.createElement(Q,null))},Z=(a(59),function(){var e=Object(i.c)((function(e){return e.background.backgroundImage}));return c.a.createElement("footer",null,c.a.createElement("div",{className:"region footer-left-container",id:"bottom-left"},c.a.createElement("div",{id:"settings",className:"app-container settings-icon-container","data-test":"settings","data-justboundclickoutsidehandler":"false","data-clickoutsidemouseuphandlerid":"a7ezab","data-clickoutsidemousedownhandlerid":"z7qp9f"},c.a.createElement("div",{className:"app-wrapper nipple nipple-bottom-left"},c.a.createElement("div",{className:"app settings-app","data-test":"settings-app"})),c.a.createElement("span",{className:"app-dash setting-icon-toggle","data-test":"settings-toggle","data-ob":"settings-toggle"},c.a.createElement("svg",{className:"toggle-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 340.274 340.274"},c.a.createElement("path",{d:"M293.629 127.806l-5.795-13.739c19.846-44.856 18.53-46.189 14.676-50.08l-25.353-24.77-2.516-2.12h-2.937c-1.549 0-6.173 0-44.712 17.48l-14.184-5.719c-18.332-45.444-20.212-45.444-25.58-45.444h-35.765c-5.362 0-7.446-.006-24.448 45.606l-14.123 5.734C86.848 43.757 71.574 38.19 67.452 38.19l-3.381.105-27.27 26.737c-4.138 3.891-5.582 5.263 15.402 49.425l-5.774 13.691C0 146.097 0 147.838 0 153.33v35.068c0 5.501 0 7.44 46.585 24.127l5.773 13.667c-19.843 44.832-18.51 46.178-14.655 50.032l25.353 24.8 2.522 2.168h2.951c1.525 0 6.092 0 44.685-17.516l14.159 5.758c18.335 45.438 20.218 45.427 25.598 45.427h35.771c5.47 0 7.41 0 24.463-45.589l14.195-5.74c26.014 11 41.253 16.585 45.349 16.585l3.404-.096 27.479-26.901c3.909-3.945 5.278-5.309-15.589-49.288l5.734-13.702c46.496-17.967 46.496-19.853 46.496-25.221V151.88c-.005-5.519-.005-7.446-46.644-24.074zM170.128 228.474c-32.798 0-59.504-26.187-59.504-58.364 0-32.153 26.707-58.315 59.504-58.315 32.78 0 59.43 26.168 59.43 58.315-.006 32.177-26.656 58.364-59.43 58.364z",fill:"#FFF"})))),c.a.createElement("div",{"data-v-1040273e":"","data-test":"background-info-container",className:"app-container app-dash photo-info-container show-hover"},c.a.createElement("div",{"data-v-1040273e":"","data-test":"background-info-title",className:"photo-info-name"},"".concat(e&&e.location.city,", ").concat(e&&e.location.country)),c.a.createElement("div",{"data-v-1040273e":"",className:"photo-source"},c.a.createElement("span",{"data-v-1040273e":"","data-test":"background-info-source-link","data-url":"https://unsplash.com/photos/qnjKufYqIIE",className:"photo-source-link"},"".concat(e&&e.user.name)),c.a.createElement("span",{"data-v-1040273e":"","data-test":"control-fav",className:"photo-source-control control-heart"},c.a.createElement("svg",{height:"464pt",viewBox:"0 -20 464 464",width:"464pt",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"m340 0c-44.773438.00390625-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.19531275-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0",fill:"red"}),c.a.createElement("path",{d:"m32 132c0-63.359375 47.550781-122.359375 108.894531-130.847656-5.597656-.769532-11.242187-1.15625025-16.894531-1.152344-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s6-3.113281 16-8.992188c-52.414062-30.824218-216-138.558593-216-283.007812zm0 0",fill:"red"}))),c.a.createElement("span",{"data-v-1040273e":"",title:"Skip Photo","data-test":"control-skip",className:"photo-source-control control-skip"},c.a.createElement("span",{"data-v-1040273e":"","data-test":"control-skip-icon-container",className:"skip-icon-container"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"512",viewBox:"0 0 512 512",width:"512"},c.a.createElement("linearGradient",{id:"SVGID_1_",gradientUnits:"userSpaceOnUse",x1:"256",x2:"256",y1:"481",y2:"31"},c.a.createElement("stop",{offset:"0",stopColor:"#5558ff"}),c.a.createElement("stop",{offset:"1",stopColor:"#00c0ff"})),c.a.createElement("path",{d:"m505.7 183.8-212-150c-4.6-3.3-10.6-3.7-15.6-1.1-5 2.6-8.1 7.7-8.1 13.3v75.4c-150.2 7.8-270 132.5-270 284.6v60c0 7.5 5.5 13.8 12.9 14.9 7.2 1.1 14.4-3.4 16.5-10.7l2.3-8.1c30.8-107.6 127.5-184.2 238.3-190.6v74.6c0 5.6 3.1 10.8 8.1 13.3 5 2.6 11 2.1 15.6-1.1l212-150c3.9-2.8 6.3-7.4 6.3-12.2s-2.3-9.4-6.3-12.2z",fill:"url(#SVGID_1_)"}))))))),c.a.createElement("div",{className:"footer-center-container"},c.a.createElement("div",{className:"footer-center-display"},c.a.createElement("p",{className:"footer-center-text-container"},c.a.createElement("span",{className:"footer-center-body-text"},"\u201cNothing can dim the light which shines from within.\u201d"),c.a.createElement("span",{className:"footer-center-text-below"},c.a.createElement("span",{className:"footer-center-text-below-name"},"Maya Angelou"),c.a.createElement("span",{title:"like","data-test":"like",className:"control control-heart"},c.a.createElement("svg",{height:"464pt",viewBox:"0 -20 464 464",width:"464pt",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"m340 0c-44.773438.00390625-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.19531275-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0",fill:"red"}),c.a.createElement("path",{d:"m32 132c0-63.359375 47.550781-122.359375 108.894531-130.847656-5.597656-.769532-11.242187-1.15625025-16.894531-1.152344-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s6-3.113281 16-8.992188c-52.414062-30.824218-216-138.558593-216-283.007812zm0 0",fill:"red"}))),c.a.createElement("span",{"data-v-f7053094":"","data-test":"skip",title:"Skip Quote",className:"control control-skip"},c.a.createElement("span",{"data-v-f7053094":"",className:"icon-container"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"512",viewBox:"0 0 512 512",width:"512"},c.a.createElement("linearGradient",{id:"SVGID_1_",gradientUnits:"userSpaceOnUse",x1:"256",x2:"256",y1:"481",y2:"31"},c.a.createElement("stop",{offset:"0",stopColor:"#5558ff"}),c.a.createElement("stop",{offset:"1",stopColor:"#00c0ff"})),c.a.createElement("path",{d:"m505.7 183.8-212-150c-4.6-3.3-10.6-3.7-15.6-1.1-5 2.6-8.1 7.7-8.1 13.3v75.4c-150.2 7.8-270 132.5-270 284.6v60c0 7.5 5.5 13.8 12.9 14.9 7.2 1.1 14.4-3.4 16.5-10.7l2.3-8.1c30.8-107.6 127.5-184.2 238.3-190.6v74.6c0 5.6 3.1 10.8 8.1 13.3 5 2.6 11 2.1 15.6-1.1l212-150c3.9-2.8 6.3-7.4 6.3-12.2s-2.3-9.4-6.3-12.2z",fill:"url(#SVGID_1_)"})))),c.a.createElement("span",{"data-v-f7053094":"",title:"share","data-test":"share",className:"control control-twitter"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 490.7 490.7"},c.a.createElement("path",{d:"M487.8 92.9c-3.3-3.6-8.5-4.5-12.8-2.3 -4.4 2-9 3.7-13.6 4.9 7.3-9.3 12.8-19.9 16.2-31.2 1.5-5.7-1.9-11.5-7.6-13 -3-0.8-6.3-0.2-8.9 1.6 -16.2 8.8-33.5 15.5-51.3 20.1 -36.8-34.7-92.8-39-134.5-10.4 -32.1 21.7-49.8 59.2-46.1 97.8 -69.6-5.9-133.6-40.4-176.9-95.3 -2.2-2.7-5.6-4.2-9.1-4 -3.5 0.2-6.7 2.2-8.5 5.2 -14.7 24-18.9 52.9-11.8 80.1 3.7 14 10 27.1 18.5 38.8 -3.9-1.9-7.5-4.2-10.8-6.9 -4.6-3.7-11.3-3-15 1.6 -1.5 1.9-2.4 4.3-2.4 6.7 0.6 39.5 22.3 75.6 56.8 94.7 -4.7-0.6-9.3-1.6-13.7-2.9 -5.6-1.7-11.6 1.5-13.3 7.1 -0.7 2.5-0.6 5.1 0.5 7.5 15 33.6 44.9 58.1 80.8 66.1 -34.2 19.3-73.5 27.4-112.5 23.2 -5.1-0.6-9.8 2.4-11.4 7.3 -1.6 4.8 0.5 10.1 4.9 12.6 47.8 28.4 102.1 43.8 157.7 44.8 53.3-0.2 105.3-16.1 149.6-45.8 84.5-56.1 137.2-156.8 129.9-247 18.1-13.4 33.8-29.7 46.4-48.3C491.6 101.8 491.1 96.5 487.8 92.9z",fill:"#03A9F4"}))))))),c.a.createElement("div",{className:"region footer-right-container"},c.a.createElement("div",{id:"todo",className:"footer-todo-container todo show show-fade-in","data-test":"todo",style:{},"data-justboundclickoutsidehandler":"false","data-clickoutsidemouseuphandlerid":"sb4gnm","data-clickoutsidemousedownhandlerid":"6rh19o"},c.a.createElement("div",{style:{display:"none"},className:"app-wrapper nipple nipple-bottom-right"},c.a.createElement("div",{className:"app todo-app",style:{height:"auto",width:"320px",overflowY:"hidden"}},c.a.createElement("div",{className:"drop-zone drop-left-zone"},c.a.createElement("span",{className:"bar left-bar"},c.a.createElement("span",{className:"bar-name"}))),c.a.createElement("div",{className:"drop-zone drop-right-zone"},c.a.createElement("span",{className:"bar right-bar"},c.a.createElement("span",{className:"bar-name"}))),c.a.createElement("header",{className:"header todo-header momentum-todo has-assignee","data-test":"todo-header"},c.a.createElement("div",{className:"todo-header-row"},c.a.createElement("div",{className:"list-color",style:{backgroundColor:"rgba(0,0,0,0)"}}),c.a.createElement("div",{className:"active-list-container has-icon","data-test":"todo-list-chooser"},c.a.createElement("img",{className:"provider-icon",src:""}),c.a.createElement("span",{className:"list-name active-list-name ",title:"Today","data-test":"todo-active-list-title"},"Today"),c.a.createElement("div",{className:"list-chooser-toggle icon-wrapper",style:{display:"inline-flex"}},c.a.createElement("svg",{className:"icon icon-angle-down",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 55.751 55.751"},c.a.createElement("path",{d:"M31.836 43.006c.282-.281.518-.59.725-.912L54.17 20.485a5.403 5.403 0 0 0 0-7.638 5.403 5.403 0 0 0-7.638 0l-18.608 18.61L9.217 12.753A5.4 5.4 0 0 0 0 16.571a5.363 5.363 0 0 0 1.582 3.816l21.703 21.706c.207.323.445.631.729.913a5.367 5.367 0 0 0 3.91 1.572 5.37 5.37 0 0 0 3.912-1.572z"}))),c.a.createElement("ul",{className:"dropdown list-chooser nipple nipple-top-left","data-test":"todo-list-dropdown",style:{display:"none"}},c.a.createElement("ul",{"data-test":"inbox","data-list-id":"1-inbox"},c.a.createElement("li",{className:"todo-list-choice ","data-list-id":"1-inbox"},c.a.createElement("div",{className:"list-color",style:{backgroundColor:""}},"\xa0"),c.a.createElement("span",{className:"list-name"},"Inbox"),c.a.createElement("span",{className:"todo-count"},"0"))),c.a.createElement("ul",{"data-test":"today","data-list-id":"1-today"},c.a.createElement("li",{className:"todo-list-choice-active ","data-list-id":"1-today"},c.a.createElement("div",{className:"list-color",style:{backgroundColor:""}},"\xa0"),c.a.createElement("span",{className:"list-name"},"Today"),c.a.createElement("span",{className:"todo-count"},"0"))),c.a.createElement("ul",{"data-test":"done","data-list-id":"1-done"},c.a.createElement("li",{className:"todo-list-choice ","data-list-id":"1-done"},c.a.createElement("div",{className:"list-color",style:{backgroundColor:""}},"\xa0"),c.a.createElement("span",{className:"list-name"},"Done"),c.a.createElement("span",{className:"todo-count"}," "))),c.a.createElement("li",{className:"todo-list-add-row"},c.a.createElement("div",{id:"list-new",className:"upsell-row"},c.a.createElement("div",{className:"copy"},"+ New List"),c.a.createElement("span",{className:"badge badge-plus"},"Plus"))))),c.a.createElement("div",{className:"todo-actions"},c.a.createElement("div",{className:"more",id:"todo-top-menu"},c.a.createElement("div",{className:"icon-wrapper more-toggle","data-test":"todo-item-dropdown-toggle"},c.a.createElement("svg",{className:"icon icon-ellipsis",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60"},c.a.createElement("path",{d:"M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"}))),c.a.createElement("div",{className:"dropdown todo-actions-dropdown",style:{display:"none",opacity:"0",height:"auto"}},c.a.createElement("ul",{className:"dropdown-list"},c.a.createElement("li",{"data-itemid":"c310",title:"Automatically set top todo as focus","data-test":"dropdown-autofocus"},c.a.createElement("span",{className:"dropdown-list-icon-wrapper"},c.a.createElement("svg",{className:"dropdown-list-icon icon icon-autofocus",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 124.512 124.512"},c.a.createElement("path",{d:"M113.956 57.006l-97.4-56.2c-4-2.3-9 .6-9 5.2v112.5c0 4.6 5 7.5 9 5.2l97.4-56.2c4-2.401 4-8.2 0-10.5z"}))),c.a.createElement("span",{className:"dropdown-list-label"},"Autofocus"),c.a.createElement("span",{className:"badge badge-plus"},"PLUS")),c.a.createElement("li",{"data-itemid":"c311",className:"line"},c.a.createElement("span",{className:"dropdown-list-label"})),c.a.createElement("li",{"data-itemid":"c317",title:"Connect to a third party to-do list","data-test":"dropdown-add-integration"},c.a.createElement("span",{className:"dropdown-list-label"},"Add integration"),c.a.createElement("span",{className:"badge badge-plus"},"PLUS")),c.a.createElement("li",{"data-itemid":"c318",className:"no-icon"},c.a.createElement("span",{className:"dropdown-list-label"},"Settings"))),c.a.createElement("ul",{className:"dropdown-list dropdown-detail"})))))),c.a.createElement("div",{className:"todo-list-wrapper",style:{minHeight:"152px",maxHeight:"152px"}},c.a.createElement("ol",{className:"todo-list is-empty",style:{maxHeight:"152px",minHeight:"152px",opacity:"1"},"data-test-list-loaded":""},c.a.createElement("li",{className:"empty"},c.a.createElement("p",{className:"title empty-title"},"Add a todo to get started"),c.a.createElement("div",{className:"description empty-link","data-target-list-id":"1-inbox","data-use-command":""},"Switch to Inbox",c.a.createElement("i",{className:"icon icon-angle-right"})),c.a.createElement("button",{className:"button new-todo-button","data-test":"todo-new-empty"},"New Todo")))),c.a.createElement("div",{className:"footer-input new-todo-footer",style:{visibility:"hidden"}},c.a.createElement("input",{id:"todo-new",className:"todo-input todo-new",type:"text",placeholder:"New Todo","data-test":"todo-new-input",autoComplete:"off"})))),c.a.createElement("span",{className:"app-dash toggle footer-todo-toggle","data-test":"todo-app-dash","data-ob":"todo-app-dash"},"Todo"))))}),K=a(1),J="REQUEST_LOCATION",q="REQUEST_LOCATION_SUCCESS",$="REQUEST_LOCATION_ERROR",X=function(e){return function(){var t=Object(x.a)(k.a.mark((function t(a){var n,c,o;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:J}),t.prev=1,n="http://dataservice.accuweather.com/currentconditions/v1/".concat(e.Key,"?apikey=").concat("P0BEZ1EdgkfLR5R4chm5ChWLQyJMkHtJ"),t.next=5,fetch(n);case 5:return c=t.sent,t.next=8,c.json();case 8:o=t.sent,a((r=Object(K.a)(Object(K.a)({},e),o[0]),{type:q,payload:r})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),a((l=t.t0,{type:$,payload:l}));case 15:case"end":return t.stop()}var l,r}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}()};var ee=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),m=Object(r.a)(l,2),d=m[0],p=m[1],u=Object(n.useState)(""),v=Object(r.a)(u,2),E=v[0],h=v[1],g=Object(n.useState)(""),f=Object(r.a)(g,2),w=f[0],N=f[1],b=Object(i.b)(),y=Object(i.c)((function(e){return e.background.backgroundImage}));return Object(n.useEffect)((function(){b((function(e){navigator.geolocation.getCurrentPosition(function(){var t=Object(x.a)(k.a.mark((function t(a){var n,c,o,l,r,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.coords,c=n.latitude,o=n.longitude,l="http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat("P0BEZ1EdgkfLR5R4chm5ChWLQyJMkHtJ","&q=").concat(c,"%2C").concat(o,"&language=en-us&details=true&toplevel=true"),t.next=4,fetch(l);case 4:return r=t.sent,t.next=7,r.json();case 7:s=t.sent,console.log(s.Key),e(X(s));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(){console.log("your browser does not support it")}))}))}),[]),Object(n.useEffect)((function(){var e=setInterval((function(){var e=new Date,t=e.getHours(),a=e.getMinutes(),n=t<=9?"0".concat(t):"".concat(t);h(n),o(t>=12?"PM":"AM"),p(t%12||12);var c=a<=9?"0".concat(a):"".concat(a);N(c)}),1e3);return function(){return clearInterval(e)}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),c.a.createElement("div",{className:"main-app"},c.a.createElement("div",{"data-v-684a4388":"",className:"backgrounds"},c.a.createElement("div",{"data-v-684a4388":"",className:"background"},c.a.createElement("div",{"data-v-684a4388":"","data-test":"background-item",className:"background-item",style:{backgroundImage:y?"url(".concat(y.urls.full,")"):""}})),c.a.createElement("div",{"data-v-684a4388":"",style:{backgroundImage:"url(".concat("/momentumclone/img/download.png",")")},className:"background-overlay"})),c.a.createElement("div",{className:"show-app"},c.a.createElement("div",{className:"region full"}),c.a.createElement(Y,null),c.a.createElement("div",{className:"center-above"}),c.a.createElement(_,{getAmPm:a,getMinute:w,getHour:d,getTwentyFourHour:E}),c.a.createElement(U,null),c.a.createElement(Z,null))))},te=a(7),ae=a(16),ne=a(17),ce={display24Hours:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(K.a)(Object(K.a)({},e),{},{display24Hours:!0});case v:return Object(K.a)(Object(K.a)({},e),{},{display24Hours:!1});default:return e}},le={timeDropDown:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(K.a)(Object(K.a)({},e),{},{timeDropDown:!0});case h:return Object(K.a)(Object(K.a)({},e),{},{timeDropDown:!1});default:return e}},se=a(18),ie={todos:[]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(K.a)(Object(K.a)({},e),{},{todos:[].concat(Object(se.a)(e.todos),[t.payload])});case H:return Object(K.a)(Object(K.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.payload}))});case I:return Object(K.a)(Object(K.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.payload?Object(K.a)(Object(K.a)({},e),{},{completed:!e.completed}):e}))});default:return e}},de={loading:!0,locationDetails:null,error:!1},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(K.a)(Object(K.a)({},e),{},{loading:!0,error:!1});case q:return Object(K.a)(Object(K.a)({},e),{},{loading:!1,locationDetails:t.payload,error:!1});case $:return Object(K.a)(Object(K.a)({},e),{},{loading:!1,locationDetails:null,error:t.payload});default:return e}},ue={name:""},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(K.a)(Object(K.a)({},e),{},{name:t.payload});default:return e}},Ee={loading:!0,backgroundImage:null,error:!1},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(K.a)(Object(K.a)({},e),{},{loading:!0,backgroundImage:null,error:!1});case M:return Object(K.a)(Object(K.a)({},e),{},{loading:!1,backgroundImage:t.payload,error:!1});case C:return Object(K.a)(Object(K.a)({},e),{},{loading:!1,backgroundImage:null,error:t.payload});default:return e}},ge={otherTimeDropDown:!1},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(K.a)(Object(K.a)({},e),{},{otherTimeDropDown:!0});case w:return Object(K.a)(Object(K.a)({},e),{},{otherTimeDropDown:!1});default:return e}},we=Object(te.combineReducers)({time:oe,timeDropDown:re,todo:me,location:pe,name:ve,background:he,otherTimeDropDownReducer:fe}),Ne=Object(te.createStore)(we,Object(ae.composeWithDevTools)(Object(te.applyMiddleware)(ne.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:Ne},c.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[60,1,2]]]);
//# sourceMappingURL=main.a60efa62.chunk.js.map