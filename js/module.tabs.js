export default function(e){const o=SEMICOLON.Core;o.loadJS({file:"js/plugins.tabs.js",id:"canvas-tabs-js"}),o.isFuncTrue(()=>jQuery().tabs).then(a=>!!a&&(o.initFunction({class:"has-plugin-tabs",event:"pluginTabsReady"}),(e=o.getSelector(e)).length<1||void e.each(function(){let n=jQuery(this),a=n.attr("data-action")||"click",e=n.attr("data-speed")||400,t=n.attr("data-active")||1,s=n.attr("data-hash")||"false";t-=1;var i=window.location.hash;0<jQuery(i).length&&0<n.find(i).length&&(t=jQuery(i).index()),n.tabs({event:a,active:Number(t),show:{effect:"fade",duration:Number(e)},activate:function(a,e){o.runContainerModules(jQuery(e.newPanel)[0]),"true"==s&&(e=jQuery(e.newTab).find("a").attr("href"),history.pushState?history.pushState(null,null,e):location.hash=e)}}),window.onhashchange=()=>{if(!location.hash)return!0;let a=jQuery('.tab-nav a[href="'+location.hash+'"]');var e;a.length&&(e=a.parents("li").index(),n.tabs("option",{active:e}))},CanvasTabsResponsive(n),CanvasTabsResponsiveResize(n),jQuery(window).on("cnvsResize",function(){CanvasTabsResponsiveResize(n)})})))}const CanvasTabsResponsive=a=>{if((a=a.filter(".tabs-responsive")).length<1)return!0;let e=jQuery("body");(e.hasClass("device-sm")||e.hasClass("device-xs"))&&a.each(function(){let a=jQuery(this),e=a.find(".tab-nav"),s=a.find(".tab-container");e.children("li").each(function(){let a=jQuery(this),e=a.children("a"),n=e.attr("href"),t=e.html();s.find(n).before('<div class="accordion-header d-none"><div class="accordion-icon"><i class="accordion-closed bi-check-circle"></i><i class="accordion-open bi-x-circle"></i></div><div class="accordion-title">'+t+"</div></div>")})})},CanvasTabsResponsiveResize=a=>{if((a=a.filter(".tabs-responsive")).length<1)return!0;let t=jQuery("body");a.each(function(){let a=jQuery(this),e=a.tabs("option","active")+1,n=a.attr("data-accordion-style");t.hasClass("device-sm")||t.hasClass("device-xs")?(a.find(".tab-nav").addClass("d-none"),a.find(".tab-container").addClass("accordion "+n).attr("data-active",e),a.find(".tab-content").addClass("accordion-content"),a.find(".accordion-header").removeClass("d-none"),SEMICOLON.Modules.accordion(a)):(t.hasClass("device-md")||t.hasClass("device-lg")||t.hasClass("device-xl"))&&(a.find(".tab-nav").removeClass("d-none"),a.find(".tab-container").removeClass("accordion "+n).attr("data-active",""),e=a.find(".acctitlec").next(".tab-content").index(),a.find(".tab-content").removeClass("accordion-content"),a.find(".accordion-header").addClass("d-none"),a.tabs("refresh"),0<e&&a.tabs("option","active",(e-1)/2))})};