import express from 'express';
import cors from 'cors';
import DB_connect from './bdConnection.js';
import UserRouter from './routes/user.routes.js';
import ChatRouter from './routes/chat.routes.js';
import MessageRoutes from './routes/message.routes.js';


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})

// adding user routes

app.use('/api/users',UserRouter );
app.use('/api/chats',ChatRouter);
app.use('/api/messages',MessageRoutes);

const port = 5000

// Connect to MongoDB and starting server
try {

    DB_connect();

    app.listen(port, () => {
        console.log("server listening http://localhost:" + port);
    });

}
catch (err) {
    console.log(err);
}