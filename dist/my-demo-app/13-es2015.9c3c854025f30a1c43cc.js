(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7UCR":function(t,e,r){"use strict";r.r(e),r.d(e,"UserModule",(function(){return y}));var o=r("ofXK"),n=r("PCNd"),a=r("tyNb"),c=r("fXoL"),s=r("SkYw");function i(t,e){if(1&t){const t=c.Xb();c.Wb(0,"div",5),c.Wb(1,"div",6),c.ic("click",(function(){c.Dc(t);const r=e.$implicit;return c.mc(2).dashboardClick(null==r?null:r.employee_dashboard_value)})),c.Rb(2,"img",7),c.Wb(3,"h4"),c.Lc(4),c.Vb(),c.Vb(),c.Vb()}if(2&t){const t=e.$implicit;c.Cb(2),c.vc("src","./assets/images/",null==t?null:t.image_url,"",c.Ec),c.Cb(2),c.Mc(null==t?null:t.employee_dashboard_text)}}function d(t,e){if(1&t&&(c.Ub(0),c.Jc(1,i,5,2,"div",4),c.Tb()),2&t){const t=c.mc();c.Cb(1),c.tc("ngForOf",t.dashboardData)}}function l(t,e){if(1&t&&(c.Wb(0,"div",8),c.Lc(1),c.Vb()),2&t){const t=c.mc();c.Cb(1),c.Nc("",t.errorMessage," ")}}let b=(()=>{class t{constructor(t,e,r){this.route=t,this.auth=e,this.activatedRoute=r}ngOnInit(){const t=this.activatedRoute.snapshot.data.dashboards;this.dashboardData=t.employee_dashboard_info,this.dashboardDataCount=+t.dashboardDataCount,this.errorMessage=t.error}dashboardClick(t){this.route.navigate([t])}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(a.f),c.Qb(s.a),c.Qb(a.a))},t.\u0275cmp=c.Kb({type:t,selectors:[["app-dashboard"]],decls:4,vars:2,consts:[[1,"container"],[1,"row","justify-content-center","align-items-center"],[4,"ngIf"],["class","alert alert-danger",4,"ngIf"],["class","col-md-3 box",4,"ngFor","ngForOf"],[1,"col-md-3","box"],[3,"click"],[1,"img-responsive","center-block",2,"max-height","180px","padding","30px 0 30px 0",3,"src"],[1,"alert","alert-danger"]],template:function(t,e){1&t&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Jc(2,d,2,1,"ng-container",2),c.Jc(3,l,2,1,"div",3),c.Vb(),c.Vb()),2&t&&(c.Cb(2),c.tc("ngIf",e.dashboardData),c.Cb(1),c.tc("ngIf",e.errorMessage))},directives:[o.n,o.m],styles:[".box[_ngcontent-%COMP%]{text-align:center;background-color:#fff;border:1px solid #000;margin-right:20px;margin-bottom:20px}.box[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#ecf0f0}.container[_ngcontent-%COMP%]{padding-top:20px;padding-left:15px;padding-right:15px}"]}),t})();var u=r("LRne"),p=r("lJxs"),f=r("JIr8");const h=[{path:"dashboard",component:b,resolve:{dashboards:(()=>{class t{constructor(t){this.auth=t}resolve(t,e){const r=JSON.parse(localStorage.getItem("currentUser"));return this.auth.getAllEmployeeDashboard(r.employee_id).pipe(Object(p.a)(t=>({employee_dashboard_info:t.employee_dashboard_info,dashboardDataCount:t.employee_dashboard_count[0].employee_dashboard_count,error:""})),Object(f.a)(t=>{const e="Retrieval error: "+t;return console.log(e),Object(u.a)({employee_dashboard_info:null,dashboardDataCount:0,error:e})}))}}return t.\u0275fac=function(e){return new(e||t)(c.ec(s.a))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}];let g=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},imports:[[a.j.forChild(h)],a.j]}),t})();var m=r("kt0X");function v(t,e){switch(e.type){case"MASK_USER_NAME":return Object.assign(Object.assign({},t),{maskUserName:e.payload});default:return t}}let y=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},imports:[[o.c,g,n.a,m.i.forFeature("users",v)]]}),t})()},PCNd:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var o=r("ofXK"),n=r("3Pt+"),a=r("tyNb"),c=r("fXoL");let s=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},imports:[[o.c,n.r,a.j,n.g],o.c,n.g]}),t})()}}]);