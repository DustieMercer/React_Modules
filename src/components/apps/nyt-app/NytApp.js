import React, {useState} from 'react';

const NytApp = () => {

const [ search, setSearch ] = useState('');
const [ startDate, setStartDate ] = useState('');
const [ endDate, setEndDate ] = useState('');
const [ pageNumber, setPageNumber ] = useState(0);
const [ results, setResults ] = useState([]); 
    
return(
        <div className="main">
            <div className="mainDiv">
            </div>
        </div>
      )
};

export default NytApp;