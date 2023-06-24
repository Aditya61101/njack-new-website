import { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import images  from '@/data/images';
import { Footer, Header } from '@/components';
import styles from '../styles/gallery.module.css';
import Background from '@/components/Background';

const gallery = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);
  return (
    <>
      <>
      <Header selected={'Gallery'} />
        <div className={styles.galleryContainer}>
          <Background/>
          <Gallery images={images} onClick={handleClick} enableImageSelection={false}/>
          {!!currentImage && (
            <Lightbox
              mainSrc={currentImage.original}
              imageTitle={currentImage.caption}
              mainSrcThumbnail={currentImage.src}
              nextSrc={nextImage.original}
              nextSrcThumbnail={nextImage.src}
              prevSrc={prevImage.original}
              prevSrcThumbnail={prevImage.src}
              onCloseRequest={handleClose}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
            />
          )}
        </div>
      </>
      <Footer />
    </>
  );
};

export default gallery;
