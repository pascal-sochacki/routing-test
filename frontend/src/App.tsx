import React, { useState } from 'react';

function App() {

  const [url, setUrl] = useState<string>();

  function request(params: { method: string }) {
    if (url) {
      fetch(url + '/api', params)
        .then(res => res.json())
        .then(data => console.log(data))
    } else {
      fetch('/api', params)
        .then(res => res.json())
        .then(data => console.log(data))
    }

  }

  return (
    <div>
      <input type="text" onChange={ (e) => setUrl(e.target.value as string) }/>
      <div>
        { url }
      </div>
      <div>
        Get
        <button onClick={ () => {
          request({
            method: 'GET',
          });
        } }>
          Click me
        </button>
      </div>
      <div>
        Post
        <button onClick={ () => {
          request({
            method: 'POST',
          })
        } }>Click me</button>
      </div>
      <div>
        Put
        <button onClick={ () => {
          request({
            method: 'PUT'
          })
        } }>Click me</button>
      </div>
      <div>
        Delete
        <button onClick={ () => {
          request({
            method: 'DELETE'
          });
        } }>Click me</button>
      </div>
    </div>
  );
}

export default App;
