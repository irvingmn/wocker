/*! formstone v1.2.1 [core.js] 2016-08-02 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){m.Plugins[a].initialized||(m.Plugins[a].methods._setup.call(document),m.Plugins[a].initialized=!0)}function c(a,b,c,d){var e,f={raw:{}};d=d||{};for(e in d)d.hasOwnProperty(e)&&("classes"===a?(f.raw[d[e]]=b+"-"+d[e],f[d[e]]="."+b+"-"+d[e]):(f.raw[e]=d[e],f[e]=d[e]+"."+b));for(e in c)c.hasOwnProperty(e)&&("classes"===a?(f.raw[e]=c[e].replace(/{ns}/g,b),f[e]=c[e].replace(/{ns}/g,"."+b)):(f.raw[e]=c[e].replace(/.{ns}/g,""),f[e]=c[e].replace(/{ns}/g,b)));return f}function d(){var a,b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"},c=["transition","-webkit-transition"],d={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},e="transitionend",f="",g="",h=document.createElement("div");for(a in b)if(b.hasOwnProperty(a)&&a in h.style){e=b[a],m.support.transition=!0;break}p.transitionEnd=e+".{ns}";for(a in c)if(c.hasOwnProperty(a)&&c[a]in h.style){f=c[a];break}m.transition=f;for(a in d)if(d.hasOwnProperty(a)&&d[a]in h.style){m.support.transform=!0,g=d[a];break}m.transform=g}function e(){m.windowWidth=m.$window.width(),m.windowHeight=m.$window.height(),q=l.startTimer(q,r,f)}function f(){for(var a in m.ResizeHandlers)m.ResizeHandlers.hasOwnProperty(a)&&m.ResizeHandlers[a].callback.call(window,m.windowWidth,m.windowHeight)}function g(){if(m.support.raf){m.window.requestAnimationFrame(g);for(var a in m.RAFHandlers)m.RAFHandlers.hasOwnProperty(a)&&m.RAFHandlers[a].callback.call(window)}}function h(a,b){return parseInt(a.priority)-parseInt(b.priority)}var i="undefined"!=typeof window?window:this,j=i.document,k=function(){this.Version="1.2.1",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.RAFHandlers=[],this.window=i,this.$window=a(i),this.document=j,this.$document=a(j),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.fallbackWidth=1024,this.fallbackHeight=768,this.userAgent=window.navigator.userAgent||window.navigator.vendor||window.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isIEMobile=/IEMobile/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(window.File&&window.FileList&&window.FileReader),history:!!(window.history&&window.history.pushState&&window.history.replaceState),matchMedia:!(!window.matchMedia&&!window.msMatchMedia),pointer:!!window.PointerEvent,raf:!(!window.requestAnimationFrame||!window.cancelAnimationFrame),touch:!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),transition:!1,transform:!1}},l={killEvent:function(a,b){try{a.preventDefault(),a.stopPropagation(),b&&a.stopImmediatePropagation()}catch(c){}},startTimer:function(a,b,c,d){return l.clearTimer(a),d?setInterval(c,b):setTimeout(c,b)},clearTimer:function(a,b){a&&(b?clearInterval(a):clearTimeout(a),a=null)},sortAsc:function(a,b){return parseInt(a,10)-parseInt(b,10)},sortDesc:function(a,b){return parseInt(b,10)-parseInt(a,10)},decodeEntities:function(a){var b=m.document.createElement("textarea");return b.innerHTML=a,b.value},parseQueryString:function(a){for(var b={},c=a.slice(a.indexOf("?")+1).split("&"),d=0;d<c.length;d++){var e=c[d].split("=");b[e[0]]=e[1]}return b}},m=new k,n=a.Deferred(),o={base:"{ns}",element:"{ns}-element"},p={namespace:".{ns}",beforeUnload:"beforeunload.{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",panStart:"panstart.{ns}",pan:"pan.{ns}",panEnd:"panend.{ns}",resize:"resize.{ns}",scaleStart:"scalestart.{ns}",scaleEnd:"scaleend.{ns}",scale:"scale.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",swipe:"swipe.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"};k.prototype.NoConflict=function(){m.DontConflict=!0;for(var b in m.Plugins)m.Plugins.hasOwnProperty(b)&&(a[b]=m.Conflicts[b],a.fn[b]=m.Conflicts.fn[b])},k.prototype.Plugin=function(d,e){return m.Plugins[d]=function(b,d){function e(c){var e,f,h,i="object"===a.type(c),j=this,k=a();for(c=a.extend(!0,{},d.defaults||{},i?c:{}),f=0,h=j.length;h>f;f++)if(e=j.eq(f),!g(e)){var l="__"+d.guid++,m=d.classes.raw.base+l,n=e.data(b+"-options"),o=a.extend(!0,{$el:e,guid:l,rawGuid:m,dotGuid:"."+m},c,"object"===a.type(n)?n:{});e.addClass(d.classes.raw.element).data(r,o),d.methods._construct.apply(e,[o].concat(Array.prototype.slice.call(arguments,i?1:0))),k=k.add(e)}for(f=0,h=k.length;h>f;f++)e=k.eq(f),d.methods._postConstruct.apply(e,[g(e)]);return j}function f(a){d.functions.iterate.apply(this,[d.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(d.classes.raw.element).removeData(r)}function g(a){return a.data(r)}function i(b){if(this instanceof a){var c=d.methods[b];return"object"!==a.type(b)&&b?c&&0!==b.indexOf("_")?d.functions.iterate.apply(this,[c].concat(Array.prototype.slice.call(arguments,1))):this:e.apply(this,arguments)}}function j(b){var c=d.utilities[b]||d.utilities._initialize||!1;return c?c.apply(window,Array.prototype.slice.call(arguments,"object"===a.type(b)?0:1)):void 0}function k(b){d.defaults=a.extend(!0,d.defaults,b||{})}function n(b){for(var c=this,d=0,e=c.length;e>d;d++){var f=c.eq(d),h=g(f)||{};"undefined"!==a.type(h.$el)&&b.apply(f,[h].concat(Array.prototype.slice.call(arguments,1)))}return c}var q="fs-"+b,r="fs"+b.replace(/(^|\s)([a-z])/g,function(a,b,c){return b+c.toUpperCase()});return d.initialized=!1,d.priority=d.priority||10,d.classes=c("classes",q,o,d.classes),d.events=c("events",b,p,d.events),d.functions=a.extend({getData:g,iterate:n},l,d.functions),d.methods=a.extend(!0,{_setup:a.noop,_construct:a.noop,_postConstruct:a.noop,_destruct:a.noop,_resize:!1,destroy:f},d.methods),d.utilities=a.extend(!0,{_initialize:!1,_delegate:!1,defaults:k},d.utilities),d.widget&&(m.Conflicts.fn[b]=a.fn[b],a.fn[r]=i,m.DontConflict||(a.fn[b]=a.fn[r])),m.Conflicts[b]=a[b],a[r]=d.utilities._delegate||j,m.DontConflict||(a[b]=a[r]),d.namespace=b,d.namespaceClean=r,d.guid=0,d.methods._resize&&(m.ResizeHandlers.push({namespace:b,priority:d.priority,callback:d.methods._resize}),m.ResizeHandlers.sort(h)),d.methods._raf&&(m.RAFHandlers.push({namespace:b,priority:d.priority,callback:d.methods._raf}),m.RAFHandlers.sort(h)),d}(d,e),n.then(function(){b(d)}),m.Plugins[d]};var q=null,r=20;return m.$window.on("resize.fs",e),e(),g(),a(function(){m.$body=a("body"),n.resolve(),m.support.nativeMatchMedia=m.support.matchMedia&&!a("html").hasClass("no-matchmedia")}),p.clickTouchStart=p.click+" "+p.touchStart,d(),window.Formstone=m,m});

/*! formstone v1.2.1 [mediaquery.js] 2016-08-02 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(b){b=b||{};for(var c in t)t.hasOwnProperty(c)&&(l[c]=b[c]?a.merge(b[c],l[c]):l[c]);l=a.extend(l,b),l.minWidth.sort(p.sortDesc),l.maxWidth.sort(p.sortAsc),l.minHeight.sort(p.sortDesc),l.maxHeight.sort(p.sortAsc);for(var d in t)if(t.hasOwnProperty(d)){s[d]={};for(var e in l[d])if(l[d].hasOwnProperty(e)){var f=window.matchMedia("("+t[d]+": "+(l[d][e]===1/0?1e5:l[d][e])+l.unit+")");f.addListener(g),s[d][l[d][e]]=f}}g()}function d(a,b,c){var d=o.matchMedia(b),e=i(d.media);r[e]||(r[e]={mq:d,active:!0,enter:{},leave:{}},r[e].mq.addListener(h));for(var f in c)c.hasOwnProperty(f)&&r[e].hasOwnProperty(f)&&(r[e][f][a]=c[f]);var g=r[e],j=d.matches;j&&g[m.enter].hasOwnProperty(a)?(g[m.enter][a].apply(d),g.active=!0):!j&&g[m.leave].hasOwnProperty(a)&&(g[m.leave][a].apply(d),g.active=!1)}function e(a,b){if(a)if(b){var c=i(b);r[c]&&(r[c].enter[a]&&delete r[c].enter[a],r[c].leave[a]&&delete r[c].leave[a])}else for(var d in r)r.hasOwnProperty(d)&&(r[d].enter[a]&&delete r[d].enter[a],r[d].leave[a]&&delete r[d].leave[a])}function f(){q={unit:l.unit};for(var a in t)if(t.hasOwnProperty(a))for(var c in s[a])if(s[a].hasOwnProperty(c)){var d="Infinity"===c?1/0:parseInt(c,10),e=t[a].indexOf("width")>-1?b.fallbackWidth:b.fallbackHeight,f=a.indexOf("max")>-1;b.support.nativeMatchMedia?s[a][c].matches&&(f?(!q[a]||d<q[a])&&(q[a]=d):(!q[a]||d>q[a])&&(q[a]=d)):f?!q[a]&&d>e&&(q[a]=d):(!q[a]&&0!==q[a]||d>q[a]&&e>d)&&(q[a]=d)}}function g(){f(),n.trigger(m.mqChange,[q])}function h(a){var b=i(a.media),c=r[b],d=a.matches,e=d?m.enter:m.leave;if(c&&(c.active||!c.active&&d)){for(var f in c[e])c[e].hasOwnProperty(f)&&c[e][f].apply(c.mq);c.active=!0}}function i(a){return a.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").replace(/^\s+|\s+$/g,"")}function j(){return q}var k=b.Plugin("mediaquery",{utilities:{_initialize:c,state:j,bind:d,unbind:e},events:{mqChange:"mqchange"}}),l={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},m=a.extend(k.events,{enter:"enter",leave:"leave"}),n=b.$window,o=n[0],p=k.functions,q=null,r=[],s={},t={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}});

/*! formstone v1.2.1 [swap.js] 2016-08-02 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(b){b.enabled=!1,b.active=!1,b.classes=a.extend(!0,{},m,b.classes),b.target=this.data(l+"-target"),b.$target=a(b.target).addClass(b.classes.raw.target),b.mq="(max-width:"+(b.maxWidth===1/0?"100000px":b.maxWidth)+")";var c=this.data(l+"-linked");b.linked=c?"[data-"+l+'-linked="'+c+'"]':!1;var d=this.data(l+"-group");b.group=d?"[data-"+l+'-group="'+d+'"]':!1,b.$swaps=a().add(this).add(b.$target),this.on(n.click+b.dotGuid,b,j)}function d(b){b.collapse||!b.group||a(b.group).filter("[data-"+l+"-active]").length||a(b.group).eq(0).attr("data-"+l+"-active","true"),b.onEnable=this.data(l+"-active")||!1,a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){h.call(b.$el,b,!0)},leave:function(){i.call(b.$el,b,!0)}})}function e(b){a.fsMediaquery("unbind",b.rawGuid),b.$swaps.removeClass([b.classes.raw.enabled,b.classes.raw.active].join(" ")).off(n.namespace)}function f(b,c){if(b.enabled&&!b.active){b.group&&!c&&a(b.group).not(b.$el).not(b.linked)[k.namespaceClean]("deactivate",!0);var d=b.group?a(b.group).index(b.$el):null;b.$swaps.addClass(b.classes.raw.active),c||b.linked&&a(b.linked).not(b.$el)[k.namespaceClean]("activate",!0),this.trigger(n.activate,[d]),b.active=!0}}function g(b,c){b.enabled&&b.active&&(b.$swaps.removeClass(b.classes.raw.active),c||b.linked&&a(b.linked).not(b.$el)[k.namespaceClean]("deactivate",!0),this.trigger(n.deactivate),b.active=!1)}function h(b,c){b.enabled||(b.enabled=!0,b.$swaps.addClass(b.classes.raw.enabled),c||a(b.linked).not(b.$el)[k.namespaceClean]("enable"),this.trigger(n.enable),b.onEnable?(b.active=!1,f.call(this,b)):(b.active=!0,g.call(this,b)))}function i(b,c){b.enabled&&(b.enabled=!1,b.$swaps.removeClass([b.classes.raw.enabled,b.classes.raw.active].join(" ")),c||a(b.linked).not(b.$el)[k.namespaceClean]("disable"),this.trigger(n.disable))}function j(a){o.killEvent(a);var b=a.data;b.active&&b.collapse?g.call(b.$el,b):f.call(b.$el,b)}var k=b.Plugin("swap",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:c,_postConstruct:d,_destruct:e,activate:f,deactivate:g,enable:h,disable:i}}),l=k.namespace,m=k.classes,n=k.events,o=k.functions});

/*! formstone v1.2.1 [tabs.js] 2016-08-02 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./swap"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(c){c.mq="(max-width:"+(c.mobileMaxWidth===1/0?"100000px":c.mobileMaxWidth)+")",c.content=this.attr("href"),c.group=this.data(q+"-group"),c.elementClasses=[s.tab,c.rawGuid,c.theme,c.customClass],c.mobileTabClasses=[s.tab,s.tab_mobile,c.rawGuid,c.theme,c.customClass],c.contentClasses=[s.content,c.rawGuid,c.theme,c.customClass],c.$mobileTab=a('<button type="button" class="'+c.mobileTabClasses.join(" ")+'" aria-hidden="true">'+this.text()+"</button>"),c.$content=a(c.content).addClass(c.contentClasses.join(" ")),c.$content.before(c.$mobileTab).attr("role","tabpanel"),this.attr("role","tab"),c.id=this.attr("id"),c.id?c.ariaId=c.id:(c.ariaId=c.rawGuid,this.attr("id",c.ariaId)),c.contentId=c.$content.attr("id"),c.contentGuid=c.rawGuid+"_content",c.contentId?c.ariacontentId=c.contentId:(c.ariaContentId=c.contentGuid,c.$content.attr("id",c.ariaContentId));var d=b.window.location.hash,e=!1,f=!1;d.length&&(e=this.filter("[href*='"+d+"']").length>0,f=c.group&&a("[data-"+q+'-group="'+c.group+'"]').filter("[href*='"+d+"']").length>0),e?this.attr("data-swap-active","true"):f?this.removeAttr("data-swap-active").removeData("data-swap-active"):"true"===this.attr("data-tabs-active")&&this.attr("data-swap-active","true"),this.attr("data-swap-target",c.content).attr("data-swap-group",c.group).addClass(c.elementClasses.join(" ")).on("activate.swap"+c.dotGuid,c,i).on("deactivate.swap"+c.dotGuid,c,j).on("enable.swap"+c.dotGuid,c,k).on("disable.swap"+c.dotGuid,c,l)}function d(b){this.fsSwap({maxWidth:b.maxWidth,classes:{target:b.dotGuid,enabled:r.enabled,active:r.active,raw:{target:b.rawGuid,enabled:s.enabled,active:s.active}},collapse:!1}),b.$mobileTab.on("click"+b.dotGuid,b,m),a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){n.call(b.$el,b)},leave:function(){o.call(b.$el,b)}})}function e(b){a.fsMediaquery("unbind",b.rawGuid),b.$mobileTab.off(t.namespace).remove(),b.elementClasses.push(s.mobile),b.contentClasses.push(s.mobile),b.$content.removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass(b.contentClasses.join(" ")),b.$content.attr("id")===b.contentGuid&&b.$content.removeAttr("id"),this.removeAttr("aria-controls").removeAttr("aria-selected").removeAttr("data-swap-active").removeData("data-swap-active").removeAttr("data-swap-target").removeData("data-swap-target").removeAttr("data-swap-group").removeData("data-swap-group").removeAttr("role").removeClass(b.elementClasses.join(" ")).off(t.namespace).fsSwap("destroy"),this.attr("id")===b.rawGuid&&this.removeAttr("id")}function f(a){this.fsSwap("activate")}function g(a){this.fsSwap("enable")}function h(a){this.fsSwap("disable")}function i(a){if(!a.originalEvent){var b=a.data,c=0;b.$el.attr("aria-selected",!0).trigger(t.update,[c]),b.$mobileTab.addClass(s.active),b.$content.attr("aria-hidden",!1).addClass(s.active)}}function j(a){if(!a.originalEvent){var b=a.data;b.$el.attr("aria-selected",!1),b.$mobileTab.removeClass(s.active),b.$content.attr("aria-hidden",!0).removeClass(s.active)}}function k(a){var b=a.data;b.$el.attr("aria-controls",b.ariaContentId),b.$mobileTab.addClass(s.enabled),b.$content.attr("aria-labelledby",b.ariaId).addClass(s.enabled)}function l(a){var b=a.data;b.$el.removeAttr("aria-controls").removeAttr("aria-selected"),b.$mobileTab.removeClass(s.enabled),b.$content.removeAttr("aria-labelledby").removeAttr("aria-hidden").removeClass(s.enabled)}function m(a){a.data.$el.fsSwap("activate")}function n(a){a.$el.addClass(s.mobile),a.$mobileTab.addClass(s.mobile),a.$content.addClass(s.mobile)}function o(a){a.$el.removeClass(s.mobile),a.$mobileTab.removeClass(s.mobile),a.$content.removeClass(s.mobile)}var p=b.Plugin("tabs",{widget:!0,defaults:{customClass:"",maxWidth:1/0,mobileMaxWidth:"740px",theme:"fs-light"},classes:["tab","tab_mobile","mobile","content","enabled","active"],events:{update:"update"},methods:{_construct:c,_postConstruct:d,_destruct:e,activate:f,enable:g,disable:h}}),q=p.namespace,r=p.classes,s=r.raw,t=p.events;p.functions});


!function($){"use strict";jQuery.fn.xtenderTabs=jQuery.fn.tabs,$(document).ready(function(){$(".xtender-tab").xtenderTabs(),$(".xtender-toggler").swap()}),$(document).on("widget-updated widget-added",function(e,n){$(".xtender-toggler",n).swap()}),$(function(){$(".confirm-dialog").click(function(e){e.preventDefault(),window.confirm("undefined"!=typeof curly_locale.confirm_dialog?curly_locale.confirm_dialog:"Are you sure?")&&(location.href=this.href)})})}(jQuery);

//@codekit-prepend "../../libs/formstone/js/core.js";
//@codekit-prepend "../../libs/formstone/js/mediaquery.js";
//@codekit-prepend "../../libs/formstone/js/swap.js";
//@codekit-prepend "../../libs/formstone/js/tabs.js";
//@codekit-prepend "../../../assets/admin/js/widgets-min.js";

