import React, { useState } from 'react';

/* this is a Bad method ngl. Use this for when you want to test the connenction between the front and back-end */
function App() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch('http://localhost:3000/api/getAll')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Bro the network is so chopped big dawg...');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <div>
      <h1>TaskMaster</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;