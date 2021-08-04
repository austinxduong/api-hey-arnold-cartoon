// import { json } from 'msw/lib/types/context';

/* eslint-disable max-len */
export const fetchAllCartoons = async () => {
  // gets all characters, validate api in Postman to ensure all characters get returned
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  const json = await res.json();
  console.log(json);

  return json;
};

export const fetchCartoonDetail = async (_id) => {
  //gets a specific character, by _id, as referenced in api nested array. validate in postman to ensure data returned
  //below route is the API route to grab the specific character, however we will adjust something... lets comment out line 13
  // const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters/5da237699734fdcb7bef8f51');
  // we replaced it was a template literal instead
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${_id}`);
  const json = await res.json();
  console.log('by character ID', json);

  return json;
};



