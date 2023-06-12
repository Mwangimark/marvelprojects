import React, { useEffect, useState } from 'react'
import marvelfooter from '../Images/marvelfooter.jpg'
import marvelfooter1 from '../Images/marvelfooter1.jpg'
import marvelfooter2 from '../Images/marvelfooter2.jpg'

const Headerpic = () => {
  const [currentImage, setCurrentImage] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage % 3) + 1);
    }, 3000);

  return () => {
      clearInterval(interval);
  };
}, []);

const getImagePath = () => {
  switch (currentImage) {
    case 1:
      return marvelfooter;
    case 2:
      return marvelfooter1;
    case 3:
      return marvelfooter2;
    default:
      return '';
  }
};

return (
  <div className="headerpic">
    <div className="headerpics">
      <img src={getImagePath()} alt="" />
    </div>
  </div>
);
};

export default Headerpic