import React from 'react';
import './styles.scss';

function Album(props) {
  const { album } = props;
  return (
    <div className="album album--active">
      <div className="album__thumbnail album__thumbnail--active">
        <img src={album.thumbnailUrl} alt={album.name} />
      </div>
      <p className="album__name">{album.name}</p>
    </div>
  );
}

export default Album;
