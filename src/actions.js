export const updateUser = (id, nom, prenom, bio, img) => {
  return {
    type: "UPDATE_USER",
    payload: { id, nom, prenom, bio, img },
  };
};

export const addBook = (idBook, title, description, cover,category, addTime) => {
  return {
    type: "ADD_BOOK",
    payload: { idBook, title, description, cover,category, addTime },
  };
};


export const updateBook = (idBook, title, description, cover,category, addTime) => {
  return {
    type: "UPDATE_BOOK",
    payload: { idBook, title, description, cover,category, addTime },
  };
};

export const deleteBook = (idBook) => {
  return {
    type: "DELETE_BOOK",
    payload: { idBook },
  };
};
export const favoriteBook = () => {
  return {
    type: "FAVORITE_BOOK",
  };
};
