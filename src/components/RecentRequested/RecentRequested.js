import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

function RecentRequested({requestedVins}){
   const [vins, setVins] = useState(requestedVins);
   const listItems = vins.map((vin) => <li className='list-group-item'>{vin}</li>);
   useEffect(() => {
    setVins(requestedVins)
    console.log(vins)
  }, [requestedVins]);
  return(
    <div>
      <p>Recent requested:</p>
      <ul className="list-group">{ listItems }</ul>
    </div>
  );
}

RecentRequested.propTypes = {};

RecentRequested.defaultProps = {};

export default RecentRequested;
