import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  LoadShoppingAction,
  ShoppingActionTypes,
  LoadShoppingFailureAction,
} from '../actions/shopping.actions';
import { ShoppingService } from './../../shopping.service';
import { LoadShoppingSuccessAction } from './../actions/shopping.actions';

@Injectable()
export class ShoppingEffects {
  @Effect() loadShopping$: Observable<Action> = this.actions$.pipe(
    ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
    mergeMap(() =>
      this.shoppingService.getShoppingItems().pipe(
        map((data) => new LoadShoppingSuccessAction(data)),
        catchError((error) => of(new LoadShoppingFailureAction(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}
}
