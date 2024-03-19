cd "C:\_node\orteka\client"

call pm2 startOrRestart ecosystem.config.js

cd "C:\_node\orteka\server"

call pm2 startOrRestart ecosystem.config.js