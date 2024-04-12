import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios';

import './App.css'

function App() {
  const baseUrl = "https://hikmah.harizasyraf.com";
  const [loading, setLoading] = useState(true);
  const [advice, setAdvice] = useState([]);

  const fetchAdvice = async () => {
    const { data } = await axios.get(`${baseUrl}/advice`);

    setAdvice(data);
    console.log(advice);
    setLoading(false);
  }

  useEffect(() => {
    
  }, [advice]);

  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <h1 className='mt-5 mb-5 text-center text-white'>Al-Hikmah</h1>

          { !loading ? (
          <div className='mt-5 mb-5 px-5 pt-5 pb-3 bg-white rounded w-75 border border-info border-3'>
            <div className='d-flex gap-3 justify-content-center'>
              <h2>⊱ </h2> <p className='fs-3 fst-italic the-quote ps-2'>{advice.quote}</p> <h2> ⊰</h2>
            </div>
            <div className='d-flex gap-2 fw-bolder fs-5 justify-content-end'>
              <p>༄</p> <p>{advice.quotee}</p>
            </div>
          </div> ) : ( 
            ''
        )}

        <Button variant='success' onClick={fetchAdvice}>Give me an advice</Button>
      </div>
    </>
  )
}

export default App
