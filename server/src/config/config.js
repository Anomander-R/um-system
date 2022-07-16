require('dotenv').config();

const config = {
    port: process.env.PORT || 5000,
    secret: process.env.JWT_SECRET || 'I am not using this',
    mongo: process.env.MONGO || 'mongodb://localhost:27017/ums'
}

export default config;