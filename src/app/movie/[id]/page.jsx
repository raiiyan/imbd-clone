import React from 'react'
import Image from 'next/image';

export default async function MoviePage({params}) {
    const movieId = params.id;
    const res =  await fetch (
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    );
        const movie = await res.json();
        console.log(movie);
  return (
    <div className='w-full'>
        <div className='p4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl md:space-x-6 mx-auto'>
            <Image
                src={`https://image.tmdb.org/t/p/original/${
                    movie.backdrop_path || result.poster_path
                }`}
                width={500}
                height={300}
                className='rounded-lg'
                
            >
            </Image>
            <div className='p-2'>
                <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
                <p className='text-lg mb-3'> {movie.overview} </p>    
                <p className='mb-3'>
                    <span className='font-semibold mr-1'>Date Release:</span>
                    {movie.release_date || movie.first_air_date}
                </p>
                <p className='mb-3'>
                    <span className='font-semibold mr-1'>Rating:</span>   
                    {movie.vote_count}
                </p>
            </div>
        </div>
    </div>
  )
}
