import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/VideoCard.module.css';

const VideoCard = ({ id, title, description, thumbnail }) => {
  return (
    <div className={styles.card}>
      <Link to={`/video/${id}`} className={styles.thumbnailLink}>
        <img 
          src={thumbnail || 'https://via.placeholder.com/320x180'} 
          alt={title} 
          className={styles.thumbnail}
        />
      </Link>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link to={`/video/${id}`} className={styles.titleLink}>{title}</Link>
        </h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;