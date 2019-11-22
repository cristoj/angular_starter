import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor(private httpClient: HttpClient) {}

  getCurrentExchangeRates$(): Observable<any> {
    return this.httpClient.get<any>('https://api.exchangeratesapi.io/latest').pipe(
      map(result => {
        const rates = result.rates;
        const currencies: any[] = Object.entries(rates);
        return currencies.map(e => {
          return { currency: e[0], amount: e[1] };
        });
      })
    );
  }
}
