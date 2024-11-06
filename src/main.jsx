import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import axios from 'axios';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <script src="https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js"></script>
      const serverUrl = 'http://localhost:8081';
      second api dosn't work properly 
      axios.get(`${serverUrl}/api/example`)
        .then(function (response) {
          console.log(response.data)
        });
        .catch(function (error) {
          console.error(error)
        }); */}
  </StrictMode>
);