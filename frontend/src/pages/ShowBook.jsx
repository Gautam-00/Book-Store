import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { API_URL } from '../config/api';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-full max-w-2xl p-4'>
          <div className='my-4 flex flex-col sm:flex-row'>
            <span className='text-lg sm:text-xl mb-1 sm:mb-0 sm:mr-4 text-gray-500 font-semibold'>Id:</span>
            <span className='break-all'>{book._id}</span>
          </div>
          <div className='my-4 flex flex-col sm:flex-row'>
            <span className='text-lg sm:text-xl mb-1 sm:mb-0 sm:mr-4 text-gray-500 font-semibold'>Title:</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4 flex flex-col sm:flex-row'>
            <span className='text-lg sm:text-xl mb-1 sm:mb-0 sm:mr-4 text-gray-500 font-semibold'>Author:</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4 flex flex-col sm:flex-row'>
            <span className='text-lg sm:text-xl mb-1 sm:mb-0 sm:mr-4 text-gray-500 font-semibold'>Publish Year:</span>
            <span>{book.publishYear}</span>
          </div>
          <div className='my-4 flex flex-col sm:flex-row'>
            <span className='text-lg sm:text-xl mb-1 sm:mb-0 sm:mr-4 text-gray-500 font-semibold'>Create Time:</span>
            <span className='break-words'>{book.createdAt ? new Date(book.createdAt).toString() : 'N/A'}</span>
          </div>
          <div className='my-4 flex flex-col sm:flex-row'>
            <span className='text-lg sm:text-xl mb-1 sm:mb-0 sm:mr-4 text-gray-500 font-semibold'>Last Update Time:</span>
            <span className='break-words'>{book.updatedAt ? new Date(book.updatedAt).toString() : 'N/A'}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
