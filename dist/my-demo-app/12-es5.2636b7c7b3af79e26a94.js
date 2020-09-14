function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{AehD:function(e,t,n){"use strict";n.r(t);var c,r,o=n("fXoL"),a=n("ofXK"),i=n("tyNb"),s=n("R5w1"),d=n("vkgz"),b=n("/uUt"),u=n("Kj3r"),f=n("eIep"),l=n("3Pt+"),m=n("z6cu"),p=n("tk/3"),h=n("lJxs"),k=n("JIr8"),v=((c=function(){function e(t){_classCallCheck(this,e),this.httpClient=t,this.customerServiceUrl="https://api.grostep.com/customerapi/"}return _createClass(e,[{key:"fetchAllFeedBacks",value:function(e,t,n){var c={};return c.page_number=e,c.page_size=t,c.filterBy=n,this.httpClient.post("".concat(this.customerServiceUrl,"customerFeedback"),c).pipe(Object(d.a)((function(e){})),Object(h.a)((function(e){return e})),Object(k.a)(this.handleError))}},{key:"addNewFeedBack",value:function(e){var t=this,n=JSON.parse(localStorage.getItem("currentUser")),c={};c.customer_id=e.customer_id,c.name=e.name,c.email=e.email,c.phone=e.phone,c.message=e.message,c.parentId=0,c.actionBy=n.employee_id,c.customerCity=e.customerCity,c.ticketMode=2;var r="".concat(this.customerServiceUrl,"addCustomerFeedback"),o=new p.c({"Content-Type":"application/json"});return this.httpClient.post(r,c,{headers:o}).pipe(Object(d.a)((function(e){})),Object(h.a)((function(e){return e})),Object(k.a)((function(e){return t.handleError(e)})))}},{key:"editFeedBack",value:function(e,t){}},{key:"handleError",value:function(e){var t=new s.a;return t.errorNumber=100,t.errorMessage="Server returned code: ".concat(e.status,", error message is: ").concat(e.message),t.friendlyMessage="An error retriving data",Object(m.a)(t)}}]),e}()).ngInjectableDef=o.Ob({token:c,factory:function(e){return new(e||c)(o.hc(p.a))},providedIn:"root"}),c),g=["app-feedback-data",""],C=[2,"width","50px"],B=["rows","2","cols","40"],W=[2,"font-weight","bold"],Y=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).ngComponentDef=o.Mb({type:r,selectors:[["","app-feedback-data",""]],factory:function(e){return new(e||r)},inputs:{feedBackInfo:"feedBackInfo"},attrs:g,consts:18,vars:8,template:function(e,t){1&e&&(o.Yb(0,"td"),o.Mc(1),o.Wb(),o.Yb(2,"td",C),o.Mc(3),o.Wb(),o.Yb(4,"td"),o.Mc(5),o.Wb(),o.Yb(6,"td"),o.Yb(7,"textarea",B),o.Mc(8),o.Wb(),o.Wb(),o.Yb(9,"td"),o.Mc(10),o.Wb(),o.Yb(11,"td"),o.Mc(12),o.Wb(),o.Yb(13,"td"),o.Mc(14),o.Wb(),o.Yb(15,"td",W),o.Mc(16),o.Wb(),o.Tb(17,"td")),2&e&&(o.Cc(1),o.Oc(" ",null==t.feedBackInfo?null:t.feedBackInfo.customer_feedback_id,"\n"),o.Cc(3),o.Oc(" ",null==t.feedBackInfo?null:t.feedBackInfo.customer_phone," "),o.Cc(5),o.Oc(" ",null==t.feedBackInfo?null:t.feedBackInfo.customer_name,"\n"),o.Cc(8),o.Oc("      ",null==t.feedBackInfo?null:t.feedBackInfo.customer_feedback,"\n  "),o.Cc(10),o.Oc(" ",null==t.feedBackInfo?null:t.feedBackInfo.city,"\n"),o.Cc(12),o.Oc(" ",null==t.feedBackInfo?null:t.feedBackInfo.mode,"\n"),o.Cc(14),o.Oc(" ",null==t.feedBackInfo?null:t.feedBackInfo.action_by,"\n"),o.Cc(16),o.Oc(" ",1===(null==t.feedBackInfo?null:t.feedBackInfo.status)?"Created":"Completed","\n"))},styles:['.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:45px;height:20px;margin:20px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none;background-color:#ccc}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:0;right:0;bottom:-3px;background-color:#2196f3;transition:.4s}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(20px)}.slider.round[_ngcontent-%COMP%]{border-radius:20px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}']}),r),y=n("Exvd"),I=[1,"card"],M=[1,"card-header"],_=[1,"card-body"],F=[1,"row"],O=[1,"col-md-2"],w=[1,"col-md-4"],S=[3,"formGroup"],P=["formControlName","searchCriteria","type","text","id","keyword","placeholder","Search FeedBack By Phone Number","autocomplete","off","autofocus","",1,"form-control",3,"keyup"],j=[1,"col-md-6"],N=["type","button","target","_blank",1,"btn","btn-outline-secondary",2,"float","right",3,"routerLink"],x=[1,"table-responsive"],A=["style","width:1200px !important","class","table",4,"ngIf"],K=[3,"totalItemCount","currentPage",4,"ngIf"],D=[4,"ngIf"],T=["class","alert alert-danger",4,"ngIf"],q=[1,"table",2,"width","1200px !important"],z=[2,"width","90px !important"],E=["app-feedback-data","",3,"feedBackInfo",4,"ngFor","ngForOf"],G=["app-feedback-data","",3,"feedBackInfo"];function R(e,t){1&e&&o.Tb(0,"tr",G),2&e&&o.sc("feedBackInfo",t.$implicit)}function J(e,t){if(1&e&&(o.Yb(0,"table",q),o.Yb(1,"thead"),o.Yb(2,"tr"),o.Yb(3,"th",z),o.Mc(4,"Id"),o.Wb(),o.Yb(5,"th"),o.Mc(6,"Phone"),o.Wb(),o.Yb(7,"th"),o.Mc(8,"Name"),o.Wb(),o.Yb(9,"th"),o.Mc(10,"Feedback"),o.Wb(),o.Yb(11,"th"),o.Mc(12,"City"),o.Wb(),o.Yb(13,"th"),o.Mc(14,"Mode"),o.Wb(),o.Yb(15,"th"),o.Mc(16,"Action By"),o.Wb(),o.Yb(17,"th"),o.Mc(18,"Status"),o.Wb(),o.Tb(19,"th"),o.Wb(),o.Wb(),o.Yb(20,"tbody"),o.Kc(21,R,1,1,"tr",E),o.Wb(),o.Wb()),2&e){var n=o.mc();o.Cc(21),o.sc("ngForOf",n.feedBacks)}}var U=[3,"totalItemCount","currentPage"];function L(e,t){if(1&e){var n=o.Zb();o.Yb(0,"app-pagination",U),o.jc("currentPage",(function(e){return o.Ac(n),o.mc().currentPageFn(e)})),o.Wb()}if(2&e){var c=o.mc();o.sc("totalItemCount",c.feedBacktotalcount)}}function X(e,t){1&e&&(o.Yb(0,"div"),o.Mc(1," No FeedBack Data Found "),o.Wb())}var Q=[1,"alert","alert-danger"];function Z(e,t){if(1&e&&(o.Yb(0,"div",Q),o.Mc(1),o.Wb()),2&e){var n=o.mc();o.Cc(1),o.Oc(" Error: ",n.errorMessage,"\n")}}var $,H=["/feedbacks/",0,"edit"],V=(($=function(){function e(t,n,c){_classCallCheck(this,e),this.formBuilder=t,this.feedBackService=n,this.activatedRoute=c,this.pageTitle="Feedbacks Dashboard",this.filterBy="",this.currentPage=1,this.pageSize=20,this.searchCriteriaForm=this.formBuilder.group({searchCriteria:[""]})}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this.activatedRoute.snapshot.data.resolvedFeedBacks;e instanceof s.a?this.errorMessage=e.errorMessage:(this.feedBacktotalcount=e.customer_feedback_count[0].customer_feedback_count,this.feedBacks=e.customer_feedback_info)}},{key:"onChanges",value:function(){var e=this;this.searchCriteriaForm.get("searchCriteria").valueChanges.pipe(Object(d.a)((function(e){})),Object(b.a)(),Object(u.a)(200),Object(f.a)((function(t){return e.filterBy=t,e.feedBackService.fetchAllFeedBacks(e.currentPage,e.pageSize,t)}))).subscribe((function(t){console.log(t),e.feedBacktotalcount=t.customer_feedback_count[0].customer_feedback_count,e.feedBacks=t.customer_feedback_info}))}},{key:"currentPageFn",value:function(e){var t=this;this.feedBackService.fetchAllFeedBacks(e,this.pageSize,this.filterBy).subscribe((function(e){t.feedBacktotalcount=e.customer_feedback_count.customer_feedback_count,t.feedBacks=e.customer_feedback_info}))}}]),e}()).ngComponentDef=o.Mb({type:$,selectors:[["app-feedback-dashboard"]],factory:function(e){return new(e||$)(o.Sb(l.c),o.Sb(v),o.Sb(i.a))},consts:18,vars:7,template:function(e,t){1&e&&(o.Yb(0,"div",I),o.Yb(1,"div",M),o.Mc(2),o.Wb(),o.Yb(3,"div",_),o.Yb(4,"div",F),o.Yb(5,"div",O),o.Mc(6,"Filter by:"),o.Wb(),o.Yb(7,"div",w),o.Yb(8,"form",S),o.Yb(9,"input",P),o.jc("keyup",(function(e){return t.onChanges()})),o.Wb(),o.Wb(),o.Wb(),o.Yb(10,"div",j),o.Yb(11,"a",N),o.Mc(12," Add New FeedBack "),o.Wb(),o.Wb(),o.Wb(),o.Yb(13,"div",x),o.Kc(14,J,22,1,"table",A),o.Kc(15,L,1,1,"app-pagination",K),o.Kc(16,X,2,0,"div",D),o.Wb(),o.Wb(),o.Wb(),o.Kc(17,Z,2,1,"div",T)),2&e&&(o.Cc(2),o.Oc(" ",t.pageTitle," "),o.Cc(8),o.sc("formGroup",t.searchCriteriaForm),o.Cc(11),o.sc("routerLink",H),o.Cc(14),o.sc("ngIf",t.feedBacktotalcount),o.Cc(15),o.sc("ngIf",t.feedBacktotalcount),o.Cc(16),o.sc("ngIf",0==t.feedBacktotalcount),o.Cc(17),o.sc("ngIf",t.errorMessage))},directives:[l.v,l.l,l.e,l.b,l.k,l.d,i.i,a.m,a.l,Y,y.a],styles:[""]}),$),ee=n("LRne"),te=[1,"jumbotron"],ne=[1,"container"],ce=[1,"row"],re=[1,"col-md-6","offset-md-3"],oe=[3,"formGroup","ngSubmit"],ae=[1,"col-md-6"],ie=[1,"form-group"],se=["type","text","formControlName","customer_id",1,"form-control"],de=["type","text","formControlName","name",1,"form-control",3,"ngClass"],be=["class","invalid-feedback",4,"ngIf"],ue=["type","text","formControlName","phone","maxlength","10","minlength","10",1,"form-control",3,"ngClass"],fe=["type","text","formControlName","email",1,"form-control"],le=["row","3","formControlName","message",1,"form-control",3,"ngClass"],me=["formControlName","customerCity",1,"form-control"],pe=["selected","","value","Noida"],he=["selected","","value","Gurgaon"],ke=["selected","","value","Ghaziabad"],ve=["selected","","value","Agra"],ge=[1,"btn","btn-primary",3,"disabled"],Ce=[1,"invalid-feedback"],Be=[4,"ngIf"];function We(e,t){1&e&&(o.Yb(0,"div"),o.Mc(1,"Customer Name is required"),o.Wb())}function Ye(e,t){if(1&e&&(o.Yb(0,"div",Ce),o.Kc(1,We,2,0,"div",Be),o.Wb()),2&e){var n=o.mc();o.Cc(1),o.sc("ngIf",n.f.name.errors.required)}}function ye(e,t){1&e&&(o.Yb(0,"div"),o.Mc(1,"Phone Number is required"),o.Wb())}function Ie(e,t){if(1&e&&(o.Yb(0,"div",Ce),o.Kc(1,ye,2,0,"div",Be),o.Wb()),2&e){var n=o.mc();o.Cc(1),o.sc("ngIf",n.f.phone.errors.required)}}function Me(e,t){1&e&&(o.Yb(0,"div"),o.Mc(1,"Feedback message is required"),o.Wb())}function _e(e,t){if(1&e&&(o.Yb(0,"div",Ce),o.Kc(1,Me,2,0,"div",Be),o.Wb()),2&e){var n=o.mc();o.Cc(1),o.sc("ngIf",n.f.message.errors.required)}}var Fe,Oe,we,Se=function(e){return{"is-invalid":e}},Pe=[{path:"",component:V,resolve:{resolvedFeedBacks:(Oe=function(){function e(t){_classCallCheck(this,e),this.feedBackService=t,this.pagenumber=1,this.pagesize=20,this.filterBy=""}return _createClass(e,[{key:"resolve",value:function(e,t){return this.feedBackService.fetchAllFeedBacks(this.pagenumber,this.pagesize,this.filterBy).pipe(Object(k.a)((function(e){return Object(ee.a)(e)})))}}]),e}(),Oe.ngInjectableDef=o.Ob({token:Oe,factory:function(e){return new(e||Oe)(o.hc(v))},providedIn:"root"}),Oe)}},{path:":feedbackId/edit",component:(Fe=function(){function e(t,n,c,r){_classCallCheck(this,e),this.formBuilder=t,this.activatedRoute=n,this.feedBackService=c,this.router=r,this.addFeedBackForm=this.formBuilder.group({customer_id:[""],name:["",l.t.required],email:[""],phone:["",l.t.required],message:["",l.t.required],customerCity:[""]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.feedbackId=+this.activatedRoute.snapshot.params.feedbackId}},{key:"onSubmit",value:function(){var e=this;this.submitted=!0,this.addFeedBackForm.invalid||0===this.feedbackId&&this.feedBackService.addNewFeedBack(this.addFeedBackForm.value).subscribe((function(t){console.log(t),"200"==t.status&&e.router.navigate(["feedbacks"]),"400"==t.status&&alert("FeedBack Not Added . Internal Server Error")}),(function(t){e.errorMessage=t}))}},{key:"f",get:function(){return this.addFeedBackForm.controls}}]),e}(),Fe.ngComponentDef=o.Mb({type:Fe,selectors:[["app-feedback-edit"]],factory:function(e){return new(e||Fe)(o.Sb(l.c),o.Sb(i.a),o.Sb(v),o.Sb(i.f))},consts:49,vars:14,template:function(e,t){1&e&&(o.Yb(0,"div",te),o.Yb(1,"div",ne),o.Yb(2,"div",ce),o.Yb(3,"div",re),o.Yb(4,"h2"),o.Mc(5,"Add New FeedBack"),o.Wb(),o.Yb(6,"form",oe),o.jc("ngSubmit",(function(e){return t.onSubmit()})),o.Yb(7,"div",ce),o.Yb(8,"div",ae),o.Yb(9,"div",ie),o.Yb(10,"label"),o.Mc(11,"Customer Id"),o.Wb(),o.Tb(12,"input",se),o.Wb(),o.Wb(),o.Yb(13,"div",ae),o.Yb(14,"div",ie),o.Yb(15,"label"),o.Mc(16,"Customer Name"),o.Wb(),o.Tb(17,"input",de),o.Kc(18,Ye,2,1,"div",be),o.Wb(),o.Wb(),o.Wb(),o.Yb(19,"div",ie),o.Yb(20,"label"),o.Mc(21,"Customer Phone"),o.Wb(),o.Tb(22,"input",ue),o.Kc(23,Ie,2,1,"div",be),o.Wb(),o.Yb(24,"div",ie),o.Yb(25,"label"),o.Mc(26,"Customer Email"),o.Wb(),o.Tb(27,"input",fe),o.Wb(),o.Yb(28,"div",ie),o.Yb(29,"label"),o.Mc(30,"Customer Feedback"),o.Wb(),o.Tb(31,"textarea",le),o.Kc(32,_e,2,1,"div",be),o.Wb(),o.Yb(33,"div",ie),o.Yb(34,"label"),o.Mc(35,"City"),o.Wb(),o.Yb(36,"div"),o.Yb(37,"select",me),o.Yb(38,"option",pe),o.Mc(39,"Noida"),o.Wb(),o.Yb(40,"option",he),o.Mc(41,"Gurgaon"),o.Wb(),o.Yb(42,"option",ke),o.Mc(43,"Ghaziabad"),o.Wb(),o.Yb(44,"option",ve),o.Mc(45,"Agra"),o.Wb(),o.Wb(),o.Wb(),o.Wb(),o.Yb(46,"div",ie),o.Yb(47,"button",ge),o.Mc(48,"Save"),o.Wb(),o.Wb(),o.Wb(),o.Wb(),o.Wb(),o.Wb(),o.Wb()),2&e&&(o.Cc(6),o.sc("formGroup",t.addFeedBackForm),o.Cc(17),o.sc("ngClass",o.vc(8,Se,t.submitted&&t.f.name.errors)),o.Cc(18),o.sc("ngIf",t.submitted&&t.f.name.errors),o.Cc(22),o.sc("ngClass",o.vc(10,Se,t.submitted&&t.f.phone.errors)),o.Cc(23),o.sc("ngIf",t.submitted&&t.f.phone.errors),o.Cc(31),o.sc("ngClass",o.vc(12,Se,t.submitted&&t.f.message.errors)),o.Cc(32),o.sc("ngIf",t.submitted&&t.f.message.errors),o.Cc(47),o.sc("disabled",!t.addFeedBackForm.valid))},directives:[l.v,l.l,l.e,l.b,l.k,l.d,a.k,a.m,l.g,l.h,l.s,l.o,l.u],styles:[""]}),Fe)}],je=((we=function e(){_classCallCheck(this,e)}).ngModuleDef=o.Qb({type:we}),we.ngInjectorDef=o.Pb({factory:function(e){return new(e||we)},imports:[[i.j.forChild(Pe)],i.j]}),we);i.j.forChild(Pe);var Ne=n("PCNd");n.d(t,"FeedbacksModule",(function(){return Ae}));var xe,Ae=((xe=function e(){_classCallCheck(this,e)}).ngModuleDef=o.Qb({type:xe}),xe.ngInjectorDef=o.Pb({factory:function(e){return new(e||xe)},imports:[[a.b,l.q,je,Ne.a]]}),xe)}}]);