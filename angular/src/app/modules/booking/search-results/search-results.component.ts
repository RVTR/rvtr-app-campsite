import { Component, Input } from '@angular/core';
import { Lodging } from '../../../data/lodging.model';
import { Booking } from '../../../data/booking.model';
import { BookingService } from 'services/booking/booking.service';
import { OktaAuthService, UserClaims } from '@okta/okta-angular';
import { AccountService } from 'services/account/account.service';

@Component({
  selector: 'uic-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() lodgings!: Lodging[] | null;
  @Input() query!: string;
  reservation: any;
  userClaims?: UserClaims;
  email?: string;

  constructor(public oktaAuth: OktaAuthService,
    private readonly accountService: AccountService,private readonly bookingService: BookingService) {
      this.getUserInfo();
    }

  averageRating(lodging: Lodging): boolean[] {
    const maxRating = 10;
    const stars = new Array<boolean>(maxRating);

    stars.fill(false, 0, maxRating);

    if (lodging.reviews === null) {
      return stars;
    }

    const ratings = lodging.reviews.map((review) => review.rating);
    const ratingSum = ratings.reduce((a, b) => a + b, 0);

    const avgRating = Math.floor(ratingSum / ratings.length);

    stars.fill(true, maxRating - avgRating, maxRating);

    return stars;
  }

  async getUserInfo() {
    this.userClaims = await this.oktaAuth.getUser();
    this.email = this.userClaims.email as string;
    console.log(this.email);
  }

  makeReservation(lodging: Lodging, rental:any): void {
    const cityRes = /(?<=(City: ))[^,]+/.exec(this.query);
    const occRes = /(?<=(Occupancy: ))[^,]+/.exec(this.query);
    const dateRes = /\d{4}-\d{2}-\d{2}\s-\s\d{4}-\d{2}-\d{2}/.exec(this.query)![0].split(" - ");
    const guestsArr:any = [];

    for (let i = 0; i < +occRes![0]; i++) {
      guestsArr.push({});      
    }

    this.accountService.getEmail(this.email!).subscribe(res => {
      console.log(res);
      this.reservation = {
        accountId: +res.id,
        lodgingId: lodging.id,
        guests: guestsArr,
        accountEmail: '',
        rentals: [{
          lodgingRentalId: rental.id
        }],
        checkIn: dateRes[0],
        checkOut: dateRes[1],
      };
      this.bookingService.post(this.reservation).subscribe();
    });
    
  }
}
