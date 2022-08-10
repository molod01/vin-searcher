import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function RecentlyRequested({requestedVins, handler}){
   const [vins, setVins] = useState(requestedVins);
   const listItems = vins.map((vin) => <li onClick={handler} className='list-group-item'>{vin}</li>);
   useEffect(() => {
    setVins(requestedVins)
  }, [requestedVins]);
  return(
    <div className='mb-2'>
      <h4>Recently requested</h4>
      <ul className="list-group">{ listItems }</ul>
    </div>
  );
}

RecentlyRequested.propTypes = {};

RecentlyRequested.defaultProps = {};

export default RecentlyRequested;
