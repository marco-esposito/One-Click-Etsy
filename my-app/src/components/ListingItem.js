import React from 'react';

const ListingItem = (props) => {
  return (
    <div className="ListingItem">
      <a
        key={props.listing.listing_id}
        href="#"
        onClick={() => {props.onSelectListing(props.listing)}}
      >
        <img
          src={props.listing.MainImage.url_170x135}
          alt={props.listing.title.substr(0,80)}
        />
        <div>
          <small className="description">
            {props.listing.title.substr(0,80)}...
          </small>
        </div>
      </a>
    </div>
  )
}

export default ListingItem
