import env from './environment.js';

const config = {
    db: {
        postgres: {
            connection_url: env.MASTER_POSTGRESQL_CONNECTION,
        },
        redis: {
            connection_url: env.REDIS_CONNECTION,
        }
    }
}

export default config;