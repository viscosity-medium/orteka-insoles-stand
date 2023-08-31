module.exports = {
    apps : [
        {
          name   : "Orteka Client",
          exec_mode: 'cluster',
          instances: 1,
          script: 'node_modules/next/dist/bin/next',
          args: 'start -p 5000',
        },
    ]
}
