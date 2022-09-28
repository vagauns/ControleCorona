import { http } from "@/config/http"
import { RootState } from "@/interfaces/Store"
import { IExames } from "@/interfaces/Exames"
import { IPacientes } from "@/interfaces/Pacientes"

export default {
  async getPacientes(state: RootState) {
    const { data } = await http.get("/pacientes/")
    state.pacientes = data
  },
  async getPaciente(state: RootState, id: string) {
    const { data } = await http.get("/pacientes/" + id)
    state.pacientes = data
  },
  async addPaciente(state: RootState, pacientes: IPacientes) {
    const payload = {
      id: new Date().getTime(),
      ...pacientes,
    }

    await http.post("/pacientes/", payload)
  },
  async deletePaciente(state: RootState, id: string) {
    await http.delete(`/pacientes/${id}`)
    const { data } = await http.get("/pacientes/")
    state.pacientes = data
  },
  async editPaciente(state: RootState, pacientes: IPacientes) {
    await http.patch(`/pacientes/${pacientes.id}`, pacientes)
  },
}
