(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{lE2P:function(t,r,e){"use strict";e.r(r),e.d(r,"ProductModule",(function(){return ht}));var c=e("PCNd"),o=e("tyNb"),i=e("fXoL"),a=e("QJ7G"),d=e("ofXK"),u=e("Q6/5");const n=function(){return["/products/",0,"edit"]};function s(t,r){if(1&t){const t=i.Sb();i.Rb(0,"div",2),i.Rb(1,"div",3),i.Cc(2),i.Qb(),i.Rb(3,"div",4),i.Rb(4,"div",5),i.Rb(5,"div",6),i.Rb(6,"div",5),i.Rb(7,"div",7),i.Cc(8,"Name:"),i.Qb(),i.Rb(9,"div",6),i.Cc(10),i.Qb(),i.Qb(),i.Rb(11,"div",5),i.Rb(12,"div",7),i.Cc(13,"Code:"),i.Qb(),i.Rb(14,"div",6),i.Cc(15),i.Qb(),i.Qb(),i.Rb(16,"div",5),i.Rb(17,"div",7),i.Cc(18,"Release Date:"),i.Qb(),i.Rb(19,"div",6),i.Cc(20),i.gc(21,"date"),i.Qb(),i.Qb(),i.Rb(22,"div",5),i.Rb(23,"div",7),i.Cc(24,"Last Updated:"),i.Qb(),i.Rb(25,"div",6),i.Cc(26),i.gc(27,"date"),i.Qb(),i.Qb(),i.Rb(28,"div",5),i.Rb(29,"div",7),i.Cc(30,"Description:"),i.Qb(),i.Rb(31,"div",6),i.Cc(32),i.Qb(),i.Qb(),i.Rb(33,"div",5),i.Rb(34,"div",7),i.Cc(35,"Price:"),i.Qb(),i.Rb(36,"div",6),i.Cc(37),i.Qb(),i.Qb(),i.Rb(38,"div",5),i.Rb(39,"div",7),i.Cc(40,"Star Rating:"),i.Qb(),i.Rb(41,"div",6),i.Rb(42,"app-star",8),i.dc("ratingClicked",(function(r){return i.uc(t),i.fc().onRatingClicked(r)})),i.Qb(),i.Qb(),i.Qb(),i.Rb(43,"div",5),i.Rb(44,"div",7),i.Cc(45,"Category Name:"),i.Qb(),i.Rb(46,"div",6),i.Cc(47),i.Qb(),i.Qb(),i.Rb(48,"div",5),i.Rb(49,"div",7),i.Cc(50,"Available:"),i.Qb(),i.Rb(51,"div",6),i.Cc(52),i.Qb(),i.Qb(),i.Qb(),i.Rb(53,"div",7),i.Nb(54,"img",9),i.Qb(),i.Qb(),i.Qb(),i.Rb(55,"div",10),i.Rb(56,"button",11),i.dc("click",(function(){return i.uc(t),i.fc().onBack()})),i.Nb(57,"i",12),i.Cc(58," Back "),i.Qb(),i.Rb(59,"a",13),i.Nb(60,"i",12),i.Cc(61," Edit "),i.Qb(),i.Qb(),i.Qb()}if(2&t){const t=i.fc();i.zb(2),i.Ec(" ",t.pageTitle," "),i.zb(8),i.Dc(null==t.productData?null:t.productData.productName),i.zb(5),i.Dc(null==t.productData?null:t.productData.productCode),i.zb(5),i.Dc(i.ic(21,17,null==t.productData?null:t.productData.releaseDate,"medium")),i.zb(6),i.Dc(i.ic(27,20,null==t.productData?null:t.productData.lastUpdated,"medium")),i.zb(6),i.Dc(null==t.productData?null:t.productData.description),i.zb(5),i.Dc(null==t.productData?null:t.productData.price),i.zb(5),i.lc("rating",null==t.productData?null:t.productData.starRating),i.zb(5),i.Dc(null==t.productData?null:t.productData.categoryName),i.zb(5),i.Dc(null!=t.productData&&t.productData.available?"Available":"Not Available"),i.zb(2),i.zc("width",200,"px")("margin",2,"px"),i.nc("src","assets/product_images/",null==t.productData?null:t.productData.image_url,"",i.vc),i.lc("title",null==t.productData?null:t.productData.productName),i.zb(5),i.lc("routerLink",i.oc(23,n))}}function b(t,r){if(1&t&&(i.Rb(0,"div",14),i.Cc(1),i.Qb()),2&t){const t=i.fc();i.zb(1),i.Ec("",t.errorMessage,"\n")}}let l=(()=>{class t{constructor(t,r,e){this._productService=t,this.router=r,this._activatedRoute=e}onBack(){this.router.navigate(["/products"],{queryParamsHandling:"preserve"})}onEdit(){this.router.navigate(["products",this.productId,"edit"])}ngOnInit(){const t=this._activatedRoute.snapshot.data.product;this.errorMessage=t.error,this.onProductRetrieved(t.product)}onRatingClicked(t){console.log(t)}onProductRetrieved(t){this.productData=t,this.pageTitle=this.productData?"Product Detail: "+this.productData.productName:"No product found"}}return t.\u0275fac=function(r){return new(r||t)(i.Mb(a.a),i.Mb(o.f),i.Mb(o.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["ng-component"]],decls:2,vars:2,consts:[["class","card",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col-md-8"],[1,"col-md-4"],[3,"rating","ratingClicked"],[1,"center-block","img-responsive",3,"src","title"],[1,"card-footer"],[1,"btn","btn-outline-secondary",2,"width","80px",3,"click"],[1,"fa","fa-chevron-left"],["type","button","target","_blank",1,"btn","btn-outline-secondary",2,"width","80px",3,"routerLink"],[1,"alert","alert-danger"]],template:function(t,r){1&t&&(i.Ac(0,s,62,24,"div",0),i.Ac(1,b,2,1,"div",1)),2&t&&(i.lc("ngIf",r.productData),i.zb(1),i.lc("ngIf",r.errorMessage))},directives:[d.m,u.a,o.i],pipes:[d.d],styles:[""]}),t})();var p=e("LRne"),g=e("lJxs"),f=e("JIr8");let v=(()=>{class t{constructor(t){this.productDataService=t}resolve(t,r){const e=+t.paramMap.get("id");if(isNaN(e)){const t="Product id is not a number:"+e;return console.error(t),Object(p.a)({product:null,error:t})}return this.productDataService.getProduct(e).pipe(Object(g.a)(t=>({product:t,error:""})),Object(f.a)(t=>{const r="Retrieval error: "+t;return Object(p.a)({product:null,error:r})}))}}return t.\u0275fac=function(r){return new(r||t)(i.Zb(a.a))},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),h=(()=>{class t{constructor(t){this.productDataService=t}resolve(t,r){return this.productDataService.getProducts(1,20,"").pipe(Object(g.a)(t=>({product:t.products,product_total_count:t.productCount,error:""})),Object(f.a)(t=>{const r="Retrieval error: "+t;return Object(p.a)({product:null,error:r})}))}}return t.\u0275fac=function(r){return new(r||t)(i.Zb(a.a))},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=e("vkgz"),C=e("/uUt"),R=e("Kj3r"),Q=e("eIep"),D=e("kt0X");const y={showProductCode:!0,currentProduct:null,products:[]};function P(t=y,r){switch(r.type){case"TOGGLE_PRODUCT_CODE":return Object.assign(Object.assign({},t),{showProductCode:r.payload});default:return t}}const _=Object(D.k)("products"),I=Object(D.l)(_,t=>t.showProductCode);var N=e("3Pt+"),z=e("Exvd"),k=e("CvK3");function S(t,r){if(1&t&&(i.Pb(0),i.Cc(1),i.Ob()),2&t){const t=i.fc();i.zb(1),i.Ec(" - ",null==t.productData?null:t.productData.productCode,"\n")}}let w=(()=>{class t{constructor(t){this.store=t,this.showProductCode=!1}ngOnInit(){this.store.pipe(Object(D.m)(I)).subscribe(t=>{this.showProductCode=t})}}return t.\u0275fac=function(r){return new(r||t)(i.Mb(D.h))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-product-shell-list-item"]],inputs:{productData:["productInfo1","productData"]},decls:3,vars:4,consts:[[4,"ngIf"]],template:function(t,r){1&t&&(i.Cc(0),i.gc(1,"upperCaseName"),i.Ac(2,S,2,1,"ng-container",0)),2&t&&(i.Ec("",i.hc(1,2,null==r.productData?null:r.productData.productName),"\n"),i.zb(2),i.lc("ngIf",r.showProductCode))},directives:[d.m],pipes:[k.a],styles:[""]}),t})();function A(t,r){if(1&t){const t=i.Sb();i.Rb(0,"app-pagination",17),i.dc("currentPage",(function(r){return i.uc(t),i.fc(2).currentPageFn(r)})),i.Qb()}if(2&t){const t=i.fc(2);i.lc("totalItemCount",t.productsCount)}}const O=function(t){return{active:t}};function F(t,r){if(1&t){const t=i.Sb();i.Rb(0,"button",18),i.dc("click",(function(){i.uc(t);const e=r.$implicit;return i.fc(2).onSelected(e)})),i.Nb(1,"app-product-shell-list-item",19),i.Qb()}if(2&t){const t=r.$implicit,e=i.fc(2);i.lc("ngClass",i.pc(2,O,(null==e.selectedProduct?null:e.selectedProduct.productId)==(null==t?null:t.productId))),i.zb(1),i.lc("productInfo1",t)}}function M(t,r){if(1&t&&(i.Rb(0,"div"),i.Ac(1,A,1,1,"app-pagination",14),i.Rb(2,"div",15),i.Ac(3,F,2,4,"button",16),i.Qb(),i.Qb()),2&t){const t=i.fc();i.zb(1),i.lc("ngIf",t.productsCount>0),i.zb(2),i.lc("ngForOf",t.products)}}function x(t,r){1&t&&(i.Rb(0,"div"),i.Rb(1,"span"),i.Cc(2,"No Products Found in catelog"),i.Qb(),i.Qb())}function j(t,r){if(1&t&&(i.Rb(0,"div",20),i.Cc(1),i.Qb()),2&t){const t=i.fc();i.zb(1),i.Ec(" Error: ",t.errorMessage," ")}}const E=function(){return["/products/",0,"edit"]};let q=(()=>{class t{constructor(t,r,e,c,o){this._productService=t,this.router=r,this.formBuilder=e,this.store=c,this._activatedRoute=o,this.filterBy="",this.pageTitle="Products Listing",this.productsCount=0,this.Pages=[],this.pageSize=20,this.searchCriteriaForm=this.formBuilder.group({searchCriteria:[""]})}ngOnInit(){this.currentPage=1,this.sub=this._productService.selectProductChanges$.subscribe(t=>{this.selectedProduct=t}),this.store.pipe(Object(D.m)(I)).subscribe(t=>{this.displayCode=t});let t=this._activatedRoute.snapshot.data.products.product;this.productsCount=+this._activatedRoute.snapshot.data.products.product_total_count,this.onProductRetrieved(t)}onChanges(){this.searchCriteriaForm.get("searchCriteria").valueChanges.pipe(Object(m.a)(t=>{console.log(t)}),Object(C.a)(),Object(R.a)(2e3),Object(Q.a)(t=>(this.filterBy=t,console.log(this.filterBy),this._productService.getProducts(this.currentPage,this.pageSize,this.filterBy)))).subscribe(t=>{this.onProductRetrieved(t.products),this.productsCount=t.productCount})}currentPageFn(t){this.currentPage=t,this._productService.getProducts(this.currentPage,this.pageSize,this.filterBy).subscribe(t=>{this.onProductRetrieved(t.products)})}checkChanged(t){this.store.dispatch({type:"TOGGLE_PRODUCT_CODE",payload:t})}onSelected(t){this._productService.changeSelectedProduct(t.productId)}onProductRetrieved(t){this.products=t}addProduct(){this.router.navigate(["products","0","edit"])}ngOnDestroy(){this.sub.unsubscribe()}}return t.\u0275fac=function(r){return new(r||t)(i.Mb(a.a),i.Mb(o.f),i.Mb(N.c),i.Mb(D.h),i.Mb(o.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-product-shell-list"]],decls:20,vars:8,consts:[[1,"card"],[1,"card-header"],["type","button","target","_blank",1,"btn","btn-outline-secondary",2,"float","right",3,"routerLink"],[1,"card-body"],[3,"formGroup"],[1,"form-group"],["formControlName","searchCriteria","type","text","id","inputError","autocomplete","off","autofocus","","placeholder","Search Products",1,"form-control",3,"keyup"],[1,"glyphicon","glyphicon-remove","form-control-feedback"],[4,"ngIf"],[1,"card-footer"],[1,"row"],[1,"form-check","col-md-12"],["type","checkbox",1,"form-check-input",3,"checked","change"],["class","alert alert-danger",4,"ngIf"],[3,"totalItemCount","currentPage",4,"ngIf"],[1,"list-group"],["type","button","class","list-group-item",3,"ngClass","click",4,"ngFor","ngForOf"],[3,"totalItemCount","currentPage"],["type","button",1,"list-group-item",3,"ngClass","click"],[3,"productInfo1"],[1,"alert","alert-danger"]],template:function(t,r){1&t&&(i.Rb(0,"div",0),i.Rb(1,"div",1),i.Cc(2),i.Rb(3,"a",2),i.Cc(4," Add New Product "),i.Qb(),i.Qb(),i.Rb(5,"div",3),i.Rb(6,"form",4),i.Rb(7,"div",5),i.Rb(8,"div"),i.Rb(9,"input",6),i.dc("keyup",(function(){return r.onChanges()})),i.Qb(),i.Nb(10,"span",7),i.Qb(),i.Qb(),i.Qb(),i.Ac(11,M,4,2,"div",8),i.Ac(12,x,3,0,"div",8),i.Qb(),i.Rb(13,"div",9),i.Rb(14,"div",10),i.Rb(15,"div",11),i.Rb(16,"label"),i.Rb(17,"input",12),i.dc("change",(function(t){return r.checkChanged(t.target.checked)})),i.Qb(),i.Cc(18," Display Product Code "),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Ac(19,j,2,1,"div",13),i.Qb()),2&t&&(i.zb(2),i.Ec(" ",r.pageTitle," "),i.zb(1),i.lc("routerLink",i.oc(7,E)),i.zb(3),i.lc("formGroup",r.searchCriteriaForm),i.zb(5),i.lc("ngIf",r.productsCount>0),i.zb(1),i.lc("ngIf",0==r.productsCount),i.zb(5),i.lc("checked",r.displayCode),i.zb(2),i.lc("ngIf",r.errorMessage))},directives:[o.i,N.u,N.l,N.e,N.b,N.k,N.d,d.m,d.l,z.a,d.k,w],styles:[""]}),t})();var G=e("chph"),T=e("1kSV");function L(t,r){if(1&t&&i.Nb(0,"img",17),2&t){const t=i.fc(2);i.zc("width",200,"px")("margin",2,"px"),i.lc("title",null==t.productData?null:t.productData.productName)}}function V(t,r){if(1&t&&i.Nb(0,"img",18),2&t){const t=i.fc(2);i.zc("width",200,"px")("margin",2,"px"),i.mc("src",t.imageurl,i.vc),i.lc("title",null==t.productData?null:t.productData.productName)}}function W(t,r){if(1&t){const t=i.Sb();i.Rb(0,"span",19),i.dc("click",(function(){return i.uc(t),i.fc(2).uploadImage()})),i.Cc(1," Upload Image "),i.Qb()}}function B(t,r){if(1&t){const t=i.Sb();i.Rb(0,"span",19),i.dc("click",(function(){return i.uc(t),i.fc(2).uploadImage()})),i.Cc(1," Change Image "),i.Qb()}}function U(t,r){if(1&t&&(i.Rb(0,"div",20),i.Cc(1),i.Qb()),2&t){const t=i.fc(2);i.zb(1),i.Ec("",t.errorMessage," ")}}const J=function(t){return["/products",t,"edit"]};function $(t,r){if(1&t){const t=i.Sb();i.Rb(0,"div",1),i.Rb(1,"div",2),i.Cc(2),i.Qb(),i.Rb(3,"div",3),i.Rb(4,"div",4),i.Rb(5,"div",5),i.Rb(6,"div",4),i.Rb(7,"div",6),i.Cc(8,"Name:"),i.Qb(),i.Rb(9,"div",5),i.Cc(10),i.gc(11,"upperCaseName"),i.Qb(),i.Qb(),i.Rb(12,"div",4),i.Rb(13,"div",6),i.Cc(14,"Code:"),i.Qb(),i.Rb(15,"div",5),i.Cc(16),i.gc(17,"upperCaseName"),i.Qb(),i.Qb(),i.Rb(18,"div",4),i.Rb(19,"div",6),i.Cc(20,"Weight:"),i.Qb(),i.Rb(21,"div",5),i.Cc(22),i.Qb(),i.Qb(),i.Rb(23,"div",4),i.Rb(24,"div",6),i.Cc(25,"Release Date:"),i.Qb(),i.Rb(26,"div",5),i.Cc(27),i.gc(28,"date"),i.Qb(),i.Qb(),i.Rb(29,"div",4),i.Rb(30,"div",6),i.Cc(31,"Last Updated:"),i.Qb(),i.Rb(32,"div",5),i.Cc(33),i.gc(34,"date"),i.Qb(),i.Qb(),i.Rb(35,"div",4),i.Rb(36,"div",6),i.Cc(37,"Description:"),i.Qb(),i.Rb(38,"div",5),i.Cc(39),i.Qb(),i.Qb(),i.Rb(40,"div",4),i.Rb(41,"div",6),i.Cc(42,"Price:"),i.Qb(),i.Rb(43,"div",5),i.Cc(44),i.Qb(),i.Qb(),i.Rb(45,"div",4),i.Rb(46,"div",6),i.Cc(47,"Star Rating:"),i.Qb(),i.Rb(48,"div",5),i.Rb(49,"app-star",7),i.dc("ratingClicked",(function(r){return i.uc(t),i.fc().onRatingClicked(r)})),i.Qb(),i.Qb(),i.Qb(),i.Rb(50,"div",4),i.Rb(51,"div",6),i.Cc(52,"Category Name:"),i.Qb(),i.Rb(53,"div",5),i.Cc(54),i.gc(55,"upperCaseName"),i.Qb(),i.Qb(),i.Rb(56,"div",4),i.Rb(57,"div",6),i.Cc(58,"Available:"),i.Qb(),i.Rb(59,"div",5),i.Cc(60),i.Qb(),i.Qb(),i.Qb(),i.Rb(61,"div",8),i.Ac(62,L,1,5,"img",9),i.Ac(63,V,1,6,"img",10),i.Ac(64,W,2,0,"span",11),i.Ac(65,B,2,0,"span",11),i.Qb(),i.Qb(),i.Qb(),i.Rb(66,"div",12),i.Rb(67,"div",13),i.Rb(68,"div",5),i.Rb(69,"button",14),i.Nb(70,"i",15),i.Cc(71," Edit "),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Ac(72,U,2,1,"div",16),i.Qb()}if(2&t){const t=i.fc();i.zb(2),i.Ec(" ",null==t.productData?null:t.productData.productName," "),i.zb(8),i.Dc(i.hc(11,17,null==t.productData?null:t.productData.productName)),i.zb(6),i.Dc(i.hc(17,19,null==t.productData?null:t.productData.productCode)),i.zb(6),i.Ec(" ",null!=t.productData&&t.productData.product_weight?(null==t.productData?null:t.productData.product_weight)+" "+(null==t.productData?null:t.productData.weight_text):"Not Available"," "),i.zb(5),i.Dc(i.ic(28,21,null==t.productData?null:t.productData.releaseDate,"short")),i.zb(6),i.Dc(i.ic(34,24,null==t.productData?null:t.productData.lastUpdated,"short")),i.zb(6),i.Dc(null==t.productData?null:t.productData.description),i.zb(5),i.Dc(null==t.productData?null:t.productData.price),i.zb(5),i.lc("rating",null==t.productData?null:t.productData.starRating),i.zb(5),i.Dc(i.hc(55,27,null==t.productData?null:t.productData.categoryName)),i.zb(6),i.Dc(null!=t.productData&&t.productData.available?"Available":"Not Available"),i.zb(2),i.lc("ngIf",!t.imageurl),i.zb(1),i.lc("ngIf",t.imageurl),i.zb(1),i.lc("ngIf",!t.imageurl),i.zb(1),i.lc("ngIf",t.imageurl),i.zb(4),i.lc("routerLink",i.pc(29,J,t.productData.productId)),i.zb(3),i.lc("ngIf",t.errorMessage)}}let K=(()=>{class t{constructor(t,r){this.productService=t,this.modalService=r,this.pageTitle="Product Detail",this.imageurl="",this.productid=""}ngOnInit(){this.sub=this.productService.selectProductChanges$.subscribe(t=>{t&&(this.imageurl=t.image_url,this.productid=t.productId),this.productData=t,console.log(this.productData)})}onRatingClicked(t){}uploadImage(){const t=this.modalService.open(G.a);t.componentInstance.title="Image Upload",t.componentInstance.image_type="products",t.componentInstance.id=this.productid,t.componentInstance.productImage.subscribe(t=>{this.imageurl=t.image_url,this.productService.updateProductImageUrl(this.imageurl,this.productid)})}ngOnDestroy(){this.sub.unsubscribe()}}return t.\u0275fac=function(r){return new(r||t)(i.Mb(a.a),i.Mb(T.b))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-product-shell-detail"]],decls:1,vars:1,consts:[["class","card card-primary",4,"ngIf"],[1,"card","card-primary"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col-md-8"],[1,"col-md-4","product-detail-label"],[3,"rating","ratingClicked"],[1,"col-md-4"],["class","center-block img-responsive","src","assets/product_images/default_image.jpg",3,"title","width","margin",4,"ngIf"],["class","center-block img-responsive",3,"src","title","width","margin",4,"ngIf"],["style","display:block;text-align:center;cursor:pointer;color:blue",3,"click",4,"ngIf"],[1,"card-footer"],[1,"row","mb-2"],[1,"btn","btn-primary","mr-3",3,"routerLink"],[1,"fa","fa-edit"],["class","alert alert-danger",4,"ngIf"],["src","assets/product_images/default_image.jpg",1,"center-block","img-responsive",3,"title"],[1,"center-block","img-responsive",3,"src","title"],[2,"display","block","text-align","center","cursor","pointer","color","blue",3,"click"],[1,"alert","alert-danger"]],template:function(t,r){1&t&&i.Ac(0,$,73,31,"div",0),2&t&&i.lc("ngIf",r.productData)},directives:[d.m,u.a,o.g],pipes:[k.a,d.d],styles:[".product-detail-label[_ngcontent-%COMP%]{font-weight:700}"]}),t})(),X=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["app-product-shell"]],decls:5,vars:0,consts:[[1,"row"],[1,"scroll"],[1,"col-md-8"]],template:function(t,r){1&t&&(i.Rb(0,"div",0),i.Rb(1,"div",1),i.Nb(2,"app-product-shell-list"),i.Qb(),i.Rb(3,"div",2),i.Nb(4,"app-product-shell-detail"),i.Qb(),i.Qb())},directives:[q,K],styles:["div.scroll[_ngcontent-%COMP%]{margin:4px,4px;padding:4px;width:350px;height:500px;overflow-x:hidden;overflow-x:auto;text-align:justify}"]}),t})();var Z=e("9d4Z");function H(t,r){1&t&&(i.Rb(0,"div"),i.Cc(1,"Product Name is required"),i.Qb())}function Y(t,r){if(1&t&&(i.Rb(0,"div",32),i.Ac(1,H,2,0,"div",33),i.Qb()),2&t){const t=i.fc();i.zb(1),i.lc("ngIf",t.f.productName.errors.required)}}function tt(t,r){if(1&t&&(i.Rb(0,"option",34),i.Cc(1),i.Qb()),2&t){const t=r.$implicit;i.mc("value",null==t?null:t.store_category_id),i.zb(1),i.Ec(" ",t.store_category_name," ")}}function rt(t,r){if(1&t&&(i.Rb(0,"option",34),i.Cc(1),i.gc(2,"upperCaseName"),i.Qb()),2&t){const t=r.$implicit;i.mc("value",null==t?null:t.store_sub_category_id),i.zb(1),i.Ec(" ",i.hc(2,2,t.store_sub_category)," ")}}function et(t,r){if(1&t&&(i.Rb(0,"option",34),i.Cc(1),i.gc(2,"upperCaseName"),i.Qb()),2&t){const t=r.$implicit;i.mc("value",null==t?null:t.sub_category_id),i.zb(1),i.Ec(" ",i.hc(2,2,t.sub_category_name)," ")}}function ct(t,r){1&t&&(i.Rb(0,"div"),i.Cc(1,"Product Price is required"),i.Qb())}function ot(t,r){if(1&t&&(i.Rb(0,"div",32),i.Ac(1,ct,2,0,"div",33),i.Qb()),2&t){const t=i.fc();i.zb(1),i.lc("ngIf",t.f.productPrice.errors.required)}}function it(t,r){1&t&&(i.Rb(0,"div"),i.Cc(1,"Product weight is required"),i.Qb())}function at(t,r){if(1&t&&(i.Rb(0,"div",32),i.Ac(1,it,2,0,"div",33),i.Qb()),2&t){const t=i.fc();i.zb(1),i.lc("ngIf",t.f.productWeight.errors.required)}}function dt(t,r){1&t&&(i.Rb(0,"div"),i.Cc(1,"Product Code is required"),i.Qb())}function ut(t,r){if(1&t&&(i.Rb(0,"div",32),i.Ac(1,dt,2,0,"div",33),i.Qb()),2&t){const t=i.fc();i.zb(1),i.lc("ngIf",t.f.productCode.errors.required)}}function nt(t,r){1&t&&(i.Rb(0,"div"),i.Cc(1,"Product Description is required"),i.Qb())}function st(t,r){if(1&t&&(i.Rb(0,"div",32),i.Ac(1,nt,2,0,"div",33),i.Qb()),2&t){const t=i.fc();i.zb(1),i.lc("ngIf",t.f.productDescription.errors.required)}}function bt(t,r){1&t&&(i.Rb(0,"div"),i.Cc(1,"Product Rating is required"),i.Qb())}function lt(t,r){if(1&t&&(i.Rb(0,"div",32),i.Ac(1,bt,2,0,"div",33),i.Qb()),2&t){const t=i.fc();i.zb(1),i.lc("ngIf",t.f.productRating.errors.required)}}function pt(t,r){if(1&t){const t=i.Sb();i.Rb(0,"button",35),i.dc("click",(function(){return i.uc(t),i.fc().deleteProduct()})),i.Nb(1,"i",36),i.Cc(2," Delete "),i.Qb()}}const gt=function(t){return{"is-invalid":t}},ft=[{path:"",component:X,resolve:{products:h}},{path:":id",component:l,resolve:{product:v}},{path:":id/edit",component:(()=>{class t{constructor(t,r,e,c,o){this.formBuilder=t,this._router=r,this._activatedRoute=e,this._categoryService=c,this._productService=o,this.addProductForm=this.formBuilder.group({productName:["",N.s.required],storeCategoryName:["",N.s.required],storeSubCategoryName:["",N.s.required],subCategoryName:[""],productWeightType:[""],productPrice:["",N.s.required],productWeight:[""],productCode:["",N.s.required],productDescription:["",N.s.required],productRating:["",N.s.required],status:["",N.s.required]})}get f(){return this.addProductForm.controls}ngOnInit(){this._categoryService.getAllStoreCategory("").subscribe(t=>{this.storeCategories=t.store_categories,this.productId=this._activatedRoute.snapshot.paramMap.get("id"),0!==this.productId&&(this.productData=this._activatedRoute.snapshot.data.productData.product,this.addProductForm.get("storeCategoryName").setValue(this.productData.store_category_id),this.addProductForm.get("storeSubCategoryName").setValue(this.productData.store_sub_category_id),this.addProductForm.get("subCategoryName").setValue(this.productData.sub_category_id),this.addProductForm.get("productName").setValue(this.productData.productName),this.addProductForm.get("productPrice").setValue(this.productData.price),this.addProductForm.get("productCode").setValue(this.productData.productCode),this.addProductForm.get("productWeightType").setValue(this.productData.productWeightType),this.addProductForm.get("productWeight").setValue(this.productData.product_weight),this.addProductForm.get("productDescription").setValue(this.productData.description),this.addProductForm.get("productRating").setValue(this.productData.starRating),this.addProductForm.get("status").setValue(this.productData.available),console.log(this.productData),this.storeCategoryChange(this.productData.store_category_id,+this.productData.store_sub_category_id))})}fetchSubCategories(t){}deleteProduct(){0!=this.productId&&confirm("Are you sure to delete ")&&this._productService.deleteProduct(this.productId).subscribe(t=>{console.log(t),this._router.navigate(["products"])})}onSubmit(){console.log(this.addProductForm.value),this.submitted=!0,this.addProductForm.invalid||(0==this.productId?this._productService.createProduct(this.addProductForm.value).subscribe(t=>{200==t.status?this._router.navigate(["products"]):400==t.status&&alert("Product Not Added . Internal Server Error")},t=>{console.log(t)}):this._productService.updateProduct(this.addProductForm.value,this.productId).subscribe(t=>{console.log(t),200==t.status?this._router.navigate(["products"]):400==t.status&&alert("Product Not Added . Internal Server Error")},t=>{this.errorMessage=t}))}storeCategoryChange(t,r){this.storeSubCategoryData=[],this.subCategoryData=[],this._categoryService.getStoreCategoryData(+t).subscribe(t=>{this.storeSubCategoryData=t.store_categories[0].store_sub_category_name,0==+r||(this.subCategoryData=this.storeSubCategoryData.filter(t=>t.store_sub_category_id===r)[0].sub_category_data)})}storeSubCategoryChange(t){this.storeSubCategoryData.filter(r=>{r.store_sub_category_id===+t&&(this.subCategoryData=r.sub_category_data,this.subCategoryData.length<1&&(this.addProductForm.patchValue({subCategoryName:""}),this.subCategoryData=[]))})}}return t.\u0275fac=function(r){return new(r||t)(i.Mb(N.c),i.Mb(o.f),i.Mb(o.a),i.Mb(Z.a),i.Mb(a.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-product-shell-add"]],decls:89,vars:29,consts:[[1,"jumbotron"],[1,"container"],[1,"row"],[1,"col-md-6","offset-md-3"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","formControlName","productName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["formControlName","storeCategoryName",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-6"],["formControlName","storeSubCategoryName",1,"form-control",3,"change"],["formControlName","subCategoryName",1,"form-control"],["formControlName","productWeightType",1,"form-control"],["selected","","value","1"],["value","2"],["value","3"],["value","5"],["value","4"],["value","6"],["type","text","formControlName","productPrice",1,"form-control",3,"ngClass"],["type","text","formControlName","productWeight",1,"form-control",3,"ngClass"],["type","text","formControlName","productCode",1,"form-control",3,"ngClass"],["row","3","formControlName","productDescription",1,"form-control",3,"ngClass"],["type","text","formControlName","productRating",1,"form-control",3,"ngClass"],["for",""],["formControlName","status",1,"form-control"],["value","1"],["value","0"],[1,"btn","btn-primary","mr-3"],[1,"fa","fa-save"],["class","btn btn-primary mr-3",3,"click",4,"ngIf"],[1,"invalid-feedback"],[4,"ngIf"],[3,"value"],[1,"btn","btn-primary","mr-3",3,"click"],[1,"fa","fa-trash"]],template:function(t,r){1&t&&(i.Rb(0,"div",0),i.Rb(1,"div",1),i.Rb(2,"div",2),i.Rb(3,"div",3),i.Rb(4,"h2"),i.Cc(5,"Add New Product"),i.Qb(),i.Rb(6,"form",4),i.dc("ngSubmit",(function(){return r.onSubmit()})),i.Rb(7,"div",5),i.Rb(8,"label"),i.Cc(9,"Product Name"),i.Qb(),i.Nb(10,"input",6),i.Ac(11,Y,2,1,"div",7),i.Qb(),i.Rb(12,"div",5),i.Rb(13,"label"),i.Cc(14,"Store Category Name"),i.Qb(),i.Rb(15,"div"),i.Rb(16,"select",8),i.dc("change",(function(t){return r.storeCategoryChange(t.target.value,0)})),i.Ac(17,tt,2,2,"option",9),i.Qb(),i.Qb(),i.Qb(),i.Rb(18,"div",2),i.Rb(19,"div",10),i.Rb(20,"div",5),i.Rb(21,"label"),i.Cc(22,"Store Sub Category"),i.Qb(),i.Rb(23,"div"),i.Rb(24,"select",11),i.dc("change",(function(t){return r.storeSubCategoryChange(t.target.value)})),i.Ac(25,rt,3,4,"option",9),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(26,"div",10),i.Rb(27,"div",5),i.Rb(28,"label"),i.Cc(29,"Sub Category"),i.Qb(),i.Rb(30,"div"),i.Rb(31,"select",12),i.Ac(32,et,3,4,"option",9),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(33,"div",5),i.Rb(34,"label"),i.Cc(35,"Weight Type"),i.Qb(),i.Rb(36,"div"),i.Rb(37,"select",13),i.Rb(38,"option",14),i.Cc(39,"kg"),i.Qb(),i.Rb(40,"option",15),i.Cc(41,"gms"),i.Qb(),i.Rb(42,"option",16),i.Cc(43,"litre"),i.Qb(),i.Rb(44,"option",17),i.Cc(45,"ml"),i.Qb(),i.Rb(46,"option",18),i.Cc(47,"packet"),i.Qb(),i.Rb(48,"option",19),i.Cc(49,"pieces"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(50,"div",5),i.Rb(51,"label"),i.Cc(52,"Orignal Price(M.R.P)"),i.Qb(),i.Nb(53,"input",20),i.Ac(54,ot,2,1,"div",7),i.Qb(),i.Rb(55,"div",5),i.Rb(56,"label"),i.Cc(57,"Product Weight"),i.Qb(),i.Nb(58,"input",21),i.Ac(59,at,2,1,"div",7),i.Qb(),i.Rb(60,"div",5),i.Rb(61,"label"),i.Cc(62,"Product Code"),i.Qb(),i.Nb(63,"input",22),i.Ac(64,ut,2,1,"div",7),i.Qb(),i.Rb(65,"div",5),i.Rb(66,"label"),i.Cc(67,"Product Desciption"),i.Qb(),i.Nb(68,"textarea",23),i.Ac(69,st,2,1,"div",7),i.Qb(),i.Rb(70,"div",5),i.Rb(71,"label"),i.Cc(72,"Product Rating"),i.Qb(),i.Nb(73,"input",24),i.Ac(74,lt,2,1,"div",7),i.Qb(),i.Rb(75,"div",5),i.Rb(76,"label",25),i.Cc(77,"Status"),i.Qb(),i.Rb(78,"div"),i.Rb(79,"select",26),i.Rb(80,"option",27),i.Cc(81,"Enabled"),i.Qb(),i.Rb(82,"option",28),i.Cc(83,"Disabled"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(84,"div",5),i.Rb(85,"button",29),i.Nb(86,"i",30),i.Cc(87," Save"),i.Qb(),i.Ac(88,pt,3,0,"button",31),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&t&&(i.zb(6),i.lc("formGroup",r.addProductForm),i.zb(4),i.lc("ngClass",i.pc(17,gt,r.submitted&&r.f.productName.errors)),i.zb(1),i.lc("ngIf",r.submitted&&r.f.productName.errors),i.zb(6),i.lc("ngForOf",r.storeCategories),i.zb(8),i.lc("ngForOf",r.storeSubCategoryData),i.zb(7),i.lc("ngForOf",r.subCategoryData),i.zb(21),i.lc("ngClass",i.pc(19,gt,r.submitted&&r.f.productPrice.errors)),i.zb(1),i.lc("ngIf",r.submitted&&r.f.productPrice.errors),i.zb(4),i.lc("ngClass",i.pc(21,gt,r.submitted&&r.f.productWeight.errors)),i.zb(1),i.lc("ngIf",r.submitted&&r.f.productWeight.errors),i.zb(4),i.lc("ngClass",i.pc(23,gt,r.submitted&&r.f.productCode.errors)),i.zb(1),i.lc("ngIf",r.submitted&&r.f.productCode.errors),i.zb(4),i.lc("ngClass",i.pc(25,gt,r.submitted&&r.f.productDescription.errors)),i.zb(1),i.lc("ngIf",r.submitted&&r.f.productDescription.errors),i.zb(4),i.lc("ngClass",i.pc(27,gt,r.submitted&&r.f.productRating.errors)),i.zb(1),i.lc("ngIf",r.submitted&&r.f.productRating.errors),i.zb(14),i.lc("ngIf",0!=r.productId))},directives:[N.u,N.l,N.e,N.b,N.k,N.d,d.k,d.m,N.r,d.l,N.o,N.t],pipes:[k.a],styles:[""]}),t})(),resolve:{productData:v}}];let vt=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(r){return new(r||t)},imports:[[o.j.forChild(ft)],o.j]}),t})(),ht=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(r){return new(r||t)},providers:[],imports:[[D.i.forFeature("products",P),vt,N.p,c.a]]}),t})()}}]);