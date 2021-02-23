import { Lodging } from '../lodging.model';

export const testLodgings: Lodging[] = [
  {
    id: 1,
    location: {
      id: '',
      address: {
        id: '',
        city: '',
        postalCode: '',
        country: '',
        stateProvince: '',
        street: '',
      },
      latitude: '',
      longitude: '',
    },
    name: '',
    bathrooms: 1,
    rentals: [
      {
        id: '1',
        lotNumber: '1',
        size: '5x5',
        capacity: 2,
        SiteName: 'tent',

        status: 'available',
        price: 100,
      },
    ],
    reviews: [],
    images: [],
  },
  {
    id: 1,
    location: {
      id: '',
      address: {
        id: '',
        city: '',
        postalCode: '',
        country: '',
        stateProvince: '',
        street: '',
      },
      latitude: '',
      longitude: '',
    },
    name: '',
    bathrooms: 1,
    rentals: [],
    reviews: [],
    images: [],
  },
];

export const lodging: Lodging = {
  id: 1,
  location: {
    id: '1',
    address: {
      id: '1',
      city: 'testCity',
      country: 'testCountry',
      postalCode: 'testCode',
      stateProvince: 'testState',
      street: 'testStreet',
    },
    latitude: 'testLat',
    longitude: 'testLong',
  },
  name: 'test',
  rentals: [],
  reviews: [],
  bathrooms: 1,
  images: [],
};

export const lodgings: Lodging[] = [
  {
    id: 1,
    location: {
      id: '',
      address: {
        id: '',
        city: '',
        country: '',
        postalCode: '',
        stateProvince: '',
        street: '',
      },
      latitude: '',
      longitude: '',
    },
    name: '',
    rentals: [
      {
        id: '1',
        lotNumber: '1',
        size: '5x5',
        capacity: 2,
        SiteName: 'tent',
        status: 'available',
        price: 100,
      },
    ],
    reviews: [
      {
        accountId: 1,
        comment: 'comment',
        dateCreated: '2020-08-01',
        rating: 1,
        lodgingModelId: 1,
      },
    ],
    bathrooms: 1,
    images: [],
  },
];

export const lodgingMock: Lodging[] = [
  {
    id: 1,
    location: {
      id: 'string',
      address: {
        id: 'string',
        city: 'string',
        country: 'string',
        postalCode: 'string',
        stateProvince: 'string',
        street: 'string',
      },
      latitude: 'string',
      longitude: 'string',
    },
    name: 'string',
    bathrooms: 1,
    rentals: [],
    reviews: [],
    images: [],
  },
];
