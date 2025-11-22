import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { API_URL } from '../config/api';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post(`${API_URL}/books`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-full max-w-2xl p-4 mx-auto'>
        <div className='my-4'>
          <label className='block text-xl mb-2 text-gray-500 sm:inline-block sm:mr-4 sm:mb-0'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400'
          />
        </div>
        <div className='my-4'>
          <label className='block text-xl mb-2 text-gray-500 sm:inline-block sm:mr-4 sm:mb-0'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400'
          />
        </div>
        <div className='my-4'>
          <label className='block text-xl mb-2 text-gray-500 sm:inline-block sm:mr-4 sm:mb-0'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400'
          />
        </div>
        <button className='p-2 bg-sky-300 hover:bg-sky-400 rounded-md m-4 sm:m-8 transition-colors duration-200 w-full sm:w-auto' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBooks