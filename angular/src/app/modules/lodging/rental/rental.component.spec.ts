import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RentalComponent } from './rental.component';
import { Rental } from 'src/app/data/rental.model';
import { TentPlot } from 'src/app/data/tent.model';
import { RVPlot } from 'src/app/data/rv.model';
import { PlotSize } from 'src/app/data/plotSize.model';
import { Amenities } from 'src/app/data/amenities.model';

describe('RentalComponent', () => {
  let component: RentalComponent;
  let fixture: ComponentFixture<RentalComponent>;

  const rentals: Rental[] = [
    {
      id: '1',
      lotNumber: '1',
      properties: {
        size: {
          width: 5,
          height: 5,
        },
        amenities: undefined,
        capacity: 2,
        name: 'tent',
      },
      status: 'available',
      price: 100,
    },
    {
      id: '2',
      lotNumber: '2',
      properties: {
        size: {
          width: 5,
          height: 5,
        },
        amenities: {
          voltage: 50,
          sewage: 'yes',
          water: 'yes',
        },
        capacity: 5,
        name: 'tent',
      },
      status: 'available',
      price: 100,
    },
    {
      id: '3',
      lotNumber: '3',
      properties: {
        size: {
          width: 5,
          height: 5,
        },
        amenities: undefined,
        capacity: 2,
        name: 'tent',
      },
      status: 'available',
      price: 100,
    },
    {
      id: '4',
      lotNumber: '1',
      properties: {
        size: {
          width: 5,
          height: 5,
        },
        amenities: {
          voltage: 50,
          sewage: 'yes',
          water: 'yes',
        },
        capacity: 5,
        name: 'RV',
      },
      status: 'available',
      price: 100,
    },
  ];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RentalComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(RentalComponent);
      component = fixture.componentInstance;
      component.rentals = rentals;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set rentalTypes', () => {
    expect(component.rentalTypes).toBeTruthy();
    expect(component.rentalTypes.length).toEqual(2);
  });

  it('should set availability count correctly', () => {
    expect(component.availabilityCount.get('tent')).toEqual(3);
  });

  it('should have none available', () => {
    expect(component.availabilityCount.get('RV')).toEqual(1);
  });

  it('should call setRentals', () => {
    spyOn(component, 'setRentalTypes');
    component.ngOnInit();
    expect(component.setRentalTypes).toHaveBeenCalled();
  });

  it('should test the length of the rows', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(5);
  });

  it('should test the table headers', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    const headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toContain('Site');
    expect(headerRow.cells[2].innerHTML).toContain('Sites Available');
  });
});
