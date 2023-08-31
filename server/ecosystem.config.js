module.exports = {
    apps : [
        {
            name: "Orteka Server",
            exec_mode: 'cluster',
            instances: 1,
            script: './_ts-build/master-server.js',
            // args: '-r dotenv/config',
            env_production: {
                MODE: "PRODUCTION_HTTPS"
            }
        }
    ]
}
