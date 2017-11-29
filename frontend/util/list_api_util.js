export const createList = (list) => (
  $.ajax({
    method: 'POST',
    url: 'api/lists',
    data: {list: {title: list}}
  })
);

export const editList = (list) => (
  $.ajax({
    method: 'PATCH',
    url: `api/lists/${list.id}`,
    data: { list }
  })
);

export const deleteList = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/list/${id}`
  })
);
