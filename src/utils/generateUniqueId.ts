import { ITask } from '../App'

export function generateUniqueId(tasks: ITask[]): number {
  const id = Math.random()

  const idAlreadyExists = tasks.find((task) => task.id === id)

  if (idAlreadyExists) {
    generateUniqueId(tasks)
  }

  return id
}
