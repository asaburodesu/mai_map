(this["webpackJsonpgeolonia-pwa"]=this["webpackJsonpgeolonia-pwa"]||[]).push([[0],{108:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(32),s=n.n(r),i=n(11),o=n(31),l=n(7),d=n(27),j=n(22),u=n.n(j),h=n(6),b=(n(78),n(61)),p=n.n(b),f=function(e){var t={type:"FeatureCollection",features:[]};for(var n in e){var a=e[n];if(!a["\u7d4c\u5ea6"]||!a["\u7def\u5ea6"]||!a["\u30b9\u30dd\u30c3\u30c8\u540d"])return;for(var c={type:"Feature",geometry:{type:"Point",coordinates:[Number(a["\u7d4c\u5ea6"]),Number(a["\u7def\u5ea6"])]},properties:{_id:n}},r=0;r<Object.keys(a).length;r++){var s=Object.keys(a)[r];c.properties[s]=a[s]}t.features.push(c)}return t},x=function(e){e.addLayer({id:"clusters",type:"circle",source:"shops",filter:["has","point_count"],paint:{"circle-radius":20,"circle-color":"#FF0000","circle-opacity":1}}),e.addLayer({id:"cluster-count",type:"symbol",source:"shops",filter:["has","point_count"],paint:{"text-color":"#FFFFFF"},layout:{"text-field":"{point_count_abbreviated} \u4ef6","text-size":12,"text-font":["Noto Sans Regular"]}}),e.on("click","clusters",(function(t){var n=e.queryRenderedFeatures(t.point,{layers:["clusters"]}),a=n[0].properties.cluster_id;e.getSource("shops").getClusterExpansionZoom(a,(function(t,a){t||e.easeTo({center:n[0].geometry.coordinates,zoom:a})}))})),e.on("mouseenter","clusters",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","clusters",(function(){e.getCanvas().style.cursor=""}))},m=n(18),O=(n(85),n(2)),g=function(e){e.stopPropagation()},v=function(e){return Object(O.jsxs)("div",{className:"links",children:[e.data.Instagram?Object(O.jsx)("div",{className:"link",children:Object(O.jsx)("a",{href:"https://instagram.com/".concat(e.data.Instagram),children:Object(O.jsx)(m.d,{onClick:g,size:"20px"})})}):"",e.data.Twitter?Object(O.jsx)("div",{className:"link",children:Object(O.jsx)("a",{href:e.data.Twitter,children:Object(O.jsx)(m.h,{onClick:g,size:"20px"})})}):"",e.data.Facebook?Object(O.jsx)("div",{className:"link",children:Object(O.jsx)("a",{href:"https://www.facebook.com/".concat(e.data.Facebook),children:Object(O.jsx)(m.b,{onClick:g,size:"20px"})})}):"",e.data["\u516c\u5f0f\u30b5\u30a4\u30c8"]?Object(O.jsx)("div",{className:"link",children:Object(O.jsx)("a",{href:e.data["\u516c\u5f0f\u30b5\u30a4\u30c8"],children:Object(O.jsx)(m.c,{onClick:g,size:"20px"})})}):""]})},w=(n(87),n(39)),N=function(e){var t="";return"number"!==typeof e||Number.isNaN(e)||(t=e>1e3?Math.round(e/1e3)+" km":Math.round(e)+" m"),t},y=function(e){var t=c.a.useRef(null),n=c.a.useState(null),a=Object(l.a)(n,2),r=a[0],s=a[1],o=e.shop,d=function(){e.close(),t.current&&(t.current.remove(),r.remove())};c.a.useEffect((function(){if(t.current){var e=new window.geolonia.Map({container:t.current,interactive:!1,zoom:14,style:"geolonia/gsi"});s(e)}}),[o,t]);var j,u=N(o.distance),h=o["\u30ab\u30c6\u30b4\u30ea"],b=o["\u7d39\u4ecb\u6587"];return Object(O.jsxs)("div",{className:"shop-single",children:[Object(O.jsx)("div",{className:"head",children:Object(O.jsxs)("button",{onClick:d,children:[Object(O.jsx)(w.b,{size:"16px",color:"#FFFFFF"})," \u9589\u3058\u308b"]})}),Object(O.jsx)("div",{className:"container",children:o?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:o["\u30b9\u30dd\u30c3\u30c8\u540d"]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{className:"nowrap",children:Object(O.jsx)(i.b,{to:"/list?category=".concat(h),children:Object(O.jsx)("span",{onClick:d,className:"category",children:h})})}),Object(O.jsx)("span",{className:"nowrap",children:u&&Object(O.jsxs)("span",{className:"distance",children:["\u73fe\u5728\u4f4d\u7f6e\u304b\u3089 ",u]})})]}),Object(O.jsx)("div",{style:{margin:"24px 0"},children:Object(O.jsx)(v,{data:o})}),o["\u753b\u50cf"]&&Object(O.jsx)("img",{src:o["\u753b\u50cf"],alt:o["\u30b9\u30dd\u30c3\u30c8\u540d"],style:{width:"100%"}}),Object(O.jsx)("p",{style:{margin:"24px 0",wordBreak:"break-all"},children:(j=b,j.split(/(\r\n)|(\n)|(\r)/g).map((function(e,t){var n="";return"\r\n"===e||"\n"===e||"\r"===e?n=Object(O.jsx)("br",{},t):void 0!==e&&(n=e),n})))}),Object(O.jsx)("div",{ref:t,style:{width:"100%",height:"200px",marginTop:"24px"},"data-lat":o["\u7def\u5ea6"],"data-lng":o["\u7d4c\u5ea6"],"data-navigation-control":"off"}),Object(O.jsx)("p",{children:Object(O.jsx)("a",{className:"small",href:"http://maps.apple.com/?q=".concat(o["\u7def\u5ea6"],",").concat(o["\u7d4c\u5ea6"]),children:"\u30b9\u30dd\u30c3\u30c8\u307e\u3067\u306e\u9053\u9806"})})]}):Object(O.jsx)(O.Fragment,{})})]})},k={width:"100%",height:"100%",position:"relative"},F=function(e){for(var t=["poi","poi-primary","poi-r0-r9","poi-r10-r24","poi-r25","poi-bus","poi-entrance"],n=0;n<t.length;n++){var a=t[n];e.setLayoutProperty(a,"visibility","none")}},C=function(e){var t=(e||window.location).hash.substring(2);return new URLSearchParams(t)},S=function(e){var t=c.a.useRef(null),n=c.a.useState(),a=Object(l.a)(n,2),r=a[0],s=a[1],i=c.a.useState(void 0),o=Object(l.a)(i,2),d=o[0],j=o[1],u=c.a.useState(""),h=Object(l.a)(u,2),b=h[0],m=h[1];c.a.useEffect((function(){!function(e,t){e&&t&&e.on("render",(function(){if(!e.getSource("shops")){F(e);var n=f(t);e.addSource("shops",{type:"geojson",data:n,cluster:!0,clusterMaxZoom:14,clusterRadius:25}),e.addLayer({id:"shop-points",type:"circle",source:"shops",filter:["all",["==","$type","Point"]],paint:{"circle-radius":13,"circle-color":"#FF0000","circle-opacity":.4,"circle-stroke-width":2,"circle-stroke-color":"#FFFFFF","circle-stroke-opacity":1}}),e.addLayer({id:"shop-symbol",type:"symbol",source:"shops",filter:["all",["==","$type","Point"]],paint:{"text-color":"#000000","text-halo-color":"#FFFFFF","text-halo-width":2},layout:{"text-field":"{\u30b9\u30dd\u30c3\u30c8\u540d}","text-font":["Noto Sans Regular"],"text-variable-anchor":["top","bottom","left","right"],"text-radial-offset":.5,"text-justify":"auto","text-size":12,"text-anchor":"top","text-max-width":12,"text-allow-overlap":!1}}),e.on("mouseenter","shop-points",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","shop-points",(function(){e.getCanvas().style.cursor=""})),e.on("mouseenter","shop-symbol",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","shop-symbol",(function(){e.getCanvas().style.cursor=""})),e.on("click","shop-points",(function(e){e.features[0].properties.cluster||j(e.features[0].properties)})),e.on("click","shop-symbol",(function(e){e.features[0].properties.cluster||j(e.features[0].properties)})),x(e)}}))}(r,e.data)}),[r,e.data]),c.a.useEffect((function(){var e,t=C();b&&t.set("map",b),(e=t).toString()&&(window.location.hash="#/?".concat(e.toString().replace(/%2F/g,"/")))}),[b]),c.a.useEffect((function(){if(t.current&&!r){var n=window.geolonia,a=f(e.data),c=p()(a),i=new n.Map({container:t.current,style:"geolonia/gsi",bounds:c,fitBoundsOptions:{padding:50}}),o=C();if(o&&o.get("map")){var l=(o.get("map")||"").split("/"),d=l[0],j=l[1],u=l[2];i.flyTo({center:[u,j],zoom:d})}else c&&i.fitBounds(c,{padding:50});var h=function(){F(i),s(i),i.on("moveend",(function(){var e=i.getCenter(),t=i.getZoom(),n=Math.round(100*t)/100,a=Math.ceil((n*Math.LN2+Math.log(512/360/.5))/Math.LN10),c=Math.pow(10,a),r=Math.round(e.lng*c)/c,s=Math.round(e.lat*c)/c,o=Math.ceil(n);m("".concat(o,"/").concat(s,"/").concat(r))}))},b=function(){i.resize()};return i.on("load",h),window.addEventListener("orientationchange",b),function(){window.removeEventListener("orientationchange",b),i.off("load",h)}}}),[t,r,e.data]);return Object(O.jsxs)("div",{style:k,children:[Object(O.jsx)("div",{ref:t,style:k,"data-geolocate-control":"on","data-marker":"off","data-gesture-handling":"off"}),d?Object(O.jsx)(y,{shop:d,close:function(){j(void 0)}}):Object(O.jsx)(O.Fragment,{})]})},_=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(S,{data:e.data})})},E=n(16),M=n(63),z=(n(88),function(e){var t=function(){e.popupHandler(e.data)},n=N(e.data.distance),a=e.data["\u30ab\u30c6\u30b4\u30ea"],c=e.data["\u753b\u50cf"],r=!!e.queryCategory;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"shop-link",children:[Object(O.jsx)("h2",{className:"shop-title",style:{wordBreak:"break-all"},onClick:t,children:e.data["\u30b9\u30dd\u30c3\u30c8\u540d"]}),Object(O.jsxs)("div",{className:"tag-box",children:[!r&&Object(O.jsx)("span",{className:"nowrap",children:Object(O.jsx)(i.b,{to:"/list?category=".concat(a),children:Object(O.jsx)("span",{className:"category",children:a})})}),Object(O.jsx)("span",{className:"nowrap",children:n&&Object(O.jsxs)("span",{className:"distance",children:["\u73fe\u5728\u4f4d\u7f6e\u304b\u3089 ",n]})})]}),Object(O.jsx)("div",{style:{margin:"10px 10px 10px 0"},children:c&&Object(O.jsx)("img",{src:c,alt:e.data["\u30b9\u30dd\u30c3\u30c8\u540d"],onClick:t})}),Object(O.jsx)("div",{className:"right",onClick:t,children:Object(O.jsx)(M.a,{size:"40px",color:"#CCCCCC"})})]})})}),L=(n(89),n(64)),P=n(44),T=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){window.navigator.geolocation&&window.navigator.geolocation.getCurrentPosition||e(null),window.navigator.geolocation.getCurrentPosition((function(t){var n=t.coords.latitude,a=t.coords.longitude;e([a,n])}),(function(t){e(null)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}));case 2:if(!(n=e.sent)){e.next=10;break}return a=P.point(n),(c=t.map((function(e){var t=parseFloat(e["\u7d4c\u5ea6"]),n=parseFloat(e["\u7def\u5ea6"]);if(Number.isNaN(t)||Number.isNaN(n))return e;var c=P.point([t,n]),r=P.distance(a,c,{units:"meters"});return Object(o.a)(Object(o.a)({},e),{},{distance:r})}))).sort((function(e,t){return"number"!==typeof e.distance||Number.isNaN(e.distance)?1:"number"!==typeof t.distance||Number.isNaN(t.distance)?-1:e.distance-t.distance})),e.abrupt("return",c);case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e){var t=c.a.useState(),n=Object(l.a)(t,2),a=n[0],r=n[1],s=c.a.useState(e.data),o=Object(l.a)(s,2),d=o[0],j=o[1],u=c.a.useState([]),h=Object(l.a)(u,2),b=h[0],p=h[1],f=c.a.useState(10),x=Object(l.a)(f,2),m=x[0],g=x[1],v=c.a.useState(!0),w=Object(l.a)(v,2),N=w[0],k=w[1],F=Object(i.c)(),C=Object(l.a)(F,1)[0].get("category");c.a.useEffect((function(){var t=e.data;C&&(t=e.data.filter((function(e){return e["\u30ab\u30c6\u30b4\u30ea"]===C})));var n=!0;if(n){T(t).then((function(e){n&&(p(e.slice(0,m)),j(e))}))}return function(){n=!1}}),[e.data,C,m]);var S=function(e){e&&r(e)},_=Object(O.jsx)("div",{className:"loader",style:{width:"100%",height:"200px",textAlign:"center",position:"relative",top:"100px"},children:"\u5834\u6240\u4e00\u89a7\u3092\u8aad\u307f\u8fbc\u307f\u4e2d\u3067\u3059..."},0);return Object(O.jsxs)("div",{id:"shop-list",className:"shop-list",children:[C&&Object(O.jsx)("div",{className:"shop-list-category",children:"\u30ab\u30c6\u30b4\u30ea\uff1a\u300c".concat(C,"\u300d")}),Object(O.jsx)(L.a,{dataLength:b.length,next:function(){b.length>=d.length?k(!1):(p([].concat(Object(E.a)(b),Object(E.a)(d.slice(m,m+10)))),g(m+10))},hasMore:N,loader:_,scrollableTarget:"shop-list",children:b.map((function(e,t){return Object(O.jsx)("div",{className:"shop",children:Object(O.jsx)(z,{data:e,popupHandler:S,queryCategory:C})},t)}))}),a?Object(O.jsx)(y,{shop:a,close:function(){r(void 0)}}):Object(O.jsx)(O.Fragment,{})]})},W=(n(91),n(19)),A=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://example.com/mai_map/last_update.json?timestamp="+(new Date).getTime(),{cache:"no-cache"});case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Network response was not ok");case 6:return e.next=8,t.json();case 8:n=e.sent,c(n.last_update),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Fetching last update failed:",e.t0),c("\u60c5\u5831\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f");case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(O.jsx)("div",{className:"about-us",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"branding",children:Object(O.jsx)("div",{className:"logo",children:"maimai\u8a2d\u7f6e\u5e97\u8217\u30de\u30c3\u30d7"})}),Object(O.jsx)("h2",{children:"\u3053\u306e\u30de\u30c3\u30d7\u306b\u3064\u3044\u3066"}),Object(O.jsxs)("p",{children:["\u4f5c\u6210\u8005:",Object(O.jsx)("a",{href:"https://twitter.com/asaburodesu",target:"_blank",rel:"noreferrer",children:"asaburodesu"})]}),Object(O.jsxs)("p",{children:["\u6700\u7d42\u66f4\u65b0: ",n]}),Object(O.jsx)("p",{children:"\u5f53\u30b5\u30a4\u30c8\u3067\u306f\u53ef\u80fd\u306a\u9650\u308a\u60c5\u5831\u306e\u6b63\u78ba\u6027\u3092\u5fc3\u304c\u3051\u3066\u3044\u307e\u3059\u304c\u3001\u5b89\u5168\u6027\u3084\u78ba\u5b9f\u306a\u60c5\u5831\u63d0\u4f9b\u3092\u4fdd\u8a3c\u3059\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u63b2\u8f09\u5185\u5bb9\u3067\u751f\u3058\u305f\u640d\u5bb3\uff08\u9593\u63a5\u7684\u3092\u542b\u3080\uff09\u306b\u5bfe\u3059\u308b\u4e00\u5207\u306e\u8cac\u4efb\u3092\u8ca0\u3044\u307e\u305b\u3093\u3002"}),Object(O.jsx)("h2",{children:"\u4ed6\u6a5f\u7a2e\u30de\u30c3\u30d7"}),Object(O.jsx)("p",{children:Object(O.jsx)("a",{href:"https://asaburodesu.github.io/chu_map/",target:"_blank",rel:"noreferrer",children:"CHUNITHM\u8a2d\u7f6e\u5e97\u8217\u30de\u30c3\u30d7"})}),Object(O.jsx)("p",{children:Object(O.jsx)("a",{href:"https://asaburodesu.github.io/geki_map/",target:"_blank",rel:"noreferrer",children:"\u30aa\u30f3\u30b2\u30ad\u8a2d\u7f6e\u5e97\u8217\u30de\u30c3\u30d7"})}),W.form_url?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u3064\u3044\u3066"}),Object(O.jsx)("p",{children:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3059\u308b\u306b\u306f\u4e0b\u306e\u300c + \u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u30d5\u30a9\u30fc\u30e0\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),Object(O.jsx)("div",{className:"goto-form",children:Object(O.jsx)("button",{onClick:function(){W.form_url&&(window.location.href=W.form_url)},children:Object(O.jsx)(m.f,{color:"#FFFFFF"})})})]}):null]})})},$=n(69),B=(n(92),function(e){var t=Object(h.f)(),n=c.a.useState([]),a=Object(l.a)(n,2),r=a[0],s=a[1];return c.a.useEffect((function(){for(var t=[],n=0;n<e.data.length;n++){var a=e.data[n];-1===t.indexOf(a["\u30ab\u30c6\u30b4\u30ea"])&&t.push(a["\u30ab\u30c6\u30b4\u30ea"])}s(t)}),[e.data]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"head"}),Object(O.jsx)("div",{className:"category",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"category-item",children:[Object(O.jsx)("label",{htmlFor:"category-select",children:"\u90fd\u9053\u5e9c\u770c\u304b\u3089\u9078\u3076"}),Object(O.jsx)($.a,{onChange:function(e){e&&t("/list?category=".concat(e.value))},options:r.map((function(e){return{value:e,label:e}}))})]})})})]})}),H=n(155),q=n(157),D=(n(108),function(e){var t=e.data,n=Object(a.useState)([]),c=Object(l.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(),o=Object(l.a)(i,2),d=o[0],j=o[1];return Object(a.useEffect)((function(){for(var e=[],n=function(n){var a=t[n];a["\u753b\u50cf"]&&e.push(Object(O.jsx)(H.a,{className:"mui-image-list-item",children:Object(O.jsx)("img",{src:a["\u753b\u50cf"],alt:a["\u30b9\u30dd\u30c3\u30c8\u540d"],loading:"lazy",onClick:function(){return function(e){e&&j(e)}(a)},onError:function(e){e.target.parentNode.remove()}})},n))},a=0;a<t.length;a++)n(a);s(e)}),[t]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"head"}),Object(O.jsx)("div",{className:"images",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(q.a,{id:"mui-image-list",sx:{width:"100%",height:"100%"},cols:2,rowHeight:164,children:r}),d?Object(O.jsx)(y,{shop:d,close:function(){j(void 0)}}):Object(O.jsx)(O.Fragment,{})]})})]})}),U=(n(111),function(){return Object(O.jsx)("div",{className:"tabbar",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsxs)(i.b,{to:"/",children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(m.c,{})}),Object(O.jsx)("div",{className:"text",children:"\u30db\u30fc\u30e0"})]})}),Object(O.jsx)("li",{children:Object(O.jsxs)(i.b,{to:"/list",children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(m.e,{})}),Object(O.jsx)("div",{className:"text",children:"\u4e00\u89a7"})]})}),Object(O.jsx)("li",{children:Object(O.jsxs)(i.b,{to:"/category",children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(m.g,{})}),Object(O.jsx)("div",{className:"text",children:"\u90fd\u9053\u5e9c\u770c"})]})}),Object(O.jsx)("li",{children:Object(O.jsxs)(i.b,{to:"/images",children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(m.a,{})}),Object(O.jsx)("div",{className:"text",children:"\u5199\u771f\u304b\u3089\u63a2\u3059"})]})}),Object(O.jsx)("li",{children:Object(O.jsxs)(i.b,{to:"/about",children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(w.a,{})}),Object(O.jsx)("div",{className:"text",children:"\u30de\u30c3\u30d7\u306b\u3064\u3044\u3066"})]})})]})})}),I=function(e){return e.replace(/[\uff01-\uff5e]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-65248)})).replace(/\u3000/g," ")},J=function(e){var t=e[0];return e.slice(1).map((function(e){return t.reduce((function(n,a){var c=e[t.indexOf(a)];return n[a]=I(c||""),n}),{})}))},Z=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.sort((function(e,t){return Date.parse(t["\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"])-Date.parse(e["\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"])})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=c.a.useState([]),t=Object(l.a)(e,2),n=t[0],a=t[1];return c.a.useEffect((function(){fetch("".concat(".","/data.json?timestamp=").concat((new Date).getTime())).then((function(e){return e.ok?e.text():Promise.reject(e.status)})).then((function(e){var t=JSON.parse(e);if("values"in t===!1)return console.log("No Data Found at Spreadsheet"),void a([]);for(var n=J(t.values),c=[],r=0;r<n.length;r++){var s=n[r];if(s["\u7def\u5ea6"]&&s["\u7d4c\u5ea6"]&&s["\u30b9\u30dd\u30c3\u30c8\u540d"]&&(s["\u7def\u5ea6"].match(/^-?[0-9]+(\.[0-9]+)?$/)&&s["\u7d4c\u5ea6"].match(/^-?[0-9]+(\.[0-9]+)?$/))){var i=Object(o.a)(Object(o.a)({},s),{},{index:r});c.push(i)}}Z(c).then((function(e){a(e)}))}))}),[]),Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)("div",{className:"app-body",children:Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{path:"/",element:Object(O.jsx)(_,{data:n})}),Object(O.jsx)(h.a,{path:"/list",element:Object(O.jsx)(R,{data:n})}),Object(O.jsx)(h.a,{path:"/category",element:Object(O.jsx)(B,{data:n})}),Object(O.jsx)(h.a,{path:"/images",element:Object(O.jsx)(D,{data:n})}),Object(O.jsx)(h.a,{path:"/about",element:Object(O.jsx)(A,{})})]})}),Object(O.jsx)("div",{className:"app-footer",children:Object(O.jsx)(U,{})})]})},K=(n(112),n(67));var Q=function(e){var t=e.url,n=Object(K.a)().Canvas;return Object(O.jsx)(n,{text:t,options:{type:"image/png",margin:0,width:128}})},V=n(149),X=n(151),Y=n(153),ee=n(150),te=n(152),ne=n(154),ae=(n(135),function(){var e=window.location.href.replace(/\?.+$/,"").replace(/#.+$/,"");return Object(O.jsx)("div",{className:"share",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"/",children:Object(O.jsx)(V.a,{url:e,hashtags:["".concat(W.title)],title:"".concat(W.title),children:Object(O.jsx)(ee.a,{size:32,round:!0})})})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"/",children:Object(O.jsx)(X.a,{url:e,hashtag:"#".concat(W.title),children:Object(O.jsx)(te.a,{size:32,round:!0})})})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"/",children:Object(O.jsx)(Y.a,{url:e,title:"".concat(W.title),children:Object(O.jsx)(ne.a,{size:32,round:!0})})})})]})})}),ce=function(){var e=W.logo_image_url||"".concat(".","/logo.svg");return Object(O.jsxs)("div",{className:"about",children:[Object(O.jsx)("div",{className:"branding",children:Object(O.jsx)("img",{className:"image",src:e,alt:""})}),Object(O.jsx)("div",{className:"description",children:W.description}),Object(O.jsx)("div",{className:"qrcode",children:Object(O.jsx)(Q,{url:window.location.href})}),Object(O.jsx)(ae,{})]})};n(136);var re=function(){return Object(O.jsx)("div",{className:"outer-container",children:Object(O.jsxs)("div",{className:"inner-container",children:[Object(O.jsx)(ce,{}),Object(O.jsx)(G,{})]})})},se=(n(137),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(re,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ie(t,e)}))}}()},19:function(e){e.exports=JSON.parse('{"title":"maimai\u8a2d\u7f6e\u5e97\u8217\u30de\u30c3\u30d7","description":"maimai\u8a2d\u7f6e\u5e97\u8217\u30de\u30c3\u30d7\u3067\u3059","form_url":"","logo_image_url":"https://geoloniamaps.github.io/pwamap/icon-pwamap.svg","background_image_url":"https://geoloniamaps.github.io/pwamap/geolonia_bgimage_1920_1080.png","primary_color":"#d2691e","orderby":"distance"}')},78:function(e,t,n){},85:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){}},[[138,1,2]]]);
//# sourceMappingURL=main.4a7a7d2c.chunk.js.map