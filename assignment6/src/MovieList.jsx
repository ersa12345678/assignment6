import React from 'react';

const movies = [
  { title: 'Iron Man', imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/3/2018/05/IRON-2008-d7a2706.jpg?quality=90&webp=true&resize=800,534' },
  { title: 'Iron Man 3', imageUrl: 'https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/02/13/3791894318.png' },
  { title: 'Iron Man 2', imageUrl: 'https://variety.com/wp-content/uploads/2013/04/ironman3_tonystark.jpg?w=1000&h=667&crop=1&resize=1360%2C907' },
  { title: 'Spider-Man', imageUrl: 'https://images.tokopedia.net/img/KRMmCm/2023/10/18/f5e79ada-8ef6-4c10-928e-f53dc324dc9b.jpg' },
  { title: 'Man of Steel', imageUrl: 'https://i0.wp.com/batman-news.com/wp-content/uploads/2015/01/1370382225000-A03-USA-NOW-MAN-OF-STEEL-04-55482059.jpg?resize=696%2C463&quality=80&strip=info&ssl=1' },
  { title: 'Ant-Man', imageUrl: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2022/10/25/r8s93aZ/sinopsis-ant-man-and-the-wasp-quantumania-ngetease-soal-masa-depan-sekuelnya38.jpg' },
  { title: 'The Amazing Spider-Man', imageUrl: 'https://mmc.tirto.id/image/otf/970x0/2019/07/02/spiderman-2-imdb997_ratio-16x9.jpg' },
  { title: 'Spider-Man 2', imageUrl: 'https://i0.wp.com/www.gimbot.com/wp-content/uploads/2024/03/Spiderman-1.jpg?w=1200&ssl=1' },
];

function MovieList() {
    return (
      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm rounded border-0 movie-card">
              <img src={movie.imageUrl} className="card-img-top rounded-top" alt={movie.title} />
              <div className="card-body bg-danger text-white rounded-bottom">
                <h5 className="card-title text-center fw-bold">{movie.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default MovieList;