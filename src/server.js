import express from 'express';
import http from 'http';
import cors from 'cors';
import {} from 'dotenv/config';
import bodyParser from 'body-parser';
import mainRoutes from './routes/main';

const app = express();

let { PORT } = process.env;

app.use(cors());
app.use(bodyParser({ limit: "50mb" }));
app.use("/smartq",mainRoutes);

const httpServer = http.createServer(app);
httpServer.listen(PORT,err=>{
    return err
        ? console.log("app:server", `Failed to start server instance %O`, err)
        : console.log("app:server", `HTTP listening on port ${PORT}`);
})


