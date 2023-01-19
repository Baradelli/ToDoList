import styles from './styles.module.scss'
import clipboard from '../../assets/clipboard.svg'

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="clipboard" />

      <div>
        <h1>Você ainda não tem tarefas cadastradas</h1>
        <h2>Crie tarefas e organize seus itens a fazer</h2>
      </div>
    </div>
  )
}
