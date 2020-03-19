import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicableAreasService {

  private deliveryAreasServiceUrl = 'http://ec2-13-233-10-240.ap-south-1.compute.amazonaws.com:3000/deliveryapi/';
  constructor(private http: HttpClient) { }

  fetchAllDeliveryAreas(pagenumber: number, pagesize: any, filterBy: any): Observable<any> {

    const obj: any = {};
    obj.page_number = pagenumber; obj.page_size = pagesize; obj.filterBy = filterBy;

    return this.http.post<any[]>(`${this.deliveryAreasServiceUrl}deliveryareasinfo`, obj)
      .pipe(
        tap(data => {
          // console.log(JSON.stringify(data));
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  fetchDeliveryAreaById(areaId): Observable<any> {

    return this.http.get(`${this.deliveryAreasServiceUrl}deliveryareasinfo/${areaId}`).pipe(
      tap(data => {
        console.log(data);
      })
      , map((deliveryAreaData) => {
        return deliveryAreaData;
      })
      , catchError(this.handleError)
    );
  }

  fetchAllDeliveryBannersById(areaId, pagenumber: number, pagesize: number, filterBy: any): Observable<any> {
    const obj: any = {};
    obj.pagenumber = pagenumber; obj.pagesize = pagesize; obj.areaId = areaId; obj.filterBy = filterBy;
    return this.http.post(`${this.deliveryAreasServiceUrl}deliveryareasinfo/banners`, obj).pipe(
      tap(data => {
        console.log(data);
      })
      , map((deliveryAreaBannersData) => {
        return deliveryAreaBannersData;
      })
      , catchError(this.handleError)
    );
  }

  fetchDeliveryCategoryInfoById(categoryId): Observable<any> {
    console.log(`${this.deliveryAreasServiceUrl}deliveryareasinfo/categories/${categoryId}`);
    console.log(categoryId);
    return this.http.get<any[]>(`${this.deliveryAreasServiceUrl}deliveryareasinfo/categories/${categoryId}`)
    .pipe(
      tap(data => {
      })
      , map((data) => {
        return data;
      })
      , catchError(this.handleError)
    );
  }

  fetchAllCategoriesById(areaId, pagenumber: number, pagesize: number, filterBy: any): Observable<any> {
    const obj: any = {};
    obj.pagenumber = pagenumber; obj.pagesize = pagesize; obj.areaId = areaId; obj.filterBy = filterBy;
    return this.http.post(`${this.deliveryAreasServiceUrl}deliveryareasinfo/categories`, obj).pipe(
      tap(data => {
        console.log(data);
      })
      , map((deliveryAreaCategoriesData) => {
        return deliveryAreaCategoriesData;
      })
      , catchError(this.handleError)
    );
  }

  fetchDeliveryBannersById(bannerId): Observable<any> {
    return this.http.get<any[]>(`${this.deliveryAreasServiceUrl}deliveryareasinfo/banners/${bannerId}`)
    .pipe(
      tap(data => {
      })
      , map((data) => {
        return data;
      })
      , catchError(this.handleError)
    );
  }

  searchAreaWiseCategories(queryString: any): Observable<any> {
    if (queryString !== '') {
      return this.http.get<any[]>(`${this.deliveryAreasServiceUrl}deliveryareasinfo/categoryearch/${queryString}`)
        .pipe(
          tap(data => {
            // console.log(JSON.stringify(data));
          })
          , map((data: any) => {
            return data;

          })
          , catchError(this.handleError)
        );
    }
    return of([]);
  }

  searchAreaWiseBanners(queryString: any): Observable<any> {
    if (queryString !== '') {
      return this.http.get<any[]>(`${this.deliveryAreasServiceUrl}deliveryareasinfo/bannersearch/${queryString}`)
        .pipe(
          tap(data => {
            // console.log(JSON.stringify(data));
          })
          , map((data: any) => {
            return data;

          })
          , catchError(this.handleError)
        );
    }
    return of([]);
  }

  fetchDeliveryCategoriesById(areaId): Observable<any> {

    return this.http.get(`${this.deliveryAreasServiceUrl}deliveryareasinfo/categories/${areaId}`).pipe(
      tap(data => {
        console.log(data);
      })
      , map((deliveryAreaCategoriesData) => {
        return deliveryAreaCategoriesData;
      })
      , catchError(this.handleError)
    );
  }

  addAreaWiseBanner(addAreaWiseBannerForm, selectedBanner: any, areaId) {
    const obj: any = {};
    obj.areaId =  areaId;
    obj.banner_id = selectedBanner.banner_id;
    obj.banner_text = addAreaWiseBannerForm.bannerText;
    obj.status = addAreaWiseBannerForm.status;
    const url = `${this.deliveryAreasServiceUrl}addDeliveryAreaBanner`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, obj, { headers }).pipe(
      tap(data => { console.log(JSON.stringify(data)); }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  addAreaWiseCategory(addAreaWiseCategoryForm, selectedCategory: any, areaId) {
    const obj: any = {};
    obj.areaId =  areaId;
    obj.store_category_id = selectedCategory.store_category_id;
    obj.category_text = addAreaWiseCategoryForm.categoryText;
    obj.category_ranking = addAreaWiseCategoryForm.categoryRanking;
    obj.status = addAreaWiseCategoryForm.status;
    const url = `${this.deliveryAreasServiceUrl}addDeliveryAreaCategory`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, obj, { headers }).pipe(
      tap(data => { console.log(JSON.stringify(data)); }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  editAreaWiseCategory(addAreaWiseCategoryForm, id) {

    const url = `${this.deliveryAreasServiceUrl}editDeliveryAreaCategory/edit/${id}`;
    const obj: any = {};
    obj.category_text = addAreaWiseCategoryForm.categoryText;
    obj.category_ranking = addAreaWiseCategoryForm.categoryRanking;
    obj.status = addAreaWiseCategoryForm.status;
    console.log(obj);
    console.log(url);
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

  editAreWiseBanner(addAreaWiseBannerForm, id) {

    const url = `${this.deliveryAreasServiceUrl}editDeliveryAreaBanner/edit/${id}`;
    const obj: any = {};
    obj.banner_text = addAreaWiseBannerForm.bannerText;
    obj.status = addAreaWiseBannerForm.status;
    console.log(obj);
    console.log(url);
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

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    // console.error(errorMessage);
    return throwError(errorMessage);
  }
}
