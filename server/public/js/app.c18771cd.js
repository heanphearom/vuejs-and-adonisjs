(function(t){function e(e){for(var o,r,s=e[0],i=e[1],u=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a={app:0},c=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-07894652":"61423abd","chunk-09d95d10":"53c1ac99","chunk-2d215fa4":"d124e57c","chunk-2d22d746":"1ffb7069"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-07894652":1,"chunk-09d95d10":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-07894652":"9deb4d24","chunk-09d95d10":"9deb4d24","chunk-2d215fa4":"31d6cfe0","chunk-2d22d746":"31d6cfe0"}[t]+".css",a=i.p+o,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===o||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[t],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"2f1b":function(t,e,n){"use strict";var o=n("8d28"),r=n.n(o);r.a},4639:function(t,e,n){"use strict";var o=n("6e2b"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("31bd"),r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Toolbar"),n("v-main",[n("router-view")],1)],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"green",dark:""}},[n("v-toolbar-title",{staticClass:"mr-4"},[t._v("VUE TODO")]),n("v-toolbar-items",[t.isLoggedIn?n("v-btn",{attrs:{text:""}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-playlist-check")]),t._v(" projects ")],1):t._e()],1),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t.isLoggedIn?t._e():n("v-btn",{attrs:{text:"",to:"/register"}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-account-box")]),t._v(" register ")],1),t.isLoggedIn?t._e():n("v-btn",{attrs:{text:"",to:"/login"}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-fingerprint")]),t._v(" login ")],1),t.isLoggedIn?n("v-btn",{attrs:{text:"",to:"/logout"},on:{click:t.logout}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-exit-to-app")]),t._v(" logout ")],1):t._e()],1)],1)},i=[],u=n("5530"),l=n("2f62"),d={computed:Object(u["a"])({},Object(l["c"])("authentication",["isLoggedIn"])),methods:Object(u["a"])({},Object(l["b"])("authentication",["logout"]))},f=d,p=n("2877"),m=n("6544"),v=n.n(m),h=n("40dc"),k=n("8336"),g=n("132d"),j=n("2fa4"),b=n("2a7f"),P=Object(p["a"])(f,s,i,!1,null,null,null),E=P.exports;v()(P,{VAppBar:h["a"],VBtn:k["a"],VIcon:g["a"],VSpacer:j["a"],VToolbarItems:b["a"],VToolbarTitle:b["b"]});var _={name:"App",components:{Toolbar:E}},T=_,w=(n("034f"),n("7496")),y=n("f6c4"),x=Object(p["a"])(T,a,c,!1,null,null,null),O=x.exports;v()(x,{VApp:w["a"],VMain:y["a"]});var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"white elevation-2"},[n("v-toolbar",{attrs:{flat:"",dense:"",dark:"",color:"green"}},[n("v-toolbar-title",[t._v(t._s(t.title))])],1),n("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[t._t("default",[t._v("No slot content defined.")])],2)],1)},N=[],M={props:{title:String}},L=M,V=n("71d9"),$=Object(p["a"])(L,C,N,!1,null,null,null),I=$.exports;v()($,{VToolbar:V["a"],VToolbarTitle:b["b"]});n("d3b7");var R=n("8c4f"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",[n("v-flex",{attrs:{xs4:""}},[n("Projects")],1),t.currentProject?n("v-flex",{attrs:{xs8:""}},[n("Tasks")],1):t._e()],1)],1)},S=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Panel",{attrs:{title:"Projects"}},[t._l(t.projects,(function(e){return n("div",{key:e.id,staticClass:"project mt-2 pl-4"},[n("EditableRecord",{attrs:{isEditMode:e.isEditMode,title:e.title},on:{"on-input":function(n){return t.setProjectTitle({project:e,title:n})},"on-click":function(n){return t.projectClicked(e)},"on-edit":function(n){return t.setEditMode(e)},"on-save":function(n){return t.saveProject(e)},"on-delete":function(n){return t.deletProject(e)}}})],1)})),n("CreateRecord",{attrs:{placeholder:"My project name...",value:t.newProjectName},on:{"on-input":t.setNewProjectName,create:t.createProject}})],2)},B=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"mt-4",attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"pl-4",attrs:{xs8:""}},[n("v-text-field",{attrs:{placeholder:t.placeholder,value:t.value},on:{input:function(e){return t.$emit("on-input",e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("create")}}})],1),n("v-flex",{staticClass:"text-xs-right",attrs:{xs4:""}},[n("v-btn",{staticClass:"ml-5 mt-2",attrs:{color:"green",dark:""},on:{click:function(e){return t.$emit("create")}}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-plus-circle")]),t._v(" Create ")],1)],1)],1)},U=[],q={props:["placeholder","value"]},J=q,z=n("0e8f"),H=n("a722"),K=n("8654"),G=Object(p["a"])(J,D,U,!1,null,null,null),Q=G.exports;v()(G,{VBtn:k["a"],VFlex:z["a"],VIcon:g["a"],VLayout:H["a"],VTextField:K["a"]});var W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-left",attrs:{xs9:""}},[t._t("default"),t.isEditMode?t._e():n("span",{on:{click:function(e){return t.$emit("on-click")}}},[t._v(" "+t._s(t.title)+" ")]),t.isEditMode?n("v-text-field",{attrs:{autofocus:"",value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("on-save")},input:function(e){return t.$emit("on-input",e)}}}):t._e()],2),n("v-flex",{staticClass:"text-xs-right",attrs:{xs3:""}},[t.isEditMode?t._e():n("v-icon",{on:{click:function(e){return t.$emit("on-edit")}}},[t._v(" mdi-pencil ")]),t.isEditMode?n("v-icon",{on:{click:function(e){return t.$emit("on-save")}}},[t._v(" mdi-check ")]):t._e(),n("v-icon",{on:{click:function(e){return t.$emit("on-delete")}}},[t._v(" mdi-delete ")])],1)],1)},X=[],Y={props:["isEditMode","title"]},Z=Y,tt=Object(p["a"])(Z,W,X,!1,null,null,null),et=tt.exports;v()(tt,{VFlex:z["a"],VIcon:g["a"],VLayout:H["a"],VTextField:K["a"]});var nt={mounted:function(){this.fetchProjects()},components:{CreateRecord:Q,EditableRecord:et},computed:Object(u["a"])({},Object(l["e"])("projects",["newProjectName","projects"])),methods:Object(u["a"])(Object(u["a"])(Object(u["a"])({projectClicked:function(t){this.setCurrentProject(t),this.fetchTasksForProject(t)}},Object(l["d"])("projects",["setNewProjectName","setEditMode","setProjectTitle","setCurrentProject"])),Object(l["b"])("projects",["createProject","fetchProjects","saveProject","deletProject"])),Object(l["b"])("tasks",["fetchTasksForProject"]))},ot=nt,rt=(n("4639"),Object(p["a"])(ot,F,B,!1,null,"14e8a236",null)),at=rt.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Panel",{staticClass:"ml-4",attrs:{title:"Tasks"}},[t._l(t.tasks,(function(e){return n("div",{key:e.id,staticClass:"task mt-2 pl-4"},[n("EditableRecord",{attrs:{isEditMode:e.isEditMode,title:e.description},on:{"on-input":function(n){return t.setTaskDescription({task:e,description:n})},"on-edit":function(n){return t.setEditMode(e)},"on-save":function(n){return t.saveTask(e)},"on-delete":function(n){return t.deleteTask(e)}}},[n("v-icon",{on:{click:function(n){return t.checkClicked(e)}}},[t._v(" "+t._s(e.complated?"mdi-checkbox-marked":"mdi-checkbox-blank-outline")+" ")])],1)],1)})),n("CreateRecord",{attrs:{placeholder:"I need to...",value:t.newTaskName},on:{"on-input":t.setNewTaskName,create:t.createTask}})],2)},st=[],it={components:{CreateRecord:Q,EditableRecord:et},computed:Object(u["a"])({},Object(l["e"])("tasks",["tasks","newTaskName"])),methods:Object(u["a"])(Object(u["a"])(Object(u["a"])({},Object(l["b"])("tasks",["createTask","deleteTask","saveTask"])),Object(l["d"])("tasks",["setNewTaskName","setTaskDescription","setEditMode","toggleComplated"])),{},{checkClicked:function(t){this.toggleComplated(t),this.saveTask(t)}})},ut=it,lt=(n("2f1b"),Object(p["a"])(ut,ct,st,!1,null,"3e017429",null)),dt=lt.exports;v()(lt,{VIcon:g["a"]});var ft={components:{Projects:at,Tasks:dt},mounted:function(){if(!this.isLoggedIn)return jt.push("/login")},computed:Object(u["a"])(Object(u["a"])({},Object(l["c"])("authentication",["isLoggedIn"])),Object(l["e"])("projects",["currentProject"]))},pt=ft,mt=n("a523"),vt=Object(p["a"])(pt,A,S,!1,null,null,null),ht=vt.exports;v()(vt,{VContainer:mt["a"],VFlex:z["a"],VLayout:H["a"]}),r["a"].use(R["a"]);var kt=[{path:"/",name:"Projects",component:ht},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-07894652").then(n.bind(null,"73cf"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-09d95d10").then(n.bind(null,"a55b"))}},{path:"/logout",name:"Logout",component:function(){return n.e("chunk-2d215fa4").then(n.bind(null,"c100"))}}],gt=new R["a"]({mode:"history",base:"/",routes:kt}),jt=gt,bt=n("0e44"),Pt=n("bc3a"),Et=n.n(Pt),_t=function(){return Et.a.create({baseURL:xt.state.baseUrl,timeout:5e3,headers:{Authorization:"Bearer ".concat(xt.state.authentication.token)}})},Tt={namespaced:!0,state:{registerEmail:"hello",registerPassword:"world",registerError:null,loginEmail:"hello",loginPassword:"world",loginError:null,token:null},getters:{isLoggedIn:function(t){return!!t.token}},mutations:{setToken:function(t,e){t.token=e},setRegisterEmail:function(t,e){t.registerEmail=e},setRegisterPassword:function(t,e){t.registerPassword=e},setRegisterError:function(t,e){t.registerError=e},setLoginEmail:function(t,e){t.loginEmail=e},setLoginPassword:function(t,e){t.loginPassword=e},setLoginError:function(t,e){t.loginError=e}},actions:{logout:function(t){var e=t.commit;e("setToken",null),jt.push("/login")},register:function(t){var e=t.commit,n=t.state;return e("setRegisterError",null),_t().post("/auth/register",{email:n.registerEmail,password:n.registerPassword}).then((function(t){var n=t.data;e("setToken",n.token),jt.push("/")})).catch((function(){e("setRegisterError","An error has occured trying to create your account.")}))},login:function(t){var e=t.commit,n=t.state;return e("setLoginError",null),_t().post("/auth/login",{email:n.loginEmail,password:n.loginPassword}).then((function(t){var n=t.data;e("setToken",n.token),jt.push("/")})).catch((function(){e("setLoginError","An error has occured trying to login.")}))}}},wt=(n("c975"),n("a434"),{namespaced:!0,state:{projects:[],currentProject:null,newProjectName:null},mutations:{setCurrentProject:function(t,e){t.currentProject=e},setNewProjectName:function(t,e){t.newProjectName=e},appendProject:function(t,e){t.projects.push(e)},setProjects:function(t,e){t.projects=e},setProjectTitle:function(t,e){var n=e.project,o=e.title;n.title=o},setEditMode:function(t,e){r["a"].set(e,"isEditMode",!0)},unsetEditMode:function(t,e){r["a"].set(e,"isEditMode",!1)},removeProject:function(t,e){t.projects.splice(t.projects.indexOf(e),1)}},actions:{saveProject:function(t,e){var n=t.commit;return _t().patch("/projects/".concat(e.id),e).then((function(){n("unsetEditMode",e)}))},deletProject:function(t,e){var n=t.commit;return _t().delete("/projects/".concat(e.id)).then((function(){n("removeProject",e)}))},fetchProjects:function(t){var e=t.commit;return _t().get("/projects").then((function(t){var n=t.data;e("setProjects",n)}))},createProject:function(t){var e=t.commit,n=t.state;return _t().post("/projects",{title:n.newProjectName}).then((function(t){var n=t.data;e("appendProject",n),e("setNewProjectName",null)}))}}}),yt=(n("a4d3"),n("e01a"),{namespaced:!0,state:{tasks:[],newTaskName:null},mutations:{setTasks:function(t,e){t.tasks=e},setNewTaskName:function(t,e){t.newTaskName=e},appendTask:function(t,e){t.tasks.push(e)},setTaskDescription:function(t,e){var n=e.task,o=e.description;n.description=o},setEditMode:function(t,e){r["a"].set(e,"isEditMode",!0)},unsetEditMode:function(t,e){r["a"].set(e,"isEditMode",!1)},removeTask:function(t,e){t.tasks.splice(t.tasks.indexOf(e),1)},toggleComplated:function(t,e){e.complated=!e.complated}},actions:{saveTask:function(t,e){var n=t.commit;return _t().patch("tasks/".concat(e.id),e).then((function(){n("unsetEditMode",e)}))},deleteTask:function(t,e){var n=t.commit;return _t().delete("tasks/".concat(e.id)).then((function(){n("removeTask",e)}))},fetchTasksForProject:function(t,e){var n=t.commit;return _t().get("projects/".concat(e.id,"/task")).then((function(t){var e=t.data;n("setTasks",e)}))},createTask:function(t){var e=t.commit,n=t.state,o=t.rootState;return _t().post("/projects/".concat(o.projects.currentProject.id,"/task"),{description:n.newTaskName}).then((function(t){var n=t.data;e("appendTask",n),e("setNewTaskName",null)}))}}});r["a"].use(l["a"]);var xt=new l["a"].Store({strict:!0,state:{baseUrl:"/api"},mutations:{},actions:{},modules:{authentication:Tt,projects:wt,tasks:yt},plugins:[Object(bt["a"])()]}),Ot=(n("5363"),n("f309"));r["a"].use(Ot["a"]);var Ct=new Ot["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,Object(o["sync"])(xt,jt),r["a"].component("Panel",I),new r["a"]({router:jt,store:xt,vuetify:Ct,render:function(t){return t(O)}}).$mount("#app")},"6e2b":function(t,e,n){},"85ec":function(t,e,n){},"8d28":function(t,e,n){}});
//# sourceMappingURL=app.c18771cd.js.map