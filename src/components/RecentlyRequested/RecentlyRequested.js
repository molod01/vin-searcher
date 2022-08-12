import { React, useState, useEffect } from 'react';

function RecentlyRequested({requestedVins, handler}){
   const [vins, setVins] = useState(requestedVins);
   const listItems = vins.map((vin) => <li style={{cursor: "pointer"}} key={vin} onClick={handler} className='list-group-item'>{vin}</li>);
   useEffect(() => {
    setVins(requestedVins)
  }, [requestedVins]);

  if(vins.length > 0){
    return(
      <div className='mt-2 text-center'>
        <h6>Recently requested</h6>
        <ul className="list-group">{ listItems }</ul>
      </div>
    );
  }
}

export default RecentlyRequested;
