(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{lE2P:function(t,c,e){"use strict";e.r(c);var r=e("fXoL"),o=e("QJ7G"),i=e("tyNb"),a=e("ofXK"),d=e("Q6/5");const n=["class","card",4,"ngIf"],s=["class","alert alert-danger",4,"ngIf"],u=[1,"card"],b=[1,"card-header"],l=[1,"card-body"],p=[1,"row"],g=[1,"col-md-8"],m=[1,"col-md-4"],v=[3,"rating","ratingClicked"],f=[1,"center-block","img-responsive",3,"src","title"],h=[1,"card-footer"],C=[1,"btn","btn-outline-secondary",2,"width","80px",3,"click"],W=[1,"fa","fa-chevron-left"];function Y(t,c){if(1&t){const t=r.Zb();r.Yb(0,"div",u),r.Yb(1,"div",b),r.Mc(2),r.Wb(),r.Yb(3,"div",l),r.Yb(4,"div",p),r.Yb(5,"div",g),r.Yb(6,"div",p),r.Yb(7,"div",m),r.Mc(8,"Name:"),r.Wb(),r.Yb(9,"div",g),r.Mc(10),r.Wb(),r.Wb(),r.Yb(11,"div",p),r.Yb(12,"div",m),r.Mc(13,"Code:"),r.Wb(),r.Yb(14,"div",g),r.Mc(15),r.Wb(),r.Wb(),r.Yb(16,"div",p),r.Yb(17,"div",m),r.Mc(18,"Release Date:"),r.Wb(),r.Yb(19,"div",g),r.Mc(20),r.nc(21,"date"),r.Wb(),r.Wb(),r.Yb(22,"div",p),r.Yb(23,"div",m),r.Mc(24,"Last Updated:"),r.Wb(),r.Yb(25,"div",g),r.Mc(26),r.nc(27,"date"),r.Wb(),r.Wb(),r.Yb(28,"div",p),r.Yb(29,"div",m),r.Mc(30,"Description:"),r.Wb(),r.Yb(31,"div",g),r.Mc(32),r.Wb(),r.Wb(),r.Yb(33,"div",p),r.Yb(34,"div",m),r.Mc(35,"Price:"),r.Wb(),r.Yb(36,"div",g),r.Mc(37),r.Wb(),r.Wb(),r.Yb(38,"div",p),r.Yb(39,"div",m),r.Mc(40,"Star Rating:"),r.Wb(),r.Yb(41,"div",g),r.Yb(42,"app-star",v),r.jc("ratingClicked",(function(c){return r.Ac(t),r.mc().onRatingClicked(c)})),r.Wb(),r.Wb(),r.Wb(),r.Yb(43,"div",p),r.Yb(44,"div",m),r.Mc(45,"Category Name:"),r.Wb(),r.Yb(46,"div",g),r.Mc(47),r.Wb(),r.Wb(),r.Yb(48,"div",p),r.Yb(49,"div",m),r.Mc(50,"Available:"),r.Wb(),r.Yb(51,"div",g),r.Mc(52),r.Wb(),r.Wb(),r.Wb(),r.Yb(53,"div",m),r.Yb(54,"img",f),r.Ic(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Yb(55,"div",h),r.Yb(56,"button",C),r.jc("click",(function(c){return r.Ac(t),r.mc().onBack()})),r.Tb(57,"i",W),r.Mc(58," Back "),r.Wb(),r.Yb(59,"button",C),r.jc("click",(function(c){return r.Ac(t),r.mc().onEdit()})),r.Tb(60,"i",W),r.Mc(61," Edit "),r.Wb(),r.Wb(),r.Wb()}if(2&t){const t=r.mc();r.Cc(2),r.Oc(" ",t.pageTitle," "),r.Cc(10),r.Nc(null==t.productData?null:t.productData.productName),r.Cc(15),r.Nc(null==t.productData?null:t.productData.productCode),r.Cc(20),r.Nc(r.pc(21,14,null==t.productData?null:t.productData.releaseDate,"medium")),r.Cc(26),r.Nc(r.pc(27,17,null==t.productData?null:t.productData.lastUpdated,"medium")),r.Cc(32),r.Nc(null==t.productData?null:t.productData.description),r.Cc(37),r.Nc(null==t.productData?null:t.productData.price),r.Cc(42),r.sc("rating",null==t.productData?null:t.productData.starRating),r.Cc(47),r.Nc(null==t.productData?null:t.productData.categoryName),r.Cc(52),r.Nc(null==t.productData?null:t.productData.available?"Available":"Not Available"),r.Cc(54),r.Hc("width",200,"px"),r.Hc("margin",2,"px"),r.Jc(),r.uc("src","assets/product_images/",null==t.productData?null:t.productData.image_url,"",r.Bc),r.sc("title",null==t.productData?null:t.productData.productName)}}const D=[1,"alert","alert-danger"];function y(t,c){if(1&t&&(r.Yb(0,"div",D),r.Mc(1),r.Wb()),2&t){const t=r.mc();r.Cc(1),r.Oc("",t.errorMessage,"\n")}}let M=(()=>{class t{constructor(t,c,e){this._productService=t,this.router=c,this._activatedRoute=e}onBack(){this.router.navigate(["/products"],{queryParamsHandling:"preserve"})}onEdit(){this.router.navigate(["products",this.productId,"edit"])}ngOnInit(){const t=this._activatedRoute.snapshot.data.product;this.errorMessage=t.error,this.onProductRetrieved(t.product)}onRatingClicked(t){console.log(t)}onProductRetrieved(t){this.productData=t,this.pageTitle=this.productData?`Product Detail: ${this.productData.productName}`:"No product found"}}return t.ngComponentDef=r.Mb({type:t,selectors:[["ng-component"]],factory:function(c){return new(c||t)(r.Sb(o.a),r.Sb(i.f),r.Sb(i.a))},consts:2,vars:2,template:function(t,c){1&t&&(r.Kc(0,Y,62,20,"div",n),r.Kc(1,y,2,1,"div",s)),2&t&&(r.sc("ngIf",c.productData),r.Cc(1),r.sc("ngIf",c.errorMessage))},directives:[a.m,d.a],pipes:[a.d],styles:[""]}),t})();var P=e("PCNd"),I=e("LRne"),_=e("lJxs"),N=e("JIr8");let S=(()=>{class t{constructor(t){this.productDataService=t}resolve(t,c){const e=+t.paramMap.get("id");if(isNaN(e)){const t=`Product id is not a number:${e}`;return console.error(t),Object(I.a)({product:null,error:t})}return this.productDataService.getProduct(e).pipe(Object(_.a)(t=>({product:t,error:""})),Object(N.a)(t=>{const c=`Retrieval error: ${t}`;return Object(I.a)({product:null,error:c})}))}}return t.ngInjectableDef=r.Ob({token:t,factory:function(c){return new(c||t)(r.hc(o.a))},providedIn:"root"}),t})(),k=(()=>{class t{constructor(t){this.productDataService=t}resolve(t,c){return this.productDataService.getProducts(1,20,"").pipe(Object(_.a)(t=>({product:t.products,product_total_count:t.productCount,error:""})),Object(N.a)(t=>{const c=`Retrieval error: ${t}`;return Object(I.a)({product:null,error:c})}))}}return t.ngInjectableDef=r.Ob({token:t,factory:function(c){return new(c||t)(r.hc(o.a))},providedIn:"root"}),t})();var O=e("vkgz"),j=e("/uUt"),w=e("Kj3r"),R=e("eIep"),F=e("kt0X");const K={showProductCode:!0,currentProduct:null,products:[]};function T(t=K,c){switch(c.type){case"TOGGLE_PRODUCT_CODE":return Object.assign({},t,{showProductCode:c.payload});default:return t}}const x=Object(F.m)("products"),q=Object(F.n)(x,t=>t.showProductCode);var A=e("3Pt+"),E=e("Exvd"),B=e("CvK3");const V=[4,"ngIf"];function U(t,c){if(1&t&&(r.Vb(0),r.Mc(1),r.Ub()),2&t){const t=r.mc();r.Cc(1),r.Oc(" - ",null==t.productData?null:t.productData.productCode,"\n")}}let $=(()=>{class t{constructor(t){this.store=t,this.showProductCode=!1}ngOnInit(){this.store.pipe(Object(F.o)(q)).subscribe(t=>{this.showProductCode=t})}}return t.ngComponentDef=r.Mb({type:t,selectors:[["app-product-shell-list-item"]],factory:function(c){return new(c||t)(r.Sb(F.h))},inputs:{productData:["productInfo1","productData"]},consts:3,vars:4,template:function(t,c){1&t&&(r.Mc(0),r.nc(1,"upperCaseName"),r.Kc(2,U,2,1,"ng-container",V)),2&t&&(r.Oc("",r.oc(1,2,null==c.productData?null:c.productData.productName),"\n"),r.Cc(2),r.sc("ngIf",c.showProductCode))},directives:[a.m],pipes:[B.a],styles:[""]}),t})();const G=[1,"card"],L=[1,"card-header"],J=[1,"btn","btn-outline-secondary",2,"float","right",3,"click"],Z=[1,"card-body"],H=[3,"formGroup"],z=[1,"form-group"],Q=["formControlName","searchCriteria","type","text","id","inputError","autocomplete","off","autofocus","","placeholder","Search Products",1,"form-control",3,"keyup"],X=[1,"glyphicon","glyphicon-remove","form-control-feedback"],tt=[4,"ngIf"],ct=[1,"card-footer"],et=[1,"row"],rt=[1,"form-check","col-md-12"],ot=["type","checkbox",1,"form-check-input",3,"checked","change"],it=["class","alert alert-danger",4,"ngIf"],at=[3,"totalItemCount","currentPage",4,"ngIf"],dt=[1,"list-group"],nt=["type","button","class","list-group-item",3,"ngClass","click",4,"ngFor","ngForOf"],st=[3,"totalItemCount","currentPage"];function ut(t,c){if(1&t){const t=r.Zb();r.Yb(0,"app-pagination",st),r.jc("currentPage",(function(c){return r.Ac(t),r.mc(2).currentPageFn(c)})),r.Wb()}if(2&t){const t=r.mc(2);r.sc("totalItemCount",t.productsCount)}}const bt=["type","button",1,"list-group-item",3,"ngClass","click"],lt=[3,"productInfo1"],pt=function(t){return{active:t}};function gt(t,c){if(1&t){const t=r.Zb();r.Yb(0,"button",bt),r.jc("click",(function(e){r.Ac(t);const o=c.$implicit;return r.mc(2).onSelected(o)})),r.Tb(1,"app-product-shell-list-item",lt),r.Wb()}if(2&t){const t=c.$implicit,e=r.mc(2);r.sc("ngClass",r.vc(2,pt,(null==e.selectedProduct?null:e.selectedProduct.productId)==(null==t?null:t.productId))),r.Cc(1),r.sc("productInfo1",t)}}function mt(t,c){if(1&t&&(r.Yb(0,"div"),r.Kc(1,ut,1,1,"app-pagination",at),r.Yb(2,"div",dt),r.Kc(3,gt,2,4,"button",nt),r.Wb(),r.Wb()),2&t){const t=r.mc();r.Cc(1),r.sc("ngIf",t.productsCount>0),r.Cc(3),r.sc("ngForOf",t.products)}}function vt(t,c){1&t&&(r.Yb(0,"div"),r.Yb(1,"span"),r.Mc(2,"No Products Found in catelog"),r.Wb(),r.Wb())}const ft=[1,"alert","alert-danger"];function ht(t,c){if(1&t&&(r.Yb(0,"div",ft),r.Mc(1),r.Wb()),2&t){const t=r.mc();r.Cc(1),r.Oc(" Error: ",t.errorMessage," ")}}let Ct=(()=>{class t{constructor(t,c,e,r,o){this._productService=t,this.router=c,this.formBuilder=e,this.store=r,this._activatedRoute=o,this.filterBy="",this.pageTitle="Products Listing",this.productsCount=0,this.Pages=[],this.pageSize=20,this.searchCriteriaForm=this.formBuilder.group({searchCriteria:[""]})}ngOnInit(){this.currentPage=1,this.sub=this._productService.selectProductChanges$.subscribe(t=>{this.selectedProduct=t}),this.store.pipe(Object(F.o)(q)).subscribe(t=>{this.displayCode=t});let t=this._activatedRoute.snapshot.data.products.product;this.productsCount=+this._activatedRoute.snapshot.data.products.product_total_count,this.onProductRetrieved(t)}onChanges(){this.searchCriteriaForm.get("searchCriteria").valueChanges.pipe(Object(O.a)(t=>{console.log(t)}),Object(j.a)(),Object(w.a)(2e3),Object(R.a)(t=>(this.filterBy=t,console.log(this.filterBy),this._productService.getProducts(this.currentPage,this.pageSize,this.filterBy)))).subscribe(t=>{this.onProductRetrieved(t.products),this.productsCount=t.productCount})}currentPageFn(t){this.currentPage=t,this._productService.getProducts(this.currentPage,this.pageSize,this.filterBy).subscribe(t=>{this.onProductRetrieved(t.products)})}checkChanged(t){this.store.dispatch({type:"TOGGLE_PRODUCT_CODE",payload:t})}onSelected(t){this._productService.changeSelectedProduct(t.productId)}onProductRetrieved(t){this.products=t}addProduct(){this.router.navigate(["products","0","edit"])}ngOnDestroy(){this.sub.unsubscribe()}}return t.ngComponentDef=r.Mb({type:t,selectors:[["app-product-shell-list"]],factory:function(c){return new(c||t)(r.Sb(o.a),r.Sb(i.f),r.Sb(A.c),r.Sb(F.h),r.Sb(i.a))},consts:20,vars:6,template:function(t,c){1&t&&(r.Yb(0,"div",G),r.Yb(1,"div",L),r.Mc(2),r.Yb(3,"button",J),r.jc("click",(function(t){return c.addProduct()})),r.Mc(4," Add Product "),r.Wb(),r.Wb(),r.Yb(5,"div",Z),r.Yb(6,"form",H),r.Yb(7,"div",z),r.Yb(8,"div"),r.Yb(9,"input",Q),r.jc("keyup",(function(t){return c.onChanges()})),r.Wb(),r.Tb(10,"span",X),r.Wb(),r.Wb(),r.Wb(),r.Kc(11,mt,4,2,"div",tt),r.Kc(12,vt,3,0,"div",tt),r.Wb(),r.Yb(13,"div",ct),r.Yb(14,"div",et),r.Yb(15,"div",rt),r.Yb(16,"label"),r.Yb(17,"input",ot),r.jc("change",(function(t){return c.checkChanged(t.target.checked)})),r.Wb(),r.Mc(18," Display Product Code "),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Kc(19,ht,2,1,"div",it),r.Wb()),2&t&&(r.Cc(2),r.Oc(" ",c.pageTitle," "),r.Cc(6),r.sc("formGroup",c.searchCriteriaForm),r.Cc(11),r.sc("ngIf",c.productsCount>0),r.Cc(12),r.sc("ngIf",0==c.productsCount),r.Cc(17),r.sc("checked",c.displayCode),r.Cc(19),r.sc("ngIf",c.errorMessage))},directives:[A.v,A.l,A.e,A.b,A.k,A.d,a.m,a.l,E.a,a.k,$],styles:[""]}),t})();var Wt=e("chph"),Yt=e("1kSV");const Dt=["class","card card-primary",4,"ngIf"],yt=[1,"card","card-primary"],Mt=[1,"card-header"],Pt=[1,"card-body"],It=[1,"row"],_t=[1,"col-md-8"],Nt=[1,"col-md-4","product-detail-label"],St=[3,"rating","ratingClicked"],kt=[1,"col-md-4"],Ot=["class","center-block img-responsive","src","assets/product_images/default_image.jpg",3,"title","width","margin",4,"ngIf"],jt=["class","center-block img-responsive",3,"src","title","width","margin",4,"ngIf"],wt=["style","display:block;text-align:center;cursor:pointer;color:blue",3,"click",4,"ngIf"],Rt=[1,"card-footer"],Ft=[1,"row","mb-2"],Kt=[1,"btn","btn-primary","mr-3",3,"routerLink"],Tt=[1,"fa","fa-edit"],xt=["class","alert alert-danger",4,"ngIf"],qt=["src","assets/product_images/default_image.jpg",1,"center-block","img-responsive",3,"title"];function At(t,c){if(1&t&&(r.Yb(0,"img",qt),r.Ic(),r.Wb()),2&t){const t=r.mc(2);r.Hc("width",200,"px"),r.Hc("margin",2,"px"),r.Jc(),r.sc("title",null==t.productData?null:t.productData.productName)}}const Et=[1,"center-block","img-responsive",3,"src","title"];function Bt(t,c){if(1&t&&(r.Yb(0,"img",Et),r.Ic(),r.Wb()),2&t){const t=r.mc(2);r.Hc("width",200,"px"),r.Hc("margin",2,"px"),r.Jc(),r.tc("src",t.imageurl,r.Bc),r.sc("title",null==t.productData?null:t.productData.productName)}}const Vt=[2,"display","block","text-align","center","cursor","pointer","color","blue",3,"click"];function Ut(t,c){if(1&t){const t=r.Zb();r.Yb(0,"span",Vt),r.jc("click",(function(c){return r.Ac(t),r.mc(2).uploadImage()})),r.Mc(1," Upload Image "),r.Wb()}}function $t(t,c){if(1&t){const t=r.Zb();r.Yb(0,"span",Vt),r.jc("click",(function(c){return r.Ac(t),r.mc(2).uploadImage()})),r.Mc(1," Change Image "),r.Wb()}}const Gt=[1,"alert","alert-danger"];function Lt(t,c){if(1&t&&(r.Yb(0,"div",Gt),r.Mc(1),r.Wb()),2&t){const t=r.mc(2);r.Cc(1),r.Oc("",t.errorMessage," ")}}const Jt=function(t){return["/products",t,"edit"]};function Zt(t,c){if(1&t){const t=r.Zb();r.Yb(0,"div",yt),r.Yb(1,"div",Mt),r.Mc(2),r.Wb(),r.Yb(3,"div",Pt),r.Yb(4,"div",It),r.Yb(5,"div",_t),r.Yb(6,"div",It),r.Yb(7,"div",Nt),r.Mc(8,"Name:"),r.Wb(),r.Yb(9,"div",_t),r.Mc(10),r.nc(11,"upperCaseName"),r.Wb(),r.Wb(),r.Yb(12,"div",It),r.Yb(13,"div",Nt),r.Mc(14,"Code:"),r.Wb(),r.Yb(15,"div",_t),r.Mc(16),r.nc(17,"upperCaseName"),r.Wb(),r.Wb(),r.Yb(18,"div",It),r.Yb(19,"div",Nt),r.Mc(20,"Weight:"),r.Wb(),r.Yb(21,"div",_t),r.Mc(22),r.Wb(),r.Wb(),r.Yb(23,"div",It),r.Yb(24,"div",Nt),r.Mc(25,"Release Date:"),r.Wb(),r.Yb(26,"div",_t),r.Mc(27),r.nc(28,"date"),r.Wb(),r.Wb(),r.Yb(29,"div",It),r.Yb(30,"div",Nt),r.Mc(31,"Last Updated:"),r.Wb(),r.Yb(32,"div",_t),r.Mc(33),r.nc(34,"date"),r.Wb(),r.Wb(),r.Yb(35,"div",It),r.Yb(36,"div",Nt),r.Mc(37,"Description:"),r.Wb(),r.Yb(38,"div",_t),r.Mc(39),r.Wb(),r.Wb(),r.Yb(40,"div",It),r.Yb(41,"div",Nt),r.Mc(42,"Price:"),r.Wb(),r.Yb(43,"div",_t),r.Mc(44),r.Wb(),r.Wb(),r.Yb(45,"div",It),r.Yb(46,"div",Nt),r.Mc(47,"Star Rating:"),r.Wb(),r.Yb(48,"div",_t),r.Yb(49,"app-star",St),r.jc("ratingClicked",(function(c){return r.Ac(t),r.mc().onRatingClicked(c)})),r.Wb(),r.Wb(),r.Wb(),r.Yb(50,"div",It),r.Yb(51,"div",Nt),r.Mc(52,"Category Name:"),r.Wb(),r.Yb(53,"div",_t),r.Mc(54),r.nc(55,"upperCaseName"),r.Wb(),r.Wb(),r.Yb(56,"div",It),r.Yb(57,"div",Nt),r.Mc(58,"Available:"),r.Wb(),r.Yb(59,"div",_t),r.Mc(60),r.Wb(),r.Wb(),r.Wb(),r.Yb(61,"div",kt),r.Kc(62,At,1,3,"img",Ot),r.Kc(63,Bt,1,4,"img",jt),r.Kc(64,Ut,2,0,"span",wt),r.Kc(65,$t,2,0,"span",wt),r.Wb(),r.Wb(),r.Wb(),r.Yb(66,"div",Rt),r.Yb(67,"div",Ft),r.Yb(68,"div",_t),r.Yb(69,"button",Kt),r.Tb(70,"i",Tt),r.Mc(71," Edit "),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Kc(72,Lt,2,1,"div",xt),r.Wb()}if(2&t){const t=r.mc();r.Cc(2),r.Oc(" ",null==t.productData?null:t.productData.productName," "),r.Cc(10),r.Nc(r.oc(11,18,null==t.productData?null:t.productData.productName)),r.Cc(16),r.Nc(r.oc(17,20,null==t.productData?null:t.productData.productCode)),r.Cc(22),r.Pc("",null==t.productData?null:t.productData.product_weight," ",null==t.productData?null:t.productData.weight_text,""),r.Cc(27),r.Nc(r.pc(28,22,null==t.productData?null:t.productData.releaseDate,"short")),r.Cc(33),r.Nc(r.pc(34,25,null==t.productData?null:t.productData.lastUpdated,"short")),r.Cc(39),r.Nc(null==t.productData?null:t.productData.description),r.Cc(44),r.Nc(null==t.productData?null:t.productData.price),r.Cc(49),r.sc("rating",null==t.productData?null:t.productData.starRating),r.Cc(54),r.Nc(r.oc(55,28,null==t.productData?null:t.productData.categoryName)),r.Cc(60),r.Nc(null==t.productData?null:t.productData.available?"Available":"Not Available"),r.Cc(62),r.sc("ngIf",!t.imageurl),r.Cc(63),r.sc("ngIf",t.imageurl),r.Cc(64),r.sc("ngIf",!t.imageurl),r.Cc(65),r.sc("ngIf",t.imageurl),r.Cc(69),r.sc("routerLink",r.vc(30,Jt,t.productData.productId)),r.Cc(72),r.sc("ngIf",t.errorMessage)}}let Ht=(()=>{class t{constructor(t,c){this.productService=t,this.modalService=c,this.pageTitle="Product Detail",this.imageurl="",this.productid=""}ngOnInit(){this.sub=this.productService.selectProductChanges$.subscribe(t=>{t&&(this.imageurl=t.image_url,this.productid=t.productId),this.productData=t,console.log(this.productData)})}onRatingClicked(t){}uploadImage(){const t=this.modalService.open(Wt.a);t.componentInstance.title="Image Upload",t.componentInstance.image_type="products",t.componentInstance.id=this.productid,t.componentInstance.productImage.subscribe(t=>{this.imageurl=t.image_url,this.productService.updateProductImageUrl(this.imageurl,this.productid)})}ngOnDestroy(){this.sub.unsubscribe()}}return t.ngComponentDef=r.Mb({type:t,selectors:[["app-product-shell-detail"]],factory:function(c){return new(c||t)(r.Sb(o.a),r.Sb(Yt.b))},consts:1,vars:1,template:function(t,c){1&t&&r.Kc(0,Zt,73,32,"div",Dt),2&t&&r.sc("ngIf",c.productData)},directives:[a.m,d.a,i.g],pipes:[B.a,a.d],styles:[".product-detail-label[_ngcontent-%COMP%]{font-weight:700}"]}),t})();const zt=[1,"row"],Qt=[1,"scroll"],Xt=[1,"col-md-8"];let tc=(()=>{class t{constructor(){}ngOnInit(){}}return t.ngComponentDef=r.Mb({type:t,selectors:[["app-product-shell"]],factory:function(c){return new(c||t)},consts:5,vars:0,template:function(t,c){1&t&&(r.Yb(0,"div",zt),r.Yb(1,"div",Qt),r.Tb(2,"app-product-shell-list"),r.Wb(),r.Yb(3,"div",Xt),r.Tb(4,"app-product-shell-detail"),r.Wb(),r.Wb())},directives:[Ct,Ht],styles:["div.scroll[_ngcontent-%COMP%]{margin:4px,;padding:4px;width:350px;height:500px;overflow-x:auto;text-align:justify}"]}),t})();var cc=e("9d4Z");const ec=[1,"jumbotron"],rc=[1,"container"],oc=[1,"row"],ic=[1,"col-md-6","offset-md-3"],ac=[3,"formGroup","ngSubmit"],dc=[1,"form-group"],nc=["type","text","formControlName","productName",1,"form-control",3,"ngClass"],sc=["class","invalid-feedback",4,"ngIf"],uc=["formControlName","storeCategoryName",1,"form-control",3,"change"],bc=[3,"value",4,"ngFor","ngForOf"],lc=[1,"col-md-6"],pc=["formControlName","storeSubCategoryName",1,"form-control",3,"change"],gc=["formControlName","subCategoryName",1,"form-control"],mc=["formControlName","productWeightType",1,"form-control"],vc=["selected","","value","1"],fc=["value","2"],hc=["value","3"],Cc=["value","5"],Wc=["value","4"],Yc=["value","6"],Dc=["type","text","formControlName","productPrice",1,"form-control",3,"ngClass"],yc=["type","text","formControlName","productWeight",1,"form-control",3,"ngClass"],Mc=["type","text","formControlName","productCode",1,"form-control",3,"ngClass"],Pc=["row","3","formControlName","productDescription",1,"form-control",3,"ngClass"],Ic=["type","text","formControlName","productRating",1,"form-control",3,"ngClass"],_c=["for",""],Nc=["formControlName","status",1,"form-control"],Sc=["value","1"],kc=["value","0"],Oc=[1,"btn","btn-primary","mr-3"],jc=[1,"fa","fa-save"],wc=["class","btn btn-primary mr-3",3,"click",4,"ngIf"],Rc=[1,"invalid-feedback"],Fc=[4,"ngIf"];function Kc(t,c){1&t&&(r.Yb(0,"div"),r.Mc(1,"Product Name is required"),r.Wb())}function Tc(t,c){if(1&t&&(r.Yb(0,"div",Rc),r.Kc(1,Kc,2,0,"div",Fc),r.Wb()),2&t){const t=r.mc();r.Cc(1),r.sc("ngIf",t.f.productName.errors.required)}}const xc=[3,"value"];function qc(t,c){if(1&t&&(r.Yb(0,"option",xc),r.Mc(1),r.Wb()),2&t){const t=c.$implicit;r.tc("value",null==t?null:t.store_category_id),r.Cc(1),r.Oc(" ",t.store_category_name," ")}}function Ac(t,c){if(1&t&&(r.Yb(0,"option",xc),r.Mc(1),r.nc(2,"upperCaseName"),r.Wb()),2&t){const t=c.$implicit;r.tc("value",null==t?null:t.store_sub_category_id),r.Cc(1),r.Oc(" ",r.oc(2,2,t.store_sub_category)," ")}}function Ec(t,c){if(1&t&&(r.Yb(0,"option",xc),r.Mc(1),r.nc(2,"upperCaseName"),r.Wb()),2&t){const t=c.$implicit;r.tc("value",null==t?null:t.sub_category_id),r.Cc(1),r.Oc(" ",r.oc(2,2,t.sub_category_name)," ")}}function Bc(t,c){1&t&&(r.Yb(0,"div"),r.Mc(1,"Product Price is required"),r.Wb())}function Vc(t,c){if(1&t&&(r.Yb(0,"div",Rc),r.Kc(1,Bc,2,0,"div",Fc),r.Wb()),2&t){const t=r.mc();r.Cc(1),r.sc("ngIf",t.f.productPrice.errors.required)}}function Uc(t,c){1&t&&(r.Yb(0,"div"),r.Mc(1,"Product weight is required"),r.Wb())}function $c(t,c){if(1&t&&(r.Yb(0,"div",Rc),r.Kc(1,Uc,2,0,"div",Fc),r.Wb()),2&t){const t=r.mc();r.Cc(1),r.sc("ngIf",t.f.productWeight.errors.required)}}function Gc(t,c){1&t&&(r.Yb(0,"div"),r.Mc(1,"Product Code is required"),r.Wb())}function Lc(t,c){if(1&t&&(r.Yb(0,"div",Rc),r.Kc(1,Gc,2,0,"div",Fc),r.Wb()),2&t){const t=r.mc();r.Cc(1),r.sc("ngIf",t.f.productCode.errors.required)}}function Jc(t,c){1&t&&(r.Yb(0,"div"),r.Mc(1,"Product Description is required"),r.Wb())}function Zc(t,c){if(1&t&&(r.Yb(0,"div",Rc),r.Kc(1,Jc,2,0,"div",Fc),r.Wb()),2&t){const t=r.mc();r.Cc(1),r.sc("ngIf",t.f.productDescription.errors.required)}}function Hc(t,c){1&t&&(r.Yb(0,"div"),r.Mc(1,"Product Rating is required"),r.Wb())}function zc(t,c){if(1&t&&(r.Yb(0,"div",Rc),r.Kc(1,Hc,2,0,"div",Fc),r.Wb()),2&t){const t=r.mc();r.Cc(1),r.sc("ngIf",t.f.productRating.errors.required)}}const Qc=[1,"btn","btn-primary","mr-3",3,"click"],Xc=[1,"fa","fa-trash"];function te(t,c){if(1&t){const t=r.Zb();r.Yb(0,"button",Qc),r.jc("click",(function(c){return r.Ac(t),r.mc().deleteProduct()})),r.Tb(1,"i",Xc),r.Mc(2," Delete "),r.Wb()}}const ce=function(t){return{"is-invalid":t}},ee=[{path:"",component:tc,resolve:{products:k}},{path:":id",component:M,resolve:{product:S}},{path:":id/edit",component:(()=>{class t{constructor(t,c,e,r,o){this.formBuilder=t,this._router=c,this._activatedRoute=e,this._categoryService=r,this._productService=o,this.addProductForm=this.formBuilder.group({productName:["",A.t.required],storeCategoryName:["",A.t.required],storeSubCategoryName:["",A.t.required],subCategoryName:[""],productWeightType:["",A.t.required],productPrice:["",A.t.required],productWeight:["",A.t.required],productCode:["",A.t.required],productDescription:["",A.t.required],productRating:["",A.t.required],status:["",A.t.required]})}get f(){return this.addProductForm.controls}ngOnInit(){this._categoryService.getAllStoreCategory("").subscribe(t=>{this.storeCategories=t.store_categories,this.productId=this._activatedRoute.snapshot.paramMap.get("id"),0!==this.productId&&(this.productData=this._activatedRoute.snapshot.data.productData.product,this.addProductForm.get("storeCategoryName").setValue(this.productData.store_category_id),this.addProductForm.get("storeSubCategoryName").setValue(this.productData.store_sub_category_id),this.addProductForm.get("subCategoryName").setValue(this.productData.sub_category_id),this.addProductForm.get("productName").setValue(this.productData.productName),this.addProductForm.get("productPrice").setValue(this.productData.price),this.addProductForm.get("productCode").setValue(this.productData.productCode),this.addProductForm.get("productWeightType").setValue(this.productData.productWeightType),this.addProductForm.get("productWeight").setValue(this.productData.product_weight),this.addProductForm.get("productDescription").setValue(this.productData.description),this.addProductForm.get("productRating").setValue(this.productData.starRating),this.addProductForm.get("status").setValue(this.productData.available),console.log(this.productData),this.storeCategoryChange(this.productData.store_category_id,+this.productData.store_sub_category_id))})}fetchSubCategories(t){}deleteProduct(){0!=this.productId&&confirm("Are you sure to delete ")&&this._productService.deleteProduct(this.productId).subscribe(t=>{console.log(t),this._router.navigate(["products"])})}onSubmit(){console.log(this.addProductForm.value),this.submitted=!0,this.addProductForm.invalid||(0==this.productId?this._productService.createProduct(this.addProductForm.value).subscribe(t=>{200==t.status?this._router.navigate(["products"]):400==t.status&&alert("Product Not Added . Internal Server Error")},t=>{console.log(t)}):this._productService.updateProduct(this.addProductForm.value,this.productId).subscribe(t=>{console.log(t),200==t.status?this._router.navigate(["products"]):400==t.status&&alert("Product Not Added . Internal Server Error")},t=>{this.errorMessage=t}))}storeCategoryChange(t,c){this.storeSubCategoryData=[],this.subCategoryData=[],this._categoryService.getStoreCategoryData(+t).subscribe(t=>{this.storeSubCategoryData=t.store_categories[0].store_sub_category_name,0==+c||(this.subCategoryData=this.storeSubCategoryData.filter(t=>t.store_sub_category_id===c)[0].sub_category_data)})}storeSubCategoryChange(t){this.storeSubCategoryData.filter(c=>{c.store_sub_category_id===+t&&(this.subCategoryData=c.sub_category_data,this.subCategoryData.length<1&&(this.addProductForm.patchValue({subCategoryName:""}),this.subCategoryData=[]))})}}return t.ngComponentDef=r.Mb({type:t,selectors:[["app-product-shell-add"]],factory:function(c){return new(c||t)(r.Sb(A.c),r.Sb(i.f),r.Sb(i.a),r.Sb(cc.a),r.Sb(o.a))},consts:89,vars:29,template:function(t,c){1&t&&(r.Yb(0,"div",ec),r.Yb(1,"div",rc),r.Yb(2,"div",oc),r.Yb(3,"div",ic),r.Yb(4,"h2"),r.Mc(5,"Add New Product"),r.Wb(),r.Yb(6,"form",ac),r.jc("ngSubmit",(function(t){return c.onSubmit()})),r.Yb(7,"div",dc),r.Yb(8,"label"),r.Mc(9,"Product Name"),r.Wb(),r.Tb(10,"input",nc),r.Kc(11,Tc,2,1,"div",sc),r.Wb(),r.Yb(12,"div",dc),r.Yb(13,"label"),r.Mc(14,"Store Category Name"),r.Wb(),r.Yb(15,"div"),r.Yb(16,"select",uc),r.jc("change",(function(t){return c.storeCategoryChange(t.target.value,0)})),r.Kc(17,qc,2,2,"option",bc),r.Wb(),r.Wb(),r.Wb(),r.Yb(18,"div",oc),r.Yb(19,"div",lc),r.Yb(20,"div",dc),r.Yb(21,"label"),r.Mc(22,"Store Sub Category"),r.Wb(),r.Yb(23,"div"),r.Yb(24,"select",pc),r.jc("change",(function(t){return c.storeSubCategoryChange(t.target.value)})),r.Kc(25,Ac,3,4,"option",bc),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Yb(26,"div",lc),r.Yb(27,"div",dc),r.Yb(28,"label"),r.Mc(29,"Sub Category"),r.Wb(),r.Yb(30,"div"),r.Yb(31,"select",gc),r.Kc(32,Ec,3,4,"option",bc),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Yb(33,"div",dc),r.Yb(34,"label"),r.Mc(35,"Weight Type"),r.Wb(),r.Yb(36,"div"),r.Yb(37,"select",mc),r.Yb(38,"option",vc),r.Mc(39,"kg"),r.Wb(),r.Yb(40,"option",fc),r.Mc(41,"gms"),r.Wb(),r.Yb(42,"option",hc),r.Mc(43,"litre"),r.Wb(),r.Yb(44,"option",Cc),r.Mc(45,"ml"),r.Wb(),r.Yb(46,"option",Wc),r.Mc(47,"packet"),r.Wb(),r.Yb(48,"option",Yc),r.Mc(49,"pieces"),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Yb(50,"div",dc),r.Yb(51,"label"),r.Mc(52,"Orignal Price(M.R.P)"),r.Wb(),r.Tb(53,"input",Dc),r.Kc(54,Vc,2,1,"div",sc),r.Wb(),r.Yb(55,"div",dc),r.Yb(56,"label"),r.Mc(57,"Product Weight"),r.Wb(),r.Tb(58,"input",yc),r.Kc(59,$c,2,1,"div",sc),r.Wb(),r.Yb(60,"div",dc),r.Yb(61,"label"),r.Mc(62,"Product Code"),r.Wb(),r.Tb(63,"input",Mc),r.Kc(64,Lc,2,1,"div",sc),r.Wb(),r.Yb(65,"div",dc),r.Yb(66,"label"),r.Mc(67,"Product Desciption"),r.Wb(),r.Tb(68,"textarea",Pc),r.Kc(69,Zc,2,1,"div",sc),r.Wb(),r.Yb(70,"div",dc),r.Yb(71,"label"),r.Mc(72,"Product Rating"),r.Wb(),r.Tb(73,"input",Ic),r.Kc(74,zc,2,1,"div",sc),r.Wb(),r.Yb(75,"div",dc),r.Yb(76,"label",_c),r.Mc(77,"Status"),r.Wb(),r.Yb(78,"div"),r.Yb(79,"select",Nc),r.Yb(80,"option",Sc),r.Mc(81,"Enabled"),r.Wb(),r.Yb(82,"option",kc),r.Mc(83,"Disabled"),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Yb(84,"div",dc),r.Yb(85,"button",Oc),r.Tb(86,"i",jc),r.Mc(87," Save"),r.Wb(),r.Kc(88,te,3,0,"button",wc),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb()),2&t&&(r.Cc(6),r.sc("formGroup",c.addProductForm),r.Cc(10),r.sc("ngClass",r.vc(17,ce,c.submitted&&c.f.productName.errors)),r.Cc(11),r.sc("ngIf",c.submitted&&c.f.productName.errors),r.Cc(17),r.sc("ngForOf",c.storeCategories),r.Cc(25),r.sc("ngForOf",c.storeSubCategoryData),r.Cc(32),r.sc("ngForOf",c.subCategoryData),r.Cc(53),r.sc("ngClass",r.vc(19,ce,c.submitted&&c.f.productPrice.errors)),r.Cc(54),r.sc("ngIf",c.submitted&&c.f.productPrice.errors),r.Cc(58),r.sc("ngClass",r.vc(21,ce,c.submitted&&c.f.productWeight.errors)),r.Cc(59),r.sc("ngIf",c.submitted&&c.f.productWeight.errors),r.Cc(63),r.sc("ngClass",r.vc(23,ce,c.submitted&&c.f.productCode.errors)),r.Cc(64),r.sc("ngIf",c.submitted&&c.f.productCode.errors),r.Cc(68),r.sc("ngClass",r.vc(25,ce,c.submitted&&c.f.productDescription.errors)),r.Cc(69),r.sc("ngIf",c.submitted&&c.f.productDescription.errors),r.Cc(73),r.sc("ngClass",r.vc(27,ce,c.submitted&&c.f.productRating.errors)),r.Cc(74),r.sc("ngIf",c.submitted&&c.f.productRating.errors),r.Cc(88),r.sc("ngIf",0!=c.productId))},directives:[A.v,A.l,A.e,A.b,A.k,A.d,a.k,a.m,A.s,a.l,A.o,A.u],pipes:[B.a],styles:[""]}),t})(),resolve:{productData:S}}];let re=(()=>{class t{}return t.ngModuleDef=r.Qb({type:t}),t.ngInjectorDef=r.Pb({factory:function(c){return new(c||t)},imports:[[i.j.forChild(ee)],i.j]}),t})();i.j.forChild(ee),e.d(c,"ProductModule",(function(){return oe}));let oe=(()=>{class t{}return t.ngModuleDef=r.Qb({type:t}),t.ngInjectorDef=r.Pb({factory:function(c){return new(c||t)},providers:[],imports:[[F.j.forFeature("products",T),re,A.q,P.a]]}),t})();F.j.forFeature("products",T)}}]);