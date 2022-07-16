import config from './config/config';
import app from './app';

app.listen(config.port, err =>{
    if (err) return console.log(err);
    console.log(`Server started on port ${config.port}`)
});