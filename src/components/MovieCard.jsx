export default function MovieCard(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  // style={{ minHeight: '50px', background: 'grey' }}

  return (
    <div className="card movie" id={id}>
      <div className="card-image waves-effect waves-block waves-light">
        {poster === 'N/A' ? (
          <img
            className="activator"
            src={
              'https://via.placeholder.com/300x444?text=Image not available('
            }
            alt="Movie Poster"
          />
        ) : (
          <img className="activator" src={poster} alt="Movie Poster" />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <div className="card-description d-flex">
          <span className="card-description__type">{type}</span>
          <span className="card-description__year ml-a">{year}</span>
        </div>
      </div>
    </div>
  );
}
