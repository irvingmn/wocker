!function($){"use strict";$(function(){function e(e){$(e).datepicker({changeMonth:!0,changeYear:!0,defaultDate:s,firstDay:l,monthNames:n.split(","),monthNamesShort:n.split(","),dayNames:i.split(","),dayNamesShort:d.split(","),dayNamesMin:r.split(","),dateFormat:"yy-mm-dd",beforeShow:function(){$("#ui-datepicker-div").hasClass("wcs-datepicker-pop")||$("#ui-datepicker-div").addClass("wcs-datepicker-pop")},onClose:function(){$("#ui-datepicker-div").hasClass("wcs-datepicker-pop")&&$("#ui-datepicker-div").removeClass("wcs-datepicker-pop")}})}function a(){var a=Handlebars.compile(p);$("#wcs-canceled__holder").append(a()),e("input[name='wcs-canceled-days[]']")}function t(){var a=Handlebars.compile(o);$("#wcs-repeat__holder").append(a()),e("input[name='wcs-repeat-dates[]']")}var s=new Date($('input[name="wcs-timestamp"]').val()+"T"+($('select[name="wcs-hour"]').val()>=10?$('select[name="wcs-hour"]').val():"0"+$('select[name="wcs-hour"]').val())+":"+(parseInt($('select[name="wcs-minutes"]').val())>=10?$('select[name="wcs-minutes"]').val():"0"+$('select[name="wcs-minutes"]').val())+":00Z"),c=s.getTimezoneOffset();s.setMinutes(s.getMinutes()+c);var n=$("#wcs-datepicker").data("wcs-months"),i=$("#wcs-datepicker").data("wcs-days"),d=$("#wcs-datepicker").data("wcs-days-short"),r=$("#wcs-datepicker").data("wcs-days-min"),l=$("#wcs-datepicker").data("wcs-firstday");$("#wcs-datepicker").datepicker({dateFormat:"yy-mm-dd",altField:'input[name="wcs-date"]',changeMonth:!0,changeYear:!0,defaultDate:s,firstDay:l,beforeShow:function(e,a){$("#ui-datepicker-div").addClass("wcs-datepicker-pop")},onClose:function(e,a){$("#ui-datepicker-div").removeClass("wcs-datepicker-pop")},monthNames:n.split(","),monthNamesShort:n.split(","),dayNames:i.split(","),dayNamesShort:d.split(","),dayNamesMin:r.split(",")}),$("#wcs-datepicker-ending").datepicker({dateFormat:"yy-mm-dd",changeMonth:!0,changeYear:!0,beforeShow:function(e,a){$("#ui-datepicker-div").addClass("wcs-datepicker-pop")},onClose:function(e,a){$("#ui-datepicker-div").removeClass("wcs-datepicker-pop")}}),$("body").on("click","#wcs-until a",function(e){e.preventDefault(),$(this).next("input").val("")}),$(".repeat_until").datepicker({dateFormat:"yy-mm-dd",changeMonth:!0,changeYear:!0,beforeShow:function(e,a){$("#ui-datepicker-div").addClass("wcs-datepicker-pop")},onClose:function(e,a){$("#ui-datepicker-div").removeClass("wcs-datepicker-pop")}});var p=$("#wcs-canceled-item").html(),o=$("#wcs-repeat-date-item").html();$("#add-repeat").on("click",t),$("#add-canceled").on("click",a),$("body").on("click",".wcs-canceled-repeat",function(e){e.preventDefault(),confirm("Are you sure?")&&$(this).parents(".wcs-canceled__item").remove()}),$("body").on("click",".wcs-delete-repeat",function(e){e.preventDefault(),confirm("Are you sure?")&&$(this).parents(".wcs-repeat__item").remove()}),e("input[name='wcs-canceled-days[]']"),e("input[name='wcs-repeat-dates[]']");var u=$("#wcs-duration");$(".slider",u).slider({value:u.data("wcs-value"),step:5,min:5,max:1440,slide:function(e,a){var t=" ",s=a.value;1===Math.floor(a.value/60)&&(t=Math.floor(a.value/60)+" "+u.data("wcs-units-hour")),Math.floor(a.value/60)>=2&&Math.floor(a.value/60)<=24&&(t=Math.floor(a.value/60)+" "+u.data("wcs-units-hours")),s-=60*Math.floor(a.value/60),s=s>0?s+" "+u.data("wcs-units-minutes"):"",$(this).siblings(".slider_value").children("strong").text(t),$(this).siblings(".slider_value").children("em").text(s),$(this).siblings("input[type=hidden]").val(a.value)}}),$("#wrapper__wcs_action_page").dependsOn({"input[name*=_wcs_action_call]":{values:["0"]}}),$("#wrapper__wcs_repeat_days").dependsOn({"select[name*=wcs-interval]":{values:["2",2]}}),$("#wrapper__wcs_action_custom").dependsOn({"input[name*=_wcs_action_call]":{values:["1"]}}),$("#wrapper__wcs_action_email").dependsOn({"input[name*=_wcs_action_call]":{values:["2"]}}),$("#wcs-canceled").dependsOn({"select[name*=wcs-status]":{values:["2"]}}),$("#wcs-until").dependsOn({"select[name*=wcs-interval]":{values:["1","2","3","4","5",1,2,3,4,5]}}),$("#wcs-duration-container").dependsOn({"input[name*=wcs_multiday]":{checked:!1}}),$(".wcs-admin-metabox-time--ending").dependsOn({"input[name*=wcs_multiday]":{checked:!0}}),$("#wcs-repeat-dates").dependsOn({"select[name*=wcs-interval]":{values:["6",6]}}),$("#wcs-repeat-container").dependsOn({"input[name*=wcs_multiday]":{checked:!1}})})}(jQuery);