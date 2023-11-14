// importando...
import { useState } from 'react'
import ComponentButton from './Components/ButtonComponents/ButtonComponent'
import styles from "./App.module.css"

function App() {
  // Declarando um estado chamado "generatePassword" usando useState para armazenar a senha gerada...
  const [generatePassword, setGeneratedPassword] = useState('')

  // Seguindo... Temos a função que recebe uma senha como parâmetro e atualiza o estado "generatePassword com essa senha"...
  const handleGenerator = (password) => {
    setGeneratedPassword(password)
  }

  // Usando o return para criar uma estrutura HTML que representa a interface...
  return (

    <div className={styles.container}>

      <div className={styles.title}>
        <h1>Gerador de senhas</h1>
      </div>

      <div className={styles.btnGroup}>
        <ComponentButton onGenerator={handleGenerator}/>
      </div>

      <div className={styles.result}>
        <input type="text" readOnly placeholder={generatePassword} className={styles.inputSection}/>
        </div>

    </div>
  )
}

export default App
