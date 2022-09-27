import * as Restify from "restify"
import { includeRoutePrefix } from "./includeRoutePrefix"
import ExamesRoutes from "../endpoints/Exames"
import PacientesRoutes from "../endpoints/Pacientes"

const server = Restify.createServer()

export const routes = [
  ...includeRoutePrefix(ExamesRoutes),
  ...includeRoutePrefix(PacientesRoutes),
]

for (const route of routes) {
  const { path, action, method, middlewares = [], auth } = route
  console.log(path)
  const methodLowerCase = method.toLowerCase() as
    | "all"
    | "get"
    | "post"
    | "put"
    | "delete"
    | "patch"
    | "options"
    | "head"

  server[methodLowerCase](path, ...middlewares, action)
}

server.get("*", (req, res, next) =>
  next({
    status: 404,
    message: "RESOURCE_NOT_FOUND",
  })
)

export default server
