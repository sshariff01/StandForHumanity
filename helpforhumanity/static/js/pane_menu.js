octoplace_com.m.main.loadModules(["data","util"],function(){octoplace_com.m.pane_menu=function(){function n(){var b,d,c,e;e=[{name:"Blog",url:"http://blog.madewithmap.com"},{name:"Terms of Service",url:a.m.shared.terms_of_service_url},{name:"Privacy Policy",url:a.m.shared.privacy_policy_url},{name:"Contact Us",url:a.m.shared.contact_email_href}];var f={instagram:"http://instagram.com/madewithmap",twitter:"https://www.twitter.com/madewithmap",facebook:"https://www.facebook.com/madewithmap"};b=$('<div class="profile_menu"></div>');
$(k).append(b);d=$('<a href="/" class="state_trigger logo_trigger"><div class="icon"></div></a>');$(g).append(d);d=$('<div class="icon_trigger"></div>');c=$(octoplace_com.m.shared.help_email);$(c).empty().append('<div class="icon"></div><div class="label">Help</div>');$(c).addClass("help icon_trigger_link");$(d).append(c);$(g).append(d);c=$('<div class="text_links"></div>');for(var l=0;l<e.length;l++){var m=e[l];d=$('<a class="menu_text_link" target="_blank"></a>');$(d).append(m.name);$(d).attr("href",
m.url);$(c).append(d)}$(g).append(c);e=$('<div class="icon_links"></div>');$(g).append(e);for(icon_class in f)d=$('<a class="icon_link" target="_blank"><div class="icon"></div></a>'),$(d).addClass(icon_class+"_link"),$(d).attr("href",f[icon_class]),$(e).append(d);f=a.m.main.Loading.makeDots();$(f).addClass("white");$(f).attr("title","Logging you in...");$(b).append(f);a.m.data.authenticate(function(b,f){if(b){var d=$(k).find(".profile_menu").first(),c;a.m.util.supports("localStorage")?($(d).empty(),
c=$('<a href="http://eepurl.com/zNfMf" class="sign_up menu_trigger has_tooltip"><div class="icon"></div><div class="tooltip"><div class="label">Sign Up</div></div></a>'),$(d).append(c),c=$('<a class="sign_in menu_trigger state_trigger has_tooltip"><div class="icon"></div><div class="tooltip"><div class="label">Log In</div></div></a>'),$(c).attr("href",a.m.shared.PathApp(["login"])),$(d).append(c)):a.m.main.makeSignPost("<div>Please enable localStorage in your browser if you want to Log In.</div>")}else h.showProfileLinks(f)})}
function p(){var b=$(a.m.shared.help_email);$(b).empty();$(b).attr("id","IntercomButtonPaneMenu");$(b).append('We <div class="icon"></div> feedback!');return b}function q(b){var d=a.m.main.ProfilePic.link(b.user_id,{style:"overlay"});$(d).addClass("menu_trigger has_tooltip");var c=$('<div class="tooltip"></div>');$(d).append(c);$(c).append('<div class="label">'+b.username+"</div>");return d}function r(){var b=$('<a class="uploads menu_trigger state_trigger"></a>');$(b).append('<div class="icon"></div>');
var d=$('<div class="tooltip"></div>');$(d).append('<div class="label">Map a Place</div>');$(b).append(d);$(b).addClass("has_tooltip");$(b).attr("href",a.m.shared.PathApp(["uploads"]));$(b).on("click",function(b){a.m.pane_menu.handleUploadsButtonClick()});return b}var a=octoplace_com,h={};a.m.main.loadCss("pane_menu");var g=a.m.main.makePane("pane_menu"),k=a.m.main.makePane("pane_menu_bar");h.create=function(){$(a.panels.menu).append(g);$(a.panels.menu_bar).append(k);n();$(g).on("click",function(a){$("body").removeClass("panel_menu_expanded")})};
h.handleUploadsButtonClick=function(){if("places"==a.state.last_path.filter&&a.state.last_path.filter_domain){var b=a.state.last_path.filter_domain;a.m.main.Path.show(a.m.shared.PathApp(["uploads",b]))}else"places"==a.state.last_path.name&&a.state.last_path.domain?(b=a.state.last_path.domain,a.m.main.Path.show(a.m.shared.PathApp(["uploads",b]))):a.m.main.Path.show(a.m.shared.PathApp(["uploads"]))};h.Notifications=function(){var b={},d=0,c=null,e=Date.now();b.getStatus=function(){a.logged_in_user.user_id&&
a.m.data.GETauth(["users",a.logged_in_user.user_id,"notifications","status"],function(b){if(200!=b.code)return a.logE(Error(b.message));b=b.data;b.null_result&&(b=null);a.m.main.Msg.update.txrx({target:"notifications",status:b})})};b.getData=function(b){"function"!=typeof b&&(b=function(){});a.m.main.doAfterAuth({logged_in:function(){a.m.data.GETauth(["users",a.logged_in_user.user_id,"notifications"],function(d){if(200!=d.code)return b(Error(d.message));a.m.main.Msg.update.txrx({target:"notifications",
notifications:d.data,status:null});b(null,d.data)})},not_authorized:function(){b(null,{not_logged_in:!0})}})};b.handleStatus=function(a){c=a||null;null!=c&&b.indicatorsShow();b.startPolling()};b.handleData=function(a){b.indicatorsHide()};b.indicatorsHide=function(){var a=$(k).find(".profile_menu .show_notifications").first();$(a).data("fn")&&$(a).data("fn").indicatorHide()};b.indicatorsShow=function(){var a=$(k).find(".profile_menu .show_notifications").first();$(a).data("fn")&&$(a).data("fn").indicatorShow()};
b.makeButton=function(b){var d={},c={};d.indicatorHide=function(){$(c.indicator).removeClass("displayed")};d.indicatorShow=function(){$(c.indicator).addClass("displayed")};c.button=$('<a class="show_notifications menu_trigger has_tooltip"><div class="icon"></div><div class="tooltip"><div class="label">Notifications</div></div></a>');$(c.button).data("fn",d);$(c.button).attr("href",a.m.shared.PathApp(["notifications"]));c.indicator=$('<div class="indicator"></div>');$(c.button).append(c.indicator);
$(c.button).on("click",function(b){a.m.util.supports("history")&&(b.preventDefault(),$(c.indicator).is(".displayed")?(d.indicatorHide(),a.m.main.Path.show($(c.button).attr("href"),{reload:!0})):a.m.main.Path.show($(c.button).attr("href")))});return c.button};b.startPolling=function(){clearInterval(d);d=setInterval(function(){var a=Date.now();3E5>a-e||(e=a,b.getStatus())},3E5)};return b}();h.showProfileLinks=function(b){var d=$(k).find(".profile_menu").first(),c,e;c=$('<div class="icon_trigger"></div>');
e=$('<a class="state_trigger getting_started icon_trigger_link"><div class="icon"></div><div class="label">Getting Started</div></a>');var f=a.m.shared.PathApp(["help","getting-started"]);$(e).attr("href",f);$(c).append(e);$(g).find(".logo_trigger").first().after(c);c=$('<div class="icon_trigger"></div>');e=$('<a class="state_trigger settings icon_trigger_link"><div class="icon"></div><div class="label">Settings</div></a>');f=a.m.shared.PathApp(["users",b,"settings"]);$(e).attr("href",f);$(c).append(e);
$(g).find(".icon_trigger").last().after(c);c=$('<div class="icon_trigger"></div>');e=$('<a href="/" class="logout icon_trigger_link"><div class="icon"></div><div class="label">Log out</div></a>');$(e).on("click",function(b){b.preventDefault();a.m.main.handleLogout()});$(c).append(e);$(g).find(".icon_trigger").last().after(c);$(d).empty();c={};$("body").is(".bookmarklet")&&(c.is_bookmarklet=!0);a.m.data.GETauth(["users",b],c,function(c){if(200!=c.code)return a.logE(Error(c.message));if(c.data.null_result)return a.m.main.Auth.removeToken(),
a.logE(Error("User does not exist"));a.logged_in_user=c.data;$(d).append(r());$(d).append(h.Notifications.makeButton(c.data));h.Notifications.getStatus();$(d).append(q(c.data));a.m.main.IntercomAPI.init(b,function(){$(g).append(p())});ga("set","dimension1",a.logged_in_user.username);$("body").trigger(a.event_prefixes.logged_in);$("body").is(".browser_ie")&&a.m.main.makeSignPost('Looks like you\'re using Internet Explorer. We haven\'t tested in Internet Explorer yet, so Map might break when you use it. We recommend switching to <a href="http://www.google.com/chrome/" target="_blank">Google Chrome</a> until we finish testing for Internet Explorer.')})};
return h}()});