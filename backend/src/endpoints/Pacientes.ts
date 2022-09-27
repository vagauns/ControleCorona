import * as Pacientes from "../actions/Pacientes"

const prefixRoute = "/pacientes"

const routes = [
  {
    method: "POST",
    path: "/",
    description: "create new paciente",
    ...Pacientes.create,
  },
  {
    method: "GET",
    path: "/",
    description: "get all pacientes",
    ...Pacientes.findAll,
  },
  {
    method: "DEL",
    path: "/:id",
    description: "remove paciente",
    ...Pacientes.remove,
  },
  {
    method: "PATCH",
    path: "/:id",
    description: "update paciente",
    ...Pacientes.update,
  },
]

export default {
  prefixRoute,
  routes,
}
