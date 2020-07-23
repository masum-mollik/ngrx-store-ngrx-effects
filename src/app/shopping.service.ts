import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingItem } from './store/models/shopping-item.models';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private SHOPPING_URL = 'http://localhost:3000/shopping';
  constructor(private http: HttpClient) {}

  getShoppingItems(): Observable<ShoppingItem[]> {
    return this.http.get<ShoppingItem[]>(this.SHOPPING_URL).pipe(delay(500));
  }

  addShoppingItem(shoppingItem: ShoppingItem): Observable<ShoppingItem[]> {
    return this.http
      .post<ShoppingItem[]>(this.SHOPPING_URL, shoppingItem)
      .pipe(delay(500));
  }

  deleteShoppingItem(id: string): Observable<ShoppingItem[]> {
    return this.http
      .delete<ShoppingItem[]>(`${this.SHOPPING_URL}/${id}`)
      .pipe(delay(500));
  }
}
