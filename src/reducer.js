const initialState = {
  user: {
    id: 1,
    nom: "Falah",
    prenom: "Anas",
    bio: "i am a book reader, i Love Books!",
    img: "profile.jpg",
    userLibrary: [
      {
        idBook: 1,
        title: "Dune: House Harkonnen",
        description:
          "Delve into the past of Gurney Halleck, Leto Atreides, Lady Jessica, and Liet Kynes, and discover how the complex and brutal machinations of House Harkonnen shaped their future! What difficult choices will tear Leto apart as Baron Harkonnen plots against not just House Atreides, but the Bene Gesserit and the Emperor himself? And who watches Duke Atreides from afar? This dangerous figure holds untold significance for his future and lineage… The second NYT Bestselling prequel to Dune is adapted for the first time by award-winning novelists Brian Herbert and Kevin J. Anderson and artist Michael Shelfer (Domino), unveiling a closer look at the rising conflict between beloved characters and bitter villains. Collects Dune: House Harkonnen",
        cover: "dune.jpg",
        addTime: "01/01/24 17:55:54",
      },
      {
        idBook: 2,
        title: "The Girl with the Dragon Tattoo",
        description:
          "Harriet Vanger, a scion of one of Sweden’s wealthiest families disappeared over forty years ago. All these years later, her aged uncle continues to seek the truth. He hires Mikael Blomkvist, a crusading journalist recently trapped by a libel conviction, to investigate. He is aided by the pierced and tattooed punk prodigy Lisbeth Salander. Together they tap into a vein of unfathomable iniquity and astonishing corruption.An international publishing sensation, Stieg Larsson's The Girl with the Dragon Tattoo combines murder mystery, family saga, love story, and financial intrigue into one satisfyingly complex and entertainingly atmospheric novel.",
        cover: "theGirl.jpg",
        addTime: "01/01/24 17:55:54",
      },
      {
        idBook: 3,
        title: "Sapiens: A Brief History of Humankind",
        description:
          "Most books about the history of humanity pursue either a historical or a biological approach, but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 years ago with the appearance of modern cognition. From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, Sapiens integrates history and science to reconsider accepted narratives, connect past developments with contemporary concerns, and examine specific events within the context of larger ideas.",
        cover: "sapiens.jpg",
        addTime: "01/01/24 17:55:54",
      },
      {
        idBook: 4,
        title: "The Hobbit - Scholastic Shop",
        description: "this is a random test description for book 4",
        cover: "theHobbits.jpg",
        addTime: "01/01/24 17:55:54",
      },
    ],
    browserBook: {
      favBooks: 5,
      viewedBooks: 10,
    },
  },
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        user: {
          ...state.user,
          userLibrary: [
            ...state.user.userLibrary,
            {
              idBook: action.payload.idBook,
              title: action.payload.title,
              description: action.payload.description,
              cover: action.payload.cover,
              addTime: action.payload.addTime,
            },
          ],
        },
      };

    case "UPDATE_BOOK":
      const updatedLibrary = state.user.userLibrary.map((book) => {
        if (book.idBook == action.payload.idBook) {
          console.log("Updating Book:", book);
          return {
            ...book,
            title: action.payload.title,
            description: action.payload.description,
            cover: action.payload.cover,
            addTime: action.payload.addTime,
          };
        }
        return book;
      });

      console.log("Updated Library:", updatedLibrary);

      return {
        ...state,
        user: {
          ...state.user,
          userLibrary: updatedLibrary,
        },
      };

    case "DELETE_BOOK":
      return {
        ...state,
        user: {
          ...state.user,
          userLibrary: state.user.userLibrary.filter(
            (book) => book.idBook !== action.payload.idBook
          ),
        },
      };
    case "FAVORITE_BOOK":
      return {
        ...state,
        user: {
          ...state.user,
          browserBook: {
            ...state.user.browserBook,
            favBooks: state.user.browserBook.favBooks + 1,
          },
        },
      };

    case "UPDATE_USER":
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          nom: action.payload.nom,
          prenom: action.payload.prenom,
          bio: action.payload.bio,
          img: action.payload.img,
        },
      };

    default:
      return state;
  }
};

export default booksReducer;
