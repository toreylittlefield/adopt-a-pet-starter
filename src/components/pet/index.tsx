import React from 'react';

type AnimalType = {
  animal: {
    id: string;
    type: string;
    photos: Photos[];
    name: string;
    breeds: Breeds;
    colors: Colors;
    gender: string;
  };
};

type Photos = {
  medium: string;
};

type Breeds = {
  primary: string;
};

type Colors = {
  primary: string;
};

const Pet = ({ animal }: AnimalType) => {
  return (
    <a
      key={animal.id}
      href={`/${animal.type.toLowerCase()}/${animal.id}`}
      className="pet"
    >
      <article>
        <div className="pet-image-container">
          {
            <img
              className="pet-image"
              src={
                animal.photos[0]?.medium || 'https://i.imgur.com/aEcJUFK.png'
              }
              alt=""
            />
          }
        </div>
        <h3>{animal.name}</h3>
        <p>Breed: {animal.breeds.primary}</p>
        <p>Color: {animal.colors.primary}</p>
        <p>Gender: {animal.gender}</p>
      </article>
    </a>
  );
};

export default Pet;
