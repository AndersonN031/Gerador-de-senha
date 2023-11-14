import { useState } from "react"

export default function PasswordGenerator() {
  const [generatedText, setGeneratedText] = useState('')

  function generatePassword(size) {
    const caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdfghijglmnopqstuvwxyz0123456789!@#$%&*.()'
    let password = ''

    for (let i = 0; i < size; i++) {
      const randomIndex = Math.floor(Math.random() * caracters.length)
      password += caracters[randomIndex]
    }

    setGeneratedText(password)
    return password
  }

  function copyToClip(text) {
    navigator.clipboard.writeText(generatedText)
  }

  return { generatePassword, copyToClip, generatedText }
}