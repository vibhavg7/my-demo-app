function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{R90S:function(e,r,t){"use strict";t.r(r),t.d(r,"DeliveryModule",(function(){return We}));var n=t("ofXK"),i=t("tyNb"),o=t("fXoL"),a=t("MVCC"),c=t("3Pt+");function l(e,r){if(1&e&&o.Rb(0,"img",22),2&e){var t=o.mc().$implicit,n=o.mc(2);o.Ic("width",n.imageWidth,"px")("margin",n.imageMargin,"px"),o.tc("title",t.delivery_person_name)}}function s(e,r){if(1&e&&o.Rb(0,"img",23),2&e){var t=o.mc().$implicit,n=o.mc(2);o.Ic("width",n.imageWidth,"px")("margin",n.imageMargin,"px"),o.uc("src",t.image_url,o.Ec),o.tc("title",t.delivery_person_name)}}var d=function(e){return["/delivery",e]},b=function(e){return[e,"edit"]};function u(e,r){if(1&e&&(o.Wb(0,"tr"),o.Wb(1,"td"),o.Jc(2,l,1,5,"img",16),o.Jc(3,s,1,6,"img",17),o.Vb(),o.Wb(4,"td",14),o.Wb(5,"a",18),o.Lc(6),o.Vb(),o.Vb(),o.Wb(7,"td"),o.Wb(8,"a",18),o.Lc(9),o.Vb(),o.Vb(),o.Wb(10,"td"),o.Lc(11),o.Vb(),o.Wb(12,"td"),o.Lc(13),o.Vb(),o.Wb(14,"td"),o.Lc(15),o.nc(16,"date"),o.Vb(),o.Wb(17,"td"),o.Lc(18),o.Vb(),o.Wb(19,"td"),o.Lc(20),o.Vb(),o.Wb(21,"td",19),o.Lc(22),o.Vb(),o.Wb(23,"td",19),o.Lc(24),o.Vb(),o.Wb(25,"td"),o.Wb(26,"button",20),o.Rb(27,"i",21),o.Vb(),o.Vb(),o.Vb()),2&e){var t=r.$implicit;o.Cb(2),o.tc("ngIf",!(null!=t&&t.image_url)),o.Cb(1),o.tc("ngIf",null==t?null:t.image_url),o.Cb(2),o.tc("routerLink",o.xc(17,d,t.delivery_person_id)),o.Cb(1),o.Nc(" ",null==t?null:t.delivery_person_id," "),o.Cb(2),o.tc("routerLink",o.xc(19,d,t.delivery_person_id)),o.Cb(1),o.Nc(" ",null==t?null:t.delivery_person_name," "),o.Cb(2),o.Mc(null==t?null:t.email),o.Cb(2),o.Mc(null==t?null:t.phone),o.Cb(2),o.Mc(o.pc(16,14,null==t?null:t.registered_date,"medium")),o.Cb(3),o.Mc(null==t?null:t.aadhar_number),o.Cb(2),o.Mc(null==t?null:t.pan_number),o.Cb(2),o.Mc(null!=t&&t.status?"Enabled":"Disabled"),o.Cb(2),o.Mc(null!=t&&t.available?"Available":"Not Available"),o.Cb(2),o.tc("routerLink",o.xc(21,b,null==t?null:t.delivery_person_id))}}function v(e,r){if(1&e&&(o.Wb(0,"table",13),o.Wb(1,"thead"),o.Wb(2,"tr"),o.Rb(3,"th"),o.Wb(4,"th",14),o.Lc(5,"Id"),o.Vb(),o.Wb(6,"th"),o.Lc(7,"Name"),o.Vb(),o.Wb(8,"th"),o.Lc(9,"Email"),o.Vb(),o.Wb(10,"th"),o.Lc(11,"Phone"),o.Vb(),o.Wb(12,"th"),o.Lc(13,"Registration Date"),o.Vb(),o.Wb(14,"th"),o.Lc(15,"Aadhar Number"),o.Vb(),o.Wb(16,"th"),o.Lc(17,"Pan Number"),o.Vb(),o.Wb(18,"th"),o.Lc(19,"Status"),o.Vb(),o.Wb(20,"th"),o.Lc(21,"Available"),o.Vb(),o.Rb(22,"th"),o.Vb(),o.Vb(),o.Wb(23,"tbody"),o.Jc(24,u,28,23,"tr",15),o.Vb(),o.Vb()),2&e){var t=o.mc();o.Cb(24),o.tc("ngForOf",t.deliverypersons)}}function f(e,r){if(1&e&&(o.Wb(0,"div",24),o.Lc(1),o.Vb()),2&e){var t=o.mc();o.Cb(1),o.Nc(" Error: ",t.errorMessage," ")}}var p,m,g=function(){return["/delivery/",0,"edit"]},h=((p=function(){function e(r,t,n){_classCallCheck(this,e),this.deliveryService=r,this.activatedRoute=t,this.formBuilder=n,this.pageTitle="Delivery Dashboard",this.filterBy="",this.currentPage=1,this.errorMessage="",this.pageSize=20,this.imageWidth=80,this.imageHeight=80,this.imageMargin=2,this.searchCriteriaForm=this.formBuilder.group({searchCriteria:[""]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.deliverypersons=this.activatedRoute.snapshot.data.deliverypersons.deliverypersons,this.deliverypersons_total_count=this.activatedRoute.snapshot.data.deliverypersons.deliverypersons_total_count}}]),e}()).\u0275fac=function(e){return new(e||p)(o.Qb(a.a),o.Qb(i.a),o.Qb(c.d))},p.\u0275cmp=o.Kb({type:p,selectors:[["app-delivery-dashboard"]],decls:16,vars:6,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col-md-2"],[1,"col-md-4"],[3,"formGroup"],["formControlName","searchCriteria","type","text","id","keyword","placeholder","Search Delivery Person By Name","autocomplete","off","autofocus","",1,"form-control"],[1,"col-md-6"],[1,"btn","btn-outline-secondary",2,"float","right",3,"routerLink"],[1,"table-responsive"],["style","width:1200px !important","class","table",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[1,"table",2,"width","1200px !important"],[2,"width","90px !important"],[4,"ngFor","ngForOf"],["src","assets/product_images/default_image.jpg",3,"title","width","margin",4,"ngIf"],[3,"src","title","width","margin",4,"ngIf"],[3,"routerLink"],[2,"font-weight","bold"],[1,"btn","btn-outline-secondary","mr-3",3,"routerLink"],[1,"fa","fa-edit"],["src","assets/product_images/default_image.jpg",3,"title"],[3,"src","title"],[1,"alert","alert-danger"]],template:function(e,r){1&e&&(o.Wb(0,"div",0),o.Wb(1,"div",1),o.Lc(2),o.Vb(),o.Wb(3,"div",2),o.Wb(4,"div",3),o.Wb(5,"div",4),o.Lc(6,"Filter by:"),o.Vb(),o.Wb(7,"div",5),o.Wb(8,"form",6),o.Rb(9,"input",7),o.Vb(),o.Vb(),o.Wb(10,"div",8),o.Wb(11,"button",9),o.Lc(12," Add New Delivery Person "),o.Vb(),o.Vb(),o.Wb(13,"div",10),o.Jc(14,v,25,1,"table",11),o.Vb(),o.Vb(),o.Vb(),o.Jc(15,f,2,1,"div",12),o.Vb()),2&e&&(o.Cb(2),o.Nc(" ",r.pageTitle," "),o.Cb(6),o.tc("formGroup",r.searchCriteriaForm),o.Cb(3),o.tc("routerLink",o.wc(5,g)),o.Cb(3),o.tc("ngIf",r.deliverypersons.length),o.Cb(1),o.tc("ngIf",r.errorMessage))},directives:[c.w,c.n,c.f,c.c,c.m,c.e,i.g,n.n,n.m,i.i],pipes:[n.e],styles:[""]}),p),y=t("LRne"),C=t("lJxs"),V=t("JIr8"),_=((m=function(){function e(r){_classCallCheck(this,e),this.deliveryService=r}return _createClass(e,[{key:"resolve",value:function(e,r){return this.deliveryService.fetchAllDeliveryPersons(1,20,"").pipe(Object(C.a)((function(e){return{deliverypersons:e.delivery,customer_total_count:e.delivery_total_count.deliveryperson_count,error:""}})),Object(V.a)((function(e){var r="Retrieval error: "+e;return Object(y.a)({deliverypersons:null,error:r})})))}}]),e}()).\u0275fac=function(e){return new(e||m)(o.ec(a.a))},m.\u0275prov=o.Mb({token:m,factory:m.\u0275fac,providedIn:"root"}),m);function W(e,r){1&e&&(o.Wb(0,"div"),o.Lc(1,"Delivery Person Name is required"),o.Vb())}function P(e,r){if(1&e&&(o.Wb(0,"div",17),o.Jc(1,W,2,0,"div",18),o.Vb()),2&e){var t=o.mc();o.Cb(1),o.tc("ngIf",t.f.deliveryPersonName.errors.required)}}function L(e,r){1&e&&(o.Wb(0,"div"),o.Lc(1,"Aadhar Number is required"),o.Vb())}function I(e,r){if(1&e&&(o.Wb(0,"div",17),o.Jc(1,L,2,0,"div",18),o.Vb()),2&e){var t=o.mc();o.Cb(1),o.tc("ngIf",t.f.aadharNumber.errors.required)}}function O(e,r){1&e&&(o.Wb(0,"div"),o.Lc(1,"Pan Number is required"),o.Vb())}function w(e,r){if(1&e&&(o.Wb(0,"div",17),o.Jc(1,O,2,0,"div",18),o.Vb()),2&e){var t=o.mc();o.Cb(1),o.tc("ngIf",t.f.panNumber.errors.required)}}function N(e,r){1&e&&(o.Wb(0,"div"),o.Lc(1,"Email is required"),o.Vb())}function k(e,r){if(1&e&&(o.Wb(0,"div",17),o.Jc(1,N,2,0,"div",18),o.Vb()),2&e){var t=o.mc();o.Cb(1),o.tc("ngIf",t.f.email.errors.required)}}function D(e,r){1&e&&(o.Wb(0,"div"),o.Lc(1,"Phone is required"),o.Vb())}function M(e,r){if(1&e&&(o.Wb(0,"div",17),o.Jc(1,D,2,0,"div",18),o.Vb()),2&e){var t=o.mc();o.Cb(1),o.tc("ngIf",t.f.phone.errors.required)}}var x,S,F=function(e){return{"is-invalid":e}},R=((x=function(){function e(r,t,n,i){_classCallCheck(this,e),this.formBuilder=r,this.deliveryService=t,this.activatedRoute=n,this.router=i,this.addDeliveryPersonForm=this.formBuilder.group({deliveryPersonName:["",c.u.required],aadharNumber:["",c.u.required],panNumber:["",c.u.required],email:["",c.u.required],phone:["",c.u.required],status:[""]})}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.deliveryId=+this.activatedRoute.snapshot.params.deliveryId,0!==this.deliveryId&&this.deliveryService.fetchDeliveryPersonDetails(this.deliveryId).subscribe((function(r){var t=r.deliveryPersonData;console.log(t),e.addDeliveryPersonForm.get("deliveryPersonName").setValue(t.delivery_person_name),e.addDeliveryPersonForm.get("aadharNumber").setValue(t.aadhar_number),e.addDeliveryPersonForm.get("status").setValue(t.status),e.addDeliveryPersonForm.get("panNumber").setValue(t.pan_number),e.addDeliveryPersonForm.get("email").setValue(t.email),e.addDeliveryPersonForm.get("phone").setValue(t.phone)}))}},{key:"onSubmit",value:function(){var e=this;this.submitted=!0,this.addDeliveryPersonForm.invalid||(""==this.deliveryId?this.deliveryService.addNewDeliveryPerson(this.addDeliveryPersonForm.value).subscribe((function(r){console.log(r),"200"==r.status&&e.router.navigate(["delivery"]),"400"==r.status&&alert("Delivery Person Not Added . Internal Server Error")}),(function(r){e.errorMessage=r})):this.deliveryService.editDeliveryPerson(this.addDeliveryPersonForm.value,this.deliveryId).subscribe((function(r){console.log(r),"200"==r.status&&e.router.navigate(["delivery"]),"400"==r.status&&alert("Delivery Person Not Added . Internal Server Error")}),(function(r){e.errorMessage=r})))}},{key:"f",get:function(){return this.addDeliveryPersonForm.controls}}]),e}()).\u0275fac=function(e){return new(e||x)(o.Qb(c.d),o.Qb(a.a),o.Qb(i.a),o.Qb(i.f))},x.\u0275cmp=o.Kb({type:x,selectors:[["app-delivery-edit"]],decls:44,vars:21,consts:[[1,"jumbotron"],[1,"container"],[1,"row"],[1,"col-md-6","offset-md-3"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","formControlName","deliveryPersonName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","aadharNumber",1,"form-control",3,"ngClass"],["type","text","formControlName","panNumber",1,"form-control",3,"ngClass"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["type","text","formControlName","phone",1,"form-control",3,"ngClass"],["for",""],["formControlName","status",1,"form-control"],["value","1"],["value","0"],[1,"btn","btn-primary"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(e,r){1&e&&(o.Wb(0,"div",0),o.Wb(1,"div",1),o.Wb(2,"div",2),o.Wb(3,"div",3),o.Wb(4,"h2"),o.Lc(5,"Add New Delivery Person"),o.Vb(),o.Wb(6,"form",4),o.ic("ngSubmit",(function(){return r.onSubmit()})),o.Wb(7,"div",5),o.Wb(8,"label"),o.Lc(9,"Delivery Person Name"),o.Vb(),o.Rb(10,"input",6),o.Jc(11,P,2,1,"div",7),o.Vb(),o.Wb(12,"div",5),o.Wb(13,"label"),o.Lc(14,"Aadhar Number"),o.Vb(),o.Rb(15,"input",8),o.Jc(16,I,2,1,"div",7),o.Vb(),o.Wb(17,"div",5),o.Wb(18,"label"),o.Lc(19,"Pan Number"),o.Vb(),o.Rb(20,"input",9),o.Jc(21,w,2,1,"div",7),o.Vb(),o.Wb(22,"div",5),o.Wb(23,"label"),o.Lc(24,"Email"),o.Vb(),o.Rb(25,"input",10),o.Jc(26,k,2,1,"div",7),o.Vb(),o.Wb(27,"div",5),o.Wb(28,"label"),o.Lc(29,"Phone"),o.Vb(),o.Rb(30,"input",11),o.Jc(31,M,2,1,"div",7),o.Vb(),o.Wb(32,"div",5),o.Wb(33,"label",12),o.Lc(34,"Status"),o.Vb(),o.Wb(35,"div"),o.Wb(36,"select",13),o.Wb(37,"option",14),o.Lc(38,"Enabled"),o.Vb(),o.Wb(39,"option",15),o.Lc(40,"Disabled"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(41,"div",5),o.Wb(42,"button",16),o.Lc(43,"Save"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb()),2&e&&(o.Cb(6),o.tc("formGroup",r.addDeliveryPersonForm),o.Cb(4),o.tc("ngClass",o.xc(11,F,r.submitted&&r.f.deliveryPersonName.errors)),o.Cb(1),o.tc("ngIf",r.submitted&&r.f.deliveryPersonName.errors),o.Cb(4),o.tc("ngClass",o.xc(13,F,r.submitted&&r.f.aadharNumber.errors)),o.Cb(1),o.tc("ngIf",r.submitted&&r.f.aadharNumber.errors),o.Cb(4),o.tc("ngClass",o.xc(15,F,r.submitted&&r.f.panNumber.errors)),o.Cb(1),o.tc("ngIf",r.submitted&&r.f.panNumber.errors),o.Cb(4),o.tc("ngClass",o.xc(17,F,r.submitted&&r.f.email.errors)),o.Cb(1),o.tc("ngIf",r.submitted&&r.f.email.errors),o.Cb(4),o.tc("ngClass",o.xc(19,F,r.submitted&&r.f.phone.errors)),o.Cb(1),o.tc("ngIf",r.submitted&&r.f.phone.errors))},directives:[c.w,c.n,c.f,c.c,c.m,c.e,n.l,n.n,c.t,c.q,c.v],styles:[""]}),x),J=function(){return["info"]},z=function(){return["realtimeorders"]},A=function(){return["pastorders"]},j=((S=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=o.Kb({type:S,selectors:[["app-delivery-detail"]],decls:11,vars:6,consts:[[1,"card"],[1,"card-header"],[1,"wizard"],["routerLinkActive","active",3,"routerLink"],[1,"card-body"]],template:function(e,r){1&e&&(o.Wb(0,"div",0),o.Wb(1,"div",1),o.Wb(2,"div",2),o.Wb(3,"a",3),o.Lc(4," Info "),o.Vb(),o.Wb(5,"a",3),o.Lc(6," Running Orders "),o.Vb(),o.Wb(7,"a",3),o.Lc(8," Past Orders "),o.Vb(),o.Vb(),o.Vb(),o.Wb(9,"div",4),o.Rb(10,"router-outlet"),o.Vb(),o.Vb()),2&e&&(o.Cb(3),o.tc("routerLink",o.wc(3,J)),o.Cb(2),o.tc("routerLink",o.wc(4,z)),o.Cb(2),o.tc("routerLink",o.wc(5,A)))},directives:[i.i,i.h,i.k],styles:['.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#efefef;display:inline-block;margin-right:5px;min-width:150px;outline:none;padding:10px 40px;position:relative;text-decoration:none}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{border-left:20px solid #fff;left:0}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, .wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{width:0;height:0;border-top:20px inset transparent;border-bottom:24px inset transparent;position:absolute;content:"";top:0}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{border-left:21px solid #efefef;right:-20px;z-index:2}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child:before, .wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child:after{border:none}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{border-radius:8px 0 0 0}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{border-radius:0 8px 0 0}.wizard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:#007acc;color:#fff}.wizard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:after{border-left-color:#007acc}']}),S),B=t("Q6/5");function Q(e,r){if(1&e&&(o.Wb(0,"div",8),o.Lc(1),o.Vb()),2&e){var t=o.mc(2);o.Cb(1),o.Nc("",t.errorMessage," ")}}function q(e,r){if(1&e&&(o.Wb(0,"div",1),o.Wb(1,"div",2),o.Wb(2,"div",3),o.Wb(3,"div",4),o.Wb(4,"div",3),o.Wb(5,"div",5),o.Lc(6,"Id:"),o.Vb(),o.Wb(7,"div",4),o.Lc(8),o.Vb(),o.Vb(),o.Wb(9,"div",3),o.Wb(10,"div",5),o.Lc(11,"Name:"),o.Vb(),o.Wb(12,"div",4),o.Lc(13),o.Vb(),o.Vb(),o.Wb(14,"div",3),o.Wb(15,"div",5),o.Lc(16,"Email:"),o.Vb(),o.Wb(17,"div",4),o.Lc(18),o.Vb(),o.Vb(),o.Wb(19,"div",3),o.Wb(20,"div",5),o.Lc(21,"Phone Number:"),o.Vb(),o.Wb(22,"div",4),o.Lc(23),o.Vb(),o.Vb(),o.Wb(24,"div",3),o.Wb(25,"div",5),o.Lc(26,"Registration Date:"),o.Vb(),o.Wb(27,"div",4),o.Lc(28),o.nc(29,"date"),o.Vb(),o.Vb(),o.Wb(30,"div",3),o.Wb(31,"div",5),o.Lc(32,"Rating:"),o.Vb(),o.Wb(33,"div",4),o.Rb(34,"app-star",6),o.Vb(),o.Vb(),o.Wb(35,"div",3),o.Wb(36,"div",5),o.Lc(37,"Available:"),o.Vb(),o.Wb(38,"div",4),o.Lc(39),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Jc(40,Q,2,1,"div",7),o.Vb()),2&e){var t=o.mc();o.Cb(8),o.Mc(null==t.deliveryPersonData?null:t.deliveryPersonData.delivery_person_id),o.Cb(5),o.Mc(null==t.deliveryPersonData?null:t.deliveryPersonData.delivery_person_name),o.Cb(5),o.Mc(null==t.deliveryPersonData?null:t.deliveryPersonData.email),o.Cb(5),o.Mc(null==t.deliveryPersonData?null:t.deliveryPersonData.phone),o.Cb(5),o.Mc(o.pc(29,8,null==t.deliveryPersonData?null:t.deliveryPersonData.registration_date,"medium")),o.Cb(6),o.tc("rating",null==t.deliveryPersonData?null:t.deliveryPersonData.rating),o.Cb(5),o.Mc(1==(null==t.deliveryPersonData?null:t.deliveryPersonData.status)?"Available":"Not Available"),o.Cb(1),o.tc("ngIf",t.errorMessage)}}var E,K,T=((K=function(){function e(r,t){_classCallCheck(this,e),this.activatedRoute=r,this.deliveryService=t,this.deliveryId="",this.errorMessage=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.deliveryId=+this.activatedRoute.parent.params._value.deliveryId,console.log(this.deliveryId),this.deliveryService.fetchDeliveryPersonDetails(this.deliveryId).subscribe((function(r){200===r.status&&(e.deliveryPersonData=r.deliveryPersonData,console.log(e.deliveryPersonData))}))}}]),e}()).\u0275fac=function(e){return new(e||K)(o.Qb(i.a),o.Qb(a.a))},K.\u0275cmp=o.Kb({type:K,selectors:[["app-delivery-person-info"]],decls:1,vars:1,consts:[["class","card card-primary",4,"ngIf"],[1,"card","card-primary"],[1,"card-body"],[1,"row"],[1,"col-md-8"],[1,"table-key"],[3,"rating"],["class","alert alert-danger",4,"ngIf"],[1,"alert","alert-danger"]],template:function(e,r){1&e&&o.Jc(0,q,41,11,"div",0),2&e&&o.tc("ngIf",r.deliveryPersonData)},directives:[n.n,B.a],pipes:[n.e],styles:[".table-key[_ngcontent-%COMP%]{font-weight:700;padding:0 0 10px 20px}"]}),K),G=((E=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||E)},E.\u0275cmp=o.Kb({type:E,selectors:[["app-delivery-person-documents"]],decls:2,vars:0,template:function(e,r){1&e&&(o.Wb(0,"p"),o.Lc(1,"delivery-person-documents works!"),o.Vb())},styles:[""]}),E),$=t("vkgz"),X=t("/uUt"),H=t("Kj3r"),U=t("eIep"),Y=t("wIdL"),Z=t("1kSV"),ee=t("Exvd"),re=t("CvK3"),te=function(e){return["/order/",e,"invoiceinfo"]},ne=function(e){return["/merchant/",e,"info"]};function ie(e,r){if(1&e){var t=o.Xb();o.Wb(0,"tr"),o.Wb(1,"td",14),o.Wb(2,"a",16),o.Lc(3),o.Vb(),o.Vb(),o.Wb(4,"td"),o.Wb(5,"span",17),o.ic("click",(function(){o.Dc(t);var e=r.$implicit;return o.mc(2).ViewOrderedProducts(null==e?null:e.order_id)})),o.Lc(6," Ordered Products "),o.Vb(),o.Vb(),o.Wb(7,"td"),o.Wb(8,"a",16),o.Lc(9),o.Vb(),o.Vb(),o.Wb(10,"td"),o.Lc(11),o.Vb(),o.Wb(12,"td"),o.Lc(13),o.Vb(),o.Wb(14,"td"),o.Lc(15),o.nc(16,"upperCaseName"),o.Vb(),o.Wb(17,"td"),o.Lc(18),o.nc(19,"date"),o.Vb(),o.Wb(20,"td",18),o.Lc(21),o.nc(22,"upperCaseName"),o.Vb(),o.Wb(23,"td",18),o.Lc(24),o.nc(25,"upperCaseName"),o.Vb(),o.Vb()}if(2&e){var n=r.$implicit;o.Cb(2),o.tc("routerLink",o.xc(19,te,null==n?null:n.order_id)),o.Cb(1),o.Nc(" ",null==n?null:n.order_id," "),o.Cb(5),o.tc("routerLink",o.xc(21,ne,null==n?null:n.store_id)),o.Cb(1),o.Nc(" ",null==n?null:n.store_name," "),o.Cb(2),o.Nc("\u20b9 ",null==n?null:n.order_delivery_fee,""),o.Cb(2),o.Nc("\u20b9 ",null==n?null:n.payable_amount,""),o.Cb(2),o.Mc(o.oc(16,10,null==n?null:n.payment_method_name)),o.Cb(3),o.Mc(o.pc(19,12,null==n?null:n.order_placing_date,"medium")),o.Cb(3),o.Mc(o.oc(22,15,null==n?null:n.order_delivery_person_status_type)),o.Cb(3),o.Mc(o.oc(25,17,null==n?null:n.order_current_status_type))}}function oe(e,r){if(1&e&&(o.Wb(0,"table",13),o.Wb(1,"thead"),o.Wb(2,"tr"),o.Wb(3,"th",14),o.Lc(4,"Transaction Id"),o.Vb(),o.Wb(5,"th"),o.Lc(6,"Product Details"),o.Vb(),o.Wb(7,"th"),o.Lc(8,"Store Name"),o.Vb(),o.Wb(9,"th"),o.Lc(10,"Delivery Fee"),o.Vb(),o.Wb(11,"th"),o.Lc(12,"Payable Amount"),o.Vb(),o.Wb(13,"th"),o.Lc(14,"Payment Mode"),o.Vb(),o.Wb(15,"th"),o.Lc(16,"Order Date"),o.Vb(),o.Wb(17,"th"),o.Lc(18,"Delivery Status"),o.Vb(),o.Wb(19,"th"),o.Lc(20,"Order Status"),o.Vb(),o.Vb(),o.Vb(),o.Wb(21,"tbody"),o.Jc(22,ie,26,23,"tr",15),o.Vb(),o.Vb()),2&e){var t=o.mc();o.Cb(22),o.tc("ngForOf",t.ongoingOrders)}}function ae(e,r){if(1&e){var t=o.Xb();o.Wb(0,"app-pagination",19),o.ic("currentPage",(function(e){return o.Dc(t),o.mc().currentPageFn(e)})),o.Vb()}if(2&e){var n=o.mc();o.tc("totalItemCount",n.ongoing_order_count)}}function ce(e,r){1&e&&(o.Wb(0,"div"),o.Lc(1," No Orders Found "),o.Vb())}function le(e,r){if(1&e&&(o.Wb(0,"div",20),o.Lc(1),o.Vb()),2&e){var t=o.mc();o.Cb(1),o.Nc(" Error: ",t.errorMessage," ")}}var se=function(e){return["/order/",e,"invoiceinfo"]},de=function(e){return["/merchant/",e,"info"]};function be(e,r){if(1&e){var t=o.Xb();o.Wb(0,"tr"),o.Wb(1,"td",14),o.Wb(2,"a",16),o.Lc(3),o.Vb(),o.Vb(),o.Wb(4,"td"),o.Wb(5,"span",17),o.ic("click",(function(){o.Dc(t);var e=r.$implicit;return o.mc(2).ViewOrderedProducts(null==e?null:e.order_id)})),o.Lc(6," Ordered Products "),o.Vb(),o.Vb(),o.Wb(7,"td"),o.Wb(8,"a",16),o.Lc(9),o.Vb(),o.Vb(),o.Wb(10,"td"),o.Lc(11),o.Vb(),o.Wb(12,"td"),o.Lc(13),o.Vb(),o.Wb(14,"td"),o.Lc(15),o.nc(16,"upperCaseName"),o.Vb(),o.Wb(17,"td"),o.Lc(18),o.nc(19,"date"),o.Vb(),o.Wb(20,"td",18),o.Lc(21),o.nc(22,"upperCaseName"),o.Vb(),o.Wb(23,"td",18),o.Lc(24),o.nc(25,"upperCaseName"),o.Vb(),o.Vb()}if(2&e){var n=r.$implicit;o.Cb(2),o.tc("routerLink",o.xc(19,se,null==n?null:n.order_id)),o.Cb(1),o.Nc(" ",null==n?null:n.order_id," "),o.Cb(5),o.tc("routerLink",o.xc(21,de,null==n?null:n.store_id)),o.Cb(1),o.Nc(" ",null==n?null:n.store_name," "),o.Cb(2),o.Nc("\u20b9 ",null==n?null:n.order_delivery_fee,""),o.Cb(2),o.Nc("\u20b9 ",null==n?null:n.payable_amount,""),o.Cb(2),o.Mc(o.oc(16,10,null==n?null:n.payment_method_name)),o.Cb(3),o.Mc(o.pc(19,12,null==n?null:n.order_placing_date,"medium")),o.Cb(3),o.Mc(o.oc(22,15,null==n?null:n.order_delivery_person_status_type)),o.Cb(3),o.Mc(o.oc(25,17,null==n?null:n.order_current_status_type))}}function ue(e,r){if(1&e&&(o.Wb(0,"table",13),o.Wb(1,"thead"),o.Wb(2,"tr"),o.Wb(3,"th",14),o.Lc(4,"Transaction Id"),o.Vb(),o.Wb(5,"th"),o.Lc(6,"Product Details"),o.Vb(),o.Wb(7,"th"),o.Lc(8,"Store Name"),o.Vb(),o.Wb(9,"th"),o.Lc(10,"Delivery Fee"),o.Vb(),o.Wb(11,"th"),o.Lc(12,"Payable Amount"),o.Vb(),o.Wb(13,"th"),o.Lc(14,"Payment Mode"),o.Vb(),o.Wb(15,"th"),o.Lc(16,"Order Date"),o.Vb(),o.Wb(17,"th"),o.Lc(18,"Delivery Status"),o.Vb(),o.Wb(19,"th"),o.Lc(20,"Order Status"),o.Vb(),o.Vb(),o.Vb(),o.Wb(21,"tbody"),o.Jc(22,be,26,23,"tr",15),o.Vb(),o.Vb()),2&e){var t=o.mc();o.Cb(22),o.tc("ngForOf",t.pastOrders)}}function ve(e,r){if(1&e){var t=o.Xb();o.Wb(0,"app-pagination",19),o.ic("currentPage",(function(e){return o.Dc(t),o.mc().currentPageFn(e)})),o.Vb()}if(2&e){var n=o.mc();o.tc("totalItemCount",n.past_order_count)}}function fe(e,r){1&e&&(o.Wb(0,"div"),o.Lc(1," No Orders Found "),o.Vb())}function pe(e,r){if(1&e&&(o.Wb(0,"div",20),o.Lc(1),o.Vb()),2&e){var t=o.mc();o.Cb(1),o.Nc(" Error: ",t.errorMessage," ")}}var me,ge,he,ye,Ce=[{path:"",component:h,resolve:{deliverypersons:_}},{path:":deliveryId",component:j,children:[{path:"",redirectTo:"info",pathMatch:"full"},{path:"info",component:T},{path:"documents",component:G},{path:"realtimeorders",component:(ge=function(){function e(r,t,n,i){_classCallCheck(this,e),this.activatedRoute=r,this.modalService=t,this.deliveryService=n,this.formBuilder=i,this.pageTitle="Ongoing Orders",this.filterBy="",this.errorMessage="",this.currentPage=1,this.pageSize=20,this.searchCriteriaForm=this.formBuilder.group({searchCriteria:[""]})}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.deliveryId=+this.activatedRoute.parent.params._value.deliveryId,this.deliveryService.fetchAllDeliveryPersonRunningOrders(this.deliveryId,this.currentPage,this.pageSize,"").subscribe((function(r){200==+r.status&&(e.ongoing_order_count=r.ongoing_order_count[0].ongoing_orders_count,e.ongoingOrders=r.ongoing_orders_info,console.log(e.ongoingOrders),console.log(e.ongoing_order_count))}))}},{key:"onChanges",value:function(){var e=this;this.searchCriteriaForm.get("searchCriteria").valueChanges.pipe(Object($.a)((function(e){})),Object(X.a)(),Object(H.a)(200),Object(U.a)((function(r){return e.filterBy=r,e.deliveryService.fetchAllDeliveryPersonRunningOrders(e.deliveryId,e.currentPage,e.pageSize,r)}))).subscribe((function(r){e.ongoing_order_count=r.ongoing_orders_count[0].ongoing_order_count,e.ongoingOrders=r.ongoing_orders_info}))}},{key:"ViewOrderedProducts",value:function(e){var r=this.modalService.open(Y.a,{scrollable:!0});r.componentInstance.title="View Products",r.componentInstance.order_id=e}},{key:"currentPageFn",value:function(e){var r=this;console.log(e),this.deliveryService.fetchAllDeliveryPersonRunningOrders(this.deliveryId,e,this.pageSize,this.filterBy).subscribe((function(e){r.ongoingOrders=e.ongoing_orders_info}))}}]),e}(),ge.\u0275fac=function(e){return new(e||ge)(o.Qb(i.a),o.Qb(Z.f),o.Qb(a.a),o.Qb(c.d))},ge.\u0275cmp=o.Kb({type:ge,selectors:[["app-delivery-person-realtime-orders"]],decls:15,vars:6,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col-md-2"],[1,"col-md-4"],[3,"formGroup"],["formControlName","searchCriteria","type","text","id","keyword","placeholder","Search Order By Id","autocomplete","off","autofocus","",1,"form-control",3,"keyup"],[1,"table-responsive"],["style","width:1000px !important","class","table",4,"ngIf"],[3,"totalItemCount","currentPage",4,"ngIf"],[4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[1,"table",2,"width","1000px !important"],[2,"width","90px !important"],[4,"ngFor","ngForOf"],["target","_blank",3,"routerLink"],[2,"display","block","font-size","14px","cursor","pointer","color","blue",3,"click"],[2,"font-weight","bold"],[3,"totalItemCount","currentPage"],[1,"alert","alert-danger"]],template:function(e,r){1&e&&(o.Wb(0,"div",0),o.Wb(1,"div",1),o.Lc(2),o.Vb(),o.Wb(3,"div",2),o.Wb(4,"div",3),o.Wb(5,"div",4),o.Lc(6,"Filter by:"),o.Vb(),o.Wb(7,"div",5),o.Wb(8,"form",6),o.Wb(9,"input",7),o.ic("keyup",(function(){return r.onChanges()})),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(10,"div",8),o.Jc(11,oe,23,1,"table",9),o.Jc(12,ae,1,1,"app-pagination",10),o.Jc(13,ce,2,0,"div",11),o.Vb(),o.Vb(),o.Vb(),o.Jc(14,le,2,1,"div",12)),2&e&&(o.Cb(2),o.Nc(" ",r.pageTitle," "),o.Cb(6),o.tc("formGroup",r.searchCriteriaForm),o.Cb(3),o.tc("ngIf",r.ongoing_order_count),o.Cb(1),o.tc("ngIf",r.ongoing_order_count),o.Cb(1),o.tc("ngIf",0==r.ongoing_order_count),o.Cb(1),o.tc("ngIf",r.errorMessage))},directives:[c.w,c.n,c.f,c.c,c.m,c.e,n.n,n.m,i.i,ee.a],pipes:[re.a,n.e],styles:[""]}),ge)},{path:"pastorders",component:(me=function(){function e(r,t,n,i){_classCallCheck(this,e),this.activatedRoute=r,this.modalService=t,this.deliveryService=n,this.formBuilder=i,this.pageTitle="Past Orders",this.filterBy="",this.errorMessage="",this.currentPage=1,this.pageSize=20,this.searchCriteriaForm=this.formBuilder.group({searchCriteria:[""]})}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.deliveryId=+this.activatedRoute.parent.params._value.deliveryId,this.deliveryService.fetchAllDeliveryPersonPastOrders(this.deliveryId,this.currentPage,this.pageSize,"").subscribe((function(r){200==+r.status&&(e.past_order_count=r.deliveryperson_pastorders_count[0].deliveryperson_pastorders_count,e.pastOrders=r.deliveryperson_pastorders_info,console.log(e.pastOrders),console.log(e.past_order_count))}))}},{key:"onChanges",value:function(){var e=this;this.searchCriteriaForm.get("searchCriteria").valueChanges.pipe(Object($.a)((function(e){})),Object(X.a)(),Object(H.a)(200),Object(U.a)((function(r){return e.filterBy=r,e.deliveryService.fetchAllDeliveryPersonPastOrders(e.deliveryId,e.currentPage,e.pageSize,r)}))).subscribe((function(r){e.past_order_count=r.deliveryperson_pastorders_count[0].deliveryperson_pastorders_count,e.pastOrders=r.deliveryperson_pastorders_info}))}},{key:"ViewOrderedProducts",value:function(e){var r=this.modalService.open(Y.a,{scrollable:!0});r.componentInstance.title="View Products",r.componentInstance.order_id=e}},{key:"currentPageFn",value:function(e){var r=this;console.log(e),this.deliveryService.fetchAllDeliveryPersonPastOrders(this.deliveryId,e,this.pageSize,this.filterBy).subscribe((function(e){r.pastOrders=e.deliveryperson_pastorders_info}))}}]),e}(),me.\u0275fac=function(e){return new(e||me)(o.Qb(i.a),o.Qb(Z.f),o.Qb(a.a),o.Qb(c.d))},me.\u0275cmp=o.Kb({type:me,selectors:[["app-delivery-person-past-orders"]],decls:15,vars:6,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col-md-2"],[1,"col-md-4"],[3,"formGroup"],["formControlName","searchCriteria","type","text","id","keyword","placeholder","Search Order By Id","autocomplete","off","autofocus","",1,"form-control",3,"keyup"],[1,"table-responsive"],["style","width:1000px !important","class","table",4,"ngIf"],[3,"totalItemCount","currentPage",4,"ngIf"],[4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[1,"table",2,"width","1000px !important"],[2,"width","90px !important"],[4,"ngFor","ngForOf"],["target","_blank",3,"routerLink"],[2,"display","block","font-size","14px","cursor","pointer","color","blue",3,"click"],[2,"font-weight","bold"],[3,"totalItemCount","currentPage"],[1,"alert","alert-danger"]],template:function(e,r){1&e&&(o.Wb(0,"div",0),o.Wb(1,"div",1),o.Lc(2),o.Vb(),o.Wb(3,"div",2),o.Wb(4,"div",3),o.Wb(5,"div",4),o.Lc(6,"Filter by:"),o.Vb(),o.Wb(7,"div",5),o.Wb(8,"form",6),o.Wb(9,"input",7),o.ic("keyup",(function(){return r.onChanges()})),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(10,"div",8),o.Jc(11,ue,23,1,"table",9),o.Jc(12,ve,1,1,"app-pagination",10),o.Jc(13,fe,2,0,"div",11),o.Vb(),o.Vb(),o.Vb(),o.Jc(14,pe,2,1,"div",12)),2&e&&(o.Cb(2),o.Nc(" ",r.pageTitle," "),o.Cb(6),o.tc("formGroup",r.searchCriteriaForm),o.Cb(3),o.tc("ngIf",r.past_order_count),o.Cb(1),o.tc("ngIf",r.past_order_count),o.Cb(1),o.tc("ngIf",0==r.past_order_count),o.Cb(1),o.tc("ngIf",r.errorMessage))},directives:[c.w,c.n,c.f,c.c,c.m,c.e,n.n,n.m,i.i,ee.a],pipes:[re.a,n.e],styles:[""]}),me)}]},{path:":deliveryId/edit",component:R}],Ve=((he=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ob({type:he}),he.\u0275inj=o.Nb({factory:function(e){return new(e||he)},imports:[[n.c,i.j.forChild(Ce)],i.j]}),he),_e=t("PCNd"),We=((ye=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ob({type:ye}),ye.\u0275inj=o.Nb({factory:function(e){return new(e||ye)},imports:[[n.c,_e.a,c.r,Ve]]}),ye)}}]);