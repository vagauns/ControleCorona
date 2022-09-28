import { Request, Response, Next } from "restify"
import { session } from "../../../database"
import { IPacientes } from "../../../interfaces/Model/Pacientes"

async function create(req: Request, res: Response, next: Next) {
  try {
    const {
      type,
      cpf,
      name,
      tested,
      result,
      symptoms,
      travels,
      contacts,
      deseases,
    }: IPacientes = req.body

    let data = new Date()
    let id = parseInt(req.body.id).toString()
    let created_at = data.toString()

    const writeQuery = `CREATE (t1:Pacientes {
      id: $id, type: $type, cpf: $cpf, name: $name, tested: $tested, result: $result, symptoms: $symptoms, travels: $travels, contacts: $contacts, deseases: $deseases, created_at: $created_at })
      return t1`

    const writeResult = await session.writeTransaction((tx) =>
      tx.run(writeQuery, {
        id,
        type,
        cpf,
        name,
        tested,
        result,
        symptoms,
        travels,
        contacts,
        deseases,
        created_at,
      })
    )

    writeResult.records.forEach((record) => {
      const paciente = record.get("t1")
      console.log("Create new task", paciente)
    })

    res.send({ success: true })
  } catch (err) {
    res.status(400)
    res.send("Erro on create new tasks")
  } finally {
    return next()
  }
}

export default {
  action: create,
}
