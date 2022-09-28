import { IPacientes } from "./Pacientes"

export interface IExames {
  id?: number
  paciente: IPacientes
  resultado: string
}
