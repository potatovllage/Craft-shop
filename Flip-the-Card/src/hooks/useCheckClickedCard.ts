import { useEffect } from 'react';

import { finalCardArray } from '../config';
import { useGameStore } from '../store/store';

export function useCheckClickedCard() {
  const { setClickedCard, clickedCards } = useGameStore();

  // 카드 비교하기
  useEffect(() => {
    const timer = setTimeout(() => {
      if (clickedCards.length === 2) {
        const firstCard = finalCardArray.find(
          (card) => card.image === clickedCards[0],
        )?.id;
        const secondCard = finalCardArray.find(
          (card) => card.image === clickedCards[1],
        )?.id;
        // 두 카드가 같지 않은 경우
        if (firstCard !== secondCard) {
          for (const card of finalCardArray) {
            if (
              card.image === clickedCards[0] ||
              card.image === clickedCards[1]
            ) {
              card.isOpen = false;
            }
          }
        }
        // 같지 않을 경우 열린 카드 저장하는 배열 초기화
        setClickedCard('');
      }
    }, 500);
    clearTimeout(timer);
  }, [clickedCards, setClickedCard]);
}
