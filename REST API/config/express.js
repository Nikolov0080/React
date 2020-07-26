const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'secret';



module.exports = (app) => {
    app.use(cors({
        exposedHeaders:"Auth"
    }));

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json()); // important
    app.use(cookieParser(secret));
};