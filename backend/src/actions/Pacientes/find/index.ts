import { Request, Response, Next } from "restify"
import { session } from "~/database"

async function find(req: Request, res: Response, next: Next) {
  let id = req.params.id
  try {
    const writeQuery = `MATCH (n:Pacientes { id: $id }) RETURN n`
    const writeResult = await session.writeTransaction((tx) =>
      tx.run(writeQuery, { id })
    )

    const paciente = writeResult.records.map(
      (record) => record.get("n").properties
    )

    res.send(paciente[0])
  } catch (err) {
    res.status(400)
  } finally {
    return next()
  }
}

export default {
  action: find,
}
