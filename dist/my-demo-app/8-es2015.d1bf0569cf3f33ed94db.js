(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7UCR":function(t,o,e){"use strict";e.r(o),e.d(o,"UserModule",(function(){return y}));var r=e("ofXK"),a=e("PCNd"),n=e("tyNb"),s=e("fXoL"),c=e("SkYw");function i(t,o){if(1&t){const t=s.Xb();s.Wb(0,"div",5),s.Wb(1,"div",6),s.ic("click",(function(){s.Dc(t);const e=o.$implicit;return s.mc(2).dashboardClick(null==e?null:e.employee_dashboard_value)})),s.Rb(2,"img",7),s.Wb(3,"h4"),s.Lc(4),s.Vb(),s.Vb(),s.Vb()}if(2&t){const t=o.$implicit;s.Cb(2),s.vc("src","./assets/images/",null==t?null:t.image_url,"",s.Ec),s.Cb(2),s.Mc(null==t?null:t.employee_dashboard_text)}}function d(t,o){if(1&t&&(s.Ub(0),s.Jc(1,i,5,2,"div",4),s.Tb()),2&t){const t=s.mc();s.Cb(1),s.tc("ngForOf",t.dashboardData)}}function l(t,o){if(1&t&&(s.Wb(0,"div",8),s.Lc(1),s.Vb()),2&t){const t=s.mc();s.Cb(1),s.Nc("",t.errorMessage," ")}}let b=(()=>{class t{constructor(t,o,e){this.route=t,this.auth=o,this.activatedRoute=e}ngOnInit(){const t=this.activatedRoute.snapshot.data.dashboards;this.dashboardData=t.employee_dashboard_info,this.dashboardDataCount=+t.dashboardDataCount,this.errorMessage=t.error,console.log(this.errorMessage),console.log(this.dashboardData),console.log(this.dashboardDataCount)}dashboardClick(t){console.log(t),this.route.navigate([t])}}return t.\u0275fac=function(o){return new(o||t)(s.Qb(n.f),s.Qb(c.a),s.Qb(n.a))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-dashboard"]],decls:4,vars:2,consts:[[1,"container"],[1,"row"],[4,"ngIf"],["class","alert alert-danger",4,"ngIf"],["class","col-md-3 box",4,"ngFor","ngForOf"],[1,"col-md-3","box"],[3,"click"],[1,"img-responsive","center-block",2,"max-height","180px","padding","30px 0 30px 0",3,"src"],[1,"alert","alert-danger"]],template:function(t,o){1&t&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Jc(2,d,2,1,"ng-container",2),s.Jc(3,l,2,1,"div",3),s.Vb(),s.Vb()),2&t&&(s.Cb(2),s.tc("ngIf",o.dashboardData),s.Cb(1),s.tc("ngIf",o.errorMessage))},directives:[r.n,r.m],styles:[".box[_ngcontent-%COMP%]{text-align:center;background-color:#fff;border:1px solid #000}.box[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#ecf0f0}.container[_ngcontent-%COMP%]{padding-top:20px;padding-left:15px;padding-right:15px}"]}),t})();var u=e("LRne"),p=e("lJxs"),f=e("JIr8");const h=[{path:"dashboard",component:b,resolve:{dashboards:(()=>{class t{constructor(t){this.auth=t}resolve(t,o){const e=JSON.parse(localStorage.getItem("currentUser"));return this.auth.getAllEmployeeDashboard(e.employee_id).pipe(Object(p.a)(t=>({employee_dashboard_info:t.employee_dashboard_info,dashboardDataCount:t.employee_dashboard_count[0].employee_dashboard_count,error:""})),Object(f.a)(t=>{const o="Retrieval error: "+t;return console.log(o),Object(u.a)({employee_dashboard_info:null,dashboardDataCount:0,error:o})}))}}return t.\u0275fac=function(o){return new(o||t)(s.ec(c.a))},t.\u0275prov=s.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}];let g=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(o){return new(o||t)},imports:[[n.j.forChild(h)],n.j]}),t})();var m=e("kt0X");function v(t,o){switch(o.type){case"MASK_USER_NAME":return Object.assign(Object.assign({},t),{maskUserName:o.payload});default:return t}}let y=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(o){return new(o||t)},imports:[[r.c,g,a.a,m.i.forFeature("users",v)]]}),t})()},PCNd:function(t,o,e){"use strict";e.d(o,"a",(function(){return c}));var r=e("ofXK"),a=e("3Pt+"),n=e("tyNb"),s=e("fXoL");let c=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(o){return new(o||t)},imports:[[r.c,a.r,n.j,a.g],r.c,a.g]}),t})()}}]);