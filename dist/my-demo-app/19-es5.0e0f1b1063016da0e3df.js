function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var c=e[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{lE2P:function(t,e,r){"use strict";r.r(e),r.d(e,"ProductModule",(function(){return Lt}));var c=r("PCNd"),o=r("tyNb"),a=r("fXoL"),i=r("QJ7G"),n=r("ofXK"),u=r("Q6/5"),d=function(){return["/products/",0,"edit"]};function s(t,e){if(1&t){var r=a.Xb();a.Wb(0,"div",2),a.Wb(1,"div",3),a.Lc(2),a.Vb(),a.Wb(3,"div",4),a.Wb(4,"div",5),a.Wb(5,"div",6),a.Wb(6,"div",5),a.Wb(7,"div",7),a.Lc(8,"Name:"),a.Vb(),a.Wb(9,"div",6),a.Lc(10),a.Vb(),a.Vb(),a.Wb(11,"div",5),a.Wb(12,"div",7),a.Lc(13,"Code:"),a.Vb(),a.Wb(14,"div",6),a.Lc(15),a.Vb(),a.Vb(),a.Wb(16,"div",5),a.Wb(17,"div",7),a.Lc(18,"Release Date:"),a.Vb(),a.Wb(19,"div",6),a.Lc(20),a.nc(21,"date"),a.Vb(),a.Vb(),a.Wb(22,"div",5),a.Wb(23,"div",7),a.Lc(24,"Last Updated:"),a.Vb(),a.Wb(25,"div",6),a.Lc(26),a.nc(27,"date"),a.Vb(),a.Vb(),a.Wb(28,"div",5),a.Wb(29,"div",7),a.Lc(30,"Description:"),a.Vb(),a.Wb(31,"div",6),a.Lc(32),a.Vb(),a.Vb(),a.Wb(33,"div",5),a.Wb(34,"div",7),a.Lc(35,"Price:"),a.Vb(),a.Wb(36,"div",6),a.Lc(37),a.Vb(),a.Vb(),a.Wb(38,"div",5),a.Wb(39,"div",7),a.Lc(40,"Star Rating:"),a.Vb(),a.Wb(41,"div",6),a.Wb(42,"app-star",8),a.ic("ratingClicked",(function(t){return a.Dc(r),a.mc().onRatingClicked(t)})),a.Vb(),a.Vb(),a.Vb(),a.Wb(43,"div",5),a.Wb(44,"div",7),a.Lc(45,"Category Name:"),a.Vb(),a.Wb(46,"div",6),a.Lc(47),a.Vb(),a.Vb(),a.Wb(48,"div",5),a.Wb(49,"div",7),a.Lc(50,"Available:"),a.Vb(),a.Wb(51,"div",6),a.Lc(52),a.Vb(),a.Vb(),a.Vb(),a.Wb(53,"div",7),a.Rb(54,"img",9),a.Vb(),a.Vb(),a.Vb(),a.Wb(55,"div",10),a.Wb(56,"button",11),a.ic("click",(function(){return a.Dc(r),a.mc().onBack()})),a.Rb(57,"i",12),a.Lc(58," Back "),a.Vb(),a.Wb(59,"a",13),a.Rb(60,"i",12),a.Lc(61," Edit "),a.Vb(),a.Vb(),a.Vb()}if(2&t){var c=a.mc();a.Cb(2),a.Nc(" ",c.pageTitle," "),a.Cb(8),a.Mc(null==c.productData?null:c.productData.productName),a.Cb(5),a.Mc(null==c.productData?null:c.productData.productCode),a.Cb(5),a.Mc(a.pc(21,17,null==c.productData?null:c.productData.releaseDate,"medium")),a.Cb(6),a.Mc(a.pc(27,20,null==c.productData?null:c.productData.lastUpdated,"medium")),a.Cb(6),a.Mc(null==c.productData?null:c.productData.description),a.Cb(5),a.Mc(null==c.productData?null:c.productData.price),a.Cb(5),a.tc("rating",null==c.productData?null:c.productData.starRating),a.Cb(5),a.Mc(null==c.productData?null:c.productData.categoryName),a.Cb(5),a.Mc(null!=c.productData&&c.productData.available?"Available":"Not Available"),a.Cb(2),a.Ic("width",200,"px")("margin",2,"px"),a.vc("src","assets/product_images/",null==c.productData?null:c.productData.image_url,"",a.Ec),a.tc("title",null==c.productData?null:c.productData.productName),a.Cb(5),a.tc("routerLink",a.wc(23,d))}}function b(t,e){if(1&t&&(a.Wb(0,"div",14),a.Lc(1),a.Vb()),2&t){var r=a.mc();a.Cb(1),a.Nc("",r.errorMessage,"\n")}}var l,p,v,g=((l=function(){function t(e,r,c){_classCallCheck(this,t),this._productService=e,this.router=r,this._activatedRoute=c}return _createClass(t,[{key:"onBack",value:function(){this.router.navigate(["/products"],{queryParamsHandling:"preserve"})}},{key:"onEdit",value:function(){this.router.navigate(["products",this.productId,"edit"])}},{key:"ngOnInit",value:function(){var t=this._activatedRoute.snapshot.data.product;this.errorMessage=t.error,this.onProductRetrieved(t.product)}},{key:"onRatingClicked",value:function(t){console.log(t)}},{key:"onProductRetrieved",value:function(t){this.productData=t,this.pageTitle=this.productData?"Product Detail: "+this.productData.productName:"No product found"}}]),t}()).\u0275fac=function(t){return new(t||l)(a.Qb(i.a),a.Qb(o.f),a.Qb(o.a))},l.\u0275cmp=a.Kb({type:l,selectors:[["ng-component"]],decls:2,vars:2,consts:[["class","card",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col-md-8"],[1,"col-md-4"],[3,"rating","ratingClicked"],[1,"center-block","img-responsive",3,"src","title"],[1,"card-footer"],[1,"btn","btn-outline-secondary",2,"width","80px",3,"click"],[1,"fa","fa-chevron-left"],["type","button","target","_blank",1,"btn","btn-outline-secondary",2,"width","80px",3,"routerLink"],[1,"alert","alert-danger"]],template:function(t,e){1&t&&(a.Jc(0,s,62,24,"div",0),a.Jc(1,b,2,1,"div",1)),2&t&&(a.tc("ngIf",e.productData),a.Cb(1),a.tc("ngIf",e.errorMessage))},directives:[n.n,u.a,o.i],pipes:[n.e],styles:[""]}),l),f=r("LRne"),m=r("lJxs"),C=r("JIr8"),h=((v=function(){function t(e){_classCallCheck(this,t),this.productDataService=e}return _createClass(t,[{key:"resolve",value:function(t,e){var r=+t.paramMap.get("id");if(isNaN(r)){var c="Product id is not a number:"+r;return console.error(c),Object(f.a)({product:null,error:c})}return this.productDataService.getProduct(r).pipe(Object(m.a)((function(t){return{product:t,error:""}})),Object(C.a)((function(t){var e="Retrieval error: "+t;return Object(f.a)({product:null,error:e})})))}}]),t}()).\u0275fac=function(t){return new(t||v)(a.ec(i.a))},v.\u0275prov=a.Mb({token:v,factory:v.\u0275fac,providedIn:"root"}),v),V=((p=function(){function t(e){_classCallCheck(this,t),this.productDataService=e}return _createClass(t,[{key:"resolve",value:function(t,e){return this.productDataService.getProducts(1,20,"").pipe(Object(m.a)((function(t){return{product:t.products,product_total_count:t.productCount,error:""}})),Object(C.a)((function(t){var e="Retrieval error: "+t;return Object(f.a)({product:null,error:e})})))}}]),t}()).\u0275fac=function(t){return new(t||p)(a.ec(i.a))},p.\u0275prov=a.Mb({token:p,factory:p.\u0275fac,providedIn:"root"}),p),W=r("vkgz"),y=r("/uUt"),D=r("Kj3r"),P=r("eIep"),k=r("kt0X"),_={showProductCode:!0,currentProduct:null,products:[]};function L(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TOGGLE_PRODUCT_CODE":return Object.assign(Object.assign({},t),{showProductCode:e.payload});default:return t}}var I=Object(k.k)("products"),N=Object(k.l)(I,(function(t){return t.showProductCode})),R=r("3Pt+"),S=r("Exvd"),w=r("CvK3");function O(t,e){if(1&t&&(a.Ub(0),a.Lc(1),a.Tb()),2&t){var r=a.mc();a.Cb(1),a.Nc(" - ",null==r.productData?null:r.productData.productCode,"\n")}}var F,x=((F=function(){function t(e){_classCallCheck(this,t),this.store=e,this.showProductCode=!1}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.store.pipe(Object(k.m)(N)).subscribe((function(e){t.showProductCode=e}))}}]),t}()).\u0275fac=function(t){return new(t||F)(a.Qb(k.h))},F.\u0275cmp=a.Kb({type:F,selectors:[["app-product-shell-list-item"]],inputs:{productData:["productInfo1","productData"]},decls:3,vars:4,consts:[[4,"ngIf"]],template:function(t,e){1&t&&(a.Lc(0),a.nc(1,"upperCaseName"),a.Jc(2,O,2,1,"ng-container",0)),2&t&&(a.Nc("",a.oc(1,2,null==e.productData?null:e.productData.productName),"\n"),a.Cb(2),a.tc("ngIf",e.showProductCode))},directives:[n.n],pipes:[w.a],styles:[""]}),F);function J(t,e){if(1&t){var r=a.Xb();a.Wb(0,"app-pagination",17),a.ic("currentPage",(function(t){return a.Dc(r),a.mc(2).currentPageFn(t)})),a.Vb()}if(2&t){var c=a.mc(2);a.tc("totalItemCount",c.productsCount)}}var M=function(t){return{active:t}};function j(t,e){if(1&t){var r=a.Xb();a.Wb(0,"button",18),a.ic("click",(function(){a.Dc(r);var t=e.$implicit;return a.mc(2).onSelected(t)})),a.Rb(1,"app-product-shell-list-item",19),a.Vb()}if(2&t){var c=e.$implicit,o=a.mc(2);a.tc("ngClass",a.xc(2,M,(null==o.selectedProduct?null:o.selectedProduct.productId)==(null==c?null:c.productId))),a.Cb(1),a.tc("productInfo1",c)}}function q(t,e){if(1&t&&(a.Wb(0,"div"),a.Jc(1,J,1,1,"app-pagination",14),a.Wb(2,"div",15),a.Jc(3,j,2,4,"button",16),a.Vb(),a.Vb()),2&t){var r=a.mc();a.Cb(1),a.tc("ngIf",r.productsCount>0),a.Cb(2),a.tc("ngForOf",r.products)}}function Q(t,e){1&t&&(a.Wb(0,"div"),a.Wb(1,"span"),a.Lc(2,"No Products Found in catelog"),a.Vb(),a.Vb())}function E(t,e){if(1&t&&(a.Wb(0,"div",20),a.Lc(1),a.Vb()),2&t){var r=a.mc();a.Cb(1),a.Nc(" Error: ",r.errorMessage," ")}}var T,A=function(){return["/products/",0,"edit"]},B=((T=function(){function t(e,r,c,o,a){_classCallCheck(this,t),this._productService=e,this.router=r,this.formBuilder=c,this.store=o,this._activatedRoute=a,this.filterBy="",this.pageTitle="Products Listing",this.productsCount=0,this.Pages=[],this.pageSize=20,this.searchCriteriaForm=this.formBuilder.group({searchCriteria:[""]})}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.currentPage=1,this.sub=this._productService.selectProductChanges$.subscribe((function(e){t.selectedProduct=e})),this.store.pipe(Object(k.m)(N)).subscribe((function(e){t.displayCode=e}));var e=this._activatedRoute.snapshot.data.products.product;this.productsCount=+this._activatedRoute.snapshot.data.products.product_total_count,console.log(e),console.log(this.productsCount),this.onProductRetrieved(e)}},{key:"onChanges",value:function(){var t=this;this.searchCriteriaForm.get("searchCriteria").valueChanges.pipe(Object(W.a)((function(t){console.log(t)})),Object(y.a)(),Object(D.a)(2e3),Object(P.a)((function(e){return t.filterBy=e,console.log(t.filterBy),t._productService.getProducts(t.currentPage,t.pageSize,t.filterBy)}))).subscribe((function(e){t.onProductRetrieved(e.products),t.productsCount=e.productCount}))}},{key:"currentPageFn",value:function(t){var e=this;this.currentPage=t,this._productService.getProducts(this.currentPage,this.pageSize,this.filterBy).subscribe((function(t){e.onProductRetrieved(t.products)}))}},{key:"checkChanged",value:function(t){this.store.dispatch({type:"TOGGLE_PRODUCT_CODE",payload:t})}},{key:"onSelected",value:function(t){this._productService.changeSelectedProduct(t.productId)}},{key:"onProductRetrieved",value:function(t){this.products=t}},{key:"addProduct",value:function(){this.router.navigate(["products","0","edit"])}},{key:"ngOnDestroy",value:function(){this.sub.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||T)(a.Qb(i.a),a.Qb(o.f),a.Qb(R.d),a.Qb(k.h),a.Qb(o.a))},T.\u0275cmp=a.Kb({type:T,selectors:[["app-product-shell-list"]],decls:20,vars:8,consts:[[1,"card"],[1,"card-header"],["type","button",1,"btn","btn-outline-secondary",2,"float","right",3,"routerLink"],[1,"card-body"],[3,"formGroup"],[1,"form-group"],["formControlName","searchCriteria","type","text","id","inputError","autocomplete","off","autofocus","","placeholder","Search Products",1,"form-control",3,"keyup"],[1,"glyphicon","glyphicon-remove","form-control-feedback"],[4,"ngIf"],[1,"card-footer"],[1,"row"],[1,"form-check","col-md-12"],["type","checkbox",1,"form-check-input",3,"checked","change"],["class","alert alert-danger",4,"ngIf"],[3,"totalItemCount","currentPage",4,"ngIf"],[1,"list-group"],["type","button","class","list-group-item",3,"ngClass","click",4,"ngFor","ngForOf"],[3,"totalItemCount","currentPage"],["type","button",1,"list-group-item",3,"ngClass","click"],[3,"productInfo1"],[1,"alert","alert-danger"]],template:function(t,e){1&t&&(a.Wb(0,"div",0),a.Wb(1,"div",1),a.Lc(2),a.Wb(3,"a",2),a.Lc(4," Add New Product "),a.Vb(),a.Vb(),a.Wb(5,"div",3),a.Wb(6,"form",4),a.Wb(7,"div",5),a.Wb(8,"div"),a.Wb(9,"input",6),a.ic("keyup",(function(){return e.onChanges()})),a.Vb(),a.Rb(10,"span",7),a.Vb(),a.Vb(),a.Vb(),a.Jc(11,q,4,2,"div",8),a.Jc(12,Q,3,0,"div",8),a.Vb(),a.Wb(13,"div",9),a.Wb(14,"div",10),a.Wb(15,"div",11),a.Wb(16,"label"),a.Wb(17,"input",12),a.ic("change",(function(t){return e.checkChanged(t.target.checked)})),a.Vb(),a.Lc(18," Display Product Code "),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Jc(19,E,2,1,"div",13),a.Vb()),2&t&&(a.Cb(2),a.Nc(" ",e.pageTitle," "),a.Cb(1),a.tc("routerLink",a.wc(7,A)),a.Cb(3),a.tc("formGroup",e.searchCriteriaForm),a.Cb(5),a.tc("ngIf",e.productsCount>0),a.Cb(1),a.tc("ngIf",0==e.productsCount),a.Cb(5),a.tc("checked",e.displayCode),a.Cb(2),a.tc("ngIf",e.errorMessage))},directives:[o.i,R.w,R.n,R.f,R.c,R.m,R.e,n.n,n.m,S.a,n.l,x],styles:[""]}),T),U=r("chph"),X=r("1kSV");function G(t,e){if(1&t&&a.Rb(0,"img",17),2&t){var r=a.mc(2);a.Ic("width",200,"px")("margin",2,"px"),a.tc("title",null==r.productData?null:r.productData.productName)}}function K(t,e){if(1&t&&a.Rb(0,"img",18),2&t){var r=a.mc(2);a.Ic("width",200,"px")("margin",2,"px"),a.uc("src",r.imageurl,a.Ec),a.tc("title",null==r.productData?null:r.productData.productName)}}function $(t,e){if(1&t){var r=a.Xb();a.Wb(0,"span",19),a.ic("click",(function(){return a.Dc(r),a.mc(2).uploadImage()})),a.Lc(1," Upload Image "),a.Vb()}}function z(t,e){if(1&t){var r=a.Xb();a.Wb(0,"span",19),a.ic("click",(function(){return a.Dc(r),a.mc(2).uploadImage()})),a.Lc(1," Change Image "),a.Vb()}}function H(t,e){if(1&t&&(a.Wb(0,"div",20),a.Lc(1),a.Vb()),2&t){var r=a.mc(2);a.Cb(1),a.Nc("",r.errorMessage," ")}}var Z=function(t){return["/products",t,"edit"]};function Y(t,e){if(1&t){var r=a.Xb();a.Wb(0,"div",1),a.Wb(1,"div",2),a.Lc(2),a.Vb(),a.Wb(3,"div",3),a.Wb(4,"div",4),a.Wb(5,"div",5),a.Wb(6,"div",4),a.Wb(7,"div",6),a.Lc(8,"Name:"),a.Vb(),a.Wb(9,"div",5),a.Lc(10),a.nc(11,"upperCaseName"),a.Vb(),a.Vb(),a.Wb(12,"div",4),a.Wb(13,"div",6),a.Lc(14,"Code:"),a.Vb(),a.Wb(15,"div",5),a.Lc(16),a.nc(17,"upperCaseName"),a.Vb(),a.Vb(),a.Wb(18,"div",4),a.Wb(19,"div",6),a.Lc(20,"Weight:"),a.Vb(),a.Wb(21,"div",5),a.Lc(22),a.Vb(),a.Vb(),a.Wb(23,"div",4),a.Wb(24,"div",6),a.Lc(25,"Release Date:"),a.Vb(),a.Wb(26,"div",5),a.Lc(27),a.nc(28,"date"),a.Vb(),a.Vb(),a.Wb(29,"div",4),a.Wb(30,"div",6),a.Lc(31,"Last Updated:"),a.Vb(),a.Wb(32,"div",5),a.Lc(33),a.nc(34,"date"),a.Vb(),a.Vb(),a.Wb(35,"div",4),a.Wb(36,"div",6),a.Lc(37,"Description:"),a.Vb(),a.Wb(38,"div",5),a.Lc(39),a.Vb(),a.Vb(),a.Wb(40,"div",4),a.Wb(41,"div",6),a.Lc(42,"Price:"),a.Vb(),a.Wb(43,"div",5),a.Lc(44),a.Vb(),a.Vb(),a.Wb(45,"div",4),a.Wb(46,"div",6),a.Lc(47,"Star Rating:"),a.Vb(),a.Wb(48,"div",5),a.Wb(49,"app-star",7),a.ic("ratingClicked",(function(t){return a.Dc(r),a.mc().onRatingClicked(t)})),a.Vb(),a.Vb(),a.Vb(),a.Wb(50,"div",4),a.Wb(51,"div",6),a.Lc(52,"Category Name:"),a.Vb(),a.Wb(53,"div",5),a.Lc(54),a.nc(55,"upperCaseName"),a.Vb(),a.Vb(),a.Wb(56,"div",4),a.Wb(57,"div",6),a.Lc(58,"Available:"),a.Vb(),a.Wb(59,"div",5),a.Lc(60),a.Vb(),a.Vb(),a.Vb(),a.Wb(61,"div",8),a.Jc(62,G,1,5,"img",9),a.Jc(63,K,1,6,"img",10),a.Jc(64,$,2,0,"span",11),a.Jc(65,z,2,0,"span",11),a.Vb(),a.Vb(),a.Vb(),a.Wb(66,"div",12),a.Wb(67,"div",13),a.Wb(68,"div",5),a.Wb(69,"button",14),a.Rb(70,"i",15),a.Lc(71," Edit "),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Jc(72,H,2,1,"div",16),a.Vb()}if(2&t){var c=a.mc();a.Cb(2),a.Nc(" ",null==c.productData?null:c.productData.productName," "),a.Cb(8),a.Mc(a.oc(11,17,null==c.productData?null:c.productData.productName)),a.Cb(6),a.Mc(a.oc(17,19,null==c.productData?null:c.productData.productCode)),a.Cb(6),a.Nc(" ",null!=c.productData&&c.productData.product_weight?(null==c.productData?null:c.productData.product_weight)+" "+(null==c.productData?null:c.productData.weight_text):"Not Available"," "),a.Cb(5),a.Mc(a.pc(28,21,null==c.productData?null:c.productData.releaseDate,"short")),a.Cb(6),a.Mc(a.pc(34,24,null==c.productData?null:c.productData.lastUpdated,"short")),a.Cb(6),a.Mc(null==c.productData?null:c.productData.description),a.Cb(5),a.Nc("\u20b9 ",null==c.productData?null:c.productData.price,""),a.Cb(5),a.tc("rating",null==c.productData?null:c.productData.starRating),a.Cb(5),a.Mc(a.oc(55,27,null==c.productData?null:c.productData.categoryName)),a.Cb(6),a.Mc(null!=c.productData&&c.productData.available?"Available":"Not Available"),a.Cb(2),a.tc("ngIf",!c.imageurl),a.Cb(1),a.tc("ngIf",c.imageurl),a.Cb(1),a.tc("ngIf",!c.imageurl),a.Cb(1),a.tc("ngIf",c.imageurl),a.Cb(4),a.tc("routerLink",a.xc(29,Z,c.productData.productId)),a.Cb(3),a.tc("ngIf",c.errorMessage)}}var tt,et,rt=((et=function(){function t(e,r){_classCallCheck(this,t),this.productService=e,this.modalService=r,this.pageTitle="Product Detail",this.imageurl="",this.productid=""}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.sub=this.productService.selectProductChanges$.subscribe((function(e){e&&(t.imageurl=e.image_url,t.productid=e.productId),t.productData=e,console.log(t.productData)}))}},{key:"onRatingClicked",value:function(t){}},{key:"ngOnChanges",value:function(){console.log("child component")}},{key:"uploadImage",value:function(){var t=this,e=this.modalService.open(U.a);e.componentInstance.title="Image Upload",e.componentInstance.image_type="products",e.componentInstance.id=this.productid,e.componentInstance.productImage.subscribe((function(e){t.imageurl=e.image_url,t.productService.updateProductImageUrl(t.imageurl,t.productid)}))}},{key:"ngOnDestroy",value:function(){this.sub.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||et)(a.Qb(i.a),a.Qb(X.f))},et.\u0275cmp=a.Kb({type:et,selectors:[["app-product-shell-detail"]],features:[a.Ab],decls:1,vars:1,consts:[["class","card card-primary",4,"ngIf"],[1,"card","card-primary"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col-md-8"],[1,"col-md-4","product-detail-label"],[3,"rating","ratingClicked"],[1,"col-md-4"],["class","center-block img-responsive","src","assets/product_images/default_image.jpg",3,"title","width","margin",4,"ngIf"],["class","center-block img-responsive",3,"src","title","width","margin",4,"ngIf"],["style","display:block;text-align:center;cursor:pointer;color:blue",3,"click",4,"ngIf"],[1,"card-footer"],[1,"row","mb-2"],[1,"btn","btn-primary","mr-3",3,"routerLink"],[1,"fa","fa-edit"],["class","alert alert-danger",4,"ngIf"],["src","assets/product_images/default_image.jpg",1,"center-block","img-responsive",3,"title"],[1,"center-block","img-responsive",3,"src","title"],[2,"display","block","text-align","center","cursor","pointer","color","blue",3,"click"],[1,"alert","alert-danger"]],template:function(t,e){1&t&&a.Jc(0,Y,73,31,"div",0),2&t&&a.tc("ngIf",e.productData)},directives:[n.n,u.a,o.g],pipes:[w.a,n.e],styles:[".product-detail-label[_ngcontent-%COMP%]{font-weight:700}"]}),et),ct=((tt=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||tt)},tt.\u0275cmp=a.Kb({type:tt,selectors:[["app-product-shell"]],decls:5,vars:0,consts:[[1,"row"],[1,"scroll"],[1,"col-md-8"]],template:function(t,e){1&t&&(a.Wb(0,"div",0),a.Wb(1,"div",1),a.Rb(2,"app-product-shell-list"),a.Vb(),a.Wb(3,"div",2),a.Rb(4,"app-product-shell-detail"),a.Vb(),a.Vb())},directives:[B,rt],styles:["div.scroll[_ngcontent-%COMP%]{margin:4px,4px;padding:4px;width:350px;height:500px;overflow-x:hidden;overflow-x:auto;text-align:justify}"]}),tt),ot=r("9d4Z");function at(t,e){1&t&&(a.Wb(0,"div"),a.Lc(1,"Product Name is required"),a.Vb())}function it(t,e){if(1&t&&(a.Wb(0,"div",32),a.Jc(1,at,2,0,"div",33),a.Vb()),2&t){var r=a.mc();a.Cb(1),a.tc("ngIf",r.f.productName.errors.required)}}function nt(t,e){if(1&t&&(a.Wb(0,"option",34),a.Lc(1),a.Vb()),2&t){var r=e.$implicit;a.uc("value",null==r?null:r.store_category_id),a.Cb(1),a.Nc(" ",r.store_category_name," ")}}function ut(t,e){if(1&t&&(a.Wb(0,"option",34),a.Lc(1),a.nc(2,"upperCaseName"),a.Vb()),2&t){var r=e.$implicit;a.uc("value",null==r?null:r.store_sub_category_id),a.Cb(1),a.Nc(" ",a.oc(2,2,r.store_sub_category)," ")}}function dt(t,e){if(1&t&&(a.Wb(0,"option",34),a.Lc(1),a.nc(2,"upperCaseName"),a.Vb()),2&t){var r=e.$implicit;a.uc("value",null==r?null:r.sub_category_id),a.Cb(1),a.Nc(" ",a.oc(2,2,r.sub_category_name)," ")}}function st(t,e){1&t&&(a.Wb(0,"div"),a.Lc(1,"Product Price is required"),a.Vb())}function bt(t,e){if(1&t&&(a.Wb(0,"div",32),a.Jc(1,st,2,0,"div",33),a.Vb()),2&t){var r=a.mc();a.Cb(1),a.tc("ngIf",r.f.productPrice.errors.required)}}function lt(t,e){1&t&&(a.Wb(0,"div"),a.Lc(1,"Product weight is required"),a.Vb())}function pt(t,e){if(1&t&&(a.Wb(0,"div",32),a.Jc(1,lt,2,0,"div",33),a.Vb()),2&t){var r=a.mc();a.Cb(1),a.tc("ngIf",r.f.productWeight.errors.required)}}function vt(t,e){1&t&&(a.Wb(0,"div"),a.Lc(1,"Product Code is required"),a.Vb())}function gt(t,e){if(1&t&&(a.Wb(0,"div",32),a.Jc(1,vt,2,0,"div",33),a.Vb()),2&t){var r=a.mc();a.Cb(1),a.tc("ngIf",r.f.productCode.errors.required)}}function ft(t,e){1&t&&(a.Wb(0,"div"),a.Lc(1,"Product Description is required"),a.Vb())}function mt(t,e){if(1&t&&(a.Wb(0,"div",32),a.Jc(1,ft,2,0,"div",33),a.Vb()),2&t){var r=a.mc();a.Cb(1),a.tc("ngIf",r.f.productDescription.errors.required)}}function Ct(t,e){1&t&&(a.Wb(0,"div"),a.Lc(1,"Product Rating is required"),a.Vb())}function ht(t,e){if(1&t&&(a.Wb(0,"div",32),a.Jc(1,Ct,2,0,"div",33),a.Vb()),2&t){var r=a.mc();a.Cb(1),a.tc("ngIf",r.f.productRating.errors.required)}}function Vt(t,e){if(1&t){var r=a.Xb();a.Wb(0,"button",35),a.ic("click",(function(){return a.Dc(r),a.mc().deleteProduct()})),a.Rb(1,"i",36),a.Lc(2," Delete "),a.Vb()}}var Wt,yt,Dt,Pt=function(t){return{"is-invalid":t}},kt=[{path:"",component:ct,resolve:{products:V}},{path:":id",component:g,resolve:{product:h}},{path:":id/edit",component:(Wt=function(){function t(e,r,c,o,a){_classCallCheck(this,t),this.formBuilder=e,this.router=r,this.activatedRoute=c,this.categoryService=o,this.productService=a,this.disableForm=!1,this.addProductForm=this.formBuilder.group({productName:["",R.u.required],storeCategoryName:["",R.u.required],storeSubCategoryName:["",R.u.required],subCategoryName:[""],productWeightType:[""],productPrice:["",R.u.required],productWeight:[""],productCode:["",R.u.required],productDescription:["",R.u.required],productRating:["",R.u.required],status:["",R.u.required]})}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.categoryService.getAllStoreCategory("").subscribe((function(e){t.storeCategories=e.store_categories,t.productId=t.activatedRoute.snapshot.paramMap.get("id"),0!==t.productId&&(t.productData=t.activatedRoute.snapshot.data.productData.product,t.addProductForm.get("storeCategoryName").setValue(t.productData.store_category_id),t.addProductForm.get("storeSubCategoryName").setValue(t.productData.store_sub_category_id),t.addProductForm.get("subCategoryName").setValue(t.productData.sub_category_id),t.addProductForm.get("productName").setValue(t.productData.productName),t.addProductForm.get("productPrice").setValue(t.productData.price),t.addProductForm.get("productCode").setValue(t.productData.productCode),t.addProductForm.get("productWeightType").setValue(t.productData.productWeightType),t.addProductForm.get("productWeight").setValue(t.productData.product_weight),t.addProductForm.get("productDescription").setValue(t.productData.description),t.addProductForm.get("productRating").setValue(t.productData.starRating),t.addProductForm.get("status").setValue(t.productData.available),t.storeCategoryChange(t.productData.store_category_id,+t.productData.store_sub_category_id))}))}},{key:"deleteProduct",value:function(){var t=this;0!==this.productId&&confirm("Are you sure to delete ")&&this.productService.deleteProduct(this.productId).subscribe((function(e){console.log(e),t.router.navigate(["products"])}))}},{key:"onSubmit",value:function(){var t=this;if(!this.disableForm){if(this.submitted=!0,this.disableForm=!0,this.addProductForm.invalid)return void(this.disableForm=!1);0==+this.productId?this.productService.createProduct(this.addProductForm.value).subscribe((function(e){200===e.status?t.router.navigate(["products"]):400===e.status&&(alert("Product Not Added . Internal Server Error"),t.disableForm=!1)}),(function(e){t.disableForm=!1,console.log(e)})):this.productService.updateProduct(this.addProductForm.value,this.productId).subscribe((function(e){console.log(e),200===e.status?t.router.navigate(["products"]):400===e.status&&(alert("Product Not Added . Internal Server Error"),t.disableForm=!1)}),(function(e){t.disableForm=!1,t.errorMessage=e}))}}},{key:"storeCategoryChange",value:function(t,e){var r=this;this.storeSubCategoryData=[],this.subCategoryData=[],this.categoryService.getStoreCategoryData(+t).subscribe((function(t){r.storeSubCategoryData=t.store_categories[0].store_sub_category_name,0==+e||(r.subCategoryData=r.storeSubCategoryData.filter((function(t){return t.store_sub_category_id===e}))[0].sub_category_data)}))}},{key:"storeSubCategoryChange",value:function(t){var e=this;this.storeSubCategoryData.filter((function(r){r.store_sub_category_id===+t&&(e.subCategoryData=r.sub_category_data,e.subCategoryData.length<1&&(e.addProductForm.patchValue({subCategoryName:""}),e.subCategoryData=[]))}))}},{key:"f",get:function(){return this.addProductForm.controls}}]),t}(),Wt.\u0275fac=function(t){return new(t||Wt)(a.Qb(R.d),a.Qb(o.f),a.Qb(o.a),a.Qb(ot.a),a.Qb(i.a))},Wt.\u0275cmp=a.Kb({type:Wt,selectors:[["app-product-shell-add"]],decls:89,vars:30,consts:[[1,"jumbotron"],[1,"container"],[1,"row"],[1,"col-md-6","offset-md-3"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","formControlName","productName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["formControlName","storeCategoryName",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-6"],["formControlName","storeSubCategoryName",1,"form-control",3,"change"],["formControlName","subCategoryName",1,"form-control"],["type","text","formControlName","productPrice",1,"form-control",3,"ngClass"],["formControlName","productWeightType",1,"form-control"],["selected","","value","1"],["value","2"],["value","3"],["value","5"],["value","4"],["value","6"],["type","text","formControlName","productWeight",1,"form-control",3,"ngClass"],["type","text","formControlName","productCode",1,"form-control",3,"ngClass"],["row","3","formControlName","productDescription",1,"form-control",3,"ngClass"],["type","text","formControlName","productRating",1,"form-control",3,"ngClass"],["for",""],["formControlName","status",1,"form-control"],["value","1"],["value","0"],[1,"btn","btn-primary","mr-3",3,"disabled"],[1,"fa","fa-save"],["class","btn btn-primary mr-3",3,"click",4,"ngIf"],[1,"invalid-feedback"],[4,"ngIf"],[3,"value"],[1,"btn","btn-primary","mr-3",3,"click"],[1,"fa","fa-trash"]],template:function(t,e){1&t&&(a.Wb(0,"div",0),a.Wb(1,"div",1),a.Wb(2,"div",2),a.Wb(3,"div",3),a.Wb(4,"h2"),a.Lc(5,"Add New Product"),a.Vb(),a.Wb(6,"form",4),a.ic("ngSubmit",(function(){return e.onSubmit()})),a.Wb(7,"div",5),a.Wb(8,"label"),a.Lc(9,"Product Name"),a.Vb(),a.Rb(10,"input",6),a.Jc(11,it,2,1,"div",7),a.Vb(),a.Wb(12,"div",5),a.Wb(13,"label"),a.Lc(14,"Store Category Name"),a.Vb(),a.Wb(15,"div"),a.Wb(16,"select",8),a.ic("change",(function(t){return e.storeCategoryChange(t.target.value,0)})),a.Jc(17,nt,2,2,"option",9),a.Vb(),a.Vb(),a.Vb(),a.Wb(18,"div",2),a.Wb(19,"div",10),a.Wb(20,"div",5),a.Wb(21,"label"),a.Lc(22,"Store Sub Category"),a.Vb(),a.Wb(23,"div"),a.Wb(24,"select",11),a.ic("change",(function(t){return e.storeSubCategoryChange(t.target.value)})),a.Jc(25,ut,3,4,"option",9),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(26,"div",10),a.Wb(27,"div",5),a.Wb(28,"label"),a.Lc(29,"Sub Category"),a.Vb(),a.Wb(30,"div"),a.Wb(31,"select",12),a.Jc(32,dt,3,4,"option",9),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(33,"div",5),a.Wb(34,"label"),a.Lc(35,"Orignal Price(M.R.P)"),a.Vb(),a.Rb(36,"input",13),a.Jc(37,bt,2,1,"div",7),a.Vb(),a.Wb(38,"div",5),a.Wb(39,"label"),a.Lc(40,"Weight Type"),a.Vb(),a.Wb(41,"div"),a.Wb(42,"select",14),a.Wb(43,"option",15),a.Lc(44,"kg"),a.Vb(),a.Wb(45,"option",16),a.Lc(46,"gms"),a.Vb(),a.Wb(47,"option",17),a.Lc(48,"litre"),a.Vb(),a.Wb(49,"option",18),a.Lc(50,"ml"),a.Vb(),a.Wb(51,"option",19),a.Lc(52,"packet"),a.Vb(),a.Wb(53,"option",20),a.Lc(54,"pieces"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(55,"div",5),a.Wb(56,"label"),a.Lc(57,"Product Weight"),a.Vb(),a.Rb(58,"input",21),a.Jc(59,pt,2,1,"div",7),a.Vb(),a.Wb(60,"div",5),a.Wb(61,"label"),a.Lc(62,"Product Code"),a.Vb(),a.Rb(63,"input",22),a.Jc(64,gt,2,1,"div",7),a.Vb(),a.Wb(65,"div",5),a.Wb(66,"label"),a.Lc(67,"Product Desciption"),a.Vb(),a.Rb(68,"textarea",23),a.Jc(69,mt,2,1,"div",7),a.Vb(),a.Wb(70,"div",5),a.Wb(71,"label"),a.Lc(72,"Product Rating"),a.Vb(),a.Rb(73,"input",24),a.Jc(74,ht,2,1,"div",7),a.Vb(),a.Wb(75,"div",5),a.Wb(76,"label",25),a.Lc(77,"Status"),a.Vb(),a.Wb(78,"div"),a.Wb(79,"select",26),a.Wb(80,"option",27),a.Lc(81,"Enabled"),a.Vb(),a.Wb(82,"option",28),a.Lc(83,"Disabled"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(84,"div",5),a.Wb(85,"button",29),a.Rb(86,"i",30),a.Lc(87," Save"),a.Vb(),a.Jc(88,Vt,3,0,"button",31),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb()),2&t&&(a.Cb(6),a.tc("formGroup",e.addProductForm),a.Cb(4),a.tc("ngClass",a.xc(18,Pt,e.submitted&&e.f.productName.errors)),a.Cb(1),a.tc("ngIf",e.submitted&&e.f.productName.errors),a.Cb(6),a.tc("ngForOf",e.storeCategories),a.Cb(8),a.tc("ngForOf",e.storeSubCategoryData),a.Cb(7),a.tc("ngForOf",e.subCategoryData),a.Cb(4),a.tc("ngClass",a.xc(20,Pt,e.submitted&&e.f.productPrice.errors)),a.Cb(1),a.tc("ngIf",e.submitted&&e.f.productPrice.errors),a.Cb(21),a.tc("ngClass",a.xc(22,Pt,e.submitted&&e.f.productWeight.errors)),a.Cb(1),a.tc("ngIf",e.submitted&&e.f.productWeight.errors),a.Cb(4),a.tc("ngClass",a.xc(24,Pt,e.submitted&&e.f.productCode.errors)),a.Cb(1),a.tc("ngIf",e.submitted&&e.f.productCode.errors),a.Cb(4),a.tc("ngClass",a.xc(26,Pt,e.submitted&&e.f.productDescription.errors)),a.Cb(1),a.tc("ngIf",e.submitted&&e.f.productDescription.errors),a.Cb(4),a.tc("ngClass",a.xc(28,Pt,e.submitted&&e.f.productRating.errors)),a.Cb(1),a.tc("ngIf",e.submitted&&e.f.productRating.errors),a.Cb(11),a.tc("disabled",e.disableForm),a.Cb(3),a.tc("ngIf",0!=e.productId))},directives:[R.w,R.n,R.f,R.c,R.m,R.e,n.l,n.n,R.t,n.m,R.q,R.v],pipes:[w.a],styles:[""]}),Wt),resolve:{productData:h}}],_t=((Dt=function t(){_classCallCheck(this,t)}).\u0275mod=a.Ob({type:Dt}),Dt.\u0275inj=a.Nb({factory:function(t){return new(t||Dt)},imports:[[o.j.forChild(kt)],o.j]}),Dt),Lt=((yt=function t(){_classCallCheck(this,t)}).\u0275mod=a.Ob({type:yt}),yt.\u0275inj=a.Nb({factory:function(t){return new(t||yt)},providers:[],imports:[[k.i.forFeature("products",L),_t,R.r,c.a]]}),yt)}}]);