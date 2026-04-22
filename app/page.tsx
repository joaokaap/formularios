'use client'
import React, { useState } from "react";

export default function Home() {
  // Declarar as variaveis
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [idade, setIdade] = useState("")
  const [nascimento, setNascimento] = useState("")
  const [cnh, setCNH] = useState(false)
  const [altura, setAltura] = useState("")
  const [cidade, setCidade] = useState("")
  // Funções
  function enviarFormulario(e: React.FormEvent) {
    // React.FormEvent
    e.preventDefault()
    console.log(e)
    alert('Formulario Enviado')
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <form action="" method="" onSubmit={enviarFormulario}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input type="text"
              placeholder="Digite o seu Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              name="nome"
              id="nome"
            />
          </div>
          <div>
            <label htmlFor="E-Mail">Email</label>

            <input type="text"
              placeholder="Digite o seu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="Idade">Idade</label>

            <input type="number"
              placeholder="Digite o sua idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              name="idade"
              id="idade"
            />
          </div>
          <div>
            <label htmlFor="nascimento">Data de Nascimento</label>

            <input type="date"
              placeholder="Digite o sua data de nascimento"
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
              name="nascimento"
              id="nascimento"
            />
          </div>
          <div>
            <label htmlFor="cnh">CNH</label>

            <input type="checkbox"
              placeholder="Você possui CNH?"
              checked={cnh}
              onChange={(e) => setCNH(e.target.checked)}
              name="cnh"
              id="cnh"
            />
          </div>
          <div>
            <label htmlFor="altura">Altura</label>

            <input type="text"
              placeholder="Digite o sua altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              name="altura"
              id="altura"
            />
          </div>

          <div>
            <label htmlFor="cidade">Cidade</label>
            <select name="cidade" id="cidade" value={cidade}
              onChange={(e) => setCidade(e.target.value)}>
              <option value="">Selecione uma Cidade</option>
              <option value="castro">Castro</option>
              <option value="tibagi">Tibagi</option>
              <option value="pirai">Piraí</option>

            </select>
            <div>
              <button type="submit">Enviar</button>
              <button type="reset">Limpar</button>
            </div>
          </div>

        </form>
        <h3>{nome}</h3>
      </main>
    </div>
  );
}
