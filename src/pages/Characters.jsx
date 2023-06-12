import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../api/api';


const Characters = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(api())
      .then(res => setData(res.data.data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      {data.map((character, i) => (
        <div className="content" key={i}>
          <div className="content-image"> <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}/> </div>
          <div className="content-title">{character.name}</div>
          <div className="content-name">{character.modified}</div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
