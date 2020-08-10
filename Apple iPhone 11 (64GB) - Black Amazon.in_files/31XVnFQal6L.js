(function(f){var k=window.AmazonUIPageJS||window.P,l=k._namespace||k.attributeErrors,r=l?l("CustomerReviewsCommonAssets",""):k;r.guardFatal?r.guardFatal(f)(r,window):r.execute(function(){f(r,window)})})(function(f,k,l){function r(){}f.when("A","cr-log-utils","cr-streaming-utils").register("cr-ajax-model",function(b,d,a){function c(a){n[a]&&(n[a].abort(),delete n[a])}function e(m,g,p,q,t,u,f,l){g=g||{};g.params=g.params||{};var r;r=u?u:w=w++;u=r;t=t?t:g.error||function(){};q=q?q:0;p=p?p:2;l=l?l:"FATAL";
var y="FATAL"===l?0:1,v=g.finallyCallback||function(){};f||(f="reviewsAjax"+h++,k.uet&&k.uet("tc",f));g.params.scope=f;g.contentType="application/x-www-form-urlencoded;charset\x3dUTF-8";var x=g.success||function(){};g.success=function(a){delete n[u];"function"===typeof x&&x(a);"function"===typeof v&&v(a)};g.error=function(a,b,h){c(u);a=a||{};var n=(a.http||{}).status||"[]";q++;q<p?(b="AJAX Post to "+m+" from "+k.location.href+" failed, status code passed through parameter was: "+b+", status code extracted from XHR HTTP object was: "+
n+", attempt "+q+" of "+p+", error message was: \n "+h,d.logError(b,"WARN"),e(m,g,p,q,t,u,f,l)):(b="AJAX Post to "+m+" from "+k.location.href+" failed, status code passed through parameter was: "+b+", status code extracted from XHR HTTP object was: "+n+", exhausted "+p+" attempt(s), error message was: \n "+h,d.logError(b,l),d.logCount("AjaxFailureFatal",y),"function"===typeof t&&t(a),"function"===typeof v&&v(a))};"function"!==typeof g.chunk&&(g.chunk=function(c){"appendFadeIn"===c[0]?a.appendFadeIn(c):
"replace"===c[0]&&a.replace(c)});n[u]=b.post(m,g);return u}var h=0,w=1,n={};return{abort:c,post:e,postWithoutFatals:function(a,c,b,h,t,d,n){return e(a,c,b,h,t,d,n,"WARN")}}});"use strict";f.when("A","cr-jQuery","cr-log-utils","cr-number-utils").register("cr-A",function(b,d,a,c){b.getListFromState=function(a){var c=b.map(d("#cr-state-object, .cr-state-object"),function(a){return d(a).data("state")});return b.reduce(c,function(c,b){b!==l&&b[a]!==l&&c.push(b[a]);return c},[])};b.getValueFromState=function(c){var e=
b.getListFromState(c);1<e.length&&a.logError("More than one  value defined for key: "+c,"ERROR");return e[0]};var e={top:-100,left:-100};b.inView=function(a){a=a||d();if("function"===typeof a.offset){var c=(a.offset()||e).top-d(k).scrollTop();a=0<=c;c=c<d(k).height();return a&&c}return!1};b.onScreenAndVisible=function(a,b){a=a||d();b=c.isFiniteNumber(b)?b:0;if(a instanceof d||a.jquery){if(!a.is(":visible"))return!1;a=a[0].getBoundingClientRect();return a.top>=0-b&&a.left>=0-b&&a.bottom<=d(k).height()+
b&&a.right<=d(k).width()+b}return!1};b.compositeEventWrapper=function(c,e,d){var m=c;d&&(m=b.throttle(m,d,{trailing:!1}));return a.jsGuard(function(a){a&&(m(a),e&&a.$event&&a.$event.preventDefault())})};b.freeze=function(a){return"undefined"!==typeof Object&&"function"===typeof Object.freeze?Object.freeze(a):a};b.isFrozen=function(a){return"undefined"!==typeof Object&&"function"===typeof Object.isFrozen?Object.isFrozen(a):!1};return b});"use strict";f.when("jQuery").register("cr-jQuery",function(b){return b});
"use strict";f.declare("reviews-constants",{PUSH_STATE:!0,REPLACE_STATE:!1,RATING_SERVICE_CONTEXT_ID:"ReviewsConsumption",data:{REFTAG:"data-reftag",CSM_COUNTER:"data-csm-counter",getReviews:{STANDARD:"data-reviews-state-param",CHECKED:"data-reviews-param-checked",UNCHECKED:"data-reviews-param-unchecked"}},events:{CONTENT_CHANGED:"reviews:content-changed",RELOAD:"reviews:content-reload",RELOAD_COMPLETE:"reviews:content-reload-complete",AUTOSCROLL_COMPLETE:"reviews:autoscroll-complete",FILTER_FIRE_AGGREGATE:"reviews:filter-action:aggregate:trigger",
FILTER_FIRE_UPDATE:"reviews:filter-action:trigger",FILTER_AGGREGATE:"reviews:filter-action:aggregate",FILTER_PUSH:"reviews:filter-action:push-state",FILTER_REPLACE:"reviews:filter-action:replace-state",PAGINATION:"reviews:page-action",SEARCH_TEXTBOX:"reviews:search-textbox",SEARCH_BUTTON:"reviews:search-button",VOTE:"reviews:vote-action",TOGGLE_CLASS_CLICK:"reviews:toggle-class:click",AJAX_POST:"reviews:ajax-post",SCROLL_TO_ELEMENT_CLICK:"reviews:scroll-to-element:click",FILTER_APPLY:"reviews:filter-action:apply",
FILTER_CHANGE:"reviews:filter-action:change",FILTER_TAB_CLICKED:"reviews:filter-action:tab-clicked",FILTER_APPLY_BEGIN:"reviews:filter-action:apply-begin",FILTER_APPLY_SUCCESS:"reviews:filter-action:apply-success",FILTER_APPLY_ERROR:"reviews:filter-action:apply-error",FILTER_APPLY_DONE:"reviews:filter-action:apply-done",INPUT_COMMENT:"reviews:input-comment",SUBMIT_COMMENT:"reviews:submit-comment",OPEN_SUBMISSION_COMMENT:"reviews:open-comment-submission",SORT_COMMENTS:"reviews:sort-comments",MORE_COMMENTS:"reviews:more-comments",
EDIT_COMMENT:"reviews:edit-comment",CANCEL_EDIT_COMMENT:"reviews:cancel-edit-comment",DELETE_COMMENT:"reviews:delete-comment",SUBMIT_EDIT_COMMENT:"reviews:submit-edit-comment",MODIFY_EDIT_COMMENT:"reviews:modify-edit-comment",INPUT_PRODUCT_LINK:"reviews:input-product-link",SELECT_PRODUCT_LINK:"reviews:select-product-link",STAR_RATING_CLICK:"ryp:star-rating-click",STAR_RATING_CLEAR:"ryp:star-rating-clear-click"},filterOptions:{SORT_KEY:"sortBy",HELPFUL:"helpful",RECENT:"recent",LEGACY_HELPFUL:"byRankDescending",
LEGACY_RECENT:"bySubmissionDateDescending",MOBILE_HELPFUL:"sh",MOBILE_RECENT:"sd",STAR_KEY:"filterByStar",ALL_STARS:"all_stars",ONE_STAR:"one_star",TWO_STAR:"two_star",THREE_STAR:"three_star",FOUR_STAR:"four_star",FIVE_STAR:"five_star",POSTIVE:"positive",CRITICAL:"critical",FORMAT_KEY:"formatType",ALL_FORMATS:"all_formats",CURRENT_FORMAT:"current_format",AVP_KEY:"reviewerType",ALL_REVIEWS:"all_reviews",AVP_ONLY:"avp_only_reviews",MEDIA_KEY:"mediaType",ALL_CONTENTS:"all_contents",MEDIA_ONLY:"media_reviews_only",
LANGUAGE_KEY:"filterByLanguage",HEIGHT_KEY:"filterByHeight",WEIGHT_KEY:"filterByWeight"},keycodes:{ENTER:13,BACK_SPACE:8,SPACE:32},aui:{HIDDEN:"aok-hidden",NOWRAP:"aok-nowrap"}});"use strict";f.when("A","cr-string-utils","cr-log-utils").register("cr-popup",function(b,d,a){function c(c){var h={};c&&c.data&&(h=c.data);var f=d.defaultIfBlank(h.url,c.$target.find("a").andSelf().filter("a").attr("href")),n=d.defaultIfBlank(h.title,"CustomerReviews"),n=""+n,m="";b.each({width:"500",height:"500",resizable:"1",
scrollbars:"1",toolbar:"0",status:"1"},function(a,c){a=d.defaultIfBlank(h[c],a);m+=c+"\x3d"+a+","});var m=m.slice(0,-1),g=null;try{(g=k.open(f,n,m))?g.focus():a.logError("Unable to move focus to popup window with data: "+d.stringify(h),"ERROR"),c.$event.preventDefault()}catch(p){a.logError("Unable to open window with parameters: "+d.stringify(h),"FATAL",p)}return g}b.declarative("cr-popup",["click"],a.jsGuard(c));return{popup:c}});"use strict";f.when("A","cr-jQuery","reviews-constants","cr-ajax-model",
"cr-string-utils","cr-global-view").register("cr-generic-declarative-actions",function(b,d,a,c,e,h){function f(a){g(a)&&a.data.selector&&a.data.cssClass&&(d(a.data.selector).toggleClass(a.data.cssClass),a.$event.preventDefault(),b.trigger("a:pageUpdate"))}function n(a){g(a)&&a.data.scrollToSelector&&(h.scrollTo(a.data.scrollToSelector,0),a.$event.preventDefault())}function m(a){if(g(a)&&a.data.url&&a.data.params){a.$event.preventDefault();b.declarative.remove(a.$currentTarget,q.AJAX_POST);a=a.data;
var e=a.params,n=d(a.indicatorSelector)[0],h=p(d.fn.hide,a.hideOnSuccessSelector),f=p(d.fn.show,a.showOnFailureSelector);d(a.removeOnLoadSelector).remove();c.post(a.url,{params:e,indicator:n,success:h,error:f})}}function g(a){return a&&a.data&&a.$event&&"function"===typeof a.$event.preventDefault}function p(a,c){if(c&&"function"===typeof a)return function(){var b=d(c);0<b.length&&a.call(b)}}var q=a.events;b.declarative(q.TOGGLE_CLASS_CLICK,"click",f);b.declarative(q.SCROLL_TO_ELEMENT_CLICK,"click",
n);b.declarative(q.AJAX_POST,"click",m);return{toggleCssClass:f,scrollToElement:n,ajaxPost:m}});"use strict";f.register("cr-global-model",function(){return{generateUrl:function(b,d){b&&"/"!==b.charAt(b.length-1)&&(b+="/");b&&d&&(b=b+"ref\x3d"+d);return b}}});"use strict";f.when("A","a-expander","cr-jQuery","reviews-constants","cr-string-utils").register("cr-global-view",function(b,d,a,c,e){function h(a){var c="";if(a&&a.closest!==l){var b=a.closest("*["+g.REFTAG+"]");b&&(c=b.attr(g.REFTAG))}e.isBlank(c)&&
a&&a.closest!==l&&(a=a.closest("*[rel]"))&&(c=a.attr("rel"));return e.defaultIfBlank(c,"cm_cr_unknown")}function f(a){return a&&"function"===typeof a.is?a.is("*["+g.getReviews.CHECKED+"]")&&a.is("*["+g.getReviews.UNCHECKED+"]"):!1}function n(a){return a&&a.has!==l&&a.is!==l?0<a.find(":checked").length||a.is(":checked"):!1}function m(a,c){return a&&a.attr!==l&&c?e.parseJSON(a.attr(c))||{}:{}}var g=c.data;b.on("a:pageUpdate",function(){d!==l&&d.initializeExpanders()});return{getReviewsStateParamsFromElement:function(a){var c=
b.reduce(g.getReviews,function(a,c){return a+"*["+c+"],"},"").slice(0,-1),e;c&&a&&a.closest!==l&&(e=a.closest(c));return f(e)?n(e)?m(e,g.getReviews.CHECKED):m(e,g.getReviews.UNCHECKED):m(e,g.getReviews.STANDARD)},getReftag:function(c){var b;c&&c.$target&&(b=c.$target);c&&c.id&&(b=a("#"+c.id));c&&c.expander&&c.expander.$expander&&(b=c.expander.$expander);b=h(b);"cm_cr_unknown"===b&&c&&c.data&&c.data.reftag&&(b=c.data.reftag);return b},getReftagByDom:h,scrollTo:function(c,b){c=a(c).offset();b=b||0;
var e=a("#cr-state-object").data("state"),e=e!==l&&e.disableScroll;c&&c.top!==l&&!e&&(a("html,body").stop(),a("html,body").animate({scrollTop:c.top-b},{queue:!1,duration:500}))}}});"use strict";f.when("cr-A","cr-jQuery","cr-lazy-widget-model","cr-lazy-widget-view","cr-log-utils","cr-number-utils","cr-string-utils","cr-uri-utils","ready").register("cr-lazy-widget-controller",function(b,d,a,c,e,h,f,n){function m(d){var g=b.getValueFromState("lazyWidgetDomainWhitelist"),h=n.getCurrentHostname();if(g)b:{for(var m=
0;m<g.length;m++)if(f.endsWith(h,g[m])){e.logCount("LazyWidgetInvalidDomain",0);break b}e.logError("AJAX triggered from invalid domain: "+h,"WARN");e.logCount("LazyWidgetInvalidDomain",1)}else e.logCount("LazyWidgetInvalidDomain",1),e.logError("AJAX triggered with null whitelist from domain: "+h,"WARN");a.loadLazyWidgets(c.getLazyWidgetStubs())&&(e.logCount("LazyWidgetTrigger",1),e.logCount("LazyWidgetTrigger:"+d,1))}var g={};g.bufferPixels=h.convertToInteger(b.getValueFromState("lazyWidgetLoaderBufferPixels"),
1E3);g.delayBeforeTriggering=h.convertToInteger(b.getValueFromState("lazyWidgetLoaderDelayBeforeTriggering"),5E3);g.triggerLazyLoadIfWidgetWithinBuffer=function(e){a.lazyLoadHasTriggered()||c.getLazyWidgetStubs().each(function(a,c){if(b.onScreen(d(c),g.bufferPixels))return m("scroll"),b.off("scroll",g.triggerLazyLoadIfWidgetWithinBuffer),!1})};var k={};g.logVisibleStubMetrics=function(a){c.getLazyWidgetStubs().each(function(a,c){a=d(c);c=a.data("widget-name");!k[c]&&b.onScreen(a)&&(e.logCount("VisibleLazyWidgetStub",
1),e.logCount("VisibleLazyWidgetStub:"+c,1),k[c]=!0)})};b.on("scroll",g.logVisibleStubMetrics);b.on("scroll",g.triggerLazyLoadIfWidgetWithinBuffer);d(c.getHoverTargets()).mouseenter(function(){m("hover")});e.logCount("LazyWidgetTrigger",0);return b.freeze(g)});"use strict";f.when("cr-A","cr-ajax-model","cr-uri-utils","ready").register("cr-lazy-widget-model",function(b,d,a){var c={},e=b.getValueFromState("lazyWidgetLoaderUrl"),h=!1;c.loadLazyWidgets=function(c){if(!h&&0<c.length){h=!0;var n=b.getValueFromState("asin"),
f=b.getValueFromState("lazyWidgetCsrfToken");c=b.reduce(c,function(a,c){return a+"\x26lazyWidget\x3d"+b.$(c).data("widget-name")},e+"?asin\x3d"+n+"\x26csrf\x3d"+f);d.postWithoutFatals(c,{success:r,cache:!1,headers:{"cache-control":"no-cache"},params:a.getUrlParametersMap()||{}});return!0}return!1};c.lazyLoadHasTriggered=function(){return h};return b.freeze(c)});"use strict";f.when("cr-A","cr-jQuery","ready").register("cr-lazy-widget-view",function(b,d){var a={},c=b.getValueFromState("lazyWidgetLoaderHoverTargetsSelector")||
"";a.getLazyWidgetStubs=function(){return d(".cr-lazy-widget")};a.getHoverTargets=function(){d(c)};return b.freeze(a)});"use strict";f.when("A").register("cr-log-utils",function(b){function d(a,b,d){k.ueLogError&&("string"!==typeof b&&(b="FATAL"),d?k.ueLogError(d,{message:a,logLevel:b.toUpperCase(),attribution:"CustomerReviewsJS"}):k.ueLogError({message:a},{logLevel:b.toUpperCase(),attribution:"CustomerReviewsJS"}))}function a(a,b){return"string"===typeof b?b+a:"CustomerReviews:"+a}return{logError:d,
jsGuard:function(a){if("function"===typeof a)return function(){try{return a.apply(this,arguments)}catch(b){d("Uncaught Error in function","FATAL",b)}};d("Unable to wrap non-function","ERROR");return a},incrementCount:function(c,b){k.ue&&(c=a(c,b),b=k.ue.count(c)||0,k.ue.count(c,b+1))},logCount:function(c,b,d){k.ue&&(c=a(c,d),k.ue.count(c,b))}}});"use strict";f.register("cr-mash-utils",function(){var b=!1;f.when("mash").execute(function(){b=!0});return{isMash:function(){return b}}});"use strict";f.when("A",
"cr-log-utils").register("cr-number-utils",function(b,d){return{convertToInteger:function(a,c){if(a===parseInt(a,10))return a;if(null!==a&&a!==l&&""!==a)return parseInt(a.replace(/[^0-9]/g,""),10);if(c!==l)return c;d.logError("convertToInteger","Cannot convert "+a+" to Integer");return 0},isFiniteNumber:function(a){return"number"===typeof a&&!isNaN(a)&&isFinite(a)}}});"use strict";f.when("A","cr-jQuery").register("cr-streaming-utils",function(b,d){return{appendFadeIn:function(a){if(null!==a&&2<a.length&&
null!==a[1]&&null!==a[2]){var c=a[1];a=d(a[2]).hide();d(c).append(a);b.fadeIn(a,500,"ease-in-out",function(){})}},replace:function(a){if(null!==a&&2<a.length&&null!==a[1]&&null!==a[2]){var c=a[2];d(a[1]).replaceWith(d(c))}}}});"use strict";f.when("A","cr-log-utils").register("cr-string-utils",function(b,d){function a(a){return null===a||a===l?!0:0===b.trim(a).length}return{defaultIfBlank:function(c,b){return a(c)?b:c},isBlank:a,parseJSON:function(a){try{return b.parseJSON(a)}catch(e){d.logError("Unable to parse JSON object",
"ERROR",e)}return null},startsWith:function(a,b){return a===b?!0:null===a||null===b?!1:0===a.indexOf(b)},endsWith:function(a,b){if(a===b)return!0;if(null===a||null===b)return!1;var d=a.lastIndexOf(b);return-1!==d&&d===a.length-b.length},stringify:function(a){return k.JSON&&k.JSON.stringify?k.JSON.stringify(a):a}}});"use strict";f.when("A").register("cr-uri-utils",function(b){function d(a){a=a||k.location.href;var c={},d=a.indexOf("?"),f=a.indexOf("#");a=a.slice(d+1,f>d?f:l)||"";d=[];-1<a.indexOf("\x26")?
d=a.split("\x26"):-1<a.indexOf("\x3d")&&(d=[a]);b.each(d,function(a,b){0<a.indexOf("\x3d")&&(a=a.split("\x3d"),c[a[0]]=a[1])});return c}return{getUrlParametersMap:d,addKeyValuePair:function(a,b,e){e=e||0;if(d(a)[b]===e||!a||!b)return a;b="?"+b+"\x3d"+e;return-1<a.indexOf("?")?a.replace("?",b+"\x26"):a+b},getCurrentHostname:function(){return k.location.hostname}}});"use strict";f.when("A","cr-uri-utils","cr-string-utils","3p-urijs","cr-jQuery").register("cr-extended-uri-utils",function(b,d,a,c,e){function f(){return c(k.location.href)}
function l(){return f().query()}return e.extend(d,{getCurrentUri:f,getCurrentQueryString:l,getCurrentQueryParameters:function(){return c.parseQuery(l())},isAmazonDomain:function(b){if("string"===typeof b||b instanceof String)b=c(b);var d=a.startsWith(b.domain(),"amazon");!1===d&&(b=b.hostname(),b=b.substring(b.indexOf(".")+1),d=a.startsWith(b,"amazon"));return d},setQueryParameters:function(d,e){if("string"===typeof d||d instanceof String)d=c(d);b.each(e,function(b,c){a.isBlank(b)?d.removeSearch(c):
d=d.setSearch(c,b)});return d},setReftag:function(b,d){if("string"===typeof b||b instanceof String)b=c(b);for(var e=b.segment(),f=!1,h=e.length-1;0<=h;h--)if(a.startsWith(e[h],"ref\x3d")){f=!0;e[h]="ref\x3d"+d;break}f||e.push("ref\x3d"+d);b.segment(e);return b}})});"use strict";f.when("A","cr-jQuery").register("histogram-trigger",function(b,d){function a(){b.onScreen(d("#histogramTable"))&&b.trigger("scroll")}b.on.afterLoad(a);return{triggerHistogram:a}})});
/* ******** */
(function(b){var e=window.AmazonUIPageJS||window.P,f=e._namespace||e.attributeErrors,a=f?f("CustomerReviewsMedleyAssets",""):e;a.guardFatal?a.guardFatal(b)(a,window):a.execute(function(){b(a,window)})})(function(b,e,f){b.when("A","medley-twister-view","medley-twister-model","ready").register("medley-twister-controller",function(a,c,g){function b(a){a=g.getASIN();var d=c.getDisplayedASIN();d&&a!==d&&(c.fadeReviews(!0),g.getReviews(d,function(){g.setASIN(d)},function(){},function(){c.fadeReviews(!1)}))}
var e=c.getLoadedASIN();g.setASIN(e);a.on("a:pageUpdate",b);return{onTwist:b}});"use strict";b.when("A","cr-jQuery").register("medley-twister-view",function(a,c){return{getDisplayedASIN:function(){return String(c("#ASIN").val()||"")},getLoadedASIN:function(){return(c("#cr-state-object").data("state")||{}).asin||""},fadeReviews:function(a){!1===a?c("#cm-cr-review-list .review,#most-recent-reviews-content .review").css("opacity",1):c("#cm-cr-review-list .review,#most-recent-reviews-content .review").css("opacity",
.5)}}});"use strict";b.when("A","cr-global-model","cr-ajax-model","cr-uri-utils","cr-jQuery").register("medley-twister-model",function(a,c,b,e,f){function h(a){var b=e.getUrlParametersMap()||{};b.asin=a;return b}var d;return{setASIN:function(a){d=a||""},getASIN:function(){return d},getReviews:function(a,c,e,d){var k=f("#cr-state-object").data("state");"string"===typeof a&&10===a.length?b.post(k.medleyReviewsAjaxUrl,{params:h(a),attribution:"getMedleyReviews",success:c,error:e,finallyCallback:d}):
"function"===typeof d&&d()}}})});
/* ******** */
(function(h){var l=window.AmazonUIPageJS||window.P,n=l._namespace||l.attributeErrors,b=n?n("CustomerReviewsVotingAssets"):l;b.guardFatal?b.guardFatal(h)(b,window):b.execute(function(){h(b,window)})})(function(h,l,n){h.when("A","vote-model","vote-view","a-modal").register("vote-controller",function(b,a,e,d){function f(a,b){g(a,b);e.showElementByCssSelector(a,b.inFlight)}function g(a,b){e.hideElementByCssSelector(a,b.hideVoteComponents);b.hideAbuseComponents&&e.hideElementByCssSelector(a,b.hideAbuseComponents)}
function c(c,h){h.isReportAbuse&&(c=b.$("#mobile-abuse-"+h.voteInstanceId),d.get(c).hide());f(c,h.cssSelectors);a.submitVote(h.ajaxUrl,h.voteValue,h.voteInstanceId,h.csrfT,h.voteDimension,function(a){if(!0===a){a=c;var b=h.cssSelectors;g(a,b);e.showElementByCssSelector(a,b.onSuccess)}else a=c,b=h.cssSelectors,g(a,b),e.showElementByCssSelector(a,b.onError)},function(){var a=c,b=h.cssSelectors;g(a,b);e.showElementByCssSelector(a,b.onError)})}b.declarative("reviews:vote-action","click",function(a){c(a.$target,
a.data);a.$event.preventDefault()});return{submitVote:c}});h.when("A","cr-ajax-model").register("vote-model",function(b,a){return{submitVote:function(b,d,f,g,c,h,l){a.post(b,{params:{voteInstanceId:f,voteValue:d,csrfT:g,voteDimension:c},attribution:"submitVote",success:h,error:l})}}});h.when("A").register("vote-view",function(b){function a(a,b){return a.closest(".cr-vote").find(b)}return{hideThankYouAlert:function(b){a(b,".cr-vote-success").addClass("aok-hidden")},showThankYouAlert:function(b){a(b,
".cr-vote-success").removeClass("aok-hidden")},showErrorAlert:function(b){a(b,".cr-vote-error").removeClass("aok-hidden")},showFeedback:function(b){a(b,".cr-vote-feedback").removeClass("aok-hidden")},hideFeedback:function(b){a(b,".cr-vote-feedback").addClass("aok-hidden")},hideButtons:function(b){a(b,".cr-vote-buttons").addClass("aok-hidden")},hideElementByCssSelector:function(b,d){a(b,d).addClass("aok-hidden")},showElementByCssSelector:function(b,d){a(b,d).removeClass("aok-hidden")}}})});
/* ******** */
(function(h){var l=window.AmazonUIPageJS||window.P,n=l._namespace||l.attributeErrors,b=n?n("CustomerReviewsGalleryAssets"):l;b.guardFatal?b.guardFatal(h)(b,window):b.execute(function(){h(b,window)})})(function(h,l,n){h.when("A","load").register("review-image-asset-loader",function(b){var a=!1;b.ajax("/gp/customer-reviews/aj/private/reviewsGallery/get-image-gallery-assets",{method:"post",success:function(b){h.load.css(b.reviewsLightboxCSS);var d=document.createElement("script");d.type="text/javascript";
d.async=!0;d.setAttribute("crossorigin","anonymous");d.src=b.reviewsLightboxJS;document.getElementsByTagName("head")[0].appendChild(d);a=!0;h.register("review-image-assets-loaded",{})},error:function(){var a;a="/gp/customer-reviews/aj/metrics/log-values?noCache="+(new Date).getTime();a+="&SimpleStack:ReviewImageAssetLoaderFailure=1";l.Image&&((new Image).src=a)}});return{isLoaded:function(){return a}}});h.when("A","cr-jQuery","cr-log-utils","reviews-constants","review-image-assets-loaded").register("review-image-binder",
function(b,a,e,d){function f(b,c,d,f,k){if(!(b&&c&&d instanceof a&&f instanceof a&&k instanceof a))return e.logError("Invalid parameters for imageBinder.initializeEventHandlers with ASIN: "+b+", galleryName: "+c+", $popoverTrigger: "+d+", $thumbnails: "+f+", $galleryLink: "+k,"FATAL"),!1;var l="reviewsLightbox-ready-"+c;f.click(function(){g(b,c);var e=f.index(this);d.click();h.when(l).execute(function(){a("#"+c).trigger("jumpToImageAtIndex",e)})});k.click(function(){g(b,c);d.click();h.when(l).execute(function(){a("#"+
c).trigger("hideImmersiveView")})});return!0}function g(a,b){if(!a||!b)return e.logError("Invalid parameters for imageBinder.initializeImageGallery with ASIN: "+a+", galleryName: "+b,"FATAL"),!1;if(c)return!0;(new ReviewsLightbox(b,"DESKTOP")).initializeForAsin(a);return c=!0}var c=!1,k={};h.when("reviewsLightbox-js").execute(function(){var b=a("#reviews-image-gallery-container"),c=b.attr("data-asin");0<b.length&&c&&f(c,"reviews-image-gallery",b.find(".a-popover-trigger"),b.find(".review-image-tile"),
b.find(".reviews-image-gallery-link"))});b.on(d.events.RELOAD_COMPLETE,function(){k={}});return{bindReview:function(b,c,d){var e=new ReviewGallery(d,"DESKTOP"),f=a("#"+c);f.find(".review-image-tile").each(function(c){a(this).click(function(){k[b]||(e.initializeForReview(b),k[b]=!0);f.find(".a-popover-trigger").click();h.when("reviewsLightbox-ready-"+d).execute(function(){e.render();e.showImageAtIndex(c)})})})},initializeImageGallery:g,initializeEventHandlers:f}});h.when("A","cr-jQuery",
"cr-video-model","cr-video-view","reviews-constants").register("cr-video-controller",function(b,a,e,d,f){function g(){b.each(a(".review-views .review"),function(a){a&&a.id&&(a=e.getEmbedInfo(a.id))&&(e.isAiryLoaded()||e.loadAssets(),d.embedVideo(a))})}b.on(f.events.RELOAD_COMPLETE,function(){g()});g();return{initAll:g}});h.when("cr-jQuery").register("cr-video-model",function(b){var a=!1;return{getEmbedInfo:function(a){var d="video-block-"+a,f=b("#"+a+" .video-url").val(),g=b("#"+a+" .video-slate-img-url").val(),
c=b("#cr-video-swf-url").val();return a&&f&&c?{videoDomId:d,videoUrl:f,videoSlateImgUrl:g,videoSwfUrl:c}:!1},isAiryLoaded:function(){return a},loadAssets:function(){var e=b("#cr-airy-js-source-url").val(),d=b("#cr-airy-css-source-url").val();"string"===typeof e&&"string"===typeof d&&(h.load.js(e),h.load.css(d));a=!0}}});h.when("cr-jQuery","afterLoad").register("cr-video-view",function(b){return{embedVideo:function(a){h.when("Airy").execute(function(b){b.embed({parentId:a.videoDomId,streamingUrls:[a.videoUrl],
slateImages:{preloadSlate:a.videoSlateImgUrl},swfUrl:a.videoSwfUrl,desiredMode:"html"})})}}})});
/* ******** */
(function(g){var m=window.AmazonUIPageJS||window.P,p=m._namespace||m.attributeErrors,e=p?p("CustomerReviewsFilteringAssets",""):m;e.guardFatal?e.guardFatal(g)(e,window):e.execute(function(){g(e,window)})})(function(g,m,p){g.when("cr-A","cr-jQuery","cr-filtering-view","cr-filtering-model","cr-global-view","reviews-constants","cr-streaming-utils").register("cr-filtering-controller",function(e,f,b,d,l,c,k){function h(n){var a=!1,c=!1;n.toggleFilters&&(c=!0);d.setASIN(b.getLoadedFilterParam("asin"));
a=d.setReviewerType(n.reviewerType,c)||a;a=d.setFormatType(n.formatType,c)||a;a=d.setFilterByKeyword(n.filterByKeyword,c)||a;a=d.setFilterByLanguage(n.filterByLanguage,c)||a;a=d.setSortOrder(n.sortOrder,c)||a;a=d.setStarFilter(n.filterByStar,c)||a;a=d.setPageNumber(n.pageNumber,c)||a;a=d.setHeightFilter(n.filterByHeight,c)||a;return a=d.setWeightFilter(n.filterByWeight,c)||a}function q(a){if(h(a.data)||a.data.forceReload)a.data.sortOrder&&b.setSortDropdown(a.data.sortOrder),b.hideReviewLoadError(),
b.hideReviews(),b.showLoadingSpinner(),e.trigger(c.events.FILTER_APPLY_BEGIN,a),d.getReviews(function(){b.showReviews();"filterByHeight"===d.getActiveTab()&&b.scrollToFilterIndex("filterByHeight");"filterByWeight"===d.getActiveTab()&&b.scrollToFilterIndex("filterByWeight");e.trigger(c.events.FILTER_APPLY_SUCCESS,a)},function(){b.showReviewLoadError();e.trigger(c.events.FILTER_APPLY_ERROR,a)},function(){b.hideLoadingSpinner();e.trigger(c.events.FILTER_APPLY_DONE,a);e.trigger(c.events.RELOAD_COMPLETE)},
function(a){"appendFadeIn"===a[0]?k.appendFadeIn(a):"replace"===a[0]&&k.replace(a)},l.getReftag(a)),a.data.scrollToSelector&&l.scrollTo(a.data.scrollToSelector,0)}function g(a){a&&a.data&&q(a)}function a(a){a&&a.data&&a.$target&&a.data.filterType&&(a.data[a.data.filterType]=a.$target.val(),q(a))}function r(a){a&&a.data&&a.data.filterType&&(b.deactivateFilterTabHeaders(),b.activateFilterTabHeader(a.data.filterType),b.changeFilterOptionsTo(a.data.filterType),d.setActiveTab(a.data.filterType),"filterByHeight"!==
a.data.filterType&&"filterByWeight"!==a.data.filterType||b.scrollToFilterIndex(a.data.filterType))}d.setReviewsAjaxUrl(b.getReviewsAjaxUrl());e.declarative(c.events.FILTER_APPLY,"click",e.compositeEventWrapper(g,!0,100));e.declarative(c.events.FILTER_CHANGE,"change",e.compositeEventWrapper(a,!0,100));e.declarative(c.events.FILTER_TAB_CLICKED,"click",r);d.setReviewerType(b.getLoadedFilterParam("reviewerType"),!1);d.setFormatType(b.getLoadedFilterParam("formatType"),!1);d.setFilterByKeyword(b.getLoadedFilterParam("filterByKeyword"),
!1);d.setFilterByLanguage(b.getLoadedFilterParam("filterByLanguage"),!1);d.setStarFilter(b.getLoadedFilterParam("filterByStar"),!1);d.setSortOrder(b.getLoadedFilterParam("sortOrder"),!1);d.setPageNumber(b.getLoadedFilterParam("pageNumber"),!1);d.setHeightFilter(b.getLoadedFilterParam("filterByHeight"),!1);d.setWeightFilter(b.getLoadedFilterParam("filterByWeight"),!1);d.setLanguage(b.getLoadedFilterParam("languageOfPreference"));b.getLoadedFilterParam("showLanguageFilter")?d.setActiveTab("filterByLanguage"):
b.getLoadedFilterParam("showHeightFilter")&&(d.setActiveTab("filterByHeight"),b.scrollToFilterIndex("filterByHeight"));return{setFilterParams:h,onFilterApply:g,onFilterChange:a,onFilterTabClicked:r}});"use strict";g.when("A","cr-ajax-model","ready").register("cr-filtering-model",function(e,f){function b(){return h.asin||""}function d(){return g||""}function l(a,c){c?h[a]=c:delete h[a]}function c(a,c,b){var d=!1;a&&c!==p&&(d=k(a)!==c,!d&&b&&(c="CLEAR_VALUE",d=!0),l(a,c));return d}function k(a){return h[a]||
""}var h={},g="",m;return{getReviews:function(a,c,b,d,l){var e=g;m&&f.abort(m);l&&(e+="ref\x3d"+l);m=f.post(e,{params:h,attribution:"getFilteredReviews",success:a,error:c,finallyCallback:function(){b();m=0},chunk:d})},setASIN:function(a){var c=b()!==a;l("asin",a);return c},getASIN:b,setReviewsAjaxUrl:function(a){var c=d()!==a;g=a||"";return c},getReviewsAjaxUrl:d,setReviewerType:function(a,b){return c("reviewerType",a,b)},getReviewerType:function(){return k("reviewerType")},setFormatType:function(a,
b){return c("formatType",a,b)},getFormatType:function(){return k("formatType")},setFilterByKeyword:function(a,b){return c("filterByKeyword",a,b)},getFilterByKeyword:function(){return k("filterByKeyword")},setFilterByLanguage:function(a,b){return c("filterByLanguage",a,b)},getFilterByLanguage:function(){return k("filterByLanguage")},setSortOrder:function(a,b){return c("sortBy",a,b)},getSortOrder:function(){return k("sortBy")},setStarFilter:function(a,b){return c("filterByStar",a,b)},getStarFilter:function(){return k("filterByStar")},
setPageNumber:function(a,b){return c("pageNumber",a,b)},getPageNumber:function(){return k("pageNumber")},setHeightFilter:function(a,b){return c("filterByHeight",a,b)},getHeightFilter:function(){return k("filterByHeight")},setWeightFilter:function(a,b){return c("filterByWeight",a,b)},getWeightFilter:function(){return k("filterByWeight")},getFilterParams:function(){return h||{}},updateFilterParam:l,setActiveTab:function(a){return l("activeTab",a)},getActiveTab:function(){return k("activeTab")},setLanguage:function(a){return l("language",
a)}}});"use strict";g.when("cr-A","cr-jQuery","a-dropdown","ready").register("cr-filtering-view",function(e,f,b){function d(b){return(f("#cr-state-object").data("state")||{})[b]||""}return{getReviewsAjaxUrl:function(){return(f("#cr-state-object").data("state")||{}).reviewsAjaxUrl||""},showLoadingSpinner:function(){var b=e.getValueFromState("onLoadShowHideElements");f(b).removeClass("aok-hidden")},hideLoadingSpinner:function(){var b=e.getValueFromState("onLoadShowHideElements");f(b).addClass("aok-hidden")},
hideReviews:function(){f(".filterable-reviews-content").addClass("aok-hidden")},showReviews:function(){f(".filterable-reviews-content").removeClass("aok-hidden")},showReviewLoadError:function(){f(".review-load-error").removeClass("aok-hidden")},hideReviewLoadError:function(){f(".review-load-error").addClass("aok-hidden")},deactivateFilterTabHeaders:function(){f(".cr-tab-header-text").removeClass("cr-tab-active")},activateFilterTabHeader:function(b){f(".cr-tab-header-text-"+b).addClass("cr-tab-active")},
changeFilterOptionsTo:function(b){f(".cr-tab-content").addClass("aok-hidden");f(".cr-tab-content-"+b).removeClass("aok-hidden")},getLoadedFilterParam:d,setSortDropdown:function(d){b.getSelect("cm-cr-sort-dropdown").setValue(d)},scrollToFilterIndex:function(b){var c;c=0;var e;e=d("isCardTreatmentEnabled")?f(".cr-horizontal-scroll-list-cardify-padding ul \x3e *:first-child"):f(".cr-horizontal-scroll-list-padding ul \x3e *:first-child");var h=f(m).width();b=f("ul#"+b+"-button-list")[0];if(e===p||h===
p||b===p)c=-1;else{var g=parseInt(b.dataset.index);e=parseInt(e.css("padding-left").replace("px",""));if(-1!==g){c=e-h/2;for(h=0;h<g;h++)c+=f("#"+b.children[h].firstElementChild.id).outerWidth(!0);c+=f("#"+b.children[g].firstElementChild.id).outerWidth(!0)/2}}0>c||f(".cr-filter-scroll-container").animate({scrollLeft:c},50)}}});"use strict";g.when("cr-A","cr-lighthut-terms-view","reviews-constants","cr-log-utils").register("cr-lighthut-terms-controller",function(e,f,b,d){function g(b){b&&b.filterByKeyword!==
p&&(f.setSelected(b.filterByKeyword),d.incrementCount("LighthutTermClicked"))}e.on(b.events.FILTER_APPLY_BEGIN,e.compositeEventWrapper(function(b){b&&b.data&&g(b.data)}));return{onFilterApplied:g}});"use strict";g.when("A","cr-jQuery","ready").register("cr-lighthut-terms-view",function(e,f){return{setSelected:function(b){b=b.replace(/ /g,"_");var d=(b=f("#cr-lighthouse-term-"+b))&&b.hasClass("cr-lighthut-term-selected");f(".cr-lighthut-term-selected").removeClass("cr-lighthut-term-selected");d||b.addClass("cr-lighthut-term-selected")}}})});
/* ******** */
