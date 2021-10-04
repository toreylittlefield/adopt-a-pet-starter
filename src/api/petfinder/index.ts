export const getPets = async (type = '', query = '') => {
  const searchParams = new URLSearchParams({ type, query });
  const requestUrl = `/animals?${searchParams.toString()}`;

  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  return json;
};

export const getPetDetails = async (id: string) => {
  const requestUrl = `/animals/${id}`;
  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  return json;
};

export type PetTypeObj = {
  name: string;
  coats: string[];
  colors: string[];
  genders: ['Male', 'Female'];
  _links: {
    self: { href: string };
    breeds: { href: string };
  };
};

export type PetTypesApi = { types: PetTypeObj[] };
export const getPetTypes = async () => {
  const requestUrl = `/types`;
  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json: PetTypesApi = await response.json();
  return json;
};
