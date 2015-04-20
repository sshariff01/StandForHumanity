octoplace_com.m.main.loadModules(["util"],function(){octoplace_com.m.data=function(){var h=octoplace_com,k={},l=function(){h.state.not_authorized=!0;$("body").trigger(h.event_prefixes.not_authorized)};k.authenticate=function(a){h.state.not_authorized=!1;var d=h.m.main.Auth.readToken();if(d)k.GET(["users","anon","sessions",d],function(e){return 200!=e.code?(h.m.main.Auth.deleteToken(),l(),a(Error(e.message))):a(null,e.data.user_id)});else return l(),a(Error("No authentication token found."))};k.authenticateFB=
function(a,d){h.state.not_authorized=!1;k.POSTanon(["users","anon","sessions"],{signed_request:a},function(a){if(201!=a.code)return l(),d(Error(a.message));a.data&&a.data.auth_token?h.m.main.Auth.saveToken(a.data.auth_token):l();return d(null,a.data)})};k.authenticatePassword=function(a,d,e){h.state.not_authorized=!1;k.POSTanon(["users","anon","sessions"],{username:a,password:d},function(a){if(201!=a.code)return l(),e(Error(a.message));a.data&&a.data.auth_token?h.m.main.Auth.saveToken(a.data.auth_token):
l();return e(null,a.data)})};k.call=function(){function a(a,e,g,f,b){e={url:g,type:a,dataType:e};f&&("GET"==a?e.data=f:(e.contentType="application/json",e.processData=!1,e.data=JSON.stringify(f)));h.m.main.Loading.on();$.ajax(e).done(function(a){h.m.main.Loading.off();return b(a)}).fail(function(a){h.m.main.Loading.off();return b({code:a.status,message:a.statusText})})}return{json:function(d,e,g,f){if(3==arguments.length){if("function"!=typeof g)return h.logE(Error("Missing callback"));f=g;g=!1}a(d,
"json",e,g,f)},html:function(d,e,g,f){if(3==arguments.length){if("function"!=typeof g)return h.logE(Error("Missing callback"));f=g;g=!1}a(d,"html",e,g,f)}}}();k.DELETE=function(a,d,e){if(2==arguments.length){if("function"!=typeof d)return h.logE(Error("Missing callback"));e=d;d={}}k.write("DELETE",a,d,e)};k.GET=function(a,d,e){if(2==arguments.length){if("function"!=typeof d)return h.logE(Error("Missing callback"));e=d;d=!1}var g=h.m.shared.PathAPI(a);if(!g)return e({code:404,message:"Not Found"});
d?k.call.json("GET",g,d,e):k.call.json("GET",g,e)};k.GETauth=function(a,d,e){if(2==arguments.length){if("function"!=typeof d)return h.logE(Error("Missing callback"));e=d;d={}}var g=h.m.shared.PathAPI(a);if(!g)return e({code:404,message:"Not Found"});var f=h.m.main.Auth.readToken();if(f)d.auth_token=f,k.call.json("GET",g,d,e);else return e({code:401,message:"Unauthorized"})};k.PATCH=function(a,d,e){if(2==arguments.length){if("function"!=typeof d)return h.logE(Error("Missing callback"));e=d;d={}}k.write("PATCH",
a,d,e)};k.POST=function(a,d,e){if(2==arguments.length){if("function"!=typeof d)return h.logE(Error("Missing callback"));e=d;d={}}k.write("POST",a,d,e)};k.POSTanon=function(a,d,e){if(2==arguments.length){if("function"!=typeof d)return h.logE(Error("Missing callback"));e=d;d={}}k.writeAnon("POST",a,d,e)};k.Cache=function(){var a={},d={read:{},del:{},callCallbacks:function(a,d,f){for(;a.length;)a.shift()(d,f)}};d.read.atfollowing_place_users=function(e,g,f){e=["users",e,"atfollowing-places",g];var b=
h.m.shared.PathAPI(e.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].user_ids?f(null,a[b].user_ids):(a[b].callbacks.push(f),a[b].loading||(a[b].loading=!0,h.m.data.GET(e.slice(0),{per_page:10,page:1},function(c){a[b].loading=!1;if(200!=c.code)d.callCallbacks(a[b].callbacks,Error(c.message));else{c=c.data.user_ids;for(var e=[],f=0;f<c.length;f+=2)e.push(c[f]);a[b].user_ids=e;d.callCallbacks(a[b].callbacks,null,e)}})))};d.read.hashtag_pics=function(e,g){var f=["hashtags",e,
"pics"],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].ids?g(null,a[b].ids):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),{per_page:500},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data.pic_ids,a[b].ids=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.hashtag_pics_count=function(e,g){var f=["hashtags",e,"pics"],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&
(a[b]={loading:!1,callbacks:[]});a[b].count_data?g(null,a[b].count_data):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),{per_page:0},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].count_data=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.hashtag_pics_recent=function(e,g){var f=["hashtags",e,"pics"],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].ids?g(null,
a[b].ids):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),{per_page:500,sort:"recent"},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data.pic_ids,a[b].ids=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.hashtag_places=function(e,g){var f=["hashtags",e,"places"],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].place_ids?g(null,a[b].place_ids):(a[b].callbacks.push(g),
a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),{per_page:1E3},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data.place_ids,a[b].place_ids=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.del.pic=function(d){d=h.m.shared.PathAPI(["pics",d]);a[d]&&a[d].pic_data&&delete a[d]};d.read.pic=function(e,g){var f=["pics",e],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].pic_data?g(null,a[b].pic_data):(a[b].callbacks.push(g),
a[b].loading||(a[b].loading=!0,h.m.main.Loading.on(),h.m.data.GET(f.slice(0),function(c){h.m.main.Loading.off();a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].pic_data=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.place=function(e,g){var f=["places",e],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].place_data?g(null,a[b].place_data):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),
function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].place_data=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.place_pics=function(e,g){var f=["places",e,"pics"],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].ids?g(null,a[b].ids):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),{per_page:1E3},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,
Error(c.message)):(c=c.data,a[b].ids=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.place_pics_count=function(e,g){var f=["places",e,"pics"],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].count_data?g(null,a[b].count_data):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),{per_page:0},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].count_data=c,d.callCallbacks(a[b].callbacks,
null,c))})))};d.read.source=function(e,g){var f=["sources",e],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].source_data?g(null,a[b].source_data):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].source_data=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.source_pics=function(e,g){var f=["sources",e,"pics"],b=h.m.shared.PathAPI(f.slice(0));
"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].ids?g(null,a[b].ids):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),{per_page:1E3},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data.pic_ids,a[b].ids=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.source_pics_count=function(e,g){var f=["sources",e,"pics"],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].count_data?
g(null,a[b].count_data):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),{per_page:0},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].count_data=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.source_places=function(e,g){var f=["sources",e,"places"],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].place_ids?g(null,a[b].place_ids):(a[b].callbacks.push(g),a[b].loading||
(a[b].loading=!0,h.m.data.GET(f.slice(0),{per_page:1E3},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data.place_ids,a[b].place_ids=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.user=function(e,g){var f=["users",e],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].user_data?g(null,a[b].user_data):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),function(c){a[b].loading=
!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].user_data=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.username=function(e,g){var f=["usernames",e],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].user_data?g(null,a[b].user_data):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].user_data=
c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.user_profile_pic_smallest=function(e,g){var f=["users",e,"pics","smallest"],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].pic_data?g(null,a[b].pic_data):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].pic_data=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.user_profile_pic_thumbnail=
function(e,g){var f=["users",e,"pics","thumbnail"],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].pic_data?g(null,a[b].pic_data):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].pic_data=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.user_profile_pic_card=function(e,g){var f=["users",e,"pics","card"],b=h.m.shared.PathAPI(f.slice(0));
"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].pic_data?g(null,a[b].pic_data):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].pic_data=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.user_atmentions=function(e,g){var f=["users",e,"atmentions"],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].usernames?
g(null,a[b].usernames):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),{page:1,per_page:1E3},function(c){a[b].loading=!1;if(200!=c.code)d.callCallbacks(a[b].callbacks,Error(c.message));else{for(var e=[],f=0;f<c.data.usernames.length;f+=2)e.push({username:c.data.usernames[f],score:parseInt(c.data.usernames[f+1])});a[b].usernames=e;d.callCallbacks(a[b].callbacks,null,e)}})))};d.read.user_hashtags=function(e,g){var f=["users",e,"hashtags"],b=h.m.shared.PathAPI(f.slice(0));
"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].hashtags?g(null,a[b].hashtags):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),{page:1,per_page:1E3},function(c){a[b].loading=!1;if(200!=c.code)d.callCallbacks(a[b].callbacks,Error(c.message));else{for(var f=[],g=0;g<c.data.hashtags.length;g+=2)f.push({user_id:e,name:c.data.hashtags[g],score:parseInt(c.data.hashtags[g+1])});a[b].hashtags=f;d.callCallbacks(a[b].callbacks,null,f)}})))};d.read.user_hashtag_places=
function(e,g,f){e=["users",e,"hashtags",g,"places"];var b=h.m.shared.PathAPI(e.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].place_ids?f(null,a[b].place_ids):(a[b].callbacks.push(f),a[b].loading||(a[b].loading=!0,h.m.data.GET(e.slice(0),{per_page:1E3},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data.place_ids,a[b].place_ids=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.user_hashtag_tidbits=function(e,g,f){e=["users",
e,"hashtags",g,"tidbits"];var b=h.m.shared.PathAPI(e.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].ids?f(null,a[b].ids):(a[b].callbacks.push(f),a[b].loading||(a[b].loading=!0,h.m.data.GET(e.slice(0),{per_page:500},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].ids=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.user_hashtag_tidbits_recent=function(e,g,f){e=["users",e,"hashtags",g,"tidbits"];var b=h.m.shared.PathAPI(e.slice(0));
"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].ids?f(null,a[b].ids):(a[b].callbacks.push(f),a[b].loading||(a[b].loading=!0,h.m.data.GET(e.slice(0),{per_page:500,sort:"recent"},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].ids=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.user_place_saves=function(e,g,f){e=["users",e,"places",g,"saves"];var b=h.m.shared.PathAPI(e.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,
callbacks:[]});a[b].tidbits?f(null,a[b].tidbits):(a[b].callbacks.push(f),a[b].loading||(a[b].loading=!0,h.m.data.GET(e.slice(0),{per_page:500},function(c){a[b].loading=!1;if(200!=c.code)d.callCallbacks(a[b].callbacks,Error(c.message));else{for(var e=[],f=0;f<c.data.length;f+=2)e.push({id:c.data[f],score:parseInt(c.data[f+1])});a[b].tidbits=e;d.callCallbacks(a[b].callbacks,null,e)}})))};d.read.user_source_places=function(e,g,f){e=["users",e,"sources",g,"places"];var b=h.m.shared.PathAPI(e.slice(0));
"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].place_ids?f(null,a[b].place_ids):(a[b].callbacks.push(f),a[b].loading||(a[b].loading=!0,h.m.data.GET(e.slice(0),{per_page:1E3},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data.place_ids,a[b].place_ids=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.user_source_tidbits=function(e,g,f){e=["users",e,"sources",g,"tidbits"];var b=h.m.shared.PathAPI(e.slice(0));"undefined"==typeof a[b]&&
(a[b]={loading:!1,callbacks:[]});a[b].ids?f(null,a[b].ids):(a[b].callbacks.push(f),a[b].loading||(a[b].loading=!0,h.m.data.GET(e.slice(0),{per_page:1E3},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].ids=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.del.user_tidbit=function(d,g){var f=h.m.shared.PathAPI(["users",d,"tidbits",g]);a[f]&&a[f].tidbit_data&&delete a[f]};d.read.user_tidbit=function(e,g,f){e=["users",e,"tidbits",g];var b=h.m.shared.PathAPI(e.slice(0));
"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].tidbit_data?f(null,a[b].tidbit_data):(a[b].callbacks.push(f),a[b].loading||(a[b].loading=!0,h.m.data.GET(e.slice(0),function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].tidbit_data=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.user_place=function(e,g,f){e=["users",e,"places",g];var b=h.m.shared.PathAPI(e.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].place_data?
f(null,a[b].place_data):(a[b].callbacks.push(f),a[b].loading||(a[b].loading=!0,h.m.data.GET(e.slice(0),function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data,a[b].place_data=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.user_place_ids=function(e,g){var f=["users",e,"places"],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].place_ids?g(null,a[b].place_ids):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=
!0,h.m.data.GET(f.slice(0),{per_page:1500},function(c){a[b].loading=!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data.place_ids,a[b].place_ids=c,d.callCallbacks(a[b].callbacks,null,c))})))};d.read.user_saves=function(e,g){var f=["users",e,"saves"],b=h.m.shared.PathAPI(f.slice(0));"undefined"==typeof a[b]&&(a[b]={loading:!1,callbacks:[]});a[b].ids?g(null,a[b].ids):(a[b].callbacks.push(g),a[b].loading||(a[b].loading=!0,h.m.data.GET(f.slice(0),{per_page:1E3},function(c){a[b].loading=
!1;200!=c.code?d.callCallbacks(a[b].callbacks,Error(c.message)):(c=c.data.ids,a[b].ids=c,d.callCallbacks(a[b].callbacks,null,c))})))};return d}();k.write=function(a,d,e,g){d=h.m.shared.PathAPI(d);if(!d)return g({code:404,message:"Not Found"});var f=h.m.main.Auth.readToken();if(f)e.auth_token=f,k.call.json(a,d,e,g);else return g({code:401,message:"Unauthorized"})};k.writeAnon=function(a,d,e,g){d=h.m.shared.PathAPI(d);if(!d)return g({code:404,message:"Not Found"});k.call.json(a,d,e,g)};return k}()});