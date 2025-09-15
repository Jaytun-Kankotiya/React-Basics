import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name) {
          setError(error);
        }
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error, useEffect };
}

export default useFetch;
