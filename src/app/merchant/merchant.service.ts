import { Injectable } from '@angular/core';
import { Observable, of, throwError, forkJoin } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError, debounceTime } from 'rxjs/operators';
import { ErrorTracker } from '../shared/errorTracker';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private http: HttpClient) { }
  stores: any;
  storeOrders: any = [];
  private storeServiceUrl = 'https://api.grostep.com/v2/storesapi/';
  private categoryServiceUrl = 'https://api.grostep.com/v2/categoryapi';

  fetchAllStores(pageNumber: number, pageSize: any, filterBy: any): Observable<any> {
    const obj: any = {};
    obj.page_number = pageNumber; obj.page_size = pageSize; obj.filterBy = filterBy;
    // console.log(obj);
    return this.http.post<any[]>(`${this.storeServiceUrl}storeinfo`, obj)
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

  deleteStore(storeId): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.storeServiceUrl}storeinfo/${storeId}`;
    return this.http.delete(url, { headers }).pipe(
      tap(data => {
        // console.log(JSON.stringify(data))
      }),
      catchError(this.handleError)
    );
  }

  deleteStoreProduct(storeProductId): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.storeServiceUrl}storeinfo/storeproducts/${storeProductId}`;
    return this.http.delete(url, { headers }).pipe(
      tap(data => {
        // console.log(JSON.stringify(data))
      }),
      catchError(this.handleError)
    );
  }

  editStoreProduct(storeProductForm, storeProductId) {

    const url = `${this.storeServiceUrl}storeinfo/storeproducts/edit/${storeProductId}`;
    const obj: any = {};
    obj.store_cost_price = 0;
    obj.store_selling_price = storeProductForm.productSellingPrice;
    obj.store_margin = storeProductForm.storeMargin;
    obj.store_discount = ((storeProductForm.productMarkedPrice - storeProductForm.productSellingPrice) /
      storeProductForm.productMarkedPrice) * 100;
    obj.status = storeProductForm.status;
    obj.product_marked_price = storeProductForm.productMarkedPrice;
    // obj.stock = 1;
    obj.store_product_caping = +storeProductForm.productLimit;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, obj, { headers }).pipe(
      tap(data => {
      }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  updateStoreProductStock(storeProductId, stock) {
    const obj: any = {};
    obj.stock = stock;
    const url = `${this.storeServiceUrl}storeinfo/storeproducts/updatestock/${storeProductId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.patch(url, obj, { headers }).pipe(
      tap(data => { console.log(JSON.stringify(data)); }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  fetchStoreProducts(storeId: number, pageNumber: number, pageSize: number, filterBy: any) {
    const obj: any = {};
    obj.page_number = pageNumber; obj.page_size = pageSize; obj.storeId = storeId;
    obj.filterBy = filterBy;
    obj.multiplePages = true;

    return this.http.post<any[]>(`${this.storeServiceUrl}storeinfo/storeproducts`, obj)
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
    return this.http.get<any[]>(`${this.storeServiceUrl}storeinfo/storeproducts/${storeProductId}`)
      .pipe(
        tap(data => {
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  fetchOrderProducts(orderId: any): Observable<any> {
    // if (this.storeOrders.length > 0) {
    //   const filteredOrderData = this.storeOrders.filter(
    //     (storeOrder: any) => {
    //       return +storeOrder.order_id === +orderId;
    //     }
    //   );
    //   return of(filteredOrderData[0]);
    // } else {
    return this.http.get<any[]>(`${this.storeServiceUrl}storeinfo/storeorderproducts/${orderId}`)
      .pipe(
        tap(data => {
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
    // }
  }

  fetchAllStoreOrders(storeId: number, pagenumber: number, pagesize: number, filterBy: any) {
    const obj: any = {};
    obj.page_number = pagenumber; obj.page_size = pagesize; obj.storeId = storeId;
    obj.filterBy = filterBy; obj.order_type = filterBy;

    // console.log(obj);

    return this.http.post<any[]>(`${this.storeServiceUrl}storeinfo/storeorders`, obj)
      .pipe(
        tap((data: any) => {
          this.storeOrders = data.store_orders_info;
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
    const url = `${this.storeServiceUrl}addnewstore`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, obj, { headers }).pipe(
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
    obj.store_cost_price = 0;
    obj.caping = +addStoreProductForm.productLimit;
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
    const url = `${this.storeServiceUrl}addstoreproducts`;
    console.log(url);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, obj, { headers }).pipe(
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

    const url = `${this.storeServiceUrl}storeinfo/${storeId}`;
    console.log(url);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, obj, { headers }).pipe(
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
    return this.http.post<any[]>(`${this.storeServiceUrl}`, obj)
      .pipe(
        tap(data => {
          console.log(JSON.stringify(data));
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  public storeDataCatData(storeId): Observable<any[]> {
    let obj = {};
    obj['filterBy'] = "";
    let response1 = this.http.get(`${this.storeServiceUrl}storeinfo/${storeId}`);
    let response2 = this.http.post(`${this.categoryServiceUrl}/storecategories`, obj);
    return forkJoin([response1, response2]);
  }

  fetchAllStoreById(storeId): Observable<any> {

    return this.http.get(`${this.storeServiceUrl}storeinfo/${storeId}`).pipe(
      tap(data => {
        // this.storeCategories = data['store_categories'];
        // console.log(data);
      })
      , map((storeData) => {
        return storeData;
      })
      , catchError(this.handleError)
    );
  }

  updateStoreClosingStatus(storeId, storestatus) {
    const obj: any = {};
    obj.closed = +storestatus;
    console.log(obj);
    const url = `${this.storeServiceUrl}updatestoreclosingstatus/${storeId}`;
    return this.http.put(url, obj).pipe(
      tap(data => {
        console.log(JSON.stringify(data));
      }),
      map((data1) => {
        return data1;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<ErrorTracker> {

    const dataError = new ErrorTracker();
    dataError.errorNumber = 100;
    dataError.errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    dataError.friendlyMessage = 'An error retriving data';
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
