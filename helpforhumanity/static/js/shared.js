(function(b){b.app_revision_number="v179";b.s3={buckets:{images:"images.octoplace",pics:"pics.octoplace",tmppics:"tmppics.octoplace",tmp:"tmp.octoplace"},urls:{base:"https://s3.amazonaws.com",images:"//d2lvjn3gysi9k.cloudfront.net",stat:"//d5c0vpm7zz3ze.cloudfront.net/"+b.app_revision_number,pics:"//d2v8jy6rwyhlmd.cloudfront.net",tmppics:"//s3.amazonaws.com/tmppics.octoplace"}};b.lat_lng_place_name="ll";b.lat_lng_area_name="Elsewhere";b.max_comment_length=5E3;b.max_note_length=5E3;b.max_profile_description_length=
180;b.max_pic_upload_size=5;b.site_hostname="www.madewithmap.com";b.help_email='<a href="mailto:support@madewithmap.com" target="_blank" class="help_email_link">support@madewithmap.com</a>';b.contact_email_href="mailto:puno@madewithmap.com";b.terms_of_service_url="http://legal.madewithmap.com/terms-of-service/";b.privacy_policy_url="http://legal.madewithmap.com/privacy-policy/";"object"==typeof window&&"object"==typeof window.octoplace_com_config&&(b.s3.urls.stat=octoplace_com_config.static_path);
var t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),v={"%C3%8A":"E","%C3%8B":"E","%C3%8C":"I","%C3%8D":"I","%C3%8E":"I","%C3%8F":"I","%C3%9A":"U","%C3%9B":"U","%C3%9C":"U","%C3%9D":"Y","%C3%9E":"TH","%C3%9F":"ss","%E1%BA%9E":"SS","%C3%80":"A","%C3%81":"A","%C3%82":"A","%C3%83":"A","%C3%84":"A","%C3%85":"A","%C3%86":"AE","%C3%87":"C","%C3%88":"E","%C3%89":"E","%C3%90":"D","%C3%91":"N","%C3%92":"O","%C3%93":"O","%C3%94":"O","%C3%95":"O","%C3%96":"O","%C3%98":"O","%C3%99":"U",
"%C3%A0":"a","%C3%A1":"a","%C3%A2":"a","%C3%A3":"a","%C3%A4":"a","%C3%A5":"a","%C3%A6":"ae","%C3%A7":"c","%C3%A8":"e","%C3%A9":"e","%C3%AA":"e","%C3%AB":"e","%C3%AC":"i","%C3%AD":"i","%C3%AE":"i","%C3%AF":"i","%C3%B0":"d","%C3%B1":"n","%C3%B2":"o","%C3%B3":"o","%C3%B4":"o","%C3%B5":"o","%C3%B6":"o","%C3%B8":"o","%C3%B9":"u","%C3%BA":"u","%C3%BB":"u","%C3%BC":"u","%C3%BD":"y","%C3%BE":"th","%C3%BF":"y","%C2%A9":"(c)","%CE%8A":"I","%CE%8C":"O","%CE%8E":"Y","%CE%8F":"W","%CE%9A":"K","%CE%9B":"L","%CE%9C":"M",
"%CE%9D":"N","%CE%9E":"3","%CE%9F":"O","%CE%86":"A","%CE%88":"E","%CE%89":"H","%CE%90":"i","%CE%91":"A","%CE%92":"B","%CE%93":"G","%CE%94":"D","%CE%95":"E","%CE%96":"Z","%CE%97":"H","%CE%98":"8","%CE%99":"I","%CE%A0":"P","%CE%A1":"R","%CE%A3":"S","%CE%A4":"T","%CE%A5":"Y","%CE%A6":"F","%CE%A7":"X","%CE%A8":"PS","%CE%A9":"W","%CE%AA":"I","%CE%AB":"Y","%CE%AC":"a","%CE%AD":"e","%CE%AE":"h","%CE%AF":"i","%CE%B0":"y","%CE%B1":"a","%CE%B2":"b","%CE%B3":"g","%CE%B4":"d","%CE%B5":"e","%CE%B6":"z","%CE%B7":"h",
"%CE%B8":"8","%CE%B9":"i","%CE%BA":"k","%CE%BB":"l","%CE%BC":"m","%CE%BD":"n","%CE%BE":"3","%CE%BF":"o","%CF%8A":"i","%CF%8B":"y","%CF%8C":"o","%CF%8D":"y","%CF%8E":"w","%CF%80":"p","%CF%81":"r","%CF%82":"s","%CF%83":"s","%CF%84":"t","%CF%85":"y","%CF%86":"f","%CF%87":"x","%CF%88":"ps","%CF%89":"w","%C3%9C":"U","%C3%87":"C","%C3%96":"O","%C3%A7":"c","%C3%B6":"o","%C3%BC":"u","%C4%9E":"G","%C4%9F":"g","%C4%B0":"I","%C4%B1":"i","%C5%9E":"S","%C5%9F":"s","%D0%9A":"K","%D0%9B":"L","%D0%9C":"M","%D0%9D":"N",
"%D0%9E":"O","%D0%9F":"P","%D0%81":"Yo","%D0%90":"A","%D0%91":"B","%D0%92":"V","%D0%93":"G","%D0%94":"D","%D0%95":"E","%D0%96":"Zh","%D0%97":"Z","%D0%98":"I","%D0%99":"J","%D0%A0":"R","%D0%A1":"S","%D0%A2":"T","%D0%A3":"U","%D0%A4":"F","%D0%A5":"H","%D0%A6":"C","%D0%A7":"Ch","%D0%A8":"Sh","%D0%A9":"Sh","%D0%AA":"","%D0%AB":"Y","%D0%AC":"","%D0%AD":"E","%D0%AE":"Yu","%D0%AF":"Ya","%D0%B0":"a","%D0%B1":"b","%D0%B2":"v","%D0%B3":"g","%D0%B4":"d","%D0%B5":"e","%D0%B6":"zh","%D0%B7":"z","%D0%B8":"i","%D0%B9":"j",
"%D0%BA":"k","%D0%BB":"l","%D0%BC":"m","%D0%BD":"n","%D0%BE":"o","%D0%BF":"p","%D1%8A":"","%D1%8B":"y","%D1%8C":"","%D1%8D":"e","%D1%8E":"yu","%D1%8F":"ya","%D1%80":"r","%D1%81":"s","%D1%82":"t","%D1%83":"u","%D1%84":"f","%D1%85":"h","%D1%86":"c","%D1%87":"ch","%D1%88":"sh","%D1%89":"sh","%D1%91":"yo","%D0%84":"Ye","%D0%86":"I","%D0%87":"Yi","%D1%94":"ye","%D1%96":"i","%D1%97":"yi","%D2%90":"G","%D2%91":"g","%C4%8C":"C","%C4%8D":"c","%C4%8E":"D","%C4%8F":"d","%C4%9A":"E","%C4%9B":"e","%C5%87":"N",
"%C5%88":"n","%C5%98":"R","%C5%99":"r","%C5%A0":"S","%C5%A1":"s","%C5%A4":"T","%C5%A5":"t","%C5%AE":"U","%C5%AF":"u","%C5%BD":"Z","%C5%BE":"z","%C3%93":"o","%C3%B3":"o","%C4%84":"A","%C4%85":"a","%C4%86":"C","%C4%87":"c","%C4%98":"e","%C4%99":"e","%C5%9A":"S","%C5%9B":"s","%C5%81":"L","%C5%82":"l","%C5%83":"N","%C5%84":"n","%C5%B9":"Z","%C5%BA":"z","%C5%BB":"Z","%C5%BC":"z","%C4%8C":"C","%C4%8D":"c","%C4%80":"A","%C4%81":"a","%C4%92":"E","%C4%93":"e","%C4%A2":"G","%C4%A3":"g","%C4%AA":"i","%C4%AB":"i",
"%C4%B6":"k","%C4%B7":"k","%C4%BB":"L","%C4%BC":"l","%C5%85":"N","%C5%86":"n","%C5%A0":"S","%C5%A1":"s","%C5%AA":"u","%C5%AB":"u","%C5%BD":"Z","%C5%BE":"z","%C4%96":"E","%C4%97":"e","%C4%AE":"I","%C4%AF":"i","%C5%B2":"U","%C5%B3":"u"},u=function(a){a=b.transliterate(a);return a.replace(/\s/g,"-").replace(/&/g,"and").toLowerCase().replace(/[^a-z0-9\-]/g,"").replace(/-{2,}/g,"-").slice(0,30)};b.base62ToDecimal=function(a){for(var d=0,c=0;c<a.length;c++)var b=t.indexOf(a[c]),d=d+b*Math.pow(62,a.length-
c-1);return d};b.base64ToBase64URL=function(a){return a.replace(/[+]/g,"-").replace(/[/]/g,"_").replace(/[=]/g,"")};b.base64URLToBase64=function(a){return a.replace(/[-]/g,"+").replace(/[_]/g,"/")};b.convertMarkupToHTML=function(a){var d={escapeAtCharacters:function(a){return a.replace(/@/g,"<<<at>>>")},replaceAtCharacters:function(a){return a.replace(/<<<at>>>/g,"@")},escapeHashCharacters:function(a){return a.replace(/#/g,"<<<hash>>>")},replaceHashCharacters:function(a){return a.replace(/<<<hash>>>/g,
"#")},escapeBangCharacters:function(a){return a.replace(/!/g,"<<<bang>>>")},replaceBangCharacters:function(a){return a.replace(/<<<bang>>>/g,"!")},escapeDotcomCharacters:function(a){return a.replace(/\.com/g,"<<<dotcom>>>")},replaceDotcomCharacters:function(a){return a.replace(/<<<dotcom>>>/g,".com")}};a=b.escapeHTML(a);a=a.replace(b.RegExp.url,function(a){var b="";0!=a.search(/^https?:\/\//)&&(b="http://");a=d.escapeHashCharacters(a);a=d.escapeBangCharacters(a);a=d.escapeDotcomCharacters(a);a=d.escapeAtCharacters(a);
return'<a href="'+b+a+'" class="url" target="_blank">'+a+"</a>"});a=a.replace(b.RegExp.short_url,function(a){a=d.escapeHashCharacters(a);a=d.escapeDotcomCharacters(a);a=d.escapeAtCharacters(a);return'<a href="http://'+a.slice(1)+'" class="url" target="_blank">'+a+"</a>"});a=a.replace(b.RegExp.nakeddotcom,function(a){var b=d.escapeHashCharacters(a);d.escapeAtCharacters(b);return'<a href="http://'+a+'" class="url" target="_blank">'+a+"</a>"});a=a.replace(b.RegExp.hashtag,function(a){return'<a class="hashtag autosuggestable">'+
a+"</a>"});a=a.replace(b.RegExp.atmention,function(a){return'<a class="atmention autosuggestable">'+a+"</a>"});a=d.replaceHashCharacters(a);a=d.replaceBangCharacters(a);a=d.replaceDotcomCharacters(a);return a=d.replaceAtCharacters(a)};b.prettyDecimalDegreesHTML=function(a,d){a=parseFloat(a);d=parseFloat(d);var c="&deg; N",b="&deg; E";0>a&&(a=-a,c="&deg; S");0>d&&(d=-d,b="&deg; W");var f=parseFloat(a.toFixed(6)),e=parseFloat(d.toFixed(6));return f+c+", "+e+b};b.prettyPlaceNameHTML=function(a){var d=
a.name;d?d==b.lat_lng_place_name&&(d=a.address?a.address:b.prettyDecimalDegreesHTML(a.lat,a.lng)):(d=a.address)||(d=b.prettyDecimalDegreesHTML(a.lat,a.lng));return d};b.decimalToBase62=function(a){for(var d="";1<=a;){var c=Math.floor(a/62),d=t[a-62*c]+d;a=c}return d};b.escapeHTML=function(a){return"string"!=typeof a?"":a.replace(/&/g,"&amp;").replace(/[<]/g,"&lt;").replace(/[>]/g,"&gt;")};b.extractAtmentions=function(a){var d=a.match(b.RegExp.atmention)||[];a={};for(var c=0;c<d.length;c++)a[d[c].slice(1)]=
!0;d=[];for(username in a)a=b.validateUsername(username),a.valid&&d.push(a.normalized);return d};b.extractHashTags=function(a){var d=a.match(b.RegExp.hashtag)||[];a={};for(var c=0;c<d.length;c++)a[d[c].slice(1)]=!0;d=[];for(word in a)d.push(word.toLowerCase());return d};b.extractPlaceName=function(a,d){d||(d={});var c=a.split("-").slice(0,-1);if(d.format_raw)return c.join("-");if(1==c.length&&c[0]==b.lat_lng_place_name)return c=b.getLatLngFromPlaceId(a),d.format_html?b.prettyDecimalDegreesHTML(c.lat,
c.lng):c.lat.toFixed(6)+", "+c.lng.toFixed(6);for(var g=0;g<c.length;g++){var f=c[g];c[g]=f.slice(0,1).toUpperCase()+f.slice(1)}return c.join(" ")};b.extractPlaceNameHTML=function(a){return b.extractPlaceName(a,{format_html:!0})};b.extractPlaceNameRaw=function(a){return b.extractPlaceName(a,{format_raw:!0})};b.generateId=function(a){return u(a)};b.generateSourceId=function(a){return b.getSourceWords(a,{keep_tld:!0}).join("-")};b.generateNormalizedName=function(a){a=b.transliterate(a);return a.replace(/&/g,
"and").replace(/[^a-z0-9\- ]/gi,"")};b.generateNormalizedUsername=function(a){return a.toLowerCase().replace(/[^a-z0-9\-_]/gi,"")};b.generatePlaceId=function(a,d,c,g){g||(g={});a=u(a);d=b.Geohasher.encode(d,c);g.for_google_place&&(d=d.slice(0,9));return a+"-"+d};b.generatePlaceIdForGooglePlace=function(a,d,c){return b.generatePlaceId(a,d,c,{for_google_place:!0})};b.getAreaFromGooglePlace=function(a){var d,c,b,f,e,m,p;if(a.address_components)for(var r=0;r<a.address_components.length;r++){var n=a.address_components[r].types,
h=a.address_components[r].long_name||a.address_components[r].short_name;if(n)for(var k=0;k<n.length;k++)switch(n[k]){case "neighborhood":d=h;break;case "locality":c=h;break;case "sublocality":b=h;break;case "administrative_area_level_1":f=h;break;case "administrative_area_level_2":e=h;break;case "administrative_area_level_3":m=h;break;case "country":p=h}}a=d||b||"";c=c||"";f=f||e||m||"";e="";""!=a?(e=a,""!=c&&c!=a?e+=", "+c:""!=f?e+=", "+f:p&&(e+=", "+p)):""!=c?(e=c,""!=f?e+=", "+f:p&&(e+=", "+p)):
""!=f?(e=f,p&&(e+=", "+p)):p&&(e=p);return e};b.getLatLngFromPlaceId=function(a){a=a.split("-").slice(-1)[0];a=b.Geohasher.decode(a);return{lat:a.latitude[2],lng:a.longitude[2]}};b.Geohasher=function(){function a(a,c,d){c&d?a[0]=(a[0]+a[1])/2:a[1]=(a[0]+a[1])/2}function d(a,c){a=a.toLowerCase();var r=a.charAt(a.length-1),n=a.length%2?"odd":"even",h=a.substring(0,a.length-1);-1!=e[c][n].indexOf(r)&&(h=d(h,c));return h+b[f[c][n].indexOf(r)]}var c=[16,8,4,2,1],b="0123456789bcdefghjkmnpqrstuvwxyz",f=
{right:{even:"bc01fg45238967deuvhjyznpkmstqrwx"},left:{even:"238967debc01fg45kmstqrwxuvhjyznp"},top:{even:"p0r21436x8zb9dcf5h7kjnmqesgutwvy"},bottom:{even:"14365h7k9dcfesgujnmqp0r2twvyx8zb"}},e={right:{even:"bcfguvyz"},left:{even:"0145hjnp"},top:{even:"prxz"},bottom:{even:"028b"}};f.bottom.odd=f.left.even;f.top.odd=f.right.even;f.left.odd=f.bottom.even;f.right.odd=f.top.even;e.bottom.odd=e.left.even;e.top.odd=e.right.even;e.left.odd=e.bottom.even;e.right.odd=e.top.even;return{adjacent:d,decode:function(d){var e=
1,f=[],n=[];f[0]=-90;f[1]=90;n[0]=-180;n[1]=180;for(var h=0;h<d.length;h++)for(var k=b.indexOf(d[h]),l=0;5>l;l++){var s=c[l];e?a(n,k,s):a(f,k,s);e=!e}f[2]=(f[0]+f[1])/2;n[2]=(n[0]+n[1])/2;return{latitude:f,longitude:n}},encode:function(a,d){if(90<a||-90>a||180<d||-180>d)return!1;var f=1,e=[],h=[],k=0,l=0,s="";e[0]=-90;e[1]=90;h[0]=-180;for(h[1]=180;12>s.length;){if(f){var q=(h[0]+h[1])/2;d>q?(l|=c[k],h[0]=q):h[1]=q}else q=(e[0]+e[1])/2,a>q?(l|=c[k],e[0]=q):e[1]=q;f=!f;4>k?k++:(s+=b[l],l=k=0)}return s}}}();
b.getSourceParts=function(a){for(var d={},c=[],b=a.split("/"),f=[];1<b.length;)if(a=b.pop())c.push(a),f.push(a);d.id=f[f.length-1];b=b[0].split(".");2==b[b.length-1]&&b.pop();b.pop();"www"==b[0]&&b.shift();d.service=b[b.length-1];for(1<b.length?{wordpress:!0,blogspot:!0,tumblr:!0,blogs:!0}[d.service]&&b.pop():1==b.length&&{instagram:!0}[d.service]&&d.id&&b.pop();0<b.length;)(a=b.pop())&&c.push(a);for(a="";0<c.length;)a+=c.shift(),0<c.length&&(a+=" ");d.name=a;return d};b.getSourceWords=function(a,
b){"undefined"==typeof b&&(b={});for(var c=[],g=a.split("/");1<g.length;){var f=g.pop();f&&c.unshift(f)}g=g[0].split(".");2==g[g.length-1]&&g.pop();b.keep_tld||g.pop();for("www"==g[0]&&g.shift();0<g.length;)(f=g.pop())&&c.unshift(f);return c};b.parseId=function(a){var b={};11==a.length||22==a.length?b.pic_id=a:18==a.length&&(b.creator=a.slice(0,11),b.tidbit_id=a.slice(11));return b};b.parseLatLng=function(a){var b={};a=a.replace(/\u2032/g,"'");a=a.replace(/\u2033/g,'"');if(-1!=a.search(/[^0-9,\.\-\s\u00B0'"NESW]/i))return b;
var c=a.replace(/^\s+|\s+$/g,"");a=[];if(-1!=c.search(/\u00B0/))if(-1!=c.search(/'/)){c=c.replace(/\s*(\u00B0|'|")\s*/ig,function(a,b){return b});if(-1!=c.search(/,/))for(a=c.split(","),c=0;c<a.length;c++)a[c]=a[c].replace(/\s/g,"");else a=c.split(/\s+/);for(c=0;c<a.length;c++){var g=a[c],f=1;-1!=g.search(/[SW]/i)&&(f=-1);for(var g=g.replace(/[NESW]/i,""),g=g.split(/[\u00B0'"]/i),e=0,m=0;m<g.length;m++){var p=parseFloat(g[m]);isNaN(p)||(e+=p/Math.pow(60,m))}a[c]=e*f}}else{c=c.replace(/[\u00B0]/g,
"");if(-1!=c.search(/,/))for(a=c.split(","),c=0;c<a.length;c++)a[c]=a[c].replace(/\s/g,"");else c=c.replace(/\s+([NESW])/ig,function(a,b){return b}),a=c.split(/\s+/);for(c=0;c<a.length;c++)e=a[c],-1!=e.search(/[SW]/i)&&(e="-"+e),e=e.replace(/[NESW]/i,""),a[c]=e}else if(-1==c.search(/[^0-9,\.\-\s]/))if(-1!=c.search(/,/))for(a=c.split(","),c=0;c<a.length;c++)a[c]=a[c].replace(/\s/g,"");else a=c.split(/\s+/);else if(-1==c.search(/[^0-9,\.\-\sNESW]/i)){if(-1!=c.search(/,/))for(a=c.split(","),c=0;c<a.length;c++)a[c]=
a[c].replace(/\s/g,"");else c=c.replace(/\s+([NESW])/ig,function(a,b){return b}),a=c.split(/\s+/);for(c=0;c<a.length;c++)e=a[c],-1!=e.search(/[SW]/i)&&(e="-"+e),e=e.replace(/[NESW]/i,""),e=e.replace(/--/,"-"),a[c]=e}"undefined"!=typeof a[0]&&(c=parseFloat(a[0]),isNaN(c)||(b.lat=c));"undefined"!=typeof a[1]&&(a=parseFloat(a[1]),isNaN(a)||(b.lng=a));return b};b.PicFile=function(){function a(a,b){return b?a+"."+b+".jpg":a+".jpg"}function d(b,c,d){return{get:function(e){e=a("pic-"+e,d);var k=!1;if(f[e])var l=
f[e],k=!0;else l=g+"/"+e;return{filename:e,url:l,width:b,height:c,hotlink:k}},set:function(b,c){var e=a("pic-"+b,d);f[e]=c},size:function(){return{width:b,height:c}}}}function c(b,c,d){return{get:function(e,k){var l;l=a("user-"+e+"-"+(k||0),d);var m=!1;if(f["user-"+e])var q=f["user-"+e],m=!0;else q=g+"/"+l;return{filename:l,url:q,width:b,height:c,hotlink:m}},set:function(a,b){f["user-"+a]=b},size:function(){return{width:b,height:c}}}}var g=b.s3.urls.pics;if("object"==typeof process&&"object"==typeof process.env){if("staging"==
process.env.ENVIRONMENT||"dev"==process.env.ENVIRONMENT||"local"==process.env.ENVIRONMENT)g=b.s3.urls.tmppics}else"object"==typeof window&&"object"==typeof window.location&&"production"!=octoplace_com_config.env&&(g=b.s3.urls.tmppics);var f={},e={card:{w:240,h:240},thumbnail:{w:90,h:90},smallest:{w:30,h:30}},m={max:{w:1024,h:1024},detail:{w:400,h:400},card:{w:250,h:250},thumbnail:{w:90,h:90}};return{parseFilename:function(a){var b={};0==a.search(/^user-/)?(a=a.replace(/^user-/,""),b.user_id=a.slice(0,
11),b.size=a.split(".")[1]):0==a.search(/^pic-/)&&(a=a.replace(/^pic-/,""),a=a.split("."),b.pic_id=a[0],b.size=a[1]);return b},pic:function(){var a={};for(type in m)a[type]=d(m[type].w,m[type].h,type);return a}(),user:function(){var a={};for(type in e)a[type]=c(e[type].w,e[type].h,type);return a}(),user_placeholder:{url:b.s3.urls.images+"/avatar-placeholder-v3.png",timestamp:"z"}}}();b.RegExp={atmention:/@[0-9a-z_-]+/gi,hashtag:/#[0-9a-z_-]*[a-z]+[0-9a-z_-]*/gi,nakeddotcom:/\b[0-9a-z\.-]+\.com(\/[^\s]+)*\b/gi,
pic_upload_content_types:/(image\/jpeg|image\/png|image\/gif)/i,short_url:/!\S+[.]{1}\S+\w{1}/g,url:/\b(https?:\/\/|www\.)[^\s]{3,}/gi};b.RegExpEsc=function(a){return a.replace(/[\-\/\\^$*+?.()|[\]{}]/g,"\\$&")};b.RouteRoot=function(){return{api:function(){return"/i"},app:function(){return"/a"},admin:function(){return"/ad"}}}();b.RouteRootNouns=function(){var a=b.RouteRoot.api().slice(1),d=b.RouteRoot.app().slice(1),c=b.RouteRoot.admin().slice(1);return{api:function(){return a},app:function(){return d},
admin:function(){return c}}}();b.Route=function(){return{admin:function(){return"/admin"},"atfollowing-places":function(a){return a?"/atfollowing-places/"+a:"/atfollowing-places"},"atfollowing-places-recent":function(a){return a?"/atfollowing-places-recent/"+a:"/atfollowing-places-recent"},atmentions:function(a){return a?"/atmentions/"+a:"/atmentions"},"blitline-error":function(){return"/blitline-error"},bookmarklet:function(){return"/bookmarklet"},comments:function(a){return a?"/comments/"+a:"/comments"},
"confirm-email":function(a){return a?"/confirm-email/"+a:"/confirm-email"},"followers-users":function(a){return a?"/followers-users/"+a:"/followers-users"},"following-users":function(a){return a?"/following-users/"+a:"/following-users"},"following-sources":function(a){return a?"/following-sources/"+a:"/following-sources"},"google-place-search":function(){return"/google-place-search"},hashtags:function(a){return a?"/hashtags/"+a:"/hashtags"},help:function(a){return a?"/help/"+a:"/help"},"home-page-featured":function(){return"/home-page-featured"},
"last-places":function(){return"/last-places"},likes:function(a){return a?"/likes/"+a:"/likes"},login:function(){return"/login"},"log-client-error":function(a){return a?"/log-client-error/"+a:"/log-client-error"},notifications:function(a){return a?"/notifications/"+a:"/notifications"},pics:function(a){return a?"/pics/"+a:"/pics"},"pic-upload-request":function(a){return a?"/pic-upload-request/"+a:"/pic-upload-request"},"profile-pic-upload-request":function(a){return a?"/profile-pic-upload-request/"+
a:"/profile-pic-upload-request"},places:function(a){return a?"/places/"+a:"/places"},"places-custom":function(){return"/places-custom"},"places-recent":function(a){return a?"/places-recent/"+a:"/places-recent"},resaves:function(){return"/resaves"},"resaves-pic":function(){return"/resaves-pic"},"resaves-tidbit":function(){return"/resaves-tidbit"},"reset-password":function(a){return a?"/reset-password/"+a:"/reset-password"},saves:function(a){return a?"/saves/"+a:"/saves"},sessions:function(a){return a?
"/sessions/"+a:"/sessions"},settings:function(a){return a?"/settings/"+a:"/settings"},signup:function(a){return a?"/signup/"+a:"/signup"},sources:function(a){return a?"/sources/"+a:"/sources"},tidbits:function(a){return a?"/tidbits/"+a:"/tidbits"},uploads:function(a){return a?"/uploads/"+a:"/uploads"},urls:function(a){return a?"/urls/"+a:"/urls"},users:function(a){return a?"/users/"+a:"/users"},usernames:function(a){return a?"/usernames/"+a:"/usernames"},"word-beginnings":function(a){return a?"/word-beginnings/"+
a:"/word-beginnings"},words:function(a){return a?"/words/"+a:"/words"}}}();b.Path=function(a,d){var c="";for(d&&(c+=d);0<a.length;){var g=a.shift();if(!b.Route[g])return!1;var f=a.shift(),c=c+b.Route[g](f)}return c};b.PathAPI=function(a){return b.Path(a,b.RouteRoot.api())};b.PathApp=function(a){return b.Path(a,b.RouteRoot.app())};b.PathUsername=function(a){var d=a.shift();a=b.Path(a);return"/"+d+a};b.transliterate=function(a){for(var b="",c=0;c<a.length;c++){var g=a[c],f="";try{f=encodeURIComponent(g)}catch(e){}b+=
v[f]||g}return b};b.UserSubscriptionsFields=function(){return{subscribed_to_notifications:"Daily Notifications"}};b.validEmailLength=function(){return{min:3,max:254}};b.validateEmail=function(a){var d=b.validEmailLength(),c="minimum "+d.min+" characters",g="maximum "+d.max+" characters";return 0==a.length?{invalid:!0,message:""}:a.length<d.min?{invalid:!0,message:c}:a.length>d.max?{invalid:!0,message:g}:-1==a.search(/\S+@\S+/)?{invalid:!0,message:"is that an email address?"}:{valid:!0}};b.validUsernameLength=
function(){return{min:3,max:50}};b.validateUsername=function(a){var d=b.validUsernameLength(),c=d.min+" character minimum",g=d.max+" character maximum",f=b.generateNormalizedUsername(a);if(0==f.length)return{invalid:!0,message:""};if(f.length<d.min)return{invalid:!0,message:c};if(f.length>d.max)return{invalid:!0,message:g};if(-1!=a.search(/[^0-9a-z_\-]/gi))return{invalid:!0,message:"only a-z, 0-9, -, and _"};if("-"==f[0]||"_"==f[0])return{invalid:!0,message:"start with a-z, 0-9"};a=["following","followers"];
for(d=0;d<a.length;d++)if(f==a[d])return{invalid:!0,message:"that word is reserved"};return{valid:!0,normalized:f}};b.validPasswordLength=function(){return{min:8,max:55}};b.validatePassword=function(a){var d=b.validPasswordLength(),c="minimum "+d.min+" characters",g="maximum "+d.max+" characters";return 0==a.length?{invalid:!0,message:""}:a.length<d.min?{invalid:!0,message:c}:a.length>d.max?{invalid:!0,message:g}:{valid:!0}}})("undefined"===typeof exports?this.octoplace_com.m.shared={}:exports);