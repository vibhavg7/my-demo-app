import { Injectable } from '@angular/core';
import { Observable, of, throwError, forkJoin } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError, debounceTime } from 'rxjs/operators';
import { ErrorTracker } from '../shared/errorTracker';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private _http: HttpClient) { }
  stores: any;
  private _storeServiceUrl = 'http://ec2-13-233-10-240.ap-south-1.compute.amazonaws.com:3000/storesapi/';
  private _categoryServiceUrl = 'http://ec2-13-233-10-240.ap-south-1.compute.amazonaws.com:3000/categoryapi';

  fetchAllStores(page_number: number, page_size: any, filterBy: any): Observable<any> {
    let obj = {};
    obj['page_number'] = page_number; obj['page_size'] = page_size; obj['filterBy'] = filterBy;
    // console.log(obj);
    return this._http.post<any[]>(`${this._storeServiceUrl}storeinfo`, obj)
      .pipe(
        tap(data => {
          // console.log(JSON.stringify(data))
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );

  }

  deleteStore(store_id) : Observable<any>
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this._storeServiceUrl}storeinfo/${store_id}`;
    return this._http.delete(url, { headers }).pipe(
        tap(data => {
            // console.log(JSON.stringify(data))
        }),
        catchError(this.handleError)
    )
  }

  deleteStoreProduct(store_product_id) : Observable<any>
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this._storeServiceUrl}storeinfo/storeproducts/${store_product_id}`;
    return this._http.delete(url, { headers }).pipe(
        tap(data => {
            // console.log(JSON.stringify(data))
        }),
        catchError(this.handleError)
    )
  }

  editStoreProduct(storeProductForm, storeProductId) {

    const url = `${this._storeServiceUrl}storeinfo/storeproducts/edit/${storeProductId}`;
    const obj: any = {};
    obj.store_cost_price = 0;
    obj.store_selling_price = storeProductForm.productSellingPrice;
    obj.store_margin = storeProductForm.storeMargin;
    obj.store_discount = ((storeProductForm.productMarkedPrice - storeProductForm.productSellingPrice) /
                            storeProductForm.productMarkedPrice) * 100;
    obj.status = storeProductForm.status;
    obj.product_marked_price = storeProductForm.productMarkedPrice;
    obj.stock = 1;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(url, obj, { headers }).pipe(
      tap(data => {
      }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  updateStoreProductStock(storeProductId,stock)
  {
    let obj = {};
    obj["stock"] = stock;
    const url = `${this._storeServiceUrl}storeinfo/storeproducts/updatestock/${storeProductId}`;
    console.log(obj);
    console.log(url);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.patch(url, obj, { headers }).pipe(
      tap(data => { console.log(JSON.stringify(data)) }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    )
  }

  fetchStoreProducts(storeId: number, page_number: number, page_size: number, filterBy: any) {
    let obj = {};
    obj['page_number'] = page_number; obj['page_size'] = page_size; obj['storeId'] = storeId;
    obj['filterBy'] = filterBy;

    return this._http.post<any[]>(`${this._storeServiceUrl}storeinfo/storeproducts`, obj)
      .pipe(
        tap(data => {
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  fetchStoreProductById(storeProductId: number) {
    return this._http.get<any[]>(`${this._storeServiceUrl}storeinfo/storeproducts/${storeProductId}`)
      .pipe(
        tap(data => {
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  fetchOrderProducts(orderId: number) {

    return this._http.get<any[]>(`${this._storeServiceUrl}storeinfo/storeorderproducts/${orderId}`)
      .pipe(
        tap(data => {
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  fetchAllStoreOrders(storeId: number, pagenumber: number, pagesize: number, filterBy: any) {
    const obj: any = {};
    obj.page_number = pagenumber; obj.page_size = pagesize; obj.storeId = storeId;
    obj.filterBy = filterBy; obj.order_type = filterBy;

    // console.log(obj);

    return this._http.post<any[]>(`${this._storeServiceUrl}storeinfo/storeorders`, obj)
      .pipe(
        tap(data => {
          // console.log(data);
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  addNewStore(store): Observable<any> {
    const obj: any = {};
    obj.storeName = store.storeName;
    obj.storeCategoryName = store.storeCategoryName;
    obj.city = store.city;
    obj.openingTime = store.openingTime;
    obj.openingTimeClock = (store.openingTime / 12 > 1) ? 'PM' : 'AM';
    obj.closingTime = store.closingTime;
    obj.closingTimeClock = (store.closingTime / 12 > 1) ? 'PM' : 'AM';
    obj.country = store.country;
    obj.pinCode = store.pinCode;
    obj.state = store.state;
    obj.status = store.status;
    obj.storeAddress = store.storeAddress;
    obj.storeAlternateNumber = store.storeAlternateNumber;
    obj.storeDescription = store.storeDescription;
    obj.storeEmail = store.storeEmail;
    obj.storeGSTNumber = store.storeGSTNumber;
    obj.storeLandlineNumber = store.storeLandlineNumber;
    obj.latitude = store.storeLatitude;
    obj.longitude = store.storeLongitude;
    obj.storePANNumber = store.storePANNumber;
    obj.storePhoneNumber = store.storePhoneNumber;
    obj.storeRating = +store.storeRating;
    obj.password = store.storePhoneNumber;
    const url = `${this._storeServiceUrl}addnewstore`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(url, obj, { headers }).pipe(
      tap(data => {
      }),
      map((data) => {
        return data;
      }),
      catchError(err => this.handleError(err))
    );
  }

  addStoreProducts(addStoreProductForm, selectedProduct: any, storeId): Observable<any> {
    const obj: any = {};
    obj.store_cost_price =  0;
    obj.store_marked_price = addStoreProductForm.productMarkedPrice;
    obj.store_selling_price = addStoreProductForm.productSellingPrice;
    obj.store_discount = ((addStoreProductForm.productMarkedPrice - addStoreProductForm.productSellingPrice) /
                           addStoreProductForm.productMarkedPrice) * 100;
    obj.store_margin = +addStoreProductForm.storeMargin;
    obj.store_initial_quantity = 0;
    obj.store_updated_quantity = 0;
    obj.store_additional_quantity = 0;
    obj.product_id = selectedProduct.product_id;
    obj.parent_category_id = selectedProduct.parent_category_id;
    obj.category_id = selectedProduct.category_id;
    obj.store_id = storeId;
    obj.status = addStoreProductForm.status;
    obj.stock = 1;

    console.log(obj);
    const url = `${this._storeServiceUrl}addstoreproducts`;
    console.log(url);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(url, obj, { headers }).pipe(
      tap(data => { console.log(JSON.stringify(data)); }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  editStore(store, storeId): Observable<any> {
    const obj: any = {};

    obj['store_name'] = store['storeName'];
    obj['store_parent_category'] = store['storeCategoryName'];
    obj['city'] = store['city'];
    obj['country'] = store['country'];
    obj.store_opening_time = store.openingTime;
    obj.store_opening_time_clock = (store.openingTime / 12 > 1) ? 'PM' : 'AM';
    obj.store_closing_time = store.closingTime;
    obj.store_closing_time_clock = (store.closingTime / 12 > 1) ? 'PM' : 'AM';
    obj['pin_code'] = store['pinCode'];
    obj['state'] = store['state'];
    obj['status'] = store['status'];
    obj['address'] = store['storeAddress'];
    obj['alternative_number'] = store['storeAlternateNumber'];
    obj['store_description'] = store['storeDescription'];
    obj['store_email'] = store['storeEmail'];
    obj['gst_number'] = store['storeGSTNumber'];
    obj['landline_number'] = store['storeLandlineNumber'];
    obj['latitude'] = store['storeLatitude'];
    obj['longitude'] = store['storeLongitude'];
    obj['pan_number'] = store['storePANNumber'];
    obj['phone_number'] = store['storePhoneNumber'];
    obj['store_rating'] = +store['storeRating'];
    obj['status'] = +store['status'];

    console.log(obj);

    const url = `${this._storeServiceUrl}storeinfo/${storeId}`;
    console.log(url);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(url, obj, { headers }).pipe(
      tap(data => {
        // console.log(JSON.stringify(data))
      }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  searchStoreByName(page_number: number, page_size: any, filterBy: any): Observable<any> {
    if (this.stores) {
      return of(this.stores);
    }
    let obj = {};
    obj['page_number'] = page_number; obj['page_size'] = page_size; obj['filterBy'] = filterBy;
    console.log(obj);
    return this._http.post<any[]>(`${this._storeServiceUrl}`, obj)
      .pipe(
        tap(data => {
          console.log(JSON.stringify(data))
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  public storeDataCatData(storeId) :Observable<any[]> {
    let obj = {};
    obj['filterBy'] = "";
    let response1 = this._http.get(`${this._storeServiceUrl}storeinfo/${storeId}`);
    let response2 = this._http.post(`${this._categoryServiceUrl}/storecategories`,obj);
    return forkJoin([response1,response2]);
  }

  fetchAllStoreById(storeId): Observable<any> {

    return this._http.get(`${this._storeServiceUrl}storeinfo/${storeId}`).pipe(
      tap(data => {
        // this.storeCategories = data['store_categories'];
        // console.log(data);
      })
      , map((storeData) => {
        return storeData;
      })
      , catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse): Observable<ErrorTracker> {

    let dataError = new ErrorTracker();
    dataError.errorNumber = 100;
    dataError.errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    dataError.friendlyMessage = "An error retriving data";
    return throwError(dataError);
    // let errorMessage = '';
    // if (err.error instanceof ErrorEvent) {
    //   // A client-side or network error occurred. Handle it accordingly.
    //   errorMessage = `An error occurred: ${err.error.message}`;
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong,
    //   errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    // }
    // // console.error(errorMessage);
    // return throwError(errorMessage);
  }
}
