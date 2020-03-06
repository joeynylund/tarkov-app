import React from 'react';

const FetchImage = (props) => {
  fetch('https://nylund.dev/tarkov/public/_/files/' + props.id + '?access_token=1234')
  .then(response => response.json())
  .then(data => {
    return (
    <img src={data.data.data.full_url} alt="" />
  )})
    };

export default FetchImage;