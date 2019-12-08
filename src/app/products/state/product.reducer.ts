import { IProduct } from '../product'
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State
{
    products:ProductState;
}

export interface ProductState 
{
    showProductCode:boolean;
    currentProduct : IProduct;
    products: IProduct[];
}

const initialState :ProductState= {
    showProductCode:true,
    currentProduct:null,
    products:[]
}


export function reducer(state=initialState,action) : ProductState
{
    switch(action.type)
    {
        case 'TOGGLE_PRODUCT_CODE':
            return {
                ...state,
                showProductCode:action.payload
            };
        default:
            return state;
    }
}

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
        getProductFeatureState,
        state=>state.showProductCode)

