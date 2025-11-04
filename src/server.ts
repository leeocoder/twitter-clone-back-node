import cors from 'cors';
import exress, { urlencoded } from 'express';
import helmet from 'helmet';

const server = exress();
server.use(helmet());
server.use(cors());


server.use(urlencoded);
server.use(exress.json());

server.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor is on ${process.env.BASE_URL}`);
});
