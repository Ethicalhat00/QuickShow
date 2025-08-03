import React, { useState } from 'react';
import { dummyTrailers } from '../assets/assets';
import BlurCircle from './BlurCircle';
import { PlayCircleIcon } from 'lucide-react';

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  // Extract the YouTube video ID from the URL
  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0&controls=1`;
  };

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>

      <div className='relative mt-6'>
        <BlurCircle top='-100px' right='-100px' />

        <div className='relative w-full max-w-[960px] aspect-video mx-auto'>
          <iframe
            src={getYouTubeEmbedUrl(currentTrailer.videoUrl)}
            allow='autoplay; encrypted-media'
            allowFullScreen
            className='w-full h-full rounded-lg'
            title='YouTube trailer'
          />
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-8 max-w-3xl mx-auto'>
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            onClick={() => setCurrentTrailer(trailer)}
            className='relative group hover:-translate-y-1 transition duration-300 cursor-pointer'
          >
            <img
              src={trailer.image}
              alt='trailer thumbnail'
              className='rounded-lg w-full h-full object-cover brightness-75'
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className='absolute top-1/2 left-1/2 w-8 h-8 md:w-10 md:h-10 transform -translate-x-1/2 -translate-y-1/2 text-white'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;
