export type Book = {
  title: string;
  author: string;
  review: string;
};

export const libraryData = [
  {
    year: "2022/2023",
    booksRead: [
      {
        title: "Klara and the Son",
        author: "Kazuo Ishiguro",
        review:
          "An awesome book that explores the perspective of an AI robot and her relationsip with a young child. This books prompted me to ask questions about consiousness, love, and how realistic this type of interaction is for our future.",
      },
      {
        title: "Jesus Skeptic",
        author: "John S. Dickerson",
        review:
          "From the perspective of a skeptic journalist, this book explores how Christianity has been a world leader in education, modern healthcare, science, and more. As a young Christian, I loved learning more about the history of my faith.",
      },
      {
        title: "12 Years a Slave",
        author: "Solomon Northup",
        review:
          "Wow! A memoir by Solomon Northup, this true-story retells how he was kidnapped and sold into the southern slave trade. He goes though unimaginable unfair treatment and cruelty while never losing his hope to go back to his family. This book has given me real perspective on a brutal period of history and made me reflect on how humans treat each other.",
      },
      {
        title: "The Sacred Balance",
        author: "David Suzuki",
        review:
          "There is a sense, whether it be unconcious or not, that humans are completely seperate from nature. This books explains how connected everything actually is and how dependent we are on nature. Although dry in some parts, this book is interesting as an ethic to an ecologically sustainable way of life.",
      },
      {
        title: "A Short History of the World",
        author: "Daniel Smith",
        review:
          "This books gives a brief summary of each of the 50 most influential books in history. It paints a picture of each time period which I loved as a history nerd. I've added many of these books to my reading list, including The Murders in the Rue Morgue, Incidents in the Life of a Slave Girl, and Catch-22.",
      },
    ],
    booksInProgress: [
      {
        title: "Exodus",
        author: "Unknown?",
        review:
          "I just began the story of the Exodus. I'm excited to see how Bibilical narritive themes are continued or changed while Moses brings the Jews out of Egypt.",
      },
      {
        title: "Gentle and Lowly",
        author: "Dane C. Ortlund",
        review:
          "In this book, Ortlund goes through an analysis of the Bible to uncover the depth of sympathy, mercy and grace in the character of Jesus. This study is definitely influenced by Puritan writings, which I've never been exposed to before.",
      },
    ],
  },
];
