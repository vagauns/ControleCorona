import { Request, Response, Next } from "restify"
import { IPacientes } from "../../../interfaces/Model/Pacientes"
import { session } from "~/database"

async function update(req: Request, res: Response, next: Next) {
  try {
    const data = req.params
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

    const id = parseInt(data.id).toString()

    const writeQuery = `MATCH (n:Pacientes { id: $id })
                        SET n.id = $id
                        SET n.type = $type
                        SET n.cpf = $cpf
                        SET n.name = $name
                        SET n.tested = $tested
                        SET n.result = $result
                        SET n.symptoms = $symptoms
                        SET n.travels = $travels
                        SET n.contacts = $contacts
                        SET n.deseases = $deseases
                        RETURN n`

    await session.writeTransaction((tx) =>
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
      })
    )

    res.send({ success: true })
  } catch (err) {
    console.log(err)
    res.status(400)
  } finally {
    return next()
  }
}

export default {
  action: update,
}
