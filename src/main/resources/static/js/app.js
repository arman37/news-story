webpackJsonp([1],[,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(4),r=a(1),o=a(14),i=a(43),s=a.n(i),c=a(65);a.n(c);a(11),n.a.config.productionTip=!1,n.a.use(r.y),n.a.prototype.$http=s.a.create({baseURL:"http://localhost:8080/api/"}),a(63),new n.a({el:"#q-app",router:o.a,render:function(t){return t(a(67).default)}})},function(t,e){},,,function(t,e,a){"use strict";var n=a(4),r=a(15),o=a(16),i=a(20),s=a(24),c=a(31),l=a(39);n.a.use(r.a),e.a=new r.a({routes:[{name:"feeds",path:"/",component:o.a},{name:"news_detail",path:"/stories/:id",component:i.a},{name:"news_detail_json",path:"/json/stories/:id",component:s.a},{name:"news_detail_xml",path:"/xml/stories/:id",component:c.a},{name:"create_news",path:"/stories/create/new",component:l.a},{name:"edit_news",path:"/stories/edit/:id",component:l.a}]})},,function(t,e,a){"use strict";function n(t){a(17)}var r=a(18),o=a(19),i=a(2),s=n,c=i(r.a,o.a,!1,s,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var n=a(1);e.a={components:{QCard:n.c,QCardTitle:n.g,QCardMain:n.e,QCardSeparator:n.f,QCardActions:n.d,QBtn:n.b},data:function(){return{stories:[]}},created:function(){this.fetchStories()},methods:{fetchStories:function(){var t=this;this.$http.get("/stories?sort=publishedDate,desc").then(function(e){t.stories=e.data.content})},getStory:function(t){this.$router.push({name:"news_detail",params:{id:t}})},getStoryJson:function(t){this.$router.push({name:"news_detail_json",params:{id:t}})},getStoryXml:function(t){this.$router.push({name:"news_detail_xml",params:{id:t}})}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-padding card-examples row items-start",staticStyle:{width:"40%","text-align":"left"}},t._l(t.stories,function(e){return a("div",[a("q-card",{attrs:{inline:"",color:"secondary"}},[a("q-card-title",[t._v("\n          "+t._s(e.title)+"\n          "),a("span",{slot:"subtitle"},[t._v(t._s(e.author.fullName)+" - "+t._s(e.publishedDate))])]),t._v(" "),a("q-card-main",[t._v("\n          "+t._s(e.body)+"\n        ")]),t._v(" "),a("q-card-separator"),t._v(" "),a("q-card-actions",[a("q-btn",{attrs:{flat:""},on:{click:function(a){t.getStory(e.id)}}},[t._v("HTML")]),t._v(" "),a("q-btn",{attrs:{flat:""},on:{click:function(a){t.getStoryJson(e.id)}}},[t._v("JSON")]),t._v(" "),a("q-btn",{attrs:{flat:""},on:{click:function(a){t.getStoryXml(e.id)}}},[t._v("XML")])],1)],1)],1)}))},r=[],o={render:n,staticRenderFns:r};e.a=o},function(t,e,a){"use strict";function n(t){a(21)}var r=a(22),o=a(23),i=a(2),s=n,c=i(r.a,o.a,!1,s,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var n=a(1);e.a={components:{QLayout:n.p,QToolbar:n.u,QToolbarTitle:n.v,QCard:n.c,QCardTitle:n.g,QCardMain:n.e,QCardSeparator:n.f,QCardActions:n.d,QBtn:n.b},data:function(){return{story:{author:{}}}},created:function(){this.getStory()},methods:{getStory:function(){var t=this;this.$http.get("/stories/"+this.$route.params.id).then(function(e){t.story=e.data})},back:function(){this.$router.go(-1)}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-padding card-examples row items-start",staticStyle:{width:"40%","text-align":"left"}},[a("q-card",{attrs:{inline:"",color:"secondary"}},[a("q-card-title",[t._v("\n      "+t._s(t.story.title)+"\n      "),a("span",{slot:"subtitle"},[t._v(t._s(t.story.author.fullName)+" - "+t._s(t.story.publishedDate))])]),t._v(" "),a("q-card-main",[t._v("\n      "+t._s(t.story.body)+"\n    ")]),t._v(" "),a("q-card-separator"),t._v(" "),a("q-card-actions",[a("q-btn",{attrs:{flat:""},on:{click:function(e){t.back()}}},[t._v("Back")])],1)],1)],1)},r=[],o={render:n,staticRenderFns:r};e.a=o},function(t,e,a){"use strict";function n(t){a(25)}var r=a(26),o=a(30),i=a(2),s=n,c=i(r.a,o.a,!1,s,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var n=a(27),r=a.n(n),o=a(1);e.a={components:{QLayout:o.p,QToolbar:o.u,QToolbarTitle:o.v,QCard:o.c,QCardTitle:o.g,QCardMain:o.e,QCardSeparator:o.f,QCardActions:o.d,QBtn:o.b,QField:o.l,QInput:o.o},data:function(){return{story:{author:{}}}},created:function(){this.renderStoryJson()},methods:{renderStoryJson:function(){var t=this;this.$http.get("/stories/"+this.$route.params.id).then(function(e){console.log(e),t.story=r()(e.data,null,4)})},back:function(){this.$router.go(-1)}}}},,,,function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-padding card-examples row items-start",staticStyle:{width:"40%","text-align":"left"}},[a("q-card",{attrs:{color:"neutral"}},[a("q-card-main",[a("q-field",[a("q-input",{staticStyle:{"min-width":"600px"},attrs:{type:"textarea","float-label":"JSON",value:t.story},model:{value:t.story,callback:function(e){t.story=e},expression:"story"}})],1)],1),t._v(" "),a("q-card-actions",[a("q-btn",{staticStyle:{color:"black"},attrs:{flat:""},on:{click:function(e){t.back()}}},[t._v("Back")])],1)],1)],1)},r=[],o={render:n,staticRenderFns:r};e.a=o},function(t,e,a){"use strict";function n(t){a(32)}var r=a(33),o=a(38),i=a(2),s=n,c=i(r.a,o.a,!1,s,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var n=a(1),r=a(34),o=a.n(r);e.a={components:{QLayout:n.p,QToolbar:n.u,QToolbarTitle:n.v,QCard:n.c,QCardTitle:n.g,QCardMain:n.e,QCardSeparator:n.f,QCardActions:n.d,QBtn:n.b,QField:n.l,QInput:n.o},data:function(){return{story:{author:{}}}},created:function(){this.renderStoryXml()},methods:{renderStoryXml:function(){var t=this;this.$http.get("/stories/"+this.$route.params.id,{headers:{Accept:"application/xml"}}).then(function(e){console.log(e),t.story=o()(e.data)})},back:function(){this.$router.go(-1)}}}},,,,function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-padding card-examples row items-start",staticStyle:{width:"40%","text-align":"left"}},[a("q-card",{attrs:{color:"neutral"}},[a("q-card-main",[a("q-field",[a("q-input",{staticStyle:{"min-width":"600px"},attrs:{type:"textarea","float-label":"XML",value:t.story},model:{value:t.story,callback:function(e){t.story=e},expression:"story"}})],1)],1),t._v(" "),a("q-card-actions",[a("q-btn",{staticStyle:{color:"black"},attrs:{flat:""},on:{click:function(e){t.back()}}},[t._v("Back")])],1)],1)],1)},r=[],o={render:n,staticRenderFns:r};e.a=o},function(t,e,a){"use strict";function n(t){a(40)}var r=a(41),o=a(42),i=a(2),s=n,c=i(r.a,o.a,!1,s,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var n=a(1);e.a={components:{QCard:n.c,QCardTitle:n.g,QCardMain:n.e,QCardSeparator:n.f,QCardActions:n.d,QField:n.l,QToggle:n.t,QDatetime:n.i,QOptionGroup:n.q,QInput:n.o,QSelect:n.s,QChipsInput:n.h,QRating:n.r,QBtn:n.b,QIcon:n.n},data:function(){return{story:{author:{}}}},methods:{submit:function(){var t=this;this.$http.post("/stories",this.story).then(function(e){t.$router.push({name:"feeds"})})}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-padding docs-input row justify-center"},[a("div",{staticStyle:{width:"500px","max-width":"90vw","text-align":"left"}},[a("q-card",[a("q-card-title",[t._v("\n        Create News Story\n      ")]),t._v(" "),a("q-card-main",[a("q-field",[a("q-input",{attrs:{"float-label":"Title",value:t.story.title},model:{value:t.story.title,callback:function(e){t.story.title=e},expression:"story.title"}})],1),t._v(" "),a("q-field",[a("q-input",{attrs:{type:"textarea","float-label":"Details",value:t.story.body},model:{value:t.story.body,callback:function(e){t.story.body=e},expression:"story.body"}})],1),t._v(" "),a("q-field",[a("q-input",{attrs:{type:"text","float-label":"Author",value:t.story.author.fullName},model:{value:t.story.author.fullName,callback:function(e){t.story.author.fullName=e},expression:"story.author.fullName"}})],1)],1),t._v(" "),a("q-card-separator"),t._v(" "),a("q-card-actions",[a("q-btn",{attrs:{flat:"",color:"secondary"},on:{click:function(e){t.submit()}}},[t._v("Submit")])],1)],1)],1)])},r=[],o={render:n,staticRenderFns:r};e.a=o},,,,,,,,,,,,,,,,,,,,,,function(t,e){},,function(t,e){},function(t,e,a){"use strict";function n(t){a(68)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(69),o=a(70),i=a(2),s=n,c=i(r.a,o.a,!1,s,null,null);e.default=c.exports},function(t,e){},function(t,e,a){"use strict";var n=a(1);e.a={components:{QLayout:n.p,QToolbar:n.u,QToolbarTitle:n.v,QFab:n.j,QFabAction:n.k,QTooltip:n.w,QBtn:n.b,QFixedPosition:n.m,Dialog:n.a,Toast:n.x},methods:{routeToRoot:function(){this.$router.push({name:"feeds"})},renderCreateForm:function(){this.$router.push({name:"create_news"})},removeCreateForm:function(){this.$router.go(-1)}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"q-app"}},[a("header"),t._v(" "),a("main",[a("q-layout",[a("q-toolbar",{slot:"header"},[a("q-toolbar-title",[a("q-btn",{staticClass:"header-title",attrs:{flat:""},on:{click:function(e){t.routeToRoot()}}},[t._v("News Today")])],1)],1),t._v(" "),a("router-view"),t._v(" "),a("q-fixed-position",{attrs:{corner:"bottom-right",offset:[560,16]}},[a("q-fab",{ref:"create-story",staticClass:"animate-pop",attrs:{color:"primary",direction:"up"},on:{open:function(e){t.renderCreateForm()},close:function(e){t.removeCreateForm()}}})],1)],1)],1)])},r=[],o={render:n,staticRenderFns:r};e.a=o}],[10]);