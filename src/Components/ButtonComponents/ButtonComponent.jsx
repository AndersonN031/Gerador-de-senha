import { useState } from "react";
import PasswordGenerator from "../hooks/useGeneratorPassword";
import styles from "./styles.module.css"

// criando um componente button...
export default function ComponentButton( {onGenerator} ) {

  // Retornando um objeto com duas funções desestruturadas onde serão atribuídas às constantes "generatePassword" e "copyToClip"...
  const { generatePassword,copyToClip } = PasswordGenerator()

  // Temos também o estado "copy" com o valor "Copiar" e "setCopied" que será usada para atualizar o valor desse estado.
  const [ copy, setCopied ] = useState('Copiar')

  // Aqui vamos receber a função "handleGeneratePassword" como uma arrow function, fazendo com que ela gere uma senha com o tamanho 12 caracteres. Em seguida, ela chama o parâmetro "onGenerator" para passar a senha gerada.

  const handleGeneratePassword = () => {
    const password = generatePassword(12)
    onGenerator(password)
    // o setCopied vai ser chamado dentro dessa função para que ao clicar no button "gerar" o "copiado!" volte para "Copiar"
    setCopied("Copiar")

  }
  
  //  A função handleClick vai servir para copiar a senha para área de transferência e em seguida atualizar o 'copy' para "Copiado!"
  const handleClick = () => {
    copyToClip()
    setCopied("Copiado!")
  }

  // Retornando uma estrutura Html
  return (
    <>
    <button className={styles.btn} onClick={handleGeneratePassword}>Gerar</button>
    <button className={styles.btn} onClick={handleClick}>{copy}</button>
    </>
  )
}