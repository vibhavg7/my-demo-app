function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"9d4Z":function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var o=r("fXoL"),c=r("tk/3"),a=r("vkgz"),n=r("lJxs"),i=r("JIr8"),u=r("LRne"),s=r("z6cu"),p=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e,this.categoryData=[],this.categoryServiceUrl="https://api.grostep.com/categoryapi"}return _createClass(t,[{key:"getAllStoreCategory",value:function(t){var e=this,r={};return r.filterBy=t,this.http.post("".concat(this.categoryServiceUrl,"/storecategories"),r).pipe(Object(a.a)((function(t){e.storecategories=t})),Object(n.a)((function(t){return t})),Object(i.a)(this.handleError))}},{key:"getStoreCategoryData",value:function(t){return this.http.get("".concat(this.categoryServiceUrl,"/storesubcategories/").concat(t)).pipe(Object(a.a)((function(t){})),Object(n.a)((function(t){return t})),Object(i.a)(this.handleError))}},{key:"getStoreSubCategoryData",value:function(t,e){return this.http.get("".concat(this.categoryServiceUrl,"/storesubcategories/").concat(t)).pipe(Object(a.a)((function(t){})),Object(n.a)((function(t){return t})),Object(i.a)(this.handleError))}},{key:"addNewSubCategory",value:function(t){var e={};return e.store_sub_category_id=t.storeCategoryName,e.subCategoryName=t.subcategoryName,this.http.post("".concat(this.categoryServiceUrl,"/subcategories"),e).pipe(Object(a.a)((function(t){})),Object(n.a)((function(t){return t})),Object(i.a)(this.handleError))}},{key:"editSubCategory",value:function(t){var e={};return e.category_id=t.subcategoryId,e.name=t.subcategoryName,e.parent_category_id=t.storeCategoryName,this.http.put("".concat(this.categoryServiceUrl,"/subcategories"),e).pipe(Object(a.a)((function(t){})),Object(n.a)((function(t){return t})),Object(i.a)(this.handleError))}},{key:"getSubCategoryData",value:function(t){return this.http.get("".concat(this.categoryServiceUrl,"/subcategories/").concat(t)).pipe(Object(a.a)((function(t){})),Object(n.a)((function(t){return t.store_sub_categories})),Object(i.a)(this.handleError))}},{key:"addNewStoreCategory",value:function(t){return console.log(t),this.http.post("".concat(this.categoryServiceUrl,"/addstorecategory"),t).pipe(Object(a.a)((function(t){})),Object(n.a)((function(t){return t})),Object(i.a)(this.handleError))}},{key:"addNewStoreSubCategory",value:function(t){console.log(t);var e={};return e.store_category_id=t.storeCategoryName,e.categoryName=t.categoryName,e.status=t.status,e.categoryRanking=t.categoryRanking,this.http.post("".concat(this.categoryServiceUrl,"/storesubcategories"),e).pipe(Object(a.a)((function(t){})),Object(n.a)((function(t){return t})),Object(i.a)(this.handleError))}},{key:"deleteStoreCategory",value:function(t){var e=new c.c({"Content-Type":"application/json"});return this.http.delete("".concat(this.categoryServiceUrl,"/storecategories/").concat(t),{headers:e}).pipe(Object(a.a)((function(t){})),Object(i.a)(this.handleError))}},{key:"getStoreCategory",value:function(t){var e=new c.c({"Content-Type":"application/json"});return this.http.get("".concat(this.categoryServiceUrl,"/storecategories/").concat(t),{headers:e}).pipe(Object(a.a)((function(t){}),Object(n.a)((function(t){return t}))),Object(i.a)(this.handleError))}},{key:"deleteStoreSubCategory",value:function(t){var e=new c.c({"Content-Type":"application/json"});return this.http.delete("".concat(this.categoryServiceUrl,"/storesubcategories/").concat(t),{headers:e}).pipe(Object(a.a)((function(t){})),Object(i.a)(this.handleError))}},{key:"deleteSubCategory",value:function(t){var e=new c.c({"Content-Type":"application/json"});return this.http.delete("".concat(this.categoryServiceUrl,"/subcategories/").concat(t),{headers:e}).pipe(Object(a.a)((function(t){})),Object(i.a)(this.handleError))}},{key:"editStoreCategory",value:function(t,e){var r={};return r.store_category_id=e,r.store_category_name=t.storeCategoryName,r.status=+t.status,r.store_category_ranking=+t.storeCategoryRanking,this.http.put("".concat(this.categoryServiceUrl,"/storecategories"),r).pipe(Object(a.a)((function(t){})),Object(n.a)((function(t){return t})),Object(i.a)(this.handleError))}},{key:"editStoreSubCategory",value:function(t,e){var r={};return r.category_id=+e,r.name=t.categoryName,r.store_category_id=+t.storeCategoryName,console.log(r),this.http.put("".concat(this.categoryServiceUrl,"/storesubcategories"),r).pipe(Object(a.a)((function(t){})),Object(n.a)((function(t){return t})),Object(i.a)(this.handleError))}},{key:"getAllCategories",value:function(){return Object(u.a)(this.categoryData)}},{key:"initializeCategory",value:function(){}},{key:"handleError",value:function(t){var e;return e=t.error instanceof ErrorEvent?"An error occurred: ".concat(t.error.message):"Server returned code: ".concat(t.status,", error message is: ").concat(t.message),Object(s.a)(e)}},{key:"storeCategories",get:function(){return this.storecategories?Object(u.a)(this.storecategories):this.getAllStoreCategory("")}}]),t}();return t.ngInjectableDef=o.Ob({token:t,factory:function(e){return new(e||t)(o.hc(c.a))},providedIn:"root"}),t}()},QJ7G:function(t,e,r){"use strict";var o=r("fXoL"),c=r("XNiG"),a=r("LRne"),n=r("z6cu"),i=r("vkgz"),u=r("lJxs"),s=r("JIr8"),p=r("tk/3"),l=function t(){_classCallCheck(this,t)};r.d(e,"a",(function(){return h}));var d,h=((d=function(){function t(e){_classCallCheck(this,t),this._http=e,this._productServiceUrl="https://api.grostep.com/productsapi/",this.selectedProductSource=new c.a,this.selectProductChanges$=this.selectedProductSource.asObservable(),this.productResolved=new l}return _createClass(t,[{key:"ngOnDestroy",value:function(){}},{key:"changeSelectedProduct",value:function(t){var e=this;this.productResolved.products.forEach((function(r){r.productId===t&&e.selectedProductSource.next(r)}))}},{key:"updateProductImageUrl",value:function(t,e){this.productResolved.products.forEach((function(r){r.productId==e&&(r.image_url=t)}))}},{key:"getProducts",value:function(t,e,r){var o=this,c={};return c.page_number=t,c.page_size=e,c.filterBy=r,this._http.post("".concat(this._productServiceUrl,"fetchProducts"),c).pipe(Object(i.a)((function(t){})),Object(u.a)((function(t){return o.productResolved.products=t.products,o.productResolved.productCount=t.products_total_count.products_count,o.productResolved})),Object(s.a)(this.handleError))}},{key:"searchProducts",value:function(t){return""!==t?this._http.get("".concat(this._productServiceUrl,"productsearch/").concat(t)).pipe(Object(i.a)((function(t){})),Object(u.a)((function(t){return t.products})),Object(s.a)(this.handleError)):Object(a.a)([])}},{key:"deleteProduct",value:function(t){var e=new p.c({"Content-Type":"application/json"});return this._http.delete("".concat(this._productServiceUrl).concat(t),{headers:e}).pipe(Object(i.a)((function(t){})),Object(s.a)(this.handleError))}},{key:"updateProduct",value:function(t,e){var r={};r.product_id=e,r.product_name=t.productName,r.product_price=t.productPrice,r.weight_type=t.productWeightType,r.product_code=t.productCode,r.product_description=t.productDescription,r.product_rating=t.productRating,r.status=t.status,r.product_weight=+t.productWeight,t.subCategoryName?r.category_id=t.subCategoryName:t.storeSubCategoryName&&(r.category_id=t.storeSubCategoryName);var o="".concat(this._productServiceUrl).concat(e),c=new p.c({"Content-Type":"application/json"});return this._http.put(o,r,{headers:c}).pipe(Object(i.a)((function(t){})),Object(s.a)(this.handleError))}},{key:"createProduct",value:function(t){var e={};e.product_name=t.productName,e.product_price=+t.productPrice,e.weight_type=t.productWeightType?+t.productWeightType:0,e.product_code=t.productCode,e.product_description=t.productDescription,e.product_rating=+t.productRating,e.status=+t.status,e.product_weight=+t.productWeight,t.subCategoryName?e.category_id=t.subCategoryName:t.storeSubCategoryName&&(e.category_id=t.storeSubCategoryName),console.log(e);var r="".concat(this._productServiceUrl),o=new p.c({"Content-Type":"application/json"});return this._http.post(r,e,{headers:o}).pipe(Object(i.a)((function(t){console.log(JSON.stringify(t))})),Object(u.a)((function(t){return t})),Object(s.a)(this.handleError))}},{key:"getcategoryProductInfo",value:function(t){return this._http.get("".concat(this._productServiceUrl,"category/").concat(t)).pipe(Object(i.a)((function(t){})),Object(s.a)(this.handleError))}},{key:"getProduct",value:function(t){return 0==t?Object(a.a)(this.initializeProduct()):this._http.get("".concat(this._productServiceUrl).concat(t)).pipe(Object(i.a)((function(t){})),Object(u.a)((function(t){return t.product})),Object(s.a)(this.handleError))}},{key:"handleError",value:function(t){var e;return e=t.error instanceof ErrorEvent?"An error occurred: ".concat(t.error.message):"Server returned code: ".concat(t.status,", error message is: ").concat(t.message),Object(n.a)(e)}},{key:"initializeProduct",value:function(){return{productId:0,productName:null,productCode:null,releaseDate:null,lastUpdated:null,product_image_id:null,product_weight:null,price:null,description:null,starRating:null,categoryName:null,available:null,image_url:null,weight_text:null}}}]),t}()).ngInjectableDef=o.Ob({token:d,factory:function(t){return new(t||d)(o.hc(p.a))},providedIn:"root"}),d)}}]);