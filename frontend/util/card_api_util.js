export const createCard = (card) => (
  $.ajax({
    method: 'POST',
    url: 'api/cards',
    data: {card: {title: card}}
  })
);

export const editCard = (card) => (
  $.ajax({
    method: 'PATCH',
    url: `api/cards/${card.id}`,
    data: { card }
  })
);

export const deleteCard = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/card/${id}`
  })
);
