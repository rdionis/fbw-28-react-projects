import React, { useState } from "react";
import Image1 from "../img/img1.jpg";
import Image2 from "../img/img2.jpg";
import Image3 from "../img/img3.jpg";

const DancingVideos = () => {
  const [videos] = useState([
    { videoTitle: "", videoImage: "" },
    {
      videoTitle: "The Mask",
      videoImage: (
        <a href="https://youtu.be/3LdExQE6AZk" target="_blank">
          <img src={Image1} alt="still of video the mask" />
        </a>
      ),
    },
    {
      videoTitle: "Homem Automatico",
      videoImage: (
        <a href="https://youtu.be/l-YkY-_29s8" target="_blank">
          <img src={Image2} alt="still of video homem automatico" />
        </a>
      ),
    },
    {
      videoTitle: "Hush Hush",
      videoImage: (
        <a
          href="https://www.facebook.com/raquel.dionisio.98/videos/375796392754"
          target="_blank"
        >
          <img src={Image3} alt="still of video hush hush" />
        </a>
      ),
    },
  ]);
  const incrementCount = () => {
    if (counter >= 3) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };
  const [counter, setCounter] = useState(0);
  return (
    <div className="video-container">
      <button onClick={incrementCount}>dance videos</button>
      <h3 className="video-title">{videos[counter].videoTitle}</h3>
      <p className="video-image">{videos[counter].videoImage} </p>
    </div>
  );
};
export default DancingVideos;
