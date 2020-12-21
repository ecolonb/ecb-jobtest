require('dotenv').config();
import server from './app';
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
     console.log(`server is listening on ${PORT}`);
  });