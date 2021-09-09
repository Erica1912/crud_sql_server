import express from "express";
import config from "./config";
import UsuarioRouters from "./routes/UsuarioRoutes"
const app = express()


app.set('port', config.port)
app.use(UsuarioRouters)

export default app