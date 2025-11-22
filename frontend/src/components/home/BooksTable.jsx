import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full border-separate border-spacing-2 min-w-[640px]'>
        <thead>
          <tr>
            <th className='border border-slate-600 rounded-md p-2 text-sm sm:text-base'>No</th>
            <th className='border border-slate-600 rounded-md p-2 text-sm sm:text-base'>Title</th>
            <th className='border border-slate-600 rounded-md p-2 text-sm sm:text-base max-md:hidden'>
              Author
            </th>
            <th className='border border-slate-600 rounded-md p-2 text-sm sm:text-base max-md:hidden'>
              Publish Year
            </th>
            <th className='border border-slate-600 rounded-md p-2 text-sm sm:text-base'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className='h-8'>
              <td className='border border-slate-700 rounded-md text-center p-2 text-sm sm:text-base'>
                {index + 1}
              </td>
              <td className='border border-slate-700 rounded-md text-center p-2 text-sm sm:text-base break-words'>
                {book.title}
              </td>
              <td className='border border-slate-700 rounded-md text-center p-2 text-sm sm:text-base max-md:hidden break-words'>
                {book.author}
              </td>
              <td className='border border-slate-700 rounded-md text-center p-2 text-sm sm:text-base max-md:hidden'>
                {book.publishYear}
              </td>
              <td className='border border-slate-700 rounded-md text-center p-2'>
                <div className='flex justify-center gap-x-2 sm:gap-x-4'>
                  <Link to={`/books/details/${book._id}`} aria-label='View book details'>
                    <BsInfoCircle className='text-xl sm:text-2xl text-green-800 hover:text-green-600 transition-colors' />
                  </Link>
                  <Link to={`/books/edit/${book._id}`} aria-label='Edit book'>
                    <AiOutlineEdit className='text-xl sm:text-2xl text-yellow-600 hover:text-yellow-500 transition-colors' />
                  </Link>
                  <Link to={`/books/delete/${book._id}`} aria-label='Delete book'>
                    <MdOutlineDelete className='text-xl sm:text-2xl text-red-600 hover:text-red-500 transition-colors' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
