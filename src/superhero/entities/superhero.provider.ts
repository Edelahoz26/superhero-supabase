import { Superhero } from './superhero.entity';

export const superHeroProvider = [
  {
    provide: 'HERO_REPOSITORY',
    useValue: Superhero,
  },
];
