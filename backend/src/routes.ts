import { Router, request, response, Request, Response} from 'express'
import { deleteAluno, getAluno, getAlunos, matriculaAluno, saveAluno, updateAluno } from './controller/AlunosController'
 
const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma!' })
})

routes.get('/alunos', getAlunos)
routes.post('/alunos', saveAluno)
routes.get('/alunos/:id', getAluno)
routes.put('/alunos/:id', updateAluno)
routes.delete('/alunos/:id', deleteAluno)
routes.patch('/alunos/:id', matriculaAluno)
 
export default routes