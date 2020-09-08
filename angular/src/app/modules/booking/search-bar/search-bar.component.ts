import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { BookingService } from 'src/app/services/booking/booking.service';
import { Lodging } from '../../../data/lodging.model';
import { LodgingService } from '../../../services/lodging/lodging.service';
import { Filter } from 'data/filter.model';

@Component({
  selector: 'uic-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  @ViewChild('searchForm', { static: false }) searchForm?: NgForm;

  @Output() searchResults = new EventEmitter<Lodging[]>();
  @Output() searchQuery = new EventEmitter<string>();
  @Output() isSearched = new EventEmitter<boolean>();

  constructor(
    private readonly bookingService: BookingService,
    private readonly lodgingService: LodgingService
  ) {}

  async onSubmit(form: NgForm): Promise<void> {
    const occupancy = `${parseInt(form.value.adults, 10) + parseInt(form.value.children, 10)}`;
    const city: string = form.value.location;

    const checkIn: string = form.value.checkin;
    const checkOut: string = form.value.checkout;

    let filter: Filter = {city: city, occupancy: occupancy};

    const lodgings$ = this.lodgingService.get(filter);
    const bookings$ = this.bookingService.getByDateRange(checkIn, checkOut);

    forkJoin([lodgings$, bookings$]).subscribe(([lodgings, bookings]) => {
      const bookedLodgingIds: string[] = bookings.map((booking) => booking.lodgingId);
      const availableLodgings: Lodging[] = lodgings.filter(
        (lodging) => !bookedLodgingIds.includes(lodging.id)
      );

      this.searchResults.emit(availableLodgings);
      this.searchQuery.emit(
        `City: ${city}, Occupancy: ${occupancy}, Dates: ${checkIn} - ${checkOut}`
      );
      this.isSearched.emit(true);
    });
  }
}
