import { rest } from 'msw';
import types from './data/types.json';
import animals from './data/animals.json';
import details from './data/details.json';

type Type = string | null;
type Query = string | null;
type Photos = {
  small: string;
  medium: string;
  large: string;
  full: string;
};

type Details = {
  id: number;
  organization_id: string;
  url: string;
  type: string;
  species: string;
  breeds: {
    primary: string;
    secondary: string | null;
    mixed: boolean;
    unknown: boolean;
  };
  colors: {
    primary: string | null;
    secondary: string | null;
    tertiary: string | null;
  };
  age: string;
  gender: string;
  size: string;
  coat: string;
  attributes: {
    spayed_neutered: boolean;
    house_trained: boolean;
    declawed: null | boolean;
    special_needs: boolean;
    shots_current: boolean;
  };
  environment: { children: null | boolean; dogs: boolean; cats: boolean };
  tags: string[];
  name: string;
  description: string;
  organization_animal_id: string | null;
  photos: Photos[];
  primary_photo_cropped: {
    small: string;
    medium: string;
    large: string;
    full: string;
  };
  videos: string[];
  status: string;
  status_changed_at: string;
  published_at: string;
  distance: number | null;
  contact: {
    email: string;
    phone: string;
    address: {
      address1: string | null;
      address2: string | null;
      city: string | null;
      state: string | null;
      postcode: string | null;
      country: string | null;
    };
  };
  _links: {
    self: { href: string };
    type: { href: string };
    organization: { href: string };
  };
};

export const handlers = [
  rest.get('/types', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(types));
  }),
  rest.get('/animals', (req, res, ctx) => {
    const type: Type = req.url.searchParams.get('type');
    const query: Query = req.url.searchParams.get('query');
    let response = animals.animals;

    if (type !== '' && type !== null) {
      response = response.filter(
        (animal) => animal.type.toLowerCase() === type.toLowerCase()
      );
    }
    if (query !== '' && query !== null) {
      response = response.filter(
        (animal) =>
          animal.contact.address.state
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          animal.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    return res(ctx.status(200), ctx.json(response));
  }),
  rest.get('/animals/:id', (req, res, ctx) => {
    let { id } = req.params;
    if (typeof id !== 'number') {
      return res(ctx.status(400, 'Bad Id'));
    }
    let response: Details | undefined = details[51322382];

    if (!response === undefined) {
      return res(ctx.status(404));
    }

    return res(ctx.status(200), ctx.json(response));
  })
];
