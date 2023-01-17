import  express from 'express';


export default  class Server {
    
    private app = express();

    initServer () {
        this.app.listen(3000, ()=> console.log('Server is running on port 3000'));
        this.app.use(require('../routes/index'));
    }

}
