import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <h1>
      NewCycleForm: {activeCycle}
      <button
        onClick={() => {
          setActiveCycle(activeCycle + 1)
        }}
      >
        Alterar ciclo ativo
      </button>
    </h1>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext)

  return <h1>Countdown: {activeCycle}</h1>
}

export function ContextTest() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <div>
      <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
        <NewCycleForm />
        <Countdown />
      </CyclesContext.Provider>
    </div>
  )
}
