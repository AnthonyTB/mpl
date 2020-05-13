import React, { useContext } from 'react';
import { Context } from '../../../../Components/Context/Context';
import { Link } from 'react-router-dom';
import './PhotographyShowcase.css';

export default function PhotographyShowcase() {
  const { instagramData } = useContext(Context);

  return (
    <>
      <h1>Photography</h1>
      <hr />
      <ul className='gallery'>
        {instagramData.graphql.user.edge_owner_to_timeline_media.edges.map(
          (item) => {
            return (
              <li>
                <Link to=''>
                  <img
                    src={item.node.display_url}
                    alt={item.node.accessibility_caption}
                  />
                  <div className='likes-container'>
                    <i class='fas fa-heart'></i>{' '}
                    <span className='likes'>
                      {item.node.edge_liked_by.count}
                    </span>
                  </div>
                </Link>
              </li>
            );
          }
        )}
      </ul>
      <div className='route-btn'>
        <Link to='/Photography'>Learn More</Link>
      </div>
    </>
  );
}