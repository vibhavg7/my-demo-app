(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{R90S:function(e,r,t){"use strict";t.r(r);var n=t("fXoL"),i=t("ofXK"),o=t("tk/3"),s=t("z6cu"),a=t("vkgz"),c=t("lJxs"),l=t("JIr8");let d=(()=>{class e{constructor(e){this.http=e,this.deliveryServiceUrl="https://api.grostep.com/deliveryapi/"}fetchAllDeliveryPersons(e,r,t){const n={};return n.page_number=e,n.page_size=r,n.filterBy=t,this.http.post(`${this.deliveryServiceUrl}deliveryinfo`,n).pipe(Object(a.a)(e=>{}),Object(c.a)(e=>e),Object(l.a)(this.handleError))}fetchDeliveryPersonDetails(e){return this.http.get(`${this.deliveryServiceUrl}deliveryinfo/${e}`).pipe(Object(a.a)(e=>{}),Object(c.a)(e=>e),Object(l.a)(this.handleError))}addNewDeliveryPerson(e){const r={};r.deliveryPersonName=e.deliveryPersonName,r.aadharNumber=e.aadharNumber,r.status=e.status,r.panNumber=e.panNumber,r.phone=e.phone,r.email=e.email,console.log(r);const t=`${this.deliveryServiceUrl}addnewdeliveryperson`,n=new o.c({"Content-Type":"application/json"});return this.http.post(t,r,{headers:n}).pipe(Object(a.a)(e=>{}),Object(c.a)(e=>e),Object(l.a)(e=>this.handleError(e)))}editDeliveryPerson(e,r){const t={};t.delivery_person_name=e.deliveryPersonName,t.aadhar_number=e.aadharNumber,t.status=e.status,t.pan_number=e.panNumber,t.phone=e.phone,t.email=e.email;const n=`${this.deliveryServiceUrl}deliveryinfo/${r}`;console.log(n);const i=new o.c({"Content-Type":"application/json"});return this.http.put(n,t,{headers:i}).pipe(Object(a.a)(e=>{console.log(JSON.stringify(e))}),Object(c.a)(e=>e),Object(l.a)(this.handleError))}handleError(e){let r="";return r=e.error instanceof ErrorEvent?`An error occurred: ${e.error.message}`:`Server returned code: ${e.status}, error message is: ${e.message}`,Object(s.a)(r)}}return e.ngInjectableDef=n.Ob({token:e,factory:function(r){return new(r||e)(n.hc(o.a))},providedIn:"root"}),e})();var b=t("tyNb"),u=t("3Pt+");const v=[1,"card"],p=[1,"card-header"],m=[1,"card-body"],f=[1,"row"],g=[1,"col-md-2"],h=[1,"col-md-4"],y=[3,"formGroup"],W=["formControlName","searchCriteria","type","text","id","keyword","placeholder","Search Delivery Person By Name","autocomplete","off","autofocus","",1,"form-control"],Y=[1,"col-md-6"],C=[1,"btn","btn-outline-secondary",2,"float","right",3,"routerLink"],M=[1,"table-responsive"],P=["style","width:1200px !important","class","table",4,"ngIf"],D=["class","alert alert-danger",4,"ngIf"],_=[1,"table",2,"width","1200px !important"],N=[2,"width","90px !important"],I=[4,"ngFor","ngForOf"],w=["src","assets/product_images/default_image.jpg",3,"title","width","margin",4,"ngIf"],O=[3,"src","title","width","margin",4,"ngIf"],k=[3,"routerLink"],S=[2,"font-weight","bold"],x=[1,"btn","btn-outline-secondary","mr-3",3,"routerLink"],j=[1,"fa","fa-edit"],K=["src","assets/product_images/default_image.jpg",3,"title"];function F(e,r){if(1&e&&(n.Yb(0,"img",K),n.Ic(),n.Wb()),2&e){const e=n.mc().$implicit,r=n.mc(2);n.Hc("width",r.imageWidth,"px"),n.Hc("margin",r.imageMargin,"px"),n.Jc(),n.sc("title",e.delivery_person_name)}}const A=[3,"src","title"];function q(e,r){if(1&e&&(n.Yb(0,"img",A),n.Ic(),n.Wb()),2&e){const e=n.mc().$implicit,r=n.mc(2);n.Hc("width",r.imageWidth,"px"),n.Hc("margin",r.imageMargin,"px"),n.Jc(),n.tc("src",e.image_url,n.Bc),n.sc("title",e.delivery_person_name)}}const z=function(e){return["/delivery",e]},E=function(e){return[e,"edit"]};function T(e,r){if(1&e&&(n.Yb(0,"tr"),n.Yb(1,"td"),n.Kc(2,F,1,3,"img",w),n.Kc(3,q,1,4,"img",O),n.Wb(),n.Yb(4,"td",N),n.Yb(5,"a",k),n.Mc(6),n.Wb(),n.Wb(),n.Yb(7,"td"),n.Yb(8,"a",k),n.Mc(9),n.Wb(),n.Wb(),n.Yb(10,"td"),n.Mc(11),n.Wb(),n.Yb(12,"td"),n.Mc(13),n.Wb(),n.Yb(14,"td"),n.Mc(15),n.nc(16,"date"),n.Wb(),n.Yb(17,"td"),n.Mc(18),n.Wb(),n.Yb(19,"td"),n.Mc(20),n.Wb(),n.Yb(21,"td",S),n.Mc(22),n.Wb(),n.Yb(23,"td",S),n.Mc(24),n.Wb(),n.Yb(25,"td"),n.Yb(26,"button",x),n.Tb(27,"i",j),n.Wb(),n.Wb(),n.Wb()),2&e){const e=r.$implicit;n.Cc(2),n.sc("ngIf",!(null!=e&&e.image_url)),n.Cc(3),n.sc("ngIf",null==e?null:e.image_url),n.Cc(5),n.sc("routerLink",n.vc(17,z,e.delivery_person_id)),n.Cc(6),n.Oc(" ",null==e?null:e.delivery_person_id," "),n.Cc(8),n.sc("routerLink",n.vc(19,z,e.delivery_person_id)),n.Cc(9),n.Oc(" ",null==e?null:e.delivery_person_name," "),n.Cc(11),n.Nc(null==e?null:e.email),n.Cc(13),n.Nc(null==e?null:e.phone),n.Cc(15),n.Nc(n.pc(16,14,null==e?null:e.registered_date,"medium")),n.Cc(18),n.Nc(null==e?null:e.aadhar_number),n.Cc(20),n.Nc(null==e?null:e.pan_number),n.Cc(22),n.Nc(null==e?null:e.status?"Enabled":"Disabled"),n.Cc(24),n.Nc(null==e?null:e.available?"Available":"Not Available"),n.Cc(26),n.sc("routerLink",n.vc(21,E,null==e?null:e.delivery_person_id))}}function L(e,r){if(1&e&&(n.Yb(0,"table",_),n.Yb(1,"thead"),n.Yb(2,"tr"),n.Tb(3,"th"),n.Yb(4,"th",N),n.Mc(5,"Id"),n.Wb(),n.Yb(6,"th"),n.Mc(7,"Name"),n.Wb(),n.Yb(8,"th"),n.Mc(9,"Email"),n.Wb(),n.Yb(10,"th"),n.Mc(11,"Phone"),n.Wb(),n.Yb(12,"th"),n.Mc(13,"Registration Date"),n.Wb(),n.Yb(14,"th"),n.Mc(15,"Aadhar Number"),n.Wb(),n.Yb(16,"th"),n.Mc(17,"Pan Number"),n.Wb(),n.Yb(18,"th"),n.Mc(19,"Status"),n.Wb(),n.Yb(20,"th"),n.Mc(21,"Available"),n.Wb(),n.Tb(22,"th"),n.Wb(),n.Wb(),n.Yb(23,"tbody"),n.Kc(24,T,28,23,"tr",I),n.Wb(),n.Wb()),2&e){const e=n.mc();n.Cc(24),n.sc("ngForOf",e.deliverypersons)}}const R=[1,"alert","alert-danger"];function $(e,r){if(1&e&&(n.Yb(0,"div",R),n.Mc(1),n.Wb()),2&e){const e=n.mc();n.Cc(1),n.Oc(" Error: ",e.errorMessage," ")}}const B=["/delivery/",0,"edit"];let H=(()=>{class e{constructor(e,r,t){this.deliveryService=e,this.activatedRoute=r,this.formBuilder=t,this.pageTitle="Delivery Dashboard",this.filterBy="",this.currentPage=1,this.errorMessage="",this.pageSize=20,this.imageWidth=80,this.imageHeight=80,this.imageMargin=2,this.searchCriteriaForm=this.formBuilder.group({searchCriteria:[""]})}ngOnInit(){this.deliverypersons=this.activatedRoute.snapshot.data.deliverypersons.deliverypersons,this.deliverypersons_total_count=this.activatedRoute.snapshot.data.deliverypersons.deliverypersons_total_count}}return e.ngComponentDef=n.Mb({type:e,selectors:[["app-delivery-dashboard"]],factory:function(r){return new(r||e)(n.Sb(d),n.Sb(b.a),n.Sb(u.c))},consts:16,vars:5,template:function(e,r){1&e&&(n.Yb(0,"div",v),n.Yb(1,"div",p),n.Mc(2),n.Wb(),n.Yb(3,"div",m),n.Yb(4,"div",f),n.Yb(5,"div",g),n.Mc(6,"Filter by:"),n.Wb(),n.Yb(7,"div",h),n.Yb(8,"form",y),n.Tb(9,"input",W),n.Wb(),n.Wb(),n.Yb(10,"div",Y),n.Yb(11,"button",C),n.Mc(12," Add New Delivery Person "),n.Wb(),n.Wb(),n.Yb(13,"div",M),n.Kc(14,L,25,1,"table",P),n.Wb(),n.Wb(),n.Wb(),n.Kc(15,$,2,1,"div",D),n.Wb()),2&e&&(n.Cc(2),n.Oc(" ",r.pageTitle," "),n.Cc(8),n.sc("formGroup",r.searchCriteriaForm),n.Cc(11),n.sc("routerLink",B),n.Cc(14),n.sc("ngIf",r.deliverypersons.length),n.Cc(15),n.sc("ngIf",r.errorMessage))},directives:[u.v,u.l,u.e,u.b,u.k,u.d,b.g,i.m,i.l,b.i],pipes:[i.d],styles:[""]}),e})();const J=[1,"jumbotron"],V=[1,"container"],U=[1,"row"],G=[1,"col-md-6","offset-md-3"],Q=[3,"formGroup","ngSubmit"],X=[1,"form-group"],Z=["type","text","formControlName","deliveryPersonName",1,"form-control",3,"ngClass"],ee=["class","invalid-feedback",4,"ngIf"],re=["type","text","formControlName","aadharNumber",1,"form-control",3,"ngClass"],te=["type","text","formControlName","panNumber",1,"form-control",3,"ngClass"],ne=["type","text","formControlName","email",1,"form-control",3,"ngClass"],ie=["type","text","formControlName","phone",1,"form-control",3,"ngClass"],oe=["for",""],se=["formControlName","status",1,"form-control"],ae=["value","1"],ce=["value","0"],le=[1,"btn","btn-primary"],de=[1,"invalid-feedback"],be=[4,"ngIf"];function ue(e,r){1&e&&(n.Yb(0,"div"),n.Mc(1,"Delivery Person Name is required"),n.Wb())}function ve(e,r){if(1&e&&(n.Yb(0,"div",de),n.Kc(1,ue,2,0,"div",be),n.Wb()),2&e){const e=n.mc();n.Cc(1),n.sc("ngIf",e.f.deliveryPersonName.errors.required)}}function pe(e,r){1&e&&(n.Yb(0,"div"),n.Mc(1,"Aadhar Number is required"),n.Wb())}function me(e,r){if(1&e&&(n.Yb(0,"div",de),n.Kc(1,pe,2,0,"div",be),n.Wb()),2&e){const e=n.mc();n.Cc(1),n.sc("ngIf",e.f.aadharNumber.errors.required)}}function fe(e,r){1&e&&(n.Yb(0,"div"),n.Mc(1,"Pan Number is required"),n.Wb())}function ge(e,r){if(1&e&&(n.Yb(0,"div",de),n.Kc(1,fe,2,0,"div",be),n.Wb()),2&e){const e=n.mc();n.Cc(1),n.sc("ngIf",e.f.panNumber.errors.required)}}function he(e,r){1&e&&(n.Yb(0,"div"),n.Mc(1,"Email is required"),n.Wb())}function ye(e,r){if(1&e&&(n.Yb(0,"div",de),n.Kc(1,he,2,0,"div",be),n.Wb()),2&e){const e=n.mc();n.Cc(1),n.sc("ngIf",e.f.email.errors.required)}}function We(e,r){1&e&&(n.Yb(0,"div"),n.Mc(1,"Phone is required"),n.Wb())}function Ye(e,r){if(1&e&&(n.Yb(0,"div",de),n.Kc(1,We,2,0,"div",be),n.Wb()),2&e){const e=n.mc();n.Cc(1),n.sc("ngIf",e.f.phone.errors.required)}}const Ce=function(e){return{"is-invalid":e}};let Me=(()=>{class e{constructor(e,r,t,n){this.formBuilder=e,this.deliveryService=r,this.activatedRoute=t,this.router=n,this.addDeliveryPersonForm=this.formBuilder.group({deliveryPersonName:["",u.t.required],aadharNumber:["",u.t.required],panNumber:["",u.t.required],email:["",u.t.required],phone:["",u.t.required],status:[""]})}get f(){return this.addDeliveryPersonForm.controls}ngOnInit(){this.deliveryId=+this.activatedRoute.snapshot.params.deliveryId,0!==this.deliveryId&&this.deliveryService.fetchDeliveryPersonDetails(this.deliveryId).subscribe(e=>{const r=e.deliveryPersonData;console.log(r),this.addDeliveryPersonForm.get("deliveryPersonName").setValue(r.delivery_person_name),this.addDeliveryPersonForm.get("aadharNumber").setValue(r.aadhar_number),this.addDeliveryPersonForm.get("status").setValue(r.status),this.addDeliveryPersonForm.get("panNumber").setValue(r.pan_number),this.addDeliveryPersonForm.get("email").setValue(r.email),this.addDeliveryPersonForm.get("phone").setValue(r.phone)})}onSubmit(){this.submitted=!0,this.addDeliveryPersonForm.invalid||(""==this.deliveryId?this.deliveryService.addNewDeliveryPerson(this.addDeliveryPersonForm.value).subscribe(e=>{console.log(e),"200"==e.status&&this.router.navigate(["delivery"]),"400"==e.status&&alert("Delivery Person Not Added . Internal Server Error")},e=>{this.errorMessage=e}):this.deliveryService.editDeliveryPerson(this.addDeliveryPersonForm.value,this.deliveryId).subscribe(e=>{console.log(e),"200"==e.status&&this.router.navigate(["delivery"]),"400"==e.status&&alert("Delivery Person Not Added . Internal Server Error")},e=>{this.errorMessage=e}))}}return e.ngComponentDef=n.Mb({type:e,selectors:[["app-delivery-edit"]],factory:function(r){return new(r||e)(n.Sb(u.c),n.Sb(d),n.Sb(b.a),n.Sb(b.f))},consts:44,vars:21,template:function(e,r){1&e&&(n.Yb(0,"div",J),n.Yb(1,"div",V),n.Yb(2,"div",U),n.Yb(3,"div",G),n.Yb(4,"h2"),n.Mc(5,"Add New Delivery Person"),n.Wb(),n.Yb(6,"form",Q),n.jc("ngSubmit",(function(e){return r.onSubmit()})),n.Yb(7,"div",X),n.Yb(8,"label"),n.Mc(9,"Delivery Person Name"),n.Wb(),n.Tb(10,"input",Z),n.Kc(11,ve,2,1,"div",ee),n.Wb(),n.Yb(12,"div",X),n.Yb(13,"label"),n.Mc(14,"Aadhar Number"),n.Wb(),n.Tb(15,"input",re),n.Kc(16,me,2,1,"div",ee),n.Wb(),n.Yb(17,"div",X),n.Yb(18,"label"),n.Mc(19,"Pan Number"),n.Wb(),n.Tb(20,"input",te),n.Kc(21,ge,2,1,"div",ee),n.Wb(),n.Yb(22,"div",X),n.Yb(23,"label"),n.Mc(24,"Email"),n.Wb(),n.Tb(25,"input",ne),n.Kc(26,ye,2,1,"div",ee),n.Wb(),n.Yb(27,"div",X),n.Yb(28,"label"),n.Mc(29,"Phone"),n.Wb(),n.Tb(30,"input",ie),n.Kc(31,Ye,2,1,"div",ee),n.Wb(),n.Yb(32,"div",X),n.Yb(33,"label",oe),n.Mc(34,"Status"),n.Wb(),n.Yb(35,"div"),n.Yb(36,"select",se),n.Yb(37,"option",ae),n.Mc(38,"Enabled"),n.Wb(),n.Yb(39,"option",ce),n.Mc(40,"Disabled"),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Yb(41,"div",X),n.Yb(42,"button",le),n.Mc(43,"Save"),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Wb()),2&e&&(n.Cc(6),n.sc("formGroup",r.addDeliveryPersonForm),n.Cc(10),n.sc("ngClass",n.vc(11,Ce,r.submitted&&r.f.deliveryPersonName.errors)),n.Cc(11),n.sc("ngIf",r.submitted&&r.f.deliveryPersonName.errors),n.Cc(15),n.sc("ngClass",n.vc(13,Ce,r.submitted&&r.f.aadharNumber.errors)),n.Cc(16),n.sc("ngIf",r.submitted&&r.f.aadharNumber.errors),n.Cc(20),n.sc("ngClass",n.vc(15,Ce,r.submitted&&r.f.panNumber.errors)),n.Cc(21),n.sc("ngIf",r.submitted&&r.f.panNumber.errors),n.Cc(25),n.sc("ngClass",n.vc(17,Ce,r.submitted&&r.f.email.errors)),n.Cc(26),n.sc("ngIf",r.submitted&&r.f.email.errors),n.Cc(30),n.sc("ngClass",n.vc(19,Ce,r.submitted&&r.f.phone.errors)),n.Cc(31),n.sc("ngIf",r.submitted&&r.f.phone.errors))},directives:[u.v,u.l,u.e,u.b,u.k,u.d,i.k,i.m,u.s,u.o,u.u],styles:[""]}),e})();var Pe=t("LRne");let De=(()=>{class e{constructor(e){this.deliveryService=e}resolve(e,r){return this.deliveryService.fetchAllDeliveryPersons(1,20,"").pipe(Object(c.a)(e=>({deliverypersons:e.delivery,customer_total_count:e.delivery_total_count.deliveryperson_count,error:""})),Object(l.a)(e=>{const r=`Retrieval error: ${e}`;return Object(Pe.a)({deliverypersons:null,error:r})}))}}return e.ngInjectableDef=n.Ob({token:e,factory:function(r){return new(r||e)(n.hc(d))},providedIn:"root"}),e})();const _e=[1,"card"],Ne=[1,"card-header"],Ie=[1,"wizard"],we=["routerLinkActive","active",3,"routerLink"],Oe=[1,"card-body"],ke=["info"],Se=["documents"],xe=["realtimeorders"],je=["pastorders"];let Ke=(()=>{class e{constructor(){}ngOnInit(){}}return e.ngComponentDef=n.Mb({type:e,selectors:[["app-delivery-detail"]],factory:function(r){return new(r||e)},consts:13,vars:4,template:function(e,r){1&e&&(n.Yb(0,"div",_e),n.Yb(1,"div",Ne),n.Yb(2,"div",Ie),n.Yb(3,"a",we),n.Mc(4," Info "),n.Wb(),n.Yb(5,"a",we),n.Mc(6," Documents "),n.Wb(),n.Yb(7,"a",we),n.Mc(8," Running Orders "),n.Wb(),n.Yb(9,"a",we),n.Mc(10," Past Orders "),n.Wb(),n.Wb(),n.Wb(),n.Yb(11,"div",Oe),n.Tb(12,"router-outlet"),n.Wb(),n.Wb()),2&e&&(n.Cc(3),n.sc("routerLink",ke),n.Cc(5),n.sc("routerLink",Se),n.Cc(7),n.sc("routerLink",xe),n.Cc(9),n.sc("routerLink",je))},directives:[b.i,b.h,b.k],styles:['.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#efefef;display:inline-block;margin-right:5px;min-width:150px;outline:0;padding:10px 40px;position:relative;text-decoration:none}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{width:0;height:0;border-top:20px inset transparent;border-bottom:24px inset transparent;border-left:20px solid #fff;position:absolute;content:"";top:0;left:0}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{width:0;height:0;border-top:20px inset transparent;border-bottom:24px inset transparent;border-left:21px solid #efefef;position:absolute;content:"";top:0;right:-20px;z-index:2}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child:before, .wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child:after{border:none}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{border-radius:8px 0 0}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{border-radius:0 8px 0 0}.wizard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:#007acc;color:#fff}.wizard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:after{border-left-color:#007acc}']}),e})();var Fe=t("Q6/5");const Ae=["class","card card-primary",4,"ngIf"],qe=[1,"card","card-primary"],ze=[1,"card-body"],Ee=[1,"row"],Te=[1,"col-md-8"],Le=[1,"table-key"],Re=[3,"rating"],$e=[1,"col-md-4"],Be=["class","center-block img-responsive","src","assets/product_images/default_image.jpg",3,"width","margin",4,"ngIf"],He=["class","center-block img-responsive",3,"src","title","width","margin",4,"ngIf"],Je=["class","alert alert-danger",4,"ngIf"],Ve=["src","assets/product_images/default_image.jpg",1,"center-block","img-responsive"];function Ue(e,r){1&e&&(n.Yb(0,"img",Ve),n.Ic(),n.Wb()),2&e&&(n.Hc("width",250,"px"),n.Hc("margin",2,"px"),n.Jc())}const Ge=[1,"center-block","img-responsive",3,"src","title"];function Qe(e,r){if(1&e&&(n.Yb(0,"img",Ge),n.Ic(),n.Wb()),2&e){const e=n.mc(2);n.Hc("width",250,"px"),n.Hc("margin",2,"px"),n.Jc(),n.tc("src",null==e.deliveryPersonData?null:e.deliveryPersonData.image_url,n.Bc),n.sc("title",null==e.deliveryPersonData?null:e.deliveryPersonData.delivery_person_name)}}const Xe=[1,"alert","alert-danger"];function Ze(e,r){if(1&e&&(n.Yb(0,"div",Xe),n.Mc(1),n.Wb()),2&e){const e=n.mc(2);n.Cc(1),n.Oc("",e.errorMessage," ")}}function er(e,r){if(1&e&&(n.Yb(0,"div",qe),n.Yb(1,"div",ze),n.Yb(2,"div",Ee),n.Yb(3,"div",Te),n.Yb(4,"div",Ee),n.Yb(5,"div",Le),n.Mc(6,"Id:"),n.Wb(),n.Yb(7,"div",Te),n.Mc(8),n.Wb(),n.Wb(),n.Yb(9,"div",Ee),n.Yb(10,"div",Le),n.Mc(11,"Name:"),n.Wb(),n.Yb(12,"div",Te),n.Mc(13),n.Wb(),n.Wb(),n.Yb(14,"div",Ee),n.Yb(15,"div",Le),n.Mc(16,"Email:"),n.Wb(),n.Yb(17,"div",Te),n.Mc(18),n.Wb(),n.Wb(),n.Yb(19,"div",Ee),n.Yb(20,"div",Le),n.Mc(21,"Phone Number:"),n.Wb(),n.Yb(22,"div",Te),n.Mc(23),n.Wb(),n.Wb(),n.Yb(24,"div",Ee),n.Yb(25,"div",Le),n.Mc(26,"Registration Date:"),n.Wb(),n.Yb(27,"div",Te),n.Mc(28),n.nc(29,"date"),n.Wb(),n.Wb(),n.Yb(30,"div",Ee),n.Yb(31,"div",Le),n.Mc(32,"Rating:"),n.Wb(),n.Yb(33,"div",Te),n.Tb(34,"app-star",Re),n.Wb(),n.Wb(),n.Yb(35,"div",Ee),n.Yb(36,"div",Le),n.Mc(37,"Available:"),n.Wb(),n.Yb(38,"div",Te),n.Mc(39),n.Wb(),n.Wb(),n.Wb(),n.Yb(40,"div",$e),n.Kc(41,Ue,1,2,"img",Be),n.Kc(42,Qe,1,4,"img",He),n.Wb(),n.Wb(),n.Wb(),n.Kc(43,Ze,2,1,"div",Je),n.Wb()),2&e){const e=n.mc();n.Cc(8),n.Nc(null==e.deliveryPersonData?null:e.deliveryPersonData.delivery_person_id),n.Cc(13),n.Nc(null==e.deliveryPersonData?null:e.deliveryPersonData.delivery_person_name),n.Cc(18),n.Nc(null==e.deliveryPersonData?null:e.deliveryPersonData.email),n.Cc(23),n.Nc(null==e.deliveryPersonData?null:e.deliveryPersonData.phone),n.Cc(28),n.Nc(n.pc(29,10,null==e.deliveryPersonData?null:e.deliveryPersonData.registration_date,"medium")),n.Cc(34),n.sc("rating",null==e.deliveryPersonData?null:e.deliveryPersonData.rating),n.Cc(39),n.Nc(1==(null==e.deliveryPersonData?null:e.deliveryPersonData.status)?"Available":"Not Available"),n.Cc(41),n.sc("ngIf",!(null!=e.deliveryPersonData&&e.deliveryPersonData.image_url)),n.Cc(42),n.sc("ngIf",null==e.deliveryPersonData?null:e.deliveryPersonData.image_url),n.Cc(43),n.sc("ngIf",e.errorMessage)}}const rr=[{path:"",component:H,resolve:{deliverypersons:De}},{path:":deliveryId",component:Ke,children:[{path:"",redirectTo:"info",pathMatch:"full"},{path:"info",component:(()=>{class e{constructor(e,r){this.activatedRoute=e,this.deliveryService=r,this.deliveryId="",this.errorMessage=""}ngOnInit(){this.deliveryId=+this.activatedRoute.parent.params._value.deliveryId,console.log(this.deliveryId),this.deliveryService.fetchDeliveryPersonDetails(this.deliveryId).subscribe(e=>{200===e.status&&(this.deliveryPersonData=e.deliveryPersonData,console.log(this.deliveryPersonData))})}}return e.ngComponentDef=n.Mb({type:e,selectors:[["app-delivery-person-info"]],factory:function(r){return new(r||e)(n.Sb(b.a),n.Sb(d))},consts:1,vars:1,template:function(e,r){1&e&&n.Kc(0,er,44,13,"div",Ae),2&e&&n.sc("ngIf",r.deliveryPersonData)},directives:[i.m,Fe.a],pipes:[i.d],styles:[".table-key[_ngcontent-%COMP%]{font-weight:700;padding:0 0 10px 20px}"]}),e})()},{path:"documents",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.ngComponentDef=n.Mb({type:e,selectors:[["app-delivery-person-documents"]],factory:function(r){return new(r||e)},consts:2,vars:0,template:function(e,r){1&e&&(n.Yb(0,"p"),n.Mc(1,"delivery-person-documents works!"),n.Wb())},styles:[""]}),e})()},{path:"realtimeorders",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.ngComponentDef=n.Mb({type:e,selectors:[["app-delivery-person-realtime-orders"]],factory:function(r){return new(r||e)},consts:2,vars:0,template:function(e,r){1&e&&(n.Yb(0,"p"),n.Mc(1,"delivery-person-realtime-orders works!"),n.Wb())},styles:[""]}),e})()},{path:"pastorders",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.ngComponentDef=n.Mb({type:e,selectors:[["app-delivery-person-past-orders"]],factory:function(r){return new(r||e)},consts:2,vars:0,template:function(e,r){1&e&&(n.Yb(0,"p"),n.Mc(1,"delivery-person-past-orders works!"),n.Wb())},styles:[""]}),e})()}]},{path:":deliveryId/edit",component:Me}];let tr=(()=>{class e{}return e.ngModuleDef=n.Qb({type:e}),e.ngInjectorDef=n.Pb({factory:function(r){return new(r||e)},imports:[[i.b,b.j.forChild(rr)],b.j]}),e})();b.j.forChild(rr);var nr=t("PCNd");t.d(r,"DeliveryModule",(function(){return ir}));let ir=(()=>{class e{}return e.ngModuleDef=n.Qb({type:e}),e.ngInjectorDef=n.Pb({factory:function(r){return new(r||e)},imports:[[i.b,nr.a,u.q,tr]]}),e})()}}]);