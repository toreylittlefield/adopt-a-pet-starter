import React from 'react';

const getHeroTitle = (type: string) => {
  switch (type) {
    case 'dog':
      return 'Dogs';
    case 'cat':
      return 'Cats';
    case 'rabbit':
      return 'Rabbits';
    case 'bird':
      return 'Birds';
    default:
      return 'Find your perfect pet';
  }
};

type HeroProps = {
  image: string;
  displayText: string;
};

const Hero = ({ image, displayText }: HeroProps): JSX.Element => {
  const type: string = '';

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `linear-gradient(black, black), url("${
          image || 'pets-hero.png'
        }")
          `,
        backgroundBlendMode: 'saturation',
        backgroundSize: 'cover',
        backgroundColor: '#0000008f'
      }}
    >
      <h2>{displayText || getHeroTitle(type)}</h2>
    </div>
  );
};

export default Hero;
