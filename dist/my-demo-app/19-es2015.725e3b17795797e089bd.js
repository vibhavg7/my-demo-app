(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7UCR":function(e,t,o){"use strict";o.r(t);var r=o("fXoL"),a=o("ofXK"),n=(o("Ex7r"),o("PCNd")),s=o("tyNb"),c=o("SkYw");const d=[1,"container"],i=[1,"row"],l=["class","col-md-3 box",4,"ngFor","ngForOf"],u=[1,"col-md-3","box"],b=[3,"click"],p=[1,"img-responsive","center-block",2,"max-height","180px","padding","30px 0 30px 0",3,"src"];function h(e,t){if(1&e){const e=r.Zb();r.Yb(0,"div",u),r.Yb(1,"div",b),r.jc("click",(function(o){r.Ac(e);const a=t.$implicit;return r.mc().dashboardClick(null==a?null:a.employee_dashboard_value)})),r.Tb(2,"img",p),r.Yb(3,"h4"),r.Mc(4),r.Wb(),r.Wb(),r.Wb()}if(2&e){const e=t.$implicit;r.Cc(2),r.uc("src","./assets/images/",null==e?null:e.image_url,"",r.Bc),r.Cc(4),r.Nc(null==e?null:e.employee_dashboard_text)}}let f=(()=>{class e{constructor(e,t,o){this.route=e,this.auth=t,this.activatedRoute=o}ngOnInit(){this.dashboardData=this.activatedRoute.snapshot.data.dashboards.employee_dashboard_info,this.dashboardDataCount=+this.activatedRoute.snapshot.data.dashboards.dashboardDataCount}dashboardClick(e){this.route.navigate([e])}}return e.ngComponentDef=r.Mb({type:e,selectors:[["app-dashboard"]],factory:function(t){return new(t||e)(r.Sb(s.f),r.Sb(c.a),r.Sb(s.a))},consts:3,vars:1,template:function(e,t){1&e&&(r.Yb(0,"div",d),r.Yb(1,"div",i),r.Kc(2,h,5,2,"div",l),r.Wb(),r.Wb()),2&e&&(r.Cc(2),r.sc("ngForOf",t.dashboardData))},directives:[a.l],styles:[".box[_ngcontent-%COMP%]{text-align:center;background-color:#fff;border:1px solid #000}.box[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#ecf0f0}.container[_ngcontent-%COMP%]{padding-top:20px;padding-left:15px;padding-right:15px}"]}),e})();var g=o("LRne"),m=o("lJxs"),v=o("JIr8");const _=[{path:"dashboard",component:f,resolve:{dashboards:(()=>{class e{constructor(e){this.auth=e}resolve(e,t){const o=JSON.parse(localStorage.getItem("currentUser"));return this.auth.getAllEmployeeDashboard(o.employee_id).pipe(Object(m.a)(e=>({employee_dashboard_info:e.employee_dashboard_info,dashboardDataCount:e.employee_dashboard_count[0].employee_dashboard_count,error:""})),Object(v.a)(e=>{const t=`Retrieval error: ${e}`;return Object(g.a)({product:null,error:t})}))}}return e.ngInjectableDef=r.Ob({token:e,factory:function(t){return new(t||e)(r.hc(c.a))},providedIn:"root"}),e})()}}];let y=(()=>{class e{}return e.ngModuleDef=r.Qb({type:e}),e.ngInjectorDef=r.Pb({factory:function(t){return new(t||e)},imports:[[s.j.forChild(_)],s.j]}),e})();s.j.forChild(_);var x=o("kt0X");function C(e,t){switch(t.type){case"MASK_USER_NAME":return Object.assign({},e,{maskUserName:t.payload});default:return e}}o.d(t,"UserModule",(function(){return j}));let j=(()=>{class e{}return e.ngModuleDef=r.Qb({type:e}),e.ngInjectorDef=r.Pb({factory:function(t){return new(t||e)},imports:[[a.b,y,n.a,x.j.forFeature("users",C)]]}),e})();x.j.forFeature("users",C)}}]);