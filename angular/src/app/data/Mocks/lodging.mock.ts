import { Lodging } from '../lodging.model';

export const testLodgings: Lodging[] = [
  {
    entityId: 1,
    address: {
      entityId: '',
      city: '',
      postalCode: '',
      country: '',
      stateProvince: '',
      street: '',
    },
    name: '',
    bathrooms: 1,
    rentals: [
      {
        id: '1',
        lotNumber: '1',
        size: '5x5',
        capacity: 2,
<<<<<<< HEAD
        siteName: 'tent',
=======
        SiteName: 'tent',

>>>>>>> 4c9aa14247e642cc99a57715ea9b82b20d1fe0cd
        status: 'available',
        price: 100,
      },
    ],
    reviews: [],
    images: [],
  },
  {
    entityId: 1,
    address: {
      entityId: '',
      city: '',
      postalCode: '',
      country: '',
      stateProvince: '',
      street: '',
    },
    name: '',
    bathrooms: 1,
    rentals: [],
    reviews: [],
    images: [],
  },
];

export const lodging: Lodging = {
  entityId: 1,
  address: {
    entityId: '1',
    city: 'testCity',
    country: 'testCountry',
    postalCode: 'testCode',
    stateProvince: 'testState',
    street: 'testStreet',
  },
  name: 'test',
  rentals: [],
  reviews: [],
  bathrooms: 1,
  images: [],
};

export const lodgings: Lodging[] = [
  {
    entityId: 1,
    address: {
      entityId: '',
      city: '',
      country: '',
      postalCode: '',
      stateProvince: '',
      street: '',
    },
    name: '',
    rentals: [
      {
        id: '1',
        lotNumber: '1',
        size: '5x5',
        capacity: 2,
<<<<<<< HEAD
        siteName: 'tent',
=======
        SiteName: 'tent',
>>>>>>> 4c9aa14247e642cc99a57715ea9b82b20d1fe0cd
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
    entityId: 1,
    address: {
      entityId: 'string',
      city: 'string',
      country: 'string',
      postalCode: 'string',
      stateProvince: 'string',
      street: 'string',
    },
    name: 'string',
    bathrooms: 1,
    rentals: [],
    reviews: [],
    images: [],
  },
];
