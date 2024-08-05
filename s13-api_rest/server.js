/*
import falaOi from './app';

falaOi();
*/

const port = 3001;

import app from './app';
app.listen(port, () =>{
  console.log('');
  console.log(`escutando na porta ${port}`);
  console.log(`CTRL + Click em http://localhost:${port}`);
});
