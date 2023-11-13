import {
  blueFlower,
  boom,
  goomba,
  green,
  greenShell,
  red,
  redFlower,
  redShell,
} from '../assets/index';
import { shuffleCards } from '../functions/shuffleCards';
import type { CardArrayProps } from '../types';

const cardArray: CardArrayProps[] = [
  {
    id: 1,
    image: blueFlower,
    isOpen: false,
  },
  {
    id: 2,
    image: boom,
    isOpen: false,
  },

  {
    id: 3,
    image: goomba,
    isOpen: false,
  },
  {
    id: 4,
    image: green,
    isOpen: false,
  },
  {
    id: 5,
    image: greenShell,
    isOpen: false,
  },
  {
    id: 6,
    image: red,
    isOpen: false,
  },
  {
    id: 7,
    image: redFlower,
    isOpen: false,
  },
  {
    id: 8,
    image: redShell,
    isOpen: false,
  },
];

const duplicatedCardArray = cardArray.map((card) => ({
  ...card,
  id: card.id + 8,
}));

const sumArray = [...cardArray, ...duplicatedCardArray];

export const finalCardArray = shuffleCards(sumArray);
