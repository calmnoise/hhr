(function(t){function e(e){for(var i,a,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)a=r[u],s[a]&&d.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var r=n[a];0!==s[r]&&(i=!1)}i&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var i={},a={app:0},s={app:0},o=[];function r(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"28fbbd87"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"4974e2e0"}[t]+".css",s=l.p+i,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===s))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===i||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var i=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete a[t],f.parentNode.removeChild(f),n(o)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){a[t]=0}));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise(function(e,n){i=s[t]=[e,n]});e.push(i[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");o.type=i,o.request=a,n[1](o)}s[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(n,i,function(e){return t[e]}.bind(null,i));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Navbar"),n("v-content",{staticClass:"grey lighten-3 mx-3 mb-1"},[n("router-view")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{app:"","hide-overlay":"",right:"",dark:"","expand-on-hover":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",rounded:""}},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-avatar",[n("img",{staticClass:"ml-2",attrs:{src:"https://mediaaws.almasryalyoum.com/news/large/2017/07/18/687455_0.PNG"}})]),n("v-list-item-content",[n("v-list-item-title",[t._v("قطار الحرمين السريع")]),n("v-list-item-subtitle",[t._v("المدينة المنورة")])],1)],1),n("v-divider",{staticClass:"my-3"}),t._l(t.links,function(e){return n("v-list-item",{key:e.text,attrs:{color:"white",router:"",to:e.route}},[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{right:""}},[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})],2)],1),n("v-app-bar",{staticClass:"grey lighten-2",attrs:{app:"",flat:""}},[n("v-toolbar-title",{staticClass:"grey--text"},[n("span",{staticClass:"font-weight-light"},[t._v("نظام")]),n("span",[t._v("النداء")])]),n("v-spacer"),n("v-btn",{key:"logout",attrs:{text:"",color:"grey",router:"",to:"/audio"}},[n("span",[t._v("نظام النّداء")]),n("v-icon",{attrs:{right:"",id:"forcertl"}},[t._v("surround_sound")])],1)],1)],1)},r=[],l={data:function(){return{drawer:!0,links:[{text:"الرئيسية",icon:"dashboard",route:"/"},{text:"نظام النّداء",icon:"surround_sound",route:"/audio"},{text:"جدول الرحلات",icon:"calendar_today",route:"/team"}],loginstatus:!1}},methods:{nothing:function(){}}},c=l,u=n("2877"),d=n("6544"),f=n.n(d),m=n("40dc"),p=n("8336"),h=n("ce7e"),v=n("132d"),g=n("8860"),_=n("da13"),b=n("8270"),y=n("5d23"),k=n("34c3"),V=n("f774"),x=n("2fa4"),w=n("2a7f"),C=Object(u["a"])(c,o,r,!1,null,null,null),j=C.exports;f()(C,{VAppBar:m["a"],VBtn:p["a"],VDivider:h["a"],VIcon:v["a"],VList:g["a"],VListItem:_["a"],VListItemAvatar:b["a"],VListItemContent:y["a"],VListItemIcon:k["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VNavigationDrawer:V["a"],VSpacer:x["a"],VToolbarTitle:w["a"]});var O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vuetify-audio",{staticClass:"my-10",attrs:{file:"./train/"+this.tc.train+"/"+this.tc.stations+"/"+this.tc.platform+".mp3",ended:t.audioFinish}})},T=[],$=n("59bd"),A={data:function(){return{tc:{key:12342,timing:"8:00",train:"0081",stations:"j",platform:"1"},file:null,msgs:["No message now."]}},computed:function(){file="./train/".concat(this.tc.train,"/").concat(this.tc.stations,"/1.mp3")},components:{"vuetify-audio":$["a"]},methods:{audioFinish:function(){this.msgs.push("The audio finished.")}}},E=A,S=Object(u["a"])(E,O,T,!1,null,null,null),L=S.exports,I={name:"App",components:{Navbar:j,myaudioplayerX:L},data:function(){return{}}},N=I,P=n("7496"),q=n("a75b"),B=Object(u["a"])(N,a,s,!1,null,null,null),F=B.exports;f()(B,{VApp:P["a"],VContent:q["a"]});var M=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[n("h1",[t._v("الواجهة الرّئيسية")]),n("v-btn",{staticClass:"hidden-xs-only",attrs:{dark:"",fab:"",outlined:"",small:"",color:"primary"}},[n("v-icon",[t._v("email")])],1)],1)},H=[],J={data:function(){return{like_status:!1}},methods:{addLike:function(){this.like_status=!this.like_status}}},z=J,G=Object(u["a"])(z,D,H,!1,null,null,null),K=G.exports;f()(G,{VBtn:p["a"],VIcon:v["a"]});var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"mt-5 pa-5"},[n("v-form",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-select",{attrs:{items:t.items,rules:[function(t){return!!t||"هذا الحقل مطلوب!"}],label:"نوع النّداء",disabled:t.is_ready,required:""},on:{change:t.set_announce_type},model:{value:t.type_select,callback:function(e){t.type_select=e},expression:"type_select"}}),1==t.announce_type?n("v-checkbox",{attrs:{rules:[function(t){return!!t||"يجب عليك تأكيد التّعميد للإرسال!"}],label:"هل تمّ التعميد بإرسال هذا النّداء؟",disabled:t.is_ready,required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}):t._e(),1==t.announce_type||2==t.announce_type?n("div",[n("v-select",{attrs:{items:t.announcementMode,rules:[function(t){return!!t||"هذا الحقل مطلوب!"}],label:"نمط الإعدادات",disabled:t.is_ready,required:""},on:{change:t.auto_config},model:{value:t.mode_select,callback:function(e){t.mode_select=e},expression:"mode_select"}}),"يدوي"==t.mode_select?n("div",[n("v-select",{attrs:{items:t.timing,rules:[function(t){return!!t||"هذا الحقل مطلوب!"}],label:"وقت الرّحلة",disabled:t.is_ready,required:""},model:{value:t.selection_config.timing,callback:function(e){t.$set(t.selection_config,"timing",e)},expression:"selection_config.timing"}}),n("v-select",{attrs:{items:t.trains,rules:[function(t){return!!t||"هذا الحقل مطلوب!"}],label:"رقم القطار",disabled:t.is_ready,required:""},model:{value:t.selection_config.train,callback:function(e){t.$set(t.selection_config,"train",e)},expression:"selection_config.train"}}),n("v-select",{attrs:{items:t.stations,rules:[function(t){return!!t||"هذا الحقل مطلوب!"}],label:"محطات الوقوف",disabled:t.is_ready,required:""},on:{change:t.stations_select},model:{value:t.selection_config.Vstations,callback:function(e){t.$set(t.selection_config,"Vstations",e)},expression:"selection_config.Vstations"}})],1):t._e(),n("v-select",{attrs:{items:t.platform,rules:[function(t){return!!t||"هذا الحقل مطلوب!"}],label:"رقم الرّصيف",disabled:t.is_ready,required:""},model:{value:t.selection_config.platform,callback:function(e){t.$set(t.selection_config,"platform",e)},expression:"selection_config.platform"}})],1):t._e(),n("v-btn",{staticClass:"my-3",attrs:{color:"primary",disabled:t.is_ready},on:{click:t.setAnnouncement}},[n("v-icon",{attrs:{left:""}},[t._v("done_outline")]),n("span",[t._v("اعتمد الإعدادات")])],1)],1)],1)],1),t.is_ready?n("v-card",{staticClass:"mt-5 pa-3",attrs:{dark:""}},[n("v-card-title",[t._v(t._s(t.displayed_script_title))]),n("v-card-text",[t._v(t._s(t.displayed_script))]),n("vuetify-audio",{staticClass:"my-10",attrs:{flat:"",file:t.audio_file,ended:t.audioFinish}}),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"yellow lighten-3"},on:{click:function(e){t.is_ready=!1}}},[n("v-icon",[t._v("edit")]),n("span",[t._v("تعديل الإعدادات")])],1),n("v-btn",{attrs:{outlined:"",color:"red lighten-1"},on:{click:t.reset}},[n("v-icon",[t._v("add")]),n("span",[t._v("ضبط نداء جديد")])],1)],1)],1):t._e()],1)},X=[],Q={data:function(){return{script:{c1:" ضيوفنا الكرام، تمّ فتح بوابة الصّعود إلى قطار رقم ",c2:" المتّجه إلى مكة المكرمة مرورًا بـ",c3:" الرّجاء التوجه إلى رصيف رقم: ",c4:" سيكون الصعود من خلال الطابق الثّالث. ",c5:"نرجو الانتباه، نود تذكير مسافرينا الكرام بالانتباه لأمتعتهم ومتعلقاتهم الشخصية داخل المحطة.",c6:"نرجو الانتباه، ممنوع التدخين في أي جزء من المحطة. شكرًا لتعاونكم",c7:" نرجو الانتباه، هذا هو النداء الأخير للصعود إلى القطار رقم: ",c8:" المتجه إلى مكة المكرمة مرورًا ب",c9:" الرّجاء التّوجه إلى الرصيف رقم: "},script_title:{a1:" السكربت الخاص بإعلان النّداء الأول للسّاعة ",a2:" السكربت الخاص بإعلان النهائي الأول للسّاعة ",belongings:" السكربت الخاص بـنداء الأمتعة ",smoking:" السكربت الخاص بنِداء التّدخين "},is_ready:!1,tc:{key:null,timing:null,train:null,stations:null,Vstations:null,platform:null},file:null,msgs:["No message now."],valid:!0,type_select:null,mode_select:null,selection_config:{key:null,timing:null,train:null,Vstations:null,stations:null,platform:null},trains:["0081","1121"],timing:["6","8","12","15"],timingbased:[{key:"0081",timing:"8",train:"0081",stations:"kj",Vstations:"مدينة الملك عبد الله الاقتصادية و جدة"},{key:"1121",timing:"15",train:"1121",stations:"j",Vstations:"مدينة جدة"}],announcementMode:["تلقائي","يدوي"],stations:["مدينة جدة","مدينة الملك عبد الله و جدة"],platform:["1","2","3","4","5"],items:["نداء فتح البوّابات","النّداء الأخير","نداء الأمتعة","نداء التّدخين"],checkbox:!1,announce_type:null}},computed:{audio_file:function(){return 1==this.announce_type?"./train/".concat(this.tc.train,"/").concat(this.tc.stations,"/").concat(this.tc.platform,".mp3"):2==this.announce_type?null:3==this.announce_type?"./train/independent/belongings.mp3":4==this.announce_type?"./train/independent/smoking.mp3":null},get_roundedtime:function(){var t=new Date;return t.getHours()},displayed_script:function(){var t=this.script,e=this.tc,n=this.announce_type;return t=this.script,1==n?t.c1+e.train+t.c2+e.Vstations+t.c3+e.platform+t.c4:2==n?t.c7+e.train+t.c8+e.Vstations+t.c9+e.platform:3==n?t.c5:4==n?t.c6:null},displayed_script_title:function(){var t=this.script_title,e=this.tc,n=this.announce_type;return 1==n?t.a1+e.timing:2==n?t.a2+e.timing:3==n?t.belongings:4==n?t.smoking:null}},components:{"vuetify-audio":$["a"]},methods:{set_announce_type:function(){"نداء فتح البوّابات"==this.type_select?this.announce_type=1:"النّداء الأخير"==this.type_select?this.announce_type=2:"نداء الأمتعة"==this.type_select?this.announce_type=3:"نداء التّدخين"==this.type_select?this.announce_type=4:this.announce_type=null},audioFinish:function(){this.msgs.push("The audio finished."),this.tc={key:null,timing:null,train:null,stations:null,platform:null},this.$refs.form.reset(),this.is_ready=!1},validate:function(){this.$refs.form.validate()&&(this.snackbar=!0)},reset:function(){this.$refs.form.reset(),this.tc={key:null,timing:null,train:null,stations:null,platform:null},this.is_ready=!1},resetValidation:function(){this.$refs.form.resetValidation()},stations_select:function(){"مدينة الملك عبد الله و جدة"==this.selection_config.Vstations?(this.selection_config.stations="kj",console.log("تم تعيين الوجهة إلى مدينة الملك عبد الله وجدة ثم مكة")):(this.selection_config.stations="j",console.log("تم تعيين الوجهة إلى مكة مرورًا بجدة فقط!"))},auto_config:function(){var t;if("تلقائي"==this.mode_select)for(t=0;t<this.timingbased.length;t++){if(this.get_roundedtime>=this.timingbased[t].timing-1&&this.get_roundedtime<=this.timingbased[t].timing+1){this.selection_config.timing=this.timingbased[t].timing,this.selection_config.train=this.timingbased[t].train,this.selection_config.stations=this.timingbased[t].stations,this.selection_config.Vstations=this.timingbased[t].Vstations,console.log("تم الضّبط التّلقائي بنجاح على إعدادات رحلة السّاعة "+this.timingbased[t].timing);break}t==this.timingbased.length-1&&console.log("لا توجد رحلة قريبة! ")}else console.log("تم التّعيين كيدوي ")},setAnnouncement:function(){this.$refs.form.validate()?(this.tc=this.selection_config,console.log("تم ضبط الإعدادات بنجاح"),this.is_ready=!0):console.log("تأكد من ملأ المعلومات بشكل صحيح!")}}},R=Q,W=n("b0af"),Y=n("99d9"),Z=n("ac7c"),tt=n("4bd4"),et=n("b974"),nt=Object(u["a"])(R,U,X,!1,null,null,null),it=nt.exports;f()(nt,{VBtn:p["a"],VCard:W["a"],VCardActions:Y["a"],VCardText:Y["b"],VCardTitle:Y["c"],VCheckbox:Z["a"],VForm:tt["a"],VIcon:v["a"],VSelect:et["a"]}),i["a"].use(M["a"]);var at=new M["a"]({mode:"history",base:"/",routes:[{path:"/",name:"dashboard",component:K},{path:"/audio",name:"audio",component:it},{path:"/projects",name:"projects",component:function(){return n.e("about").then(n.bind(null,"acca"))}},{path:"/login",name:"login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/team",name:"team",component:function(){return n.e("about").then(n.bind(null,"0767"))}},{path:"/logout",name:"logout",component:function(){return n.e("about").then(n.bind(null,"c100"))}}]}),st=n("2f62");i["a"].use(st["a"]);var ot=new st["a"].Store({state:{},mutations:{},actions:{}}),rt=(n("d1e7"),n("ecee")),lt=n("c074"),ct=n("ad3d"),ut=n("f309");i["a"].use(ut["a"]);var dt=new ut["a"]({icons:{iconfont:"mdi"},rtl:!0,theme:{themes:{light:{primary:"#9652ff",success:"3cd1c2",info:"#ffaa2c",error:"#f83e70"},dark:{primary:"#9652ff",success:"3cd1c2",info:"#ffaa2c",error:"#f83e70"}}}});rt["c"].add(lt["a"]),i["a"].component("font-awesome-icon",ct["a"]),i["a"].config.productionTip=!1,new i["a"]({router:at,store:ot,vuetify:dt,render:function(t){return t(F)}}).$mount("#app")}});
//# sourceMappingURL=app.e287426b.js.map