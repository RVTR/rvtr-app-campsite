import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { Account } from '../../data/account.model';
import { PostPayment } from '../../data/payment.model';
import { MonitoringService } from 'services/monitoring/monitoring.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly accountsUrl$: Observable<string>;
  private readonly addressesUrl$: Observable<string>;
  private readonly profilesUrl$: Observable<string>;
  private readonly paymentsUrl$: Observable<string>;
  private readonly monitoring$: MonitoringService;

  /**
   * Represents the _Account Service_ `constructor` method
   *
   * @param config ConfigService
   * @param http HttpClient
   */
  constructor(
    config: ConfigService,
    private readonly http: HttpClient,
    monitor: MonitoringService
  ) {
    const config$ = config.get();
    this.monitoring$ = monitor;

    this.accountsUrl$ = config$.pipe(
      map((cfg) => `${cfg.api.account.base}${cfg.api.account.uri.account}`)
    );
    this.addressesUrl$ = config$.pipe(
      map((cfg) => `${cfg.api.account.base}${cfg.api.account.uri.address}`)
    );
    this.profilesUrl$ = config$.pipe(
      map((cfg) => `${cfg.api.account.base}${cfg.api.account.uri.profile}`)
    );
    this.paymentsUrl$ = config$.pipe(
      map((cfg) => `${cfg.api.account.base}${cfg.api.account.uri.payment}`)
    );
  }

  /**
   * Represents the _Account Service_ `delete` method
   *
   * @param id string
   */
  delete(id: string): Observable<void> {
    return this.accountsUrl$.pipe(
      map((url) => url.concat(`/${id}`)),
      concatMap((url) =>
        this.http.delete<void>(url).pipe(
          catchError((error) => {
            this.monitoring$.handleError(error);
            return throwError('Account Service Error');
          })
        )
      )
    );
  }

  /**
   * Represents the _Account Service_ `get` method
   *
   * @param id string
   */
  get(id: string): Observable<Account> {
    return this.accountsUrl$.pipe(
      map((url) => url.concat(`/${id}`)),
      concatMap((url) =>
        this.http.get<Account>(url).pipe(
          catchError((error) => {
            this.monitoring$.handleError(error);
            return throwError('Account Service Error');
          })
        )
      )
    );
  }

  /**
   * Represents the _Account Service_ `post` method
   *
   * @param account Account
   */
  post(account: Account): Observable<Account> {
    return this.accountsUrl$.pipe(
      concatMap((url) =>
        this.http.post<Account>(url, account).pipe(
          catchError((error) => {
            this.monitoring$.handleError(error);
            return throwError('Account Service Error');
          })
        )
      )
    );
  }

  /**
   * Represents the _Account Service_ `put` method
   *
   * @param account Account
   */
  put(account: Account): Observable<Account> {
    return this.accountsUrl$.pipe(
      concatMap((url) =>
        this.http.put<Account>(url, account).pipe(
          catchError((error) => {
            this.monitoring$.handleError(error);
            return throwError('Account Service Error');
          })
        )
      )
    );
  }

  /**
   *
   * @param payment
   * Represents the _Account Service_ 'post' method for payments
   */
  postPayment(payment: PostPayment): Observable<PostPayment> {
    return this.paymentsUrl$.pipe(
      concatMap((url) =>
        this.http.post<PostPayment>(url, payment).pipe(
          catchError((error) => {
            this.monitoring$.handleError(error);
            return throwError('Account Service Error');
          })
        )
      )
    );
  }
}
