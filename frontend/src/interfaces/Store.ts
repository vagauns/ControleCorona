import { IPacientes } from "./Pacientes"
import { IExames } from "./Exames"

export interface RootState {
  pacientes: IPacientes[]
  exames: IExames[]
}
