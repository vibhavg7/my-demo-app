import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';
import { ICategory } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  public storecategories: any;
  public categoryData: any = [];
  private categoryServiceUrl = 'http://localhost:3000/categoryapi';



  get storeCategories(): Observable<any> {
    if (this.storecategories) {
      return of(this.storecategories);
    } else {
      return this.getAllStoreCategory('');
    }
  }


  getAllStoreCategory(filterBy): Observable<any> {

    const obj: any = {};
    obj.filterBy = filterBy;

    return this.http.post(`${this.categoryServiceUrl}/storecategories`,obj).pipe(
      tap(data => {
        this.storecategories = data;
      }),
      map((storecategorydata) => {
        return storecategorydata;
      }),
      catchError(this.handleError)
    );
  }

  getStoreCategoryData(storecategoryid): Observable<any> {
    // let obj = {};
    // obj['page_number'] = 1; obj['page_size'] = 20;obj['filterBy'] = '';
    return this.http.get(`${this.categoryServiceUrl}/storesubcategories/${storecategoryid}`).pipe(
      tap(data => {
      })
      , map((storecategorydata) => {
        return storecategorydata;
      })
      , catchError(this.handleError)
    );
  }



  // to fetch all sub categories of store category
  getStoreSubCategoryData(categoryId, filterBy): Observable<any> {
    return this.http.get(`${this.categoryServiceUrl}/storesubcategories/${categoryId}`).pipe(
      tap(data => {
      })
      , map((storesubcategorydata) => {
        return storesubcategorydata;
      })
      , catchError(this.handleError)
    );
  }

  addNewSubCategory(subCategorydata): Observable<any> {
    const obj: any = {};
    obj.store_sub_category_id = subCategorydata.storeCategoryName;
    obj.subCategoryName = subCategorydata.subcategoryName;
    return this.http.post(`${this.categoryServiceUrl}/subcategories`, obj).pipe(
      tap(data => {
        // console.log(JSON.stringify(data));
      }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    )
  }

  editSubCategory(subCategorydata): Observable<any> {
    const obj: any = {};
    obj.category_id = subCategorydata.subcategoryId;
    obj.name = subCategorydata.subcategoryName;
    obj.parent_category_id = subCategorydata.storeCategoryName;

    return this.http.put(`${this.categoryServiceUrl}/subcategories`, obj).pipe(
      tap(data => {
        // console.log(JSON.stringify(data));
      }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  // to fetch all sub category information
  getSubCategoryData(subcategoryid): Observable<any> {
    return this.http.get(`${this.categoryServiceUrl}/subcategories/${subcategoryid}`).pipe(
      tap(data => {
      })
      , map((subcategorydata: any) => {
        return subcategorydata.store_sub_categories;
      })
      , catchError(this.handleError)
    );
  }

  addNewStoreCategory(categorydata): Observable<any> {
    console.log(categorydata);
    return this.http.post(`${this.categoryServiceUrl}/addstorecategory`, categorydata).pipe(
      tap(data => {
        // console.log(JSON.stringify(data));
      }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  addNewStoreSubCategory(subcategorydata): Observable<any> {
    console.log(subcategorydata);
    let obj = {};
    obj['store_category_id'] = subcategorydata['storeCategoryName'];
    obj['categoryName'] = subcategorydata['categoryName'];
    obj['status'] = subcategorydata['status'];
    obj['categoryRanking'] = subcategorydata['categoryRanking'];
    return this.http.post(`${this.categoryServiceUrl}/storesubcategories`, obj).pipe(
      tap(data => {
      }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  deleteStoreCategory(storecategoryid): Observable<any>
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.categoryServiceUrl}/storecategories/${storecategoryid}`;
    return this.http.delete(url, { headers }).pipe(
        tap(data => {
            // console.log(JSON.stringify(data))
        }),
        catchError(this.handleError)
    );
  }

  getStoreCategory(storecategoryid): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.categoryServiceUrl}/storecategories/${storecategoryid}`;
    return this.http.get(url, { headers }).pipe(
        tap(data => {
            // console.log(JSON.stringify(data));
        },
        map((data) => {
          return data;
        })),
        catchError(this.handleError)
    );
  }

  deleteStoreSubCategory(sub_category_id): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.categoryServiceUrl}/storesubcategories/${sub_category_id}`;
    return this.http.delete(url, { headers }).pipe(
        tap(data => {
            // console.log(JSON.stringify(data))
        }),
        catchError(this.handleError)
    );
  }

  deleteSubCategory(sub_category_id): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.categoryServiceUrl}/subcategories/${sub_category_id}`;
    return this.http.delete(url, { headers }).pipe(
        tap(data => {
            // console.log(JSON.stringify(data))
        }),
        catchError(this.handleError)
    );
  }

  editStoreCategory(categorydata, storeCategoryId): Observable<any> {
    let obj = {};
    obj['store_category_id'] = storeCategoryId;
    obj['store_category_name'] = categorydata['storeCategoryName'];
    obj['status'] = +categorydata['status'];
    obj['store_category_ranking'] = +categorydata['storeCategoryRanking'];

    return this.http.put(`${this.categoryServiceUrl}/storecategories`, obj).pipe(
      tap(data => {
      }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  editStoreSubCategory(subcategorydata, categoryId): Observable<any>
  {
    // console.log(subcategorydata);
    let obj = {};
    obj['category_id'] = +categoryId;
    obj['name'] = subcategorydata['categoryName'];
    obj['store_category_id'] = +subcategorydata['storeCategoryName'];
    // obj['status'] = +subcategorydata['status'];
    // obj['ranking'] = +subcategorydata['categoryRanking'];
    console.log(obj);
    return this.http.put(`${this.categoryServiceUrl}/storesubcategories`, obj).pipe(
      tap(data => {
      }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  getAllCategories(): Observable<any> {
    return of(this.categoryData);
  }

  initializeCategory() {

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
