import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { ResponseData } from '@interfaces/responseData';
import { Observable } from 'rxjs';
import { DetailProduct } from '@interfaces/detailProducto';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  readonly url = environment.url;
  constructor(private http: HttpClient) {}

  getPhone(): Observable<DetailProduct[]> {
    return this.http
      .get<ResponseData>(this.url + environment.ENDPOINT.get.articlePhone)
      .pipe(
        map((data) =>
          data.results.map((x) => ({
            selerId: x.seller.id,
            brand: x.attributes[0].value_name || 'n/a',
            freeShipping: x.shipping.free_shipping,
            logisticsType: x.shipping.logistic_type,
            sellerPlaceOperation: x.address.state_name,
            itemCondition: x.condition,
            priceRange: x.price,
            image: x.thumbnail,
          }))
        )
      );
  }
}
