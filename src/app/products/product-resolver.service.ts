import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IProduct } from './product';
import { Observable, of } from 'rxjs';
import { ProductService } from './product.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductResolverService implements Resolve<any> {
    constructor(private productDataService: ProductService) { }
    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const id = +activatedRouteSnapshot.paramMap.get('id');
        // console.log(id);
        if (isNaN(id)) {
            const message = `Product id is not a number:${id}`;
            console.error(message);
            return of({product: null, error: message});

        }
        return this.productDataService.getProduct(id)
        .pipe(
          map(product => (
              { product, error: '' }
            )
          ),
          catchError(error => {
            const message = `Retrieval error: ${error}`;
            return of({ product: null, error: message });
          })
        );
    }
}
