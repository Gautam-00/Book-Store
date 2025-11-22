import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/api';

import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/books`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-2 sm:gap-x-4 mb-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base transition-colors duration-200'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base transition-colors duration-200'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 my-8'>
        <h1 className='text-2xl sm:text-3xl'>Books List</h1>
        <Link to='/books/create' className='flex items-center gap-2 text-sky-800 hover:text-sky-600 transition-colors'>
          <MdOutlineAddBox className='text-3xl sm:text-4xl' />
          <span className='text-sm sm:text-base'>Add Book</span>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
