import { useState, useEffect } from 'react';
import axios from 'axios'
import { server } from '../config'

axios.defaults.baseURL = `${server}/api`;

export function useStandards(){
   
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/standards');
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      fetchData();
  }, []);

  return { response, error, loading };
};

export default useStandards;