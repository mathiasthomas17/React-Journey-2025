import React from 'react'

const Moviecard = ({movie :{title,vote_average,poster_path,release_date,original_language,adult}}) => {
  return (
    <div className='movie-card'>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} alt="" />
        <div className="mt-5">
            <h3>{title}</h3>
            <div className="content">
                <div className="rating">
                    <img src="Rating.svg" alt="start rating" />
                    <p>{vote_average ? vote_average : 'N/A'}</p>
                </div>
                <span>•</span>
                <p className="lang">{original_language}</p>
                <span>•</span>
                <p className="year">
                    {release_date ? release_date.split('-')[0] : 'N/A' }
                </p>
                <span>•</span>
                <p className='text-white'>{adult ? '18 +' : 'PG'}</p>
               
            </div>
        </div>
    </div>
  )
}

export default Moviecard