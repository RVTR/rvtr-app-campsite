import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ReservationService } from './reservation.service';
import { Reservation } from '../../data/booking/reservation.model';
import { Config } from './config.booking';
import { Guest } from 'src/app/data/booking/guest.model';
import { Status } from 'src/app/data/booking/status.model';
import { HttpResponse } from '@angular/common/http';

describe('ReservationService', () => {
  let service: ReservationService;
  let httpTestingController: HttpTestingController;
  let config: Config;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReservationService, Config]
    });

    //Instantiate the services by injecting them in the TestBed
    service = TestBed.inject(ReservationService);
    httpTestingController = TestBed.inject(HttpTestingController);
    config = TestBed.inject(Config);
  });

  describe('#getReservations', () => {
    let dummyReservations: Reservation[];

    beforeEach(() => {
      dummyReservations = [
        {
          reservationId: 1,
          accountId: 1,
          rentalId: 1,
          duration: {
            durationId: 1,
            checkIn: new Date(2020, 2, 4),
            checkOut: new Date(2020, 2, 5),
            creationDate: new Date(2020, 2, 2),
            modifiedDate: new Date(2020, 2, 3)
          },
          status: {
            statusId: 1,
            statusName: 'Pending'
          },
          guests: {
            // {
            //   reservationId: 1,
            //   reservationType: 'adult',
            //   reservationFirstName: 'John',
            //   reservationLastName: 'Smith'
            // },
          },
          notes: 'accommodations ...'
        },
      ] as Reservation[];
    })

    it('should return an Observable<Reservation[]>', () => {
      service.getReseravtions().subscribe(
        reservations => expect(reservations).toEqual(dummyReservations, "should expect list of reservations"),
        fail
      );

      const req = httpTestingController.expectOne(config.reservation.uri);
      expect(req.request.method).toEqual("GET");

      req.flush(dummyReservations);
    });

    //Test 3  httpcontoller should returns the 404 error into empty heroes
    it("should convert 404 into empty hero", () => {
      service.getReseravtions().subscribe(
        data => expect(data.length).toEqual(0, "should convert 404 error to 0 heroes"),
        fail
      )

      const req = httpTestingController.expectOne(service._config.reservation.uri);
      let msg = "404 Error";
      req.flush(msg, {status: 404, statusText: "Not found"})
    });

  })

  describe("#saveReservation", () => {
    let newReservation: Reservation;

    beforeEach(() => {
      newReservation = {
          reservationId: 1,
          accountId: 1,
          rentalId: 1,
          duration: {
            durationId: 1,
            checkIn: new Date(2020, 2, 4),
            checkOut: new Date(2020, 2, 5),
            creationDate: new Date(2020, 2, 2),
            modifiedDate: new Date(2020, 2, 3)
          },
          status: {
            statusId: 1,
            statusName: 'Pending'
          },
          guests: [
            {
              guestId: 1,
              guestType: 'adult',
              guestFirstName: 'John',
              guestLastName: 'Smith'
            },
          ],
          notes: 'accommodations ...'
        }
    });

    //Testing httpPost response
    it("Expects to return successful if reservation posted correctly", () => {

      service.saveReservation(newReservation).subscribe(
        data => expect(data).toEqual(newReservation, "should return a reservation if saved successfully")
      );

      const req = httpTestingController.expectOne(service._config.reservation.uri);
      expect(req.request.method).toEqual("POST");
      expect(req.request.body).toEqual(newReservation);

      // Expect server to return the reservation after POST
      const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: newReservation });
      //It delivers a HttpEvent on the response stream for this request
      req.event(expectedResponse);
    });
  });
});
