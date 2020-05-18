import React, { useContext } from 'react';
import { Context } from '../../../../Components/Context/Context';
import './PhotographyShowcase.css';

export default function PhotographyShowcase() {
  const { instagramData } = useContext(Context);

  return (
    <>
      <ul className='gallery'>
        {instagramData.graphql.user.edge_owner_to_timeline_media.edges.map(
          (item) => {
            return (
              <li>
                <a
                  href={`https://www.instagram.com/p/${item.node.shortcode}/`}
                  target='blank_'
                >
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
                </a>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
}
