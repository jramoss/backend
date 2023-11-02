/* eslint-disable @typescript-eslint/no-explicit-any */
import App from './src/App';
const PORT = process.env.PORT || 33333;

App.server
  .listen(Number(PORT), 'localhost', function () {
    console.log(`Server is running at http://localhost:${PORT}`);
  })
  .on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.log('Error: address already in use');
    } else {
      console.log(err);
    }
  });
