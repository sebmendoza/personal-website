import { FaBookOpen, FaCheck } from "react-icons/fa";
import { Book } from "../../data/librarySummary";

const ShelfItem = ({
  book,
  key,
  isRead,
}: {
  book: Book;
  key: number;
  isRead: boolean;
}) => {
  return (
    <div className="font-body">
      <div key={key} className="flex items-center gap-4 ">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-opacity-75">
          {isRead ? (
            <FaCheck className="text-green-800" />
          ) : (
            <FaBookOpen className="text-green-700/50" />
          )}
        </div>
        <div>
          <p className="text-lg font-semibold">
            {book.title} by <span className="text-grey-600">{book.author}</span>
          </p>
          <p className="">{book.review}</p>
        </div>
      </div>
    </div>
  );
};

export const Shelf = ({
  year,
  booksRead,
  booksInProgress,
}: {
  year: string;
  booksRead: Book[];
  booksInProgress: Book[];
}) => {
  return (
    <div>
      <h3 className="my-3 font-title text-2xl font-semibold text-gray-600">
        {year}
      </h3>
      <hr />
      <div className="mt-5 flex flex-col gap-5">
        {booksRead.map((book, i) => (
          <ShelfItem book={book} isRead={true} key={i} />
        ))}
        {booksInProgress.map((book, i) => (
          <ShelfItem book={book} isRead={false} key={i} />
        ))}
      </div>
    </div>
  );
};
