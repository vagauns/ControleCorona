import * as Exames from "../actions/Exames"

const prefixRoute = "/exames"

const routes = [
  {
    method: "POST",
    auth: "basic",
    path: "/",
    description: "create exame",
    ...Exames.create,
  },
  {
    method: "GET",
    auth: "basic",
    path: "/",
    description: "get all exames by paciente",
    ...Exames.findAll,
  },
]

export default {
  prefixRoute,
  routes,
}
