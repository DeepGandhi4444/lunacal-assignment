import React, { useState } from 'react';

/**
 * Gallery component
 *
 * @returns {React.ReactElement} The rendered gallery component
 */
const Gallery = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  /**
   * All the images to display in the gallery
   * @type {Array<string>}
   */
  const imageSources = [
    '/images.jpg',
    '/images.jpg',
    '/images.jpg',
    '/images.jpg',
  ];

  /**
   * The number of images to show in the gallery
   * @type {number}
   */
  const imagesToShow = 3;
  
  /**
   * Handles the previous image button click
   * Decreases the image index if it is not at the beginning of the array
   * @returns {void}
   */
  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? imageSources.length - imagesToShow : prevIndex - 1));
  };

  /**
   * Handles the next image button click
   * Increases the image index if it is not at the end of the array
   * @returns {void}
   */
  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex >= imageSources.length - imagesToShow ? 0 : prevIndex + 1));
  };

  /**
   * Handles the button press event
   * Sets the active button to the one pressed
   * @param {string} button - The button that was pressed ('left' or 'right')
   * @returns {void}
   */
  const handleButtonPress = (button) => {
    setActiveButton(button);
  };

  /**
   * Handles the button release event
   * Resets the active button
   * @returns {void}
   */
  const handleButtonRelease = () => {
    setActiveButton(null);
  };

  return (
    <div className='card gallery '>
      <div className='absolute'>
        <img src="/QuestionMark.png" className='mb-[100px]' alt="" />
        <img src="/FramesCubes.png" alt="" />
      </div>
      <div className="galleryNav">
        <div className='galleryLogo'>Gallery</div>
        <div className="galleryUtils">
          <li className='addImage'>+ ADD IMAGE</li>

          {/* Left Arrow Button */}
          <li
            className={activeButton === 'left' ? 'pressed' : 'arrows'}
            onMouseDown={() => handleButtonPress('left')}
            onMouseUp={handleButtonRelease}
            onClick={handlePrevImage}
          >
            <img src={activeButton === 'left' ? '/left.png' : ' /leftArrow.png'} alt='Left Arrow'/>
          </li>

          {/* Right Arrow Button */}
          <li
            className={activeButton === 'right' ? 'pressed' : 'arrows'}
            onMouseDown={() => handleButtonPress('right')}
            onMouseUp={handleButtonRelease}
            onClick={handleNextImage}
          >
            <img src={activeButton === 'right' ? '/right.png' : ' /rightArrow.png'} alt='Right Arrow'/>
          </li>
        </div>
      </div>

      <div className="galleryImages">
        <div className="images" style={{ transform: `translateX(-${imageIndex * 210}px)` }}>
          {imageSources.map((src, index) => (
            <img key={index} src={src} alt={`img ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Gallery;
