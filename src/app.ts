import { app } from './config/server'

if (!process.env.APP_PORT) {
  process.exit(1)
}

const APP_PORT: number = +process.env.APP_PORT

app.listen(APP_PORT, async () => console.log(`Listening on port ${APP_PORT}`))
