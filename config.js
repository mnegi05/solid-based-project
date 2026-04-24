import env from './environment.js';

const config = {
    DB_URL: env.POSTGRES.getURI()
}

export default config;