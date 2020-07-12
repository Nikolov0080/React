const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: `mongodb+srv://Vipper404:Apofis123123@cluster0-nudca.mongodb.net/origami?retryWrites=true&w=majority`,
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];